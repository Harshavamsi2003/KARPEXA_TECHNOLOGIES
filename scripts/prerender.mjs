/* =====================================================================
   PRERENDER
   Runs after `vite build` and `vite build --ssr`.

   For every route in src/seo/routes.js it renders the React tree to HTML,
   injects that route's title, description, canonical, Open Graph tags and
   JSON-LD, then writes dist/<route>/index.html.

   Why this matters: Google's sitelinks, rich results and reliable indexing
   all depend on the crawler receiving real markup for each URL rather than
   an empty <div id="root">. This script is what produces that.
   ===================================================================== */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);
const { routes, buildJsonLd, SITE_URL } = await import(
  pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href
);

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

/* ---------------------------------------------------------------------
   SITEMAP DATES  (lastmod)

   <lastmod> tells Google when a page's CONTENT last changed. It must not
   change on every deploy. If all sixteen URLs claim a new date every time
   you push a CSS tweak, Google learns the field is meaningless and starts
   ignoring it — which is the opposite of what a sitemap is for.

   So the date is set by hand here instead of being generated.

   WHEN TO EDIT THIS:
     You rewrote real copy on a page  ->  update the date
     You changed styling, fixed a bug,
     adjusted layout, redeployed      ->  leave it alone

   Format is YYYY-MM-DD. Never put a future date.
   --------------------------------------------------------------------- */

/* The date used for any page not listed in the overrides below. */
const DEFAULT_LASTMOD = '2026-09-03';

/* Per-page dates. Add an entry only when that one page's copy changes,
   so the other fifteen keep their older, honest dates.
   Example:
     '/capabilities': '2026-09-10',
     '/company': '2026-08-18', */
const LASTMOD = {
  /* /capabilities was rebuilt as a single consolidated page (all ten
     capabilities as sections) on 2026-09-17 — the ten separate
     /capabilities/<slug> pages no longer exist. */
  '/capabilities': '2026-09-17',
};

const lastmodFor = (route) => route.lastmod || LASTMOD[route.path] || DEFAULT_LASTMOD;

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const OG_IMAGE = `${SITE_URL}/images/og/karpexa-og.jpg`;

function headFor(route) {
  const url = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
  const ld = JSON.stringify(buildJsonLd(route)).replace(/</g, '\\u003c');

  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.keywords ? `<meta name="keywords" content="${esc(route.keywords)}" />` : '',
    `<meta name="robots" content="${route.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Karpexa Technologies" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json" data-seo="jsonld">${ld}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ');
}

/* String.replace() treats $$, $&, $` and $' inside a replacement STRING as
   special substitution codes, so a literal "$$" in a price, a title or any
   body copy would silently come out as "$". Passing a FUNCTION instead
   turns that off — whatever the function returns is inserted verbatim.
   Do not change these two arrow functions back into plain strings. */
function inject(route, appHtml) {
  return template
    .replace(/<!--head-->[\s\S]*?<!--\/head-->/, () => headFor(route))
    .replace('<!--app-->', () => appHtml);
}

async function writePage(route, appHtml) {
  const out =
    route.path === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, route.path.replace(/^\//, ''), 'index.html');

  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, inject(route, appHtml), 'utf8');
  return path.relative(dist, out);
}

/* ---------- Render every route ---------- */
const written = [];
for (const route of routes) {
  const html = render(route.path);
  written.push(await writePage(route, html));
}

/* ---------- 404 ---------- */
const notFound = {
  path: '/404',
  title: 'Page not found | Karpexa Technologies',
  description: 'That page does not exist. Explore Karpexa’s IT capabilities instead.',
  keywords: '',
  noindex: true,
  graph: [],
};
await fs.writeFile(path.join(dist, '404.html'), inject(notFound, render('/404-not-found')), 'utf8');

/* ---------- sitemap.xml ---------- */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${lastmodFor(r)}</lastmod>
    <changefreq>${r.changefreq || 'monthly'}</changefreq>
    <priority>${r.priority || '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');

/* ---------- robots.txt ---------- */
await fs.writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
  'utf8'
);

console.log(`\nPrerendered ${written.length} routes:`);
written.forEach((w) => console.log(`  · ${w}`));
console.log('  · 404.html\n  · sitemap.xml\n  · robots.txt');
console.log(`\nSitemap lastmod: ${DEFAULT_LASTMOD} (edit DEFAULT_LASTMOD / LASTMOD in scripts/prerender.mjs)\n`);

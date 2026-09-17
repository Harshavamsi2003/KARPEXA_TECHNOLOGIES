import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMeta, buildJsonLd, SITE_URL, OG_IMAGE } from './routes';

/**
 * Keeps <head> correct during client-side navigation.
 *
 * The first paint of every URL already has the right tags baked in by
 * scripts/prerender.mjs — this only handles what happens after the user
 * starts clicking, plus anything a crawler picks up post-hydration.
 */
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = getRouteMeta(pathname);
    const url = `${SITE_URL}${pathname === '/' ? '' : pathname.replace(/\/+$/, '')}`;

    document.title = route.title;

    setMeta('name', 'description', route.description);
    setMeta('name', 'keywords', route.keywords);
    setMeta('name', 'robots', route.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    setMeta('property', 'og:title', route.title);
    setMeta('property', 'og:description', route.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Karpexa Technologies');
    setMeta('property', 'og:image', OG_IMAGE);
    setMeta('property', 'og:locale', 'en_IN');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', route.title);
    setMeta('name', 'twitter:description', route.description);
    setMeta('name', 'twitter:image', OG_IMAGE);

    // Canonical
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;

    // Structured data — replace the block, never append a second one
    let ld = document.head.querySelector('script[data-seo="jsonld"]');
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.setAttribute('data-seo', 'jsonld');
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(buildJsonLd(route));
  }, [pathname]);

  return null;
}

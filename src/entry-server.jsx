import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

/** Called by scripts/prerender.mjs once per route at build time. */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

export { routes } from './seo/routes';
export { getRouteMeta, buildJsonLd, SITE_URL } from './seo/routes';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles scroll position on every route change.
 *
 * No hash  -> jump to the top of the new page instantly, same as before.
 * Hash present (e.g. /capabilities#cloud) -> smoothly scroll to that
 * element instead. The offset that keeps it clear of the fixed navbar
 * comes from `scroll-padding-top` on <html> (see global.css) rather than
 * being duplicated here, so there is one source of truth for the value.
 *
 * React Router's <Link> never scrolls to a hash on its own — not on a
 * cross-page navigation, and not even when the hash changes while
 * already on the same page — which is why the capability nav links did
 * nothing when clicked. This is what makes that work everywhere.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      return;
    }

    const id = hash.slice(1);

    // The target section may not exist in the DOM yet on the first paint
    // after a cross-page navigation, so retry briefly instead of firing
    // once and silently failing.
    let attempts = 0;
    const maxAttempts = 30; // ~1.5s at 50ms — comfortably covers render + layout
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) setTimeout(tryScroll, 50);
    };

    tryScroll();
  }, [pathname, hash]);

  return null;
}
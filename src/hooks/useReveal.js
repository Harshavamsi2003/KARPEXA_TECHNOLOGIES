import { useEffect } from 'react';

/**
 * Reveals `.reveal` elements as they enter the viewport, with a per-parent
 * stagger so grids cascade in. Elements re-arm when they scroll fully out of
 * view, so the motion replays every time a section is revisited rather than
 * firing only once — the page keeps feeling alive on repeat scrolls.
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    // stable per-parent stagger — deliberately generous so a multi-column
    // desktop grid still cascades card-by-card instead of arriving as one
    // block. Mobile's single-column layout already spreads items out via
    // scroll distance; desktop needs a bigger delay budget to read the same.
    const seen = new Map();
    els.forEach((el) => {
      const parent = el.parentElement;
      const i = seen.get(parent) ?? 0;
      seen.set(parent, i + 1);
      if (!el.style.transitionDelay) {
        el.style.transitionDelay = `${Math.min(i * 110, 850)}ms`;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else if (entry.boundingClientRect.top > 0) {
            // only re-arm once the element has fully left below the fold,
            // so it replays on the next scroll-up without flickering mid-view
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
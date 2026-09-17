import { useEffect } from 'react';

/** Freezes page scroll (mobile drawer) without the layout jumping. */
export default function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return;
    const sw = window.innerWidth - document.documentElement.clientWidth;
    const prev = document.body.style.cssText;
    document.body.style.overflow = 'hidden';
    if (sw > 0) document.body.style.paddingRight = `${sw}px`;
    return () => { document.body.style.cssText = prev; };
  }, [locked]);
}

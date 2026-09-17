import { useEffect, useRef, useState } from 'react';

/** Counts a number up once, when the element first scrolls into view. */
export default function useCountUp(target, duration = 1600) {
  const ref = useRef(null);
  // Starts at the final figure so prerendered HTML and no-JS visitors see
  // a real number; the client resets to zero just before animating.
  const [value, setValue] = useState(target);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    setValue(0);

    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return [ref, value];
}

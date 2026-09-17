import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Works out what the navbar is currently sitting on top of.
 *
 * Every section carries data-theme="light|tint|dark|obsidian". We probe the
 * section directly underneath the bar and report whether the nav should use
 * its light-on-dark or dark-on-light treatment — so the navbar recolours
 * itself continuously as you scroll through the page.
 *
 * Returns { tone: 'dark' | 'light', atTop: boolean }
 */
export default function useNavTheme() {
  const [tone, setTone] = useState('dark');
  const [atTop, setAtTop] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    let frame = 0;
    let sections = [];

    const collect = () => {
      sections = Array.from(document.querySelectorAll('[data-theme]'));
    };

    const measure = () => {
      frame = 0;
      setAtTop((window.scrollY || 0) < 30);
      if (!sections.length) collect();

      const navH = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      ) || 78;
      const probe = navH * 0.62;

      let current = null;
      for (const el of sections) {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) current = el;
      }

      const theme = current?.dataset.theme || 'obsidian';
      setTone(theme === 'dark' || theme === 'obsidian' ? 'dark' : 'light');
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    collect();
    measure();
    const t1 = setTimeout(() => { collect(); measure(); }, 60);
    const t2 = setTimeout(() => { collect(); measure(); }, 400);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(t1); clearTimeout(t2);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return { tone, atTop };
}

import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/content';
import '../styles/hero.css';

const DURATION = 6500;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = useCallback((i) => setIdx((i + heroSlides.length) % heroSlides.length), []);
  const next = useCallback(() => setIdx((v) => (v + 1) % heroSlides.length), []);

  useEffect(() => {
    if (paused) return undefined;
    timer.current = setTimeout(next, DURATION);
    return () => clearTimeout(timer.current);
  }, [idx, paused, next]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    heroSlides.forEach((s) => {
      const a = new Image(); a.src = s.img;
      const b = new Image(); b.src = s.imgMobile;
    });
  }, []);

  const slide = heroSlides[idx];

  return (
    <section className="hero" data-theme="obsidian" aria-roledescription="carousel" aria-label="Introduction">
      <div className="hero__media">
        {heroSlides.map((s, i) => (
          <figure className={`hero__slide ${i === idx ? 'is-active' : ''}`} key={s.img} aria-hidden={i !== idx}>
            <picture>
              <source media="(max-width: 768px)" srcSet={s.imgMobile} />
              <img
                src={s.img}
                alt=""
                fetchpriority={i === 0 ? 'high' : 'low'}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </picture>
          </figure>
        ))}
      </div>

      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__topscrim" aria-hidden="true" />
      <div className="hero__thread" aria-hidden="true" />

      <div className="hero__inner">
        <div className="container">
          <div className="hero__copy" key={idx}>
            <p className="hero__kicker">
              <span className="hero__kicker-line" aria-hidden="true" />
              {slide.kicker}
            </p>

            <h1 className="hero__title">
              <span className="hero__line"><span>{slide.lead}</span></span>
              <span className="hero__line"><span className="em">{slide.em}</span></span>
            </h1>

            <p className="hero__sub">{slide.sub}</p>

            <div className="hero__cta">
              <Link to="/capabilities" className="btn btn--primary btn--lg">
                Explore capabilities <span className="arw" aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" className="btn btn--line btn--lg">Talk to an engineer</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__controls">
        <div className="container hero__controls-row">
          <div className="hero__arrows">
            <button className="hero__arrow" onClick={() => go(idx - 1)} aria-label="Previous slide">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="hero__arrow" onClick={() => go(idx + 1)} aria-label="Next slide">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

          <div className="hero__bars">
            {heroSlides.map((s, i) => (
              <button
                key={s.img}
                className={`hero__bar ${i === idx ? 'is-active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === idx}
              >
                <span
                  className="hero__bar-fill"
                  style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

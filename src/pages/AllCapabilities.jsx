import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import CustomersShowcase from '../components/CustomersShowcase';
import FAQ from '../components/FAQ';
import useReveal from '../hooks/useReveal';
import { capabilities } from '../data/content';

/**
 * ALL CAPABILITIES — SINGLE CONSOLIDATED PAGE
 *
 * All ten capabilities live here as anchored sections (#it-infrastructure,
 * #cloud, ...). Navbar, footer and the 404 page all link to
 * /capabilities#<slug>; ScrollToTop.jsx is what actually performs the
 * scroll when a link like that is clicked from anywhere on the site.
 *
 * Two navigation aids live on this page, both built from the site's own
 * design tokens (variables.css) rather than one-off colours:
 *   - a sticky "jump bar" under the main nav, scrollspy-highlighted
 *   - a floating capability switcher that stays on screen while you
 *     scroll and opens a jump menu on click
 *
 * Per-capability content is rendered generically from each capability's
 * own data file — add or edit a capability there and this page updates
 * without any change needed here.
 */
export default function AllCapabilities() {
  useReveal();
  const [activeSlug, setActiveSlug] = useState(capabilities[0]?.slug);
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [pastIntro, setPastIntro] = useState(false);
  const sectionRefs = useRef({});
  const switcherRef = useRef(null);
  const introSentinelRef = useRef(null);

  // Scrollspy: highlight whichever capability section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
        setActiveSlug(top.target.id);
      },
      { rootMargin: '-140px 0px -70% 0px', threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Only show the floating switcher once the reader has scrolled past the
  // intro — no point cluttering the hero with a jump button.
  useEffect(() => {
    const el = introSentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastIntro(!entry.isIntersecting),
      { rootMargin: '-160px 0px 0px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Close the floating switcher on outside click or Escape.
  useEffect(() => {
    if (!switcherOpen) return;
    const onDown = (e) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) setSwitcherOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setSwitcherOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [switcherOpen]);

  const active = capabilities.find((c) => c.slug === activeSlug) || capabilities[0];

  return (
    <>
      {/* ---------------------------------------------------------------
          Scoped styles for the two nav aids on this page. Kept local
          rather than added to a shared stylesheet since nothing else on
          the site needs them, and every colour, radius, easing curve and
          font below is a variable already defined in variables.css —
          nothing here is a one-off colour invented for this page.
          --------------------------------------------------------------- */}
      <style>{`

        .capswitch {
          position: fixed;
          animation: capswitch-mount var(--t-mid) var(--ease-back);
          right: clamp(16px, 3vw, 32px);
          bottom: clamp(16px, 3vw, 32px);
          z-index: 40;
          font-family: var(--font-body);
        }
        .capswitch__btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px 12px 14px;
          border-radius: var(--r-pill);
          background: var(--obsidian-3);
          border: 1px solid var(--hairline-dark);
          box-shadow: var(--shadow-lg);
          color: var(--paper);
          transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
        }
        .capswitch__btn:hover { transform: translateY(-2px); box-shadow: var(--glow); }
        .capswitch__dot {
          width: 9px; height: 9px; border-radius: 50%;
          background: var(--plasma);
          flex: none;
        }
        .capswitch__label {
          font-size: var(--fs-small);
          font-weight: 600;
          max-width: 42vw;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .capswitch__chev {
          width: 14px; height: 14px;
          transition: transform var(--t-fast) var(--ease);
        }
        .capswitch__btn[aria-expanded='true'] .capswitch__chev { transform: rotate(180deg); }

        .capswitch__menu {
          position: absolute;
          right: 0;
          bottom: calc(100% + 12px);
          width: min(280px, 80vw);
          padding: 10px;
          border-radius: var(--r-lg);
          background: var(--obsidian-3);
          border: 1px solid var(--hairline-dark);
          box-shadow: var(--shadow-dark);
          transform-origin: bottom right;
          animation: capswitch-in var(--t-fast) var(--ease-back);
        }
        @keyframes capswitch-mount {
          from { opacity: 0; transform: translateY(14px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes capswitch-in {
          from { opacity: 0; transform: scale(0.92) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .capswitch__menuitem {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          border-radius: var(--r-sm);
          color: var(--paper-2);
          font-size: var(--fs-small);
          text-align: left;
          transition: background var(--t-fast) var(--ease), color var(--t-fast) var(--ease);
        }
        .capswitch__menuitem:hover { background: var(--obsidian-4); color: var(--paper); }
        .capswitch__menuitem[aria-current='true'] { color: var(--aqua); }
        .capswitch__menuitem span.n {
          font-family: var(--font-mono);
          font-size: var(--fs-micro);
          color: var(--paper-muted);
          flex: none;
          width: 20px;
        }

        @media (max-width: 640px) {
          .capswitch { left: 16px; right: 16px; }
          .capswitch__btn { width: 100%; justify-content: space-between; }
          .capswitch__label { max-width: none; flex: 1; }
          .capswitch__menu { left: 0; right: 0; width: auto; }
        }

        @media (prefers-reduced-motion: reduce) {
          .capswitch__btn, .capswitch__chev, .capswitch__menuitem { transition: none; }
          .capswitch, .capswitch__menu { animation: none; }
        }
      `}</style>

      <PageHero
        crumb={[{ label: 'Home', to: '/' }, { label: 'Capabilities' }]}
        kicker="Capabilities"
        title="Everything we build, run and stand behind"
        tagline="Ten practices that cover an estate end to end — from the socket in the wall to the dashboard in the boardroom."
        aside="Most engagements begin with one of these and grow. Nothing here is contingent on buying the rest."
        actions={<Link to="/contact" className="btn btn--primary">Scope an engagement <span className="arw" aria-hidden="true">→</span></Link>}
      />

      {/* ---------------------------------------------------------------
          Unique introduction.
          --------------------------------------------------------------- */}
      <section className="section" data-theme="light">
        <div className="container">
          <div className="about-full reveal">
            <p className="eyebrow eyebrow--accent">What this page covers</p>
            <h2 className="about-full__title">
              Ten practices, built to be bought one at a time
            </h2>
            <p className="lead">
              An IT estate is rarely replaced in one go. It is inherited, patched, outgrown and
              inherited again. So Karpexa is organised as ten separate practices rather than a
              single bundled offer — hardware and data centre work, public cloud, day-to-day
              operations, security, data and reporting, the end-user environment, business
              applications, engineering talent, hardware maintenance, and print and device
              lifecycle.
            </p>
            <p className="lead">
              Each practice has its own engineers, its own scope document and its own commercial
              terms. You can hand us one problem and keep the rest of your estate exactly where it
              is. Nothing on this page requires you to buy anything else on this page.
            </p>
            <p className="lead">
              What connects them is the delivery discipline rather than the product catalogue. The
              same engineers who design a system are the ones who run it afterwards. Capacity, cost
              and recovery targets go in writing before build starts. Documentation, credentials and
              configuration stay yours throughout, so moving a practice back in-house or to another
              firm is a handover rather than a hostage negotiation.
            </p>
            <p className="lead">
              We work with mid-sized organisations and India-based capability centres from our base
              in Bengaluru, with on-site delivery across the country. Jump to any practice below, or
              describe the symptom — the audit finding, the slow application, the bill that keeps
              climbing — and we will point at the one that actually addresses it.
            </p>
          </div>
        </div>
      </section>

      {/* Invisible marker: once this scrolls out of view, the floating
          switcher appears. Placed right before the jump bar. */}
      <div ref={introSentinelRef} aria-hidden="true" />

      {/* ---------------------------------------------------------------
          One section per capability.
          --------------------------------------------------------------- */}
      {capabilities.map((c, i) => (
        <section
          key={c.slug}
          id={c.slug}
          ref={(el) => { sectionRefs.current[c.slug] = el; }}
          className="section"
          data-theme={i % 2 === 0 ? 'light' : 'tint'}
        >
          <div className="container">
            <div className="s-head s-head--split reveal">
              <div>
                <p className="eyebrow eyebrow--accent">
                  {String(i + 1).padStart(2, '0')} / {String(capabilities.length).padStart(2, '0')} — {c.label}
                </p>
                <h2>{c.title}</h2>
                {c.tagline && <p className="lead" style={{ marginTop: 6 }}>{c.tagline}</p>}
              </div>
              <Link to="/contact" className="btn btn--line">
                Discuss this <span className="arw" aria-hidden="true">→</span>
              </Link>
            </div>

            {c.intro?.body && (
              <p className="cap__intro-body reveal">{c.intro.body}</p>
            )}

            {Array.isArray(c.offerings) && c.offerings.length > 0 && (
              <div className="offers" style={{ marginTop: '1.5rem' }}>
                {c.offerings.map((o) => (
                  <article className="offer reveal" key={o.name}>
                    <h3>{o.name}</h3>
                    <p>{o.desc}</p>
                  </article>
                ))}
              </div>
            )}

            {(c.serviceArea || (c.faqs && c.faqs.length > 0)) && (
              <div className="container split" style={{ marginTop: '3rem', padding: 0 }}>
                {c.serviceArea && (
                  <div className="reveal">
                    <p className="eyebrow eyebrow--accent">Where we deliver</p>
                    <p className="lead">{c.serviceArea.text}</p>
                    <p><strong>{c.serviceArea.note}</strong></p>
                  </div>
                )}

                {Array.isArray(c.faqs) && c.faqs.length > 0 && (
                  <div className="reveal reveal--right">
                    <p className="eyebrow eyebrow--accent">Questions</p>
                    <FAQ items={c.faqs} />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="section" data-theme="tint">
        <div className="container">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--accent">How they combine</p>
              <h2>Separate practices, one delivery discipline</h2>
            </div>
            <p className="lead">
              Combining two capabilities with us costs less coordination than buying them from two
              firms — the same engineers, ticket queue and monthly report cover both.
            </p>
          </div>

          <div className="model__grid">
            <article className="model__item reveal">
              <span className="model__k">Start narrow</span>
              <h3>One capability, properly done</h3>
              <p>Most relationships begin with a single problem — a failing service desk, an audit finding, a migration that stalled. We solve that before proposing anything else.</p>
            </article>
            <article className="model__item reveal">
              <span className="model__k">Extend</span>
              <h3>Add without re-onboarding</h3>
              <p>Because your estate is already documented on our side, a second capability starts with context instead of another discovery exercise.</p>
            </article>
            <article className="model__item reveal">
              <span className="model__k">Consolidate</span>
              <h3>One agreement, one invoice</h3>
              <p>Capabilities can be merged onto a single contract with blended commercials, rather than accumulating as separate line items.</p>
            </article>
            <article className="model__item reveal">
              <span className="model__k">Exit</span>
              <h3>Leave whenever you like</h3>
              <p>Each capability can be withdrawn independently on notice, with its documentation, credentials and code handed back intact.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--sm" data-theme="light">
        <div className="container">
          <CustomersShowcase />
        </div>
      </section>

      <ContactCTA
        eyebrow="Where to start"
        title="Not sure which of these you need?"
        text="Describe the symptom rather than the solution — slow systems, a failed audit, a bill that keeps climbing. We will tell you which capability actually addresses it."
        primary="Describe your situation"
        secondary={{ label: 'About Karpexa', to: '/company' }}
      />

      {/* ---------------------------------------------------------------
          Floating capability switcher — stays fixed on screen while
          scrolling, shows the section currently in view, and expands
          into a jump menu on click. Appears only past the intro.
          --------------------------------------------------------------- */}
      {pastIntro && (
        <div className="capswitch" ref={switcherRef}>
          {switcherOpen && (
            <div className="capswitch__menu" role="menu">
              {capabilities.map((c, i) => (
                <a
                  key={c.slug}
                  href={`#${c.slug}`}
                  className="capswitch__menuitem"
                  role="menuitem"
                  aria-current={activeSlug === c.slug ? 'true' : undefined}
                  onClick={() => setSwitcherOpen(false)}
                >
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <span>{c.navTitle || c.title}</span>
                </a>
              ))}
            </div>
          )}
          <button
            type="button"
            className="capswitch__btn"
            aria-expanded={switcherOpen}
            aria-haspopup="true"
            onClick={() => setSwitcherOpen((v) => !v)}
          >
            <span className="capswitch__dot" aria-hidden="true" />
            <span className="capswitch__label">{active?.navTitle || active?.title}</span>
            <svg className="capswitch__chev" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
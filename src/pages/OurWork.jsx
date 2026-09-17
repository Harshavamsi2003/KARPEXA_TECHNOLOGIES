import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import useReveal from '../hooks/useReveal';
import { ourWork } from '../data/content';

/**
 * OUR WORK — a "field dossier" for GPU/AI server work and large-scale
 * government & academic storage infrastructure. Deliberately not another
 * card grid: entries read like ledger lines — an index code, the
 * organisation, the domain of work — with a coloured spine that tells
 * commercial R&D (azure) apart from government/defence/academic (violet)
 * at a glance. Unique to this page; no other section on the site uses it.
 */

function Ledger({ domain }) {
  return (
    <section className="section" data-theme="obsidian">
      <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>
      <div className="container rel">
        <div className="s-head reveal">
          <p className="eyebrow eyebrow--plain" style={{ color: 'rgba(235,240,250,.6)' }}>{domain.tag}</p>
          <h2>{domain.title}</h2>
          <p className="lead" style={{ color: 'var(--paper-2)' }}>{domain.intro}</p>
        </div>

        <div className={`ledger ledger--${domain.accent}`}>
          {domain.rows.map((row) => (
            <article className="ledger__row reveal" key={row.code}>
              <span className="ledger__code">{row.code}</span>
              <div className="ledger__org">
                <h3>{row.name}</h3>
                {row.full && <span className="ledger__full">{row.full}</span>}
              </div>
              <p className="ledger__text">{row.text}</p>
              <span className="ledger__spine" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurWork() {
  useReveal();

  return (
    <>
      <PageHero
        crumb={[{ label: 'Home', to: '/' }, { label: 'Our Work' }]}
        kicker={ourWork.eyebrow}
        title={ourWork.title}
        tagline={ourWork.tagline}
        aside={ourWork.aside}
        actions={<Link to="/contact" className="btn btn--primary">Discuss your infrastructure <span className="arw" aria-hidden="true">→</span></Link>}
      />

      {/* Focus area — the headline capability statement */}
      <section className="section" data-theme="light">
        <div className="container">
          <div className="dossier-focus reveal">
            <p className="eyebrow eyebrow--accent">{ourWork.focus.tag}</p>
            <h2>{ourWork.focus.title}</h2>
            <p className="lead">{ourWork.focus.body}</p>
            <div className="chip-row" style={{ marginTop: 22 }}>
              {ourWork.focus.pillars.map((p) => <span className="chip" key={p}>{p}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Domain 01 — global technology leaders (azure spine) */}
      <Ledger domain={ourWork.tech} />

      {/* Domain 02 — government, defence, aerospace, academic (violet spine) */}
      <section className="section" data-theme="tint">
        <div className="container">
          <div className="s-head reveal">
            <p className="eyebrow eyebrow--accent">{ourWork.gov.tag}</p>
            <h2>{ourWork.gov.title}</h2>
            <p className="lead">{ourWork.gov.intro}</p>
          </div>

          <div className="ledger ledger--violet ledger--onlight">
            {ourWork.gov.rows.map((row) => (
              <article className="ledger__row reveal" key={row.code}>
                <span className="ledger__code">{row.code}</span>
                <div className="ledger__org">
                  <h3>{row.name}</h3>
                  {row.full && <span className="ledger__full">{row.full}</span>}
                </div>
                <p className="ledger__text">{row.text}</p>
                <span className="ledger__spine" aria-hidden="true" />
              </article>
            ))}
          </div>

          <p className="dossier-note reveal">{ourWork.note}</p>
        </div>
      </section>

      {/* How we engage — three-step process, visually distinct from the
          capability pages' offer/outcome pattern */}
      <section className="section" data-theme="light">
        <div className="container">
          <div className="s-head s-head--center reveal">
            <p className="eyebrow eyebrow--accent">How we engage</p>
            <h2>Three steps, one accountable team</h2>
          </div>
          <div className="dossier-steps">
            {ourWork.process.map((step, i) => (
              <article className="dstep reveal" key={step.k} style={{ '--i': i }}>
                <span className="dstep__k">{step.k}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing pull-quote */}
      <section className="section" data-theme="obsidian">
        <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
        <div className="grain" aria-hidden="true" />
        <div className="container container--tight rel">
          <p className="dossier-pull reveal">
            <span className="dossier-pull__mark" aria-hidden="true">“</span>
            {ourWork.pullquote}
          </p>
        </div>
      </section>

      <ContactCTA
        eyebrow="Our work"
        title="Bring us the workload others turn away"
        text="GPU clusters, HPC platforms, government-grade storage — if it has to run without excuses, that is exactly the kind of infrastructure we like to build."
        primary="Start a conversation"
        secondary={{ label: 'See all capabilities', to: '/capabilities' }}
      />
    </>
  );
}
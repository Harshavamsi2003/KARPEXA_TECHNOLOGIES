import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutBand from '../components/AboutBand';
import Partners from '../components/Partners';
import CustomersShowcase from '../components/CustomersShowcase';
import { CapabilityGrid, SectorGrid } from '../components/CardGrid';
import ContactCTA from '../components/ContactCTA';
import useReveal from '../hooks/useReveal';
import { operatingModel, partnersIntro, ourWorkTeaser } from '../data/content';

export default function Home() {
  useReveal();

  return (
    <>
      <Hero />

      {/* ---------- 1. About ---------- */}
      <section className="section" data-theme="light">
        <div className="container">
          <AboutBand />
        </div>
      </section>

      {/* ---------- 1.5 Our Work teaser ---------- */}
      <section className="section section--sm" data-theme="obsidian">
        <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>
        <div className="container rel">
          <div className="s-head reveal">
            <p className="eyebrow eyebrow--plain" style={{ color: 'rgba(235,240,250,.6)' }}>{ourWorkTeaser.eyebrow}</p>
            <h2>{ourWorkTeaser.heading}</h2>
          </div>

          <div className="workteaser__grid">
            {ourWorkTeaser.cards.map((c) => (
              <article className="workteaser__card reveal" key={c.k}>
                <span className="workteaser__k">{c.k}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>

          <div className="workteaser__foot reveal">
            <p>{ourWorkTeaser.sub}</p>
            <Link to="/our-work" className="btn btn--primary btn--lg">
              {ourWorkTeaser.cta} <span className="arw" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 2. Partners ---------- */}
      <section className="section section--sm" data-theme="tint">
        <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>
        <div className="container rel">
          <div className="s-head s-head--center reveal">
            <p className="eyebrow eyebrow--accent">{partnersIntro.eyebrow}</p>
            <h2>{partnersIntro.heading}</h2>
            <p className="s-head__sub">{partnersIntro.sub}</p>
          </div>
          <Partners />
        </div>
      </section>

      {/* ---------- 3. Capabilities ---------- */}
      <section className="section" data-theme="light">
        <div className="aurora aurora--light aurora--faint" aria-hidden="true"><span /><span /><span /></div>
        <div className="container rel">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--accent">Capabilities</p>
              <h2>Ten disciplines, one accountable contract</h2>
            </div>
            <p className="lead">
              Buy one and add later, or hand over the whole estate. Either way the engineers are the
              same and the reporting is the same.
            </p>
          </div>

          <CapabilityGrid limit={6} summary={false} />

          <div className="btn-row reveal" style={{ marginTop: 40 }}>
            <Link to="/capabilities" className="btn btn--ink btn--lg">
              See all ten capabilities <span className="arw" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 3.5 Our customers ---------- */}
      <section className="section section--sm" data-theme="tint">
        <div className="container">
          <CustomersShowcase />
        </div>
      </section>

      {/* ---------- 4. Sectors ---------- */}
      <section className="section" data-theme="light">
        <div className="aurora aurora--light aurora--faint" aria-hidden="true"><span /><span /><span /></div>
        <div className="container rel">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--accent">Sectors</p>
              <h2>Context changes everything</h2>
            </div>
            <p className="lead">
              A validated pharma environment and a retail chain in peak season need opposite things
              from the same technology. We start from your constraints, not a template.
            </p>
          </div>

          <SectorGrid />

          <div className="btn-row reveal" style={{ marginTop: 40 }}>
            <Link to="/sectors" className="btn btn--ink btn--lg">
              Sectors in detail <span className="arw" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 5. How we work ---------- */}
      <section className="section" data-theme="obsidian">
        <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
        <div className="grain" aria-hidden="true" />

        <div className="container rel">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--plain">{operatingModel.eyebrow}</p>
              <h2>{operatingModel.heading}</h2>
            </div>
            <p className="lead">{operatingModel.sub}</p>
          </div>

          <div className="model__grid">
            {operatingModel.pillars.map((p) => (
              <article className="model__item reveal" key={p.title}>
                <span className="model__k">{p.k}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

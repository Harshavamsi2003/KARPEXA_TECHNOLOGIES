import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import Partners from '../components/Partners';
import CustomersShowcase from '../components/CustomersShowcase';
import useReveal from '../hooks/useReveal';
import { company, companyFacts, companyIntro, journey, values, commitments, principles, proof, partnersIntro } from '../data/content';

export default function Company() {
  useReveal();

  return (
    <>
      <PageHero
        crumb={[{ label: 'Home', to: '/' }, { label: 'About us' }]}
        kicker="About us"
        title={company.heroTitle}
        tagline={<span className="em">{company.heroSub}</span>}
        aside={company.intro}
        actions={<Link to="/contact" className="btn btn--primary">Meet the team <span className="arw" aria-hidden="true">→</span></Link>}
      />

      {/* Facts */}
      <section className="section section--sm" data-theme="dark">
        <div className="container">
          <div className="grid g-4">
            {companyFacts.map((f) => (
              <div className="reveal" key={f.k}>
                <p className="eyebrow eyebrow--plain">{f.k}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, letterSpacing: '-.02em', marginTop: 10 }}>
                  {f.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — full statement, unique design: living statement, breadth
          chips, an end-to-end process chain and a two-tone closing line */}
      <section className="section" data-theme="light">
        <div className="container">
          <div className="split about-split reveal">
            <div className="about-full">
              <p className="eyebrow eyebrow--accent">{companyIntro.eyebrow}</p>
              <h2 className="about-full__title">{companyIntro.heading}</h2>
              {companyIntro.paragraphs.map((para, i) => (
                <p className="lead" key={i}>{para}</p>
              ))}
            </div>

            <aside className="about-breadth">
              <p className="about-breadth__label">What's under one roof</p>
              <div className="chip-row">
                {companyIntro.breadth.map((b) => <span className="chip" key={b}>{b}</span>)}
              </div>
            </aside>
          </div>

          {/* End-to-end approach — a connected rail on wide screens that
              collapses into a dense two-up grid on mobile, instead of
              stacking tall with arrows between every step */}
          <div className="approach reveal">
            <p className="approach__label">{companyIntro.approachLabel}</p>
            <div className="approach__rail">
              <span className="approach__line" aria-hidden="true" />
              {companyIntro.approach.map((step, i) => (
                <div className="approach__stop" key={step}>
                  <span className="approach__dot">{String(i + 1).padStart(2, '0')}</span>
                  <span className="approach__label-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="split about-split-closing reveal">
            <div className="about-closing">
              <p className="about-closing__line">{companyIntro.closingStatement[0]}</p>
              <p className="about-closing__line about-closing__line--em">{companyIntro.closingStatement[1]}</p>
            </div>
            <p className="lead about-closing__lead">{companyIntro.closingLead}</p>
          </div>
        </div>
      </section>

      {/* How we operate — signature numbered band, unique to this page */}
      <section className="section" data-theme="obsidian">
        <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
        <div className="grain" aria-hidden="true" />
        <div className="container rel">
          <div className="s-head reveal">
            <p className="eyebrow eyebrow--plain">How we operate</p>
            <h2>Four principles that decide everything else</h2>
          </div>
          <div className="prin">
            {principles.map((p) => (
              <article className="prin__item reveal" key={p.n}>
                <span className="prin__n">{p.n}</span>
                <div className="prin__body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="proof reveal">
            {proof.map((s) => (
              <div className="proof__item" key={s.l}>
                <b>{s.v}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section" data-theme="light">
        <div className="container">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--accent">Journey</p>
              <h2>Where we are, honestly</h2>
            </div>
            <p className="lead">
              We are early. We would rather say that plainly than invent two decades of history —
              and the clients who value that tend to be the ones we work best with.
            </p>
          </div>

          <div className="ladder">
            {journey.map((j) => (
              <div className="rung reveal" key={j.phase}>
                <span className="rung__k">{j.phase} · {j.year}</span>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" data-theme="obsidian">
        <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
        <div className="grain" aria-hidden="true" />

        <div className="container rel">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--plain">Values</p>
              <h2>Four things we will not trade away</h2>
            </div>
            <p className="lead">
              Values are only real when they cost something. Each of these has already cost us
              revenue at least once, which is how we know they hold.
            </p>
          </div>

          <div className="grid g-4">
            {values.map((v) => (
              <article className="card reveal" key={v.title}>
                <h3 style={{ marginTop: 20, marginBottom: 10 }}>{v.title}</h3>
                <p className="muted" style={{ fontSize: '.93rem' }}>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section" data-theme="light">
        <div className="container">
          <div className="s-head reveal">
            <p className="eyebrow eyebrow--accent">Commitments</p>
            <h2>What we owe, and to whom</h2>
          </div>

          <div className="uses">
            {commitments.map((c) => (
              <article className="use reveal" key={c.title}>
                <span className="use__k">Commitment</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner ecosystem — the brands we build on, aligned to the About story */}
      <section className="section section--sm" data-theme="tint">
        <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>
        <div className="container rel">
          <div className="s-head s-head--center reveal">
            <p className="eyebrow eyebrow--accent">{partnersIntro.eyebrow}</p>
            <h2>The vendors behind the promises</h2>
            <p className="s-head__sub">
              Vendor-neutral advice only works when the relationships are real. These are the OEM and
              platform partnerships our engineers design, deploy and support against every day.
            </p>
          </div>
          <Partners />
        </div>
      </section>

      {/* Our customers */}
      <section className="section section--sm" data-theme="light">
        <div className="container">
          <CustomersShowcase />
        </div>
      </section>

      <ContactCTA
        eyebrow="Work with us"
        title="Come and test the claims"
        text="Ask us for a reference, a sample design document, or an honest opinion on a plan you already have. All three are available before anything is signed."
        primary="Get in touch"
        secondary={{ label: 'What we do', to: '/capabilities' }}
      />
    </>
  );
}

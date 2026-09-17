import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import FAQ from './FAQ';
import ContactCTA from './ContactCTA';
import { capabilities } from '../pages/capabilities';
import useReveal from '../hooks/useReveal';
import '../styles/capability.css';

const Tick = () => (
  <svg className="deliv__tick" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * One template, ten very different pages. Every string rendered here comes
 * from the capability's own file — nothing generic is written in this
 * component, which is what keeps the pages from reading like each other.
 */
export default function CapabilityLayout({ data }) {
  useReveal();

  const idx = capabilities.findIndex((c) => c.slug === data.slug);
  const related = [
    capabilities[(idx + 1) % capabilities.length],
    capabilities[(idx + 2) % capabilities.length],
    capabilities[(idx + 3) % capabilities.length],
  ];

  return (
    <>
      <PageHero
        crumb={[
          { label: 'Home', to: '/' },
          { label: 'Capabilities', to: '/capabilities' },
          { label: data.title },
        ]}
        kicker="Capability"
        title={data.title}
        tagline={data.tagline}
        aside={data.short}
        actions={
          <>
            <Link to="/contact" className="btn btn--primary">
              Discuss this <span className="arw" aria-hidden="true">→</span>
            </Link>
            <Link to="/capabilities" className="btn btn--line">All capabilities</Link>
          </>
        }
      />

      {/* ---------- Intro + signals ---------- */}
      <section className="section" data-theme="light">
        <div className="container cap__intro">
          <div className="reveal">
            <p className="eyebrow eyebrow--accent">{data.intro.eyebrow}</p>
            <h2 className="s-head">{data.intro.heading}</h2>
            <p className="cap__intro-body">{data.intro.body}</p>
          </div>

          <div className="reveal reveal--right">
            <p className="signals__h">Signals you may recognise</p>
            <ul className="signals">
              {data.signals.map((s) => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Offerings ---------- */}
      <section className="section" data-theme="tint">
        <div className="container">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--accent">What we deliver</p>
              <h2>{data.title} services in detail</h2>
            </div>
            <p className="lead">Each item below is scoped, priced and delivered on its own — take one, or take the set.</p>
          </div>

          <div className="offers">
            {data.offerings.map((o) => (
              <article className="offer reveal" key={o.name}>
                <h3>{o.name}</h3>
                <p>{o.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Outcomes ---------- */}
      <section className="section" data-theme="obsidian">
        <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>

        <div className="container rel">
          <div className="s-head reveal">
            <p className="eyebrow eyebrow--plain">What it produces</p>
            <h2>Outcomes we hold ourselves to</h2>
          </div>

          <div className="outcomes">
            {data.outcomes.map((o) => (
              <article className="outcome reveal" key={o.title}>
                <span className="outcome__stat">{o.stat}</span>
                <span className="outcome__unit">{o.unit}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Approach ---------- */}
      <section className="section" data-theme="light">
        <div className="container">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--accent">{data.approach.eyebrow}</p>
              <h2>{data.approach.heading}</h2>
            </div>
            <p className="lead">{data.approach.sub}</p>
          </div>

          <div className="ladder">
            {data.approach.steps.map((s) => (
              <div className="rung reveal" key={s.k}>
                <span className="rung__k">{s.k}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Deliverables + visual + stack ---------- */}
      <section className="section" data-theme="tint">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow eyebrow--accent">Deliverables</p>
            <h2 className="s-head">{data.deliverables.heading}</h2>
            <ul className="deliv">
              {data.deliverables.items.map((d) => (
                <li key={d}><Tick /><span>{d}</span></li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal--right">
            <p className="eyebrow eyebrow--accent">Platforms and tooling</p>
            <h2 className="s-head">What this is built on</h2>
            <div className="chip-row">
              {data.stack.map((s) => <span className="chip chip--mono" key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Use cases ---------- */}
      <section className="section" data-theme="light">
        <div className="container">
          <div className="s-head reveal">
            <p className="eyebrow eyebrow--accent">When clients call us</p>
            <h2>Situations this work is built for</h2>
          </div>

          <div className="uses">
            {data.useCases.map((u) => (
              <article className="use reveal" key={u.title}>
                <span className="use__k">Scenario</span>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Edge ---------- */}
      <section className="section" data-theme="obsidian">
        <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>

        <div className="container rel">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--plain">The difference</p>
              <h2>{data.edge.heading}</h2>
            </div>
            <p className="lead">{data.edge.sub}</p>
          </div>

          <div className="edge">
            {data.edge.points.map((p) => (
              <div className="edge__pt reveal" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Where we deliver ----------
          Visible location content supporting the city in the page title.
          Optional: pages without data.serviceArea simply skip this block. */}
      {data.serviceArea && (
        <section className="section section--sm" data-theme="light">
          <div className="container container--tight">
            <div className="s-head reveal">
              <p className="eyebrow eyebrow--accent">Where we deliver</p>
              <h2>On site in Bengaluru, delivered across India</h2>
            </div>
            <p className="lead reveal">{data.serviceArea.text}</p>
            <p className="reveal"><strong>{data.serviceArea.note}</strong></p>
          </div>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      <section className="section" data-theme="light">
        <div className="container container--tight">
          <div className="s-head reveal">
            <p className="eyebrow eyebrow--accent">Questions</p>
            <h2>Answered before you ask</h2>
          </div>
          <FAQ items={data.faqs} startOpen={0} />
        </div>
      </section>

      {/* ---------- Related ---------- */}
      <section className="section section--sm" data-theme="tint">
        <div className="container">
          <div className="s-head reveal">
            <p className="eyebrow eyebrow--accent">Continue</p>
            <h2>Capabilities that pair with this</h2>
          </div>

          <div className="cardgrid">
            {related.map((c) => (
              <Link to={`/capabilities/${c.slug}`} className="capcard reveal" key={c.slug}>
                <span className="capcard__k">{c.label}</span>
                <h3 className="capcard__t">{c.title}</h3>
                <span className="capcard__go">Explore <span className="arw" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="Talk to us"
        title={data.cta.title}
        text={data.cta.text}
        primary="Start the conversation"
        secondary={{ label: 'Back to capabilities', to: '/capabilities' }}
      />
    </>
  );
}

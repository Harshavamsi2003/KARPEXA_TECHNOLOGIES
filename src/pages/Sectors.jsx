import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import CustomersShowcase from '../components/CustomersShowcase';
import useReveal from '../hooks/useReveal';
import { sectors } from '../data/content';

export default function Sectors() {
  useReveal();

  return (
    <>
      <PageHero
        crumb={[{ label: 'Home', to: '/' }, { label: 'Sectors' }]}
        kicker="Sectors"
        title="Built around how your industry actually works"
        tagline="Nine environments with genuinely different constraints — regulatory, physical, seasonal and operational."
        aside="We would rather admit unfamiliarity with a sector than learn it at your expense. Where we have depth, it shows in the first meeting."
        actions={<Link to="/contact" className="btn btn--primary">Discuss your sector <span className="arw" aria-hidden="true">→</span></Link>}
      />

      <section className="section" data-theme="light">
        <div className="container">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--accent">Where we work</p>
              <h2>Constraints first, technology second</h2>
            </div>
            <p className="lead">
              The same firewall configuration is correct in one industry and negligent in another.
              Sector knowledge is what separates a working system from a compliant-looking one.
            </p>
          </div>

          <div className="sectorlist">
            {sectors.map((sec) => (
              <article className="sector reveal" key={sec.slug}>
                <div className="sector__head">
                  <p className="eyebrow eyebrow--accent">{sec.note}</p>
                  <h3>{sec.name}</h3>
                </div>
                <div className="sector__body">
                  <p>{sec.text}</p>
                  <div className="chip-row">
                    {sec.focus.map((f) => <span className="chip" key={f}>{f}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-theme="obsidian">
        <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>
        <div className="container container--tight rel">
          <div className="reveal">
            <p className="eyebrow eyebrow--plain">Working with us</p>
            <h2 className="s-head">If your industry is not listed</h2>
            <p className="lead">
              Say so, and we will tell you honestly whether we are the right firm. Some of our best
              engagements began with a sector we had not worked in — and a client who valued the
              admission more than a confident guess.
            </p>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link to="/contact" className="btn btn--primary">Ask us directly <span className="arw" aria-hidden="true">→</span></Link>
              <Link to="/capabilities" className="btn btn--line">Browse capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-theme="tint">
        <div className="container">
          <CustomersShowcase />
        </div>
      </section>

      <ContactCTA
        eyebrow="Sector fit"
        title="Bring us your regulatory reality"
        text="Audit deadlines, validation obligations, peak-season constraints — the details that make a generic proposal useless. That is where the conversation should start."
        primary="Start with the constraints"
        secondary={{ label: 'How we work', to: '/company' }}
      />
    </>
  );
}

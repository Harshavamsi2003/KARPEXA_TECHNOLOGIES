import { Link } from 'react-router-dom';
import { capabilities } from '../data/content';

export default function NotFound() {
  return (
    <section className="section" data-theme="obsidian" style={{ minHeight: '78vh', display: 'grid', alignItems: 'center', paddingTop: 'calc(var(--nav-h) + 60px)' }}>
      <div className="aurora" aria-hidden="true"><span /><span /><span /></div>

      <div className="container container--tight rel" style={{ textAlign: 'center' }}>
        <p className="eyebrow eyebrow--plain" style={{ justifyContent: 'center' }}>Error 404</p>
        <h1 style={{ fontSize: 'var(--fs-h1)', margin: '18px 0 18px' }}>
          This page is <span className="plasma-text">not on the map</span>
        </h1>
        <p className="lead" style={{ marginInline: 'auto', maxWidth: '54ch' }}>
          The address you followed does not exist — or it moved when we rebuilt the site. Everything
          worth reading is one click away.
        </p>

        <div className="btn-row" style={{ justifyContent: 'center', marginTop: 34 }}>
          <Link to="/" className="btn btn--primary btn--lg">Back to home <span className="arw" aria-hidden="true">→</span></Link>
          <Link to="/capabilities" className="btn btn--line btn--lg">All capabilities</Link>
        </div>

        <div className="chip-row" style={{ justifyContent: 'center', marginTop: 42 }}>
          {capabilities.slice(0, 6).map((c) => (
            <Link className="chip chip--mono" to={`/capabilities#${c.slug}`} key={c.slug}>{c.navTitle || c.title}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}

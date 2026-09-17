import { Link } from 'react-router-dom';

/**
 * Inner-page hero. Always obsidian, so the navbar switches to its
 * light-on-dark treatment the moment a page loads.
 */
export default function PageHero({ crumb = [], kicker, title, tagline, aside, actions }) {
  return (
    <section className="phero" data-theme="obsidian">
      <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>

      <div className="container rel">
        {crumb.length > 0 && (
          <nav className="phero__crumb" aria-label="Breadcrumb">
            {crumb.map((c, i) => (
              <span key={c.label} style={{ display: 'contents' }}>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <b>{c.label}</b>}
                {i < crumb.length - 1 && <span aria-hidden="true">/</span>}
              </span>
            ))}
          </nav>
        )}

        <div className="phero__wrap">
          <div>
            {kicker && <p className="eyebrow eyebrow--accent" style={{ marginBottom: 18 }}>{kicker}</p>}
            <h1>{title}</h1>
            {tagline && <p className="phero__tag">{tagline}</p>}
          </div>

          {(aside || actions) && (
            <div className="phero__aside">
              {aside && <p>{aside}</p>}
              {actions && <div className="phero__actions">{actions}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

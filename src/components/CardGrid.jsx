import { Link } from 'react-router-dom';
import { capabilities, sectors } from '../data/content';

/**
 * One grid, two data sets. Cards are uniform height and width with no
 * ordinal numbering — the label line carries the context instead.
 */
function Card({ to, kicker, title, text, tags, cta }) {
  return (
    <Link to={to} className="capcard reveal">
      <span className="capcard__k">{kicker}</span>
      <h3 className="capcard__t">{title}</h3>
      {text && <p className="capcard__d">{text}</p>}
      {tags && (
        <div className="capcard__tags">
          {tags.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
      )}
      <span className="capcard__go">{cta} <span className="arw" aria-hidden="true">→</span></span>
    </Link>
  );
}

export function CapabilityGrid({ limit, summary = true, columns = 3 }) {
  const list = limit ? capabilities.slice(0, limit) : capabilities;
  return (
    <div className={`cardgrid ${columns === 2 ? 'cardgrid--two' : ''}`}>
      {list.map((c) => (
        <Card
          key={c.slug}
          to={`/capabilities#${c.slug}`}
          kicker={c.label}
          title={c.title}
          text={summary ? c.short : null}
          cta="Explore"
        />
      ))}
    </div>
  );
}

/**
 * On the home page the sector cards carry only the focus areas — the full
 * description lives on the Sectors page, so no paragraph is printed twice.
 */
export function SectorGrid({ limit }) {
  const list = limit ? sectors.slice(0, limit) : sectors;
  return (
    <div className="cardgrid">
      {list.map((s) => (
        <Card
          key={s.slug}
          to="/sectors"
          kicker={s.note}
          title={s.name}
          text={s.short}
          cta="How we help"
        />
      ))}
    </div>
  );
}

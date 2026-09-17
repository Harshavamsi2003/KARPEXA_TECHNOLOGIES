import { Link } from 'react-router-dom';
import { about } from '../data/content';
import useCountUp from '../hooks/useCountUp';

function Stat({ v, suffix, l }) {
  const [ref, value] = useCountUp(v);
  return (
    <div className="about__stat" ref={ref}>
      <b>{value}{suffix}</b>
      <span>{l}</span>
    </div>
  );
}

export default function AboutBand() {
  return (
    <div className="about">
      <div className="reveal">
        <p className="eyebrow eyebrow--accent">{about.eyebrow}</p>
        <h2 className="s-head">{about.title}</h2>
        <p className="about__body">{about.body}</p>
        <p className="about__quote">{about.quote}</p>
        <div className="btn-row" style={{ marginTop: 30 }}>
          <Link to="/company" className="btn btn--primary">
            {about.cta} <span className="arw" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="about__stats reveal reveal--right">
        {about.stats.map((s) => <Stat key={s.l} {...s} />)}
      </div>
    </div>
  );
}

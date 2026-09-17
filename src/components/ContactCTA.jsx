import { Link } from 'react-router-dom';
import { brand } from '../data/content';

export default function ContactCTA({
  eyebrow = 'Next step',
  title = 'Tell us where your technology is today',
  text = 'Send us the shape of the problem. We will come back with a clear read on it and a practical first step — usually inside one business day.',
  primary = 'Start a conversation',
  secondary = { label: 'See what we do', to: '/capabilities' },
}) {
  return (
    <section className="section cta" data-theme="obsidian">
      <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
      <div className="grain" aria-hidden="true" />

      <div className="container cta__inner reveal">
        <p className="eyebrow eyebrow--plain" style={{ color: 'rgba(235,240,250,.6)' }}>{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>

        <div className="cta__actions">
          <Link to="/contact" className="btn btn--primary btn--lg">
            {primary} <span className="arw" aria-hidden="true">→</span>
          </Link>
          <Link to={secondary.to} className="btn btn--line btn--lg">{secondary.label}</Link>
        </div>

        <div className="cta__meta">
          <span>{brand.email}</span>
          <span>{brand.phone}</span>
          <span className="status"><span className="status__dot" />Replying within 1 business day</span>
        </div>
      </div>
    </section>
  );
}

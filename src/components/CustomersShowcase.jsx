import { customersShowcase } from '../data/content';

/**
 * The "Our customers" logo showcase — a calm, static grid (not a
 * marquee, so it never reads as a repeat of the OEM partner wall).
 * Shared across Home, Capabilities, Sectors and About so it only needs
 * to be built once; each page just drops in <CustomersShowcase />.
 */
export default function CustomersShowcase() {
  return (
    <>
      <div className="s-head s-head--center reveal">
        <p className="eyebrow eyebrow--accent">{customersShowcase.eyebrow}</p>
        <h2>{customersShowcase.heading}</h2>
        <p className="s-head__sub">{customersShowcase.sub}</p>
      </div>

      <div className="custgrid">
        {customersShowcase.logos.map((c, i) => (
          <div className="custcard reveal" key={c.name} style={{ '--i': i }}>
            <img src={c.logo} alt={`${c.name} logo`} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </>
  );
}

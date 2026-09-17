import { Link } from 'react-router-dom';
import { brand, footerLinks } from '../data/content';
import '../styles/footer.css';

const Mark = () => (
  <img
    src="/brand/karpexa-mark.png"
    alt=""
    aria-hidden="true"
    width="32"
    height="32"
    style={{ width: 32, height: 32, objectFit: 'contain', display: 'block' }}
  />
);


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section foot section--flush-b" data-theme="obsidian">
      <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>

      <div className="container rel">
        <div className="foot__top">
          <div className="foot__brandcol">
            <Link to="/" className="foot__brand" aria-label={`${brand.full} home`}>
              <Mark /><span>{brand.name}</span>
            </Link>
            <p className="foot__pitch">
              {brand.full} designs, delivers and operates enterprise technology estates —
              infrastructure, cloud, security and the people who keep them running.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="foot__h">{heading}</p>
              <nav className="foot__list">
                {links.map((l) => <Link key={l.to + l.label} to={l.to}>{l.label}</Link>)}
              </nav>
            </div>
          ))}

          <div className="foot__contact-col">
            <p className="foot__h">Get in touch</p>
            <div className="foot__contact">
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              <address>
                {brand.address.line1}<br />
                {brand.address.line2}<br />
                {brand.address.city} {brand.address.postal}
              </address>
              <span className="status"><span className="status__dot" />Support desk online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="foot__mark" aria-hidden="true">{brand.name}</div>

      <div className="container">
        <div className="foot__bar">
          <span>© {year} {brand.legal}. All rights reserved.</span>
          <nav className="foot__legal">
            <Link to="/capabilities">Capabilities</Link>
            <Link to="/sectors">Sectors</Link>
            <Link to="/company">About us</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

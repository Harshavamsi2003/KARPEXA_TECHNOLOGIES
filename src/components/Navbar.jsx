// import { useEffect, useRef, useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { brand, nav, capabilities, sectors } from '../data/content';
// import useNavTheme from '../hooks/useNavTheme';
// import useLockBody from '../hooks/useLockBody';
// import '../styles/navbar.css';

// const Chev = () => (
//   <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
//     <path d="M2 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const ArrowR = ({ className = 'drawer__chev' }) => (
//   <svg className={className} viewBox="0 0 12 12" aria-hidden="true">
//     <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const ArrowL = () => (
//   <svg className="drawer__back-icon" viewBox="0 0 12 12" aria-hidden="true">
//     <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const IconPhone = () => (
//   <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
//     <path d="M5.2 2.2 6.6 5 5.3 6.3a8 8 0 0 0 4.4 4.4L11 9.4l2.8 1.4v2.4c0 .6-.5 1-1.1.9A12.4 12.4 0 0 1 2.3 3.3c-.1-.6.3-1.1.9-1.1h2z"
//       stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
//   </svg>
// );
// const IconMail = () => (
//   <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
//     <rect x="1.6" y="3.4" width="12.8" height="9.2" rx="1.6" stroke="currentColor" strokeWidth="1.3" />
//     <path d="m2.4 4.6 5.6 4 5.6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const SUBMENUS = {
//   capabilities: {
//     title: 'What we do',
//     allLabel: 'View all capabilities',
//     allTo: '/capabilities',
//     items: capabilities.map((c) => ({ label: c.navTitle || c.title, to: `/capabilities/${c.slug}` })),
//   },
//   sectors: {
//     title: 'Who we serve',
//     allLabel: 'All sectors we serve',
//     allTo: '/sectors',
//     items: sectors.map((s) => ({ label: s.name, to: '/sectors' })),
//   },
// };

// export default function Navbar() {
//   const { tone, atTop } = useNavTheme();
//   const [openMega, setOpenMega] = useState(null);
//   const [drawer, setDrawer] = useState(false);
//   const [subPanel, setSubPanel] = useState(null);
//   const [activeCap, setActiveCap] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const location = useLocation();
//   const navRef = useRef(null);

//   useLockBody(drawer);

//   // Reset on navigation
//   useEffect(() => {
//     setDrawer(false);
//     setOpenMega(null);
//     setSubPanel(null);
//   }, [location.pathname]);

//   // Reading progress hairline
//   useEffect(() => {
//     let raf = 0;
//     const onScroll = () => {
//       if (raf) return;
//       raf = requestAnimationFrame(() => {
//         raf = 0;
//         const h = document.documentElement.scrollHeight - window.innerHeight;
//         setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
//       });
//     };
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
//   }, []);

//   // Return to root drawer panel after it closes
//   useEffect(() => {
//     if (drawer) return;
//     const t = setTimeout(() => setSubPanel(null), 420);
//     return () => clearTimeout(t);
//   }, [drawer]);

//   // Click-outside + Esc
//   useEffect(() => {
//     const onDown = (e) => {
//       if (openMega && navRef.current && !navRef.current.contains(e.target)) setOpenMega(null);
//     };
//     const onKey = (e) => {
//       if (e.key !== 'Escape') return;
//       if (openMega) setOpenMega(null);
//       else if (subPanel) setSubPanel(null);
//       else if (drawer) setDrawer(false);
//     };
//     document.addEventListener('mousedown', onDown);
//     document.addEventListener('keydown', onKey);
//     return () => {
//       document.removeEventListener('mousedown', onDown);
//       document.removeEventListener('keydown', onKey);
//     };
//   }, [openMega, subPanel, drawer]);

//   // The bar is transparent only at the very top of a page with no menu open.
//   const isTop = atTop && !openMega && !drawer;
//   // An open menu is a light surface, so the bar always uses dark type over it.
//   const state = drawer || openMega ? 'nav--light' : isTop ? 'nav--top' : tone === 'light' ? 'nav--light' : 'nav--dark';
//   const sub = subPanel ? SUBMENUS[subPanel] : null;
//   const active = capabilities[activeCap];

//   return (
//     <header ref={navRef} className={`nav ${state} ${drawer ? 'nav--drawer' : ''}`}>
//       <div className="container nav__row">
//         <Link
//           to="/"
//           className="brand"
//           aria-label={`${brand.full} — home`}
//           onClick={() => { setOpenMega(null); setDrawer(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
//         >
//           <span className="brand__name">{brand.name}</span>
//         </Link>

//         <nav className="nav__links" aria-label="Primary">
//           {nav.map((item) =>
//             item.mega ? (
//               <div key={item.to} className={`nav__item ${openMega === item.mega ? 'open' : ''}`}>
//                 <button
//                   type="button"
//                   className="nav__link"
//                   aria-expanded={openMega === item.mega}
//                   onClick={() => setOpenMega((c) => (c === item.mega ? null : item.mega))}
//                 >
//                   {item.label}
//                   <Chev />
//                 </button>

//                 {item.mega === 'capabilities' && (
//                   <div className="mega mega--cap" role="menu">
//                     <div className="mega__grid">
//                       <ul className="mega__list">
//                         {capabilities.map((c, i) => (
//                           <li key={c.slug}>
//                             <Link
//                               to={`/capabilities/${c.slug}`}
//                               className={`mega__cat ${activeCap === i ? 'active' : ''}`}
//                               onMouseEnter={() => setActiveCap(i)}
//                               onFocus={() => setActiveCap(i)}
//                             >
//                               <span>{c.navTitle || c.title}</span>
//                               <span className="a" aria-hidden="true">→</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>

//                       <div className="mega__panel">
//                         <Link to={`/capabilities/${active.slug}`} className="mega__panel-title">
//                           {active.title} <span className="a" aria-hidden="true">→</span>
//                         </Link>
//                         <p className="mega__blurb">{active.short}</p>
//                         <div className="mega__sub">
//                           {active.offerings.slice(0, 6).map((o) => (
//                             <Link key={o.name} to={`/capabilities/${active.slug}`}>{o.name}</Link>
//                           ))}
//                         </div>
//                         <Link to="/capabilities" className="mega__all">
//                           View all ten capabilities <span aria-hidden="true">→</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {item.mega === 'sectors' && (
//                   <div className="mega mega--sectors" role="menu">
//                     <div className="mega__sectors">
//                       {sectors.map((sec) => (
//                         <Link key={sec.slug} to="/sectors" className="mega__cat">
//                           <span>{sec.name}</span>
//                           <span className="a" aria-hidden="true">→</span>
//                         </Link>
//                       ))}
//                     </div>
//                     <Link to="/sectors" className="mega__all mega__all--wide">
//                       Sectors in detail <span aria-hidden="true">→</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div key={item.to} className="nav__item">
//                 <NavLink to={item.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
//                   {item.label}
//                 </NavLink>
//               </div>
//             )
//           )}

//           <div className="nav__cta">
//             <Link to="/contact" className="btn btn--primary">
//               Start a conversation <span className="arw" aria-hidden="true">→</span>
//             </Link>
//           </div>
//         </nav>

//         <button
//           className={`burger ${drawer ? 'is-open' : ''}`}
//           aria-label={drawer ? 'Close menu' : 'Open menu'}
//           aria-expanded={drawer}
//           onClick={() => setDrawer((v) => !v)}
//         >
//           <span /><span />
//         </button>
//       </div>

//       <span className="nav__progress" style={{ '--p': progress }} aria-hidden="true" />

//       {/* ---------------- Mobile drawer ---------------- */}
//       <div className={`drawer ${drawer ? 'is-open' : ''}`} aria-hidden={!drawer}>
//         <div className="aurora aurora--faint drawer__aurora" aria-hidden="true"><span /><span /><span /></div>

//         <div className={`drawer__stage ${subPanel ? 'is-sub' : ''}`}>
//           <div className="drawer__panel" aria-hidden={!!subPanel}>
//             <nav aria-label="Mobile">
//               <button type="button" className="drawer__row drawer__item" style={{ '--i': 0 }} onClick={() => setSubPanel('capabilities')}>
//                 <span>What we do</span><ArrowR />
//               </button>
//               <button type="button" className="drawer__row drawer__item" style={{ '--i': 1 }} onClick={() => setSubPanel('sectors')}>
//                 <span>Who we serve</span><ArrowR />
//               </button>
//               <NavLink to="/company" style={{ '--i': 2 }} className={({ isActive }) => `drawer__row drawer__item ${isActive ? 'is-active' : ''}`}>
//                 <span>About us</span>
//               </NavLink>
//               <NavLink to="/contact" style={{ '--i': 3 }} className={({ isActive }) => `drawer__row drawer__item ${isActive ? 'is-active' : ''}`}>
//                 <span>Contact</span>
//               </NavLink>
//             </nav>

//             <div className="drawer__foot drawer__item" style={{ '--i': 4 }}>
//               <Link to="/contact" className="btn btn--primary drawer__cta">
//                 Start a conversation <span className="arw" aria-hidden="true">→</span>
//               </Link>

//               <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="drawer__contact">
//                 <IconPhone /><span>{brand.phone}</span>
//               </a>
//               <a href={`mailto:${brand.email}`} className="drawer__contact">
//                 <IconMail /><span>{brand.email}</span>
//               </a>
//             </div>
//           </div>

//           <div className="drawer__panel" aria-hidden={!subPanel} key={subPanel || 'empty'}>
//             {sub && (
//               <>
//                 <button type="button" className="drawer__back" onClick={() => setSubPanel(null)}>
//                   <ArrowL /><span>Menu</span>
//                 </button>
//                 <h2 className="drawer__sub-title drawer__item" style={{ '--i': 0 }}>{sub.title}</h2>
//                 <Link to={sub.allTo} className="drawer__all drawer__item" style={{ '--i': 1 }}>
//                   {sub.allLabel} <span aria-hidden="true">→</span>
//                 </Link>
//                 <div className="drawer__list">
//                   {sub.items.map((it, i) => (
//                     <Link key={it.label} to={it.to} className="drawer__sub-link drawer__item" style={{ '--i': i + 2 }}>
//                       {it.label}
//                     </Link>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brand, nav, capabilities, sectors } from '../data/content';
import useNavTheme from '../hooks/useNavTheme';
import useLockBody from '../hooks/useLockBody';
import '../styles/navbar.css';

const Chev = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowR = ({ className = 'drawer__chev' }) => (
  <svg className={className} viewBox="0 0 12 12" aria-hidden="true">
    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowL = () => (
  <svg className="drawer__back-icon" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M5.2 2.2 6.6 5 5.3 6.3a8 8 0 0 0 4.4 4.4L11 9.4l2.8 1.4v2.4c0 .6-.5 1-1.1.9A12.4 12.4 0 0 1 2.3 3.3c-.1-.6.3-1.1.9-1.1h2z"
      stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="1.6" y="3.4" width="12.8" height="9.2" rx="1.6" stroke="currentColor" strokeWidth="1.3" />
    <path d="m2.4 4.6 5.6 4 5.6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SUBMENUS = {
  capabilities: {
    title: 'What we do',
    allLabel: 'View all capabilities',
    allTo: '/capabilities',
    items: capabilities.map((c) => ({ label: c.navTitle || c.title, to: `/capabilities#${c.slug}` })),
  },
  sectors: {
    title: 'Who we serve',
    allLabel: 'All sectors we serve',
    allTo: '/sectors',
    items: sectors.map((s) => ({ label: s.name, to: '/sectors' })),
  },
};

export default function Navbar() {
  const { tone, atTop } = useNavTheme();
  const [openMega, setOpenMega] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [subPanel, setSubPanel] = useState(null);
  const [activeCap, setActiveCap] = useState(0);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const navRef = useRef(null);

  useLockBody(drawer);

  // Reset on navigation
  useEffect(() => {
    setDrawer(false);
    setOpenMega(null);
    setSubPanel(null);
  }, [location.pathname]);

  // Reading progress hairline
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  // Return to root drawer panel after it closes
  useEffect(() => {
    if (drawer) return;
    const t = setTimeout(() => setSubPanel(null), 420);
    return () => clearTimeout(t);
  }, [drawer]);

  // Click-outside + Esc
  useEffect(() => {
    const onDown = (e) => {
      if (openMega && navRef.current && !navRef.current.contains(e.target)) setOpenMega(null);
    };
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (openMega) setOpenMega(null);
      else if (subPanel) setSubPanel(null);
      else if (drawer) setDrawer(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [openMega, subPanel, drawer]);

  // The bar is transparent only at the very top of a page with no menu open.
  const isTop = atTop && !openMega && !drawer;
  // An open menu is a light surface, so the bar always uses dark type over it.
  const state = drawer || openMega ? 'nav--light' : isTop ? 'nav--top' : tone === 'light' ? 'nav--light' : 'nav--dark';
  const sub = subPanel ? SUBMENUS[subPanel] : null;
  const active = capabilities[activeCap];

  return (
    <header ref={navRef} className={`nav ${state} ${drawer ? 'nav--drawer' : ''}`}>
      <div className="container nav__row">
        <Link
          to="/"
          className="brand"
          aria-label={`${brand.full} — home`}
          onClick={() => { setOpenMega(null); setDrawer(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <img
            src="/brand/karpexa-mark.png"
            alt=""
            aria-hidden="true"
            width="32"
            height="32"
            className="brand__mark"
          />
          <span className="brand__name">{brand.name}</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) =>
            item.mega ? (
              <div key={item.to} className={`nav__item ${openMega === item.mega ? 'open' : ''}`}>
                <button
                  type="button"
                  className="nav__link"
                  aria-expanded={openMega === item.mega}
                  onClick={() => setOpenMega((c) => (c === item.mega ? null : item.mega))}
                >
                  {item.label}
                  <Chev />
                </button>

                {item.mega === 'capabilities' && (
                  <div className="mega mega--cap" role="menu">
                    <div className="mega__grid">
                      <ul className="mega__list">
                        {capabilities.map((c, i) => (
                          <li key={c.slug}>
                            <Link
                              to={`/capabilities#${c.slug}`}
                              className={`mega__cat ${activeCap === i ? 'active' : ''}`}
                              onMouseEnter={() => setActiveCap(i)}
                              onFocus={() => setActiveCap(i)}
                            >
                              <span>{c.navTitle || c.title}</span>
                              <span className="a" aria-hidden="true">→</span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="mega__panel">
                        <Link to={`/capabilities#${active.slug}`} className="mega__panel-title">
                          {active.title} <span className="a" aria-hidden="true">→</span>
                        </Link>
                        <p className="mega__blurb">{active.short}</p>
                        <div className="mega__sub">
                          {active.offerings.slice(0, 6).map((o) => (
                            <Link key={o.name} to={`/capabilities#${active.slug}`}>{o.name}</Link>
                          ))}
                        </div>
                        <Link to="/capabilities" className="mega__all">
                          View all ten capabilities <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {item.mega === 'sectors' && (
                  <div className="mega mega--sectors" role="menu">
                    <div className="mega__sectors">
                      {sectors.map((sec) => (
                        <Link key={sec.slug} to="/sectors" className="mega__cat">
                          <span>{sec.name}</span>
                          <span className="a" aria-hidden="true">→</span>
                        </Link>
                      ))}
                    </div>
                    <Link to="/sectors" className="mega__all mega__all--wide">
                      Sectors in detail <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div key={item.to} className="nav__item">
                <NavLink to={item.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
                  {item.label}
                </NavLink>
              </div>
            )
          )}

          <div className="nav__cta">
            <Link to="/contact" className="btn btn--primary">
              Start a conversation <span className="arw" aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>

        <button
          className={`burger ${drawer ? 'is-open' : ''}`}
          aria-label={drawer ? 'Close menu' : 'Open menu'}
          aria-expanded={drawer}
          onClick={() => setDrawer((v) => !v)}
        >
          <span /><span />
        </button>
      </div>

      <span className="nav__progress" style={{ '--p': progress }} aria-hidden="true" />

      {/* ---------------- Mobile drawer ---------------- */}
      <div className={`drawer ${drawer ? 'is-open' : ''}`} aria-hidden={!drawer}>
        <div className="aurora aurora--faint drawer__aurora" aria-hidden="true"><span /><span /><span /></div>

        <div className={`drawer__stage ${subPanel ? 'is-sub' : ''}`}>
          <div className="drawer__panel" aria-hidden={!!subPanel}>
            <nav aria-label="Mobile">
              <button type="button" className="drawer__row drawer__item" style={{ '--i': 0 }} onClick={() => setSubPanel('capabilities')}>
                <span>What we do</span><ArrowR />
              </button>
              <button type="button" className="drawer__row drawer__item" style={{ '--i': 1 }} onClick={() => setSubPanel('sectors')}>
                <span>Who we serve</span><ArrowR />
              </button>
              <NavLink to="/our-work" style={{ '--i': 2 }} className={({ isActive }) => `drawer__row drawer__item ${isActive ? 'is-active' : ''}`}>
                <span>Our Work</span>
              </NavLink>
              <NavLink to="/company" style={{ '--i': 3 }} className={({ isActive }) => `drawer__row drawer__item ${isActive ? 'is-active' : ''}`}>
                <span>About us</span>
              </NavLink>
              <NavLink to="/contact" style={{ '--i': 4 }} className={({ isActive }) => `drawer__row drawer__item ${isActive ? 'is-active' : ''}`}>
                <span>Contact</span>
              </NavLink>
            </nav>

            <div className="drawer__foot drawer__item" style={{ '--i': 5 }}>
              <Link to="/contact" className="btn btn--primary drawer__cta">
                Start a conversation <span className="arw" aria-hidden="true">→</span>
              </Link>

              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="drawer__contact">
                <IconPhone /><span>{brand.phone}</span>
              </a>
              <a href={`mailto:${brand.email}`} className="drawer__contact">
                <IconMail /><span>{brand.email}</span>
              </a>
            </div>
          </div>

          <div className="drawer__panel" aria-hidden={!subPanel} key={subPanel || 'empty'}>
            {sub && (
              <>
                <button type="button" className="drawer__back" onClick={() => setSubPanel(null)}>
                  <ArrowL /><span>Menu</span>
                </button>
                <h2 className="drawer__sub-title drawer__item" style={{ '--i': 0 }}>{sub.title}</h2>
                <Link to={sub.allTo} className="drawer__all drawer__item" style={{ '--i': 1 }}>
                  {sub.allLabel} <span aria-hidden="true">→</span>
                </Link>
                <div className="drawer__list">
                  {sub.items.map((it, i) => (
                    <Link key={it.label} to={it.to} className="drawer__sub-link drawer__item" style={{ '--i': i + 2 }}>
                      {it.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
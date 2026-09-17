import { useState } from 'react';
import PageHero from '../components/PageHero';
import useReveal from '../hooks/useReveal';
import { brand, capabilities } from '../data/content';

const EMPTY = { name: '', company: '', email: '', phone: '', interest: '', message: '' };

// Web3Forms access key — this is a public identifier by design (see
// https://docs.web3forms.com), safe to ship in client-side code. It just
// tells Web3Forms which inbox (info@karpexa.com) to deliver submissions to.
const WEB3FORMS_ACCESS_KEY = '94bcb4b9-103f-44ea-9c2d-30e35cabff83';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function Contact() {
  useReveal();
  const [form, setForm] = useState(EMPTY);
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle');
  // Honeypot: real visitors never see or fill this field. If it arrives
  // non-empty, Web3Forms silently drops the submission as spam.
  const [botcheck, setBotcheck] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Enquiry from ${form.name || 'the website'}${form.company ? ` — ${form.company}` : ''}`,
      from_name: form.name || 'Karpexa website',
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      interest: form.interest,
      message: form.message,
      botcheck,
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('sent');
        setForm(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        crumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        kicker="Contact"
        title="Start with the problem, not the pitch"
        tagline="Tell us what is not working. You will get a considered reply from an engineer, usually within one business day."
        aside="No qualification call, no discovery deck. If we are not the right fit we will say so and, where we can, point you to someone who is."
      />

      <section className="section" data-theme="light">
        <div className="container split">
          {/* ---------- Form ---------- */}
          <div className="reveal">
            <p className="eyebrow eyebrow--accent">Send a message</p>
            <h2 className="s-head">Tell us where things stand</h2>

            {status === 'sent' && (
              <p className="chip chip--mono" style={{ marginBottom: 22 }}>
                Message sent — we typically reply within one business day.
              </p>
            )}
            {status === 'error' && (
              <p className="chip chip--mono" style={{ marginBottom: 22 }}>
                Something went wrong — please try again, or write to {brand.email} directly.
              </p>
            )}

            <form onSubmit={onSubmit} noValidate={false}>
              {/* Honeypot — genuinely hidden from people, left for bots to fill. */}
              <input
                type="text"
                name="botcheck"
                value={botcheck}
                onChange={(e) => setBotcheck(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              <div className="grid g-2">
                <label className="field">
                  <span className="field__label">Your name</span>
                  <input type="text" required value={form.name} onChange={set('name')} autoComplete="name" placeholder="Full name" />
                </label>
                <label className="field">
                  <span className="field__label">Company</span>
                  <input type="text" value={form.company} onChange={set('company')} autoComplete="organization" placeholder="Organisation" />
                </label>
                <label className="field">
                  <span className="field__label">Work email</span>
                  <input type="email" required value={form.email} onChange={set('email')} autoComplete="email" placeholder="name@company.com" />
                </label>
                <label className="field">
                  <span className="field__label">Phone</span>
                  <input type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="Optional" />
                </label>
              </div>

              <label className="field" style={{ marginTop: 18 }}>
                <span className="field__label">What is this about?</span>
                <select value={form.interest} onChange={set('interest')}>
                  <option value="">Select a capability (optional)</option>
                  {capabilities.map((c) => (
                    <option key={c.slug} value={c.title}>{c.title}</option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
              </label>

              <label className="field" style={{ marginTop: 18 }}>
                <span className="field__label">The situation</span>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={set('message')}
                  placeholder="A paragraph is plenty. What is happening, what you have tried, and what a good outcome looks like."
                />
              </label>

              <div className="btn-row" style={{ marginTop: 26 }}>
                <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                  {status !== 'sending' && <span className="arw" aria-hidden="true">→</span>}
                </button>
              </div>
            </form>
          </div>

          {/* ---------- Direct details ---------- */}
          <div className="reveal reveal--right contact-aside">
            <p className="eyebrow eyebrow--accent">Direct lines</p>
            <h2 className="s-head">Or skip the form</h2>

            <div className="dlist dlist--card">
              <div className="dlist__item">
                <h3>Email</h3>
                <p><a className="tlink" href={`mailto:${brand.email}`}>{brand.email}</a></p>
              </div>
              <div className="dlist__item">
                <h3>Phone</h3>
                <p><a className="tlink" href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a></p>
              </div>
              <div className="dlist__item">
                <h3>Office</h3>
                <p>
                  {brand.address.line1}<br />
                  {brand.address.line2}<br />
                  {brand.address.city}, {brand.address.region} {brand.address.postal}<br />
                  {brand.address.countryName}
                </p>
              </div>
            </div>

            <div className="map-embed reveal">
              <iframe
                title="Karpexa Technologies — office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${brand.full}, ${brand.address.line1}, ${brand.address.line2}, ${brand.address.city}, ${brand.address.region} ${brand.address.postal}`
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <p className="status" style={{ marginTop: 26 }}>
              <span className="status__dot" />Typically replying within one business day
            </p>
          </div>
        </div>
      </section>

      <section className="section section--sm" data-theme="obsidian">
        <div className="aurora aurora--faint" aria-hidden="true"><span /><span /><span /></div>
        <div className="container rel">
          <div className="s-head s-head--split reveal">
            <div>
              <p className="eyebrow eyebrow--plain">What happens next</p>
              <h2>Three steps, no theatre</h2>
            </div>
          </div>
          <div className="uses">
            <article className="use reveal">
              <span className="use__k">Step 01</span>
              <h3>We read it properly</h3>
              <p>An engineer reads your message, not a form-routing rule. If something is unclear we ask one specific question rather than booking a call to find out.</p>
            </article>
            <article className="use reveal">
              <span className="use__k">Step 02</span>
              <h3>A short conversation</h3>
              <p>Thirty to forty-five minutes, usually enough to establish whether there is a real fit and what the first piece of work would be.</p>
            </article>
            <article className="use reveal">
              <span className="use__k">Step 03</span>
              <h3>Something in writing</h3>
              <p>A scoped proposal with itemised pricing and dates — or a straight answer that we are not the right firm for this one.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

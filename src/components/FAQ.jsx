import { useState } from 'react';

export default function FAQ({ items, startOpen = -1 }) {
  const [open, setOpen] = useState(startOpen);

  return (
    <div className="faq">
      {items.map((item, i) => (
        <div className={`faq__item reveal ${open === i ? 'is-open' : ''}`} key={item.q}>
          <button
            type="button"
            className="faq__q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{item.q}</span>
            <span className="faq__ico" aria-hidden="true" />
          </button>
          <div className="faq__a">
            <div><p>{item.a}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

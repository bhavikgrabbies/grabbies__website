import { useState } from 'react';
import faqData from '../content/faq.json';
import type { FaqItem } from '../types/content';
import './Faq.css';

export default function Faq() {
  const items = (faqData as { items: FaqItem[] }).items;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={item.q} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
            {item.q}
            <span className="plus">+</span>
          </button>
          {openIndex === i && <div className="faq-a">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

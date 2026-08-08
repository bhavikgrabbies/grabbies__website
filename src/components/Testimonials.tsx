import testimonialsData from '../content/testimonials.json';
import type { Testimonial } from '../types/content';
import { useReveal } from '../hooks/useReveal';
import './Testimonials.css';

function initials(name: string) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}

function Card({ t }: { t: Testimonial }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="fade-up testimonial-card">
      <span className="quote-mark">&ldquo;</span>
      <p className="quote">{t.quote}</p>
      <div className="testimonial-who">
        <div className="avatar">{initials(t.name)}</div>
        <div>
          <b>{t.name}</b>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const items = (testimonialsData as { items: Testimonial[] }).items;
  if (items.length === 0) return null;
  return <div className="testimonial-grid">{items.map((t) => <Card key={t.name} t={t} />)}</div>;
}

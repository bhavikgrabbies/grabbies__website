import home from '../content/home.json';
import type { HomeContent } from '../types/content';
import { useReveal } from '../hooks/useReveal';
import './VerticalsGrid.css';

function Card({ title, description }: { title: string; description: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="fade-up vertical-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function VerticalsGrid() {
  const h = home as HomeContent;
  return (
    <section>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Where We Fit</span>
          <h2>Built for wherever people gather</h2>
          <p>One machine, tailored stocking for every kind of venue.</p>
        </div>
        <div className="verticals-grid">
          {h.verticals.map((v) => (
            <Card key={v.title} title={v.title} description={v.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

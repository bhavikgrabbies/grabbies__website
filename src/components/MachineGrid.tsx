import { Link } from 'react-router-dom';
import machinesData from '../content/machines.json';
import type { Machine } from '../types/content';
import { useReveal } from '../hooks/useReveal';
import './MachineGrid.css';

function Card({ m }: { m: Machine }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="fade-up machine-card">
      <div className="thumb"><img src={m.image} alt={m.name} loading="lazy" /></div>
      <div className="info">
        <h3>{m.name}</h3>
        <p className="tagline">{m.tagline}</p>
        <ul>
          {m.features.map((f) => (
            <li key={f}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
              {f}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-outline btn-block">Enquire About This Model</Link>
      </div>
    </div>
  );
}

function Featured({ m }: { m: Machine }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="fade-up machine-featured">
      <div className="machine-featured-media"><img src={m.image} alt={m.name} loading="lazy" /></div>
      <div className="machine-featured-info">
        <h3>{m.name}</h3>
        <p className="tagline">{m.tagline}</p>
        <ul>
          {m.features.map((f) => (
            <li key={f}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
              {f}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary">Enquire About This Model</Link>
      </div>
    </div>
  );
}

export default function MachineGrid({ limit }: { limit?: number }) {
  const items = (machinesData as { items: Machine[] }).items;
  const list = limit ? items.slice(0, limit) : items;

  if (list.length === 1) return <Featured m={list[0]} />;
  return <div className="machine-grid">{list.map((m) => <Card key={m.name} m={m} />)}</div>;
}

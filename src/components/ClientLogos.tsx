import clientsData from '../content/clients.json';
import type { Client } from '../types/content';
import './ClientLogos.css';

export default function ClientLogos({ emptyFallback }: { emptyFallback?: boolean }) {
  const items = (clientsData as { items: Client[] }).items;

  if (items.length === 0) {
    if (!emptyFallback) return null;
    return <div className="badge-empty">Client logos coming soon.</div>;
  }

  return (
    <div className="client-logos">
      {items.map((c) => (
        c.logo
          ? <img key={c.name} src={c.logo} alt={c.name} />
          : <span key={c.name} className="client-name">{c.name}</span>
      ))}
    </div>
  );
}

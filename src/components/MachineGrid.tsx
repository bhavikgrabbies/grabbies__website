import machinesData from '../content/machines.json';
import type { Machine } from '../types/content';
import { useReveal } from '../hooks/useReveal';
import './MachineGrid.css';

function Thumb({ m }: { m: Machine }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="fade-up machine-thumb">
      <img src={m.image} alt={m.name} loading="lazy" />
    </div>
  );
}

export default function MachineGrid() {
  const items = (machinesData as { items: Machine[] }).items;
  return <div className="machine-showcase">{items.map((m, i) => <Thumb key={i} m={m} />)}</div>;
}

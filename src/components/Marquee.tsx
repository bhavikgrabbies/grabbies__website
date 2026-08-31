import './Marquee.css';

export interface MarqueeItem {
  name: string;
  logo?: string;
}

export default function Marquee({ items, reverse }: { items: MarqueeItem[]; reverse?: boolean }) {
  // Duplicate the list so the CSS animation can loop seamlessly at -50%.
  const looped = [...items, ...items];

  return (
    <div className="marquee">
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {looped.map((item, i) => (
          <span className="marquee-item" key={item.name + i}>
            {item.logo ? (
              <img src={item.logo} alt={item.name} />
            ) : (
              <span className="marquee-placeholder">{item.name}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

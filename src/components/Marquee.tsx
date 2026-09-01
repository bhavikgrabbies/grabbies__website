import { useEffect, useRef, useState } from 'react';
import './Marquee.css';

export interface MarqueeItem {
  name: string;
  logo?: string;
}

const PX_PER_SECOND = 40;

export default function Marquee({ items, reverse }: { items: MarqueeItem[]; reverse?: boolean }) {
  // Duplicated so scrollLeft can wrap seamlessly at the halfway point.
  const looped = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Start each direction from a position where wrapping both ways works.
    if (reverse) track.scrollLeft = track.scrollWidth / 2;

    let frame: number;
    let last = performance.now();

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        const half = track.scrollWidth / 2;
        let next = track.scrollLeft + (reverse ? -1 : 1) * PX_PER_SECOND * dt;
        if (next >= half) next -= half;
        if (next < 0) next += half;
        track.scrollLeft = next;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [paused, reverse]);

  return (
    <div
      className="marquee"
      ref={trackRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="marquee-track">
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

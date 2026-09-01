import { useEffect, useRef, useState } from 'react';
import './Marquee.css';

export interface MarqueeItem {
  name: string;
  logo?: string;
}

const PX_PER_SECOND = 40;
const RESUME_AFTER_IDLE_MS = 1200;

export default function Marquee({ items, reverse }: { items: MarqueeItem[]; reverse?: boolean }) {
  // Duplicated so scrollLeft can wrap seamlessly at the halfway point.
  const looped = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Resuming is always driven by this idle timer rather than by pairing up
  // enter/leave or down/up events directly — those pairs can desync on touch
  // devices (e.g. a synthetic mouseenter with no matching mouseleave), which
  // used to leave the marquee paused forever after a single interaction.
  const pauseAndScheduleResume = () => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_AFTER_IDLE_MS);
  };

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

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
      onMouseEnter={pauseAndScheduleResume}
      onPointerDown={pauseAndScheduleResume}
      onTouchStart={pauseAndScheduleResume}
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

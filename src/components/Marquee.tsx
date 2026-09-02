import { useEffect, useRef } from 'react';
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
  const thumbRef = useRef<HTMLDivElement>(null);

  // Everything here runs off plain refs/closures inside one stable effect,
  // deliberately avoiding React state for the pause/resume flag. Driving
  // pause/resume through setState forced a re-render + effect teardown and
  // rebuild on every hover/touch, which was the actual cause of the marquee
  // visibly flickering/vanishing and the animation getting stuck — not just
  // a resume-timing issue.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Start each direction from a position where wrapping both ways works.
    if (reverse) track.scrollLeft = track.scrollWidth / 2;

    let paused = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | undefined;
    const pauseAndScheduleResume = () => {
      paused = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => { paused = false; }, RESUME_AFTER_IDLE_MS);
    };
    // Only treat wheel input as an interaction when it's actually horizontal
    // (trackpad two-finger swipe) — a plain vertical mouse-wheel scroll of
    // the page while the cursor happens to be over the marquee shouldn't
    // pause it.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) pauseAndScheduleResume();
    };

    track.addEventListener('mouseenter', pauseAndScheduleResume);
    track.addEventListener('pointerdown', pauseAndScheduleResume);
    track.addEventListener('touchstart', pauseAndScheduleResume, { passive: true });
    track.addEventListener('wheel', onWheel, { passive: true });

    let frame: number;
    let last = performance.now();

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const half = track.scrollWidth / 2;
      if (!paused && half > 0) {
        let next = track.scrollLeft + (reverse ? -1 : 1) * PX_PER_SECOND * dt;
        if (next >= half) next -= half;
        if (next < 0) next += half;
        track.scrollLeft = next;
      }
      if (half > 0 && thumbRef.current) {
        const progress = (track.scrollLeft % half) / half;
        thumbRef.current.style.transform = `translateX(${progress * (100 / 0.18 - 100)}%)`;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      track.removeEventListener('mouseenter', pauseAndScheduleResume);
      track.removeEventListener('pointerdown', pauseAndScheduleResume);
      track.removeEventListener('touchstart', pauseAndScheduleResume);
      track.removeEventListener('wheel', onWheel);
    };
  }, [reverse]);

  return (
    <>
      <div className="marquee" ref={trackRef}>
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
      <div className="marquee-progress-track">
        <div className="marquee-progress-thumb" ref={thumbRef} />
      </div>
    </>
  );
}

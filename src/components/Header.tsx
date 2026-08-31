import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import settings from '../content/settings.json';
import type { Settings } from '../types/content';
import './Header.css';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/machines', label: 'Machines' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/about', label: 'About' },
];

const MINIMIZE_AT = 60;

export default function Header() {
  const s = settings as Settings;
  const [scrolled, setScrolled] = useState(false);
  const [pastThreshold, setPastThreshold] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(110);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // IntersectionObserver on a sentinel pinned to the top of the document —
  // more reliable across mobile browsers than reading window.scrollY on every
  // scroll tick, which wasn't triggering re-renders on some phones in testing.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isPast = !entry.isIntersecting;
        setScrolled(isPast);
        setPastThreshold(isPast);
        if (isPast) setExpanded(false);
      },
      { rootMargin: `-${MINIMIZE_AT}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // The header is position:fixed (iOS Safari doesn't reliably repaint
  // position:sticky elements when their own padding/height changes), so a
  // spacer below it has to reserve the exact same space. Measure the real
  // rendered height instead of guessing, so it's never off by a few pixels.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const ro = new ResizeObserver(([entry]) => {
      setHeaderHeight(entry.contentRect.height);
    });
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const minimized = pastThreshold && !expanded;

  return (
    <>
      <div ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />
      <header ref={headerRef} className={`site-header${scrolled ? ' scrolled' : ''}${minimized ? ' minimized' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt={s.brand} />
          </Link>
          <nav className={`nav-links${open ? ' open' : ''}`}>
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-cta">
            <a className="nav-phone" href={`tel:${s.phone_tel}`}>{s.phone_display}</a>
            <Link to="/contact" className="btn btn-primary btn-sm">Book a Demo</Link>
            {minimized && (
              <button
                className="nav-expand"
                aria-label="Expand header"
                onClick={() => setExpanded(true)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
            )}
            <button
              className="nav-toggle"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="header-spacer" style={{ height: headerHeight }} aria-hidden="true" />
    </>
  );
}

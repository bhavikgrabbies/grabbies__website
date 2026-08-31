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
  const [scrollY, setScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Scrolling down re-collapses a manually expanded header; scrolling up leaves it as-is.
      if (y > lastScrollY.current + 5) setExpanded(false);
      lastScrollY.current = y;
      setScrollY(y);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const scrolled = scrollY > 10;
  const minimized = scrollY > MINIMIZE_AT && !expanded;

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}${minimized ? ' minimized' : ''}`}>
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
  );
}

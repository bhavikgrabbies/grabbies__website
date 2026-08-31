import { useEffect, useState } from 'react';
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

export default function Header() {
  const s = settings as Settings;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
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

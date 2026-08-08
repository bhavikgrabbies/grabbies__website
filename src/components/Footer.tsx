import { Link } from 'react-router-dom';
import settings from '../content/settings.json';
import type { Settings } from '../types/content';
import './Footer.css';

export default function Footer() {
  const s = settings as Settings;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/img/logo.svg" alt={s.brand} />
            <p>Smart vending machines for offices, gyms, hospitals, campuses and malls — cashless, 24/7, fully managed. Serving {s.service_area}.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/machines">Machines</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Partner</h4>
            <ul>
              <li><Link to="/solutions">For Corporates</Link></li>
              <li><Link to="/solutions">For Venue Owners</Link></li>
              <li><Link to="/solutions">For Brands</Link></li>
              <li><Link to="/solutions">Franchise</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>{s.address}</li>
              <li><a href={`tel:${s.phone_tel}`}>{s.phone_display}</a></li>
              <li><a href={`mailto:${s.email}`}>{s.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {s.brand}. All rights reserved.</span>
          <span>Made for Delhi NCR, with UPI built in.</span>
        </div>
      </div>
    </footer>
  );
}

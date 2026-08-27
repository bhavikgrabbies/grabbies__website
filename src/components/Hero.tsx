import { Link } from 'react-router-dom';
import home from '../content/home.json';
import images from '../content/images.json';
import type { HomeContent, ImagesContent } from '../types/content';
import { useReveal } from '../hooks/useReveal';
import './Hero.css';

export default function Hero() {
  const h = home as HomeContent;
  const img = images as ImagesContent;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div ref={ref} className="fade-up hero-copy">
          <span className="eyebrow">{h.hero_eyebrow}</span>
          <h1>{h.hero_headline}</h1>
          <p>{h.hero_lead}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Book a Demo</Link>
            <Link to="/solutions" className="btn btn-outline">Partner With Us</Link>
          </div>
        </div>
        <div className="hero-media">
          <img src={img.hero} alt="Team using a Grabbies smart vending machine" />
        </div>
      </div>
    </section>
  );
}

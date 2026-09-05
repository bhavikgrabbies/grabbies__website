import PageHero from '../components/PageHero';
import MachineGrid from '../components/MachineGrid';
import Chips from '../components/Chips';
import CTABand from '../components/CTABand';
import pagesData from '../content/pages.json';
import images from '../content/images.json';
import type { PagesContent, ImagesContent } from '../types/content';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Machines() {
  const p = (pagesData as PagesContent).machines;
  const img = images as ImagesContent;
  usePageTitle('Machines');

  return (
    <>
      <PageHero {...p} />
      <section>
        <div className="container">
          <MachineGrid />
          <p className="machine-showcase-note">
            Every machine ships with touchscreen ordering, cashless payments and remote monitoring. We handle picking the right one for your space, so you don't have to.
          </p>
        </div>
      </section>
      <section className="bg-soft-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What's Inside</span>
            <h2>Curated for on-the-go days</h2>
            <p>Stocking is tailored per location: protein-heavy at gyms, snacks and beverages at offices, affordable essentials at campuses.</p>
          </div>
          <Chips />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Underneath It All</span>
              <h2>Every machine is cloud-connected</h2>
              <ul className="segment-list">
                <li><span className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></span><div><b>Remote inventory monitoring</b><span>Stock, sales and machine health tracked in real time.</span></div></li>
                <li><span className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></span><div><b>Temperature control</b><span>Keeps food and beverages fresh and within shelf-life.</span></div></li>
                <li><span className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></span><div><b>UPI, card & wallet payments</b><span>PhonePe, GPay, Paytm and cards, every transaction logged.</span></div></li>
                <li><span className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></span><div><b>Secure by design</b><span>Locking systems and monitored placements.</span></div></li>
              </ul>
            </div>
            <img src={img.banner} alt="Delhi NCR's fastest growing vending network" style={{ borderRadius: 'var(--radius)' }} />
          </div>
        </div>
      </section>
      <CTABand heading="Not sure which machine fits your space?" body="Tell us your footfall and venue type, and we'll recommend the right fit and product mix." primaryLabel="Get a Recommendation" />
    </>
  );
}

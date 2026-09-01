import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import VerticalsGrid from '../components/VerticalsGrid';
import Marquee from '../components/Marquee';
import Chips from '../components/Chips';
import Steps from '../components/Steps';
import PartnerTabs from '../components/PartnerTabs';
import Testimonials from '../components/Testimonials';
import CTABand from '../components/CTABand';
import Faq from '../components/Faq';
import { useEffect } from 'react';
import marqueeBrands from '../content/marqueeBrands.json';

export default function Home() {
  useEffect(() => {
    document.title = 'Grabbies — Smart Vending Machines for Offices, Gyms & Campuses | Delhi NCR';
  }, []);
  return (
    <>
      <Hero />
      <TrustStrip />

      <VerticalsGrid />

      <section className="bg-soft-section" style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="section-head center" style={{ marginBottom: 32 }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What's Stocked</span>
            <h2>Brands you already know</h2>
            <p>A curated mix of snack, beverage and daily-essential brands, stocked fresh in every machine.</p>
          </div>
        </div>
        <Marquee items={marqueeBrands.items} />
      </section>

      <section>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What Our Partners Say</span>
            <h2>Don't take our word for it</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="bg-soft-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What's Inside</span>
            <h2>Curated for on-the-go days</h2>
          </div>
          <Chips />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>From enquiry to a live machine, in three steps</h2>
          </div>
          <Steps />
        </div>
      </section>

      <section className="bg-soft-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Partner With Grabbies</span>
            <h2>Four ways to work with us</h2>
          </div>
          <PartnerTabs />
        </div>
      </section>

      <CTABand
        heading="Ready to bring Grabbies to your space?"
        body="Whether you're a corporate office, a venue owner, or exploring a franchise — let's talk."
        showPhone
      />

      <section>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>FAQ</span>
            <h2>Common questions, answered upfront</h2>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}

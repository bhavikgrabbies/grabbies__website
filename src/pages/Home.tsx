import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ClientLogos from '../components/ClientLogos';
import VerticalsGrid from '../components/VerticalsGrid';
import MachineGrid from '../components/MachineGrid';
import Chips from '../components/Chips';
import Steps from '../components/Steps';
import PartnerTabs from '../components/PartnerTabs';
import Testimonials from '../components/Testimonials';
import CTABand from '../components/CTABand';
import Faq from '../components/Faq';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Grabbies — Smart Vending Machines for Offices, Gyms & Campuses | Delhi NCR';
  }, []);
  return (
    <>
      <Hero />
      <TrustStrip />

      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <ClientLogos />
        </div>
      </section>

      <VerticalsGrid />

      <section className="bg-soft-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Machines</span>
            <h2>Smart vending, ready to install</h2>
            <p>Touchscreen ordering, cashless payments and remote monitoring, in a finish to match your space.</p>
          </div>
          <MachineGrid limit={2} />
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/machines" className="btn btn-outline">View All Machines</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What's Inside</span>
            <h2>Curated for on-the-go days</h2>
          </div>
          <Chips />
        </div>
      </section>

      <section className="bg-soft-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>From enquiry to earning, in three steps</h2>
          </div>
          <Steps />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Partner With Grabbies</span>
            <h2>Four ways to work with us</h2>
          </div>
          <PartnerTabs />
        </div>
      </section>

      <section className="bg-soft-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>What Our Partners Say</span>
            <h2>Don't take our word for it</h2>
          </div>
          <Testimonials />
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

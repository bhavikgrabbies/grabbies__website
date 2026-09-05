import PageHero from '../components/PageHero';
import CTABand from '../components/CTABand';
import pagesData from '../content/pages.json';
import images from '../content/images.json';
import type { PagesContent, ImagesContent } from '../types/content';
import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
  const p = (pagesData as PagesContent).about;
  const img = images as ImagesContent;
  usePageTitle('About', p.subtitle);

  return (
    <>
      <PageHero {...p} />
      <section>
        <div className="container">
          <div className="split">
            <div>
              <h2>Convenience, wherever you are</h2>
              <p>At the core of Grabbies is a tech-enabled ecosystem built around snacks, beverages and daily essentials, stocked and curated to meet the needs of professionals, students and urban commuters, anytime they need something on the go.</p>
              <p>From hardware to software, logistics to last-mile restocking, Grabbies delivers a turnkey retail experience that combines efficiency, automation and customer satisfaction.</p>
            </div>
            <img src={img.lounge} alt="Grabbies machines installed in a corporate lounge" style={{ borderRadius: 'var(--radius)' }} />
          </div>
        </div>
      </section>

      <section className="bg-soft-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>How We Operate</span>
            <h2>We know your location by name</h2>
            <p>We operate across Delhi NCR. Every machine, every partner, every restock: we know your location by name. No call centres, no ticket numbers.</p>
          </div>
          <div className="verticals-grid-3">
            <div><h3>We pick up the phone</h3><p>Machine issue? Call or WhatsApp us directly for a real response in hours, with our local ops team able to reach your location the same day.</p></div>
            <div><h3>Partners, not contracts</h3><p>Every venue is a partner with a name, not an account number. Flexible terms, honest conversations, and a team invested in your success.</p></div>
            <div><h3>Delhi NCR's fastest growing network</h3><p>Expanding rapidly, with the widest reach, smart vending, and more locations and convenience. That's the Grabbies promise.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <img src={images.banner} alt="Delhi NCR's fastest growing vending network" style={{ borderRadius: 'var(--radius)' }} />
            <div>
              <span className="eyebrow">Under The Hood</span>
              <h2>Hardware and software that just works</h2>
              <ul className="segment-list">
                <li><span className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></span><div><b>Kiosk & IoT</b><span>A cloud-connected interface for remote monitoring of inventory, product health, shelf life and temperature.</span></div></li>
                <li><span className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></span><div><b>UPI & Card Payments</b><span>PhonePe, GPay, Paytm and cards accepted on every machine, every transaction logged in real time.</span></div></li>
                <li><span className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg></span><div><b>Partner App</b><span>Connects distribution staff, brands and location partners, enabling the launch of any SKU at any location.</span></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABand heading="Let's bring Grabbies to your space" body="Book a demo, or reach out with questions. We respond fast." />
    </>
  );
}

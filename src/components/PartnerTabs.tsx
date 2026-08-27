import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../content/images.json';
import type { ImagesContent } from '../types/content';
import './PartnerTabs.css';

interface Segment {
  key: string;
  tab: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: { title: string; desc: string }[];
  stats?: { value: string; label: string }[];
  useImage?: boolean;
}

const SEGMENTS: Segment[] = [
  {
    key: 'corporates', tab: 'For Corporates', eyebrow: 'For Corporates',
    title: 'A dedicated machine for your team',
    body: 'A fixed monthly rental covers the machine, software and full operations — no upfront investment, no ops headache.',
    bullets: [
      { title: 'Monthly Rental Model', desc: 'Fixed fee covers machine, software and full ops.' },
      { title: 'Custom Product Mix', desc: "Tailored to your team's preferences." },
      { title: 'Regular Restocking', desc: 'Always stocked on a fixed schedule.' },
      { title: 'Flexible Tenure', desc: '12 to 36 month agreements.' },
    ],
    stats: [
      { value: '12–36', label: 'Month tenure' },
      { value: '100+', label: 'Daily users recommended' },
      { value: '7–14', label: 'Days to go live' },
      { value: '24/7', label: 'Monitored access' },
    ],
  },
  {
    key: 'venues', tab: 'For Venue Owners', eyebrow: 'For Venue Owners',
    title: 'A managed machine for your space',
    body: 'Got a gym, hostel, clinic or high-footfall space? We place a Grabbies machine at no setup cost — fully installed and managed by our team.',
    bullets: [
      { title: 'Zero Setup Cost', desc: 'No upfront cost to host a machine at your location.' },
      { title: 'We Handle Everything', desc: 'Installation, restocking, maintenance. Entirely managed by us.' },
      { title: 'UPI Payments', desc: 'PhonePe, GPay and Paytm on every machine.' },
      { title: 'Monthly Reports', desc: 'Statements every month, always on time.' },
    ],
    stats: [
      { value: '₹0', label: 'Setup cost' },
      { value: '100%', label: 'Managed by us' },
      { value: '24/7', label: 'Machine uptime' },
      { value: '7–14', label: 'Days to install' },
    ],
  },
  {
    key: 'brands', tab: 'For Brands & Distributors', eyebrow: 'For Brands & Distributors',
    title: 'Reach the right people, in the right place',
    body: 'Our machines sit inside premium gyms, offices and universities — captive, high-value environments hard to reach through traditional retail.',
    bullets: [
      { title: 'Shelf Placement', desc: 'Get stocked across machines at relevant locations.' },
      { title: 'Sampling Campaigns', desc: 'Physical sampling at high-footfall captive locations.' },
      { title: 'Exclusive Partnerships', desc: 'Category exclusivity across our network.' },
      { title: 'Sell-Through Data', desc: 'Performance reports by location type.' },
    ],
    useImage: true,
  },
  {
    key: 'franchise', tab: 'Franchise', eyebrow: 'Franchise Opportunity',
    title: 'Build your own vending business under Grabbies',
    body: "India's organised vending market is in its early innings. We give you the brand, supply chain, software and ops playbook.",
    bullets: [
      { title: 'Grabbies-Branded Machine', desc: 'UPI payment support included.' },
      { title: 'Supply Chain Access', desc: 'Curated products at bulk rates.' },
      { title: 'ERP Software Access', desc: 'Real-time stock and sales tracking.' },
      { title: 'Ops Training & SOP', desc: 'Refill scheduling and maintenance basics.' },
    ],
    stats: [
      { value: '₹3–5L', label: 'Starting investment' },
      { value: '10–18', label: 'Months payback' },
      { value: '30–50%', label: 'Gross margin' },
      { value: '24/7', label: 'Revenue generation' },
    ],
  },
];

export default function PartnerTabs() {
  const [active, setActive] = useState(0);
  const s = SEGMENTS[active];
  const img = images as ImagesContent;

  return (
    <div>
      <div className="segment-tabs">
        {SEGMENTS.map((seg, i) => (
          <button key={seg.key} className={`segment-tab${i === active ? ' active' : ''}`} onClick={() => setActive(i)}>
            {seg.tab}
          </button>
        ))}
      </div>
      <div className="segment-panel">
        <div>
          <span className="eyebrow">{s.eyebrow}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <ul className="segment-list">
            {s.bullets.map((b) => (
              <li key={b.title}>
                <span className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg></span>
                <div><b>{b.title}</b><span>{b.desc}</span></div>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary">Send Enquiry</Link>
        </div>
        <div className="segment-visual">
          {s.useImage ? (
            <img src={img.lounge} alt="Grabbies machines placed in a corporate lounge" />
          ) : (
            <div className="segment-stats">
              {s.stats?.map((stat) => (
                <div key={stat.label} className="segment-stat">
                  <span className="value">{stat.value}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

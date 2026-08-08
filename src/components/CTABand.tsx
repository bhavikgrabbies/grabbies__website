import { Link } from 'react-router-dom';
import settings from '../content/settings.json';
import type { Settings } from '../types/content';
import './CTABand.css';

interface Props {
  heading: string;
  body: string;
  primaryLabel?: string;
  primaryTo?: string;
  showPhone?: boolean;
}

export default function CTABand({ heading, body, primaryLabel = 'Book a Demo', primaryTo = '/contact', showPhone }: Props) {
  const s = settings as Settings;
  return (
    <section>
      <div className="container">
        <div className="cta-band">
          <h2>{heading}</h2>
          <p>{body}</p>
          <div className="actions">
            <Link to={primaryTo} className="btn btn-primary">{primaryLabel}</Link>
            {showPhone && <a href={`tel:${s.phone_tel}`} className="btn btn-outline-light">Call {s.phone_display}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}

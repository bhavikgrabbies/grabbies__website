import PageHero from '../components/PageHero';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import CTABand from '../components/CTABand';
import pagesData from '../content/pages.json';
import type { PagesContent } from '../types/content';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Clients() {
  const p = (pagesData as PagesContent).clients;
  usePageTitle('Clients');
  return (
    <>
      <PageHero {...p} />
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <ClientLogos emptyFallback />
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
      <CTABand heading="Want to be our next success story?" body="Tell us about your space and we'll walk you through what a Grabbies machine could look like there." />
    </>
  );
}

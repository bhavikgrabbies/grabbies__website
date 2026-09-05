import PageHero from '../components/PageHero';
import PartnerTabs from '../components/PartnerTabs';
import Faq from '../components/Faq';
import pagesData from '../content/pages.json';
import type { PagesContent } from '../types/content';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Solutions() {
  const p = (pagesData as PagesContent).solutions;
  usePageTitle('Solutions', p.subtitle);
  return (
    <>
      <PageHero {...p} />
      <section>
        <div className="container">
          <PartnerTabs />
        </div>
      </section>
      <section className="bg-soft-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>FAQ</span>
            <h2>Questions before you partner with us</h2>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}

import './PageHero.css';

export default function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

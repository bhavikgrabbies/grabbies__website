import './TrustStrip.css';

const ITEMS = [
  'Delhi NCR coverage',
  '24/7 access, every day',
  'UPI, card & wallet payments',
  'Fully managed, no setup cost',
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-grid">
        {ITEMS.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

import './Chips.css';

const CATEGORIES = [
  'Energy Drinks', 'Protein Bars', 'Healthy Snacks', 'Beverages', 'Protein Nutrition',
  'Confectionery', 'Daily Essentials', 'Sports Drinks', 'Biscuits & Cookies',
];

export default function Chips() {
  return (
    <div className="chip-row">
      {CATEGORIES.map((c) => <span key={c} className="chip">{c}</span>)}
    </div>
  );
}

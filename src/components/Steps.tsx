import './Steps.css';

const STEPS = [
  { n: '01', title: 'We visit & plan', body: 'Send an enquiry and we assess your space, footfall and audience to recommend the right machine and product mix.' },
  { n: '02', title: 'We install & manage', body: 'Live in 7–14 business days. We handle installation, restocking, maintenance and UPI setup — you provide the space.' },
  { n: '03', title: 'You track & earn', body: 'Monthly revenue share or a fixed rental, with statements on time and a real dashboard to track every sale.' },
];

export default function Steps() {
  return (
    <div className="steps-grid">
      {STEPS.map((s) => (
        <div key={s.n} className="step">
          <span className="num">{s.n}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}

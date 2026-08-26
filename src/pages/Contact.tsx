import { useState, type FormEvent } from 'react';
import PageHero from '../components/PageHero';
import settings from '../content/settings.json';
import pagesData from '../content/pages.json';
import type { Settings, PagesContent } from '../types/content';
import { usePageTitle } from '../hooks/usePageTitle';
import './Contact.css';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Contact() {
  const s = settings as Settings;
  const p = (pagesData as PagesContent).contact;
  usePageTitle('Contact');

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { 'form-name': 'contact' };
    data.forEach((value, key) => { payload[key] = value.toString(); });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <PageHero {...p} />
      <section style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <div className="contact-info-card">
            <div className="contact-info-item">
              <b>Marketing Office</b>
              <span>{s.address}</span>
            </div>
            <div className="contact-info-item">
              <b>Call or WhatsApp</b>
              <a href={`tel:${s.phone_tel}`}>{s.phone_display}</a>
            </div>
            <div className="contact-info-item">
              <b>Email</b>
              <a href={`mailto:${s.email}`}>{s.email}</a>
            </div>
            <div className="contact-info-item">
              <b>Response time</b>
              <span>Real response within hours — same-day site visits available across Delhi NCR.</span>
            </div>
          </div>

          <div>
            <h2 style={{ marginTop: 0 }}>Send an enquiry</h2>

            {status === 'sent' ? (
              <div className="form-success">
                <b>Thanks — your enquiry is in.</b>
                <p>We usually respond within a few hours. In the meantime, feel free to call or WhatsApp us directly.</p>
              </div>
            ) : (
              <>
                <p>Tell us a bit about your space and we'll get back to you with next steps.</p>
                <form name="contact" method="post" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input id="name" name="name" type="text" placeholder="Your name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 " required />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="field">
                    <label htmlFor="type">I am a...</label>
                    <select id="type" name="type">
                      <option>Corporate looking for a machine</option>
                      <option>Venue owner (gym, hostel, clinic, etc.)</option>
                      <option>Brand or distributor</option>
                      <option>Interested in a franchise</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Tell us about your space</label>
                    <textarea id="message" name="message" placeholder="Location, approximate daily footfall, and anything else useful..." />
                  </div>
                  {status === 'error' && (
                    <p className="form-error">Something went wrong sending that — please call or WhatsApp us instead, or try again.</p>
                  )}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                  </button>
                </form>
              </>
            )}

            <p style={{ fontSize: '0.82rem', marginTop: 14 }}>
              Prefer WhatsApp? <a href={s.whatsapp_link} style={{ color: 'var(--teal-dark)', fontWeight: 700 }}>Message us directly →</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react';
import './Contact.css';

const contactInfo = [
  { icon: '📍', label: 'Location', value: 'Gweru, Midlands Province, Zimbabwe' },
  { icon: '✉', label: 'Email', value: 'ntandoyenkosi@novaspark.ntando', href: 'mailto:ntandoyenkosi@novaspark.ntando' },
  { icon: '📱', label: 'WhatsApp', value: 'Chat with us on WhatsApp', href: 'https://wa.me/263772000000?text=Hi%20NovaSpark%2C%20I%20need%20help%20with%20an%20ICT%20project' },
  { icon: '🕐', label: 'Response Time', value: 'Within 2–4 hours on business days' },
];

const services = [
  'Web Development','Mobile App','UI/UX Design','E-commerce Store',
  'School Management System','Church / NGO System','Healthcare System',
  'POS & Inventory System','HR & Payroll System','CCTV Installation',
  'Network & IT Infrastructure','IT Support & Maintenance',
  'Cloud & Hosting','Digital Marketing','IT Consulting','Other ICT Solution',
];

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', budget:'', message:'' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true); setError('');
    await new Promise(r => setTimeout(r, 1200));
    setSent(true); setLoading(false);
  };

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>
            Let's Solve Your <span className="gradient-text">ICT Challenge</span>
          </h1>
          <p className="page-hero__sub">
            Website, mobile app, school system, CCTV, networking or any other ICT solution —
            tell us what you need and we'll get back to you within 2–4 hours. Free consultation.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            {contactInfo.map(c => (
              <div key={c.label} className="contact-info__item">
                <span className="contact-info__icon">{c.icon}</span>
                <div>
                  <span className="contact-info__label">{c.label}</span>
                  {c.href
                    ? <a href={c.href} className="contact-info__value contact-info__value--link">{c.value}</a>
                    : <span className="contact-info__value">{c.value}</span>}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/263772000000?text=Hi%20NovaSpark%2C%20I%20need%20help%20with%20an%20ICT%20project"
              className="whatsapp-btn"
              target="_blank" rel="noopener noreferrer"
            >
              <span>💬</span>
              <div>
                <strong>Chat on WhatsApp</strong>
                <span>Quick responses — usually under 1 hour</span>
              </div>
            </a>

            <div className="contact-availability">
              <div className="contact-availability__dot" />
              <div>
                <strong>Currently Available</strong>
                <span>Accepting new projects — contact us today</span>
              </div>
            </div>

            <div className="contact-ict-badges">
              <p>We handle</p>
              <div className="ict-badges">
                {['Web Dev','Mobile Apps','School Systems','CCTV','Networking','POS Systems','Cloud Hosting','IT Support'].map(b => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <span>⚡</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 2–4 hours at <strong>{form.email}</strong>.</p>
                <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>For urgent matters, WhatsApp us directly.</p>
                <a href="https://wa.me/263772000000" className="btn btn-primary" style={{ marginTop: '20px' }}>💬 WhatsApp Us</a>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Chiedza Moyo" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+263 77X XXX XXX" />
                  </div>
                  <div className="form-group">
                    <label>ICT Service Needed *</label>
                    <select required name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select a budget...</option>
                    <option>Under $100</option>
                    <option>$100 – $300</option>
                    <option>$300 – $500</option>
                    <option>$500 – $1,000</option>
                    <option>$1,000+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell Us About Your Project *</label>
                  <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Describe what you need — e.g. 'I need a school management system for 500 students in Gweru' or 'I need CCTV cameras for my shop'..." />
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }} disabled={loading}>
                  {loading ? 'Sending...' : '⚡ Send Message'}
                </button>
                <p className="form-note">We reply within 2–4 hours. Your info is never shared.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

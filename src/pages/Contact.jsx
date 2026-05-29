import { useState } from 'react';
import './Contact.css';

const contactInfo = [
  { icon: '📍', label: 'Location', value: 'Gweru, Midlands Province, Zimbabwe' },
  { icon: '✉', label: 'Email', value: 'ntandoyenkosi@novaspark.dev', href: 'mailto:ntandoyenkosi@novaspark.dev' },
  { icon: '📱', label: 'WhatsApp', value: '+263 77X XXX XXX', href: 'https://wa.me/263' },
  { icon: '🕐', label: 'Response Time', value: 'Within 2–4 hours on business days' },
];

const services = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'E-commerce Store',
  'Custom System',
  'IT Consulting',
  'Digital Marketing',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Simulate submission (replace with EmailJS or your backend)
    try {
      await new Promise(r => setTimeout(r, 1200));
      setSent(true);
    } catch {
      setError('Something went wrong. Please email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>
            Let's Build Something <span className="gradient-text">Together</span>
          </h1>
          <p className="page-hero__sub">
            Tell us what you're building. Free consultation — no commitment, no pressure.
            We respond within 2–4 hours.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          {/* LEFT — Info */}
          <div className="contact-info">
            {contactInfo.map(c => (
              <div key={c.label} className="contact-info__item">
                <span className="contact-info__icon">{c.icon}</span>
                <div>
                  <span className="contact-info__label">{c.label}</span>
                  {c.href
                    ? <a href={c.href} className="contact-info__value contact-info__value--link">{c.value}</a>
                    : <span className="contact-info__value">{c.value}</span>
                  }
                </div>
              </div>
            ))}

            <div className="contact-availability">
              <div className="contact-availability__dot" />
              <div>
                <strong>Currently Available</strong>
                <span>Taking on new projects for Q3 2025</span>
              </div>
            </div>

            <div className="contact-social">
              <p>Also reach us on</p>
              <div className="contact-social__links">
                <a href="https://wa.me/263" className="social-chip">💬 WhatsApp</a>
                <a href="mailto:ntandoyenkosi@novaspark.dev" className="social-chip">✉ Email</a>
                <a href="https://github.com" className="social-chip">🔗 GitHub</a>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <span>⚡</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 2–4 hours.</p>
                <button className="btn btn-outline" onClick={() => { setSent(false); setForm({ name:'', email:'', phone:'', service:'', budget:'', message:'' }); }}>
                  Send Another
                </button>
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
                    <label>Service Needed *</label>
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
                    <option value="Under $100">Under $100</option>
                    <option value="$100 – $300">$100 – $300</option>
                    <option value="$300 – $500">$300 – $500</option>
                    <option value="$500 – $1,000">$500 – $1,000</option>
                    <option value="$1,000+">$1,000+</option>
                    <option value="Let's discuss">Let's discuss</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tell Us About Your Project *</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe what you're building, your goals, and any specific requirements..."
                  />
                </div>

                {error && <p className="form-error">{error}</p>}

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
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

import { useState } from 'react';
import './Join.css';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Full-Stack Developer',
  'Mobile App Developer',
  'UI/UX Designer',
  'DevOps / Cloud Engineer',
  'Cybersecurity Specialist',
  'Network & IT Engineer',
  'Digital Marketer',
  'Project Manager',
  'Other ICT Role',
];

const levels = ['Student / Learning', 'Junior (0–2 years)', 'Mid-level (2–5 years)', 'Senior (5+ years)'];

const perks = [
  { icon: '📧', title: 'Official Email', desc: 'Get your own @novaspark.ntando email address — recognized across all our platforms and client projects.' },
  { icon: '🌍', title: 'Work Remotely', desc: 'Collaborate with NovaSpark clients from anywhere in the world. We work online-first.' },
  { icon: '💰', title: 'Earn on Projects', desc: 'Get paid for contributing to real client projects. Revenue sharing, not volunteer work.' },
  { icon: '📈', title: 'Grow Your Skills', desc: 'Work alongside experienced developers on real-world ICT systems and software projects.' },
  { icon: '🤝', title: 'Build a Network', desc: 'Connect with developers, designers and ICT professionals across Zimbabwe and beyond.' },
  { icon: '🏆', title: 'Get Credited', desc: 'Your name and profile on every project you contribute to. Build a real portfolio.' },
];

export default function Join() {
  const [form, setForm] = useState({
    name: '', email: '', country: '', role: '', level: '', skills: '', github: '', portfolio: '', why: '', available: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setSent(true);
    setLoading(false);
  };

  return (
    <main className="join-page">
      {/* HERO */}
      <section className="join-hero">
        <div className="join-hero__bg" />
        <div className="container">
          <div className="section-label">Join The Team</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '20px' }}>
            Build the Future of <br /><span className="gradient-text">African Tech</span> With Us
          </h1>
          <p className="join-hero__sub">
            NovaSpark Developers is growing. We're looking for talented developers, designers,
            and ICT professionals from Zimbabwe and across the globe to join our team.
            You work remotely. You get paid. You get an official NovaSpark email.
          </p>
          <div className="join-hero__badges">
            <span>🌍 Open to Worldwide Applicants</span>
            <span>💼 Paid Projects</span>
            <span>📧 Official Email Included</span>
            <span>🏠 100% Remote</span>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="join-perks">
        <div className="container">
          <div className="section-label">Member Benefits</div>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>
            What You Get as a <span className="gradient-text">NovaSpark Member</span>
          </h2>
          <div className="perks-grid">
            {perks.map(p => (
              <div key={p.title} className="perk-card">
                <span className="perk-card__icon">{p.icon}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SECTION */}
      <section className="email-section">
        <div className="container email-section__inner">
          <div className="email-section__left">
            <div className="section-label">Official Email</div>
            <h2 className="section-title">
              Your <span className="gradient-text">@novaspark.ntando</span> Address
            </h2>
            <p>
              Every approved NovaSpark member receives an official email address in the format:
            </p>
            <div className="email-example">
              <span className="email-example__prefix">yourname</span>
              <span className="email-example__at">@</span>
              <span className="email-example__domain">novaspark.ntando</span>
            </div>
            <p>
              This email is exclusively for NovaSpark team members. It works on our internal
              systems, client portals, and project management tools. It identifies you as an
              official member of the NovaSpark Developers team.
            </p>
            <ul className="email-features">
              <li><span>→</span> Access to member-only tools and portals</li>
              <li><span>→</span> Used for client communication on projects</li>
              <li><span>→</span> Recognized on NovaSpark's official directory</li>
              <li><span>→</span> Forwarding to your personal inbox included</li>
            </ul>
          </div>
          <div className="email-section__visual">
            <div className="email-card">
              <div className="email-card__header">
                <div className="email-card__dots"><span/><span/><span/></div>
                <span>novaspark.ntando — Inbox</span>
              </div>
              <div className="email-card__body">
                <div className="email-card__avatar">NK</div>
                <div>
                  <strong>Ntandoyenkosi K.</strong>
                  <span>ntandoyenkosi@novaspark.ntando</span>
                </div>
              </div>
              <div className="email-card__item">
                <span>📁</span> Project briefs from clients
              </div>
              <div className="email-card__item">
                <span>🔔</span> Team announcements
              </div>
              <div className="email-card__item">
                <span>💬</span> Internal collaboration
              </div>
              <div className="email-card__badge">✓ Verified NovaSpark Member</div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="join-form-section">
        <div className="container">
          <div className="section-label">Apply Now</div>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>
            Submit Your <span className="gradient-text">Application</span>
          </h2>
          <p className="join-form-intro">
            Applications are reviewed within 3–5 business days. We accept talent from anywhere in the world.
          </p>

          {sent ? (
            <div className="join-success">
              <span>⚡</span>
              <h3>Application Received!</h3>
              <p>
                Thanks for applying to join NovaSpark Developers. We'll review your application
                and get back to you within 3–5 business days at the email you provided.
              </p>
              <p className="join-success__note">If shortlisted, you'll receive an interview invite and onboarding instructions including your @novaspark.ntando email setup.</p>
            </div>
          ) : (
            <form className="join-form" onSubmit={handleSubmit}>
              <div className="form-section-title">Personal Details</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Tendai Moyo" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Country / Location *</label>
                  <input required type="text" name="country" value={form.country} onChange={handleChange} placeholder="e.g. Zimbabwe, South Africa, UK..." />
                </div>
                <div className="form-group">
                  <label>Primary Role *</label>
                  <select required name="role" value={form.role} onChange={handleChange}>
                    <option value="">Select your role...</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Experience Level *</label>
                  <select required name="level" value={form.level} onChange={handleChange}>
                    <option value="">Select level...</option>
                    {levels.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Availability</label>
                  <select name="available" value={form.available} onChange={handleChange}>
                    <option value="">Select availability...</option>
                    <option>Full-time (40hrs/week)</option>
                    <option>Part-time (20hrs/week)</option>
                    <option>Project-based only</option>
                    <option>Weekends only</option>
                  </select>
                </div>
              </div>

              <div className="form-section-title">Skills & Portfolio</div>
              <div className="form-group">
                <label>Key Skills / Tech Stack *</label>
                <input required type="text" name="skills" value={form.skills} onChange={handleChange} placeholder="e.g. React, Node.js, Python, Figma, Networking, CCTV Installation..." />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>GitHub Profile URL</label>
                  <input type="url" name="github" value={form.github} onChange={handleChange} placeholder="https://github.com/username" />
                </div>
                <div className="form-group">
                  <label>Portfolio / LinkedIn URL</label>
                  <input type="url" name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://yourportfolio.com" />
                </div>
              </div>

              <div className="form-section-title">Why NovaSpark?</div>
              <div className="form-group">
                <label>Why do you want to join NovaSpark Developers? *</label>
                <textarea required name="why" value={form.why} onChange={handleChange} rows={5} placeholder="Tell us what you bring to the team, what you're looking to achieve, and why NovaSpark is the right fit for you..." />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }} disabled={loading}>
                {loading ? 'Submitting Application...' : '⚡ Submit Application'}
              </button>
              <p className="form-note">By submitting, you agree to be contacted by NovaSpark Developers regarding your application.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

import { NavLink } from 'react-router-dom';
import './Services.css';

const services = [
  { icon: '🌐', title: 'Web Development', desc: 'Fast, responsive websites and web applications — from landing pages to full enterprise platforms.', features: ['React, Vue, Next.js', 'Node.js & PHP backends', 'REST & GraphQL APIs', 'SEO optimisation', 'CMS integration'], price: 'From $200', cat: 'Software' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Cross-platform mobile apps for Android & iOS. One codebase, both platforms, zero compromise.', features: ['Android & iOS', 'React Native / Flutter', 'Offline functionality', 'Push notifications', 'App Store deployment'], price: 'From $500', cat: 'Software' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Clean, intuitive interfaces that turn visitors into customers. We design before we code.', features: ['Wireframes & prototypes', 'Figma design files', 'User research', 'Responsive design', 'Brand consistency'], price: 'From $150', cat: 'Design' },
  { icon: '🛒', title: 'E-commerce Solutions', desc: 'Full-featured online stores with payments, inventory, and analytics built in.', features: ['Shopify & WooCommerce', 'Payment gateways', 'Inventory systems', 'Order management', 'Analytics dashboards'], price: 'From $350', cat: 'Software' },
  { icon: '🏫', title: 'School Management Systems', desc: 'Complete school admin solutions — student records, timetables, fee management, results, and report cards.', features: ['Student & staff records', 'Fee collection & reports', 'Timetable management', 'Exam & results system', 'Parent portal'], price: 'From $400', cat: 'Systems' },
  { icon: '⛪', title: 'Church & NGO Systems', desc: 'Custom management systems for churches, ministries and NGOs — members, events, donations and media.', features: ['Member management', 'Donation tracking', 'Event scheduling', 'Sermon/media library', 'Announcements module'], price: 'From $300', cat: 'Systems' },
  { icon: '🏥', title: 'Healthcare & Clinic Systems', desc: 'Patient management, appointment booking, billing, and medical records for clinics and hospitals.', features: ['Patient records (EMR)', 'Appointment booking', 'Billing & invoicing', 'SMS reminders', 'Doctor portal'], price: 'From $500', cat: 'Systems' },
  { icon: '🏪', title: 'POS & Inventory Systems', desc: 'Point-of-sale and stock management for shops, supermarkets, and warehouses.', features: ['POS terminal software', 'Barcode scanning', 'Stock alerts', 'Sales reports', 'Multi-branch support'], price: 'From $350', cat: 'Systems' },
  { icon: '🔐', title: 'HR & Payroll Systems', desc: 'Employee management, leave tracking, payroll calculation, and payslip generation.', features: ['Employee records', 'Leave management', 'Payroll engine', 'Payslip generation', 'Attendance tracking'], price: 'From $400', cat: 'Systems' },
  { icon: '📡', title: 'Network Setup & IT Infrastructure', desc: 'LAN/WAN design, Wi-Fi installation, server setup, and IT infrastructure for offices and schools.', features: ['LAN/WAN design', 'Wi-Fi installation', 'Server configuration', 'Structured cabling', 'Network security'], price: 'From $150', cat: 'ICT' },
  { icon: '📷', title: 'CCTV & Security Systems', desc: 'IP camera installation, DVR/NVR setup, remote monitoring, and access control for homes and businesses.', features: ['IP & CCTV cameras', 'DVR/NVR installation', 'Remote monitoring', 'Access control', 'Motion alerts'], price: 'From $100', cat: 'ICT' },
  { icon: '🖨️', title: 'IT Support & Maintenance', desc: 'Hardware repairs, software support, virus removal, data recovery, and ongoing IT maintenance contracts.', features: ['Hardware repairs', 'Software installation', 'Virus removal', 'Data recovery', 'Monthly support plans'], price: 'From $30', cat: 'ICT' },
  { icon: '☁️', title: 'Cloud & Hosting Services', desc: 'Deployment, hosting, SSL, backups, and monitoring — we keep your systems running 24/7.', features: ['AWS, Render, Vercel', 'Domain & SSL setup', 'Automated backups', 'Uptime monitoring', 'Monthly maintenance'], price: 'From $30/mo', cat: 'ICT' },
  { icon: '📊', title: 'Digital Marketing', desc: 'SEO, social media strategy, and paid ads that drive real traffic and real conversions.', features: ['SEO audits & strategy', 'Google & Facebook Ads', 'Social media content', 'Email campaigns', 'Analytics reporting'], price: 'From $100/mo', cat: 'Marketing' },
  { icon: '🧠', title: 'IT Consulting', desc: 'Technology strategy, system audits, and digital transformation advice for businesses and organisations.', features: ['Tech stack advisory', 'System audits', 'Digital transformation', 'Cost optimisation', 'Team training'], price: 'From $50/hr', cat: 'Consulting' },
];

const cats = ['All', 'Software', 'Systems', 'ICT', 'Design', 'Marketing', 'Consulting'];

import { useState } from 'react';

const process = [
  { step: '01', title: 'Discovery', desc: 'Free 30-minute call. We listen to your idea, goals, and constraints.' },
  { step: '02', title: 'Proposal', desc: 'Fixed-price quote and timeline delivered within 24 hours.' },
  { step: '03', title: 'Design', desc: 'UI mockups you approve before a single line of code is written.' },
  { step: '04', title: 'Build', desc: 'Weekly progress updates. You watch it being built.' },
  { step: '05', title: 'Launch', desc: 'Deployment, testing, and handover with full documentation.' },
  { step: '06', title: 'Support', desc: '3 months free support after launch. We stay available.' },
];

export default function Services() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? services : services.filter(s => s.cat === active);

  return (
    <main className="services-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">What We Offer</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px' }}>
            Full-Spectrum <span className="gradient-text">ICT Solutions</span>
          </h1>
          <p className="page-hero__sub">
            From websites and mobile apps to CCTV, networking, POS systems and school management —
            NovaSpark delivers end-to-end ICT solutions for businesses, schools, clinics, and organisations across Zimbabwe.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="portfolio-filters" style={{ marginBottom: '48px' }}>
            {cats.map(c => (
              <button key={c} className={`filter-btn ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
          <div className="services-grid">
            {filtered.map(s => (
              <div key={s.title} className="svc-card">
                <div className="svc-card__top">
                  <div className="svc-card__icon">{s.icon}</div>
                  <div style={{ display: 'flex', gap: '6px', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span className="svc-card__price">{s.price}</span>
                    <span className="svc-card__cat">{s.cat}</span>
                  </div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="svc-card__features">
                  {s.features.map(f => <li key={f}><span>→</span> {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-label">How We Work</div>
          <h2 className="section-title" style={{ marginBottom: '56px' }}>Our <span className="gradient-text">Process</span></h2>
          <div className="process-grid">
            {process.map(p => (
              <div key={p.step} className="process-item">
                <div className="process-item__num">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__glow" />
        <div className="container cta-banner__inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Tell us your problem. We'll find the right ICT solution together — free consultation.</p>
          <NavLink to="/contact" className="btn btn-primary">⚡ Book a Free Call</NavLink>
        </div>
      </section>
    </main>
  );
}

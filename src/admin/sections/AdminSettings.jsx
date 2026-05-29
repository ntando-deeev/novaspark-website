import { useState } from 'react';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'NovaSpark Developers',
    tagline: 'Full-Spectrum ICT Solutions from Gweru, Zimbabwe',
    email: 'ntandoyenkosi@novaspark.ntando',
    phone: '+263 772 000 000',
    whatsapp: '263772000000',
    location: 'Gweru, Midlands Province, Zimbabwe',
    facebook: '',
    instagram: '',
    github: 'https://github.com/ntando-deeev',
    available: true,
    availableNote: 'Accepting new projects — contact us today',
  });
  const [saved, setSaved] = useState(false);

  const handleChange = e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setSettings({ ...settings, [e.target.name]: val });
    setSaved(false);
  };

  const handleSave = e => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Site Settings</h2>
          <p>Update contact info, branding, and site-wide settings</p>
        </div>
        {saved && <div className="admin-save-toast">✓ Settings saved</div>}
      </div>

      <form className="admin-settings-form" onSubmit={handleSave}>
        <div className="admin-settings-block">
          <h3>🏢 Company Info</h3>
          <div className="admin-form__grid">
            <div className="aform-group">
              <label>Company Name</label>
              <input name="siteName" value={settings.siteName} onChange={handleChange} />
            </div>
            <div className="aform-group">
              <label>Tagline</label>
              <input name="tagline" value={settings.tagline} onChange={handleChange} />
            </div>
            <div className="aform-group">
              <label>Location</label>
              <input name="location" value={settings.location} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="admin-settings-block">
          <h3>📞 Contact Details</h3>
          <div className="admin-form__grid">
            <div className="aform-group">
              <label>Email Address</label>
              <input name="email" type="email" value={settings.email} onChange={handleChange} />
            </div>
            <div className="aform-group">
              <label>Phone Number</label>
              <input name="phone" value={settings.phone} onChange={handleChange} />
            </div>
            <div className="aform-group">
              <label>WhatsApp Number (digits only)</label>
              <input name="whatsapp" value={settings.whatsapp} onChange={handleChange} placeholder="263772000000" />
            </div>
          </div>
        </div>

        <div className="admin-settings-block">
          <h3>🔗 Social Links</h3>
          <div className="admin-form__grid">
            <div className="aform-group">
              <label>GitHub</label>
              <input name="github" value={settings.github} onChange={handleChange} placeholder="https://github.com/..." />
            </div>
            <div className="aform-group">
              <label>Facebook</label>
              <input name="facebook" value={settings.facebook} onChange={handleChange} placeholder="https://facebook.com/..." />
            </div>
            <div className="aform-group">
              <label>Instagram</label>
              <input name="instagram" value={settings.instagram} onChange={handleChange} placeholder="https://instagram.com/..." />
            </div>
          </div>
        </div>

        <div className="admin-settings-block">
          <h3>🟢 Availability</h3>
          <div className="admin-settings-toggle">
            <label className="toggle-label">
              <input type="checkbox" name="available" checked={settings.available} onChange={handleChange} />
              <span className="toggle-track"><span className="toggle-thumb" /></span>
              Show "Currently Available" badge on website
            </label>
          </div>
          <div className="aform-group" style={{ marginTop: 12 }}>
            <label>Availability Message</label>
            <input name="availableNote" value={settings.availableNote} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ fontSize:'13px', padding:'12px 32px' }}>
          ⚡ Save Settings
        </button>
      </form>
    </div>
  );
}

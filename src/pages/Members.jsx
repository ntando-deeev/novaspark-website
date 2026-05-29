import { useState } from 'react';
import './Members.css';

export default function Members() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();
    setError('');
    if (!email.endsWith('@novaspark.ntando')) {
      setError('Access denied. Only @novaspark.ntando email addresses are allowed.');
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    // Demo login — replace with real auth backend
    if (password.length >= 6) {
      setLoggedIn(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const memberName = email.split('@')[0] || 'Member';

  return (
    <main className="members-page">
      {!loggedIn ? (
        <section className="members-login">
          <div className="members-login__bg" />
          <div className="members-login__card">
            <div className="members-login__logo">
              <span>⚡</span> Nova<strong>Spark</strong>
            </div>
            <div className="members-login__title">
              <h1>Member Portal</h1>
              <p>Exclusive access for NovaSpark team members only.</p>
            </div>

            <div className="members-login__badge">
              <span className="lock-icon">🔒</span>
              <span>Restricted — <strong>@novaspark.ntando</strong> accounts only</span>
            </div>

            <form className="members-login__form" onSubmit={handleLogin}>
              <div className="form-group">
                <label>NovaSpark Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="yourname@novaspark.ntando"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
              {error && (
                <div className="members-login__error">
                  <span>⚠</span> {error}
                </div>
              )}
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }} disabled={loading}>
                {loading ? 'Signing in...' : '⚡ Sign In to Portal'}
              </button>
            </form>

            <p className="members-login__note">
              Don't have a @novaspark.ntando email? <a href="/join">Apply to join →</a>
            </p>
          </div>
        </section>
      ) : (
        <section className="members-dashboard">
          <div className="dashboard-sidebar">
            <div className="dashboard-sidebar__logo">
              <span>⚡</span> NovaSpark
            </div>
            <nav className="dashboard-sidebar__nav">
              <a href="#" className="active">🏠 Dashboard</a>
              <a href="#">📁 Projects</a>
              <a href="#">📋 Tasks</a>
              <a href="#">💬 Messages</a>
              <a href="#">👥 Team</a>
              <a href="#">📄 Documents</a>
              <a href="#">⚙ Settings</a>
            </nav>
            <div className="dashboard-sidebar__user">
              <div className="dashboard-sidebar__avatar">{memberName.slice(0,2).toUpperCase()}</div>
              <div>
                <strong>{memberName}</strong>
                <span>{email}</span>
              </div>
            </div>
          </div>

          <div className="dashboard-main">
            <div className="dashboard-topbar">
              <div>
                <h2>Welcome back, <span className="gradient-text">{memberName}</span> ⚡</h2>
                <p>Here's what's happening at NovaSpark today.</p>
              </div>
              <button className="btn btn-outline" onClick={() => setLoggedIn(false)} style={{ fontSize: '11px', padding: '10px 16px' }}>
                Sign Out
              </button>
            </div>

            <div className="dashboard-stats">
              {[
                { icon: '📁', label: 'Active Projects', value: '4' },
                { icon: '✅', label: 'Tasks Completed', value: '12' },
                { icon: '💬', label: 'Unread Messages', value: '3' },
                { icon: '💰', label: 'Earnings This Month', value: '$240' },
              ].map(s => (
                <div key={s.label} className="dashboard-stat-card">
                  <span>{s.icon}</span>
                  <div>
                    <strong>{s.value}</strong>
                    <small>{s.label}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-content">
              <div className="dashboard-panel">
                <h3>Active Projects</h3>
                {[
                  { name: 'AgriConnect Zimbabwe', role: 'Frontend Dev', status: 'In Progress', color: '#00d4ff' },
                  { name: 'SchoolPro Dashboard', role: 'UI/UX Design', status: 'Review', color: '#ffe500' },
                  { name: 'Client Website Redesign', role: 'Full-Stack', status: 'Planning', color: '#7b2fff' },
                ].map(p => (
                  <div key={p.name} className="project-row">
                    <div className="project-row__dot" style={{ background: p.color }} />
                    <div className="project-row__info">
                      <strong>{p.name}</strong>
                      <span>{p.role}</span>
                    </div>
                    <span className="project-row__status" style={{ color: p.color }}>{p.status}</span>
                  </div>
                ))}
              </div>

              <div className="dashboard-panel">
                <h3>Recent Announcements</h3>
                {[
                  { title: 'New client onboarded — PropZim Real Estate', time: '2 hours ago' },
                  { title: 'Team meeting: Friday 3PM CAT (Zoom)', time: '1 day ago' },
                  { title: 'New project brief shared in Documents', time: '2 days ago' },
                  { title: 'Q2 payouts processed — check your accounts', time: '3 days ago' },
                ].map(a => (
                  <div key={a.title} className="announcement-row">
                    <span className="announcement-row__dot" />
                    <div>
                      <strong>{a.title}</strong>
                      <span>{a.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

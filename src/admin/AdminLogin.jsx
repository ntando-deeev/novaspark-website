import { useState } from 'react';
import { useAdmin } from './AdminContext';
import './Admin.css';

export default function AdminLogin() {
  const { login, loginError } = useAdmin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    login(email, password);
    setLoading(false);
  };

  return (
    <div className="admin-login">
      <div className="admin-login__bg" />
      <div className="admin-login__card">
        <div className="admin-login__logo">
          <span>⚡</span> Nova<strong>Spark</strong>
          <span className="admin-login__badge">ADMIN</span>
        </div>

        <h1>Admin Panel</h1>
        <p>Restricted access. Authorised personnel only.</p>

        <div className="admin-login__alert">
          <span>🔐</span>
          <span>Only <strong>admin@novaspark.ntando</strong> accounts can access this panel.</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="aform-group">
            <label>Admin Email</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@novaspark.ntando" autoComplete="email" />
          </div>
          <div className="aform-group">
            <label>Password</label>
            <input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" autoComplete="current-password" />
          </div>
          {loginError && <div className="admin-login__error"><span>⚠</span> {loginError}</div>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '8px' }} disabled={loading}>
            {loading ? 'Authenticating...' : '⚡ Sign In to Admin'}
          </button>
        </form>

        <p className="admin-login__note">
          Not an admin? <a href="/members">Go to Members Portal →</a>
        </p>
      </div>
    </div>
  );
}

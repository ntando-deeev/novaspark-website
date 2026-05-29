import { useState } from 'react';
import { useAdmin } from '../AdminContext';

const emptyMember = { name:'', email:'', role:'', status:'active' };

export default function AdminMembers() {
  const { members, deleteMember, addMember } = useAdmin();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyMember);

  const handleSubmit = e => {
    e.preventDefault();
    // Auto-assign @novaspark.ntando email if not provided
    const emailVal = form.email.includes('@') ? form.email : `${form.email.toLowerCase().replace(/\s+/g,'')}@novaspark.ntando`;
    addMember({ ...form, email: emailVal });
    setForm(emptyMember);
    setShowForm(false);
  };

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Team Members</h2>
          <p>Manage NovaSpark team members and their @novaspark.ntando accounts</p>
        </div>
        <button className="btn btn-primary" style={{ fontSize:'12px', padding:'10px 20px' }} onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Cancel' : '+ Add Member'}
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleSubmit}>
          <h3 className="admin-form__title">New Team Member</h3>
          <div className="admin-form__grid">
            <div className="aform-group">
              <label>Full Name *</label>
              <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. Tatenda Ncube" />
            </div>
            <div className="aform-group">
              <label>Email / Username *</label>
              <input required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="tatenda (auto-adds @novaspark.ntando)" />
            </div>
            <div className="aform-group">
              <label>Role *</label>
              <input required value={form.role} onChange={e => setForm({...form, role: e.target.value})} placeholder="e.g. Frontend Developer" />
            </div>
            <div className="aform-group">
              <label>Status</label>
              <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{ fontSize:'12px', padding:'10px 24px' }}>⚡ Add Member</button>
        </form>
      )}

      <div className="admin-members-grid">
        {members.map(m => (
          <div key={m.id} className="admin-member-card">
            <div className="admin-member-card__avatar">
              {m.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase()}
            </div>
            <div className="admin-member-card__info">
              <strong>{m.name}</strong>
              <span className="member-email">{m.email}</span>
              <span className="member-role">{m.role}</span>
            </div>
            <div className="admin-member-card__footer">
              <span className={`status-pill status-pill--${m.status === 'active' ? 'approved' : 'rejected'}`}>
                {m.status}
              </span>
              <span className="td-muted" style={{ fontSize:'10px' }}>Joined {m.joined}</span>
              <button className="admin-btn-sm admin-btn-sm--reject" onClick={() => deleteMember(m.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useAdmin } from '../AdminContext';

const emptyProject = { title:'', category:'web', tags:'', desc:'', year: new Date().getFullYear().toString(), visible: true };

export default function AdminProjects() {
  const { projects, toggleProjectVisibility, addProject, deleteProject } = useAdmin();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyProject);

  const handleSubmit = e => {
    e.preventDefault();
    addProject(form);
    setForm(emptyProject);
    setShowForm(false);
  };

  return (
    <div className="admin-section">
      <div className="admin-section__header">
        <div>
          <h2>Portfolio Projects</h2>
          <p>Add, hide, or remove projects shown on the public portfolio page</p>
        </div>
        <button className="btn btn-primary" style={{ fontSize:'12px', padding:'10px 20px' }} onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Cancel' : '+ Add Project'}
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleSubmit}>
          <h3 className="admin-form__title">New Project</h3>
          <div className="admin-form__grid">
            <div className="aform-group">
              <label>Project Title *</label>
              <input required value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. SchoolPro Dashboard" />
            </div>
            <div className="aform-group">
              <label>Category *</label>
              <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="ecommerce">E-commerce</option>
                <option value="system">System</option>
                <option value="design">Design</option>
              </select>
            </div>
            <div className="aform-group">
              <label>Tech Tags</label>
              <input value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} placeholder="e.g. React, Node.js, MongoDB" />
            </div>
            <div className="aform-group">
              <label>Year</label>
              <input value={form.year} onChange={e => setForm({...form, year: e.target.value})} placeholder="2025" />
            </div>
          </div>
          <div className="aform-group">
            <label>Description *</label>
            <textarea required value={form.desc} onChange={e => setForm({...form, desc: e.target.value})} rows={3} placeholder="Short description of the project..." />
          </div>
          <button type="submit" className="btn btn-primary" style={{ fontSize:'12px', padding:'10px 24px' }}>⚡ Add Project</button>
        </form>
      )}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr><th>Project</th><th>Category</th><th>Year</th><th>Visibility</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p.id} style={{ opacity: p.visible ? 1 : 0.5 }}>
                <td>
                  <div>
                    <strong>{p.title}</strong>
                    <span className="td-muted" style={{ display:'block', fontSize:'11px', marginTop:2 }}>{p.desc.slice(0,60)}...</span>
                  </div>
                </td>
                <td><span className="status-pill status-pill--approved" style={{ textTransform:'capitalize' }}>{p.category}</span></td>
                <td className="td-muted">{p.year}</td>
                <td>
                  <button className={`toggle-btn ${p.visible ? 'on' : 'off'}`} onClick={() => toggleProjectVisibility(p.id)}>
                    {p.visible ? '👁 Visible' : '🚫 Hidden'}
                  </button>
                </td>
                <td>
                  <button className="admin-btn-sm admin-btn-sm--reject" onClick={() => deleteProject(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

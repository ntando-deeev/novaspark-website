import { AdminProvider, useAdmin } from './AdminContext';
import AdminLogin from './AdminLogin';
import AdminLayout from './AdminLayout';
import AdminDashboard from './sections/AdminDashboard';
import AdminApplications from './sections/AdminApplications';
import AdminMessages from './sections/AdminMessages';
import AdminProjects from './sections/AdminProjects';
import AdminMembers from './sections/AdminMembers';
import AdminSettings from './sections/AdminSettings';

function AdminInner() {
  const { loggedIn, activeSection } = useAdmin();

  if (!loggedIn) return <AdminLogin />;

  const sections = {
    dashboard: <AdminDashboard />,
    applications: <AdminApplications />,
    messages: <AdminMessages />,
    projects: <AdminProjects />,
    members: <AdminMembers />,
    settings: <AdminSettings />,
  };

  return (
    <AdminLayout>
      {sections[activeSection] || <AdminDashboard />}
    </AdminLayout>
  );
}

export default function AdminPanel() {
  return (
    <AdminProvider>
      <AdminInner />
    </AdminProvider>
  );
}

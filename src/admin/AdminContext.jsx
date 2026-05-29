import { createContext, useContext, useState } from 'react';

const AdminContext = createContext(null);

// Demo data — in production, replace with API calls to your backend
const DEMO_ADMIN = { email: 'admin@novaspark.ntando', password: 'NovaSpark@2025!' };

const initialApplications = [
  { id: 1, name: 'Tatenda Ncube', email: 'tatenda@gmail.com', country: 'Zimbabwe', role: 'Full-Stack Developer', level: 'Mid-level (2–5 years)', skills: 'React, Node.js, MongoDB', status: 'pending', date: '2025-05-27' },
  { id: 2, name: 'Rumbidzai Dube', email: 'rumbi@yahoo.com', country: 'South Africa', role: 'UI/UX Designer', level: 'Junior (0–2 years)', skills: 'Figma, Adobe XD, CSS', status: 'pending', date: '2025-05-26' },
  { id: 3, name: 'Farai Chigumba', email: 'farai@outlook.com', country: 'UK', role: 'Backend Developer', level: 'Senior (5+ years)', skills: 'Python, Django, PostgreSQL, AWS', status: 'approved', date: '2025-05-24' },
  { id: 4, name: 'Simbarashe Moyo', email: 'simba@gmail.com', country: 'Zimbabwe', role: 'Mobile App Developer', level: 'Mid-level (2–5 years)', skills: 'Flutter, Dart, Firebase', status: 'rejected', date: '2025-05-22' },
  { id: 5, name: 'Nyasha Mutasa', email: 'nyasha@gmail.com', country: 'Canada', role: 'DevOps / Cloud Engineer', level: 'Senior (5+ years)', skills: 'AWS, Docker, Kubernetes, Terraform', status: 'pending', date: '2025-05-28' },
];

const initialMessages = [
  { id: 1, name: 'Chiedza Moyo', email: 'chiedza@gmail.com', phone: '+263771234567', service: 'School Management System', budget: '$500 – $1,000', message: 'We need a school management system for 800 students. Includes fee collection, timetable, results and parent portal.', date: '2025-05-28', read: false },
  { id: 2, name: 'Gospel Church Gweru', email: 'pastor@gospel.co.zw', phone: '+263774567890', service: 'Church / NGO System', budget: '$300 – $500', message: 'We need a church system to manage 300 members, Sunday services, donations, and weekly announcements.', date: '2025-05-27', read: false },
  { id: 3, name: 'TechMart Harare', email: 'info@techmart.co.zw', phone: '+263773456789', service: 'POS & Inventory System', budget: '$300 – $500', message: 'Our shop needs a POS system with barcode scanning and stock alerts. We have 3 cashier terminals.', date: '2025-05-26', read: true },
  { id: 4, name: 'Dr. Fungai Dewa', email: 'fungai.dewa@clinic.co.zw', phone: '', service: 'Healthcare System', budget: '$500 – $1,000', message: 'Private clinic in Gweru. Need patient records, appointment booking, and billing system for 2 doctors.', date: '2025-05-25', read: true },
];

const initialProjects = [
  { id: 1, title: 'DWIM Church Management System', category: 'system', tags: 'React, Node.js, MongoDB', desc: 'Full-stack church management system for Destiny Word International Ministries.', year: '2024', visible: true },
  { id: 2, title: 'AgriConnect Zimbabwe', category: 'web', tags: 'React, Express, PostgreSQL', desc: 'B2B marketplace connecting Zimbabwean farmers with buyers.', year: '2024', visible: true },
  { id: 3, title: 'SchoolPro Dashboard', category: 'system', tags: 'Next.js, Prisma, MySQL', desc: 'School administration system for a Gweru secondary school.', year: '2024', visible: true },
  { id: 4, title: 'ZimFashion Store', category: 'ecommerce', tags: 'Shopify, Liquid, Klaviyo', desc: 'Custom Shopify theme for a Zimbabwean fashion brand.', year: '2023', visible: true },
  { id: 5, title: 'GweruEats Delivery App', category: 'mobile', tags: 'React Native, Firebase, Stripe', desc: 'Food delivery app for restaurants in Gweru.', year: '2023', visible: true },
];

const initialMembers = [
  { id: 1, name: 'Ntandoyenkosi', email: 'ntandoyenkosi@novaspark.ntando', role: 'Founder & Lead Developer', status: 'active', joined: '2022-01-01' },
  { id: 2, name: 'Farai Chigumba', email: 'farai@novaspark.ntando', role: 'Backend Developer', status: 'active', joined: '2025-05-24' },
];

export function AdminProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [applications, setApplications] = useState(initialApplications);
  const [messages, setMessages] = useState(initialMessages);
  const [projects, setProjects] = useState(initialProjects);
  const [members, setMembers] = useState(initialMembers);
  const [activeSection, setActiveSection] = useState('dashboard');

  const login = (email, password) => {
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      setLoggedIn(true);
      setLoginError('');
      return true;
    }
    setLoginError('Invalid credentials. Only admin@novaspark.ntando can access this panel.');
    return false;
  };

  const logout = () => { setLoggedIn(false); setActiveSection('dashboard'); };

  const updateAppStatus = (id, status) =>
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));

  const markRead = id =>
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));

  const deleteMessage = id =>
    setMessages(prev => prev.filter(m => m.id !== id));

  const toggleProjectVisibility = id =>
    setProjects(prev => prev.map(p => p.id === id ? { ...p, visible: !p.visible } : p));

  const addProject = project =>
    setProjects(prev => [...prev, { ...project, id: Date.now() }]);

  const deleteProject = id =>
    setProjects(prev => prev.filter(p => p.id !== id));

  const deleteMember = id =>
    setMembers(prev => prev.filter(m => m.id !== id));

  const addMember = member =>
    setMembers(prev => [...prev, { ...member, id: Date.now(), joined: new Date().toISOString().split('T')[0] }]);

  return (
    <AdminContext.Provider value={{
      loggedIn, login, logout, loginError,
      applications, updateAppStatus,
      messages, markRead, deleteMessage,
      projects, toggleProjectVisibility, addProject, deleteProject,
      members, deleteMember, addMember,
      activeSection, setActiveSection,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);

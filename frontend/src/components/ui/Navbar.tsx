// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  FolderKanban,
  BadgeCheck,
  Handshake,
  FileText,
  Megaphone,
  Mail,
  BookOpen,
} from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/about', label: 'Sobre Mim', icon: <User size={18} /> },
    { to: '/projects', label: 'Projetos', icon: <FolderKanban size={18} /> },
    { to: '/skills', label: 'Skills', icon: <BadgeCheck size={18} /> },
    { to: '/services', label: 'Serviços', icon: <Handshake size={18} /> },
    { to: '/cv', label: 'Currículo', icon: <FileText size={18} /> },
    { to: '/', label: 'Novidades', icon: <Megaphone size={18} /> },
    { to: '/contact', label: 'Contatos', icon: <Mail size={18} /> },
    { to: '/', label: 'Blog', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-center gap-4 overflow-x-auto container-navbar-ui">
          {links.map(({ to, label, icon }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-4 py-2 font-medium text-sm transition-all duration-300 link-navbar
                  ${
                    isActive
                      ? 'bg-violet-700 text-white shadow-md'
                      : 'text-violet-800'
                  }`}
                style={{ borderRadius: 0 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
              >
                {icon}
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

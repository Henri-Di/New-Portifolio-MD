import { useState } from 'react';
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
  Menu,
  X,
} from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/about', label: 'Sobre Mim', icon: <User size={18} /> },
    { to: '/projects', label: 'Projetos', icon: <FolderKanban size={18} /> },
    { to: '/skills', label: 'Skills', icon: <BadgeCheck size={18} /> },
    { to: '/services', label: 'Serviços', icon: <Handshake size={18} /> },
    { to: '/cv', label: 'Currículo', icon: <FileText size={18} /> },
    { to: '/news', label: 'Novidades', icon: <Megaphone size={18} /> },
    { to: '/contact', label: 'Contatos', icon: <Mail size={18} /> },
    { to: '/blog', label: 'Blog', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-violet-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold text-violet-700">MeuPortfólio</span>

        {/* Botão de menu hamburguer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-violet-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop */}
        <div className="hidden sm:flex gap-4">
          {links.map(({ to, label, icon }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-violet-700 text-white'
                    : 'text-violet-800 hover:bg-violet-100'
                }`}
              >
                {icon}
                {label}
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Menu Mobile */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 mb-4 flex flex-col gap-2">
          {links.map(({ to, label, icon }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-violet-700 text-white'
                    : 'text-violet-800 hover:bg-violet-100'
                }`}
              >
                {icon}
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}


import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import SafeLink from './SafeLink';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Permis', path: '/permis' },
    { name: 'Location', path: '/location' },
    { name: 'Équipe', path: '/equipe' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <SafeLink to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
                <Anchor size={24} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-blue-900">
                NAUTICA <span className="text-blue-600">RÉ</span>
              </span>
            </SafeLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <SafeLink
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.name}
              </SafeLink>
            ))}
            <SafeLink
              to="/contact"
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-md active:scale-95"
            >
              Réserver
            </SafeLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <SafeLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold border-b border-slate-50 ${
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                {link.name}
              </SafeLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

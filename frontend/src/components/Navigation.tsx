// Navigation Component
// Sticky header with links to all pages
// Responsive design with mobile menu

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/war', label: 'WAR' },
    { path: '/offense', label: 'Offense' },
    { path: '/pitching', label: 'Pitching' },
    { path: '/defense', label: 'Defense' },
    { path: '/statcast', label: 'Statcast' },
    { path: '/glossary', label: 'Glossary' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div>
              <span className="font-sans font-black text-xl text-[#0f172a] tracking-tight block leading-none">
                SABERMETRICS
              </span>
              <span className="font-sans text-[9px] text-[#06b6d4] tracking-widest font-semibold">
                MADE SIMPLE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group inline-flex items-center gap-3 px-5 py-3 border-3 text-sm font-display font-bold tracking-wide transition-all shadow-[8px_8px_0px_rgba(34,211,238,0.25)] ${
                  isActive(link.path)
                    ? 'bg-[#3b82f6] border-[#22d3ee] text-white'
                    : 'bg-[#1e293b] border-[#22d3ee] text-white hover:bg-[#3b82f6]'
                }`}
              >
                {link.label.toUpperCase()}
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#22d3ee] text-[#0f172a] font-black text-base leading-none">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-md border border-gray-200 bg-white hover:bg-[#f8fafc] hover:border-[#06b6d4] transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-[#0f172a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 font-display font-bold text-sm tracking-wide transition-all mb-3 rounded-lg border-2 shadow-[6px_6px_0px_rgba(34,211,238,0.2)] ${
                  isActive(link.path)
                    ? 'bg-[#3b82f6] text-white border-[#22d3ee]'
                    : 'bg-[#1e293b] text-white border-[#22d3ee] hover:bg-[#3b82f6]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label.toUpperCase()}</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[#22d3ee] text-[#0f172a] font-black text-base leading-none rounded-sm">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

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
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group inline-flex items-center gap-2 px-4 py-2.5 border text-xs font-display font-semibold tracking-[0.14em] uppercase rounded-full transition-all ${
                  isActive(link.path)
                    ? 'bg-[#0f172a] border-[#22d3ee] text-white shadow-[0_10px_25px_-12px_rgba(34,211,238,0.6)]'
                    : 'bg-white border-[#e2e8f0] text-[#0f172a] hover:border-[#22d3ee] hover:shadow-[0_10px_25px_-12px_rgba(34,211,238,0.6)]'
                }`}
              >
                {link.label.toUpperCase()}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#22d3ee] text-[#0f172a] font-black text-base leading-none">
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
                className={`block px-4 py-3 font-display font-semibold text-sm tracking-[0.14em] uppercase transition-all mb-3 rounded-full border ${
                  isActive(link.path)
                    ? 'bg-[#0f172a] text-white border-[#22d3ee] shadow-[0_10px_25px_-12px_rgba(34,211,238,0.6)]'
                    : 'bg-white text-[#0f172a] border-[#e2e8f0] hover:border-[#22d3ee] hover:shadow-[0_10px_25px_-12px_rgba(34,211,238,0.6)]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label.toUpperCase()}</span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#22d3ee] text-[#0f172a] font-black text-base leading-none">
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

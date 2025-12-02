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
                className={`px-5 py-2.5 font-sans font-semibold text-sm tracking-wide transition-all rounded-md ${
                  isActive(link.path)
                    ? 'bg-[#06b6d4] text-white shadow-sm'
                    : 'bg-transparent text-[#0f172a] hover:bg-[#f1f5f9] hover:text-[#06b6d4]'
                }`}
              >
                {link.label.toUpperCase()}
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
                className={`block px-4 py-3 font-sans font-semibold text-sm tracking-wide transition-all mb-2 rounded-md border-l-4 ${
                  isActive(link.path)
                    ? 'bg-[#06b6d4] text-white border-[#0891b2]'
                    : 'bg-[#f8fafc] text-[#0f172a] border-gray-300 hover:border-[#06b6d4] hover:bg-white hover:text-[#06b6d4]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

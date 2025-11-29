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
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#0a0e0d] border-b-4 border-[#f4e409] sticky top-0 z-30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Scoreboard Style */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-[#a14a3a] border-2 border-[#f4e409] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="font-mono font-black text-2xl text-[#f4e409]">⚾</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f4e409]"></div>
            </div>
            <div>
              <span className="font-display font-black text-2xl text-[#f5f1e8] tracking-tight block leading-none">
                DiamondIQ
              </span>
              <span className="font-mono text-[10px] text-[#a14a3a] tracking-widest">
                ANALYTICS LAB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 font-mono font-bold text-sm tracking-wide transition-all border-2 ${
                  isActive(link.path)
                    ? 'bg-[#f4e409] text-[#0a0e0d] border-[#f4e409] shadow-[4px_4px_0px_rgba(161,74,58,0.5)]'
                    : 'bg-transparent text-[#e8e2d5] border-[#3a3f3e] hover:border-[#a14a3a] hover:text-[#f4e409]'
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 border-2 border-[#f4e409] bg-[#0a0e0d] hover:bg-[#f4e409] hover:text-[#0a0e0d] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-[#f4e409]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
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
            className="md:hidden pb-4 border-t-2 border-[#3a3f3e] mt-2 pt-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 font-mono font-bold text-sm tracking-wide transition-all mb-2 border-l-4 ${
                  isActive(link.path)
                    ? 'bg-[#f4e409] text-[#0a0e0d] border-[#a14a3a]'
                    : 'bg-[#1a1e1d] text-[#e8e2d5] border-[#3a3f3e] hover:border-[#f4e409] hover:text-[#f4e409]'
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

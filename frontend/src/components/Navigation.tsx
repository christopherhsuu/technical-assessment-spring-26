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
    <nav className="bg-[#0a1628] border-b-4 border-[#ffd23f] sticky top-0 z-30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-[#ff6b35] border-2 border-[#ffd23f] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="font-mono font-black text-2xl text-[#ffd23f]">📊</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#ffd23f]"></div>
            </div>
            <div>
              <span className="font-display font-black text-2xl text-[#f5f1e8] tracking-tight block leading-none">
                STATHEAD
              </span>
              <span className="font-mono text-[10px] text-[#ff6b35] tracking-widest">
                SABERMETRICS
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
                    ? 'bg-[#ffd23f] text-[#0a1628] border-[#ffd23f] shadow-[4px_4px_0px_rgba(255,107,53,0.5)]'
                    : 'bg-transparent text-[#cbd5e0] border-[#1a2a47] hover:border-[#ff6b35] hover:text-[#ffd23f]'
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 border-2 border-[#ffd23f] bg-[#0a1628] hover:bg-[#ffd23f] hover:text-[#0a1628] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-[#ffd23f]"
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
            className="md:hidden pb-4 border-t-2 border-[#1a2a47] mt-2 pt-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 font-mono font-bold text-sm tracking-wide transition-all mb-2 border-l-4 ${
                  isActive(link.path)
                    ? 'bg-[#ffd23f] text-[#0a1628] border-[#ff6b35]'
                    : 'bg-[#1a2a47] text-[#cbd5e0] border-[#2d4a7c] hover:border-[#ffd23f] hover:text-[#ffd23f]'
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

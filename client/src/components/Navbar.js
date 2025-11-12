import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-dark-900/98 backdrop-blur-xl shadow-2xl shadow-dark-900/50 py-3' 
        : 'bg-dark-900/90 backdrop-blur-lg py-5'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`text-xl sm:text-2xl font-playfair font-bold transition-all duration-300 ${
              scrolled 
                ? 'text-white group-hover:text-accent-400' 
                : 'text-white group-hover:text-accent-300'
            }`}>
              <span className="hidden sm:inline">The Gourmet Table</span>
              <span className="sm:hidden">Gourmet Table</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? scrolled 
                      ? 'text-white bg-accent-500/20 border border-accent-500/30' 
                      : 'text-white bg-white/20'
                    : scrolled
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-400 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`ml-4 ${scrolled ? 'btn-primary' : 'btn-secondary'}`}
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="bg-dark-900/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'text-white bg-accent-500/20 border border-accent-500/30' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="btn-primary w-full block text-center" 
                onClick={() => setIsOpen(false)}
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'APPLY', path: '/apply' },
    { name: 'ABOUT', path: '/about' },
    { name: 'OUR TEAMS', path: '/teams' },
    { name: 'NEWS', path: '/news' },
    { name: 'T&C', path: '/terms-conditions' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'MISS EARTH', path: 'http://www.missearth.tv/' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <Logo />
              <div className="ml-3">
                <h1 className="text-lg font-serif font-bold text-[#8C1D40]">Miss Bangladesh</h1>
                <p className="text-xs text-[#FFC627]">Beauty Pageant</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-3">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 rounded-md font-medium ${
                    location.pathname === link.path 
                      ? 'text-[#FFC627] font-semibold' 
                      : 'text-[#8C1D40] hover:text-[#FFC627]'
                  }`}
                >
                  <span className="relative">
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.span 
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFC627]"
                        layoutId="navbar-underline"
                      />
                    )}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden text-[#8C1D40] focus:outline-none bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-md ${
                      location.pathname === link.path 
                        ? 'bg-gray-100 text-[#FFC627] font-semibold' 
                        : 'text-[#8C1D40] hover:text-[#FFC627] hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
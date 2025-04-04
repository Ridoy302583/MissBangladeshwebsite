import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-300 max-w-md">
              As we celebrate the beauty, talent, and intelligence
              of Bangladeshi women, creating a positive impact
              and bringing about meaningful change in the world.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="bi bi-twitter text-xl"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="bi bi-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/apply" className="footer-link">Apply Now</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/teams" className="footer-link">Our Teams</Link></li>
              <li><Link to="/news" className="footer-link">News & Updates</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="bi bi-geo-alt-fill text-accent mr-3 mt-1"></i>
                <span>123 Beauty Avenue, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start">
                <i className="bi bi-envelope-fill text-accent mr-3 mt-1"></i>
                <span>info@missbangladesh.org</span>
              </li>
              <li className="flex items-start">
                <i className="bi bi-telephone-fill text-accent mr-3 mt-1"></i>
                <span>+880 1234 567890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Miss Bangladesh Beauty Pageant. All rights reserved.</p>
          <p className="mt-2">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

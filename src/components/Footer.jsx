import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const year = new Date().getFullYear();
  
  // Animation variants
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'bi-facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'bi-instagram', url: 'https://instagram.com' },
    { name: 'Twitter', icon: 'bi-twitter', url: 'https://twitter.com' },
    { name: 'YouTube', icon: 'bi-youtube', url: 'https://youtube.com' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apply Now', path: '/apply' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Teams', path: '/teams' },
    { name: 'News & Updates', path: '/news' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const contactInfo = [
    { icon: 'bi-geo-alt-fill', text: '123 Beauty Avenue, Dhaka, Bangladesh' },
    { icon: 'bi-envelope-fill', text: 'info@missbangladesh.org' },
    { icon: 'bi-telephone-fill', text: '+880 1234 567890' }
  ];

  return (
    <footer className="bg-gradient-to-b from-dark to-black text-white relative pt-20 pb-10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 -translate-x-1/4 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 translate-x-1/4 translate-y-1/2 blur-3xl"></div>
      
      {/* Crown icon */}
      <div className="absolute right-8 top-12 text-primary/5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 opacity-20">
          <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11V11.99z"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVariant}
        >
          {/* Brand column */}
          <motion.div variants={fadeInUpVariant}>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              As we celebrate the beauty, talent, and intelligence
              of Bangladeshi women, creating a positive impact
              and bringing about meaningful change in the world.
            </p>
            
            <motion.div 
              className="flex space-x-4 mt-8"
              variants={staggerVariant}
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 hover:bg-primary text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  variants={fadeInUpVariant}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <i className={`bi ${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Quick links column */}
          <motion.div variants={fadeInUpVariant}>
            <h3 className="text-xl font-bold mb-6 font-serif relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-secondary"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.path} 
                    className="footer-link flex items-center text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    <i className="bi bi-chevron-right text-xs text-secondary mr-2"></i>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact column */}
          <motion.div variants={fadeInUpVariant}>
            <h3 className="text-xl font-bold mb-6 font-serif relative inline-block">
              Contact Us
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-secondary"></div>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mr-4 mt-1">
                    <div className="bg-white/5 w-8 h-8 rounded-full flex items-center justify-center">
                      <i className={`bi ${info.icon} text-secondary`}></i>
                    </div>
                  </div>
                  <span className="text-gray-300">{info.text}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-8 bg-white/5 p-4 rounded-lg">
              <h4 className="text-white font-medium mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-dark border border-gray-700 p-2 rounded-l-md text-sm flex-grow focus:outline-none focus:border-secondary"
                />
                <button className="bg-secondary text-dark font-medium px-4 rounded-r-md hover:bg-secondary/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {year} Miss Bangladesh Beauty Pageant. All rights reserved.
            </p>
            <div className="flex items-center">
              <p className="text-gray-400 text-sm">
                Designed by <a href="https://techknowgram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">TechknowGram Limited</a>
              </p>
              <div className="ml-4 w-px h-4 bg-gray-700 mx-3"></div>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms</Link>
              <div className="mx-2 text-gray-700">•</div>
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
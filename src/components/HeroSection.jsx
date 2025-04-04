import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image for large screens */}
      <div className="absolute inset-0 hidden md:block">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://cdn.websparks.ai/3_banner2-3f991c1c.png" 
          alt="Miss Bangladesh Banner" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background image for small screens */}
      <div className="absolute inset-0 block md:hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://cdn.websparks.ai/3_banner-small-aa6b4e1d.png" 
          alt="Miss Bangladesh Banner Mobile" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(140,29,64,0.15),transparent_70%)]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
              Miss Bangladesh Foundation
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              Become the Next Miss Bangladesh
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Rebuilding & Rebranding Bangladesh Globally : Across 5 Continents &
              12 International Platforms.
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="/apply" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Apply Now</span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link to="/about" className="btn-outline group relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-light mb-2 opacity-80">Scroll Down</span>
          <i className="bi bi-chevron-double-down text-2xl"></i>
        </motion.div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
    </section>
  );
};

export default HeroSection;

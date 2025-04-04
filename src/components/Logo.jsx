import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative shimmer">
        <img 
          src="https://cdn.websparks.ai/3_MisBD-d38e52cc.png" 
          alt="Miss Bangladesh Logo" 
          className="h-12 md:h-14 drop-shadow-lg"
        />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-secondary/20 to-primary/0 rounded-full blur-sm -z-10"></div>
      </div>
    </motion.div>
  );
};

export default Logo;

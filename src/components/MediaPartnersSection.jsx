import React from 'react';
import { motion } from 'framer-motion';

const MediaPartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Media Partners</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-center">Media Partner 1</h3>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-center">Media Partner 2</h3>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="flex items-center justify-center">
              <i className="bi bi-crown-fill text-accent text-5xl mr-3"></i>
              <div>
                <h3 className="text-xl font-bold">Miss Bangladesh</h3>
                <p className="text-primary">Beauty Pageant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartnersSection;

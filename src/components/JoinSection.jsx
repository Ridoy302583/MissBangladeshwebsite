import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const JoinSection = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join us on this incredible journey
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Be part of a transformative experience that celebrates beauty, intelligence, and the spirit of Bangladesh. Apply now to represent your country on international platforms.
          </p>
          <Link to="/apply" className="btn-secondary inline-block">
            Apply Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;

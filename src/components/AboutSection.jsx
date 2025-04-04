import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Miss Bangladesh Contestants" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-serif text-xl">Empowering Women</p>
                <p>Since 2020</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 text-gray-700">
              The Miss Bangladesh Beauty Pageant is the largest national beauty pageant of the country. For the first time, a Bangladeshi platform is sending the most qualified Bangladeshi women to represent the excellence of our country all over the world at twelve international beauty pageants, to take place in Asia, Europe, Africa, and the Americas.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Beauty pageants have a long history of influencing beauty standards and promoting inclusivity. The Miss Bangladesh Pageant 2024 aims to integrate Bangladesh into the international pageantry sector, providing the country with a platform to showcase its positive talents and culture to a global audience. The event aspires to elevate Bangladesh to a stage where it garners international recognition akin to the impact of global sports.
            </p>
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Organized by Miss Bangladesh Organization & Miss Bangladesh Foundation:</h3>
            <p className="text-lg mb-6 text-gray-700">
              Miss Bangladesh Organization is dedicated to uniting humanity and fostering leadership qualities based on gender parity. It empowers women and enables men to adapt to a society where women hold empowered roles. The organization raises awareness and works towards environmental sustainability and women's empowerment.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Miss Bangladesh Foundation: It is the charitable associate of Miss Bangladesh Organization which provides a platform for young women to advocate for various social causes.
            </p>
            <Link to="/about" className="btn-primary inline-block mt-4">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const MediaPartnersSection = () => {
  // Media partners data
  const mediaPartners = [
    {
      id: 1,
      name: 'ATN Bangla',
      image: 'https://www.missbangladesh.com/assets/media-partner/atn.jpg',
      type: 'Television Partner'
    },
    {
      id: 2,
      name: 'ATN News',
      image: 'https://www.missbangladesh.com/assets/media-partner/atn2.jpg',
      type: 'News Partner'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 } 
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 translate-x-1/4 translate-y-1/4"></div>
      
      {/* Crown decorations */}
      <motion.div 
        className="absolute top-20 left-10 text-primary opacity-5"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
          transition: { 
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse" 
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
          <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11V11.99z"/>
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 text-secondary opacity-5"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
          transition: { 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
          <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11V11.99z"/>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR VALUED PARTNERS
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-primary relative inline-block mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative z-10">Media Partners</span>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-2 left-0 h-3 bg-secondary/30 -z-10"
            ></motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Proud partners who help us showcase Bangladesh's beauty and talent to the world
          </motion.p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="relative mb-16 pb-16 border-b border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Miss Bangladesh Logo and text */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center mb-12"
              variants={itemVariants}
            >
              <div className="bg-white p-6 rounded-lg shadow-xl flex items-center mb-6 md:mb-0 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  animate={{
                    background: [
                      'rgba(140, 29, 64, 0.05)',
                      'rgba(255, 198, 39, 0.05)',
                      'rgba(140, 29, 64, 0.05)'
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="relative">
                  <Logo />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8C1D40" className="w-12 h-12 md:w-16 md:h-16">
                    <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11V11.99z"/>
                  </svg> */}
                </div>
                <div className="ml-4 relative">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">Miss Bangladesh</h3>
                  <p className="text-secondary font-medium">Beauty Pageant</p>
                </div>
              </div>
              
              <div className="flex items-center ml-0 md:ml-10">
                <div className="w-20 h-px bg-gray-300 hidden md:block"></div>
                <div className="mx-4 text-gray-500 font-medium text-sm">In partnership with</div>
                <div className="w-20 h-px bg-gray-300 hidden md:block"></div>
              </div>
            </motion.div>

            {/* Media Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-1 border-b border-gray-100">
                    <div className="bg-gray-50 py-2 px-4">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{partner.type}</p>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    <img 
                      src={partner.image}
                      alt={partner.name}
                      className="h-28 object-contain"
                    />
                  </div>
                  <div className="px-6 pb-6 text-center">
                    <h3 className="font-bold text-lg text-gray-800">{partner.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Call to action for potential partners */}
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-serif font-bold text-primary">Become a Partner</h3>
                <p className="text-gray-600 mt-2 max-w-xl">Join us in our mission to showcase Bangladesh's beauty and talent on the global stage. Partner with Miss Bangladesh Beauty Pageant for exclusive opportunities.</p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-md font-medium group relative overflow-hidden"
                >
                  <span className="relative z-10">Partner With Us</span>
                  <span className="absolute inset-0 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartnersSection;
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import Crown from '../Assets/crown.png';

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const textControls = useAnimation();
  const imageControls = useAnimation();

  React.useEffect(() => {
    if (isTextInView) {
      textControls.start("visible");
    }
    if (isImageInView) {
      imageControls.start("visible");
    }
  }, [isTextInView, isImageInView, textControls, imageControls]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Background animation variants
  const bgCircleVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background design elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-light to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-primary/5 skew-y-3 transform -translate-y-12 z-0"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-secondary/5 -translate-x-1/3 translate-y-1/4 z-0"></div>
      <div className="absolute left-10 top-40 w-20 h-20 rounded-full bg-primary/10 z-0"></div>
      <div className="absolute right-10 top-20 w-36 h-36 rounded-full border-4 border-secondary/10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-2"
          >
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider">ABOUT US</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 relative inline-block"
          >
            <span className="relative z-10">Miss Bangladesh Beauty Pageant</span>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-2 left-0 h-3 bg-secondary/30 -z-10"
            ></motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Empowering women through beauty, intelligence, and purpose since 2020
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image column */}
          <motion.div
            ref={imageRef}
            animate={imageControls}
            initial="hidden"
            variants={imageVariants}
            className="lg:col-span-5 lg:col-start-1 relative"
          >
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Crown image with animated background */}
              <motion.div 
                className="relative rounded-lg overflow-hidden shadow-2xl h-80 md:h-96"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0"></div>
                
                {/* Animated circles */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary/20 blur-md z-0"
                  animate="animate"
                  variants={bgCircleVariants}
                ></motion.div>
                
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-secondary/20 blur-md z-0"
                  animate="animate"
                  variants={bgCircleVariants}
                  custom={1}
                ></motion.div>
                
                {/* Animated radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,198,39,0.1),transparent_70%)] z-0"></div>
                
                {/* Crown image */}
                <div className="relative h-full flex items-center justify-center z-10">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotateZ: [-1, 1, -1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="w-2/3 max-w-xs relative"
                  >
                    <img 
                      src={Crown}
                      alt="Miss Bangladesh Crown" 
                      className="w-full h-auto object-contain relative z-10"
                    />
                    <motion.div 
                      className="absolute inset-0 -bottom-8 bg-primary/20 blur-xl rounded-full z-0"
                      animate="animate"
                      variants={glowVariants}
                    ></motion.div>
                  </motion.div>
                </div>
                
                {/* Light rays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_45%)] z-0 opacity-20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(140,29,64,0.3),transparent_45%)] z-0 opacity-20"></div>
                
                {/* Hover overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/80 via-primary/40 to-transparent z-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-center px-6">
                        <p className="text-xl font-serif font-bold">Celebrating Beauty & Excellence</p>
                        <p className="mt-2">Showcasing Bangladesh on global platforms</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Sparkle effects */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 z-5"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50 z-5"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5
                  }}
                ></motion.div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-secondary rounded-full opacity-20 z-0"></div>
              <motion.div 
                className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary rounded-lg shadow-lg flex items-center justify-center text-white z-20"
                initial={{ opacity: 0, y: 20, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <p className="font-serif font-bold">Since</p>
                  <p className="text-2xl font-serif font-bold">2020</p>
                </div>
              </motion.div>
            </div>

            {/* Second image with parallax effect */}
            <motion.div 
              className="absolute -bottom-10 -left-10 w-36 h-48 rounded-lg overflow-hidden shadow-xl z-20 hidden lg:block"
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Miss Bangladesh Crown" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </motion.div>
          </motion.div>
          
          {/* Content column */}
          <motion.div
            ref={textRef}
            animate={textControls}
            initial="hidden"
            variants={textVariants}
            className="lg:col-span-7 lg:col-start-6"
          >
            <motion.h3 
              variants={textItemVariants}
              className="text-3xl font-serif font-bold text-primary mb-6"
            >
              Bangladesh's Premier Beauty Pageant
            </motion.h3>
            
            <div className="space-y-6">
              <motion.p 
                variants={textItemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                The Miss Bangladesh Beauty Pageant is the largest national beauty pageant of the country. For the first time, a Bangladeshi platform is sending the most qualified Bangladeshi women to represent the excellence of our country all over the world at twelve international beauty pageants, to take place in Asia, Europe, Africa, and the Americas.
              </motion.p>
              
              <motion.p 
                variants={textItemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                The Miss Bangladesh Pageant 2025 aims to integrate Bangladesh into the international pageantry sector, providing the country with a platform to showcase its positive talents and culture to a global audience. The event aspires to elevate Bangladesh to a stage where it garners international recognition akin to the impact of global sports.
              </motion.p>
              
              <motion.div 
                variants={textItemVariants}
                className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg border-l-4 border-primary my-8"
              >
                <h4 className="text-xl font-serif font-bold text-primary mb-3 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 text-xs">
                    <i className="bi bi-crown-fill"></i>
                  </span>
                  Our Organizations
                </h4>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h5 className="font-semibold text-primary">Miss Bangladesh Organization</h5>
                    <p className="text-gray-700 text-sm mt-1">
                      Dedicated to uniting humanity and fostering leadership qualities based on gender parity and women's empowerment.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h5 className="font-semibold text-primary">Miss Bangladesh Foundation</h5>
                    <p className="text-gray-700 text-sm mt-1">
                      The charitable associate providing a platform for young women to advocate for various social causes.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={textItemVariants}
                className="flex flex-wrap gap-4 items-center mt-8"
              >
                <div className="flex-grow">
                  <h5 className="text-xl font-serif font-bold text-primary">Showcasing Across Continents</h5>
                  <div className="flex flex-wrap mt-2 gap-1">
                    {['Asia', 'Europe', 'Africa', 'Americas', 'Oceania'].map((continent) => (
                      <motion.span 
                        key={continent}
                        className="px-3 py-1 bg-secondary/10 text-primary rounded-full text-xs"
                        whileHover={{ 
                          backgroundColor: '#8C1D40', 
                          color: 'white',
                          scale: 1.05
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {continent}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <motion.div 
                  variants={textItemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to="/about" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-md font-medium group relative overflow-hidden"
                  >
                    <span className="relative z-10">Discover More</span>
                    <span className="absolute inset-0 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 relative z-10" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 1.5,
                        repeatDelay: 1
                      }}
                    >
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
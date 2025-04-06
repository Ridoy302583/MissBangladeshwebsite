import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Updated with real winner data from the provided HTML
const winners = [
  {
    id: 1,
    name: 'Drita Ziri',
    title: 'Miss Earth 2023',
    country: 'Albania',
    achievements: ['Environmental Advocate', 'Climate Change Initiatives', 'Global Ambassador'],
    quote: "Representing Albania has been the honor of a lifetime. I'm committed to environmental conservation and global change.",
    image: 'https://www.missbangladesh.com/assets/winners/drita.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Regina.png'
  },
  {
    id: 2,
    name: 'Ashley Melendez Rios',
    title: 'Miss Global 2023',
    country: 'Puerto Rico',
    achievements: ['Cultural Ambassador', 'Charity Projects', 'Women Empowerment'],
    quote: "Through Miss Global, I've been able to amplify my voice for important causes and inspire positive change.",
    image: 'https://www.missbangladesh.com/assets/winners/ashley.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Shawn.png'
  },
  {
    id: 3,
    name: 'Sonali Sapkota',
    title: 'Miss Interglobal 2022',
    country: 'Nepal',
    achievements: ['Youth Development', 'Education Programs', 'Cultural Exchange'],
    quote: "Beauty with a purpose means using your platform to create positive impact. That's what drives me every day.",
    image: 'https://www.missbangladesh.com/assets/winners/sonali.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Rochelle.png'
  },
  {
    id: 4,
    name: 'Manjung',
    title: 'Miss Glam World 2024',
    country: 'Taiwan',
    achievements: ['Fashion Ambassador', 'Charitable Initiatives', 'Cultural Representation'],
    quote: "I'm passionate about representing Taiwan and making a difference through my platform.",
    image: 'https://www.missbangladesh.com/assets/winners/manjung.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Regina.png'
  },
  {
    id: 5,
    name: 'Alexis Stine',
    title: 'Royal International Miss',
    country: 'USA',
    achievements: ['Community Service', 'Leadership Programs', 'Youth Mentorship'],
    quote: "My goal is to inspire the next generation of young women to pursue their dreams with confidence.",
    image: 'https://www.missbangladesh.com/assets/winners/alexis.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Rochelle.png'
  },
  {
    id: 6,
    name: 'Warapon Mae Yarbrough',
    title: 'Miss Asia Global',
    country: 'Thailand',
    achievements: ['Cultural Ambassador', 'Tourism Promotion', 'Social Advocacy'],
    quote: "Representing Thailand on the global stage is a responsibility I take with great pride and dedication.",
    image: 'https://www.missbangladesh.com/assets/winners/warapon.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Shawn.png'
  },
  {
    id: 7,
    name: 'Erika Hara',
    title: 'Miss Heritage International',
    country: 'Japan',
    achievements: ['Cultural Preservation', 'Heritage Awareness', 'International Relations'],
    quote: "Preserving our cultural heritage while building bridges between nations is my greatest passion.",
    image: 'https://www.missbangladesh.com/assets/winners/erika.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Regina.png'
  },
  {
    id: 8,
    name: 'Samela Aubrey',
    title: 'Miss Culture Global',
    country: 'Philippines',
    achievements: ['Cultural Diversity', 'Arts Promotion', 'Global Citizenship'],
    quote: "Through cultural understanding, we can build a more connected and peaceful world.",
    image: 'https://www.missbangladesh.com/assets/winners/samela.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Rochelle.png'
  },
  {
    id: 9,
    name: 'Gentiana Barbatoci',
    title: 'Miss Freedom of the World 2024',
    country: 'Kosovo',
    achievements: ['Human Rights Advocacy', 'Freedom Initiatives', 'Youth Empowerment'],
    quote: "Freedom and equality are values I champion through my platform and community work.",
    image: 'https://www.missbangladesh.com/assets/winners/kosovo.png',
    backgroundImage: 'https://www.missbangladesh.com/assets/Rochelle.png'
  }
];

const WinnersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const autoplayTimerRef = useRef(null);
  const sectionRef = useRef(null);

  // Handle autoplay functionality
  useEffect(() => {
    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % winners.length);
        setDirection(1);
      }, 5000);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  // Handle manual navigation
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + winners.length) % winners.length);
    setDirection(-1);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 7000);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % winners.length);
    setDirection(1);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 7000);
  };

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 7000);
  };

  // Variants for animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Background decoration variants
  const decorVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Progress bar animation
  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: '100%',
      transition: { 
        duration: 5,
        ease: "linear",
      }
    }
  };

  return (
    <section
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 -translate-x-1/4 -translate-y-1/2"
        initial="initial"
        animate="animate"
        variants={decorVariants}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/5 translate-x-1/4 translate-y-1/3"
        initial="initial"
        animate="animate"
        variants={decorVariants}
      ></motion.div>
      
      {/* Floating crowns */}
      <motion.div 
        className="absolute left-10 top-1/4 text-primary opacity-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          transition: { 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse" 
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
          <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11V11.99z"/>
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute right-16 bottom-1/3 text-secondary opacity-10"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
          transition: { 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1 
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
          <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11V11.99z"/>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CELEBRATING EXCELLENCE
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-primary relative inline-block mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative z-10">Our Champions</span>
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-2 left-0 h-3 bg-secondary/30 -z-10"
            ></motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Meet the extraordinary women who represent Bangladesh with grace and purpose on the global stage
          </motion.p>
        </div>

        {/* Main slider */}
        <div className="max-w-6xl mx-auto">
          <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Image side */}
                  <div className="relative">
                    <motion.div 
                      className="rounded-lg overflow-hidden h-96 md:h-[500px] shadow-xl relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Main image */}
                      <div className="relative h-full flex items-center justify-center bg-slate-800">
                        <img 
                          src={winners[activeIndex].backgroundImage} 
                          alt="Background" 
                          className="w-full h-full object-cover object-center"
                        />
                        
                        {/* Positioned winner image - Made bigger */}
                        <div className="absolute z-10 bottom-0 right-0 md:right-4 w-64 h-96 md:w-72 md:h-[450px]">
                          <img 
                            src={winners[activeIndex].image} 
                            alt={winners[activeIndex].name} 
                            className="h-full object-cover object-top"
                          />
                          {/* Add subtle highlight effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 mix-blend-overlay"></div>
                        </div>
                        
                        {/* Winner name overlay at top-left of image */}
                        <div className="absolute z-10 top-10 left-10 w-48 h-56 text-white">
                          <p className="text-gray-300 text-md md:text-md font-semibold uppercase">{winners[activeIndex].name}</p>
                          <p className="text-sm md:text-md py-1 text-white">{winners[activeIndex].title}</p>
                          <p className="text-xs md:text-md py-1 text-white">{winners[activeIndex].country}</p>
                        </div>
                      </div>
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-slate-800/40 to-transparent pointer-events-none"></div>
                      
                      {/* Decorative corner elements */}
                      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                        <div className="absolute top-4 left-0 h-0.5 w-8 bg-white"></div>
                        <div className="absolute top-0 left-4 h-8 w-0.5 bg-white"></div>
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                        <div className="absolute top-4 right-0 h-0.5 w-8 bg-white"></div>
                        <div className="absolute top-0 right-4 h-8 w-0.5 bg-white"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
                        <div className="absolute bottom-4 left-0 h-0.5 w-8 bg-white"></div>
                        <div className="absolute bottom-0 left-4 h-8 w-0.5 bg-white"></div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                        <div className="absolute bottom-4 right-0 h-0.5 w-8 bg-white"></div>
                        <div className="absolute bottom-0 right-4 h-8 w-0.5 bg-white"></div>
                      </div>
                    </motion.div>
                    
                    {/* Floating badge */}
                    <motion.div 
                      className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg py-3 px-5 z-10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11V11.99z"/>
                          </svg>
                        </span>
                        <span className="text-sm font-bold text-primary">{winners[activeIndex].title}</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content side */}
                  <div className="bg-white rounded-lg p-8 shadow-lg relative">
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16">
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-16">
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30"></div>
                    </div>
                    
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                    >
                      <h3 className="text-3xl font-serif font-bold text-primary mb-4">{winners[activeIndex].name}</h3>
                      <div className="flex items-center mb-3">
                        <p className="inline-block bg-secondary/10 px-3 py-1 rounded-full text-primary text-sm font-medium">
                          {winners[activeIndex].title}
                        </p>
                        <span className="mx-2 text-gray-400">•</span>
                        <p className="text-gray-600 text-sm">{winners[activeIndex].country}</p>
                      </div>
                      
                      <div className="mb-8">
                        <div className="flex">
                          <span className="text-4xl text-primary opacity-30 mr-2">"</span>
                          <p className="text-gray-700 italic">{winners[activeIndex].quote}</p>
                          <span className="text-4xl text-primary opacity-30 self-end ml-2">"</span>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-primary mb-3 flex items-center">
                          <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Achievements
                        </h4>
                        <div className="space-y-2 pl-7">
                          {winners[activeIndex].achievements.map((achievement, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></span>
                              <span className="text-gray-700">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <motion.div 
                        className="mt-8 text-right"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <a href="/about" className="inline-flex items-center text-primary font-medium">
                          Read full biography
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20 text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={handlePrevClick}
              aria-label="Previous winner"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20 text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={handleNextClick}
              aria-label="Next winner"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Dots and progress indicator */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex space-x-2 mb-2">
              {winners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-8 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary w-12' : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Progress bar */}
            {isAutoplay && (
              <div className="w-40 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-secondary"
                  key={activeIndex}
                  variants={progressVariants}
                  initial="initial"
                  animate="animate"
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom decorative badge */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block relative">
            <div className="bg-white rounded-xl shadow-xl py-6 px-10 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
              
              {/* Content */}
              <div className="relative">
                <p className="text-xl font-serif text-primary font-bold">Join the legacy of excellence</p>
                <p className="text-gray-600 mt-1">Applications for Miss Bangladesh 2024 are now open</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-4"
                >
                  <a 
                    href="/apply" 
                    className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-full shadow-md font-medium group relative overflow-hidden"
                  >
                    <span className="relative z-10">Apply Now</span>
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
            </div>
            
            {/* Decorative crown */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11.99h7c-0.53,4.12-3.28,7.79-7,8.94V12H5V6.3 l7-3.11V11.99z"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WinnersSection;
import React from 'react';
import { motion } from 'framer-motion';

const winners = [
  {
    id: 1,
    name: 'Nusrat Jahan',
    title: 'Miss Bangladesh 2023',
    image: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    name: 'Tasnia Farin',
    title: 'Miss Earth Bangladesh 2023',
    image: 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    name: 'Mehazabien Chowdhury',
    title: 'Miss International Bangladesh 2023',
    image: 'https://images.unsplash.com/photo-1611601679655-7c8e197a6604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

const WinnersSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Winners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {winners.map((winner, index) => (
            <motion.div
              key={winner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={winner.image} 
                  alt={winner.name} 
                  className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{winner.name}</h3>
                  <p className="text-secondary">{winner.title}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{winner.name}</h3>
                <p className="text-primary font-medium">{winner.title}</p>
                <p className="mt-3 text-gray-600">
                  Representing Bangladesh with grace, intelligence, and beauty on international platforms.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;

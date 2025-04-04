import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MissEarth = () => {
  return (
    <div>
      <div className="bg-primary text-white py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Miss Earth Bangladesh</h1>
            <p className="text-xl max-w-2xl mx-auto">Representing Bangladesh at one of the world's top beauty pageants with a focus on environmental awareness.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">About Miss Earth</h2>
              <p className="text-lg mb-8 text-gray-700">
                Miss Earth is an annual international environmental-themed beauty pageant promoting environmental awareness, conservation, and social responsibility. Along with Miss World, Miss Universe, and Miss International, Miss Earth is one of the Big Four international beauty pageants.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                The winner of Miss Bangladesh will represent our country at the Miss Earth pageant, advocating for environmental causes and showcasing Bangladesh's commitment to sustainability and ecological preservation.
              </p>
            </motion.div>

            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1604122230868-f86c3f8ee5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                  alt="Miss Earth Contestant" 
                  className="w-full h-auto"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">Beauty with a Purpose</h3>
                    <p className="text-gray-200">Promoting environmental awareness</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80" 
                  alt="Environmental Conservation" 
                  className="w-full h-auto"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">Environmental Advocacy</h3>
                    <p className="text-gray-200">Making a difference for our planet</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Miss Earth Bangladesh Initiatives</h2>
              <p className="text-lg mb-8 text-gray-700">
                As part of the Miss Earth Bangladesh program, our representatives engage in various environmental initiatives throughout the year:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-tree-fill text-3xl text-primary mr-4"></i>
                    <h3 className="text-xl font-bold">Tree Planting Campaigns</h3>
                  </div>
                  <p className="text-gray-700">
                    Regular tree planting initiatives across Bangladesh to combat deforestation and promote green spaces.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-recycle text-3xl text-primary mr-4"></i>
                    <h3 className="text-xl font-bold">Waste Management</h3>
                  </div>
                  <p className="text-gray-700">
                    Educational programs on proper waste disposal, recycling, and reducing plastic pollution.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-droplet-fill text-3xl text-primary mr-4"></i>
                    <h3 className="text-xl font-bold">Water Conservation</h3>
                  </div>
                  <p className="text-gray-700">
                    Awareness campaigns about water conservation and clean water access in rural communities.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-lightbulb-fill text-3xl text-primary mr-4"></i>
                    <h3 className="text-xl font-bold">Sustainable Living</h3>
                  </div>
                  <p className="text-gray-700">
                    Promoting eco-friendly practices and sustainable living solutions for everyday life.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 md:pr-8">
                  <h2 className="text-2xl font-serif font-bold mb-4">Become Miss Earth Bangladesh</h2>
                  <p className="mb-6 opacity-90">
                    Are you passionate about environmental conservation and want to represent Bangladesh on an international stage? Apply now to become the next Miss Earth Bangladesh!
                  </p>
                  <Link to="/apply" className="btn-secondary inline-block">
                    Apply Now
                  </Link>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                  <i className="bi bi-globe-americas text-8xl opacity-80"></i>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissEarth;

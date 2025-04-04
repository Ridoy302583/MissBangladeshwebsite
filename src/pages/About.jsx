import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <div className="bg-primary text-white py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">Learn more about the Miss Bangladesh Beauty Pageant, our mission, vision, and impact.</p>
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
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-lg mb-8 text-gray-700">
                The Miss Bangladesh Beauty Pageant is the largest national beauty pageant of the country. For the first time, a Bangladeshi platform is sending the most qualified Bangladeshi women to represent the excellence of our country all over the world at twelve international beauty pageants, to take place in Asia, Europe, Africa, and the Americas.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Beauty pageants have a long history of influencing beauty standards and promoting inclusivity. The Miss Bangladesh Pageant 2024 aims to integrate Bangladesh into the international pageantry sector, providing the country with a platform to showcase its positive talents and culture to a global audience. The event aspires to elevate Bangladesh to a stage where it garners international recognition akin to the impact of global sports.
              </p>
            </motion.div>

            <div className="my-16">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80" 
                  alt="Miss Bangladesh Event" 
                  className="w-full h-auto rounded-lg shadow-xl"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-serif font-bold">Celebrating Beauty & Intelligence</h3>
                    <p className="text-gray-200">Miss Bangladesh 2023 Grand Finale</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Organizations</h2>
              
              <div className="mb-10">
                <h3 className="text-2xl font-serif font-bold mb-4">Miss Bangladesh Organization</h3>
                <p className="text-lg mb-6 text-gray-700">
                  Miss Bangladesh Organization is dedicated to uniting humanity and fostering leadership qualities based on gender parity. It empowers women and enables men to adapt to a society where women hold empowered roles. The organization raises awareness and works towards environmental sustainability and women's empowerment.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  By embarking on a journey of empowerment and entrepreneurship, it represents the nation with unparalleled charm and inspires millions globally. The organization upholds female leaders who transition from the runway to the boardroom, advocate for social causes, and champion women's rights. Under Meghna Alam's leadership, The Miss Bangladesh Organization celebrates diversity, promotes positive societal change, and positions Bangladesh as a global pioneer in gender equality and leadership.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Miss Bangladesh Foundation</h3>
                <p className="text-lg mb-6 text-gray-700">
                  It is the charitable associate of Miss Bangladesh Organization which provides a platform for young women to advocate for various social causes. The foundation works on several key initiatives:
                </p>
                <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                  <li>Women's education and empowerment programs</li>
                  <li>Environmental conservation projects</li>
                  <li>Healthcare awareness campaigns</li>
                  <li>Cultural exchange programs</li>
                  <li>Community development initiatives</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Mission & Vision</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-bullseye text-3xl text-primary mr-4"></i>
                    <h3 className="text-2xl font-serif font-bold">Mission</h3>
                  </div>
                  <p className="text-gray-700">
                    To empower Bangladeshi women by providing them with a platform to showcase their beauty, intelligence, and talent on international stages, while promoting the rich cultural heritage of Bangladesh.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-eye text-3xl text-primary mr-4"></i>
                    <h3 className="text-2xl font-serif font-bold">Vision</h3>
                  </div>
                  <p className="text-gray-700">
                    To establish Bangladesh as a prominent presence in international beauty pageants and to create a generation of empowered women who can be ambassadors for positive change in society.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

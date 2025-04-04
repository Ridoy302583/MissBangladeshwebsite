import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Meghna Alam',
    position: 'Founder & CEO',
    bio: 'With over 15 years of experience in the beauty and fashion industry, Meghna has been instrumental in establishing Miss Bangladesh as a prestigious national pageant.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
  },
  {
    id: 2,
    name: 'Farhan Ahmed',
    position: 'Creative Director',
    bio: 'Farhan brings his artistic vision to Miss Bangladesh, overseeing all visual aspects of the pageant from stage design to promotional materials.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 3,
    name: 'Nusrat Khan',
    position: 'Event Manager',
    bio: 'With her exceptional organizational skills, Nusrat ensures that all Miss Bangladesh events run smoothly from auditions to the grand finale.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
  },
  {
    id: 4,
    name: 'Rahim Chowdhury',
    position: 'Marketing Director',
    bio: 'Rahim develops and implements strategic marketing campaigns to promote Miss Bangladesh nationally and internationally.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 5,
    name: 'Sadia Rahman',
    position: 'Talent Coach',
    bio: 'A former pageant winner herself, Sadia mentors contestants in all aspects of competition from walking the runway to interview preparation.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
  },
  {
    id: 6,
    name: 'Kamal Hossain',
    position: 'International Relations',
    bio: 'Kamal coordinates with international pageant organizations to ensure Bangladesh\'s representation on global platforms.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
];

const Teams = () => {
  return (
    <div>
      <div className="bg-primary text-white py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Teams</h1>
            <p className="text-xl max-w-2xl mx-auto">Meet the dedicated professionals behind Miss Bangladesh Beauty Pageant.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Leadership Team</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our team consists of experienced professionals from various fields who are passionate about empowering women and showcasing the beauty and talent of Bangladesh on international platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="flex space-x-3">
                        <a href="#" className="text-white hover:text-secondary">
                          <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="#" className="text-white hover:text-secondary">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="text-white hover:text-secondary">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Judges</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                Our panel of judges consists of industry experts, former pageant winners, and influential personalities who bring their expertise to select the most deserving candidates.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <i className="bi bi-people-fill text-6xl text-primary mb-6"></i>
                  <h3 className="text-2xl font-bold mb-4">Become a Judge</h3>
                  <p className="text-gray-700 max-w-2xl mb-6">
                    We're always looking for experienced professionals to join our judging panel. If you have expertise in fashion, beauty, talent development, or related fields, we'd love to hear from you.
                  </p>
                  <a href="/contact" className="btn-primary">
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

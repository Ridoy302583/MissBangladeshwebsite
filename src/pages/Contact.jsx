import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div>
      <div className="bg-primary text-white py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">Get in touch with the Miss Bangladesh Beauty Pageant team.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Get In Touch</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We'd love to hear from you! Whether you have questions about the pageant, sponsorship opportunities, or media inquiries, our team is here to help.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Our Location</h3>
                      <p className="text-gray-700">123 Beauty Avenue, Gulshan, Dhaka 1212, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Email Us</h3>
                      <p className="text-gray-700">info@missbangladesh.org</p>
                      <p className="text-gray-700">applications@missbangladesh.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Call Us</h3>
                      <p className="text-gray-700">+880 1234 567890</p>
                      <p className="text-gray-700">+880 9876 543210</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Send Us a Message</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Your Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary text-center">Our Location</h2>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.41279442466389!3d23.796339678132554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f96fcc3b%3A0xb3a3f7e12c75b948!2sGulshan%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1623825823500!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

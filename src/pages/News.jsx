import React from 'react';
import { motion } from 'framer-motion';

const newsArticles = [
  {
    id: 1,
    title: 'Miss Bangladesh 2024 Applications Now Open',
    date: 'January 15, 2024',
    excerpt: 'The search for the next Miss Bangladesh has officially begun. Applications for the 2024 pageant are now open to eligible candidates across the country.',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80',
    category: 'Announcement'
  },
  {
    id: 2,
    title: 'Miss Bangladesh to Represent at 12 International Pageants',
    date: 'December 10, 2023',
    excerpt: 'For the first time, Miss Bangladesh Organization will send representatives to twelve international beauty pageants across five continents.',
    image: 'https://images.unsplash.com/photo-1604122230868-f86c3f8ee5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    category: 'International'
  },
  {
    id: 3,
    title: 'Preparation Workshop for Miss Bangladesh Contestants',
    date: 'November 25, 2023',
    excerpt: 'A comprehensive workshop covering runway walking, interview skills, and personal branding will be held for all shortlisted contestants.',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Event'
  },
  {
    id: 4,
    title: 'Miss Bangladesh Foundation Launches Environmental Initiative',
    date: 'October 18, 2023',
    excerpt: 'The charitable arm of Miss Bangladesh Organization has launched a new initiative focused on environmental conservation and sustainability.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80',
    category: 'Foundation'
  },
  {
    id: 5,
    title: 'Miss Bangladesh 2023 Visits Children\'s Hospital',
    date: 'September 5, 2023',
    excerpt: 'As part of her social responsibility initiatives, Miss Bangladesh 2023 visited a children\'s hospital in Dhaka to spend time with young patients.',
    image: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Community'
  },
  {
    id: 6,
    title: 'New Sponsors Join Miss Bangladesh 2024',
    date: 'August 22, 2023',
    excerpt: 'Several major brands have announced their sponsorship of the upcoming Miss Bangladesh 2024 pageant, bringing additional resources and opportunities.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Sponsorship'
  }
];

const News = () => {
  return (
    <div>
      <div className="bg-primary text-white py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">News & Updates</h1>
            <p className="text-xl max-w-2xl mx-auto">Stay informed about the latest happenings at Miss Bangladesh Beauty Pageant.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-60 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-sm py-1 px-3 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 mb-2">{article.date}</p>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                      Read More <i className="bi bi-arrow-right ml-2"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="btn-primary">
                Load More News
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-20 bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 md:pr-8">
                  <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Subscribe to Our Newsletter</h2>
                  <p className="text-gray-700 mb-6">
                    Stay updated with the latest news, events, and opportunities from Miss Bangladesh Beauty Pageant.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="btn-primary whitespace-nowrap">
                      Subscribe Now
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                  <i className="bi bi-envelope-paper-heart text-8xl text-primary opacity-80"></i>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

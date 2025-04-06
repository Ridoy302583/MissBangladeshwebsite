import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Combined news articles from both files
const newsArticles = [
  {
    id: 1,
    title: 'Miss Bangladesh Beauty Pageant to crown 10 ambassadors to rebrand Bangladesh globally',
    date: 'September 17, 2024',
    excerpt: 'The Miss Bangladesh Beauty Pageant 2024 was officially launched yesterday at The Daily Star...',
    image: 'https://www.missbangladesh.com/assets/press/press.png',
    category: 'The Daily Star',
    link: 'https://www.thedailystar.net/entertainment/news/miss-bangladesh-beauty-pageant-crown-10-ambassadors-rebrand-bangladesh-globally-3705066'
  },
  {
    id: 2,
    title: 'ঢাকায় শুরু হচ্ছে নতুন রিয়েলিটি শো',
    date: 'September 17, 2024',
    excerpt: 'ঢাকায় প্রথমবারের মতো শুরু হচ্ছে ভিন্নমাত্রার প্রতিযোগিতা \'মিস বাংলাদেশ বিউটি পেজেন্ট\'। যেখান থেকে নির্বাচিত ১০ জন প্রতিযোগীকে পাঠানো হবে ভারতের মিস এশিয়া, কম্বোডিয়ার মিস গ্লোবাল...',
    image: 'https://www.missbangladesh.com/assets/press/press1.png',
    category: 'বাংলা ট্রিবিউন',
    link: 'https://www.banglatribune.com/entertainment/863546/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A7%9F-%E0%A6%B6%E0%A7%81%E0%A6%B0%E0%A7%81-%E0%A6%B9%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E2%80%98%E0%A6%AE%E0%A6%BF%E0%A6%B8-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6-%E0%A6%AC%E0%A6%BF%E0%A6%89%E0%A6%9F%E0%A6%BF-%E0%A6%AA%E0%A7%87%E0%A6%9C%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E2%80%99'
  },
  {
    id: 3,
    title: 'মিস বাংলাদেশ বিউটি পেজেন্ট ২০২৪ বিশ্বজুড়ে বাংলাদেশের ভাবমূর্তি পুনর্গঠনের লক্ষ্যে ১০ জন বাংলাদেশী নারীকে মুকুট পরাবে',
    date: 'September 17, 2024',
    excerpt: 'দেশে শুরু হলো নতুন একটি সুন্দরী প্রতিযোগিতা। গতকাল মঙ্গলবার ডেইলি স্টার সেন্টারে অনুষ্ঠিত একটি সংবাদ সম্মেলনের মাধ্যমে...',
    image: 'https://www.missbangladesh.com/assets/press/press2.png',
    category: 'খবরের কাগজ',
    link: 'https://www.khaborerkagoj.com/entertainment/829127'
  },
  {
    id: 4,
    title: 'সুন্দরী প্রতিযোগিতা, যেভাবে আবেদন করবেন আগ্রহীরা',
    date: 'September 17, 2024',
    excerpt: 'দেশে প্রথমবারের মতো শুরু হচ্ছে \'মিস বাংলাদেশ বিউটি পেজেন্ট\'। যেখান থেকে নির্বাচিত ১০ জন প্রতিযোগীকে পাঠানো হবে ভারতের মিস এশিয়া...',
    image: 'https://www.missbangladesh.com/assets/press/press3.png',
    category: 'Bangla News',
    link: 'https://www.banglanews24.com/entertainment/news/bd/1393231.details'
  },
  {
    id: 5,
    title: 'Miss Bangladesh Beauty Pageant 2024 launched',
    date: 'September 17, 2024',
    excerpt: 'The Miss Bangladesh Beauty Pageant 2024 was launched to crown 10 Bangladeshi women to rebrand Bangladesh Globally at the Daily Star Centre in Dhaka on Tuesday...',
    image: 'https://www.missbangladesh.com/assets/press/press4.png',
    category: 'New Age',
    link: 'https://www.newagebd.net/post/others1/245458/miss-bangladesh-beauty-pageant-2024-launched'
  },
  {
    id: 6,
    title: 'Miss Bangladesh 2024 Applications Now Open',
    date: 'January 15, 2024',
    excerpt: 'The search for the next Miss Bangladesh has officially begun. Applications for the 2024 pageant are now open to eligible candidates across the country.',
    image: 'https://www.missbangladesh.com/assets/press/press5.png',
    category: 'Announcement',
    link: '#'
  },
  {
    id: 7,
    title: 'Miss Bangladesh to Represent at 12 International Pageants',
    date: 'December 10, 2023',
    excerpt: 'For the first time, Miss Bangladesh Organization will send representatives to twelve international beauty pageants across five continents.',
    image: 'https://www.missbangladesh.com/assets/press/press5.png',
    category: 'International',
    link: '#'
  },
  {
    id: 8,
    title: 'Miss Bangladesh Foundation Launches Environmental Initiative',
    date: 'October 18, 2023',
    excerpt: 'The charitable arm of Miss Bangladesh Organization has launched a new initiative focused on environmental conservation and sustainability.',
    image: 'https://www.missbangladesh.com/assets/press/press5.png',
    category: 'Foundation',
    link: '#'
  },
  {
    id: 9,
    title: 'নতুন রিয়েলিটি শো \'মিস বাংলাদেশ বিউটি পেজেন্ট\'',
    date: 'September 18, 2024',
    excerpt: 'ঢাকায় প্রথমবারের মতো শুরু হচ্ছে ভিন্ন মাত্রার প্রতিযোগিতা \'মিস বাংলাদেশ বিউটি পেজেন্ট\'। যেখান থেকে নির্বাচিত ১০ জন প্রতিযোগীকে পাঠানো হবে ভারতের মিস এশিয়া, কম্বোডিয়ার মিস...',
    image: 'https://www.missbangladesh.com/assets/press/press9.png',
    category: 'ভোরের কাগজ',
    link: 'https://www.bhorerkagoj.com/tp-entertainment/737611'
  }
];

// Categories for filtering
const categories = ['All', 'The Daily Star', 'New Age', 'Bangla News', 'বাংলা ট্রিবিউন', 'Announcement', 'International', 'Foundation'];

const News = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter articles by category
  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);
  
  // Load more articles
  const loadMore = () => {
    setVisibleArticles(prev => Math.min(prev + 3, filteredArticles.length));
  };
  
  // Reset visible articles when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleArticles(6);
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-amber-800 text-white py-24 relative">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
            <p className="text-xl max-w-2xl mx-auto">Stay informed about the latest happenings at Miss Bangladesh Beauty Pageant.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Browse News By Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category 
                      ? 'bg-amber-700 text-white' 
                      : 'bg-white text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, visibleArticles).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full p-4">
                    <span className="inline-block bg-black text-white text-sm font-bold py-1 px-3 uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-amber-600 text-sm font-medium mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-amber-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-amber-700 font-medium hover:text-amber-900"
                  >
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleArticles < filteredArticles.length && (
            <div className="mt-12 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadMore}
                className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
              >
                Load More News
              </motion.button>
            </div>
          )}

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-amber-700 to-amber-500 p-8 rounded-lg shadow-lg text-white"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8">
                <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-amber-100 mb-6">
                  Stay updated with the latest news, events, and opportunities from Miss Bangladesh Beauty Pageant.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                  />
                  <button className="bg-white text-amber-700 px-6 py-3 rounded-md font-bold hover:bg-amber-100 transition-colors whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Latest Press Coverage */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-amber-800 mb-4">Press Coverage</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Miss Bangladesh has been featured in various national and international media outlets.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://www.missbangladesh.com/assets/press/press.png" alt="The Daily Star" className="h-12" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://www.missbangladesh.com/assets/press/press1.png" alt="বাংলা ট্রিবিউন" className="h-12" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://www.missbangladesh.com/assets/press/press4.png" alt="New Age" className="h-12" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://www.missbangladesh.com/assets/press/press5.png" alt="Daily Observer" className="h-12" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img src="https://www.missbangladesh.com/assets/press/press6.png" alt="Bd News 24" className="h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
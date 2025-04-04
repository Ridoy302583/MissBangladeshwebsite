import React from 'react';
import { motion } from 'framer-motion';

const Apply = () => {
  return (
    <div>
      <div className="bg-primary text-white py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Apply Now</h1>
            <p className="text-xl max-w-2xl mx-auto">Take the first step towards becoming the next Miss Bangladesh and representing your country on international platforms.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-primary text-white p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Application Requirements</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-secondary mr-3 mt-1"></i>
                    <span>Age: 18-27 years</span>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-secondary mr-3 mt-1"></i>
                    <span>Minimum height: 5'4" (163 cm)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-secondary mr-3 mt-1"></i>
                    <span>Bangladeshi citizen</span>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-secondary mr-3 mt-1"></i>
                    <span>Never married</span>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-secondary mr-3 mt-1"></i>
                    <span>No children</span>
                  </li>
                  <li className="flex items-start">
                    <i className="bi bi-check-circle-fill text-secondary mr-3 mt-1"></i>
                    <span>Good communication skills</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Application Form</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label htmlFor="dob" className="block text-gray-700 mb-2">Date of Birth *</label>
                      <input 
                        type="date" 
                        id="dob" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="height" className="block text-gray-700 mb-2">Height (cm) *</label>
                      <input 
                        type="number" 
                        id="height" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-gray-700 mb-2">City *</label>
                      <input 
                        type="text" 
                        id="city" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="education" className="block text-gray-700 mb-2">Education *</label>
                    <input 
                      type="text" 
                      id="education" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="experience" className="block text-gray-700 mb-2">Previous Pageant Experience (if any)</label>
                    <textarea 
                      id="experience" 
                      rows="3" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="why" className="block text-gray-700 mb-2">Why do you want to be Miss Bangladesh? *</label>
                    <textarea 
                      id="why" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Upload Recent Photos *</label>
                    <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                      <i className="bi bi-cloud-arrow-up text-4xl text-gray-400"></i>
                      <p className="mt-2 text-sm text-gray-500">Drag & drop files here or click to browse</p>
                      <input type="file" className="hidden" id="photos" multiple accept="image/*" />
                      <button 
                        type="button" 
                        onClick={() => document.getElementById('photos').click()}
                        className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        Select Files
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Please upload at least 3 photos: full-length, close-up, and profile.</p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" required />
                      <span className="text-gray-700">I confirm that all information provided is accurate and I meet all the eligibility requirements. I agree to the <a href="/terms-conditions" className="text-primary hover:underline">terms and conditions</a>. *</span>
                    </label>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import Header1 from '../Assets/header1.png';

const ApplicationForm = () => {
  const [sameAddress, setSameAddress] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="relative bg-pink-500 text-white shadow-md py-6">
        
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <Logo />
          <div className="text-right">
            <h2 className="text-white font-serif font-bold text-2xl">Beauty Pageant 2024</h2>
            <p className="text-white text-sm opacity-80">Official Application</p>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-primary text-white py-16 md:py-24 relative">
      <div 
          className="absolute inset-0 z-0 opacity-70" 
          style={{
            backgroundImage: `url(${Header1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* <div className="absolute inset-0 bg-[url('https://www.missbangladesh.com/_next/static/media/winner.1fd2cd3e.png')] bg-cover bg-center opacity-20"></div> */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Logo />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Miss Bangladesh 2025</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Take the first step towards becoming the next Miss Bangladesh and representing your country on international platforms.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
      {/* <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{
            backgroundImage: `url(${Header1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div> */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8 border-b">
              
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-primary">Application Form</h2>
                <p className="text-gray-500 mt-2">Please fill in all required fields marked with an asterisk (*)</p>
              </div>
              
              <form>
                {/* Section 1: Personal Information */}
                <div className="space-y-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <label htmlFor="age" className="block text-gray-700 mb-2">Age *</label>
                      <input 
                        type="number" 
                        id="age" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        min="18"
                        max="28"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="nationality" className="block text-gray-700 mb-2">Nationality *</label>
                    <input 
                      type="text" 
                      id="nationality" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="Bangladeshi"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-gray-700 mb-2">Emergency Contact Phone *</label>
                      <input 
                        type="tel" 
                        id="emergencyPhone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="emergencyRelation" className="block text-gray-700 mb-2">Relation to Emergency Contact *</label>
                      <input 
                        type="text" 
                        id="emergencyRelation" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Do you have a passport? *</label>
                      <div className="flex gap-4">
                        <label className="inline-flex items-center">
                          <input type="radio" name="passport" value="yes" className="h-4 w-4 text-primary" required />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="passport" value="no" className="h-4 w-4 text-primary" />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Can you obtain visa and flights? *</label>
                      <div className="flex gap-4">
                        <label className="inline-flex items-center">
                          <input type="radio" name="visa" value="yes" className="h-4 w-4 text-primary" required />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="visa" value="no" className="h-4 w-4 text-primary" />
                          <span className="ml-2">No</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="visa" value="maybe" className="h-4 w-4 text-primary" />
                          <span className="ml-2">Maybe</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 2: Address Details */}
                <div className="space-y-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Address Details</h3>
                  
                  <div>
                    <h4 className="font-bold text-gray-700 mb-4">Permanent Address</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="permanentStreet" className="block text-gray-700 mb-2">Street *</label>
                        <input 
                          type="text" 
                          id="permanentStreet" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="permanentDistrict" className="block text-gray-700 mb-2">District *</label>
                        <input 
                          type="text" 
                          id="permanentDistrict" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <label htmlFor="permanentPostal" className="block text-gray-700 mb-2">Postal Code *</label>
                        <input 
                          type="text" 
                          id="permanentPostal" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="permanentCountry" className="block text-gray-700 mb-2">Country *</label>
                        <input 
                          type="text" 
                          id="permanentCountry" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          defaultValue="Bangladesh"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex items-center">
                    <input
                      type="checkbox"
                      id="sameAsPermAddress"
                      className="h-4 w-4 text-primary"
                      checked={sameAddress}
                      onChange={() => setSameAddress(!sameAddress)}
                    />
                    <label htmlFor="sameAsPermAddress" className="ml-2 text-gray-700">
                      Present Address Same as Permanent Address
                    </label>
                  </div>
                  
                  {!sameAddress && (
                    <div className="mt-6">
                      <h4 className="font-bold text-gray-700 mb-4">Present Address</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="presentStreet" className="block text-gray-700 mb-2">Street *</label>
                          <input 
                            type="text" 
                            id="presentStreet" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="presentDistrict" className="block text-gray-700 mb-2">District *</label>
                          <input 
                            type="text" 
                            id="presentDistrict" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                          <label htmlFor="presentPostal" className="block text-gray-700 mb-2">Postal Code *</label>
                          <input 
                            type="text" 
                            id="presentPostal" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="presentCountry" className="block text-gray-700 mb-2">Country *</label>
                          <input 
                            type="text" 
                            id="presentCountry" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue="Bangladesh"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Section 3: Biographical Information */}
                <div className="space-y-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Biographical Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="height" className="block text-gray-700 mb-2">Height (Centimeter) *</label>
                      <input 
                        type="number" 
                        id="height" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        min="150"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">Minimum height: 163 cm (5'4")</p>
                    </div>
                    <div>
                      <label htmlFor="weight" className="block text-gray-700 mb-2">Weight (kg) *</label>
                      <input 
                        type="number" 
                        id="weight" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="hairColor" className="block text-gray-700 mb-2">Hair Color *</label>
                      <input 
                        type="text" 
                        id="hairColor" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="eyeColor" className="block text-gray-700 mb-2">Eye Color *</label>
                      <input 
                        type="text" 
                        id="eyeColor" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="languages" className="block text-gray-700 mb-2">Languages Spoken *</label>
                    <input 
                      type="text" 
                      id="languages" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., Bengali, English, Hindi"
                      required
                    />
                  </div>
                </div>
                
                {/* Section 4: Education and Occupation */}
                <div className="space-y-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Education and Occupation</h3>
                  
                  <div>
                    <label htmlFor="lastDegree" className="block text-gray-700 mb-2">Last Degree/Diploma *</label>
                    <input 
                      type="text" 
                      id="lastDegree" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="yearGraduated" className="block text-gray-700 mb-2">Year Graduated/Expected *</label>
                      <input 
                        type="number" 
                        id="yearGraduated" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        min="2010"
                        max="2030"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="institution" className="block text-gray-700 mb-2">Institution *</label>
                      <input 
                        type="text" 
                        id="institution" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="currentOccupation" className="block text-gray-700 mb-2">Current Occupation *</label>
                    <input 
                      type="text" 
                      id="currentOccupation" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2 pt-6">Pageant Experience</h3>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Is this your first pageant? *</label>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center">
                        <input type="radio" name="firstPageant" value="yes" className="h-4 w-4 text-primary" required />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="firstPageant" value="no" className="h-4 w-4 text-primary" />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="pageantExperience" className="block text-gray-700 mb-2">Previous Pageant Experience (if any)</label>
                    <textarea 
                      id="pageantExperience" 
                      rows="3" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="List titles and years of participation"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="positions" className="block text-gray-700 mb-2">Secured Positions (if any)</label>
                    <textarea 
                      id="positions" 
                      rows="3" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="List any positions or titles secured in previous pageants"
                    ></textarea>
                  </div>
                </div>
                
                {/* Section 5: Skills and Talents */}
                <div className="space-y-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Skills and Talents</h3>
                  
                  <div>
                    <label htmlFor="specialSkills" className="block text-gray-700 mb-2">Special Skills *</label>
                    <textarea 
                      id="specialSkills" 
                      rows="3" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., dancing, singing, playing musical instruments, etc."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="hobbies" className="block text-gray-700 mb-2">Hobbies and Interests *</label>
                    <textarea 
                      id="hobbies" 
                      rows="3" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2 pt-6">Questions</h3>
                  
                  <div>
                    <label htmlFor="whyParticipate" className="block text-gray-700 mb-2">
                      Why do you want to participate in the Miss Bangladesh Beauty Pageant 2025? *
                      <span className="text-xs text-gray-500 ml-2">(100 words max)</span>
                    </label>
                    <textarea 
                      id="whyParticipate" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                      maxLength="600"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="socialCause" className="block text-gray-700 mb-2">
                      Describe a social cause you are working on or are passionate about *
                      <span className="text-xs text-gray-500 ml-2">(150 words max)</span>
                    </label>
                    <textarea 
                      id="socialCause" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                      maxLength="900"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="qualities" className="block text-gray-700 mb-2">
                      What qualities do you possess that make you a suitable candidate? *
                      <span className="text-xs text-gray-500 ml-2">(200 words max)</span>
                    </label>
                    <textarea 
                      id="qualities" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                      maxLength="1200"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Are you in good health and able to participate in pageant activities? *</label>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center">
                        <input type="radio" name="goodHealth" value="yes" className="h-4 w-4 text-primary" required />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="goodHealth" value="no" className="h-4 w-4 text-primary" />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Section 6: Photographs */}
                <div className="space-y-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Photographs</h3>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Headshot Photo *</label>
                    <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                      <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="mt-2 text-sm text-gray-500">Drag & drop file here or click to browse</p>
                      <input type="file" className="hidden" id="headshot" accept="image/*" required />
                      <button 
                        type="button" 
                        onClick={() => document.getElementById('headshot').click()}
                        className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        Select File
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Please upload a clear, high-quality recent headshot (taken within the last 3 months).</p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Full Body Shot *</label>
                    <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                      <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="mt-2 text-sm text-gray-500">Drag & drop file here or click to browse</p>
                      <input type="file" className="hidden" id="fullbody" accept="image/*" required />
                      <button 
                        type="button" 
                        onClick={() => document.getElementById('fullbody').click()}
                        className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        Select File
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Please upload a full-length photo in formal attire.</p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Additional Photos(Optional)</label>
                    <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                      <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="mt-2 text-sm text-gray-500">Drag & drop files here or click to browse</p>
                      <input type="file" className="hidden" id="additionalPhotos" accept="image/*" multiple />
                      <button 
                        type="button" 
                        onClick={() => document.getElementById('additionalPhotos').click()}
                        className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        Select Files
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">You may upload up to 3 additional photos showcasing different looks.</p>
                  </div>
                </div>
                
                {/* Consent and Agreement */}
                <div className="space-y-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Consent and Agreement</h3>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <div className="mb-4">
                      <label className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-3" required />
                        <span className="text-gray-700">
                          I confirm that I have read and agree to abide by the rules and regulations of the Miss Bangladesh Beauty Pageant 2025. I consent to the use of my photos and videos for promotional purposes related to the pageant.
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-3" required />
                        <span className="text-gray-700">
                          I hereby declare that all the information provided in this application form is true and accurate to the best of my knowledge.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-bold flex items-center"
                  >
                    Submit Application
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-gray-50 p-8 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">Application Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Age: 18-27 years</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Minimum height: 5'4" (163 cm)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Bangladeshi citizen</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Never married</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>No children</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Good communication skills</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">Contact Us</h3>
                  <p className="mb-4">If you have any questions about the application process, please feel free to contact our team:</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>applications@missbangladesh.org</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span>+880 2 1234 5678</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>Miss Bangladesh Office, Gulshan Avenue, Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* <div className="mt-12 text-center">
            <p className="text-gray-500">
              &copy; 2025 Miss Bangladesh Beauty Pageant. All rights reserved.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
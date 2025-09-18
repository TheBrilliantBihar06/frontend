import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar'; // Adjust path if needed
import Footer from '../components/Footer'; // Adjust path if needed

const EventSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const events = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      title: 'UPSC Civil Services Program',
      description: 'Comprehensive preparation program for UPSC Civil Services examination with expert faculty, updated syllabus coverage, and personalized guidance.',
      status: 'Coming Soon',
      category: 'UPSC',
      location: 'Brilliant Bihar, Patna',
      duration: 'Full Year Program',
      instructor: 'Expert Faculty Team',
      dateTime: 'October 15, 2025 - 10:00 AM',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
      title: 'BPSC Preparation Course',
      description: 'Strategic and comprehensive course for Bihar Public Service Commission examination with focus on Bihar-specific topics and current affairs.',
      status: 'Coming Soon',
      category: 'BPSC',
      location: 'Brilliant Bihar, Patna',
      duration: '8 Months Program',
      instructor: 'Specialized BPSC Faculty',
      dateTime: 'October 20, 2025 - 2:00 PM',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=500&h=300&fit=crop',
      title: 'Cultural Fest: Bihar’s Heritage',
      description: 'Celebrate Bihar’s rich cultural legacy with performances, workshops, and interactive sessions.',
      status: 'Coming Soon',
      category: 'Cultural',
      location: 'Brilliant Bihar, Patna',
      duration: '1 Day Event',
      instructor: 'Cultural Experts',
      dateTime: 'November 5, 2025 - 9:00 AM',
    },
  ];

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter((event) => event.category === selectedCategory);

  return (
    <>
      <Navbar />
      <section className="py-16 sm:py-20 md:py-24 px-2 sm:px-4 min-h-screen relative overflow-hidden bg-gray-900 text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Banner */}
          <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-emerald-900 h-48 md:h-64 flex items-center justify-center rounded-xl overflow-hidden mb-8">
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwTTAgNUw1IDBNNSA1TDAgME0wIDVMNSAwIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
            <div className="text-center z-10 px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">Discover Upcoming Programs</h1>
              <p className="text-lg md:text-xl text-gray-300">Blending Bihar’s ancient wisdom with futuristic education</p>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 mb-4 px-4">
              Upcoming Events at Brilliant Bihar
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4">
              5000+ Students Attended Our Events
            </p>
          </div>

          {/* Filters/Tabs */}
          <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
            {['All', 'UPSC', 'BPSC', 'Cultural'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto px-4">
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="group relative bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* Interactive Elements on Hover */}
                    {hoveredEvent === event.id && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-pulse">
                      {event.status}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      <span>{event.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2 sm:mb-3">
                        {event.title}
                      </h3>
                      <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-emerald-500/30">
                        {event.category}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-base">
                      {event.description}
                    </p>
                    
                    <p className="text-sm text-gray-400 mb-2">{event.dateTime}</p>
                    
                    {/* Program Details */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="break-words">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="break-words">{event.instructor}</span>
                      </div>
                    </div>
                    
                    {/* Register Button */}
                    <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow duration-300">
                      Register Now
                    </button>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-emerald-500 animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-10 sm:mt-12 md:mt-16 px-4">
            <div className="inline-flex flex-col items-center space-y-3 sm:space-y-4 bg-gray-800 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 shadow-lg border border-gray-700 max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Don’t Miss Out!</h3>
                <p className="text-gray-300 text-sm sm:text-base">Join Brilliant Bihar today for upcoming opportunities</p>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="font-semibold text-sm sm:text-base">Programs launching soon...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventSection;
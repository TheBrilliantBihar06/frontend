import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "UPSC Prelims Mock Test Series",
      category: "upsc",
      date: "2025-10-05",
      time: "10:00 AM - 1:00 PM",
      location: "Online",
      seats: "500 seats available",
      description: "Comprehensive mock test series covering all subjects with detailed analysis and performance tracking.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
    },
    {
      id: 2,
      title: "BPSC Mains Strategy Workshop",
      category: "bpsc",
      date: "2025-10-12",
      time: "2:00 PM - 5:00 PM",
      location: "Hybrid (Online & Offline)",
      seats: "200 seats available",
      description: "Expert-led workshop on answer writing techniques and exam strategies for BPSC Mains examination.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
    },
    {
      id: 3,
      title: "UPSC Interview Guidance Seminar",
      category: "upsc",
      date: "2025-10-18",
      time: "11:00 AM - 3:00 PM",
      location: "Delhi Centre",
      seats: "100 seats available",
      description: "Interactive session with former UPSC board members on personality test preparation and interview skills.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
    },
    {
      id: 4,
      title: "BPSC Current Affairs Masterclass",
      category: "bpsc",
      date: "2025-10-25",
      time: "4:00 PM - 6:00 PM",
      location: "Online",
      seats: "Unlimited",
      description: "Monthly current affairs analysis with focus on Bihar-specific topics and national importance issues.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
    },
    {
      id: 5,
      title: "UPSC Ethics & Integrity Case Study",
      category: "upsc",
      date: "2025-11-02",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
      seats: "300 seats available",
      description: "Deep dive into ethics paper with real-world case studies and answer writing practice sessions.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      id: 6,
      title: "BPSC Foundation Batch Orientation",
      category: "bpsc",
      date: "2025-11-08",
      time: "3:00 PM - 5:00 PM",
      location: "Patna Centre",
      seats: "150 seats available",
      description: "Orientation program for new aspirants covering syllabus, study plan, and resource management.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100">
        {/* Header Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-black/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Join our exclusive workshops, seminars, and mock tests designed to accelerate your civil services preparation journey.
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-gray-100 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setActiveFilter('upsc')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === 'upsc'
                    ? 'bg-gray-100 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                UPSC
              </button>
              <button
                onClick={() => setActiveFilter('bpsc')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === 'bpsc'
                    ? 'bg-gray-100 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                BPSC
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wide">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-white transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{event.seats}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gray-100 text-black font-semibold py-3 px-6 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group">
                    Register Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-black border-y border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Miss Out on Future Events</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming events, workshops, and exclusive opportunities.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-gray-100"
              />
              <button className="px-8 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
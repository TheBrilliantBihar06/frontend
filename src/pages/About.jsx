import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teachers = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Mathematics & Physics",
      experience: "12 Years",
      qualification: "Ph.D. in Mathematics, IIT Patna",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Prof. Sunita Devi",
      subject: "Chemistry & Biology",
      experience: "15 Years",
      qualification: "M.Sc. Chemistry, Patna University",
      image: "https://images.unsplash.com/photo-1494790108755-2616c179b5bb?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mr. Amit Singh",
      subject: "English & Hindi Literature",
      experience: "8 Years",
      qualification: "M.A. English Literature, BHU",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Sharma",
      subject: "Computer Science",
      experience: "10 Years",
      qualification: "Ph.D. Computer Science, NIT Patna",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      icon: "🎓",
      title: "Live Interactive Classes",
      description: "Real-time online classes with experienced teachers from Bihar and across India"
    },
    {
      icon: "📚",
      title: "Comprehensive Study Material",
      description: "Bihar board aligned curriculum with additional competitive exam preparation"
    },
    {
      icon: "💬",
      title: "Doubt Resolution",
      description: "24/7 doubt clearing sessions with dedicated mentors"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Regular assessments and detailed performance analytics"
    },
    {
      icon: "🏆",
      title: "Bihar Culture Integration",
      description: "Learning modules that celebrate and integrate Bihar's rich cultural heritage"
    },
    {
      icon: "🌐",
      title: "Rural Connectivity",
      description: "Special programs designed for students in remote areas of Bihar"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Students" },
    { number: "500+", label: "Expert Teachers" },
    { number: "38", label: "Districts Covered" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111827' }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Brilliant Bihar</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering Bihar's youth through quality online education and celebrating our rich cultural heritage
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: '#1F2937' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details Tabs */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Story & Mission
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8 border-b" style={{ borderColor: '#374151' }}>
              {[
                { id: 'mission', label: 'Our Mission' },
                { id: 'vision', label: 'Our Vision' },
                { id: 'story', label: 'Our Story' },
                { id: 'values', label: 'Our Values' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-gray-300 leading-relaxed">
              {activeTab === 'mission' && (
                <div className="space-y-4">
                  <p className="text-lg">
                    Our mission is to democratize quality education across Bihar by leveraging technology 
                    and celebrating our rich cultural heritage. We aim to bridge the educational gap between 
                    urban and rural areas, ensuring every student in Bihar has access to world-class learning resources.
                  </p>
                  <p>
                    We are committed to nurturing the intellectual potential of Bihar's youth while preserving 
                    and promoting our state's incredible history, from the ancient Nalanda University to modern innovations.
                  </p>
                </div>
              )}
              
              {activeTab === 'vision' && (
                <div className="space-y-4">
                  <p className="text-lg">
                    To establish Bihar as a leading educational hub in India, where students from every district 
                    can access premium education and achieve their dreams without leaving their homeland.
                  </p>
                  <p>
                    We envision a digitally empowered Bihar where traditional wisdom meets modern pedagogy, 
                    creating globally competitive yet culturally rooted individuals.
                  </p>
                </div>
              )}
              
              {activeTab === 'story' && (
                <div className="space-y-4">
                  <p className="text-lg">
                    Brilliant Bihar was founded in 2023 by a team of educators and technologists who witnessed 
                    the immense potential of Bihar's students but recognized the challenges they faced in accessing 
                    quality education.
                  </p>
                  <p>
                    Starting from a small office in Patna, we began with just 50 students. Today, we serve over 
                    10,000 students across all 38 districts of Bihar, with plans to expand across eastern India.
                  </p>
                  <p>
                    Our journey has been supported by former students of Bihar who have excelled globally and 
                    want to give back to their home state.
                  </p>
                </div>
              )}
              
              {activeTab === 'values' && (
                <div className="space-y-4">
                  <p className="text-lg font-medium text-blue-400 mb-4">Core Values:</p>
                  <ul className="space-y-3">
                    <li><strong>Excellence:</strong> Maintaining highest standards in education delivery</li>
                    <li><strong>Accessibility:</strong> Making quality education available to all economic backgrounds</li>
                    <li><strong>Cultural Pride:</strong> Celebrating Bihar's rich heritage and history</li>
                    <li><strong>Innovation:</strong> Embracing technology to enhance learning experiences</li>
                    <li><strong>Community:</strong> Building a supportive learning ecosystem</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Brilliant Bihar?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine modern online learning with Bihar's educational excellence tradition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: '#111827' }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Classes Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Interactive Online Classes
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Experience live, interactive online classes designed specifically for Bihar board curriculum 
                  and competitive exam preparation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>HD quality video streaming with crystal clear audio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Interactive whiteboards and real-time doubt solving</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Recorded sessions available for revision</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Small batch sizes for personalized attention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Classes available in Hindi and English</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Online Learning"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our Expert Teachers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from Bihar's finest educators and experienced professionals from top institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="text-center p-6 rounded-lg" style={{ backgroundColor: '#111827' }}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{teacher.name}</h3>
                <p className="text-blue-400 font-medium mb-2">{teacher.subject}</p>
                <p className="text-sm text-gray-300 mb-1">{teacher.experience} Experience</p>
                <p className="text-xs text-gray-400">{teacher.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bihar Heritage Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Celebrating Bihar's Rich Heritage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We integrate Bihar's glorious history and culture into our modern curriculum
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1F2937' }}>
              <h3 className="text-xl font-bold text-white mb-3">🏛️ Ancient Learning Center</h3>
              <p className="text-gray-300">
                Bihar was home to Nalanda University, the world's first residential university, 
                attracting scholars from across the globe over 1,500 years ago.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1F2937' }}>
              <h3 className="text-xl font-bold text-white mb-3">📿 Spiritual Heritage</h3>
              <p className="text-gray-300">
                Birthplace of Buddhism and Jainism, Bihar continues to be a center for 
                spiritual learning and philosophical discourse.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#1F2937' }}>
              <h3 className="text-xl font-bold text-white mb-3">🎨 Cultural Richness</h3>
              <p className="text-gray-300">
                From Madhubani paintings to classical literature, Bihar's artistic traditions 
                inspire creativity in our educational approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#1F2937' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are building their future with Brilliant Bihar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border border-gray-600 text-gray-300 hover:bg-gray-700 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
        {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
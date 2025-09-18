import React, { useState, useEffect } from 'react';
import { User, Briefcase, Star, Award, Search, Tag, X, Users, BookOpen, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Faculty = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('all');

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/teachers');
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch teachers');
      }
      
      setTeachers(data.teachers || []);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDesignation = selectedDesignation === 'all' || 
                              teacher.designation.toLowerCase().includes(selectedDesignation.toLowerCase());
    return matchesSearch && matchesDesignation;
  });

  const getDesignations = () => {
    const designations = teachers.map(teacher => teacher.designation);
    return [...new Set(designations)];
  };

  // Generate labels based on teacher's description and designation
  const generateLabels = (teacher) => {
    const labels = [];
    const description = teacher.description.toLowerCase();
    
    // Add designation as a label
    if (teacher.designation) {
      labels.push(teacher.designation);
    }
    
    // Add experience as a label
    if (teacher.experience) {
      labels.push(`${teacher.experience} experience`);
    }
    
    // Extract keywords from description
    const keywords = [
      'research', 'phd', 'publications', 'awards', 'expertise', 
      'specialization', 'certified', 'training', 'development'
    ];
    
    keywords.forEach(keyword => {
      if (description.includes(keyword)) {
        labels.push(keyword.charAt(0).toUpperCase() + keyword.slice(1));
      }
    });
    
    // Limit to 4 labels
    return labels.slice(0, 4);
  };

  const getLabelColor = (label) => {
    const colors = {
      'professor': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border border-purple-300',
      'assistant professor': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300',
      'lecturer': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300',
      'phd': 'bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 border border-indigo-300',
      'research': 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border border-yellow-300',
      'publications': 'bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 border border-pink-300',
      'awards': 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300',
      'expertise': 'bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 border border-teal-300',
      'specialization': 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border border-orange-300',
      'certified': 'bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 border border-cyan-300',
      'training': 'bg-gradient-to-r from-lime-100 to-lime-200 text-lime-800 border border-lime-300',
      'development': 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border border-amber-300'
    };
    
    // Default color if not found
    return colors[label.toLowerCase()] || 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#1a2a44] flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-500 mx-auto mb-6"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 animate-pulse"></div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Loading Our Faculty</h3>
          <p className="text-gray-300">Meet our exceptional educators...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#1a2a44] flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="bg-red-500/10 backdrop-blur-lg border border-red-500/30 rounded-xl p-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Oops! Something went wrong</h3>
            <p className="text-red-300">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#1a2a44] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-b border-gray-700/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Our Esteemed Faculty
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Meet our distinguished team of experienced educators and industry experts dedicated to shaping the future leaders of civil services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search faculty by name or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Filter Section */}
        <div className="bg-gray-800/20 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 mb-10">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex-1 w-full lg:w-auto">
              <label className="block text-sm font-medium text-gray-300 mb-2">Filter by Designation</label>
              <select
                value={selectedDesignation}
                onChange={(e) => setSelectedDesignation(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              >
                <option value="all">All Designations</option>
                {getDesignations().map(designation => (
                  <option key={designation} value={designation}>{designation}</option>
                ))}
              </select>
            </div>
            
            <div className="text-sm text-gray-300 bg-gray-700/30 px-4 py-2 rounded-lg backdrop-blur-sm">
              <span className="font-semibold text-white">{filteredTeachers.length}</span> faculty member{filteredTeachers.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Faculty Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-lg border border-blue-500/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center">
              <div className="bg-blue-500/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                <User className="text-blue-400" size={28} />
              </div>
              <div>
                <p className="text-blue-300 text-sm font-medium">Total Faculty</p>
                <p className="text-3xl font-bold text-white">{teachers.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-lg border border-green-500/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center">
              <div className="bg-green-500/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                <Award className="text-green-400" size={28} />
              </div>
              <div>
                <p className="text-green-300 text-sm font-medium">Professors</p>
                <p className="text-3xl font-bold text-white">
                  {teachers.filter(t => t.designation.toLowerCase().includes('professor')).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <div className="bg-purple-500/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                <Briefcase className="text-purple-400" size={28} />
              </div>
              <div>
                <p className="text-purple-300 text-sm font-medium">Avg. Experience</p>
                <p className="text-3xl font-bold text-white">
                  {teachers.length > 0 
                    ? Math.round(teachers.reduce((sum, teacher) => {
                        const exp = parseInt(teacher.experience) || 0;
                        return sum + exp;
                      }, 0) / teachers.length) 
                    : 0}+ <span className="text-lg">years</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Cards */}
        {filteredTeachers.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-700/30 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <User className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">No faculty members found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDesignation('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredTeachers.map((teacher) => (
              <div key={teacher._id} className="group bg-gray-800/20 backdrop-blur-lg border border-gray-700/30 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Teacher Image */}
                <div className="relative h-64 overflow-hidden">
                  {teacher.image ? (
                    <img 
                      src={`http://localhost:5000/${teacher.image}`} 
                      alt={teacher.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                        <User className="text-white" size={48} />
                      </div>
                    </div>
                  )}
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-lg">
                    <Briefcase className="h-4 w-4 text-blue-400 mr-1" />
                    <span className="text-sm font-medium text-white">{teacher.experience}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Teacher Details */}
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{teacher.name}</h3>
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {teacher.designation}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">{teacher.description}</p>
                  
                  {/* Labels Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-2">
                        <Tag className="h-3 w-3 text-purple-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-300">Specializations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {generateLabels(teacher).map((label, index) => (
                        <span 
                          key={index} 
                          className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${getLabelColor(label)}`}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Rating Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">4.8</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Users className="h-3 w-3" />
                      <span>{Math.floor(Math.random() * 200) + 50} students</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Section */}
        {filteredTeachers.length > 0 && (
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-gray-700/30 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Learn from the Best Minds</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our faculty combines decades of experience with innovative teaching methods to ensure your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Industry Experts</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Proven Track Record</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Personalized Guidance</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Faculty;
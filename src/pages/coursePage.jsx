import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, User, Star, Filter, Search, ChevronDown, Users, Award, Calendar, X, Zap, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [enrolling, setEnrolling] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const currentUser = JSON.parse(localStorage.getItem('user') || 'null');

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [courses, searchQuery, selectedCategory, selectedLevel]);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/courses', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch courses');
      }
      
      setCourses(data.courses || data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const filterCourses = () => {
    let filtered = courses;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.teacher.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => 
        course.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by level
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => 
        course.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    setFilteredCourses(filtered);
  };

  const handleEnroll = async (courseId) => {
    if (!currentUser) {
      alert('Please log in to enroll in courses');
      return;
    }

    setEnrolling(courseId);
    
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/courses/${courseId}/enroll`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to enroll in course');
      }
      
      // Show success message
      alert('Successfully enrolled in course!');
      // Optionally refresh courses to show enrollment status
      fetchCourses();
      
    } catch (err) {
      alert(err.message);
    } finally {
      setEnrolling(null);
    }
  };

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300';
      case 'intermediate':
        return 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border border-yellow-300';
      case 'advanced':
        return 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300';
      default:
        return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300';
    }
  };

  const getUniqueCategories = () => {
    const categories = courses.map(course => course.category);
    return [...new Set(categories)];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#1a2a44] flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-500 mx-auto mb-6"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 animate-pulse"></div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Loading Courses</h3>
          <p className="text-gray-300">Discovering amazing learning opportunities...</p>
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
                Explore Our Courses
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Discover world-class UPSC preparation courses designed to transform your civil services journey
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                />
              </div>
            </div>

            {!currentUser ? (
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <div className="text-gray-300">Ready to start your journey?</div>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-gray-300">Welcome back, <span className="text-white font-semibold">{currentUser.name}</span>!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Filters Section */}
        <div className="bg-gray-800/20 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Filter size={18} />
                <span className="font-medium">Filters</span>
                <ChevronDown className={`transform transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} size={18} />
              </button>
              
              {(selectedCategory !== 'all' || selectedLevel !== 'all') && (
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== 'all' && (
                    <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                      <Target size={14} />
                      {selectedCategory}
                      <button 
                        onClick={() => setSelectedCategory('all')} 
                        className="ml-1 hover:bg-blue-500/30 rounded-full p-1 transition-colors"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {selectedLevel !== 'all' && (
                    <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-300 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                      <Zap size={14} />
                      {selectedLevel}
                      <button 
                        onClick={() => setSelectedLevel('all')} 
                        className="ml-1 hover:bg-green-500/30 rounded-full p-1 transition-colors"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
            
            <div className="text-sm text-gray-300 bg-gray-700/30 px-4 py-2 rounded-lg backdrop-blur-sm">
              <span className="font-semibold text-white">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''} found
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-700/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  >
                    <option value="all">All Categories</option>
                    {getUniqueCategories().map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-700/30 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <BookOpen className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">No courses found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course._id} 
                className="group bg-gray-800/20 backdrop-blur-lg border border-gray-700/30 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Course Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  {course.image ? (
                    <img 
                      src={`http://localhost:5000${course.image}`} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  )}
                  
                  {/* Level Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3">
                    {course.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-lg text-white mb-3 line-clamp-2 leading-tight group-hover:text-blue-300 transition-colors">
                    {course.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Course Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>{course.teacher}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-green-400" />
                      </div>
                      <span>{course.duration} weeks</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-purple-400" />
                      </div>
                      <span>{Math.floor(Math.random() * 500) + 50} enrolled</span>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">4.{Math.floor(Math.random() * 9) + 1}</span>
                    <span className="text-xs text-gray-500">({Math.floor(Math.random() * 200) + 50} reviews)</span>
                  </div>
                  
                  {/* Enroll Button */}
                  <button
                    onClick={() => handleEnroll(course._id)}
                    disabled={enrolling === course._id}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 group-hover:shadow-blue-500/25"
                  >
                    {enrolling === course._id ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Enrolling...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Award className="h-5 w-5" />
                        <span>Enroll Now</span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Section */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-gray-700/30 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Future?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful UPSC aspirants who chose our expert-designed courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Comprehensive Curriculum</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default CoursePage;
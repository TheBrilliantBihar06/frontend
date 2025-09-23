import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  X,
  Save,
  Users,
  Plus,
  Trash2,
  Edit,
  Upload,
  Menu,
  LayoutDashboard,
  LogOut,
  Calendar,
  TrendingUp,
  Award,
  Search,
  Filter,
  GraduationCap,
  Clock,
  User,
  FileImage,
  Star
} from 'lucide-react';

const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    level: 'Beginner',
    category: '',
    teacher: '',
  });
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = (path) => {
    window.location.href = path;
  };
  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchCourses();
  }, []);

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

      setCourses(data.courses);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSubmitting(true);

    try {
      const token = localStorage.getItem('token');

      const courseData = new FormData();
      courseData.append('title', formData.title);
      courseData.append('description', formData.description);
      courseData.append('duration', formData.duration);
      courseData.append('level', formData.level);
      courseData.append('category', formData.category);
      courseData.append('teacher', formData.teacher);

      if (imageFile) {
        courseData.append('image', imageFile);
      }

      const res = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: courseData
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to create course');
      }

      setFormData({
        title: '',
        description: '',
        duration: '',
        level: 'Beginner',
        category: '',
        teacher: '',
      });
      setImageFile(null);
      setImagePreview('');
      setShowAddForm(false);
      fetchCourses();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      duration: course.duration,
      level: course.level,
      category: course.category,
      teacher: course.teacher,
    });
    setImagePreview(course.image || ''); // Use Cloudinary URL directly
    setShowEditForm(true);
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    setFormError('');
    setSubmitting(true);

    try {
      const token = localStorage.getItem('token');

      const courseData = new FormData();
      courseData.append('title', formData.title);
      courseData.append('description', formData.description);
      courseData.append('duration', formData.duration);
      courseData.append('level', formData.level);
      courseData.append('category', formData.category);
      courseData.append('teacher', formData.teacher);

      if (imageFile) {
        courseData.append('image', imageFile);
      }

      const res = await fetch(`http://localhost:5000/api/courses/${editingCourse._id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: courseData
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to update course');
      }

      setFormData({
        title: '',
        description: '',
        duration: '',
        level: 'Beginner',
        category: '',
        teacher: '',
      });
      setImageFile(null);
      setImagePreview('');
      setShowEditForm(false);
      setEditingCourse(null);
      fetchCourses();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      duration: '',
      level: 'Beginner',
      category: '',
      teacher: '',
    });
    setImageFile(null);
    setImagePreview('');
    setShowAddForm(false);
    setShowEditForm(false);
    setEditingCourse(null);
    setFormError('');
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Failed to delete course');
        }

        fetchCourses();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Filter courses based on search and level filter
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || course.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex flex-1">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-indigo-900 to-purple-900 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <div className="flex items-center justify-between p-6 border-b border-indigo-700">
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                🎓 Brilliant Bihar
              </h2>
              <p className="text-indigo-300 text-sm">Course Management</p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-indigo-200"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-8 px-4 space-y-2">
            <a href="/admin-dashboard" className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all">
              <LayoutDashboard className="mr-3" size={20} />
              <span>Dashboard</span>
            </a>
            <a href="/add-course" className="flex items-center p-3 bg-indigo-800 text-white rounded-xl shadow-lg">
              <BookOpen className="mr-3" size={20} />
              <span className="font-medium">Course Management</span>
            </a>
            <a href="/manage-users" className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all">
              <Users className="mr-3" size={20} />
              <span>User Management</span>
            </a>
            <a href="/analytics" className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all">
              <TrendingUp className="mr-3" size={20} />
              <span>Analytics</span>
            </a>
            <a href="/calendar" className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all">
              <Calendar className="mr-3" size={20} />
              <span>Academic Calendar</span>
            </a>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-indigo-700">
            <div className="mb-4 p-3 bg-indigo-800 rounded-xl">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {currentUser?.username?.charAt(0).toUpperCase()}
                </div>
                <div className="ml-3">
                  <p className="text-white text-sm font-medium">{currentUser?.username}</p>
                  <p className="text-indigo-300 text-xs">Administrator</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 text-indigo-200 hover:bg-red-600 hover:text-white rounded-xl transition-all"
            >
              <LogOut className="mr-3" size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Top Header */}
          <div className="bg-white shadow-sm border-b p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                  <Menu size={24} />
                </button>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Course Management</h1>
                  <p className="text-gray-600 text-sm">Create and manage educational courses</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowAddForm(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-4 py-2 rounded-xl font-medium transition-colors shadow-lg"
                >
                  <Plus size={18} />
                  <span className="hidden sm:inline">Add Course</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 lg:p-8 overflow-auto">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Total Courses</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{courses.length}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
                    <BookOpen className="text-white" size={28} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Beginner</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">
                      {courses.filter(course => course.level === 'Beginner').length}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-yellow-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Intermediate</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">
                      {courses.filter(course => course.level === 'Intermediate').length}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl">
                    <Star className="text-white" size={28} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-red-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Advanced</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">
                      {courses.filter(course => course.level === 'Advanced').length}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl">
                    <Award className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </div>

            {/* Course Management Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                  <div>
                    <h2 className="text-2xl font-bold text-white">All Courses</h2>
                    <p className="text-indigo-100">Manage your educational content</p>
                  </div>
                </div>
              </div>

              {/* Search and Filter Bar */}
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search courses by title, category, or teacher..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    />
                  </div>
                  <div className="flex gap-4">
                    <select
                      value={filterLevel}
                      onChange={(e) => setFilterLevel(e.target.value)}
                      className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    >
                      <option value="all">All Levels</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 border-l-4 border-red-400">
                  {error}
                </div>
              )}

              {/* Courses Display */}
              <div className="p-6">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    <p className="ml-4 text-gray-600">Loading courses...</p>
                  </div>
                ) : filteredCourses.length === 0 ? (
                  <div className="text-center py-12">
                    <BookOpen className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                    <p className="text-gray-600 text-lg mb-2">
                      {courses.length === 0 ? 'No courses found' : 'No courses match your search'}
                    </p>
                    <p className="text-gray-400">
                      {courses.length === 0 ? 'Create your first course to get started' : 'Try adjusting your search criteria'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <div key={course._id} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100">
                          {course.image ? (
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = '/placeholder-image.jpg'; // Fallback image
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FileImage className="text-gray-400" size={48} />
                            </div>
                          )}
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                              course.level === 'Beginner'
                                ? 'bg-green-100 text-green-800'
                                : course.level === 'Intermediate'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                            }`}>
                              {course.level}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="w-4 h-4 mr-2" />
                              {course.teacher}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-2" />
                              {course.duration} weeks
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <BookOpen className="w-4 h-4 mr-2" />
                              {course.category}
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                            <button
                              onClick={() => handleEditCourse(course)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                            >
                              <Edit size={16} />
                              <span className="text-sm font-medium">Edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteCourse(course._id)}
                              className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                              <span className="text-sm font-medium">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Course Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-white">Create New Course</h2>
              <button
                onClick={handleCancel}
                className="text-white hover:text-indigo-200 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {formError && (
              <div className="mx-6 mt-4 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                {formError}
              </div>
            )}

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="Enter course title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="e.g., Programming, Design, Mathematics"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teacher</label>
                    <input
                      type="text"
                      name="teacher"
                      value={formData.teacher}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="Instructor name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (weeks)</label>
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                        placeholder="8"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Level</label>
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="Describe what students will learn in this course..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Course Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="course-image"
                      />
                      <label htmlFor="course-image" className="cursor-pointer">
                        {imagePreview ? (
                          <div className="space-y-4">
                            <img
                              src={imagePreview}
                              alt="Course preview"
                              className="h-32 w-32 object-cover rounded-xl mx-auto shadow-lg"
                              onError={(e) => {
                                e.target.src = '/placeholder-image.jpg'; // Fallback image
                              }}
                            />
                            <p className="text-sm text-gray-600">Click to change image</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div>
                              <p className="text-gray-600 font-medium">Upload course image</p>
                              <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 font-medium transition-colors shadow-lg flex items-center gap-2"
                >
                  <Save size={18} />
                  {submitting ? 'Creating...' : 'Create Course'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Course Modal */}
      {showEditForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-white">Edit Course</h2>
              <button
                onClick={handleCancel}
                className="text-white hover:text-indigo-200 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {formError && (
              <div className="mx-6 mt-4 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                {formError}
              </div>
            )}

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="Enter course title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="e.g., Programming, Design, Mathematics"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teacher</label>
                    <input
                      type="text"
                      name="teacher"
                      value={formData.teacher}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="Instructor name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (weeks)</label>
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                        placeholder="8"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Level</label>
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="Describe what students will learn in this course..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Course Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="edit-course-image"
                      />
                      <label htmlFor="edit-course-image" className="cursor-pointer">
                        {imagePreview ? (
                          <div className="space-y-4">
                            <img
                              src={imagePreview}
                              alt="Course preview"
                              className="h-32 w-32 object-cover rounded-xl mx-auto shadow-lg"
                              onError={(e) => {
                                e.target.src = '/placeholder-image.jpg'; // Fallback image
                              }}
                            />
                            <p className="text-sm text-gray-600">Click to change image</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div>
                              <p className="text-gray-600 font-medium">Upload course image</p>
                              <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateCourse}
                  disabled={submitting}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 font-medium transition-colors shadow-lg flex items-center gap-2"
                >
                  <Save size={18} />
                  {submitting ? 'Updating...' : 'Update Course'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
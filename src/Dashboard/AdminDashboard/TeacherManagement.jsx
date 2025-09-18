import React, { useState, useEffect } from 'react';
import { 
  User, 
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
  Briefcase,
  FileImage,
  BookOpen
} from 'lucide-react';

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    designation: '',
    description: '',
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
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/teachers', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch teachers');
      }
      
      setTeachers(data.teachers);
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
      
      const teacherData = new FormData();
      teacherData.append('name', formData.name);
      teacherData.append('experience', formData.experience);
      teacherData.append('designation', formData.designation);
      teacherData.append('description', formData.description);
      
      if (imageFile) {
        teacherData.append('image', imageFile);
      }
      
      const res = await fetch('http://localhost:5000/api/teachers', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: teacherData
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to create teacher');
      }
      
      setFormData({
        name: '',
        experience: '',
        designation: '',
        description: '',
      });
      setImageFile(null);
      setImagePreview('');
      setShowAddForm(false);
      fetchTeachers();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditTeacher = (teacher) => {
    setEditingTeacher(teacher);
    setFormData({
      name: teacher.name,
      experience: teacher.experience,
      designation: teacher.designation,
      description: teacher.description,
    });
    setImagePreview(teacher.image ? `http://localhost:5000/${teacher.image}` : '');
    setShowEditForm(true);
  };

  const handleUpdateTeacher = async (e) => {
    e.preventDefault();
    setFormError('');
    setSubmitting(true);
    
    try {
      const token = localStorage.getItem('token');
      
      const teacherData = new FormData();
      teacherData.append('name', formData.name);
      teacherData.append('experience', formData.experience);
      teacherData.append('designation', formData.designation);
      teacherData.append('description', formData.description);
      
      if (imageFile) {
        teacherData.append('image', imageFile);
      }
      
      const res = await fetch(`http://localhost:5000/api/teachers/${editingTeacher._id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: teacherData
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to update teacher');
      }
      
      setFormData({
        name: '',
        experience: '',
        designation: '',
        description: '',
      });
      setImageFile(null);
      setImagePreview('');
      setShowEditForm(false);
      setEditingTeacher(null);
      fetchTeachers();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      experience: '',
      designation: '',
      description: '',
    });
    setImageFile(null);
    setImagePreview('');
    setShowAddForm(false);
    setShowEditForm(false);
    setEditingTeacher(null);
    setFormError('');
  };

  const handleDeleteTeacher = async (teacherId) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:5000/api/teachers/${teacherId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.message || 'Failed to delete teacher');
        }
        
        fetchTeachers();
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

  // Filter teachers based on search
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.experience.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
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
              <p className="text-indigo-300 text-sm">Teacher Management</p>
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
            <a href="/add-course" className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all">
              <BookOpen className="mr-3" size={20} />
              <span>Course Management</span>
            </a>
            <a href="/manage-teachers" className="flex items-center p-3 bg-indigo-800 text-white rounded-xl shadow-lg">
              <Users className="mr-3" size={20} />
              <span className="font-medium">Teacher Management</span>
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
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Teacher Management</h1>
                  <p className="text-gray-600 text-sm">Create and manage teacher profiles</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setShowAddForm(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-4 py-2 rounded-xl font-medium transition-colors shadow-lg"
                >
                  <Plus size={18} />
                  <span className="hidden sm:inline">Add Teacher</span>
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
                    <p className="text-gray-500 text-sm font-medium">Total Teachers</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{teachers.length}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
                    <Users className="text-white" size={28} />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Professors</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">
                      {teachers.filter(teacher => teacher.designation.toLowerCase().includes('professor')).length}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl">
                    <Award className="text-white" size={28} />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-yellow-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Assistant Professors</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">
                      {teachers.filter(teacher => teacher.designation.toLowerCase().includes('assistant')).length}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl">
                    <Briefcase className="text-white" size={28} />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-red-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Lecturers</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">
                      {teachers.filter(teacher => teacher.designation.toLowerCase().includes('lecturer')).length}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl">
                    <User className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Teacher Management Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                  <div>
                    <h2 className="text-2xl font-bold text-white">All Teachers</h2>
                    <p className="text-indigo-100">Manage your teaching staff</p>
                  </div>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search teachers by name, designation, or experience..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                  />
                </div>
              </div>
              
              {error && (
                <div className="p-4 bg-red-50 text-red-700 border-l-4 border-red-400">
                  {error}
                </div>
              )}
              
              {/* Teachers Display */}
              <div className="p-6">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    <p className="ml-4 text-gray-600">Loading teachers...</p>
                  </div>
                ) : filteredTeachers.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                    <p className="text-gray-600 text-lg mb-2">
                      {teachers.length === 0 ? 'No teachers found' : 'No teachers match your search'}
                    </p>
                    <p className="text-gray-400">
                      {teachers.length === 0 ? 'Create your first teacher profile to get started' : 'Try adjusting your search criteria'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTeachers.map((teacher) => (
                      <div key={teacher._id} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100">
                          {teacher.image ? (
                            <img 
                              src={`http://localhost:5000/${teacher.image}`} 
                              alt={teacher.name} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <User className="text-gray-400" size={48} />
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                          <p className="text-indigo-600 font-medium mb-2">{teacher.designation}</p>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{teacher.description}</p>
                          
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {teacher.experience} experience
                          </div>
                          
                          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                            <button 
                              onClick={() => handleEditTeacher(teacher)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                            >
                              <Edit size={16} />
                              <span className="text-sm font-medium">Edit</span>
                            </button>
                            <button 
                              onClick={() => handleDeleteTeacher(teacher._id)}
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
      
      {/* Add Teacher Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-white">Add New Teacher</h2>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teacher Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="Enter teacher name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="e.g., Professor, Assistant Professor"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Experience</label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="e.g., 10 years"
                      required
                    />
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
                      placeholder="Describe the teacher's background and expertise..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teacher Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="teacher-image"
                      />
                      <label htmlFor="teacher-image" className="cursor-pointer">
                        {imagePreview ? (
                          <div className="space-y-4">
                            <img src={imagePreview} alt="Teacher preview" className="h-32 w-32 object-cover rounded-xl mx-auto shadow-lg" />
                            <p className="text-sm text-gray-600">Click to change image</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div>
                              <p className="text-gray-600 font-medium">Upload teacher image</p>
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
                  {submitting ? 'Creating...' : 'Create Teacher'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Teacher Modal */}
      {showEditForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-white">Edit Teacher</h2>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teacher Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="Enter teacher name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="e.g., Professor, Assistant Professor"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Experience</label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      placeholder="e.g., 10 years"
                      required
                    />
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
                      placeholder="Describe the teacher's background and expertise..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teacher Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="edit-teacher-image"
                      />
                      <label htmlFor="edit-teacher-image" className="cursor-pointer">
                        {imagePreview ? (
                          <div className="space-y-4">
                            <img src={imagePreview} alt="Teacher preview" className="h-32 w-32 object-cover rounded-xl mx-auto shadow-lg" />
                            <p className="text-sm text-gray-600">Click to change image</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div>
                              <p className="text-gray-600 font-medium">Upload teacher image</p>
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
                  onClick={handleUpdateTeacher}
                  disabled={submitting}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 font-medium transition-colors shadow-lg flex items-center gap-2"
                >
                  <Save size={18} />
                  {submitting ? 'Updating...' : 'Update Teacher'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherManagement;
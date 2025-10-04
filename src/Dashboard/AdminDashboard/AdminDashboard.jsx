import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserPlus, 
  Users, 
  Trash2, 
  LogOut, 
  BookOpen, 
  LayoutDashboard,
  GraduationCap,
  User,
  Award,
  TrendingUp,
  Calendar,
  Bell,
  Search,
  Filter,
  Download,
  Menu,
  X
} from 'lucide-react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student'
  });
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('user'));
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('https://backend-production-fe57.up.railway.app/api/auth/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch users');
      }
      
      setUsers(data.users);
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSubmitting(true);
    
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('https://backend-production-fe57.up.railway.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to create user');
      }
      
      setFormData({
        username: '',
        email: '',
        password: '',
        role: 'student'
      });
      
      fetchUsers();
      setShowAddForm(false);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };
  
  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`https://backend-production-fe57.up.railway.app/api/auth/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.message || 'Failed to delete user');
        }
        
        fetchUsers();
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

  // Filter users based on search and role filter
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const stats = {
    totalUsers: users.length,
    students: users.filter(user => user.role === 'student').length,
    teachers: users.filter(user => user.role === 'teacher').length,
    admins: users.filter(user => user.role === 'admin').length
  };
  
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
              <p className="text-indigo-300 text-sm">Education Hub</p>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-indigo-200"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="mt-8 px-4 space-y-2">
            <a href="/admin-dashboard" className="flex items-center p-3 bg-indigo-800 text-white rounded-xl shadow-lg">
              <LayoutDashboard className="mr-3" size={20} />
              <span className="font-medium">Dashboard</span>
            </a>
            <a href="/add-course" className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all">
              <BookOpen className="mr-3" size={20} />
              <span>Course Management</span>
            </a>
            <a href="/manage-users" className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all">
              <Users className="mr-3" size={20} />
              <span>User Management</span>
            </a>
            <a href="/manage-teachers" className="flex items-center p-3 text-indigo-200 hover:bg-indigo-800 hover:text-white rounded-xl transition-all">
              <TrendingUp className="mr-3" size={20} />
              <span>Teacher Management</span>
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
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                  <p className="text-gray-600 text-sm">Manage your educational platform</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                </button>
                <div className="hidden sm:flex items-center space-x-3 bg-gray-100 rounded-lg p-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {currentUser?.username?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-gray-700 font-medium">{currentUser?.username}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-4 lg:p-8 overflow-auto">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Total Users</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{stats.totalUsers}</p>
                    <p className="text-green-600 text-sm mt-2">
                      <TrendingUp className="inline w-4 h-4 mr-1" />
                      +12% this month
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
                    <Users className="text-white" size={28} />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Students</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{stats.students}</p>
                    <p className="text-green-600 text-sm mt-2">
                      <TrendingUp className="inline w-4 h-4 mr-1" />
                      +8% this month
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Teachers</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">{stats.teachers}</p>
                    <p className="text-green-600 text-sm mt-2">
                      <TrendingUp className="inline w-4 h-4 mr-1" />
                      +5% this month
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl">
                    <User className="text-white" size={28} />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Achievements</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">2.4k</p>
                    <p className="text-green-600 text-sm mt-2">
                      <Award className="inline w-4 h-4 mr-1" />
                      This semester
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl">
                    <Award className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* User Management Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                  <div>
                    <h2 className="text-2xl font-bold text-white">User Management</h2>
                    <p className="text-indigo-100">Manage students, teachers, and administrators</p>
                  </div>
                  <button 
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl font-medium transition-colors shadow-lg"
                  >
                    <UserPlus size={20} />
                    Add New User
                  </button>
                </div>
              </div>
              
              {/* Search and Filter Bar */}
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search users by name or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    />
                  </div>
                  <div className="flex gap-4">
                    <select
                      value={filterRole}
                      onChange={(e) => setFilterRole(e.target.value)}
                      className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    >
                      <option value="all">All Roles</option>
                      <option value="student">Students</option>
                      <option value="teacher">Teachers</option>
                      <option value="admin">Admins</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-100 text-gray-600">
                      <Download size={18} />
                      Export
                    </button>
                  </div>
                </div>
              </div>
              
              {showAddForm && (
                <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Create New User</h3>
                  
                  {formError && (
                    <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                      {formError}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                        required
                        placeholder="Enter username"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                        required
                        placeholder="Enter email address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                        required
                        placeholder="Enter password"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                      >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="admin">Administrator</option>
                      </select>
                    </div>
                    
                    <div className="lg:col-span-2 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 font-medium transition-colors shadow-lg"
                      >
                        {submitting ? 'Creating...' : 'Create User'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Users Table */}
              <div className="overflow-x-auto">
                {loading ? (
                  <div className="p-12 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading users...</p>
                  </div>
                ) : error ? (
                  <div className="p-12 text-center">
                    <p className="text-red-500 text-lg">{error}</p>
                  </div>
                ) : (
                  <div className="min-w-full">
                    {filteredUsers.length === 0 ? (
                      <div className="p-12 text-center">
                        <Users className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                        <p className="text-gray-600 text-lg">No users found</p>
                        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                      </div>
                    ) : (
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredUsers.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-12 w-12">
                                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold text-white ${
                                      user.role === 'admin' 
                                        ? 'bg-gradient-to-br from-purple-500 to-purple-600' 
                                        : user.role === 'teacher' 
                                          ? 'bg-gradient-to-br from-green-500 to-green-600' 
                                          : 'bg-gradient-to-br from-blue-500 to-blue-600'
                                    }`}>
                                      {user.username.charAt(0).toUpperCase()}
                                    </div>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-semibold text-gray-900">{user.username}</div>
                                    <div className="text-sm text-gray-500 sm:hidden">{user.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                <div className="text-sm text-gray-900">{user.email}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  user.role === 'admin' 
                                    ? 'bg-purple-100 text-purple-800' 
                                    : user.role === 'teacher' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {user.role === 'admin' && '👑 Admin'}
                                  {user.role === 'teacher' && '👨‍🏫 Teacher'}
                                  {user.role === 'student' && '🎓 Student'}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button 
                                  onClick={() => handleDeleteUser(user._id)}
                                  className="text-red-600 hover:text-red-900 hover:bg-red-50 p-2 rounded-lg transition-colors"
                                  title="Delete User"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
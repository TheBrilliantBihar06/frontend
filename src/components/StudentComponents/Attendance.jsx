import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Calendar, 
  User, 
  MapPin, 
  Activity, 
  CheckCircle, 
  XCircle, 
  Timer,
  BarChart3,
  Target
} from 'lucide-react';

const Attendance = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [attendanceStatus, setAttendanceStatus] = useState('out');
  const [sessionStart, setSessionStart] = useState(null);
  const [todayRecords, setTodayRecords] = useState([]);
  const [weeklyData, setWeeklyData] = useState([
    { day: 'Mon', hours: 0, status: 'absent' },
    { day: 'Tue', hours: 0, status: 'absent' },
    { day: 'Wed', hours: 0, status: 'absent' },
    { day: 'Thu', hours: 0, status: 'absent' },
    { day: 'Fri', hours: 0, status: 'absent' },
  ]);
  const [stats, setStats] = useState({
    totalHours: 0,
    daysPresent: 0,
    avgDaily: 0,
    streakDays: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiBaseUrl, setApiBaseUrl] = useState('http://localhost:5000'); // Set default API URL

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchAttendanceData();
  }, [apiBaseUrl]);

  // Helper function to make API requests
  const apiRequest = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token');
    const url = `${apiBaseUrl}${endpoint}`;
    
    // Check if token exists
    if (!token) {
      throw new Error('Authentication token not found. Please log in again.');
    }
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

    const config = { ...defaultOptions, ...options };

    try {
      const response = await fetch(url, config);
      
      // Handle non-JSON responses (like HTML error pages)
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error(`Server returned non-JSON response (${response.status})`);
      }
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `API Error (${response.status})`);
      }

      return data;
    } catch (error) {
      console.error(`API request to ${url} failed:`, error);
      throw error;
    }
  };

  const fetchAttendanceData = async () => {
    if (!apiBaseUrl) {
      setError('API base URL is not configured');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Get current status
      const statusData = await apiRequest('/api/attendance/status');
      if (statusData.success) {
        setAttendanceStatus(statusData.status);
        if (statusData.sessionStart) {
          setSessionStart(new Date(statusData.sessionStart));
        }
      }
      
      // Get today's records
      const todayData = await apiRequest('/api/attendance/today');
      if (todayData.success) {
        setTodayRecords(todayData.records);
        
        // Determine current status based on last record
        if (todayData.records.length > 0) {
          const lastRecord = todayData.records[todayData.records.length - 1];
          if (lastRecord.type === 'Check In') {
            setAttendanceStatus('in');
            setSessionStart(new Date(lastRecord.timestamp));
          }
        }
      }
      
      // Get weekly data
      const weeklyDataResult = await apiRequest('/api/attendance/weekly');
      if (weeklyDataResult.success) {
        setWeeklyData(weeklyDataResult.weeklyData);
      }
      
      // Get stats
      const statsResult = await apiRequest('/api/attendance/stats');
      if (statsResult.success) {
        setStats(statsResult.stats);
      }
      
    } catch (err) {
      console.error('Error fetching attendance data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckIn = async () => {
    try {
      const data = await apiRequest('/api/attendance/checkin', {
        method: 'POST',
        body: JSON.stringify({ 
          location: 'Office',
          timestamp: new Date().toISOString()
        })
      });
      
      if (data.success) {
        setAttendanceStatus('in');
        setSessionStart(new Date(data.attendance.timestamp));
        setTodayRecords([...todayRecords, data.attendance]);
      } else {
        alert(data.message || 'Check-in failed');
      }
    } catch (error) {
      console.error('Error checking in:', error);
      alert(`Failed to check in: ${error.message}`);
    }
  };

  const handleCheckOut = async () => {
    try {
      const data = await apiRequest('/api/attendance/checkout', {
        method: 'POST',
        body: JSON.stringify({ 
          location: 'Office',
          timestamp: new Date().toISOString()
        })
      });
      
      if (data.success) {
        setAttendanceStatus('out');
        setTodayRecords([...todayRecords, data.attendance]);
        setSessionStart(null);
        
        // Refresh data to update stats and weekly data
        fetchAttendanceData();
      } else {
        alert(data.message || 'Check-out failed');
      }
    } catch (error) {
      console.error('Error checking out:', error);
      alert(`Failed to check out: ${error.message}`);
    }
  };

  const calculateDuration = (start, end) => {
    const diff = Math.abs(end - start);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  };

  const getCurrentSessionTime = () => {
    if (!sessionStart) return '0:00';
    return calculateDuration(sessionStart, currentTime);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center">
        <div className="text-xl">Loading attendance data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
        <div className="text-2xl mb-4">Error loading attendance data</div>
        <div className="text-red-400 mb-6">{error}</div>
        <button 
          onClick={fetchAttendanceData}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors mb-4"
        >
          Retry
        </button>
        
        {/* API Configuration Panel */}
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 w-full max-w-md">
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                API Base URL
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={apiBaseUrl}
                  onChange={(e) => setApiBaseUrl(e.target.value)}
                  placeholder="e.g., http://localhost:5000"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                />
                <button
                  onClick={fetchAttendanceData}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium"
                >
                  Connect
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>Make sure your backend server is running and accessible.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* API Configuration Panel */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                API Base URL
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={apiBaseUrl}
                  onChange={(e) => setApiBaseUrl(e.target.value)}
                  placeholder="e.g., http://localhost:5000"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                />
                <button
                  onClick={fetchAttendanceData}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium"
                >
                  Connect
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>Current Status: {error ? 'Disconnected' : 'Connected'}</p>
              {error && (
                <p className="text-red-400 mt-1">{error}</p>
              )}
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-4xl font-black mb-2">Daily Attendance</h1>
                <p className="text-cyan-100 text-lg">Track your presence efficiently</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-mono font-bold">
                  {currentTime.toLocaleTimeString('en-US', { hour12: true })}
                </div>
                <div className="text-cyan-100">
                  {currentTime.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6">
              <button
                onClick={handleCheckIn}
                disabled={attendanceStatus === 'in'}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  attendanceStatus === 'in'
                    ? 'bg-gray-500/50 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 hover:scale-105 shadow-lg shadow-green-500/25'
                }`}
              >
                <MapPin className="w-6 h-6" />
                Check In
              </button>
              
              <button
                onClick={handleCheckOut}
                disabled={attendanceStatus === 'out'}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  attendanceStatus === 'out'
                    ? 'bg-gray-500/50 cursor-not-allowed'
                    : 'bg-red-500 hover:bg-red-600 hover:scale-105 shadow-lg shadow-red-500/25'
                }`}
              >
                <MapPin className="w-6 h-6" />
                Check Out
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Current Status & Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Session Card */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-full ${attendanceStatus === 'in' ? 'bg-green-500' : 'bg-gray-600'}`}>
                  <Activity className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">Current Session</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    {attendanceStatus === 'in' ? (
                      <>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-semibold">Checked In</span>
                      </>
                    ) : (
                      <>
                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <span className="text-gray-400 font-semibold">Checked Out</span>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Duration</p>
                  <span className="text-2xl font-mono font-bold text-cyan-400">
                    {getCurrentSessionTime()}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-200 text-sm">Total Hours</span>
                </div>
                <div className="text-2xl font-bold">{stats.totalHours}h</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-200 text-sm">Days Present</span>
                </div>
                <div className="text-2xl font-bold">{stats.daysPresent}</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-purple-200" />
                  <span className="text-purple-200 text-sm">Avg Daily</span>
                </div>
                <div className="text-2xl font-bold">{stats.avgDaily}h</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-orange-200" />
                  <span className="text-orange-200 text-sm">Streak</span>
                </div>
                <div className="text-2xl font-bold">{stats.streakDays}</div>
              </div>
            </div>

            {/* Weekly Overview */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Weekly Overview
              </h3>
              <div className="grid grid-cols-5 gap-3">
                {weeklyData.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm text-gray-400 mb-2">{day.day}</div>
                    <div 
                      className={`h-20 rounded-lg flex items-end justify-center text-xs font-bold p-1 ${
                        day.status === 'present' 
                          ? 'bg-gradient-to-t from-cyan-600 to-cyan-400' 
                          : 'bg-gray-700'
                      }`}
                    >
                      <div className="text-center">
                        {day.status === 'present' ? (
                          <>
                            <CheckCircle className="w-4 h-4 mx-auto mb-1" />
                            <div>{day.hours}h</div>
                          </>
                        ) : (
                          <XCircle className="w-4 h-4 mx-auto text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Today's Activity */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                Today's Activity
              </h3>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {todayRecords.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <User className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No activity recorded today</p>
                  </div>
                ) : (
                  todayRecords.map((record, index) => (
                    <div key={record.id || index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          record.type === 'Check In' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {record.type === 'Check In' ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className="font-semibold">{record.type}</div>
                          <div className="text-sm text-gray-400">
                            {record.timestamp ? new Date(record.timestamp).toLocaleTimeString('en-US', { hour12: true }) : record.time}
                          </div>
                        </div>
                      </div>
                      {record.duration && (
                        <div className="text-cyan-400 font-mono font-semibold">
                          {record.duration}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">This Week</span>
                  <span className="font-semibold">{Math.round((stats.daysPresent / 5) * 100)}% Attendance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Best Day</span>
                  <span className="font-semibold">
                    {weeklyData.length > 0 
                      ? weeklyData.reduce((max, day) => parseFloat(day.hours) > parseFloat(max.hours) ? day : max, weeklyData[0]).hours + 'h'
                      : '0h'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Streak</span>
                  <span className="font-semibold text-green-400">{stats.streakDays} days</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: `${Math.round((stats.daysPresent / 5) * 100)}%`}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
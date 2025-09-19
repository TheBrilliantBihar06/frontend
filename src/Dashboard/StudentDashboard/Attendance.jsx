// File: Frontend/src/Dashboard/StudentDashboard/Attendance.jsx
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, BookOpen, BarChart3 } from 'lucide-react';

const Attendance = ({ courses = [] }) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState({});
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  // Mock courses if none provided
  const defaultCourses = [
    { id: 1, name: 'Computer Science Fundamentals', code: 'CS101' },
    { id: 2, name: 'Data Structures & Algorithms', code: 'CS201' },
    { id: 3, name: 'Web Development', code: 'WD301' },
    { id: 4, name: 'Database Management', code: 'DB201' }
  ];
  
  const courseList = courses.length > 0 ? courses : defaultCourses;

  // Initialize with mock data
  useEffect(() => {
    const mockData = {};
    courseList.forEach(course => {
      mockData[course.id] = {};
      // Generate some mock attendance data for the current month
      const today = new Date();
      const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      
      for (let day = 1; day <= daysInMonth; day++) {
        if (day <= today.getDate() && Math.random() > 0.1) {
          const status = Math.random() > 0.2 ? 'present' : Math.random() > 0.5 ? 'late' : 'absent';
          mockData[course.id][day] = {
            status,
            checkIn: status !== 'absent' ? `09:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}` : null,
            checkOut: status !== 'absent' ? `17:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}` : null
          };
        }
      }
    });
    setAttendanceData(mockData);
    if (courseList.length > 0) setSelectedCourse(courseList[0].id);
  }, []);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getAttendanceStatus = (day) => {
    if (!selectedCourse || !attendanceData[selectedCourse]) return null;
    return attendanceData[selectedCourse][day] || null;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'bg-green-500 hover:bg-green-600';
      case 'late': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'absent': return 'bg-red-500 hover:bg-red-600';
      default: return 'bg-gray-100 hover:bg-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present': return <CheckCircle className="w-3 h-3 text-white" />;
      case 'late': return <AlertCircle className="w-3 h-3 text-white" />;
      case 'absent': return <XCircle className="w-3 h-3 text-white" />;
      default: return null;
    }
  };

  const calculateAttendancePercentage = () => {
    if (!selectedCourse || !attendanceData[selectedCourse]) return 0;
    
    const records = attendanceData[selectedCourse];
    const totalDays = Object.keys(records).length;
    const presentDays = Object.values(records).filter(r => r.status === 'present' || r.status === 'late').length;
    
    return totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
  };

  const handleCheckIn = () => {
    const today = new Date().getDate();
    const newData = { ...attendanceData };
    
    if (!newData[selectedCourse]) newData[selectedCourse] = {};
    
    newData[selectedCourse][today] = {
      ...newData[selectedCourse][today],
      status: 'present',
      checkIn: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
    };
    
    setAttendanceData(newData);
    setIsCheckedIn(true);
  };

  const handleCheckOut = () => {
    const today = new Date().getDate();
    const newData = { ...attendanceData };
    
    if (newData[selectedCourse] && newData[selectedCourse][today]) {
      newData[selectedCourse][today].checkOut = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      setAttendanceData(newData);
      setIsCheckedIn(false);
    }
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Week day headers
    weekDays.forEach(day => {
      days.push(
        <div key={day} className="p-2 text-center text-sm font-semibold text-gray-600">
          {day}
        </div>
      );
    });

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const attendance = getAttendanceStatus(day);
      const isToday = day === new Date().getDate() && 
                     currentDate.getMonth() === new Date().getMonth() && 
                     currentDate.getFullYear() === new Date().getFullYear();
      
      days.push(
        <div
          key={day}
          className={`
            p-2 m-1 rounded-lg text-center text-sm font-medium cursor-pointer transition-all duration-200 transform hover:scale-105 relative
            ${attendance ? getStatusColor(attendance.status) : 'bg-gray-50 hover:bg-gray-100'}
            ${isToday ? 'ring-2 ring-blue-500' : ''}
            ${attendance ? 'text-white' : 'text-gray-700'}
          `}
          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        >
          <div className="flex items-center justify-center space-x-1">
            <span>{day}</span>
            {attendance && getStatusIcon(attendance.status)}
          </div>
        </div>
      );
    }

    return days;
  };

  const attendancePercentage = calculateAttendancePercentage();
  const selectedCourseData = courseList.find(c => c.id === selectedCourse);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Attendance Record</h1>
        </div>
        
        {/* Course Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Course:</span>
          </div>
          <select 
            value={selectedCourse} 
            onChange={(e) => setSelectedCourse(parseInt(e.target.value))}
            className="flex-1 sm:flex-none sm:min-w-64 p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          >
            {courseList.map(course => (
              <option key={course.id} value={course.id}>
                {course.code} - {course.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">{formatDate(currentDate)}</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => navigateMonth(-1)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                ←
              </button>
              <button 
                onClick={() => navigateMonth(1)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                →
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {renderCalendar()}
          </div>
          
          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-600">Present</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-gray-600">Late</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-600">Absent</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Check-in/Check-out Buttons */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Today's Attendance</h3>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={handleCheckIn}
                disabled={isCheckedIn}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  isCheckedIn 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Check In</span>
                </div>
              </button>
              
              <button 
                onClick={handleCheckOut}
                disabled={!isCheckedIn}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                  !isCheckedIn 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <XCircle className="w-5 h-5" />
                  <span>Check Out</span>
                </div>
              </button>
            </div>
          </div>

          {/* Attendance Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Attendance Summary</h3>
            </div>
            
            {selectedCourseData && (
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Current Course</div>
                  <div className="font-medium text-gray-800">{selectedCourseData.name}</div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Attendance Rate</span>
                    <span className="text-2xl font-bold text-gray-800">{attendancePercentage}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        attendancePercentage >= 75 ? 'bg-green-500' : 
                        attendancePercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${attendancePercentage}%` }}
                    ></div>
                  </div>
                  
                  <div className={`text-sm mt-2 ${
                    attendancePercentage >= 75 ? 'text-green-600' : 
                    attendancePercentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {attendancePercentage >= 75 ? 'Excellent attendance!' : 
                     attendancePercentage >= 60 ? 'Good attendance' : 'Needs improvement'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
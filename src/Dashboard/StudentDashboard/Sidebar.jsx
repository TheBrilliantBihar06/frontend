// // File: Frontend/src/Dashboard/StudentDashboard/Sidebar.jsx
// import React from 'react';
// import { User, CheckCircle, BookOpen, BarChart2, Award, StickyNote, ClipboardCheck } from 'lucide-react';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

// const menuItems = [
//     { id: 'profile', label: 'Profile', icon: User },
//     { id: 'attendance', label: 'Attendance', icon: CheckCircle },
//     { id: 'courses', label: 'Courses', icon: BookOpen },
//     { id: 'notes', label: 'Notes', icon: StickyNote },
//     { id: 'mocktest', label: 'Mock Test', icon: ClipboardCheck },
//     { id: 'marks', label: 'Marks', icon: BarChart2 },
//     { id: 'ranking', label: 'Ranking', icon: Award },
// ];

// export default function Sidebar({ activeView, setActiveView }) {
//     return (
//         <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
//             {/* Navigation Menu */}
//             <nav className="flex-1 px-4 py-6">
//                 <ul className="space-y-2">
//                     {menuItems.map((item) => (
//                         <li key={item.id}>
//                             <button
//                                 onClick={() => setActiveView(item.id)}
//                                 className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors duration-200 ${
//                                     activeView === item.id 
//                                     ? 'bg-blue-600 text-white shadow-sm' 
//                                     : 'text-gray-600 hover:bg-gray-100'
//                                 }`}
//                             >
//                                 <item.icon size={20} />
//                                 <span>{item.label}</span>
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>

//             {/* Footer/Logout */}
//             <div className="p-4 border-t border-gray-200">
//                 <button className="w-full text-center text-sm text-gray-500 hover:text-gray-700">
//                     Logout
//                 </button>
//             </div>
//         </aside>
//     );
// }


// File: Frontend/src/Dashboard/StudentDashboard/Sidebar.jsx
import React from 'react';
import {
  User,
  CheckCircle,
  BookOpen,
  BarChart2,
  Award,
  StickyNote,
  ClipboardCheck,
  LogOut,
  GraduationCap,
} from 'lucide-react';

const menuItems = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'attendance', label: 'Attendance', icon: CheckCircle },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'notes', label: 'Notes', icon: StickyNote },
  { id: 'mocktest', label: 'Mock Test', icon: ClipboardCheck },
  { id: 'marks', label: 'Marks', icon: BarChart2 },
  { id: 'ranking', label: 'Ranking', icon: Award },
];

export default function Sidebar({ activeView, setActiveView }) {
  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col shadow-md">
      {/* Logo / Header */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
        <GraduationCap className="text-blue-600" size={28} />
        <h1 className="text-lg font-semibold text-gray-800">Student Panel</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`group relative w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-left text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r" />
                  )}
                  <item.icon
                    size={20}
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer/Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-red-600 transition-all duration-200">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

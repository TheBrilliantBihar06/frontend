// src/components/Sidebar.js
import React from 'react';
import { User, CheckCircle, BookOpen, StickyNote, ClipboardCheck, BarChart2, Award, MessageCircle, LogOut, XCircle } from 'lucide-react';

const Sidebar = ({ activeView, setActiveView, isOpen, setIsOpen, onLogout }) => {
  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'attendance', label: 'Attendance', icon: CheckCircle },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'notes', label: 'Notes', icon: StickyNote },
    { id: 'mocktest', label: 'Mock Test', icon: ClipboardCheck },
    { id: 'marks', label: 'Marks', icon: BarChart2 },
    { id: 'ranking', label: 'Ranking', icon: Award },
    { id: 'doubt', label: 'Doubt Section', icon: MessageCircle },
  ];

  const handleItemClick = (itemId) => {
    setActiveView(itemId);
    setIsOpen(false);
  };

  const sidebarClasses = `
      flex flex-col bg-white border-r border-gray-200 shadow-lg 
      transition-transform duration-300 ease-in-out
      fixed inset-y-0 left-0 w-72 z-50
      md:sticky md:top-0 md:w-64 md:z-auto md:translate-x-0 md:shadow-none md:h-screen
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      <aside className={sidebarClasses + " overflow-y-auto max-h-screen"}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">S</div>
            <div>
              <h2 className="text-sm font-semibold text-gray-800">Student Name</h2>
              <p className="text-xs text-gray-500">student@example.com</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 rounded-full text-gray-500 hover:bg-gray-200 md:hidden" aria-label="Close menu">
            <XCircle size={22} />
          </button>
        </div>
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left text-sm font-medium transition-all duration-200 group ${
                    activeView === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} className={activeView === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-3 border-t border-gray-200">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 group">
            <LogOut size={20} className="text-gray-400 group-hover:text-red-600" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
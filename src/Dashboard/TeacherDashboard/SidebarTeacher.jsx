import React from "react";
import { User, Upload, BookOpen, HelpCircle, Video, CalendarPlus } from "lucide-react"; // icons

const TeacherSidebar = ({ activeComponent, setActiveComponent }) => {
  const menuItems = [
    { id: "profile", label: "Profile", icon: <User size={20} /> },
    { id: "upload-notes", label: "Upload Notes", icon: <Upload size={20} /> },
    { id: "assignments", label: "Assignments", icon: <BookOpen size={20} /> },
    { id: "schedule-class", label: "Schedule Class", icon: <CalendarPlus size={20} /> },
    { id: "take-class", label: "Take Class", icon: <Video size={20} /> },
    { id: "doubts", label: "Doubts", icon: <HelpCircle size={20} /> },
  ];

  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-4 flex-shrink-0">
      <h2 className="text-xl font-bold text-gray-800 mb-6 px-4">Teacher Panel</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveComponent(item.id)}
            className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
              activeComponent === item.id
                ? "bg-teal-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default TeacherSidebar;
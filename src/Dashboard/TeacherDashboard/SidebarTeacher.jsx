// import React from "react";
// import { 
//   User, 
//   Upload, 
//   BookOpen, 
//   HelpCircle, 
//   Video, 
//   CalendarPlus, 
//   FileText   // ✅ Added missing import
// } from "lucide-react"; // icons

// const TeacherSidebar = ({ activeComponent, setActiveComponent }) => {
//   const menuItems = [
//     { id: "profile", label: "Profile", icon: <User size={20} /> },
//     { id: "upload-notes", label: "Upload Notes", icon: <Upload size={20} /> },
//     { id: "assignments", label: "Assignments", icon: <BookOpen size={20} /> },
//     { id: "schedule-class", label: "Schedule Class", icon: <CalendarPlus size={20} /> },
//     { id: "take-class", label: "Take Class", icon: <Video size={20} /> },
//     { id: "doubts", label: "Doubts", icon: <HelpCircle size={20} /> },
//     { id: "create-test", label: "Create Test", icon: <FileText size={20} /> }, // ✅ New item
//   ];

//   return (
//     <aside className="w-64 h-screen bg-white shadow-lg p-4 flex-shrink-0">
//       <h2 className="text-xl font-bold text-gray-800 mb-6 px-4">Teacher Panel</h2>
//       <nav className="space-y-2">
//         {menuItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setActiveComponent(item.id)}
//             className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition-colors ${
//               activeComponent === item.id
//                 ? "bg-teal-500 text-white"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             <span className="mr-3">{item.icon}</span>
//             {item.label}
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default TeacherSidebar;

import React from 'react';
import { 
    User, 
    Upload, 
    BookOpen, 
    HelpCircle, 
    Video, 
    CalendarPlus, 
    FileText,
    X,
    LogOut,
} from 'lucide-react';

export default function SidebarTeacher({ activeComponent, setActiveComponent, isOpen, setIsOpen, onLogout }) {
    
    // ✅ The Logout action is now part of the main menu items array
    const menuItems = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'upload-notes', label: 'Upload Notes', icon: Upload },
        { id: 'assignments', label: 'Assignments', icon: BookOpen },
        { id: 'schedule-class', label: 'Schedule Class', icon: CalendarPlus },
        { id: 'take-class', label: 'Take Class', icon: Video },
        { id: 'doubts', label: 'Doubts', icon: HelpCircle },
        { id: 'create-test', label: 'Create Test', icon: FileText },
        { id: 'logout', label: 'Logout', icon: LogOut, action: onLogout }, // Moved here
    ];

    // ✅ This handler now checks if an item is a navigation link or a direct action
    const handleItemClick = (item) => {
        if (item.action) {
            item.action(); // If it's an action (like logout), execute it
        } else {
            setActiveComponent(item.id); // Otherwise, it's a navigation item
        }
        setIsOpen(false); // Always close sidebar on mobile after a click
    };

    const sidebarClasses = `
        flex flex-col bg-white border-r border-gray-200 shadow-lg 
        transition-transform duration-300 ease-in-out
        fixed inset-y-0 left-0 w-72 z-50  /* Mobile: Fixed overlay */
        md:sticky md:top-0 md:w-64 md:z-auto md:translate-x-0 md:shadow-none md:h-screen /* Desktop: Sticky */
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `;

    return (
        <>
            {/* Overlay for mobile view */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                ></div>
            )}

            <aside className={sidebarClasses + " overflow-y-auto max-h-screen"}>
                {/* Sidebar Header with User Info */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">
                            T
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-gray-800">Teacher Name</h2>
                            <p className="text-xs text-gray-500">teacher@example.com</p>
                        </div>
                    </div>
                    {/* Close button for mobile view */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 md:hidden"
                        aria-label="Close menu"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 px-3 py-4">
                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleItemClick(item)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left text-sm font-medium transition-all duration-200 group ${
                                        activeComponent === item.id 
                                        ? 'bg-teal-50 text-teal-600' 
                                        : `text-gray-600 hover:bg-gray-100 ${item.id === 'logout' && 'hover:text-red-600 hover:bg-red-50'}`
                                    }`}
                                >
                                    <item.icon 
                                        size={20} 
                                        className={`transition-colors ${
                                            activeComponent === item.id ? 'text-teal-600' : `text-gray-400 group-hover:text-gray-600 ${item.id === 'logout' && 'group-hover:text-red-500'}`
                                        }`}
                                    />
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ✅ The separate footer for the logout button has been removed */}
            </aside>
        </>
    );
}
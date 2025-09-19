// File: Frontend/src/Dashboard/StudentDashboard/Sidebar.jsx
import React from 'react';
// Import the X icon for the close button
import { User, CheckCircle, BookOpen, BarChart2, Award, StickyNote, ClipboardCheck, X } from 'lucide-react';

const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'attendance', label: 'Attendance', icon: CheckCircle },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'notes', label: 'Notes', icon: StickyNote },
    { id: 'mocktest', label: 'Mock Test', icon: ClipboardCheck },
    { id: 'marks', label: 'Marks', icon: BarChart2 },
    { id: 'ranking', label: 'Ranking', icon: Award },
];

// Receive `isOpen` and `setIsOpen` props to control visibility
export default function Sidebar({ activeView, setActiveView, isOpen, setIsOpen }) {

    // This function now also closes the sidebar on mobile after a selection is made
    const handleItemClick = (itemId) => {
        setActiveView(itemId);
        setIsOpen(false);
    };

    // Responsive classes for the main sidebar container
    const sidebarClasses = `
        w-64 bg-white border-r border-gray-200 flex flex-col
        fixed md:relative inset-y-0 left-0 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
    `;

    return (
        <>
            {/* Overlay: shown only on mobile when the sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                ></div>
            )}

            <aside className={sidebarClasses}>
                {/* Sidebar Header with Close Button for Mobile */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">Student Menu</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="md:hidden text-gray-500 hover:text-gray-800"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 px-4 py-6">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleItemClick(item.id)} // Use the new handler
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors duration-200 ${
                                        activeView === item.id 
                                        ? 'bg-blue-600 text-white shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <item.icon size={20} />
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer/Logout */}
                <div className="p-4 border-t border-gray-200">
                    <button className="w-full text-center text-sm text-gray-500 hover:text-gray-700">
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}
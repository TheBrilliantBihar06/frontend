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
    MessageCircle,
    X 
} from 'lucide-react';

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

export default function Sidebar({ activeView, setActiveView, isOpen, setIsOpen }) {

    const handleItemClick = (itemId) => {
        setActiveView(itemId);
        setIsOpen(false);
    };

    const sidebarClasses = `
        w-64 bg-white border-r border-gray-200 flex flex-col
        sticky top-16 h-[calc(100vh-4rem)]   /* 👈 sticks below navbar (assuming navbar = h-16) */
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
                {/* Sidebar Header */}
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
                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleItemClick(item.id)}
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

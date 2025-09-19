// File: Frontend/src/Dashboard/StudentDashboard/Sidebar.jsx
import React from 'react';
import { User, CheckCircle, BookOpen, BarChart2, Award, StickyNote, ClipboardCheck } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
        <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
            {/* Navigation Menu */}
            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => setActiveView(item.id)}
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
    );
}
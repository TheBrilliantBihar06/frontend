// src/StudentDashboard.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon } from "@heroicons/react/24/solid";

import Attendance from '../../components/StudentComponents/Attendance';
import Courses from '../../components/StudentComponents/studentCourses';
import Notes from '../../components/StudentComponents/Notes';
import MockTest from '../../components/StudentComponents/MockTest';
import Marks from '../../components/StudentComponents/Marks';
import Ranking from '../../components/StudentComponents/Ranking';
import DoubtChatbox from '../../components/StudentComponents/DoubtChatbox';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from '../../components/StudentComponents/Sidebar';
import Profile from '../../components/StudentComponents/Profile';

const StudentDashboard = () => {
  const [activeView, setActiveView] = useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const components = {
    profile: Profile,
    attendance: Attendance,
    courses: Courses,
    notes: Notes,
    mocktest: MockTest,
    marks: Marks,
    ranking: Ranking,
    doubt: DoubtChatbox,
  };
  const ActiveComponent = components[activeView];
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirect to login page (update with your routing logic)
    alert("Logged out!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar 
          activeView={activeView}
          setActiveView={setActiveView}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          onLogout={handleLogout}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 mb-4 text-gray-600" aria-label="Open sidebar">
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
      <Footer /> 
    </div>
  );
};

export default StudentDashboard;
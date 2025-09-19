// Frontend/src/Dashboard/StudentDashboard/StudentDashboard.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/solid"; // Hamburger icon

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "./Sidebar"; // Make sure to update Sidebar as shown below
import Profile from "./Profile1";
import Attendance from "./Attendance";
import Courses from "./Courses";
import Notes from "./Notes";
import Marks from "./Marks";
import Ranking from "./Ranking";
import Mock from "./Mock";
import DoubtChatbox from "./Doubt";

const components = {
  profile: Profile,
  attendance: Attendance,
  courses: Courses,
  mocktest: Mock,
  notes: Notes,
  marks: Marks,
  ranking: Ranking,
  doubt: DoubtChatbox,  // ✅ Added here
};


export default function StudentDashboard() {
  const [activeView, setActiveView] = useState("profile");
  // State to manage sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const ActiveComponent = components[activeView];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Main layout wrapper */}
      <div className="flex flex-1">
        {/* Sidebar Component */}
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen} // Pass setter to allow sidebar to close itself
        />

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Hamburger Menu Button - visible only on small screens */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Open sidebar"
          >
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
}
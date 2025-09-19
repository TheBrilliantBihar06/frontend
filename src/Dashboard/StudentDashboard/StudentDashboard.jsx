// File: Frontend/src/Dashboard/StudentDashboard/StudentDashboard.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "./Sidebar";
import Profile from "./Profile1";
import Attendance from "./Attendance";
import Courses from "./Courses";
import Notes from "./Notes";
import Marks from "./Marks";
import Ranking from "./Ranking";
import Mock from "./Mock";


const components = {
  profile: Profile,
  attendance: Attendance,
  courses: Courses,
 mocktest: Mock,
  notes: Notes,
  marks: Marks,
  ranking: Ranking,
};

export default function StudentDashboard() {
  const [activeView, setActiveView] = useState("profile");
  const ActiveComponent = components[activeView];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Navbar on top */}
      <Navbar />

      {/* Main layout */}
      <div className="flex flex-1">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />

        <main className="flex-1 p-6 sm:p-8">
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

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import TeacherSidebar from "./SidebarTeacher";
import Profile from "./TeacherProfile";
import UploadNotes from "./upload";
import Assignments from "./assignment";
import Doubts from "./doubt";
import ScheduleClass from "./scheduleclass";
import TakeClass from "./takeclass";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TeacherDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile": return <Profile />;
      case "upload-notes": return <UploadNotes />;
      case "assignments": return <Assignments />;
      case "schedule-class": return <ScheduleClass />;
      case "take-class": return <TakeClass />;
      case "doubts": return <Doubts />;
      default: return <Profile />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Pass toggle function to Navbar for mobile */}
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <TeacherSidebar
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {/* Page Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, Dr. Evelyn Reed
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your classes, assignments, and student queries from here.
            </p>
          </header>

          {/* Dynamic Content */}
          <div>{renderComponent()}</div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeacherDashboard;

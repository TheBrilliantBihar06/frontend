// import React, { useState } from "react";
// import TeacherSidebar from "./SidebarTeacher";
// import Profile from "./TeacherProfile";
// import UploadNotes from "./upload";
// import Assignments from "./assignment";
// import Doubts from "./doubt";
// import ScheduleClass from "./scheduleclass";
// import TakeClass from "./takeclass";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import CreateTestSection from "./Test";

// const TeacherDashboard = () => {
//   const [activeComponent, setActiveComponent] = useState("profile");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "profile": return <Profile />;
//       case "upload-notes": return <UploadNotes />;
//       case "assignments": return <Assignments />;
//       case "schedule-class": return <ScheduleClass />;
//       case "take-class": return <TakeClass />;
//       case "doubts": return <Doubts />;
//       case "create-test": return <CreateTestSection />;   // ✅ match with sidebar id
//       default: return <Profile />;
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Navbar with toggle for mobile */}
//       <Navbar setIsSidebarOpen={setIsSidebarOpen} />

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <TeacherSidebar
//           activeComponent={activeComponent}
//           setActiveComponent={setActiveComponent}
//           isOpen={isSidebarOpen}
//           setIsOpen={setIsSidebarOpen}
//         />

//         {/* Main Content */}
//         <main className="flex-1 p-6 md:p-8 overflow-y-auto">
//           <header className="mb-6">
//             <h1 className="text-3xl font-bold text-gray-800">
//               Welcome, Dr. Evelyn Reed
//             </h1>
//             <p className="text-gray-600 mt-1">
//               Manage your classes, assignments, and student queries from here.
//             </p>
//           </header>

//           {/* Dynamic Section */}
//           <div>{renderComponent()}</div>
//         </main>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default TeacherDashboard;


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
import CreateTestSection from "./Test";
import { Menu } from "lucide-react"; // ✅ Import the hamburger menu icon

// Using a component map is cleaner and more scalable than a switch statement.
const componentsMap = {
  profile: Profile,
  "upload-notes": UploadNotes,
  assignments: Assignments,
  "schedule-class": ScheduleClass,
  "take-class": TakeClass,
  doubts: Doubts,
  "create-test": CreateTestSection,
};

const TeacherDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Directly look up the component to render. Use Profile as a fallback.
  const ActiveComponent = componentsMap[activeComponent] || Profile;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* ✅ Navbar no longer needs to control the sidebar */}
      <Navbar />

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
          {/* ✅ Hamburger button is now here, visible only on mobile (md:hidden) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 mb-4 text-gray-600 bg-white rounded-lg shadow"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, Dr. Evelyn Reed
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your classes, assignments, and student queries from here.
            </p>
          </header>

          {/* Dynamic Section now renders the ActiveComponent directly */}
          <div>
            <ActiveComponent />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default TeacherDashboard;
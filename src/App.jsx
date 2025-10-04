// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/Contactus";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import UpcomingCourses from "./pages/coursePage";
import EventSection from "./pages/Events";
import Form from "./pages/Registrationfrom";
import Faculty from "./pages/Faculty";
import TermsAndConditions from "./pages/TermsAndConditions";

import AdmitCardDashboard from "./pages/AdmitCardDashboard";
// Dashboards
import AdminDashboard from "./Dashboard/AdminDashboard/AdminDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard/TeacherDashboard";
// import StudentDashboard from "./Dashboard/StudentDashboard/StudentDashboard";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import AddCourse from "./Dashboard/AdminDashboard/AddCourse";
import ManageUser from "./Dashboard/AdminDashboard/ManageUser";
import TeacherManagement from "./Dashboard/AdminDashboard/TeacherManagement";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/courses" element={<UpcomingCourses />} />
        <Route path="/events" element={<EventSection />} />
        <Route path="/form" element={<Form />} />
        <Route path ="/teachers" element={<Faculty />} />
        <Route path="/terms-conditions" element={<TermsAndConditions/>} />



        {/* Protected Dashboard Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />

            </ProtectedRoute>
          }
        />
        <Route 
          path="/admin/admit-cards" 
          element={
           <ProtectedRoute requiredRole="admin">
              <AdmitCardDashboard />
</ProtectedRoute>
            // </AdminProtectedRoute>
          } 
          />
        <Route 
          path="/add-course" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AddCourse />
            </ProtectedRoute>
          } 
        />
 <Route 
          path="/manage-users" 
          element={
            <ProtectedRoute requiredRole="admin">
              <ManageUser />
            </ProtectedRoute>
          } 
        />

         <Route 
          path="/manage-teachers" 
          element={
            <ProtectedRoute requiredRole="admin">
              <TeacherManagement />
            </ProtectedRoute>
          } 
        />






        <Route
          path="/teacher-dashboard"
          element={
            <ProtectedRoute requiredRole="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        <Route
         
        />
      </Routes>
    </Router>
  );
}

export default App;

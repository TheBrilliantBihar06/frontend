// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import HomePage from "./pages/Homepage";
import ContactPage from "./pages/Contactus";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ForgotPasswordPage from "./pages/Forgot";
import UpcomingCourses from "./pages/coursePage";
import EventSection from "./pages/Events";
import ProfileSection from "./pages/profile";
import Form from "./pages/Registrationfrom";
import Faculty from "./pages/Faculty";

// Dashboards
import AdminDashboard from "./Dashboard/AdminDashboard/AdminDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "./Dashboard/StudentDashboard/StudentDashboard";

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
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/courses" element={<UpcomingCourses />} />
        <Route path="/events" element={<EventSection />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/form" element={<Form />} />
        <Route path ="/teachers" element={<Faculty />} />

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
          path="/student-dashboard"
          element={
            <ProtectedRoute requiredRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

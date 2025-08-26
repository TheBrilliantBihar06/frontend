import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ContactPage from "./pages/Contactus";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ForgotPasswordPage from "./pages/Forgot";
import UpcomingCourses from "./pages/coursePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />   
        <Route path="/signup" element={<SignupPage />} />  
        <Route path="/forgot" element={<ForgotPasswordPage />} /> 
        <Route path="/courses" element={<UpcomingCourses/>} /> 



      </Routes>
    </Router>
  );
}

export default App;

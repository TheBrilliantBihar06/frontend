import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CoursesSection from "./components/Courses";
import TeachersSection from "./components/Teachers";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
       <TeachersSection />
      <CoursesSection />
      <Footer />
   
          </>
  );
}
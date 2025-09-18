import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CoursesSection from "../components/Courses";
import TeachersSection from "../components/Teachers";
import WhyJoinUs from "../components/whyJoinUs";
import OurValues from "../components/ourValues";
import Chatbot from "../components/Chatbot";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Chatbot/>
      <HeroSection />
       <TeachersSection />
      <CoursesSection />
      <WhyJoinUs />
      <OurValues />
      <Footer />
          </>
  );
}
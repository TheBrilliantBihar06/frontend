import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CoursesSection from "../components/Courses";
import TeachersSection from "../components/Teachers";
import WhyJoinGrid from "../components/whyjoingrid";
import WhyJoinUs from "../components/whyJoinUs";
import OurValues from "../components/Ourvalues";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
       <TeachersSection />
      <CoursesSection />
      <WhyJoinUs />
      <WhyJoinGrid />
      <OurValues />
      <Footer />
   
          </>
  );
}
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CoursesSection from "../components/Courses";
import TeachersSection from "../components/Teachers";
import WhyJoinUs from "../components/whyJoinUs";
import OurValues from "../components/ourValues";
import HomeAbout from "../components/HomeAbout";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomeAbout />
      <TeachersSection />
      <CoursesSection />
      <WhyJoinUs />
      <OurValues />
      <Footer />
          </>
  );
}
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UpcomingCourses() {
  const courses = [
    {
      name: "BPSE",
      desc: "A foundational program designed to prepare students for competitive exams with structured guidance.",
      image: "/images/bpse.jpg", // replace with your manual image path
    },
    {
      name: "UPSE",
      desc: "Comprehensive course covering key subjects, strategies, and mock tests to excel in UPSC exams.",
      image: "/images/upse.jpg", // replace with your manual image path
    },
  ];

  return (
    <div className="bg-[#1e2836] min-h-screen flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Upcoming Courses Section */}
      <section className="flex-grow px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Upcoming Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {course.name}
                </h3>
                <span className="inline-block bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Coming Soon
                </span>
                <p className="text-gray-600">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

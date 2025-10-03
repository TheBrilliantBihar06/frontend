import React from "react";

// Course data array for dynamic rendering
const courses = [
  {
    id: 1,
    title: "Complete UPSC Preparation Course",
    description:
      "Comprehensive UPSC preparation with expert faculty, mock tests, and personalized guidance to crack India's toughest civil services exam.",
    features: [
      "📚 All Subjects Covered",
      "⏰ 12 Months Duration",
      "👨‍🏫 Expert Faculty",
      "📝 Mock Tests Included",
    ],
    comingSoon: true,
  },
  {
    id: 2,
    title: "Complete BPSC Preparation Course",
    description:
      "Specialized BPSC preparation program designed for Bihar state civil services with regional focus and comprehensive study material.",
    features: [
      "📚 Bihar Specific Content",
      "⏰ 8 Months Duration",
      "👨‍🏫 Local Expert Faculty",
      "📝 Practice Tests",
    ],
    comingSoon: true,
  },
];

// Reusable CourseCard component
const CourseCard = ({ title, description, features, comingSoon }) => {
  return (
    <div className="bg-[#161a23] rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative w-full max-w-md">
      {/* Image Placeholder with Gradient Overlay */}
      <div className="h-48 bg-gradient-to-r bg-[#4a4a4a] flex items-center justify-center relative">
        <span className="text-white text-lg font-semibold opacity-80">
          {title}
        </span>
        {/* Overlay for visual effect */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Coming Soon Badge */}
      {comingSoon && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
          Coming Soon
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-4">
          {features.map((feature, index) => (
            <span key={index} className="flex items-center space-x-2">
              {feature}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="text-lg font-bold text-indigo-400">
          {comingSoon ? "Pricing Available Soon" : "Enroll Now"}
        </div>

        {/* CTA Button */}
        <button
          className={`mt-4 w-full py-2 rounded-lg font-semibold transition-colors duration-200 ${
            comingSoon
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          disabled={comingSoon}
        >
          {comingSoon ? "Coming Soon" : "Enroll Now"}
        </button>
      </div>
    </div>
  );
};

export default function CoursesSection() {
  return (
   <section className="relative bg-gradient-to-b from-[#7d7d7d]  to-[#9d9d9d] c text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
  Explore Our <span
  className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] bg-clip-text text-transparent"
  style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
>
  Premium Courses
</span>
</h2>

        {/* Courses Flex Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              features={course.features}
              comingSoon={course.comingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
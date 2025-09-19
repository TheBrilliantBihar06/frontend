// File: Frontend/src/Dashboard/StudentDashboard/Courses.jsx
import React from 'react';

// Hardcoded data for two course cards
const courses = [
  {
    id: 1,
    name: 'Introduction to Programming',
    instructor: 'Dr. Anjali Sharma',
    image: 'https://placehold.co/400x225/e0e0e0/333333?text=Course+1',
  },
  {
    id: 2,
    name: 'Data Structures & Algorithms',
    instructor: 'Prof. John Smith',
    image: 'https://placehold.co/400x225/f0f0f0/333333?text=Course+2',
  },
];

const CourseCard = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Section Heading - Centered */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Enrolled Courses</h1>
      
      {/* Course Cards Grid - Aligned to the Left */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            {/* Course Image */}
            <div className="relative">
              <img className="w-full h-48 object-cover" src={course.image} alt="Course" />
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Course Name */}
              <h2 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h2>
              
              {/* Instructor Name */}
              <p className="text-sm text-gray-600 mb-4">Instructor: {course.instructor}</p>
              
              {/* Resume Course Button */}
              <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-300">
                Resume Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
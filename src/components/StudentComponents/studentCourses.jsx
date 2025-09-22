// src/components/Courses.js
import React, { useState } from 'react';
import { Clock, BookOpen, Star, Play } from 'lucide-react';

const Courses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      progress: 75,
      duration: "12 weeks",
      lessons: 24,
      completed: 18,
      thumbnail: "📊",
      difficulty: "Advanced",
      rating: 4.8
    },
    {
      id: 2,
      title: "Physics Fundamentals",
      instructor: "Prof. Michael Chen",
      progress: 45,
      duration: "10 weeks",
      lessons: 20,
      completed: 9,
      thumbnail: "⚛️",
      difficulty: "Intermediate",
      rating: 4.6
    },
    {
      id: 3,
      title: "Organic Chemistry",
      instructor: "Dr. Emily Davis",
      progress: 90,
      duration: "8 weeks",
      lessons: 16,
      completed: 14,
      thumbnail: "🧪",
      difficulty: "Advanced",
      rating: 4.9
    },
    {
      id: 4,
      title: "Biology Essentials",
      instructor: "Dr. James Wilson",
      progress: 30,
      duration: "14 weeks",
      lessons: 28,
      completed: 8,
      thumbnail: "🧬",
      difficulty: "Beginner",
      rating: 4.5
    }
  ]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Courses</h1>
          <p className="text-gray-600">Continue your learning journey with these courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{course.thumbnail}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">by {course.instructor}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.completed}/{course.lessons} lessons
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {course.rating}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
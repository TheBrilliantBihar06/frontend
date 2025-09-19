// File: Frontend/src/Dashboard/StudentDashboard/Courses.jsx
import React from "react";
const courses = [
    { id: 'CS101', title: 'Introduction to Programming', instructor: 'Dr. Anjali Sharma' },
    { id: 'MA202', title: 'Linear Algebra', instructor: 'Prof. Vikram Singh' },
    { id: 'PHY105', title: 'Classical Mechanics', instructor: 'Dr. Priya Mehta' },
    { id: 'EE101', title: 'Basic Electrical Engineering', instructor: 'Prof. R. K. Gupta' },
];

export default function Courses() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">My Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map(course => (
                    <div key={course.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-bold text-blue-700">{course.id}</h3>
                        <h2 className="text-xl font-semibold text-gray-800 mt-1">{course.title}</h2>
                        <p className="text-sm text-gray-500 mt-2">Instructor: {course.instructor}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
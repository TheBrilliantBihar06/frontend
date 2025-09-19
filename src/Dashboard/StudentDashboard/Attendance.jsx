// File: Frontend/src/Dashboard/StudentDashboard/Attendance.jsx
import React from "react";
export default function Attendance() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Attendance Record</h1>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700">Current Semester</h2>
                <p className="mt-4 text-gray-600">
                    Your attendance percentage and detailed records for each course will be displayed here.
                </p>
                {/* Add attendance charts or tables here */}
            </div>
        </div>
    );
}
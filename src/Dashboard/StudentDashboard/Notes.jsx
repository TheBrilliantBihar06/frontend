// File: Frontend/src/Dashboard/StudentDashboard/Notes.jsx
import React from "react";

export default function Notes() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Course Notes</h1>
             <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700">Shared Resources</h2>
                <p className="mt-4 text-gray-600">
                    Lecture notes, PDFs, and other study materials for your enrolled courses will be available for download here.
                </p>
                {/* Add a file list or uploader here */}
            </div>
        </div>
    );
}
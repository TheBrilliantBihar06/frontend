// File: Frontend/src/Dashboard/StudentDashboard/Marks.jsx
import React from "react";

const marks = [
    { subject: 'Introduction to Programming', type: 'Mid-Term', score: '85/100', grade: 'A' },
    { subject: 'Linear Algebra', type: 'Mid-Term', score: '91/100', grade: 'A+' },
    { subject: 'Classical Mechanics', type: 'Quiz 1', score: '18/20', grade: 'A' },
    { subject: 'Basic Electrical Engineering', type: 'Mid-Term', score: '76/100', grade: 'B+' },
];

export default function Marks() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Marks & Grades</h1>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {marks.map((mark, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mark.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mark.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mark.score}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">{mark.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
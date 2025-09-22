// src/components/Marks.js
import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';

const Marks = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Current Semester");
  
  const marksData = [
    {
      id: 1,
      subject: "Mathematics",
      totalMarks: 100,
      obtainedMarks: 87,
      grade: "A",
      remarks: "Excellent",
      testDate: "2025-09-15",
      testType: "Mid-term"
    },
    {
      id: 2,
      subject: "Physics",
      totalMarks: 100,
      obtainedMarks: 82,
      grade: "A-",
      remarks: "Very Good",
      testDate: "2025-09-12",
      testType: "Quiz"
    },
    {
      id: 3,
      subject: "Chemistry",
      totalMarks: 100,
      obtainedMarks: 94,
      grade: "A+",
      remarks: "Outstanding",
      testDate: "2025-09-10",
      testType: "Assignment"
    },
    {
      id: 4,
      subject: "Biology",
      totalMarks: 100,
      obtainedMarks: 79,
      grade: "B+",
      remarks: "Good",
      testDate: "2025-09-08",
      testType: "Mid-term"
    }
  ];

  const overallStats = {
    totalSubjects: 4,
    averageMarks: 85.5,
    totalMarks: 400,
    obtainedMarks: 342,
    overallGrade: "A"
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A+': return 'bg-green-100 text-green-800';
      case 'A': return 'bg-green-100 text-green-700';
      case 'A-': return 'bg-blue-100 text-blue-700';
      case 'B+': return 'bg-yellow-100 text-yellow-700';
      case 'B': return 'bg-orange-100 text-orange-700';
      default: return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Academic Performance</h1>
            <p className="text-gray-600">Track your marks and academic progress</p>
          </div>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option>Current Semester</option>
            <option>Previous Semester</option>
            <option>Academic Year</option>
          </select>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{overallStats.totalSubjects}</div>
            <div className="text-gray-600">Subjects</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{overallStats.averageMarks}%</div>
            <div className="text-gray-600">Average</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{overallStats.obtainedMarks}</div>
            <div className="text-gray-600">Total Marks</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{overallStats.totalMarks}</div>
            <div className="text-gray-600">Maximum</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className={`text-3xl font-bold mb-2 ${overallStats.overallGrade === 'A' ? 'text-green-600' : 'text-blue-600'}`}>
              {overallStats.overallGrade}
            </div>
            <div className="text-gray-600">Grade</div>
          </div>
        </div>

        {/* Marks Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Subject-wise Performance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {marksData.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {record.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.testType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.obtainedMarks}/{record.totalMarks}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {((record.obtainedMarks / record.totalMarks) * 100).toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(record.grade)}`}>
                        {record.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.testDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Trend</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Performance chart will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marks;
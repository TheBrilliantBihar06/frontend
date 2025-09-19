import React from 'react';

// Dummy data with only two tests
const dummyTests = [
  {
    id: 1,
    testName: "Linear Algebra Exam",
    teacherName: "Prof. Anjali Sharma",
    description: "A comprehensive exam covering matrices, vectors, and transformations.",
    image: "https://placehold.co/400x225/AEC6CF/333333?text=Linear+Algebra",
  },
  {
    id: 2,
    testName: "Calculus I Midterm",
    teacherName: "Dr. Ben Carter",
    description: "Covers derivatives, integrals, and their applications.",
    image: "https://placehold.co/400x225/B399D4/333333?text=Calculus+Midterm",
  },
];

const CreateTestSection = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Responsive Grid of Test Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyTests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Test Image */}
            <img
              src={test.image}
              alt={test.testName}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Test Details */}
            <h2 className="text-xl font-bold text-gray-900 mb-1">{test.testName}</h2>
            <p className="text-sm text-gray-600 mb-4">
              Teacher: {test.teacherName}
            </p>
            <p className="text-gray-700 text-sm mb-6">
              {test.description}
            </p>

            {/* Upload Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                <span className="flex-1 text-center">Google Form</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTestSection;

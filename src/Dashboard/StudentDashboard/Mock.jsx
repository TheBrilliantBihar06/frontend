import React from 'react';

// You can fetch this data from an API in a real application
const mockTests = [
  {
    id: 1,
    title: 'Mock Test 1: General Aptitude',
    description: 'A comprehensive test covering quantitative analysis, logical reasoning, and verbal ability to assess your fundamental skills.',
    difficulty: 'Easy',
  },
  {
    id: 2,
    title: 'Mock Test 2: Data Structures',
    description: 'Challenge your understanding of core data structures including arrays, linked lists, stacks, queues, trees, and graphs.',
    difficulty: 'Medium',
  },
  {
    id: 3,
    title: 'Mock Test 3: Algorithms',
    description: 'Test your problem-solving skills with algorithmic challenges focusing on sorting, searching, and dynamic programming.',
    difficulty: 'Hard',
  },
  {
    id: 4,
    title: 'Mock Test 4: System Design',
    description: 'An advanced test on designing scalable and reliable systems. Covers microservices, databases, and caching strategies.',
    difficulty: 'Hard',
  },
  {
    id: 5,
    title: 'Mock Test 5: React Fundamentals',
    description: 'Assess your knowledge of React core concepts like components, state, props, and hooks for building modern UIs.',
    difficulty: 'Easy',
  },
  {
    id: 6,
    title: 'Mock Test 6: Full-Stack Challenge',
    description: 'A complete end-to-end test involving frontend, backend, and database integration. The ultimate test of your skills.',
    difficulty: 'Medium',
  },
];

// A helper component for the difficulty badge
const DifficultyBadge = ({ level }) => {
  const badgeStyles = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${badgeStyles[level] || 'bg-gray-100 text-gray-800'}`}>
      {level}
    </span>
  );
};

// Main component to display the mock test cards
export default function Mock() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Available Mock Tests</h1>
            <p className="mt-2 text-gray-600">Choose a test to challenge yourself and improve your skills.</p>
        </div>

        {/* Responsive Grid Layout for Test Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTests.map((test) => (
            <div 
              key={test.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{test.title}</h2>
                    <DifficultyBadge level={test.difficulty} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {test.description}
                </p>
              </div>
              <div className="bg-gray-50 p-4">
                 <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Start Test
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

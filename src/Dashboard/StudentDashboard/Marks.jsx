import React from 'react';

// --- Helper Components & Icons ---

const ScoreRing = ({ score, total }) => {
  const percentage = Math.round((score / total) * 100);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  let strokeColor = 'stroke-green-500';
  if (percentage < 75) strokeColor = 'stroke-yellow-500';
  if (percentage < 50) strokeColor = 'stroke-red-500';

  return (
    <div className="relative flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className={`${strokeColor} transition-all duration-1000 ease-out`}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-3xl sm:text-4xl font-bold text-gray-800">{percentage}%</span>
        <span className="text-xs text-gray-500">{score}/{total}</span>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
    <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
        <div className="text-blue-600">{icon}</div>
        <div>
            <p className="text-sm font-semibold text-gray-800">{value}</p>
            <p className="text-xs text-gray-500">{label}</p>
        </div>
    </div>
);

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;


// --- Mock Test Data ---
const mockResults = [
  {
    id: 1,
    title: 'Mock Test 1: General Aptitude',
    dateCompleted: 'September 15, 2025',
    score: 85,
    total: 100,
    correctAnswers: 85,
    incorrectAnswers: 15,
    timeTaken: '45 min',
  },
  {
    id: 2,
    title: 'Mock Test 2: Data Structures',
    dateCompleted: 'September 12, 2025',
    score: 72,
    total: 100,
    correctAnswers: 72,
    incorrectAnswers: 28,
    timeTaken: '55 min',
  },
  {
    id: 3,
    title: 'Mock Test 3: Algorithms',
    dateCompleted: 'September 10, 2025',
    score: 91,
    total: 100,
    correctAnswers: 91,
    incorrectAnswers: 9,
    timeTaken: '50 min',
  },
];


// --- Main Marks Component ---
export default function Marks() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Mock Test Results</h1>
                <p className="mt-2 text-gray-600">Review your performance from recent tests.</p>
            </div>

            <div className="space-y-8">
                {mockResults.map((result) => (
                    <div key={result.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-lg">
                        <div className="p-6">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-200 pb-4 mb-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">{result.title}</h2>
                                <p className="text-sm text-gray-500">Completed on: {result.dateCompleted}</p>
                            </div>
                            
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-shrink-0">
                                    <ScoreRing score={result.score} total={result.total} />
                                </div>
                                <div className="flex-grow w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <StatCard icon={<CheckIcon />} label="Correct" value={result.correctAnswers} />
                                    <StatCard icon={<XIcon />} label="Incorrect" value={result.incorrectAnswers} />
                                    <StatCard icon={<ClockIcon />} label="Time Taken" value={result.timeTaken} />
                                </div>
                                <div className="w-full md:w-auto mt-4 md:mt-0 flex-shrink-0">
                                    <button className="w-full bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300 hover:bg-blue-700">
                                        Review Answers
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

import React from 'react';

// --- Sample Data ---
// In a real app, this data would come from your backend.
// The data is pre-sorted by rank.
const leaderboardData = [
  { rank: 1, name: 'Anjali Sharma', score: 95.8, testsAttempted: 5, avatar: 'https://api.dicebear.com/8.x/initials/svg?seed=Anjali+Sharma' },
  { rank: 2, name: 'Vikram Singh', score: 92.3, testsAttempted: 5, avatar: 'https://api.dicebear.com/8.x/initials/svg?seed=Vikram+Singh' },
  { rank: 3, name: 'Priya Patel', score: 90.1, testsAttempted: 5, avatar: 'https://api.dicebear.com/8.x/initials/svg?seed=Priya+Patel' },
  { rank: 4, name: 'Rakesh Chourasia', score: 88.5, testsAttempted: 4, avatar: 'https://api.dicebear.com/8.x/initials/svg?seed=Rakesh+Chourasia', isCurrentUser: true },
  { rank: 5, name: 'Suresh Kumar', score: 87.2, testsAttempted: 5, avatar: 'https://api.dicebear.com/8.x/initials/svg?seed=Suresh+Kumar' },
  { rank: 6, name: 'Neha Gupta', score: 85.0, testsAttempted: 4, avatar: 'https://api.dicebear.com/8.x/initials/svg?seed=Neha+Gupta' },
  { rank: 7, name: 'Amit Desai', score: 82.7, testsAttempted: 5, avatar: 'https://api.dicebear.com/8.x/initials/svg?seed=Amit+Desai' },
  { rank: 8, name: 'Sunita Joshi', score: 80.4, testsAttempted: 3, avatar: 'https://api.dicebear.com/8.x/initials/svg?seed=Sunita+Joshi' },
];

// --- Helper Components & Icons ---

const TrophyIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.87 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.13 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const RankDisplay = ({ rank }) => {
  const rankColors = {
    1: 'text-yellow-500',
    2: 'text-gray-400',
    3: 'text-orange-400',
  };

  const iconColors = {
    1: '#FFD700', // Gold
    2: '#C0C0C0', // Silver
    3: '#CD7F32', // Bronze
  };

  if (rank <= 3) {
    return <TrophyIcon color={iconColors[rank]} />;
  }

  return (
    <span className="font-bold text-gray-600 text-lg">
      {rank}
    </span>
  );
};

// --- Main Ranking Component ---
export default function Ranking() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Mock Test Leaderboard</h1>
          <p className="mt-2 text-gray-600">See how you stack up against your peers. Keep practicing!</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="col-span-2 sm:col-span-1">Rank</div>
            <div className="col-span-6 sm:col-span-7">Student</div>
            <div className="col-span-4 sm:col-span-2 text-right">Avg. Score</div>
            <div className="hidden sm:block col-span-2 text-right">Tests</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-200">
            {leaderboardData.map((student) => (
              <div
                key={student.rank}
                className={`grid grid-cols-12 gap-4 px-6 py-4 items-center transition-colors duration-200 ${
                  student.isCurrentUser ? 'bg-indigo-50' : 'hover:bg-gray-50'
                }`}
              >
                {/* Rank */}
                <div className="col-span-2 sm:col-span-1 flex items-center justify-center h-10 w-10">
                  <RankDisplay rank={student.rank} />
                </div>
                
                {/* Student Info */}
                <div className="col-span-6 sm:col-span-7 flex items-center gap-4">
                  <img
                    src={student.avatar}
                    alt={`${student.name}'s avatar`}
                    className="w-10 h-10 rounded-full border-2 border-gray-200"
                  />
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-gray-900">{student.name}</p>
                  </div>
                  {student.isCurrentUser && (
                    <span className="hidden sm:inline-block bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      You
                    </span>
                  )}
                </div>
                
                {/* Score */}
                <div className="col-span-4 sm:col-span-2 text-right">
                  <p className="text-sm font-semibold text-gray-800">{student.score.toFixed(1)}%</p>
                </div>

                {/* Tests Attempted */}
                <div className="hidden sm:block col-span-2 text-right">
                  <p className="text-sm text-gray-500">{student.testsAttempted}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// src/components/Ranking.js
import React, { useState } from 'react';
import { Crown, Medal, Award, Trophy } from 'lucide-react';

const Ranking = () => {
  const [selectedCategory, setSelectedCategory] = useState("Overall");
  
  const studentRankings = [
    { id: 1, name: "Alice Johnson", score: 982, rank: 1, avatar: "👩‍🎓", change: "+2" },
    { id: 2, name: "Bob Smith", score: 975, rank: 2, avatar: "👨‍🎓", change: "-1" },
    { id: 3, name: "You", score: 968, rank: 3, avatar: "🎓", change: "+1", isCurrentUser: true },
    { id: 4, name: "Diana Lee", score: 962, rank: 4, avatar: "👩‍💼", change: "-2" },
    { id: 5, name: "Charlie Brown", score: 955, rank: 5, avatar: "👨‍💻", change: "0" },
    { id: 6, name: "Eva Martinez", score: 948, rank: 6, avatar: "👩‍🔬", change: "+3" },
    { id: 7, name: "Frank Wilson", score: 941, rank: 7, avatar: "👨‍🏫", change: "-1" },
    { id: 8, name: "Grace Kim", score: 935, rank: 8, avatar: "👩‍⚕️", change: "+1" },
  ];

  const achievements = [
    { title: "Top Performer", description: "Ranked in top 5 for 3 consecutive months", icon: Trophy, color: "text-yellow-600" },
    { title: "Mathematics Star", description: "Highest score in Mathematics this semester", icon: Crown, color: "text-purple-600" },
    { title: "Consistent Learner", description: "Maintained steady performance", icon: Award, color: "text-blue-600" },
  ];

  const categories = ["Overall", "Mathematics", "Physics", "Chemistry", "Biology"];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-orange-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">#{rank}</span>;
    }
  };

  const getChangeColor = (change) => {
    if (change.startsWith('+')) return 'text-green-600';
    if (change.startsWith('-')) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Class Rankings</h1>
          <p className="text-gray-600">See how you rank among your peers</p>
        </div>

        {/* Current User Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-6xl mr-6">🎓</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Your Current Rank</h2>
                <div className="flex items-center text-xl">
                  <span className="text-4xl font-bold mr-3">#3</span>
                  <div>
                    <div>Score: 968 points</div>
                    <div className="text-blue-200">↗ Moved up 1 position</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-80">Next Rank</div>
              <div className="text-2xl font-bold">7 points away</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rankings List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">{selectedCategory} Rankings</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {studentRankings.map((student, index) => (
                  <div 
                    key={student.id} 
                    className={`p-6 flex items-center justify-between hover:bg-gray-50 ${
                      student.isCurrentUser ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(student.rank)}
                      </div>
                      <div className="text-4xl">{student.avatar}</div>
                      <div>
                        <div className={`font-semibold ${student.isCurrentUser ? 'text-blue-800' : 'text-gray-800'}`}>
                          {student.name}
                          {student.isCurrentUser && <span className="ml-2 text-blue-600 text-sm">(You)</span>}
                        </div>
                        <div className="text-gray-600">Score: {student.score} points</div>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${getChangeColor(student.change)}`}>
                      {student.change !== "0" && (
                        <>
                          {student.change.startsWith('+') ? '↗' : '↘'} {student.change}
                        </>
                      )}
                      {student.change === "0" && "—"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <achievement.icon className={`w-6 h-6 mt-1 ${achievement.color}`} />
                    <div>
                      <div className="font-semibold text-gray-800">{achievement.title}</div>
                      <div className="text-sm text-gray-600">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Best Rank:</span>
                  <span className="font-semibold">#2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Rank:</span>
                  <span className="font-semibold">#3.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rank Changes:</span>
                  <span className="font-semibold text-green-600">+5 this month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Percentile:</span>
                  <span className="font-semibold">Top 12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
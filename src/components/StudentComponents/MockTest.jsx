// src/components/MockTest.js
import React, { useState, useEffect } from 'react';
import { Clock, FileText, Play } from 'lucide-react';

const MockTest = () => {
  const [activeTest, setActiveTest] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isTestActive, setIsTestActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const mockTests = [
    {
      id: 1,
      title: "Mathematics Practice Test",
      duration: 60,
      questions: 30,
      difficulty: "Medium",
      subject: "Mathematics",
      attempted: true,
      score: 85,
      maxScore: 100
    },
    {
      id: 2,
      title: "Physics Mock Exam",
      duration: 90,
      questions: 45,
      difficulty: "Hard",
      subject: "Physics",
      attempted: false,
      score: null,
      maxScore: 100
    },
    {
      id: 3,
      title: "Chemistry Quick Test",
      duration: 45,
      questions: 25,
      difficulty: "Easy",
      subject: "Chemistry",
      attempted: true,
      score: 92,
      maxScore: 100
    }
  ];

  const sampleQuestions = [
    {
      id: 1,
      question: "What is the derivative of x²?",
      options: ["x", "2x", "x²", "2x²"],
      correct: 1
    },
    {
      id: 2,
      question: "What is the value of π (pi) approximately?",
      options: ["3.14159", "3.141", "3.1416", "All of the above"],
      correct: 3
    }
  ];

  const startTest = (test) => {
    setActiveTest(test);
    setTimeRemaining(test.duration * 60);
    setIsTestActive(true);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const submitTest = () => {
    setIsTestActive(false);
    setActiveTest(null);
    alert("Test submitted successfully!");
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Timer effect
  useEffect(() => {
    let timer;
    if (isTestActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            submitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestActive, timeRemaining]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isTestActive && activeTest) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Test Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{activeTest.title}</h1>
                <p className="text-gray-600">Question {currentQuestion + 1} of {sampleQuestions.length}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">{formatTime(timeRemaining)}</div>
                <p className="text-sm text-gray-600">Time Remaining</p>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {sampleQuestions[currentQuestion]?.question}
            </h2>
            
            <div className="space-y-3">
              {sampleQuestions[currentQuestion]?.options.map((option, index) => (
                <label key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="answer"
                    value={index}
                    checked={answers[currentQuestion] === index}
                    onChange={() => setAnswers({...answers, [currentQuestion]: index})}
                    className="mr-3"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            
            <button
              onClick={submitTest}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Submit Test
            </button>
            
            <button
              onClick={() => setCurrentQuestion(Math.min(sampleQuestions.length - 1, currentQuestion + 1))}
              disabled={currentQuestion === sampleQuestions.length - 1}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Mock Tests</h1>
          <p className="text-gray-600">Practice with timed tests to improve your performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test) => (
            <div key={test.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{test.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                  {test.difficulty}
                </span>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                  {test.subject}
                </span>
              </div>
              
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {test.duration} minutes
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  {test.questions} questions
                </div>
              </div>
              
              {test.attempted && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Last Score:</span>
                    <span className="font-semibold text-lg">{test.score}/{test.maxScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(test.score / test.maxScore) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => startTest(test)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Play className="w-4 h-4 mr-2" />
                {test.attempted ? 'Retake Test' : 'Start Test'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockTest;
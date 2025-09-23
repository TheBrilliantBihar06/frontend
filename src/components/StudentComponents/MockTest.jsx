import React, { useState, useEffect } from 'react';
import { Clock, FileText, Play, Target, Award, CheckCircle, ArrowLeft, ArrowRight, Flag, BookOpen, Timer, Trophy, ChevronRight, BarChart3 } from 'lucide-react';

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
      maxScore: 100,
      description: "Comprehensive test covering algebra, calculus, and geometry"
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
      maxScore: 100,
      description: "Advanced physics concepts including mechanics and thermodynamics"
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
      maxScore: 100,
      description: "Organic chemistry reactions and basic principles"
    },
    {
      id: 4,
      title: "Biology Comprehensive",
      duration: 75,
      questions: 40,
      difficulty: "Medium",
      subject: "Biology",
      attempted: true,
      score: 78,
      maxScore: 100,
      description: "Cell biology, genetics, and human anatomy"
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
      case 'Easy': return 'from-green-500 to-emerald-600';
      case 'Medium': return 'from-yellow-500 to-orange-600';
      case 'Hard': return 'from-red-500 to-pink-600';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getSubjectColor = (subject) => {
    switch (subject) {
      case 'Mathematics': return 'from-blue-500 to-indigo-600';
      case 'Physics': return 'from-purple-500 to-violet-600';
      case 'Chemistry': return 'from-green-500 to-teal-600';
      case 'Biology': return 'from-orange-500 to-red-600';
      default: return 'from-gray-400 to-gray-500';
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
    const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
        <div className="max-w-5xl mx-auto">
          {/* Test Header */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex-1">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  {activeTest.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    Question {currentQuestion + 1} of {sampleQuestions.length}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-1" />
                    {Object.keys(answers).length} answered
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className={`text-3xl lg:text-4xl font-bold mb-1 ${timeRemaining < 300 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
                  {formatTime(timeRemaining)}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Timer className="w-4 h-4 mr-1" />
                  Time Remaining
                </div>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-6">
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                {currentQuestion + 1}
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
                {sampleQuestions[currentQuestion]?.question}
              </h2>
            </div>
            
            <div className="space-y-3 ml-12">
              {sampleQuestions[currentQuestion]?.options.map((option, index) => (
                <label 
                  key={index} 
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                    answers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                >
                  <div className="relative mr-4">
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      checked={answers[currentQuestion] === index}
                      onChange={() => setAnswers({...answers, [currentQuestion]: index})}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion] === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">{String.fromCharCode(65 + index)}. {option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center px-6 py-3 bg-white/80 text-gray-700 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border border-gray-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            
            <div className="flex gap-3">
              <button
                onClick={() => setAnswers({...answers, [currentQuestion]: -1})}
                className="flex items-center px-4 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors"
                title="Mark for review"
              >
                <Flag className="w-5 h-5 mr-2" />
                Flag
              </button>
              
              <button
                onClick={submitTest}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Submit Test
              </button>
            </div>
            
            <button
              onClick={() => setCurrentQuestion(Math.min(sampleQuestions.length - 1, currentQuestion + 1))}
              disabled={currentQuestion === sampleQuestions.length - 1}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Next
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4 shadow-lg">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
            Mock Tests
          </h1>
          <p className="text-gray-600 text-lg">Practice with timed tests to improve your performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {mockTests.filter(t => t.attempted).length}
                </div>
                <div className="text-sm text-gray-600">Tests Completed</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {Math.round(mockTests.filter(t => t.attempted).reduce((acc, t) => acc + t.score, 0) / mockTests.filter(t => t.attempted).length) || 0}%
                </div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {mockTests.length - mockTests.filter(t => t.attempted).length}
                </div>
                <div className="text-sm text-gray-600">Pending Tests</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {mockTests.map((test) => (
            <div key={test.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden transform hover:scale-[1.02]">
              {/* Card Header */}
              <div className={`h-1 bg-gradient-to-r ${getSubjectColor(test.subject)}`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                      {test.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {test.description}
                    </p>
                  </div>
                  
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getDifficultyColor(test.difficulty)}`}>
                    {test.difficulty}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getSubjectColor(test.subject)}`}>
                    <BookOpen className="w-4 h-4 mr-1" />
                    {test.subject}
                  </span>
                  {test.attempted && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <Award className="w-3 h-3 mr-1" />
                      Completed
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center p-3 bg-blue-50/80 rounded-xl">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-800">{test.duration} min</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-purple-50/80 rounded-xl">
                    <FileText className="w-5 h-5 mr-2 text-purple-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-800">{test.questions}</div>
                      <div className="text-xs text-gray-600">Questions</div>
                    </div>
                  </div>
                </div>
                
                {test.attempted && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Last Score:</span>
                      <span className="font-bold text-xl text-gray-800">{test.score}/{test.maxScore}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${test.score >= 80 ? 'from-green-500 to-emerald-600' : test.score >= 60 ? 'from-yellow-500 to-orange-600' : 'from-red-500 to-pink-600'}`}
                        style={{ width: `${(test.score / test.maxScore) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {test.score >= 80 ? 'Excellent!' : test.score >= 60 ? 'Good job!' : 'Keep practicing!'}
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => startTest(test)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center transform hover:scale-105 group"
                >
                  <Play className="w-5 h-5 mr-2" />
                  <span className="font-medium">
                    {test.attempted ? 'Retake Test' : 'Start Test'}
                  </span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockTest;
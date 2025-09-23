import React, { useState } from 'react';
import { Send, Zap, Book, Target, Bot, User, Sparkles } from 'lucide-react';

const DoubtChatbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "received",
      message: "Hello! I'm your AI tutor. How can I help you today?",
      timestamp: "10:30 AM",
      sender: "AI Tutor"
    },
    {
      id: 2,
      type: "sent",
      message: "Can you help me understand calculus derivatives?",
      timestamp: "10:31 AM",
      sender: "You"
    },
    {
      id: 3,
      type: "received",
      message: "Of course! Derivatives represent the rate of change of a function. The basic rule is that the derivative of x^n is n*x^(n-1). For example, the derivative of x² is 2x. Would you like me to explain with more examples?",
      timestamp: "10:32 AM",
      sender: "AI Tutor"
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "Explain quadratic equations",
    "What are Newton's laws?",
    "Help with organic chemistry",
    "Probability and statistics",
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: Date.now(),
        type: "sent",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        sender: "You"
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage("");
      setIsTyping(true);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          type: "received",
          message: "I understand your question. Let me help you with that. This is a simulated response for demonstration purposes.",
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          sender: "AI Tutor"
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const sendQuickQuestion = (question) => {
    setNewMessage(question);
    sendMessage();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Doubt Resolution
          </h1>
          <p className="text-gray-600 text-lg">Get instant help with your academic questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 h-[650px] flex flex-col overflow-hidden">
              {/* Chat Header */}
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-lg">AI Tutor</div>
                  <div className="text-sm text-blue-100 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Online & Ready to Help
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-5 py-3 rounded-2xl shadow-sm ${
                      message.type === 'sent' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white ml-12' 
                        : 'bg-white text-gray-800 border border-gray-100 mr-12'
                    }`}>
                      <div className="flex items-start mb-1">
                        {message.type === 'sent' ? (
                          <User className="w-4 h-4 mr-2 mt-0.5 opacity-80" />
                        ) : (
                          <Bot className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                        )}
                        <div className="text-sm leading-relaxed">{message.message}</div>
                      </div>
                      <div className={`text-xs mt-2 ${
                        message.type === 'sent' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-5 py-3 rounded-2xl shadow-sm border border-gray-100 mr-12">
                      <div className="flex items-center space-x-1">
                        <Bot className="w-4 h-4 mr-2 text-blue-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="p-6 bg-white/80 backdrop-blur-sm border-t border-gray-100">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your question here..."
                    className="flex-1 px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 placeholder-gray-400"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center transform hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                Quick Questions
              </h3>
              <div className="space-y-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => sendQuickQuestion(question)}
                    className="w-full text-left p-4 text-sm bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-xl transition-all duration-200 border border-blue-100/50 hover:shadow-md transform hover:scale-105"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Help Topics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Book className="w-5 h-5 mr-2 text-blue-600" />
                Popular Topics
              </h3>
              <div className="space-y-4">
                {[
                  { topic: "Mathematics", count: 1234, color: "bg-blue-500" },
                  { topic: "Physics", count: 987, color: "bg-purple-500" },
                  { topic: "Chemistry", count: 765, color: "bg-green-500" },
                  { topic: "Biology", count: 543, color: "bg-orange-500" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50/80 transition-colors">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                      <span className="text-gray-700 font-medium">{item.topic}</span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100/80 px-3 py-1 rounded-full">
                      {item.count.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Tips */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-green-600" />
                Study Tips
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start p-3 rounded-xl bg-yellow-50/80 border border-yellow-100">
                  <Zap className="w-5 h-5 mt-0.5 mr-3 text-yellow-500 flex-shrink-0" />
                  <span>Break complex problems into smaller steps</span>
                </div>
                <div className="flex items-start p-3 rounded-xl bg-blue-50/80 border border-blue-100">
                  <Book className="w-5 h-5 mt-0.5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>Practice regularly to strengthen concepts</span>
                </div>
                <div className="flex items-start p-3 rounded-xl bg-green-50/80 border border-green-100">
                  <Target className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                  <span>Focus on understanding, not memorizing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtChatbox;
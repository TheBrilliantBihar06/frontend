// src/components/DoubtChatbox.js
import React, { useState } from 'react';
import { Send, Zap, Book, Target } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Doubt Resolution</h1>
          <p className="text-gray-600">Get instant help with your academic questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  AI
                </div>
                <div>
                  <div className="font-semibold text-gray-800">AI Tutor</div>
                  <div className="text-sm text-green-600">Online</div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === 'sent' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="text-sm">{message.message}</div>
                      <div className={`text-xs mt-1 ${
                        message.type === 'sent' ? 'text-blue-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your question here..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
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
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Questions</h3>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => sendQuickQuestion(question)}
                    className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Help Topics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Topics</h3>
              <div className="space-y-3">
                {[
                  { topic: "Mathematics", count: 1234 },
                  { topic: "Physics", count: 987 },
                  { topic: "Chemistry", count: 765 },
                  { topic: "Biology", count: 543 }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{item.topic}</span>
                    <span className="text-sm text-gray-500">{item.count.toLocaleString()} doubts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Study Tips</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <Zap className="w-4 h-4 mt-0.5 mr-2 text-yellow-500" />
                  <span>Break complex problems into smaller steps</span>
                </div>
                <div className="flex items-start">
                  <Book className="w-4 h-4 mt-0.5 mr-2 text-blue-500" />
                  <span>Practice regularly to strengthen concepts</span>
                </div>
                <div className="flex items-start">
                  <Target className="w-4 h-4 mt-0.5 mr-2 text-green-500" />
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
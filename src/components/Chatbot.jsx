// import React, { useState, useRef, useEffect } from "react";
// import { Send, Trash2, MessageCircle, X, Bot, User } from "lucide-react";
// import axios from "axios";

// export default function Chatbot() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//                 { text: "Hello! Welcome to BB Helpdesk. How can I assist you today?", sender: "bot", timestamp: Date.now() }
//   ]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [hasNewMessage, setHasNewMessage] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;
    
//     const userMessage = { text: input, sender: "user", timestamp: Date.now() };
//     setMessages([...messages, userMessage]);
//     const currentInput = input;
//     setInput("");
//     setIsTyping(true);

//     try {
//       const res = await axios.post("http://localhost:5000/api/chat", {
//         message: currentInput,
//       });
//       const botMessage = { text: res.data.reply, sender: "bot", timestamp: Date.now() };
//       setMessages((prev) => [...prev, botMessage]);
//       setIsTyping(false);
      
//       // Show notification if chat is closed
//       if (!isOpen) {
//         setHasNewMessage(true);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setIsTyping(false);
//       // Add error message to chat
//       const errorMessage = { text: "Sorry, I'm having trouble connecting. Please try again.", sender: "bot", timestamp: Date.now() };
//       setMessages((prev) => [...prev, errorMessage]);
//     }
//   };

//   const clearChat = () => {
//     setMessages([
//       { text: "Hello! Welcome to BB Helpdesk. How can I assist you today?", sender: "bot", timestamp: Date.now() }
//     ]);
//   };

//   const openChat = () => {
//     setIsOpen(true);
//     setHasNewMessage(false);
//   };

//   const closeChat = () => {
//     setIsOpen(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   const formatTime = (timestamp) => {
//     return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       {!isOpen && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <button
//             onClick={openChat}
//             className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce-slow"
//           >
//             <MessageCircle size={28} className="transition-transform duration-300 group-hover:rotate-12" />
            
//             {/* Notification Badge */}
//             {hasNewMessage && (
//               <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse shadow-lg">
//                 1
//               </div>
//             )}
            
//             {/* Ripple Effect */}
//             <div className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping"></div>
            
//             {/* Tooltip */}
//             <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//               Chat with BB Helpdesk
//               <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
//             </div>
//           </button>
//         </div>
//       )}

//       {/* Chat Interface */}
//       {isOpen && (
//         <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 shadow-2xl rounded-2xl flex flex-col overflow-hidden z-50 animate-slide-in">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-lg">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <MessageCircle size={20} />
//               </div>
//               <div>
//                 <h2 className="font-bold text-lg">BB Helpdesk</h2>
//                 <div className="flex items-center space-x-1">
//                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                   <span className="text-xs text-blue-100">Online</span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={clearChat}
//                 className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 transform hover:scale-110 hover:rotate-12"
//                 title="Clear Chat"
//               >
//                 <Trash2 size={18} />
//               </button>
//               <button
//                 onClick={closeChat}
//                 className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 transform hover:scale-110 hover:rotate-90"
//                 title="Close Chat"
//               >
//                 <X size={18} />
//               </button>
//             </div>
//           </div>

//           {/* Messages Container */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex items-end space-x-2 animate-fade-in ${
//                   msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
//                 }`}
//               >
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
//                   msg.sender === "user" 
//                     ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white" 
//                     : "bg-gradient-to-br from-purple-500 to-purple-600 text-white"
//                 }`}>
//                   {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
//                 </div>
//                 <div
//                   className={`group relative max-w-xs px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md"
//                       : "bg-white text-slate-800 border border-slate-200 rounded-bl-md"
//                   }`}
//                 >
//                   <div className="text-sm leading-relaxed">{msg.text}</div>
//                   <div className={`text-xs mt-1 opacity-0 group-hover:opacity-70 transition-opacity ${
//                     msg.sender === "user" ? "text-blue-100" : "text-slate-500"
//                   }`}>
//                     {formatTime(msg.timestamp)}
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex items-end space-x-2 animate-fade-in">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-md">
//                   <Bot size={16} />
//                 </div>
//                 <div className="bg-white text-slate-800 border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-lg">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                     <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-4 bg-white border-t border-slate-200">
//             <div className="flex items-end space-x-3">
//               <div className="flex-1 relative">
//                 <textarea
//                   className="w-full px-4 py-3 border border-slate-300 rounded-2xl text-slate-800 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Type your message..."
//                   rows="1"
//                   style={{ minHeight: '48px', maxHeight: '120px' }}
//                 />
//               </div>
//               <button
//                 onClick={sendMessage}
//                 disabled={!input.trim() || isTyping}
//                 className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
//               >
//                 <Send size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slide-in {
//           from {
//             opacity: 0;
//             transform: translateY(100%) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
        
//         @keyframes bounce-slow {
//           0%, 20%, 53%, 80%, 100% {
//             transform: translateY(0);
//           }
//           40%, 43% {
//             transform: translateY(-8px);
//           }
//           70% {
//             transform: translateY(-4px);
//           }
//           90% {
//             transform: translateY(-2px);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }
        
//         .animate-slide-in {
//           animation: slide-in 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         .animate-bounce-slow {
//           animation: bounce-slow 3s infinite;
//         }
        
//         .hover\\:shadow-3xl:hover {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </>
//   );
// }










// import React, { useState, useRef, useEffect } from "react";
// import { Send, Trash2, MessageCircle, X, Bot, User } from "lucide-react";
// import axios from "axios";

// export default function Chatbot() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     { text: "Hello! Welcome to BB Helpdesk. How can I assist you today?", sender: "bot", timestamp: Date.now() }
//   ]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [hasNewMessage, setHasNewMessage] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { text: input, sender: "user", timestamp: Date.now() };
//     setMessages([...messages, userMessage]);
//     const currentInput = input;
//     setInput("");
//     setIsTyping(true);

//     try {
//       // --- FIX #1: Updated the URL to match your Node.js route ---
//       const res = await axios.post("http://localhost:5000/api/chatbot/ask", {
//         // --- FIX #2: Changed the key from 'message' to 'question' ---
//         question: currentInput,
//       });

//       // --- FIX #3: Changed the response key from 'reply' to 'answer' ---
//       const botMessage = { text: res.data.answer, sender: "bot", timestamp: Date.now() };
//       setMessages((prev) => [...prev, botMessage]);
//       setIsTyping(false);

//       // Show notification if chat is closed
//       if (!isOpen) {
//         setHasNewMessage(true);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setIsTyping(false);
//       // Add error message to chat
//       const errorMessage = { text: "Sorry, I'm having trouble connecting. Please try again.", sender: "bot", timestamp: Date.now() };
//       setMessages((prev) => [...prev, errorMessage]);
//     }
//   };

//   const clearChat = () => {
//     setMessages([
//       { text: "Hello! Welcome to BB Helpdesk. How can I assist you today?", sender: "bot", timestamp: Date.now() }
//     ]);
//   };

//   const openChat = () => {
//     setIsOpen(true);
//     setHasNewMessage(false);
//   };

//   const closeChat = () => {
//     setIsOpen(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   const formatTime = (timestamp) => {
//     return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       {!isOpen && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <button
//             onClick={openChat}
//             className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce-slow"
//           >
//             <MessageCircle size={28} className="transition-transform duration-300 group-hover:rotate-12" />
            
//             {/* Notification Badge */}
//             {hasNewMessage && (
//               <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse shadow-lg">
//                 1
//               </div>
//             )}
            
//             {/* Ripple Effect */}
//             <div className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping"></div>
            
//             {/* Tooltip */}
//             <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//               Chat with BB Helpdesk
//               <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
//             </div>
//           </button>
//         </div>
//       )}

//       {/* Chat Interface */}
//       {isOpen && (
//         <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 shadow-2xl rounded-2xl flex flex-col overflow-hidden z-50 animate-slide-in">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-lg">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <MessageCircle size={20} />
//               </div>
//               <div>
//                 <h2 className="font-bold text-lg">BB Helpdesk</h2>
//                 <div className="flex items-center space-x-1">
//                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                   <span className="text-xs text-blue-100">Online</span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={clearChat}
//                 className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 transform hover:scale-110 hover:rotate-12"
//                 title="Clear Chat"
//               >
//                 <Trash2 size={18} />
//               </button>
//               <button
//                 onClick={closeChat}
//                 className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 transform hover:scale-110 hover:rotate-90"
//                 title="Close Chat"
//               >
//                 <X size={18} />
//               </button>
//             </div>
//           </div>

//           {/* Messages Container */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex items-end space-x-2 animate-fade-in ${
//                   msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
//                 }`}
//               >
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
//                   msg.sender === "user" 
//                     ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white" 
//                     : "bg-gradient-to-br from-purple-500 to-purple-600 text-white"
//                 }`}>
//                   {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
//                 </div>
//                 <div
//                   className={`group relative max-w-xs px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md"
//                       : "bg-white text-slate-800 border border-slate-200 rounded-bl-md"
//                   }`}
//                 >
//                   <div className="text-sm leading-relaxed">{msg.text}</div>
//                   <div className={`text-xs mt-1 opacity-0 group-hover:opacity-70 transition-opacity ${
//                     msg.sender === "user" ? "text-blue-100" : "text-slate-500"
//                   }`}>
//                     {formatTime(msg.timestamp)}
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex items-end space-x-2 animate-fade-in">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-md">
//                   <Bot size={16} />
//                 </div>
//                 <div className="bg-white text-slate-800 border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-lg">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                     <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-4 bg-white border-t border-slate-200">
//             <div className="flex items-end space-x-3">
//               <div className="flex-1 relative">
//                 <textarea
//                   className="w-full px-4 py-3 border border-slate-300 rounded-2xl text-slate-800 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Type your message..."
//                   rows="1"
//                   style={{ minHeight: '48px', maxHeight: '120px' }}
//                 />
//               </div>
//               <button
//                 onClick={sendMessage}
//                 disabled={!input.trim() || isTyping}
//                 className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
//               >
//                 <Send size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slide-in {
//           from {
//             opacity: 0;
//             transform: translateY(100%) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
        
//         @keyframes bounce-slow {
//           0%, 20%, 53%, 80%, 100% {
//             transform: translateY(0);
//           }
//           40%, 43% {
//             transform: translateY(-8px);
//           }
//           70% {
//             transform: translateY(-4px);
//           }
//           90% {
//             transform: translateY(-2px);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }
        
//         .animate-slide-in {
//           animation: slide-in 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         .animate-bounce-slow {
//           animation: bounce-slow 3s infinite;
//         }
        
//         .hover\\:shadow-3xl:hover {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import { Send, Trash2, MessageCircle, X, Bot, User } from "lucide-react";

export default function ProfessionalChatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Brilliant Bihar Helpdesk. How can I assist you today?", sender: "bot", timestamp: Date.now() }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user", timestamp: Date.now() };
    setMessages([...messages, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/api/chatbot/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: currentInput,
        }),
      });

      const data = await res.json();
      const botMessage = { text: data.answer, sender: "bot", timestamp: Date.now() };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      if (!isOpen) {
        setHasNewMessage(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setIsTyping(false);
      const errorMessage = { text: "Sorry, I'm having trouble connecting. Please try again.", sender: "bot", timestamp: Date.now() };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const clearChat = () => {
    setMessages([
      { text: "Hello! Welcome to BB Helpdesk. How can I assist you today?", sender: "bot", timestamp: Date.now() }
    ]);
  };

  const openChat = () => {
    setIsOpen(true);
    setHasNewMessage(false);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Professional Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={openChat}
            className="relative group bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={24} className="transition-transform duration-300" />
            
            {/* Professional Notification Badge */}
            {hasNewMessage && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                1
              </div>
            )}
            
            {/* Subtle Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
              Need Help? Chat with us
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
            </div>
          </button>
        </div>
      )}

      {/* Professional Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 h-[600px] bg-white border border-slate-200 shadow-2xl rounded-lg flex flex-col overflow-hidden z-50">
          {/* Clean Professional Header */}
          <div className="bg-white border-b border-slate-200 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900 text-lg">BB Helpdesk</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">Online • Typically responds in minutes</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={clearChat}
                className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200"
                title="Clear conversation"
              >
                <Trash2 size={18} className="text-slate-600" />
              </button>
              <button
                onClick={closeChat}
                className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200"
                title="Close chat"
              >
                <X size={18} className="text-slate-600" />
              </button>
            </div>
          </div>

          {/* Professional Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start space-x-3 ${
                  msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === "user" 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-800 text-white"
                }`}>
                  {msg.sender === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className="flex-1 max-w-[280px]">
                  <div
                    className={`px-4 py-3 rounded-lg shadow-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white ml-auto rounded-br-md"
                        : "bg-white text-slate-800 border border-slate-200 rounded-bl-md"
                    }`}
                  >
                    <div className="text-sm leading-relaxed">{msg.text}</div>
                  </div>
                  <div className={`text-xs mt-2 ${
                    msg.sender === "user" ? "text-right text-slate-500" : "text-slate-500"
                  }`}>
                    {formatTime(msg.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Professional Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0">
                  <Bot size={14} />
                </div>
                <div className="bg-white text-slate-800 border border-slate-200 rounded-lg rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Professional Input Area */}
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <textarea
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  rows="1"
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
                title="Send message"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-2 text-xs text-slate-500 text-center">
              Press Enter to send • Shift + Enter for new line
            </div>
          </div>
        </div>
      )}

      {/* Professional Status Indicator */}
      {isOpen && (
        <div className="fixed bottom-2 right-10 text-xs text-slate-500 bg-white px-2 py-1 rounded shadow-sm">
          Powered by BB Helpdesk
        </div>
      )}
    </>
  );
}
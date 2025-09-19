import React, { useState, useEffect, useRef } from 'react';

const DoubtChatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const studentChatEndRef = useRef(null);
  const teacherChatEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat when new messages are added.
  useEffect(() => {
    studentChatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    teacherChatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate a teacher's reply after a student sends a message.
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'student') {
      setTimeout(() => {
        const teacherReply = {
          id: Date.now() + 1,
          sender: 'teacher',
          text: 'Hello! I saw your question. For Linear Algebra problem 2, focus on the row reduction to echelon form. It should help you find the solution!',
        };
        setMessages((prevMessages) => [...prevMessages, teacherReply]);
      }, 2000); // Simulate a 2-second delay for the teacher's response.
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Simulate sending a message with an optional image
    const newMessage = {
      id: Date.now(),
      sender: 'student',
      text: inputMessage,
      image: Math.random() > 0.8 ? 'https://placehold.co/400x200/cccccc/333333?text=Uploaded+Image' : null,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage('');
  };

  const handleImageUpload = () => {
    // Simulate image upload by adding a new message with an image and no text.
    const newMessageWithImage = {
      id: Date.now(),
      sender: 'student',
      text: null,
      image: 'https://placehold.co/400x200/cccccc/333333?text=Uploaded+Image',
    };
    setMessages((prevMessages) => [...prevMessages, newMessageWithImage]);
  };

  const studentMessages = messages.filter(msg => msg.sender === 'student');
  const teacherMessages = messages.filter(msg => msg.sender === 'teacher');

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 p-2 sm:p-4 gap-4">
      
      {/* Student Chatbox */}
      <div className="flex-1 flex flex-col w-full md:w-1/2 bg-white rounded-xl shadow-lg p-2 sm:p-4">
        <div className="text-center pb-2 border-b-2 mb-2">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">Your Doubts</h2>
        </div>
        
        {/* Chat Area for Student */}
        <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4">
          {studentMessages.map((msg) => (
            <div
              key={msg.id}
              className="flex justify-end"
            >
              <div
                className="max-w-[85%] sm:max-w-[70%] lg:max-w-[60%] rounded-xl shadow-md p-3 sm:p-4 bg-blue-500 text-white rounded-br-none"
              >
                <div className="text-xs sm:text-sm font-bold mb-1">You</div>
                {msg.text && <p className="text-sm sm:text-base">{msg.text}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="Uploaded"
                    className="mt-2 rounded-lg w-full max-h-40 sm:max-h-60 object-cover"
                  />
                )}
              </div>
            </div>
          ))}
          <div ref={studentChatEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex-shrink-0 flex items-center gap-2 pt-4 border-t-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Type your doubt..."
            className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          />
          <button
            onClick={handleImageUpload}
            className="px-3 sm:px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 4-4v5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={handleSendMessage}
            className="px-3 sm:px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Send
          </button>
        </div>
      </div>

      {/* Teacher Chatbox */}
      <div className="flex-1 flex flex-col w-full md:w-1/2 bg-white rounded-xl shadow-lg p-2 sm:p-4">
        <div className="text-center pb-2 border-b-2 mb-2">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">Teacher Replies</h2>
        </div>
        
        {/* Chat Area for Teacher */}
        <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4">
          {teacherMessages.map((msg) => (
            <div
              key={msg.id}
              className="flex justify-start"
            >
              <div
                className="max-w-[85%] sm:max-w-[70%] lg:max-w-[60%] rounded-xl shadow-md p-3 sm:p-4 bg-gray-300 text-gray-800 rounded-bl-none"
              >
                <div className="text-xs sm:text-sm font-bold mb-1">Teacher</div>
                {msg.text && <p className="text-sm sm:text-base">{msg.text}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="Uploaded"
                    className="mt-2 rounded-lg w-full max-h-40 sm:max-h-60 object-cover"
                  />
                )}
              </div>
            </div>
          ))}
          <div ref={teacherChatEndRef} />
        </div>

        {/* Disabled Input Area for Teacher */}
        <div className="flex-shrink-0 flex items-center gap-2 pt-4 border-t-2 opacity-50 cursor-not-allowed">
          <input
            type="text"
            placeholder="Awaiting teacher reply..."
            disabled
            className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg"
          />
          <button className="px-3 sm:px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 4-4v5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="px-3 sm:px-4 py-2 bg-gray-200 text-gray-700 text-sm sm:text-base rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubtChatbox;

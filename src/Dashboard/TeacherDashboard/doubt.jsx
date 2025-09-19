import React from "react";

const Doubts = () => {
  const doubts = [
    {
      student: "Anjali Sharma",
      class: "Physics 101 - Batch A",
      question:
        "Sir, I am confused about the Heisenberg Uncertainty Principle. Could you please provide another example?",
    },
    {
      student: "Rohan Verma",
      class: "Advanced Physics 302",
      question:
        "In the notes for Schrödinger's equation, what does the Hamiltonian operator represent physically?",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800">
        Pending Student Doubts
      </h2>
      <div className="mt-5 space-y-5">
        {doubts.map((doubt, index) => (
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            key={index}
          >
            <div className="text-base mb-2">
              <strong>From:</strong> {doubt.student}{" "}
              <span className="text-gray-500 text-sm">
                ({doubt.class})
              </span>
            </div>
            <p className="my-2 italic text-gray-800">"{doubt.question}"</p>
            <div className="mt-4">
              <textarea
                placeholder="Type your reply here..."
                className="w-full p-3 border border-gray-300 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-3 text-gray-900" // Added text-gray-900 here
                rows="3"
              ></textarea>
              <button className="py-2 px-5 rounded-md font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300">
                Send Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doubts;
import React, { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Brilliant Bihar?",
    a: "Brilliant Bihar is an educational initiative that provides free online coaching for 200 selected students every year to prepare for UPSC and BPSC exams under the guidance of experienced faculties.",
  },
  {
    q: "Who can apply for the entrance test?",
    a: "Any student from Bihar who has completed their graduation (or is in the final year) and is interested in preparing for UPSC or BPSC examinations is eligible to apply.",
  },
  {
    q: "How many students are selected each year?",
    a: "A total of 200 students will be selected through a transparent entrance test process.",
  },
  {
    q: "What does the scholarship cover?",
    a: "The scholarship includes 100% free online coaching, study materials, test series, doubt-clearing sessions, and continuous academic support.",
  },
  {
    q: "What resources will I get apart from live classes?",
    a: "Students will receive digital study materials, practice question banks, mock tests, and recorded classes for revision.",
  },
  {
    q: "How can I apply?",
    a: "You can register online through the official Brilliant Bihar website (application form will be made available) and download the admit card for the online entrance test.",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="mb-4">
      <div className="bg-gray-800 rounded-xl border border-gray-700 hover:border-orange-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-750 transition-colors duration-200"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold text-white flex-1">
            {item.q}
          </span>
          <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200">
            {isOpen ? (
              <Minus className="w-4 h-4 text-white" />
            ) : (
              <Plus className="w-4 h-4 text-white" />
            )}
          </div>
        </button>
        
        <div
          className={`transition-all duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-6 pb-6">
            <div className="w-full h-px bg-gray-600 mb-4"></div>
            <p className="text-gray-300 leading-relaxed bg-gray-900/50 p-4 rounded-lg border-l-4 border-blue-400">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-16" style={{ backgroundColor: "#111827" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Clean Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          {/* <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-6 rounded-full"></div> */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about our scholarship program and entrance process
          </p>
        </div>

        {/* FAQ Container */}
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              item={item}
              isOpen={openIndexes.includes(idx)}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-800 p-6 rounded-2xl border border-gray-600 shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <MessageCircle className="w-6 h-6 text-orange-500" />
              <span className="text-lg font-semibold text-white">
                Still have questions?
              </span>
            </div>
            <p className="text-gray-300">
              Write to us at <span className="text-blue-400 font-medium">support@brilliantbihar.org</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
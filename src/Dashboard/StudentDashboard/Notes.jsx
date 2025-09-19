import React from 'react';

// --- Data for the notes ---
// In a real application, you would likely fetch this data from an API.
// The fileLink should point to the path of the file in your `public` directory.
const notesData = [
  {
    id: 1,
    title: 'Advanced Physics: Kinematics',
    description: 'Comprehensive notes covering the principles of motion, vectors, and projectile trajectories. Perfect for exam preparation.',
    fileLink: '/notes/physics-kinematics.pdf', 
  },
  {
    id: 2,
    title: 'Organic Chemistry: Alkanes',
    description: 'Detailed lecture notes on the structure, nomenclature, and reactions of alkanes and cycloalkanes.',
    fileLink: '/notes/chemistry-alkanes.pdf',
  },
  {
    id: 3,
    title: 'Calculus II: Integration Techniques',
    description: 'A complete guide to mastering integration by parts, trigonometric substitution, and partial fractions.',
    fileLink: '/notes/calculus-integration.pdf',
  },
  {
    id: 4,
    title: 'Data Structures Cheatsheet',
    description: 'A quick reference guide covering arrays, linked lists, stacks, queues, trees, and graphs with time complexities.',
    fileLink: '/notes/data-structures-cheatsheet.pdf',
  },
  {
    id: 5,
    title: 'History: The Mughal Empire',
    description: 'In-depth analysis of the rise and fall of the Mughal Empire in India, focusing on key rulers and cultural impact.',
    fileLink: '/notes/history-mughal-empire.pdf',
  },
  {
    id: 6,
    title: 'Literary Theory: Post-Structuralism',
    description: 'An introduction to the core concepts of post-structuralism, featuring analysis of Derrida and Foucault.',
    fileLink: '/notes/literary-theory.pdf',
  },
];

// --- SVG Icon for the download button ---
const DownloadIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);


// --- The Main Notes Component ---
export default function Notes() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Course Notes & Resources</h1>
            <p className="mt-2 text-gray-600">Download lecture notes, cheatsheets, and study guides.</p>
        </div>

        {/* Responsive Grid for Note Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {notesData.map((note) => (
            <div 
              key={note.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{note.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {note.description}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 border-t border-gray-100">
                 <a
                    href={note.fileLink}
                    download // This attribute triggers the file download
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                 >
                    <DownloadIcon />
                    <span>Download</span>
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

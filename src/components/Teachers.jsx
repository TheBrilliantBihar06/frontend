

import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/UpendraAnmol.png';
import CBP from '../assets/CBP.png';
import Rajiv from '../assets/Rajiv.png';


export function TeachersSection() {
  const teachers = [
    {
      name: "Dr. C.B.P Srivastava",
      designation: "Director & Senior Faculty",
      specialist: "UPSC Civil Services Expert",
      image: CBP,
    },
    {
      name: "Upendra Anmol",
      designation: "Senior Faculty",
      specialist: "Current Affairs & Polity",
      image: logo,
    },
    {
      name: "Rajiv Ray",
      designation: "Faculty Head",
      specialist: "History & Culture",
      image: Rajiv,
    },
  ];


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  return (
    <section className="bg-gradient-to-b from-[#5d5d5d] to-[#7d7d7d] py-16 px-4 sm:px-6 md:px-16 text-white">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
         <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
  Meet the Teachers <span
  className="bg-gradient-to-r from-[#3761d3] to-[#1e40af] bg-clip-text text-transparent"
  style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
>
  Empowering Brilliant Bihar
</span>
</h2>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              // --- HOVER EFFECT REMOVED ---
              // The 'group' className and 'whileHover' prop have been removed.
              className="relative h-96 bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-transparent"
              variants={itemVariants}
            >
              {/* --- Image (Layer 1) --- */}
              <img
                src={teacher.image}
                alt={teacher.name}
                // --- HOVER EFFECT REMOVED ---
                // The 'group-hover:scale-110' class is gone.
                className="absolute inset-0 w-full h-full object-cover"
              />


              {/* --- Gradient Overlay (Layer 2) --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>


              {/* --- Text Content (Layer 3) --- */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-bold">{teacher.name}</h3>
                <p className="text-orange-300 font-medium text-sm">{teacher.designation}</p>


                {/* --- Content is now always visible --- */}
                {/* --- HOVER EFFECT REMOVED --- */}
                {/* Classes that hid this content are gone. It's now statically visible. */}
                <div className="mt-4">
                  {/* Specialist Info */}
                  <div className="flex items-center p-3 bg-white/10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-200 text-sm">{teacher.specialist}</span>
                  </div>
                </div>
              </div>


              {/* --- Badge (Top Layer) --- */}
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                  Expert Faculty
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


export default TeachersSection;




import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TeachersSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const teachers = [
    {
      name: "Anita Sharma",
      subject: "Data Science Mentor",
      college: "IIT Delhi",
      exp: "8+ years exp",
      image: "https://images.unsplash.com/photo-1494790108755-2616c179b5bb?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Vikram Rao",
      subject: "Full Stack Coding Expert",
      college: "IIT Bombay",
      exp: "10+ years exp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Priya Menon",
      subject: "AI & Machine Learning Coach",
      college: "IISc Bangalore",
      exp: "9+ years exp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Rahul Gupta",
      subject: "Cybersecurity Specialist",
      college: "NIT Trichy",
      exp: "12+ years exp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sneha Patel",
      subject: "GATE Exam Strategist",
      college: "IIT Kanpur",
      exp: "7+ years exp",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Karan Singh",
      subject: "Cloud Computing Mentor",
      college: "BITS Pilani",
      exp: "11+ years exp",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
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

  // Auto-scroll logic with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth + 24; // card width + gap
        scrollRef.current.scrollBy({
          left: cardWidth * 3, // slide 3 cards
          behavior: "smooth",
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 10
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Manual scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
      scrollRef.current.scrollBy({ left: -cardWidth * 3, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
      scrollRef.current.scrollBy({ left: cardWidth * 3, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#1d2533] py-16 px-6 md:px-16 text-white overflow-hidden">
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Dots with Gradient Glow */}
        <motion.div
          className="flex justify-center space-x-3 mb-8 relative"
          variants={itemVariants}
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-orange-400 relative"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-orange-400/50 rounded-full blur-md" />
          </motion.div>
          <motion.div
            className="w-3 h-3 rounded-full bg-emerald-400 relative"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-emerald-400/50 rounded-full blur-md" />
          </motion.div>
          <motion.div
            className="w-3 h-3 rounded-full bg-blue-400 relative"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-blue-400/50 rounded-full blur-md" />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          variants={itemVariants}
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
        >
          Meet the <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Teachers</span> Empowering Brilliant Bihar
        </motion.h2>

    

        {/* Teachers Auto-Slider */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 px-2 scroll-smooth overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-gray-800/80 border border-orange-500/50 rounded-xl shadow-md flex-shrink-0 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 69, 0, 0.3)" }}
              >
                {/* Teacher Image */}
                <motion.div
                  className="h-60 rounded-t-xl overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Card Info */}
                <div className="p-4 text-center">
                  <motion.span
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full mb-3"
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {teacher.exp}
                  </motion.span>
                  <h3 className="text-lg font-semibold text-white">{teacher.name}</h3>
                  <p className="text-gray-100 text-sm">{teacher.subject}</p>
                  <p className="text-white font-bold text-sm">{teacher.college}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Controls */}
          <motion.button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-orange-400 p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all"
            onClick={scrollLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft size={20} />
          </motion.button>
          <motion.button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/80 text-orange-400 p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all"
            onClick={scrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyJoinUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for the section container - Made faster
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4, // Reduced from 0.8
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1, // Reduced from 0.2
      },
    },
  };

  // Animation variants for each point - Made faster
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3, // Reduced from 0.6
        ease: "easeOut",
        type: "spring",
        stiffness: 150, // Increased from 100
      },
    },
  };

  // Animation variants for letters in the heading - Made faster
  const letterVariants = {
    hidden: { opacity: 0, y: 30, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.2, ease: "easeOut", type: "spring", damping: 20 }, // Reduced duration from 0.4, increased damping
    },
  };

  // Animation for icons with bounce effect - Made faster
  const iconVariants = {
    rest: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.15, type: "spring" }, // Reduced from 0.3
    },
    pulse: {
      scale: [1, 1.15, 1],
      opacity: [1, 0.85, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }, // Reduced from 2
    },
  };

  // Background animation - Made faster
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }, // Reduced from 1.5
    },
  };

  // Split heading text for animation
  const headingText = "Why Join Us";
  const headingWords = headingText.split(" ");
  const joinUsIndex = headingWords.indexOf("Join");

  const points = [
    {
      icon: "👨‍🏫",
      title: "Best Teachers",
      description: "Top-tier faculty with exceptional expertise in civil services preparation",
    },
    {
      icon: "👥",
      title: "Exclusive Mentorship Ratio",
      description: "Every 25 students get 1 dedicated mentor for personalized attention",
    },
    {
      icon: "🏅",
      title: "Current IAS/IPS Mentors",
      description: "Learn directly from serving IAS and IPS officers as your mentors",
    },
    {
      icon: "🕐",
      title: "24/7 Live Doubt Sessions",
      description: "Round-the-clock live doubt clearing sessions for uninterrupted learning",
    },
    {
      icon: "🤖",
      title: "Live Chatbot Support",
      description: "Instant AI-powered assistance for quick queries and course navigation",
    },
    {
      icon: "⚡",
      title: "Under 1 Hour Doubt Resolution",
      description: "Guaranteed doubt solving within 1 hour with comprehensive video explanations",
    },
    {
      icon: "📱",
      title: "Interactive Learning Platform",
      description: "Modern digital platform with seamless user experience and mobile accessibility",
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Detailed progress tracking and performance analysis to optimize your preparation",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full bg-[#111826] py-12 px-6 md:px-16 text-white"
      variants={backgroundVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          {headingWords.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  variants={letterVariants}
                  className={
                    wordIndex >= joinUsIndex
                      ? "bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  {letter}
                </motion.span>
              ))}
              {wordIndex < headingWords.length - 1 && " "}
            </span>
          ))}
        </motion.h2>
        <motion.p
          className="text-gray-300 leading-relaxed text-base md:text-lg text-center mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          We combine modern online learning with Bihar's educational excellence tradition, providing you with the perfect blend of innovative teaching methods and time-tested academic values to ensure your success in civil services.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Content - 4 Points */}
          <motion.div className="flex-1 space-y-6" variants={itemVariants}>
            {points.slice(0, 4).map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/80 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 16px rgba(255, 69, 0, 0.2)",
                  transition: { type: "spring", stiffness: 300 }, // Increased stiffness for faster hover
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0"
                  variants={iconVariants}
                  initial="rest"
                  animate="pulse"
                  whileHover="hover"
                >
                  <span className="text-white font-bold text-lg">{point.icon}</span>
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-gray-300 text-sm">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Content - 4 Points */}
          <motion.div className="flex-1 space-y-6" variants={itemVariants}>
            {points.slice(4).map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/80 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 16px rgba(255, 69, 0, 0.2)",
                  transition: { type: "spring", stiffness: 300 }, // Increased stiffness for faster hover
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0"
                  variants={iconVariants}
                  initial="rest"
                  animate="pulse"
                  whileHover="hover"
                >
                  <span className="text-white font-bold text-lg">{point.icon}</span>
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-gray-300 text-sm">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhyJoinUs;
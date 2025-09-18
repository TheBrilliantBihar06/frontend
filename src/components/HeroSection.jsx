import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Import your image - adjust the path according to your project structure
import mainImage from '../assets/main.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  // Animation variants for Framer Motion
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
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${mainImage})`,
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        {/* Responsive gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/75 to-gray-900/80 sm:from-gray-900/70 sm:via-gray-800/70 sm:to-gray-900/70"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-[95%] xs:max-w-[90%] sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto px-2 xs:px-3 sm:px-6 lg:px-8 text-center py-8 xs:py-10 sm:py-16 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Dots */}
        <motion.div
          className="flex justify-center space-x-1 xs:space-x-2 sm:space-x-3 mb-3 xs:mb-4 sm:mb-6"
          variants={itemVariants}
        >
          <motion.div
            className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <motion.div
            className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
          />
          <motion.div
            className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wider xs:tracking-widest text-red-400 mb-2 xs:mb-3 sm:mb-4 px-1 xs:px-2"
          variants={itemVariants}
        >
          Transforming Aspirations into Civil Services Success
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 xs:mb-4 sm:mb-6 leading-tight px-1 xs:px-2"
          variants={itemVariants}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Brilliant Bihar
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 max-w-[85%] xs:max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto mb-3 xs:mb-4 sm:mb-6 leading-relaxed px-1 xs:px-2 sm:px-4"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}
        >
          Welcome to Brilliant Bihar, the trusted institute dedicated to guiding UPSC aspirants toward success. With expert faculty, comprehensive courses, and personalized mentorship, we empower students to develop knowledge, confidence, and the right strategy for cracking India's toughest exam. Our mission is to turn aspirations into achievements through quality education and result-oriented learning. Enroll today and take the first step toward your dream career in civil services with Brilliant Bihar – where dedication shapes success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-2 xs:gap-3 sm:gap-4 mt-4 xs:mt-6 sm:mt-8 px-1 xs:px-2 sm:px-0" 
          variants={itemVariants}
        >
          <motion.button
            onClick={() => navigate('/form')}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 xs:px-4 sm:px-6 md:px-8 py-1.5 xs:py-2 sm:py-3 md:py-4 rounded-full font-semibold text-[10px] xs:text-sm sm:text-base md:text-lg shadow-lg w-full sm:w-auto"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Enroll Now
          </motion.button>
          <motion.button
            onClick={() => navigate('/courses')}
            className="border-2 border-red-400 text-red-400 px-3 xs:px-4 sm:px-6 md:px-8 py-1.5 xs:py-2 sm:py-3 md:py-4 rounded-full font-semibold text-[10px] xs:text-sm sm:text-base md:text-lg hover:bg-red-400 hover:text-white transition-all w-full sm:w-auto"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          >
            Explore Courses
          </motion.button>
        </motion.div>
      </motion.div>

      {/* CSS for responsive background handling */}
      <style jsx>{`
        .absolute.inset-0 {
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: scroll;
        }

        @media (max-width: 359px) {
          .absolute.inset-0 {
            background-size: cover;
            background-position: center top;
          }
        }

        @media (min-width: 360px) and (max-width: 640px) {
          .absolute.inset-0 {
            background-size: cover;
            background-position: center center;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .absolute.inset-0 {
            background-size: cover;
            background-position: center center;
            background-attachment: scroll;
          }
        }

        @media (min-width: 1025px) {
          .absolute.inset-0 {
            background-size: cover;
            background-position: center center;
            background-attachment: scroll;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
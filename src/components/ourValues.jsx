import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Inclusiveness",
      text: "At Brilient Bihar, we believe every UPSC aspirant deserves equal opportunity to learn and succeed. Our inclusive environment supports students from diverse backgrounds, ensuring personalized guidance, accessible resources, and a welcoming space where dedication and talent thrive together.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      text: "At Brilient Bihar, integrity is the foundation of our teaching and mentoring. We are committed to honesty, transparency, and ethical guidance, ensuring every UPSC aspirant receives genuine support, fair practices, and a trustworthy path to achieve their civil services dream.",
      icon: "⚖️",
    },
    {
      title: "Excellence",
      text: "Brilient Bihar is committed to excellence in UPSC coaching through quality teaching, innovative strategies, and personalized mentorship. We strive to set the highest standards of learning, helping aspirants achieve outstanding results and shape successful careers in civil services.",
      icon: "🏆",
    },
    {
      title: "Freedom of Inquiry",
      text: "At Brilient Bihar, we encourage freedom of inquiry by promoting curiosity, open discussion, and independent thinking. Our students are empowered to ask questions, explore diverse perspectives, and develop critical insights essential for excelling in the UPSC examination and beyond.",
      icon: "🔍",
    },
    {
      title: "Growth Mindset",
      text: "Brilient Bihar fosters a growth mindset by motivating aspirants to embrace challenges, learn from mistakes, and consistently improve. We nurture resilience, adaptability, and confidence, ensuring every student develops the right attitude to excel in UPSC and achieve long-term success.",
      icon: "📈",
    },
    {
      title: "Courage",
      text: "At Brilient Bihar, we instill courage in UPSC aspirants to overcome challenges, face uncertainty with confidence, and pursue their goals fearlessly. With the right guidance and determination, students develop the strength to succeed against all odds.",
      icon: "💪",
    },
  ];

  // Animation variants - Made faster
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0.1,   // Reduced from 0.3
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,  // Increased from 100
        damping: 12,     // Reduced from 15
        duration: 0.3,   // Reduced from 0.6
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.2, ease: "easeOut" }, // Reduced from 0.4
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 8 }, // Increased stiffness, reduced damping
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }, // Reduced from 2
    },
  };

  // Split heading for animation
  const headingText = "Our Values";
  const headingLetters = headingText.split("");

  return (
    <motion.section
      ref={ref}
      className="w-full bg-gradient-to-b from-[#0a1120] to-[#1a2a44] py-20 px-6 md:px-16 text-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            {headingLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            These core principles guide everything we do at Brilient Bihar, shaping our approach to UPSC coaching and student success.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/20 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)" }}
            >
              <motion.div
                className="text-5xl mb-6"
                variants={cardVariants}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="pulse"
        >
          <a
            href="/courses"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl py-4 px-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white hover:from-blue-600 hover:to-purple-600"
          >
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="text-lg font-bold mb-1">Ready to Begin Your UPSC Journey?</h3>
              <p className="text-blue-100 text-sm">Join thousands of successful aspirants who chose Brilient Bihar</p>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurValues;
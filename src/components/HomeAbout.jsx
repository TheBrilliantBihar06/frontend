
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link
import aboutimage from "../assets/aboutimage.jpg";

const AboutUs = () => {
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
    <section className="relative bg-gradient-to-b from-[#3d3d3d]  to-[#5d5d5d] py-16 px-4 sm:px-6 lg:px-16 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
  About <span
  className="bg-gradient-to-r from-[#2f57c8] to-[#395ed5] bg-clip-text text-transparent"
  style={{ textShadow: "1px 1px 3px rgba(1, 0, 0, 0.5)" }}
>
  Brilliant Bihar
</span>
</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - About Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p className="text-lg text-gray-200 leading-relaxed">
              Brilliant Bihar is a movement to support the aspirations of
              Bihar's youth, not just an effort. We think that a lack of
              resources should never be a barrier to brilliance.
            </motion.p>

            <motion.p className="text-lg text-gray-200 leading-relaxed">
              For this reason, we offer free education, round-the-clock doubt
              resolution, and one-on-one mentoring from IAS, IPS, and other
              government servants who have been in your shoes.
            </motion.p>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-200 text-lg">
                Making ensuring no student ever feels alone on their path is our
                goal. Every stage, from test series and model answers to
                motivating workshops and AI-driven progress tracking, is
                intended to help our students reach their full potential.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutimage}
                alt="About Brilliant Bihar"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a]/50 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#4a4a4a] border border-purple-500/50 rounded-xl p-4 shadow-xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <Award className="w-8 h-8 text-purple-400 mr-3" />
                <div>
                  <div className="text-lg font-bold text-white">
                    Empowering Youth
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-[#4a4a4a] text-white font-bold rounded-full 
               hover:bg-white hover:text-[#4a4a4a] transition-all duration-300 transform hover:scale-105"
            >
              More About Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-purple-400/30 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg rotate-45 opacity-30"></div>
    </section>
  );
};

export default AboutUs;

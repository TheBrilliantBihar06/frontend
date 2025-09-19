import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookMarked, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative font-sans text-white bg-gradient-to-br from-brand-deep-blue via-slate-900 to-black min-h-[90vh] md:min-h-screen flex items-start pt-20 md:pt-28 overflow-hidden">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 bg-[url('/images/grid-texture.png')] opacity-10 animate-slow-pulse"></div>

      <motion.div
        className="container mx-auto px-8 md:px-12 lg:px-20 w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block bg-brand-light-blue/20 border border-brand-light-blue/40 text-brand-gold font-semibold text-xs md:text-sm px-5 py-2 rounded-full uppercase tracking-widest shadow-sm backdrop-blur-sm">
                Ignite Your Aspirations
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight drop-shadow-sm"
              variants={itemVariants}
            >
              Your Journey to{" "}
              <span className="text-brand-gold">Excellence</span> Starts Here
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed"
              variants={itemVariants}
            >
              Brilliant Bihar empowers civil service aspirants with an
              industry-focused curriculum, expert mentorship, and a supportive
              community for UPSC & BPSC success.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-10"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => navigate("/courses")}
                className="group flex items-center justify-center gap-2 bg-brand-gold text-brand-deep-blue font-bold px-8 py-3 md:px-10 md:py-4 rounded-lg shadow-lg w-full sm:w-auto hover:bg-yellow-400/90 transition-all duration-200"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(212,175,55,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                className="group flex items-center justify-center gap-2 border-2 border-brand-light-blue text-slate-200 font-semibold px-8 py-3 md:px-10 md:py-4 rounded-lg w-full sm:w-auto hover:bg-brand-light-blue/20 transition-all duration-200 hover:text-white"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 5px 15px rgba(30,41,59,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <BookMarked className="w-5 h-5 text-slate-400 group-hover:text-brand-gold transition-colors" />
                Our Faculty
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Full Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative w-[95%] sm:w-[500px] md:w-[580px] lg:w-[620px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 via-transparent to-transparent opacity-70 animate-pulse"></div>

              {/* Wide Classroom Image */}
              <img
                src="/images/aspirant-professional.jpg"
                alt="Civil services aspirants studying together"
                className="w-full h-full object-cover object-center rounded-2xl"
              />

              {/* Success Rate Badge */}
              <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 px-5 py-3 rounded-xl shadow-lg text-center">
                <p className="font-sans text-xs md:text-sm text-slate-300 uppercase tracking-wider">
                  Success Rate
                </p>
                <p className="font-serif text-3xl md:text-4xl text-brand-gold mt-1">
                  95%
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

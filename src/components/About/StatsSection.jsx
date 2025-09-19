import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  UserCheck,
  MapPin,
  Target,
} from "lucide-react";

const StatsSection = ({ stats, containerVariants, itemVariants }) => {
  // Icon mapping based on stat label
  const iconMap = {
    "Active Aspirants": <GraduationCap className="w-10 h-10 text-emerald-400" />,
    "Expert Mentors": <UserCheck className="w-10 h-10 text-violet-400" />,
    "Districts Covered": <MapPin className="w-10 h-10 text-orange-400" />,
    "Success Rate": <Target className="w-10 h-10 text-blue-400" />,
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        {/* Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Our <span className="text-emerald-400">Impact</span> in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{
                scale: 1.07,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${stat.color})` }}
              />

              {/* Card */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 text-center hover:border-gray-700 transition-all duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  {iconMap[stat.label]}
                </div>

                {/* Number */}
                <div
                  className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-gray-300 font-semibold tracking-wide text-lg">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Briefcase, Award } from 'lucide-react';

const TeachersSection = ({ teachers = [], containerVariants, itemVariants }) => {
  return (
    <motion.section
      className="pt-12 pb-20 md:pt-3 md:pb-28 bg-slate-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-20" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Meet Our <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Expert Faculty</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Seasoned educators and former civil servants dedicated to your success.
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              className="relative group bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700/80 transition-all duration-300 hover:border-amber-500/60"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
            >
              {/* Card Header with Image */}
              <div className="relative">
                <img
                  src={teacher.image}
                  alt={`Photo of ${teacher.name}`}
                  className="w-full h-56 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x500/27272a/fafafa?text=Image'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-2xl font-bold text-white">{teacher.name}</h3>
                    <p className="text-amber-400 font-medium">{teacher.subject}</p>
                </div>
              </div>

              {/* Card Body with Details */}
              <div className="p-5">
                <div className="space-y-3 text-slate-300">
                    <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        <span>{teacher.experience}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        <span>{teacher.qualification}</span>
                    </div>
                </div>
                
                {/* Divider and Socials */}
                <div className="mt-5 pt-5 border-t border-slate-700 flex items-center justify-between">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Connect</p>
                    <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                </div>
              </div>

              {/* Decorative Glow */}
               <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeachersSection;

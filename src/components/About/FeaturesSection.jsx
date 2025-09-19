import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Video, Edit3, BarChart, ShieldCheck } from 'lucide-react';

// Enhanced features data with icons and specific theme colors
const features = [
  {
    icon: Target,
    title: 'Structured Curriculum',
    description: 'A goal-oriented syllabus designed to cover every aspect of the UPSC & BPSC exams comprehensively.',
    color: 'text-sky-400',
    bgColor: 'bg-sky-900/20',
    borderColor: 'hover:border-sky-500/80'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Guidance from seasoned educators and former civil servants who provide personalized feedback and strategy.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-900/20',
    borderColor: 'hover:border-purple-500/80'
  },
  {
    icon: Video,
    title: 'Live & Recorded Classes',
    description: 'Access high-quality live sessions and a vast library of recorded lectures to learn at your own pace.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-900/20',
    borderColor: 'hover:border-amber-500/80'
  },
  {
    icon: Edit3,
    title: 'Daily Practice Tests',
    description: 'Reinforce your learning with daily quizzes and full-length mock tests that simulate the real exam environment.',
    color: 'text-rose-400',
    bgColor: 'bg-rose-900/20',
    borderColor: 'hover:border-rose-500/80'
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Track your progress with detailed analytics that highlight your strengths and areas for improvement.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-900/20',
    borderColor: 'hover:border-emerald-500/80'
  },
  {
    icon: ShieldCheck,
    title: 'Doubt Resolution',
    description: 'Get your questions answered promptly through dedicated doubt-clearing sessions and community forums.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-900/20',
    borderColor: 'hover:border-indigo-500/80'
  }
];

// Animation Variants for a smoother staggered effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FeaturesSection = () => {
  return (
    <motion.section
      className="py-20 md:py-28 bg-slate-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-20" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Why Aspirants <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            We provide a comprehensive ecosystem for guaranteed UPSC & BPSC success.
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative group bg-slate-800/50 p-6 rounded-xl border border-slate-800 transition-all duration-300 ${feature.borderColor}`}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Background Glow on Hover */}
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 mb-5 rounded-lg border border-slate-700/80 ${feature.bgColor}`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
                
                {/* Description */}
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;

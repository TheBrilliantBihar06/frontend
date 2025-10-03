
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock, GraduationCap, Sparkles, CheckCircle2, Award, TrendingUp,
  FileText, Library, PenSquare, ClipboardList, BookCopy, MessageSquare,
  Target, Mic, Users, BarChart3
} from "lucide-react";

const points = [
  { 
    icon: Clock, 
    title: "24×7 Doubt Resolution", 
    description: "Chahe raat ho ya din, aapke sawal hamesha hamari priority hai – Learn with the confidence that your queries will never have to wait." 
  },
  { 
    icon: GraduationCap, 
    title: "Round-the-Clock Academic Help", 
    description: "Aapke sawal kabhi so nahi sakte, aur hum bhi nahi – Get instant solutions whenever a doubt arises." 
  },
  { 
    icon: Sparkles, 
    title: "Always-On Support System", 
    description: "Aap taiyaar, hum taiyaar – Be it midnight revisions or early morning practice, mentors are just a click away." 
  },
  { 
    icon: CheckCircle2, 
    title: "Doubt-Free Learning Guarantee", 
    description: "Jab bhi aapko zarurat ho, hum wahi hain – Ensuring no student is left stuck or confused at any time." 
  },
  { 
    icon: Award, 
    title: "Exclusive Mentorship Program", 
    description: "Personal guidance by mentors who are serving and retired IAS, IPS, and other civil servants." 
  },
  { 
    icon: TrendingUp, 
    title: "Monthly Progress Tracking", 
    description: "Detailed reports highlighting your strengths, areas of improvement, and growth." 
  },
  { 
    icon: FileText, 
    title: "Personalized Teacher Feedback", 
    description: "Regular feedback from faculty for every student to ensure individual attention." 
  },
  { 
    icon: Library, 
    title: "Conceptual Mastery of Syllabus", 
    description: "In-depth coverage of the entire syllabus with focus on clarity and understanding." 
  },
  { 
    icon: PenSquare, 
    title: "Mains-Oriented Answer Writing", 
    description: "Practice-based approach with answer evaluation by experts." 
  },
  { 
    icon: ClipboardList, 
    title: "Structured Test Series", 
    description: "Topic-wise and subject-wise tests based on class notes, standard books, and PYQs." 
  },
  { 
    icon: BookCopy, 
    title: "Dedicated Digital Library", 
    description: "24/7 access to e-books, journals, and reference material." 
  },
  { 
    icon: FileText, 
    title: "Model Answers for All PYQs", 
    description: "High-quality model solutions for effective exam preparation." 
  },
  { 
    icon: MessageSquare, 
    title: "Expert PYQ Discussion Sessions", 
    description: "Detailed analysis and discussion of previous year papers by subject experts." 
  },
  { 
    icon: Target, 
    title: "Motivational Sessions", 
    description: "Interaction with working civil servants to stay inspired and focused." 
  },
  { 
    icon: Mic, 
    title: "Podcasts & Webinars", 
    description: "Learn from the real-life journey of IAS, IPS, and toppers through engaging content." 
  },
  { 
    icon: Users, 
    title: "Parent-Teacher Meetings", 
    description: "Regular updates to parents about student's progress and performance." 
  },
  { 
    icon: BarChart3, 
    title: "Performance Analytics Dashboard", 
    description: "AI-driven analytics to measure accuracy, speed, and preparation level." 
  },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const iconVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 1.2, rotate: 5, transition: { duration: 0.15, type: "spring" } },
};

const WhyJoinUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="w-full bg-gradient-to-b from-[#9d9d9d] to-[#bdbdbd] py-16 px-6 md:px-16 text-white"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        {/* <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-100"
          variants={itemVariants}
        >
          Why Join Us
        </motion.h2> */}
        {/* Heading */}

<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
  <span>Why </span>
  <span
    className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] bg-clip-text text-transparent"
    style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
  >
    Join Us?
  </span>
</h2>


        {/* Responsive Grid: 2x2 on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 bg-[#8a8a8a]/80 p-6 rounded-xl border border-neutral-700 shadow-md hover:shadow-lg hover:border-[var(--brand-accent)] transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="w-14 h-14 rounded-lg bg-[#2d2d2d] flex items-center justify-center text-[var(--brand-accent)] flex-shrink-0"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <point.icon size={26} />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-slate-300 text-sm">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyJoinUs;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Data for the "What to Expect" section
const eventExamples = [
  { 
    id: 1, 
    title: "UPSC Prelims Mock Test Series",
    description: "Simulate real exam conditions with our full-length tests and get detailed performance analysis." 
  },
  { 
    id: 2, 
    title: "BPSC Mains Strategy Workshops",
    description: "Learn effective answer writing and time management from toppers and subject matter experts."
  },
  { 
    id: 3, 
    title: "Interactive Interview Guidance Seminars",
    description: "Build confidence and master the art of handling personality tests with ex-panel members."
  },
  { 
    id: 4, 
    title: "Current Affairs Masterclasses",
    description: "Stay updated with comprehensive coverage of national, international, and Bihar-specific news."
  },
];

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

// --- REFINED Color Palette ---
const themeVars = {
  '--brand-ink': '#5d5d5d',      // Main background
  '--card-bg': '#4a4a4a',        // Primary card background
  '--subtle-bg': '#525252',      // Lighter card background for blending
  '--border-color': '#6b7280',   // Subtle border color
  '--brand-light': '#f1f5f9',    // Main text color
  '--brand-accent': '#3b82f6',   // Primary Accent (Blue)
  '--brand-deep': '#60a5fa',     // Secondary Accent (Lighter Blue)
};

// --- Countdown Timer Logic ---
const Countdown = () => {
  // Target date: 6 Oct 2025, 6:00 PM IST
  const targetDate = new Date('2025-10-06T18:00:00+05:30');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-6 md:gap-12 my-8">
      {Object.keys(timeLeft).length > 0 ? (
        Object.entries(timeLeft).map(([interval, value]) => (
          <div key={interval} className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white tracking-wider font-mono">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase text-slate-400 tracking-widest mt-1">
              {interval}
            </span>
          </div>
        ))
      ) : (
        <span className="text-2xl font-bold text-white">Event has started!</span>
      )}
    </div>
  );
};

export default function Events() {
  return (
    <div style={themeVars} className="min-h-screen bg-[var(--brand-ink)] text-[var(--brand-light)] font-sans flex flex-col">
      <Navbar />

      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-400/[0.05] [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
      <div className="absolute inset-0 w-full h-full [background-image:radial-gradient(ellipse_at_center,hsl(0_0%_100%_/_0.05),transparent_70%)]"></div>

      <div className="relative z-10 flex flex-col flex-1">
        
        {/* Hero Section */}
        <motion.section
          className="flex items-center justify-center text-center flex-1 min-h-[50vh] pt-28 pb-24"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto px-4"
            >
              Empower Your Preparation with{" "}
              <span className="text-[var(--brand-accent)]">Expert-Led Events</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto px-4"
            >
              Engage in workshops, seminars, and interactive sessions
              designed to accelerate your success in UPSC & BPSC exams.
            </motion.p>
          </div>
        </motion.section>

        {/* Main Content */}
        <main className="container mx-auto px-6 flex-1 pb-24">

          {/* Countdown Section */}
          <motion.div
            className="bg-[var(--card-bg)] backdrop-blur-lg border border-[var(--border-color)] rounded-2xl p-10 md:p-14 text-center shadow-lg shadow-black/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-sm uppercase font-semibold text-[var(--brand-deep)] tracking-widest mb-3">
              Countdown to Launch
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Our Next Event Series Starts Soon
            </p>
            <Countdown />
            <p className="text-slate-400 max-w-xl mx-auto">
              We’re preparing an insightful lineup of events tailored for your
              exam journey. Stay tuned for valuable experiences.
            </p>
          </motion.div>

          {/* What to Expect Section */}
          <motion.div
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h3
              variants={fadeUp}
              className="text-3xl font-bold text-center mb-16"
            >
              Our Core Offerings
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {eventExamples.map((event, index) => (
                <motion.div
                  variants={fadeUp}
                  key={event.id}
                  className="bg-[var(--subtle-bg)] border border-[var(--border-color)] rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:-translate-y-1"
                >
                  <span className="absolute top-0 right-0 text-8xl font-bold font-mono text-[var(--border-color)] opacity-20 group-hover:text-[var(--brand-accent)]/20 transition-colors duration-300 -translate-y-1/4 translate-x-1/4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold text-slate-100 mb-2">{event.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  Linkedin, 
  GraduationCap, 
  Target, 
  Users, 
  Video, 
  Edit3, 
  BarChart, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  BookOpen, 
  Gem, 
  Eye, 
  BookMarked,
  Clock,
  Mail,
  UserPlus
} from 'lucide-react';

// Import Navbar and Footer from components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Motion Variants
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

// Same Color Palette as AboutPageWP
const themeVars = {
  '--brand-deep': '#2dd4bf',      // Vibrant Teal for headings
  '--brand-light': '#F6F6F6',     // Off-white for text
  '--brand-accent': '#f59e0b',     // Amber for buttons & CTAs
  '--brand-ink': '#5d5d5d',        // Primary background color
  '--cardBgColor': '#4a4a4a',     // Darker gray for cards
};

// Use CSS variable for card background color
const cardBgColor = 'var(--cardBgColor)';

// -------------------------
// Main Page Component
// -------------------------
const Faculty = () => {
  return (
    <div style={themeVars} className="min-h-screen bg-[var(--brand-ink)] text-[var(--brand-light)] font-sans">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        className="container mx-auto px-6 pt-24 md:pt-20 pb-12 md:pb-16" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={stagger}
      >
        <motion.div 
          className="bg-black/20 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-10 text-center border border-white/10" 
          variants={fadeUp}
        >
          <div className="uppercase text-sm tracking-widest text-[var(--brand-deep)] font-bold mb-3">Brilliant Bihar Team</div>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight">Our <span className="text-[var(--brand-accent)]">Distinguished Faculty</span></h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">We're assembling a team of exceptional educators and mentors to guide you on your UPSC & BPSC journey. Stay tuned for our big reveal!</p>
          
          <div className="mt-10 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg p-2" style={{ backgroundColor: cardBgColor }}>
              <div className="w-full h-64 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--brand-deep)]/10 to-[var(--brand-accent)]/10">
                <div className="text-6xl text-[var(--brand-accent)] mb-4">
                  <Clock className="w-20 h-20 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white">Revealing Soon</div>
                <div className="text-slate-300 mt-2">Our world-class faculty team</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2 space-y-12">
          {/* Coming Soon Details */}
          <motion.article 
            className="rounded-xl p-8 border border-white/10 shadow-lg" 
            style={{ backgroundColor: cardBgColor }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl font-serif text-[var(--brand-deep)] mb-4">Faculty Announcement Coming Soon</h2>
            <p className="text-slate-300 mb-6">We're meticulously selecting India's finest educators and civil service experts to join our team. Our faculty will bring decades of combined experience in UPSC & BPSC preparation.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {[
                { icon: Target, title: "Expertise", text: "Subject matter specialists with deep knowledge of exam patterns" },
                { icon: Users, title: "Mentorship", text: "Personalized guidance from former civil servants" },
                { icon: BookOpen, title: "Pedagogy", text: "Innovative teaching methodologies for better retention" },
                { icon: Award, title: "Track Record", text: "Educators with proven success in mentoring toppers" }
              ].map(item => (
                <div key={item.title} className="p-4 rounded-md bg-black/20 border border-[var(--brand-deep)]/20">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-[var(--brand-deep)]" />
                    <h4 className="font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Notification Form */}
          
        </section>

        {/* Sidebar */}
        <aside className="space-y-8 lg:mt-0">
       
          
          <div className="rounded-xl p-6 border border-white/10" style={{ backgroundColor: cardBgColor }}>
            <h5 className="font-semibold text-white">What to Expect</h5>
            <ul className="mt-4 text-sm text-slate-300 space-y-3">
              <li className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 mt-0.5 text-[var(--brand-accent)]" /> 
                Subject specialists with 10+ years experience
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-4 h-4 mt-0.5 text-[var(--brand-accent)" /> 
                Strategic exam preparation techniques
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-4 h-4 mt-0.5 text-[var(--brand-accent)]" /> 
                One-on-one mentorship opportunities
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-4 h-4 mt-0.5 text-[var(--brand-accent)]" /> 
                Former civil servants as guest faculty
              </li>
            </ul>
          </div>
          
          <div className="rounded-xl p-6 border border-white/10" style={{ backgroundColor: cardBgColor }}>
            <h5 className="font-semibold text-white">Contact Us</h5>
            <p className="text-sm text-slate-300 mt-3">Call us: +91 70612 12151</p>
            <p className="text-sm text-slate-300">Email: contact@thebrilliantbihar.com</p>
          </div>
        </aside>
      </main>

      {/* CTA Section */}
      <motion.section className="container mx-auto px-6 pt-0 pb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="bg-gradient-to-r from-transparent via-[var(--brand-deep)]/20 to-transparent rounded-xl p-8 text-center border border-white/10 shadow-lg" style={{ backgroundColor: cardBgColor }}>
          <h3 className="text-2xl font-bold text-white">Get Ready for Excellence</h3>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">Our world-class faculty will transform your UPSC & BPSC preparation journey. Be the first to know when we reveal our team!</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="/courses" className="inline-flex items-center gap-2 bg-[var(--brand-accent)] text-black font-semibold px-5 py-3 rounded-md hover:brightness-110 transition">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-md hover:bg-white/10 transition">
              Request Callback <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Faculty;
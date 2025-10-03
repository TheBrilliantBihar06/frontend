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
  BookMarked
} from 'lucide-react';

// Import Navbar and Footer from components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Data ---
const teachers = [
  { name: "Dr. Rajesh Kumar", subject: "Indian Polity & Governance", experience: "12 Years", qualification: "Ph.D. in Political Science, JNU Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  { name: "Prof. Sunita Devi", subject: "History & Culture", experience: "15 Years", qualification: "M.A. History, Patna University", image: "https://images.unsplash.com/photo-1494790108375-2616c179b5bb?w=400&h=400&fit=crop&crop=face" },
  { name: "Mr. Amit Singh", subject: "Economy & Current Affairs", experience: "8 Years", qualification: "M.A. Economics, BHU", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
  { name: "Dr. Priya Sharma", subject: "Geography & Environment", experience: "10 Years", qualification: "Ph.D. Geography, IIT Kanpur", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" }
];

const stats = [
  { number: "10,000+", label: "Active Aspirants" },
  { number: "500+", label: "Expert Mentors" },
  { number: "38", label: "Districts Covered" },
  { number: "95%", label: "Success Rate" }
];

const features = [
  { icon: Target, title: 'Structured Curriculum', description: 'A goal-oriented syllabus to cover every aspect of the UPSC & BPSC exams comprehensively.' },
  { icon: Users, title: 'Expert Mentorship', description: 'Guidance from seasoned educators and former civil servants who provide personalized feedback.' },
  { icon: Video, title: 'Live & Recorded Classes', description: 'Access high-quality live sessions and a vast library of recorded lectures to learn at your own pace.' },
  { icon: Edit3, title: 'Daily Practice Tests', description: 'Reinforce learning with daily quizzes and full-length mock tests that simulate the real exam.' },
  { icon: BarChart, title: 'Performance Analytics', description: 'Track your progress with detailed analytics that highlight your strengths and areas for improvement.' },
  { icon: ShieldCheck, title: 'Doubt Resolution', description: 'Get your questions answered promptly through dedicated doubt-clearing sessions and community forums.' }
];

// Motion Variants
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

// New Color Palette with #5d5d5d as primary
const themeVars = {
  '--brand-deep': '#2dd4bf',      // Vibrant Teal for headings
  '--brand-light': '#F6F6F6',     // Off-white for text
  '--brand-accent': '#f59e0b',     // Amber for buttons & CTAs
  '--brand-ink': '#5d5d5d',        // User's primary color as the MAIN background
  '--cardBgColor': '#4a4a4a',     // A darker gray for cards
};

// Use CSS variable for card background color
const cardBgColor = 'var(--cardBgColor)';

// -------------------------
// Main Page Component
// -------------------------
const AboutPageWP = () => {
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
          className="bg-black/20 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border border-white/10" 
          variants={fadeUp}
        >
          <div className="md:col-span-2">
            <div className="uppercase text-sm tracking-widest text-[var(--brand-deep)] font-bold mb-3">Ignite Your Aspirations</div>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight">Your Journey to <span className="text-[var(--brand-accent)]">Excellence</span> Starts Here</h1>
            <p className="mt-4 text-slate-300 max-w-2xl">Empowering civil service aspirants with an industry-focused curriculum, expert mentorship, and a supportive community for UPSC & BPSC success.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/courses" className="inline-flex items-center gap-2 bg-[var(--brand-accent)] text-black font-semibold px-5 py-3 rounded-md shadow-lg hover:brightness-110 transition">Explore Courses <ArrowRight className="w-4 h-4" /></a>
              <a href="#teachers" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-md hover:bg-white/10 transition">View Faculty <BookMarked className="w-4 h-4" /></a>
            </div>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-black/20 p-4 rounded-md border border-white/10">
                  <div className="text-xl font-bold text-white">{s.number}</div>
                  <div className="text-xs text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg p-2" style={{ backgroundColor: cardBgColor }}>
              <img src="/images/aspirant-professional.jpg" alt="Aspirants preparing for exams" className="w-full h-60 object-cover rounded" onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/4a4a4a/F6F6F6?text=Brilliant+Bihar` }} />
              <div className="mt-4 text-center">
                <div className="text-xs text-slate-300">Success Rate</div>
                <div className="text-3xl font-bold text-[var(--brand-accent)]">95%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2 space-y-12">

          {/* Our Journey Card */}
          <motion.article 
            id="about" 
            className="rounded-xl p-8 border border-white/10 shadow-lg" 
            style={{ backgroundColor: cardBgColor }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl font-serif text-[var(--brand-deep)] mb-4">Our Journey</h2>
            <p className="text-slate-300 mb-6">Founded to address preparation challenges, we've grown from 50 students to 10,000+ aspirants by offering specialized courses supported by alumni who have excelled in civil services.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Target, title: "Our Mission", text: "Provide best-in-class courses with AI support, video-based doubt resolution, and expert faculty." },
                { icon: Eye, title: "Our Vision", text: "Transform Bihar into a hub for toppers through accessible, innovative, and personalized education." },
                { icon: BookOpen, title: "Our Story", text: "Built by educators from the ground up, our focus is on outcomes, mentorship, and tech-enabled learning." },
                { icon: Gem, title: "Our Values", text: "Excellence, Accessibility, Innovation and Dedication — driving every decision we make for aspirants." }
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

          {/* Features Grid */}
          <motion.div id="courses" className="space-y-6" initial="hidden" whileInView="visible" variants={stagger}>
             <h3 className="text-3xl font-serif text-[var(--brand-deep)]">Why Choose Us?</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <motion.div key={i} className="p-6 rounded-lg border border-white/10 hover:border-[var(--brand-accent)] transition-colors" style={{ backgroundColor: cardBgColor }} variants={fadeUp}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
                        <f.icon className='w-6 h-6 text-black' />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{f.title}</h5>
                        <p className="text-sm text-slate-300 mt-2">{f.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </motion.div>
          
          {/* Faculty Section */}
          {/* <section id="teachers">
            <h3 className="text-3xl font-serif mb-6 text-[var(--brand-deep)]">Meet Our Expert Faculty</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teachers.slice(0, 3).map((t) => (
                <motion.div 
                  key={t.name} 
                  className="rounded-xl overflow-hidden border border-white/10 shadow-lg group" 
                  style={{ backgroundColor: cardBgColor }} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="w-full h-52 relative">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-white font-semibold">{t.name}</div>
                      <div className="text-xs text-slate-300">{t.subject}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-sm text-slate-300 mb-2"><Briefcase className="w-4 h-4 text-[var(--brand-accent)]" />{t.experience}</div>
                    <div className="flex items-start gap-3 text-sm text-slate-300"><Award className="w-4 h-4 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />{t.qualification}</div>
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="text-xs text-slate-400 uppercase">Connect</div>
                      <a href="#" className="text-slate-300 hover:text-[var(--brand-accent)]"><Linkedin className="w-5 h-5" /></a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section> */}
        </section>

        {/* Sidebar */}
        <aside className="space-y-8 lg:mt-0">
          <div className="rounded-xl p-6 border border-white/10 shadow-lg bg-gradient-to-br from-[var(--brand-deep)]/20" style={{ backgroundColor: cardBgColor }}>
            <h4 className="text-white font-bold text-lg">Ready to start?</h4>
            <p className="text-sm text-slate-300 mt-2">Book a free counseling session and get a tailored study plan.</p>
            <a href="/contact" className="mt-4 inline-flex items-center gap-2 bg-[var(--brand-accent)] text-black font-semibold px-4 py-2 rounded-md hover:brightness-110 transition">Request Callback <Phone className="w-4 h-4" /></a>
          </div>
          <div className="rounded-xl p-6 border border-white/10" style={{ backgroundColor: cardBgColor }}>
            <h5 className="font-semibold text-white">Program Highlights</h5>
            <ul className="mt-4 text-sm text-slate-300 space-y-3">
              <li className="flex items-start gap-3"><GraduationCap className="w-4 h-4 mt-0.5 text-[var(--brand-accent)]" />Comprehensive syllabus</li>
              <li className="flex items-start gap-3"><BarChart className="w-4 h-4 mt-0.5 text-[var(--brand-accent)]" />Performance analytics</li>
              <li className="flex items-start gap-3"><ShieldCheck className="w-4 h-4 mt-0.5 text-[var(--brand-accent)]" />Doubt resolution</li>
              <li className="flex items-start gap-3"><Users className="w-4 h-4 mt-0.5 text-[var(--brand-accent)]" />Expert Mentorship</li>
            </ul>
          </div>
          <div id="contact" className="rounded-xl p-6 border border-white/10" style={{ backgroundColor: cardBgColor }}>
            <h5 className="font-semibold text-white">Contact Us</h5>
            <p className="text-sm text-slate-300 mt-3">Call us: +91 +91 70612 12151</p>
            <p className="text-sm text-slate-300">Email: contact@thebrilliantbihar.com </p>
          </div>
        </aside>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

// Reusable CTA Section
const CTASection = () => (
  <motion.section className="container mx-auto px-6 pt-0 pb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <div className="bg-gradient-to-r from-transparent via-[var(--brand-deep)]/20 to-transparent rounded-xl p-8 text-center border border-white/10 shadow-lg" style={{ backgroundColor: cardBgColor }}>
      <h3 className="text-2xl font-bold text-white">Begin Your Journey to Success Today</h3>
      <p className="text-slate-300 mt-3 max-w-2xl mx-auto">Join thousands of aspirants who trust our expert faculty and innovative learning platform.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a href="/courses" className="inline-flex items-center gap-2 bg-[var(--brand-accent)] text-black font-semibold px-5 py-3 rounded-md hover:brightness-110 transition">Explore Courses <ArrowRight className="w-4 h-4" /></a>
        {/* <a className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-md hover:bg-white/10 transition">Request Callback <Phone className="w-4 h-4" /></a> */}
        <a href="/contact" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-md hover:bg-white/10 transition">Request Callback <Phone className="w-4 h-4" /></a>
      </div>
    </div>
  </motion.section>
);

export default AboutPageWP;
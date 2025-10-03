import React, { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Enhanced color palette with #5d5d5d as the primary background
const themeVars = {
  '--brand-deep': '#2dd4bf',      // Vibrant Teal for headings
  '--brand-light': '#F6F6F6',     // Off-white for text
  '--brand-accent': '#f59e0b',     // Amber for buttons & CTAs
  '--brand-ink': '#5d5d5d',        // User's primary color as the MAIN background
  '--cardBgColor': '#4a4a4a',      // A darker gray for cards
  '--brand-success': '#4ade80',    // A bright green for success states
};


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send the data to a server here.
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 4000); // Reset form after 4 seconds
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@thebrilliantbihar.com",
      subtitle: "For course inquiries & admissions",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 70612 12151",
      subtitle: "Mon-Sat 9AM-7PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Our Center",
      info: "Boring Road, Patna, Bihar",
      subtitle: "UPSC & BPSC Coaching Institute",
    },
    {
      icon: Clock,
      title: "Batch Timings",
      info: "Morning & Evening",
      subtitle: "Flexible schedule options",
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <>
      <Navbar />
      <div style={themeVars} className="min-h-screen bg-[var(--brand-ink)] text-[var(--brand-light)] font-sans">
        
        {/* Hero Section */}
        <section className="relative text-center pt-28 pb-20 px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-deep)] to-[var(--brand-accent)]"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{delay: 0.2}}
            className="mt-6 max-w-2xl mx-auto text-gray-200 text-lg"
          >
            Ready to achieve your civil services dreams? Connect with Brilliant
            Bihar for expert UPSC and BPSC coaching.
          </motion.p>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-12 max-w-7xl">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.3}}
            variants={staggerContainer}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-[var(--cardBgColor)] rounded-xl p-6 border border-white/10 shadow-lg"
                >
                  <item.icon className="w-8 h-8 text-[var(--brand-accent)] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[var(--brand-deep)] font-medium">{item.info}</p>
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="bg-[var(--cardBgColor)] rounded-xl p-6 border border-white/10 space-y-3 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-3">
                Why Choose Brilliant Bihar?
              </h3>
              {[
                "Expert faculty with proven track record",
                "Comprehensive study material & test series",
                "Personal mentoring & doubt sessions",
                "Regular mock tests & performance analysis",
              ].map((point, i) => (
                <div className="flex items-center gap-3 text-gray-200" key={i}>
                  <CheckCircle className="w-5 h-5 text-[var(--brand-success)] flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}>
            <div className="bg-[var(--cardBgColor)] rounded-2xl p-8 border border-white/10 shadow-lg">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                      Send us a Message
                    </h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid sm:grid-cols-2 gap-5">
                          <input
                            type="text" name="name" value={formData.name} onChange={handleInputChange} required
                            placeholder="Your Name *"
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
                          />
                           <input
                            type="email" name="email" value={formData.email} onChange={handleInputChange} required
                            placeholder="Your Email *"
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
                          />
                      </div>
                      <input
                          type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                          placeholder="Your Phone (Optional)"
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
                      />

                      <select
                        name="subject" value={formData.subject} onChange={handleInputChange} required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
                      >
                        <option value="" className="bg-[var(--cardBgColor)] text-gray-400">Select an option *</option>
                        <option value="course-inquiry" className="bg-[var(--cardBgColor)] text-white">Course Inquiry</option>
                        <option value="upsc-coaching" className="bg-[var(--cardBgColor)] text-white">UPSC Coaching</option>
                        <option value="bpsc-coaching" className="bg-[var(--cardBgColor)] text-white">BPSC Coaching</option>
                        <option value="other" className="bg-[var(--cardBgColor)] text-white">Other</option>
                      </select>

                      <textarea
                        name="message" rows="5" value={formData.message} onChange={handleInputChange} required
                        placeholder="Your Message *"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
                      />

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--brand-deep)] to-[var(--brand-accent)] hover:brightness-110 text-black font-bold py-3 rounded-lg shadow-lg"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-[var(--brand-success)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[var(--brand-success)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We’ll get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div className="pb-20 max-w-5xl mx-auto px-4" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeInUp}>
          <div className="bg-[var(--cardBgColor)] rounded-2xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Visit Our Center
            </h3>
            <iframe
              title="Brilliant Bihar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4928078859066!2d85.17006377539464!3d25.58853567746108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5936baf58743%3A0x15682aa08153abdb!2sMetConnect%20Infotech%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1759492225096!5m2!1sen!2sin" 
              className="w-full h-80 rounded-xl border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

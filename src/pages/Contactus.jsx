import React, { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "admissions@brilliantbihar.in",
      subtitle: "For course inquiries & admissions",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9876543210",
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative">
        {/* Hero Section */}
        <section className="relative text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg"
          >
            Ready to achieve your civil services dreams? Connect with Brilliant
            Bihar for expert UPSC and BPSC coaching.
          </motion.p>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-12 max-w-7xl">
          {/* Left Side - Contact Info */}
          <div className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md"
                >
                  <item.icon className="w-7 h-7 text-blue-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-blue-300">{item.info}</p>
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/20 space-y-3">
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
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Send us a Message
                  </h2>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    {["name", "email", "phone"].map((field) => (
                      <div key={field}>
                        <label className="block text-sm text-gray-300 mb-2 capitalize">
                          {field} {field !== "phone" && "*"}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          required={field !== "phone"}
                          className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="" className="bg-slate-800 text-white">
                          Select an option
                        </option>
                        <option value="course-inquiry" className="bg-slate-800 text-white">
                          Course Inquiry
                        </option>
                        <option value="upsc-coaching" className="bg-slate-800 text-white">
                          UPSC Coaching
                        </option>
                        <option value="bpsc-coaching" className="bg-slate-800 text-white">
                          BPSC Coaching
                        </option>
                        <option value="demo-class" className="bg-slate-800 text-white">
                          Demo Class Request
                        </option>
                        <option value="fee-structure" className="bg-slate-800 text-white">
                          Fee Structure
                        </option>
                        <option value="career-guidance" className="bg-slate-800 text-white">
                          Career Guidance
                        </option>
                        <option value="other" className="bg-slate-800 text-white">
                          Other
                        </option>
                      </select>
                    </div>


                    {/* <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select an option</option>
                        <option value="course-inquiry">Course Inquiry</option>
                        <option value="upsc-coaching">UPSC Coaching</option>
                        <option value="bpsc-coaching">BPSC Coaching</option>
                        <option value="demo-class">Demo Class Request</option>
                        <option value="fee-structure">Fee Structure</option>
                        <option value="career-guidance">Career Guidance</option>
                        <option value="other">Other</option>
                      </select>
                    </div> */}

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg shadow-md"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. We’ll get back to you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 max-w-5xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-md">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Visit Our Coaching Center
            </h3>
            <iframe
              title="Brilliant Bihar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.367815179329!2d85.123456!3d25.611234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585cba12345%3A0xabcd1234ef56789!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-80 rounded-xl border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;

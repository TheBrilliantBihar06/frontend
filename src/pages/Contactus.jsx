import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "admissions@brilliantbihar.in",
      subtitle: "For course inquiries & admissions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+91 9876543210",
      subtitle: "Mon-Sat 9AM-7PM IST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Center",
      info: "Boring Road, Patna, Bihar",
      subtitle: "UPSC & BPSC Coaching Institute"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Batch Timings",
      info: "Morning & Evening",
      subtitle: "Flexible schedule options"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 pt-20 pb-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ready to achieve your civil services dreams? Connect with Brilliant Bihar for expert UPSC and BPSC coaching
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Left Side - Contact Info & Visual */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-blue-300 font-medium">{item.info}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Course Highlights */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Brilliant Bihar?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Expert faculty with proven track record</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Comprehensive study material & test series</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Personal mentoring & doubt clearing sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Regular mock tests & performance analysis</span>
                  </div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Our Success Record</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">150+</div>
                    <div className="text-gray-300 text-sm">UPSC Selections</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-1">300+</div>
                    <div className="text-gray-300 text-sm">BPSC Selections</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">5+</div>
                    <div className="text-gray-300 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-1">95%</div>
                    <div className="text-gray-300 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border-l-4 border-blue-400">
                <blockquote className="text-gray-200 text-lg italic">
                  "Success in civil services is not just about hard work, it's about smart preparation with the right guidance."
                </blockquote>
                <p className="text-blue-400 mt-2 font-medium">— Brilliant Bihar Faculty</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                      Send us a Message
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Name */}
                      <div className="relative">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField("")}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                          placeholder="Enter your full name"
                        />
                        {focusedField === "name" && (
                          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                        )}
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField("")}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                          placeholder="your.email@example.com"
                        />
                        {focusedField === "email" && (
                          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField("")}
                          className="w-full px-4 py-4 bg-white/5 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                          placeholder="+91 9876543210"
                        />
                        {focusedField === "phone" && (
                          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                        )}
                      </div>

                      {/* Subject */}
                      <div className="relative">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField("")}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                        >
                          <option value="" className="bg-gray-800">Select your inquiry type</option>
                          <option value="course-inquiry" className="bg-gray-800">Course Inquiry</option>
                          <option value="upsc-coaching" className="bg-gray-800">UPSC Coaching</option>
                          <option value="bpsc-coaching" className="bg-gray-800">BPSC Coaching</option>
                          <option value="demo-class" className="bg-gray-800">Demo Class Request</option>
                          <option value="fee-structure" className="bg-gray-800">Fee Structure</option>
                          <option value="career-guidance" className="bg-gray-800">Career Guidance</option>
                          <option value="other" className="bg-gray-800">Other</option>
                        </select>
                        {focusedField === "subject" && (
                          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                        )}
                      </div>

                      {/* Message */}
                      <div className="relative">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField("")}
                          rows="5"
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:bg-white/10"
                          placeholder="Tell us about your goals, preferred course, batch timings, or any questions about UPSC/BPSC preparation..."
                        />
                        {focusedField === "message" && (
                          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2 group"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </>
                ) : (
                  /* Success State */
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out to Brilliant Bihar. We've received your message and will get back to you within 24 hours.
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-sm text-gray-400">Redirecting to form...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Choose Brilliant Bihar for Civil Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">UPSC Excellence</h3>
                <p className="text-gray-400">Comprehensive preparation for IAS, IPS, IFS and other central services with proven methodology</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">BPSC Mastery</h3>
                <p className="text-gray-400">Specialized coaching for Bihar Public Service Commission with local insights and expertise</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Personal Mentoring</h3>
                <p className="text-gray-400">One-on-one guidance, strategy sessions, and continuous support throughout your preparation journey</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Visit Our Coaching Center</h3>
              <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Boring Road, Patna, Bihar</p>
                  <p className="text-gray-400 text-sm mt-1">Premier UPSC & BPSC Coaching Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
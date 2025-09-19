// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const AboutPage = () => {
//   const [activeTab, setActiveTab] = useState('mission');
//   const navigate = useNavigate();

//   const teachers = [
//     {
//       name: "Dr. Rajesh Kumar",
//       subject: "Indian Polity & Governance",
//       experience: "12 Years",
//       qualification: "Ph.D. in Political Science, JNU Delhi",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
//     },
//     {
//       name: "Prof. Sunita Devi",
//       subject: "History & Culture",
//       experience: "15 Years",
//       qualification: "M.A. History, Patna University",
//       image: "https://images.unsplash.com/photo-1494790108755-2616c179b5bb?w=400&h=400&fit=crop&crop=face"
//     },
//     {
//       name: "Mr. Amit Singh",
//       subject: "Economy & Current Affairs",
//       experience: "8 Years",
//       qualification: "M.A. Economics, BHU",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
//     },
//     {
//       name: "Dr. Priya Sharma",
//       subject: "Geography & Environment",
//       experience: "10 Years",
//       qualification: "Ph.D. Geography, IIT Kanpur",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
//     }
//   ];

//   const features = [
//     {
//       icon: "🎓",
//       title: "Live Interactive Classes",
//       description: "Real-time online classes with expert faculty for UPSC & BPSC preparation"
//     },
//     {
//       icon: "📚",
//       title: "Comprehensive Study Material",
//       description: "Curated notes, mocks, and resources aligned with UPSC & BPSC syllabus"
//     },
//     {
//       icon: "💬",
//       title: "1-Hour Doubt Resolution",
//       description: "Quick video-supported doubt clearing sessions within 1 hour"
//     },
//     {
//       icon: "🤖",
//       title: "24/7 AI Chatbot Helpdesk",
//       description: "Instant support and query resolution anytime with our smart AI assistant"
//     },
//     {
//       icon: "📊",
//       title: "Progress Tracking",
//       description: "Regular mocks, analytics, and personalized feedback for exam success"
//     },
//     {
//       icon: "🏆",
//       title: "Bihar-Focused Integration",
//       description: "Special modules on Bihar-specific topics for BPSC aspirants"
//     }
//   ];

//   const stats = [
//     { number: "10,000+", label: "Active Aspirants", color: "from-emerald-400 to-cyan-400" },
//     { number: "500+", label: "Expert Mentors", color: "from-violet-400 to-purple-400" },
//     { number: "38", label: "Districts Covered", color: "from-orange-400 to-red-400" },
//     { number: "95%", label: "Success Rate", color: "from-blue-400 to-indigo-400" }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, staggerChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <div className="bg-gray-900 text-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center overflow-hidden">
//         <motion.div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 10, ease: "easeOut" }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70"></div>
//         </motion.div>

//         <motion.div
//           className="relative z-10 container mx-auto px-6 max-w-7xl"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <motion.div className="flex items-center space-x-4 relative overflow-hidden" variants={itemVariants}>
//                 <motion.div
//                   className="w-4 h-4 rounded-full bg-emerald-400"
//                   animate={{ opacity: [1, 0.5, 1] }} // Removed scale to prevent floating
//                   transition={{ repeat: Infinity, duration: 1.5 }}
//                 />
//                 <motion.div
//                   className="w-4 h-4 rounded-full bg-blue-400"
//                   animate={{ opacity: [1, 0.5, 1] }}
//                   transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
//                 />
//                 <motion.div
//                   className="w-4 h-4 rounded-full bg-purple-400"
//                   animate={{ opacity: [1, 0.5, 1] }}
//                   transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
//                 />
//               </motion.div>
//               <motion.h1
//                 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none"
//                 variants={itemVariants}
//               >
//                 <span className="block text-white">Ace</span>
//                 <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   UPSC & BPSC
//                 </span>
//                 <span className="block text-white">with Brilliant Bihar</span>
//               </motion.h1>
//               <motion.p
//                 className="text-lg text-gray-100 max-w-lg leading-relaxed"
//                 variants={itemVariants}
//               >
//                 Premier platform offering top-tier courses for UPSC and BPSC aspirants, blending expert guidance with AI-driven support.
//               </motion.p>
//               <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
//                 <motion.button
//                   onClick={() => navigate('/courses')}
//                   className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 rounded-full font-bold text-white shadow-lg"
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
//                   whileTap={{ scale: 0.95 }}
//                   animate={{ scale: [1, 1.02, 1] }}
//                   transition={{ repeat: Infinity, duration: 1.5 }}
//                 >
//                   Explore Courses
//                 </motion.button>
//                 <motion.button
//                   className="border-2 border-gray-600 px-8 py-4 rounded-full font-bold text-gray-200"
//                   whileHover={{ scale: 1.05, borderColor: "#A78BFA", color: "#A78BFA" }}
//                   whileTap={{ scale: 0.95 }}
//                   animate={{ scale: [1, 1.02, 1] }}
//                   transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
//                 >
//                   Meet Our Faculty
//                 </motion.button>
//               </motion.div>
//             </div>
//             <motion.div className="relative" variants={itemVariants}>
//               <div className="relative w-full h-96 rounded-3xl overflow-hidden">
//                 <motion.img
//                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="Aspirants preparing for exams"
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/40 to-purple-500/40 flex items-center justify-center">
//                   <motion.span
//                     className="text-white text-2xl sm:text-3xl font-bold bg-black/80 px-8 py-4 rounded-lg"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
//                   >
//                     Crack UPSC/BPSC with Us
//                   </motion.span>
//                 </div>
//               </div>
//               <motion.div
//                 className="absolute -top-8 -left-8 bg-white text-gray-900 p-4 rounded-2xl shadow-xl"
//                 whileHover={{ scale: 1.1 }} // Removed rotate to keep stable
//               >
//                 <div className="text-2xl font-bold text-emerald-500">10K+</div>
//                 <div className="text-sm">Aspirants</div>
//               </motion.div>
//               <motion.div
//                 className="absolute -bottom-8 -right-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-2xl shadow-xl"
//                 whileHover={{ scale: 1.1 }} // Removed rotate
//               >
//                 <div className="text-2xl font-bold">500+</div>
//                 <div className="text-sm">Mentors</div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <motion.section
//         className="py-16 bg-gradient-to-b from-gray-800 to-gray-900"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <div className="container mx-auto px-6">
//           <motion.div className="text-center mb-12" variants={itemVariants}>
//             <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 mx-auto rounded-full"></div>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="relative group"
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
//               >
//                 <div
//                   className="absolute inset-0 bg-gradient-to-r rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
//                   style={{ background: `linear-gradient(135deg, ${stat.color})` }}
//                 />
//                 <div className="relative bg-gray-800/80 backdrop-blur border border-gray-700 rounded-2xl p-8 text-center hover:border-gray-600 transition-all duration-300">
//                   <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-100 font-medium">{stat.label}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Story Section */}
//       <motion.section
//         className="py-20 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <div className="container mx-auto px-6 max-w-5xl">
//           <motion.div className="text-center mb-16" variants={itemVariants}>
//             <h2 className="text-5xl font-bold mb-6">
//               Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
//             </h2>
//             <p className="text-xl text-gray-100">Discover how we empower UPSC & BPSC aspirants</p>
//           </motion.div>

//           <div className="relative">
//             <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-purple-400 rounded-full"></div>
//             {[
//               { id: 'mission', title: 'Our Mission', icon: '🎯', color: 'emerald' },
//               { id: 'vision', title: 'Our Vision', icon: '🔮', color: 'blue' },
//               { id: 'story', title: 'Our Story', icon: '📖', color: 'purple' },
//               { id: 'values', title: 'Our Values', icon: '💎', color: 'pink' }
//             ].map((tab) => (
//               <motion.div
//                 key={tab.id}
//                 className="relative flex items-start space-x-6 mb-12"
//                 variants={itemVariants}
//               >
//                 <motion.button
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl font-bold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? `bg-${tab.color}-500 border-${tab.color}-400 text-white shadow-lg shadow-${tab.color}-500/30`
//                       : 'bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-500'
//                   }`}
//                   whileHover={{ scale: 1.1 }} // Removed rotate
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {tab.icon}
//                 </motion.button>
//                 <AnimatePresence>
//                   {activeTab === tab.id && (
//                     <motion.div
//                       className="flex-1"
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
//                       <motion.div
//                         className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 space-y-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         {tab.id === 'mission' && (
//                           <>
//                             <p className="text-lg text-gray-100 leading-relaxed">
//                               To provide best-in-class UPSC and BPSC courses with AI-driven support, video-based doubt resolution, and expert faculty tailored to Bihar's aspirants.
//                             </p>
//                             <p className="text-gray-300 leading-relaxed">
//                               Committed to empowering every student with tools for civil services success.
//                             </p>
//                           </>
//                         )}
//                         {tab.id === 'vision' && (
//                           <>
//                             <p className="text-lg text-gray-100 leading-relaxed">
//                               To transform Bihar into a hub for UPSC and BPSC toppers through accessible, innovative education.
//                             </p>
//                             <p className="text-gray-300 leading-relaxed">
//                               A future where every aspirant benefits from 24/7 AI support and personalized prep.
//                             </p>
//                           </>
//                         )}
//                         {tab.id === 'story' && (
//                           <>
//                             <p className="text-lg text-gray-100 leading-relaxed">
//                               Founded in 2023 by civil services experts to address preparation challenges in Bihar.
//                             </p>
//                             <p className="text-gray-300 leading-relaxed">
//                               From 50 students to 10,000+ aspirants, offering specialized UPSC/BPSC courses with AI integration.
//                             </p>
//                             <p className="text-gray-300 leading-relaxed">
//                               Supported by alumni who excelled in civil services and are giving back.
//                             </p>
//                           </>
//                         )}
//                         {tab.id === 'values' && (
//                           <div className="grid sm:grid-cols-2 gap-4">
//                             {[
//                               { title: 'Excellence', desc: 'Top-quality UPSC/BPSC content delivery', color: 'emerald' },
//                               { title: 'Accessibility', desc: 'Affordable courses for all backgrounds', color: 'blue' },
//                               { title: 'Innovation', desc: 'AI chatbot & video doubts for modern learning', color: 'purple' },
//                               { title: 'Dedication', desc: 'Focused on Bihar\'s civil services success', color: 'pink' }
//                             ].map((value, idx) => (
//                               <motion.div
//                                 key={idx}
//                                 className="bg-gray-900/50 border border-gray-600 rounded-xl p-4"
//                                 whileHover={{ scale: 1.03, boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)" }}
//                                 transition={{ duration: 0.3 }}
//                               >
//                                 <div className={`font-bold text-${value.color}-400 mb-2`}>{value.title}</div>
//                                 <div className="text-sm text-gray-300">{value.desc}</div>
//                               </motion.div>
//                             ))}
//                           </div>
//                         )}
//                       </motion.div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         className="py-20 bg-gray-800"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <div className="container mx-auto px-6">
//           <motion.div className="text-center mb-16" variants={itemVariants}>
//             <h2 className="text-5xl font-bold mb-4">
//               Why Aspirants <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">Choose Us</span>
//             </h2>
//             <p className="text-xl text-gray-100">Best-in-class features for UPSC & BPSC success</p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="relative group bg-gray-900 border border-gray-700 rounded-3xl p-8"
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="relative">
//                   <motion.div
//                     className="text-5xl mb-6 inline-block" // Added inline-block to contain icon
//                     whileHover={{ scale: 1.1 }} // Reduced scale, removed rotate
//                     transition={{ duration: 0.3 }}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                   <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
//                   <p className="text-gray-100 leading-relaxed">{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Online Learning Section */}
//       <motion.section
//         className="py DIP-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div className="space-y-8" variants={itemVariants}>
//               <h2 className="text-5xl font-bold mb-6 leading-tight">
//                 Advanced <br />
//                 <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
//                   UPSC/BPSC Prep
//                 </span>
//               </h2>
//               <p className="text-lg text-gray-100 leading-relaxed">
//                 State-of-the-art platform with AI support for civil services excellence.
//               </p>
//               <div className="space-y-6">
//                 {[
//                   { icon: '🎥', text: 'HD live classes with interactive polls' },
//                   { icon: '✏️', text: 'Real-time mocks and answer discussions' },
//                   { icon: '📹', text: 'Recorded lectures with timestamps' },
//                   { icon: '👥', text: 'Mentorship in small groups' },
//                   { icon: '🗣️', text: 'Bilingual content for better understanding' }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-start space-x-4 group relative" // Added relative
//                     variants={itemVariants}
//                   >
//                     <motion.div
//                       className="text-3xl group-hover:scale-105 transition-transform duration-300" // Reduced scale
//                     >
//                       {item.icon}
//                     </motion.div>
//                     <p className="text-gray-100 text-lg">{item.text}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//             <motion.div className="relative" variants={itemVariants}>
//               <div className="relative w-full h-96 rounded-3xl overflow-hidden">
//                 <motion.img
//                   src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                   alt="Online UPSC/BPSC class"
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/50 to-blue-500/50 flex items-center justify-center">
//                   <motion.span
//                     className="text-white text-2xl sm:text-3xl font-bold bg-black/80 px-8 py-4 rounded-lg"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
//                   >
//                     Live UPSC Sessions
//                   </motion.span>
//                 </div>
//               </div>
//               <motion.div
//                 className="absolute -top-6 -left-6 bg-white text-gray-900 p-4 rounded-2xl shadow-xl"
//                 whileHover={{ scale: 1.1 }} // Removed rotate
//               >
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                   <span className="text-sm font-medium">Live Now</span>
//                 </div>
//               </motion.div>
//               <motion.div
//                 className="absolute -bottom-6 -right-6 bg-gray-900 border border-gray-700 text-white p-4 rounded-2xl shadow-xl"
//                 whileHover={{ scale: 1.1 }} // Removed rotate
//               >
//                 <div className="text-sm text-gray-100 mb-1">Aspirants Online</div>
//                 <div className="text-2xl font-bold text-emerald-400">1,247</div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Teachers Section */}
//       <motion.section
//         className="py-20 bg-gray-800"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <div className="container mx-auto px-6">
//           <motion.div className="text-center mb-16" variants={itemVariants}>
//             <h2 className="text-5xl font-bold mb-4">
//               Expert <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">Faculty</span>
//             </h2>
//             <p className="text-xl text-gray-100">Guiding UPSC & BPSC aspirants to success</p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teachers.map((teacher, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative"
//                 variants={itemVariants}
//                 whileHover={{ y: -15, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 text-center hover:border-gray-600 transition-all duration-500">
//                   <div className="relative inline-block mb-6">
//                     <motion.img
//                       src={teacher.image}
//                       alt={teacher.name}
//                       className="w-24 h-24 object-cover rounded-2xl mx-auto"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-2">{teacher.name}</h3>
//                   <p className="text-emerald-400 font-medium mb-3">{teacher.subject}</p>
//                   <div className="space-y-2 text-sm">
//                     <div className="text-gray-100">{teacher.experience} Experience</div>
//                     <div className="text-gray-300">{teacher.qualification}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Heritage Section */}
//       <motion.section
//         className="py-20 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
//         <div className="relative container mx-auto px-6">
//           <motion.div className="text-center mb-16" variants={itemVariants}>
//             <h2 className="text-5xl font-bold mb-4">
//               Bihar's <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Legacy in Civil Services</span>
//             </h2>
//             <p className="text-xl text-gray-100">Drawing inspiration for modern exam prep</p>
//           </motion.div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🏛️",
//                 title: "Ancient Wisdom",
//                 desc: "Nalanda's legacy inspires our rigorous UPSC/BPSC curriculum.",
//                 gradient: "from-yellow-400 to-orange-400"
//               },
//               {
//                 icon: "📿",
//                 title: "Cultural Depth",
//                 desc: "Bihar's history enriches our modules on Indian heritage.",
//                 gradient: "from-purple-400 to-pink-400"
//               },
//               {
//                 icon: "🎨",
//                 title: "Innovative Spirit",
//                 desc: "Blending tradition with AI for effective civil services training.",
//                 gradient: "from-green-400 to-blue-400"
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative"
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-3xl blur-xl transition-opacity duration-300 group-hover:opacity-20"
//                      style={{ background: `linear-gradient(135deg, ${item.gradient})` }} />
//                 <div className="relative bg-gray-800/80 backdrop-blur border border-gray-700 rounded-3xl p-8 hover:border-gray-600 transition-all duration-300">
//                   <motion.div
//                     className="text-5xl mb-6 inline-block" // Added inline-block
//                     whileHover={{ scale: 1.1 }} // Reduced scale, removed rotate
//                     transition={{ duration: 0.3 }}
//                   >
//                     {item.icon}
//                   </motion.div>
//                   <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-100 leading-relaxed">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         className="py-20 relative overflow-hidden"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600" />
//         <div className="absolute inset-0 bg-black/40" />
//         <div className="relative container mx-auto px-6 text-center">
//           <motion.div className="max-w-4xl mx-auto space-y-8" variants={itemVariants}>
//             <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">
//               Start Your <br />
//               <span className="text-yellow-400">UPSC/BPSC Journey</span>
//             </h2>
//             <p className="text-xl text-gray-100 leading-relaxed">
//               Enroll in the best courses with 24/7 AI support and rapid doubt resolution.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <motion.button
//                 onClick={() => navigate('/courses')}
//                 className="bg-white text-gray-900 font-bold px-10 py-5 rounded-full text-xl shadow-2xl"
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
//                 whileTap={{ scale: 0.95 }}
//                 animate={{ scale: [1, 1.02, 1] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//               >
//                 Enroll Now
//               </motion.button>
//               <motion.button
//                 className="border-2 border-white text-white font-bold px-10 py-5 rounded-full text-xl"
//                 whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#111827" }}
//                 whileTap={{ scale: 0.95 }}
//                 animate={{ scale: [1, 1.02, 1] }}
//                 transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
//               >
//                 Free Trial
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;


import React from 'react';
import { motion } from 'framer-motion';

// Import Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/About/HeroSection';
import StatsSection from '../components/About/StatsSection';
import StorySection from '../components/About/StorySection';
import FeaturesSection from '../components/About/FeaturesSection';
import TeachersSection from '../components/About/TeachersSection';
import CTASection from '../components/About/CTASection';

// Data can be kept here or imported from a separate data file
const teachers = [
    { name: "Dr. Rajesh Kumar", subject: "Indian Polity & Governance", experience: "12 Years", qualification: "Ph.D. in Political Science, JNU Delhi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
    { name: "Prof. Sunita Devi", subject: "History & Culture", experience: "15 Years", qualification: "M.A. History, Patna University", image: "https://images.unsplash.com/photo-1494790108755-2616c179b5bb?w=400&h=400&fit=crop&crop=face" },
    { name: "Mr. Amit Singh", subject: "Economy & Current Affairs", experience: "8 Years", qualification: "M.A. Economics, BHU", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
    { name: "Dr. Priya Sharma", subject: "Geography & Environment", experience: "10 Years", qualification: "Ph.D. Geography, IIT Kanpur", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" }
];

const features = [
    { icon: "🎓", title: "Live Interactive Classes", description: "Real-time online classes with expert faculty for UPSC & BPSC preparation" },
    { icon: "📚", title: "Comprehensive Study Material", description: "Curated notes, mocks, and resources aligned with UPSC & BPSC syllabus" },
    { icon: "💬", title: "1-Hour Doubt Resolution", description: "Quick video-supported doubt clearing sessions within 1 hour" },
    { icon: "🤖", title: "24/7 AI Chatbot Helpdesk", description: "Instant support and query resolution anytime with our smart AI assistant" },
    { icon: "📊", title: "Progress Tracking", description: "Regular mocks, analytics, and personalized feedback for exam success" },
    { icon: "🏆", title: "Bihar-Focused Integration", description: "Special modules on Bihar-specific topics for BPSC aspirants" }
];

const stats = [
    { number: "10,000+", label: "Active Aspirants", color: "from-emerald-400 to-cyan-400" },
    { number: "500+", label: "Expert Mentors", color: "from-violet-400 to-purple-400" },
    { number: "38", label: "Districts Covered", color: "from-orange-400 to-red-400" },
    { number: "95%", label: "Success Rate", color: "from-blue-400 to-indigo-400" }
];

// Animation variants can also be defined here and passed as props
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Aboutus = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />

      <HeroSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <StatsSection
        stats={stats}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <StorySection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      <FeaturesSection
        features={features}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      {/* You can add the other sections here similarly */}
      <TeachersSection
        teachers={teachers}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      {/* You can add the other sections here similarly */}
      <CTASection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <Footer />
    </div>
  );
};

export default Aboutus;
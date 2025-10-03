// import React, { useState, useEffect } from 'react';
// import { BookOpen, Clock, User, Star, Filter, Search, ChevronDown, Users, Award, X, Zap, Target, CheckCircle, AlertTriangle } from 'lucide-react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// // Helper Component for Notifications (replaces alert())
// const Notification = ({ message, type, onDismiss }) => {
//   if (!message) return null;

//   const styles = {
//     success: {
//       bg: 'bg-green-500/10 border-green-500/30',
//       icon: <CheckCircle className="text-green-400" size={20} />,
//       text: 'text-green-300',
//     },
//     error: {
//       bg: 'bg-red-500/10 border-red-500/30',
//       icon: <AlertTriangle className="text-red-400" size={20} />,
//       text: 'text-red-300',
//     },
//   };

//   const selectedStyle = styles[type] || styles.error;

//   return (
//     <div className={`fixed top-24 right-4 z-50 max-w-sm w-full p-4 rounded-xl shadow-lg backdrop-blur-lg animate-fade-in-down ${selectedStyle.bg}`}>
//       <div className="flex items-start gap-4">
//         <div className="flex-shrink-0">{selectedStyle.icon}</div>
//         <div className={`flex-grow ${selectedStyle.text}`}>
//           <p className="font-semibold text-white">{type === 'success' ? 'Success' : 'Error'}</p>
//           <p className="text-sm">{message}</p>
//         </div>
//         <button onClick={onDismiss} className="text-gray-400 hover:text-white transition-colors">
//           <X size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Sub-component for a single course card for better readability
// const CourseCard = ({ course, handleEnroll, enrolling, currentUser }) => {
//   const getLevelColor = (level) => {
//     switch (level.toLowerCase()) {
//       case 'beginner': return 'border-green-400/50 bg-green-500/10 text-green-300';
//       case 'intermediate': return 'border-yellow-400/50 bg-yellow-500/10 text-yellow-300';
//       case 'advanced': return 'border-red-400/50 bg-red-500/10 text-red-300';
//       default: return 'border-slate-400/50 bg-slate-500/10 text-slate-300';
//     }
//   };
  
//   // Fake but consistent data for presentation
//   const courseIdHash = course._id.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
//   const enrolledStudents = 50 + (courseIdHash % 451); // 50-500
//   const rating = (4.1 + (courseIdHash % 9) / 10).toFixed(1); // 4.1-4.9
//   const reviewCount = 30 + (courseIdHash % 171); // 30-200

//   return (
//     <div className="group flex flex-col bg-slate-800/40 rounded-xl border border-slate-700/80 overflow-hidden transition-all duration-300 hover:border-sky-500/60 hover:shadow-2xl hover:shadow-sky-600/10 hover:-translate-y-2">
//       <div className="relative h-48 overflow-hidden">
//         <img 
//           src={`http://localhost:5000${course.image}`} 
//           alt={course.title}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//         <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full border ${getLevelColor(course.level)}`}>
//           {course.level}
//         </span>
//       </div>
      
//       <div className="p-5 flex flex-col flex-grow">
//         <p className="text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">{course.category}</p>
//         <h3 className="font-bold text-lg text-white mb-3 flex-grow line-clamp-2">{course.title}</h3>
        
//         <div className="flex items-center gap-3 text-sm text-slate-300 mb-4">
//           <User size={16} className="text-slate-400"/>
//           <span>{course.teacher}</span>
//         </div>
        
//         <p className="text-slate-400 text-sm mb-5 line-clamp-3">{course.description}</p>
        
//         <div className="mt-auto pt-4 border-t border-slate-700/80">
//           <div className="flex justify-between items-center text-sm text-slate-300 mb-5">
//             <div className="flex items-center gap-2"><Clock size={16} className="text-slate-400"/> {course.duration} weeks</div>
//             <div className="flex items-center gap-2"><Users size={16} className="text-slate-400"/> {enrolledStudents} enrolled</div>
//           </div>
          
//           <button
//             onClick={() => handleEnroll(course._id)}
//             disabled={enrolling === course._id}
//             className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-500 shadow-lg shadow-sky-600/10 hover:shadow-xl hover:shadow-sky-600/20 transform hover:-translate-y-0.5"
//           >
//             {enrolling === course._id ? (
//               <>
//                 <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
//                 <span>Enrolling...</span>
//               </>
//             ) : (
//               <>
//                 <Award size={18} />
//                 <span>Enroll Now</span>
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// const CoursePage = () => {
//   const [courses, setCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [enrolling, setEnrolling] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedLevel, setSelectedLevel] = useState('all');
//   const [showFilters, setShowFilters] = useState(false);
//   const [notification, setNotification] = useState({ message: '', type: '' });
  
//   const currentUser = JSON.parse(localStorage.getItem('user') || 'null');

//   useEffect(() => {
//     fetchCourses();
//   }, []);
  
//   useEffect(() => {
//     if (notification.message) {
//       const timer = setTimeout(() => {
//         setNotification({ message: '', type: '' });
//       }, 5000); // Hide after 5 seconds
//       return () => clearTimeout(timer);
//     }
//   }, [notification]);

//   useEffect(() => {
//     let filtered = courses;

//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(course =>
//         course.title.toLowerCase().includes(query) ||
//         course.description.toLowerCase().includes(query) ||
//         course.category.toLowerCase().includes(query) ||
//         course.teacher.toLowerCase().includes(query)
//       );
//     }

//     if (selectedCategory !== 'all') {
//       filtered = filtered.filter(course => 
//         course.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }

//     if (selectedLevel !== 'all') {
//       filtered = filtered.filter(course => 
//         course.level.toLowerCase() === selectedLevel.toLowerCase()
//       );
//     }

//     setFilteredCourses(filtered);
//   }, [courses, searchQuery, selectedCategory, selectedLevel]);

//   const fetchCourses = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch('http://localhost:5000/api/courses', {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
      
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Failed to fetch courses');
      
//       setCourses(data.courses || data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEnroll = async (courseId) => {
//     if (!currentUser) {
//       setNotification({ message: 'Please log in to enroll in courses.', type: 'error' });
//       return;
//     }

//     setEnrolling(courseId);
    
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch(`http://localhost:5000/api/courses/${courseId}/enroll`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Failed to enroll in course');
      
//       setNotification({ message: 'Successfully enrolled in course!', type: 'success' });
//       fetchCourses();
//     } catch (err) {
//       setNotification({ message: err.message, type: 'error' });
//     } finally {
//       setEnrolling(null);
//     }
//   };

//   const getUniqueCategories = () => [...new Set(courses.map(course => course.category))];
//   const clearFilters = () => {
//     setSearchQuery('');
//     setSelectedCategory('all');
//     setSelectedLevel('all');
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-900 flex items-center justify-center text-center text-white">
//         <div>
//           <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-700 border-t-sky-500 mx-auto mb-4"></div>
//           <h2 className="text-2xl font-semibold mb-2">Loading Courses...</h2>
//           <p className="text-slate-400">Preparing your learning experience.</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
//         <div className="text-center max-w-md bg-slate-800/50 border border-red-500/30 rounded-xl p-8">
//           <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
//           <h3 className="text-xl font-semibold text-white mb-2">An Error Occurred</h3>
//           <p className="text-red-300">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-900 text-white">
//       <Navbar />
//       <Notification 
//         message={notification.message} 
//         type={notification.type} 
//         onDismiss={() => setNotification({ message: '', type: '' })}
//       />
      
//       {/* Hero Section */}
//       <div className="relative border-b border-slate-800 bg-cover bg-center" style={{backgroundImage: "url('/path/to/your/hero-background.jpg')"}}>
//         <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
//         <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
//             Explore Our Courses
//           </h1>
//           <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
//             Discover world-class UPSC preparation courses designed to transform your civil services journey.
//           </p>
//           <div className="max-w-xl mx-auto">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search by title, category, or instructor..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-slate-800/70 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Filters Section */}
//         <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center gap-2 px-5 py-2.5 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg font-medium transition-colors w-full md:w-auto"
//             >
//               <Filter size={18} />
//               <span>Filters</span>
//               <ChevronDown className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} size={18} />
//             </button>
//             <div className="text-sm text-slate-400">
//               Found <span className="font-semibold text-sky-400">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''}
//             </div>
//           </div>
          
//           {showFilters && (
//             <div className="mt-4 pt-4 border-t border-slate-700 animate-fade-in-down">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-slate-300">Category</label>
//                   <select
//                     value={selectedCategory}
//                     onChange={(e) => setSelectedCategory(e.target.value)}
//                     className="w-full p-2.5 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all"
//                   >
//                     <option value="all">All Categories</option>
//                     {getUniqueCategories().map(category => (
//                       <option key={category} value={category}>{category}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-slate-300">Level</label>
//                   <select
//                     value={selectedLevel}
//                     onChange={(e) => setSelectedLevel(e.target.value)}
//                     className="w-full p-2.5 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all"
//                   >
//                     <option value="all">All Levels</option>
//                     <option value="Beginner">Beginner</option>
//                     <option value="Intermediate">Intermediate</option>
//                     <option value="Advanced">Advanced</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         {/* Active Filters Display */}
//         {(selectedCategory !== 'all' || selectedLevel !== 'all') && (
//             <div className="flex flex-wrap items-center gap-3 mb-8">
//               <p className="text-sm text-slate-400 font-medium">Active Filters:</p>
//               {selectedCategory !== 'all' && (
//                 <span className="flex items-center gap-2 px-3 py-1 bg-sky-500/10 text-sky-300 border border-sky-500/30 rounded-full text-sm">
//                     <Target size={14} /> {selectedCategory}
//                     <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:bg-sky-500/20 rounded-full p-0.5"><X size={12} /></button>
//                 </span>
//               )}
//               {selectedLevel !== 'all' && (
//                 <span className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-300 border border-green-500/30 rounded-full text-sm">
//                     <Zap size={14} /> {selectedLevel}
//                     <button onClick={() => setSelectedLevel('all')} className="ml-1 hover:bg-green-500/20 rounded-full p-0.5"><X size={12} /></button>
//                 </span>
//               )}
//                <button onClick={clearFilters} className="text-sm text-slate-400 hover:text-white underline transition-colors">Clear All</button>
//             </div>
//         )}

//         {/* Courses Grid */}
//         {filteredCourses.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredCourses.map((course) => (
//               <CourseCard key={course._id} course={course} handleEnroll={handleEnroll} enrolling={enrolling} currentUser={currentUser} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <BookOpen className="h-16 w-16 text-slate-500 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold text-white mb-2">No Courses Found</h3>
//             <p className="text-slate-400 mb-6">Your search and filter combination yielded no results.</p>
//             <button
//               onClick={clearFilters}
//               className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors font-semibold"
//             >
//               Reset All Filters
//             </button>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default CoursePage;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Data for the "Core Offerings" section ---
const courseOfferings = [
  { 
    id: 1, 
    title: "Comprehensive Video Lectures",
    description: "Engage with expert-led video content covering the entire syllabus, available on-demand." 
  },
  { 
    id: 2, 
    title: "Advanced Mock Test Series",
    description: "Benchmark your progress with tests that simulate the real exam environment and provide detailed analytics."
  },
  { 
    id: 3, 
    title: "Personalized Mentorship",
    description: "Receive one-on-one guidance and strategic advice from seasoned educators and former civil servants."
  },
  { 
    id: 4, 
    title: "Daily Current Affairs Analysis",
    description: "Master the most critical part of the exam with daily updates and in-depth analysis from our experts."
  },
];

// --- Motion Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

// --- Color Palette (Matches Events.jsx) ---
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
  // UPDATED: Target date is now October 6, 2025, at 6:00 PM IST
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
        <span className="text-2xl font-bold text-white">Our Courses are Live!</span>
      )}
    </div>
  );
};

export default function CoursePage() {
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
              A New Era of Learning is <span className="text-[var(--brand-accent)]">Coming Soon</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto px-4"
            >
              We are building a comprehensive course platform designed to empower your UPSC & BPSC preparation.
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
              Our New Course Platform Arrives
            </p>
            <Countdown />
            <p className="text-slate-400 max-w-xl mx-auto">
              Get ready for an unparalleled learning experience. Sign up to our newsletter for launch updates and early bird offers.
            </p>
          </motion.div>

          {/* Core Offerings Section */}
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
              {courseOfferings.map((offering, index) => (
                <motion.div
                  variants={fadeUp}
                  key={offering.id}
                  className="bg-[var(--subtle-bg)] border border-[var(--border-color)] rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:-translate-y-1"
                >
                  <span className="absolute top-0 right-0 text-8xl font-bold font-mono text-[var(--border-color)] opacity-20 group-hover:text-[var(--brand-accent)]/20 transition-colors duration-300 -translate-y-1/4 translate-x-1/4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold text-slate-100 mb-2">{offering.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{offering.description}</p>
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
};
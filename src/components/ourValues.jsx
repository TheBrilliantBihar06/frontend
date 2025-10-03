
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Scale,
  Award,
  Search,
  TrendingUp,
  Shield,
  ArrowRight,
  Phone,
} from "lucide-react";

const OurValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Inclusiveness",
      text: "Every UPSC aspirant deserves equal opportunity. We foster a supportive environment where students from diverse backgrounds receive personalized guidance and resources.",
      icon: <Users className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "Integrity",
      text: "Honesty and transparency are at the heart of our mentoring. We ensure fair practices and genuine guidance for every aspirant’s journey.",
      icon: <Scale className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Excellence",
      text: "We set the highest standards through innovative teaching and mentorship, empowering aspirants to achieve exceptional results.",
      icon: <Award className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Freedom of Inquiry",
      text: "Curiosity and open dialogue are encouraged. We empower students to ask questions, explore perspectives, and sharpen critical thinking.",
      icon: <Search className="w-10 h-10 text-purple-400" />,
    },
    {
      title: "Growth Mindset",
      text: "Resilience and adaptability drive success. We motivate aspirants to embrace challenges, learn from mistakes, and keep improving.",
      icon: <TrendingUp className="w-10 h-10 text-pink-400" />,
    },
    {
      title: "Courage",
      text: "Civil services prep requires courage. We instill confidence to face challenges head-on and achieve goals with determination.",
      icon: <Shield className="w-10 h-10 text-red-400" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full bg-gradient-to-b from-[#bdbdbd] to-[#dddddd] py-20 px-6 md:px-16 text-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={cardVariants}>
         <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
  <span>Our </span>
  <span
    className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] bg-clip-text text-transparent"
    style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
  >
    Values
  </span>
</h2>
  
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            These principles shape everything we do at Brilliant Bihar, guiding
            our approach to UPSC coaching and mentoring excellence.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-[#9a9a9a] backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#4a4a4a]/90 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#7a7a7a] via-[#5a5a5a] to-[#7a7a7a] rounded-xl p-10 text-center border border-gray-600 shadow-xl">
            <h3 className="text-2xl font-bold text-white">
              Begin Your Journey to Success Today
            </h3>
            <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
              Join thousands of aspirants who trust our expert faculty and
              innovative learning platform.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#f59e0b] text-black font-semibold px-6 py-3 rounded-md hover:brightness-110 transition"
              >
                Explore Courses <ArrowRight className="w-4 h-4" />
              </a>
              <a className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-md hover:bg-white/10 transition text-white">
                Request Callback <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurValues;

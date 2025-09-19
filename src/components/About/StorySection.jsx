// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Target,
//   Eye,
//   BookOpen,
//   Gem,
// } from "lucide-react"; // ✅ Lucide icons

// const StorySection = ({ containerVariants, itemVariants }) => {
//   const sections = [
//     {
//       id: "mission",
//       title: "Our Mission",
//       icon: <Target className="w-6 h-6" />,
//       color: "emerald",
//       content: (
//         <>
//           <p className="text-lg text-gray-100 leading-relaxed">
//             To provide best-in-class UPSC and BPSC courses with AI-driven
//             support, video-based doubt resolution, and expert faculty tailored
//             to Bihar's aspirants.
//           </p>
//           <p className="text-gray-300 leading-relaxed">
//             Committed to empowering every student with tools for civil services
//             success.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "vision",
//       title: "Our Vision",
//       icon: <Eye className="w-6 h-6" />,
//       color: "blue",
//       content: (
//         <>
//           <p className="text-lg text-gray-100 leading-relaxed">
//             To transform Bihar into a hub for UPSC and BPSC toppers through
//             accessible, innovative education.
//           </p>
//           <p className="text-gray-300 leading-relaxed">
//             A future where every aspirant benefits from 24/7 AI support and
//             personalized prep.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "story",
//       title: "Our Story",
//       icon: <BookOpen className="w-6 h-6" />,
//       color: "purple",
//       content: (
//         <>
//           <p className="text-lg text-gray-100 leading-relaxed">
//             Founded in 2023 by civil services experts to address preparation
//             challenges in Bihar.
//           </p>
//           <p className="text-gray-300 leading-relaxed">
//             From 50 students to 10,000+ aspirants, offering specialized
//             UPSC/BPSC courses with AI integration.
//           </p>
//           <p className="text-gray-300 leading-relaxed">
//             Supported by alumni who excelled in civil services and are giving
//             back.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: "values",
//       title: "Our Values",
//       icon: <Gem className="w-6 h-6 " />,
//       color: "purple",
//       content: (
//         <div className="grid sm:grid-cols-2 gap-4">
//           {[
//             {
//               title: "Excellence",
//               desc: "Top-quality UPSC/BPSC content delivery",
//               color: "emerald",
//             },
//             {
//               title: "Accessibility",
//               desc: "Affordable courses for all backgrounds",
//               color: "blue",
//             },
//             {
//               title: "Innovation",
//               desc: "AI chatbot & video doubts for modern learning",
//               color: "purple",
//             },
//             {
//               title: "Dedication",
//               desc: "Focused on Bihar's civil services success",
//               color: "pink",
//             },
//           ].map((value, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-gray-900/50 border border-gray-600 rounded-xl p-4"
//               whileHover={{
//                 scale: 1.03,
//                 boxShadow: "0 0 10px rgba(255,255,255,0.1)",
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className={`font-bold text-${value.color}-400 mb-2`}>
//                 {value.title}
//               </div>
//               <div className="text-sm text-gray-300">{value.desc}</div>
//             </motion.div>
//           ))}
//         </div>
//       ),
//     },
//   ];

//   return (
//     <motion.section
//       className="py-20 relative"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//     >
//       <div className="container mx-auto px-6 max-w-5xl">
//         {/* Section Heading */}
//         <motion.div className="text-center mb-16" variants={itemVariants}>
//           <h2 className="text-5xl font-bold mb-6">
//             Our{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
//               Journey
//             </span>
//           </h2>
//           <p className="text-xl text-gray-100">
//             Discover how we empower UPSC & BPSC aspirants
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Timeline vertical line */}
//           <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-purple-400 rounded-full"></div>

//           {sections.map((section) => (
//             <motion.div
//               key={section.id}
//               className="relative flex items-start space-x-6 mb-12"
//               variants={itemVariants}
//             >
//               {/* Icon inside colored circle */}
//               <div
//                 className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center bg-${section.color}-500 border-2 border-${section.color}-300 text-white shadow-lg shadow-${section.color}-500/30`}
//               >
//                 {section.icon}
//               </div>

//               {/* Content */}
//               <div className="flex-1">
//                 <h3 className="text-2xl font-bold mb-4 text-white">
//                   {section.title}
//                 </h3>
//                 <motion.div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 space-y-4">
//                   {section.content}
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default StorySection;

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  BookOpen,
  Gem,
} from "lucide-react"; // ✅ Lucide icons

const StorySection = ({ containerVariants, itemVariants }) => {
  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      icon: <Target className="w-6 h-6" />,
      color: "emerald",
      content: (
        <>
          <p className="text-lg text-gray-100 leading-relaxed">
            To provide best-in-class UPSC and BPSC courses with AI-driven
            support, video-based doubt resolution, and expert faculty tailored
            to Bihar's aspirants.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Committed to empowering every student with tools for civil services
            success.
          </p>
        </>
      ),
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: <Eye className="w-6 h-6" />,
      color: "blue",
      content: (
        <>
          <p className="text-lg text-gray-100 leading-relaxed">
            To transform Bihar into a hub for UPSC and BPSC toppers through
            accessible, innovative education.
          </p>
          <p className="text-gray-300 leading-relaxed">
            A future where every aspirant benefits from 24/7 AI support and
            personalized prep.
          </p>
        </>
      ),
    },
    {
      id: "story",
      title: "Our Story",
      icon: <BookOpen className="w-6 h-6" />,
      color: "purple",
      content: (
        <>
          <p className="text-lg text-gray-100 leading-relaxed">
            Founded in 2023 by civil services experts to address preparation
            challenges in Bihar.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From 50 students to 10,000+ aspirants, offering specialized
            UPSC/BPSC courses with AI integration.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Supported by alumni who excelled in civil services and are giving
            back.
          </p>
        </>
      ),
    },
    {
      id: "values",
      title: "Our Values",
      icon: <Gem className="w-6 h-6 " />,
      color: "purple",
      content: (
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Excellence",
              desc: "Top-quality UPSC/BPSC content delivery",
              color: "emerald",
            },
            {
              title: "Accessibility",
              desc: "Affordable courses for all backgrounds",
              color: "blue",
            },
            {
              title: "Innovation",
              desc: "AI chatbot & video doubts for modern learning",
              color: "purple",
            },
            {
              title: "Dedication",
              desc: "Focused on Bihar's civil services success",
              color: "pink",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900/50 border border-gray-600 rounded-xl p-4"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 10px rgba(255,255,255,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={`font-bold text-${value.color}-400 mb-2`}>
                {value.title}
              </div>
              <div className="text-sm text-gray-300">{value.desc}</div>
            </motion.div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <motion.section
      className="pt-20 pb-3 relative" // Changed py-20 to pt-20 pb-12
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Heading */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-100">
            Discover how we empower UPSC & BPSC aspirants
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-purple-400 rounded-full"></div>

          {sections.map((section) => (
            <motion.div
              key={section.id}
              className="relative flex items-start space-x-6 mb-12"
              variants={itemVariants}
            >
              {/* Icon inside colored circle */}
              <div
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center bg-${section.color}-500 border-2 border-${section.color}-300 text-white shadow-lg shadow-${section.color}-500/30`}
              >
                {section.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {section.title}
                </h3>
                <motion.div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 space-y-4">
                  {section.content}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StorySection;


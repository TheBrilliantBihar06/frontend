import React from 'react';

const OrganizationalValues = () => {
  const values = [
    {
      number: "01",
      title: "Excellence and Innovation",
      description: "By staying at the forefront of competitive exam preparation methodologies, we continuously innovate our teaching techniques and study materials. We embrace modern technology and proven strategies to help UPSC and BPSC aspirants achieve their dreams.",
      icon: "🚀",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      number: "02", 
      title: "Commitment and Ethics",
      description: "All Brilliant Bihar faculty and staff are committed to the highest ethical standards in education. We are dedicated to each student's success, maintaining fairness in assessments, and upholding the moral values essential for future civil servants of Bihar and India.",
      icon: "⚖️",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      number: "03",
      title: "Trust and Integrity", 
      description: "At Brilliant Bihar, we build lasting relationships through honesty and reliability. We provide accurate guidance, transparent progress tracking, and genuine support to create a trustworthy environment where students and faculty can focus on achieving civil service excellence.",
      icon: "🤝",
      gradient: "from-orange-500 to-red-600"
    },
    {
      number: "04",
      title: "Accessibility and Equality",
      description: "One of our fundamental missions is to democratize quality civil service preparation. We strive to make UPSC and BPSC coaching accessible to all, regardless of economic background, ensuring that merit and dedication are the only barriers to success in competitive examinations.",
      icon: "🌍",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen text-white p-8 relative overflow-hidden" style={{backgroundColor: '#111827'}}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Organizational </span>
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">values</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            The core principles that drive our mission to create exceptional civil servants for Bihar and India
          </p>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{value.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-6 mt-4">
                  {value.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-white/5 to-transparent rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationalValues;
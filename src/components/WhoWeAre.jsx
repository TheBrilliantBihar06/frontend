import React from 'react';

const WhyBrilliantBihar = () => {
  const textColor = '#D1D5DB'; // Light gray for body text, matching your image

  const features = [
    {
      icon: "🤝",
      title: "Trusted partnerships",
      description: "Brilliant Bihar transforms the student-mentor relationship through trust, respect, and collaboration. We're chosen for our deep commitment, open advocacy, and transparent engagement."
    },
    {
      icon: "💡",
      title: "Open source advocacy",
      description: "Our heart beats for open knowledge sharing. With a rich history of contributions to the civil services community, Brilliant Bihar is all about enhancing and expanding educational resources."
    },
    {
      icon: "⚡",
      title: "Engineering prowess",
      description: "Our reputation as a leader in the education domain is built upon a bedrock of academic excellence. The Brilliant Bihar team consists of educators who are more than just skilled – they're artisans of knowledge, crafting solutions that are as robust as they are elegant."
    },
    {
      icon: "🏆",
      title: "Commitment to quality",
      description: "Quality isn't just a buzzword at Brilliant Bihar; it's the essence of our delivery model. From the smallest study material to the overarching course architecture, our unwavering attention to detail ensures that quality permeates every aspect of our work."
    },
    {
      icon: "🎯",
      title: "Custom solutions tailored to your needs",
      description: "Brilliant Bihar transforms the student-mentor relationship through trust, respect, and collaboration. We're chosen for our deep commitment, open advocacy, and transparent engagement."
    },
    {
      icon: "🔧",
      title: "Unwavering support and continuity",
      description: "Our heart beats for continuous student support. With a rich history of contributions to the civil services community, Brilliant Bihar is all about enhancing and expanding educational excellence."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-8" style={{ backgroundColor: '#111827', color: textColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
         <h1 className="text-6xl font-bold mb-6">
            <span className="text-white">Why</span>
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Brilliant Bihar?</span>
         </h1>
          <p className="text-lg max-w-2xl">
            Choosing Brilliant Bihar means opting for a partner who brings excellence 
            and a legacy of trust, quality, and innovation in civil services preparation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl text-gray-800">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                {/* Changed this to a solid color as per your previous request, 
                    but you can apply a similar gradient if you want consistency. */}
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#f2f4f4ff' }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-transparent text-rinline-flex items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl py-4 px-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white hover:from-blue-600 hover:to-purple-600ed-400 border-2 border-white-400 px-8 py-3 rounded-full font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center gap-2">
            TALK TO AN EXPERT
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyBrilliantBihar;
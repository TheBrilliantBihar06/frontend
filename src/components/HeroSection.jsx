import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Tagline */}
        <p className="text-sm md:text-base uppercase tracking-wide text-red-400 mb-3">
          Learn coding the right way
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-red-500">Brilliant Bihar</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
          Learn C Programming |
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Confused about which course to take? We’ve got you covered! Browse courses 
          and discover the best option for you. It’s free! 
          <span className="text-white font-semibold"> Brilliant Bihar</span> is our effort to teach 
          the basics and those coding techniques in a short time that took years to master.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#courses"
            className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Explore Courses
          </a>
          <a
            href="#articles"
            className="bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition"
          >
            Read Articles
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-400">Courses</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">500K+</h3>
            <p className="text-gray-400">Students</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">5.0</h3>
            <p className="text-gray-400">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";

const WhyJoinUs = () => {
  return (
    <section className="w-full bg-[#111826] py-12 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Join Us
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Jio Institute is a multi-disciplinary education institute, 
            dedicated to the pursuit of excellence by bringing together 
            global scholars as well as providing an enriching student 
            experience through world-class education, relevant research 
            platforms and a culture of innovation.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-lg">
            <img
              src="/your-image.jpg" // replace manually with your image path
              alt="Why Join Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;

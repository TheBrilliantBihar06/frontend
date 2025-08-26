import React from "react";

export default function CoursesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10 text-center">
          Premium Courses
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#161a23] rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-2xl transition relative">
            {/* Image Placeholder */}
            <div className="h-40 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">[ Add Image Here ]</span>
            </div>

            {/* Discount Badge */}
            <div className="absolute  text-white text-xs font-bold px-3 py-1 rounded-br-lg">
              
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">
                The Ultimate Job Ready Data Science Course
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Ready to break into the world of Data Science? This all-in-one
                Job-Ready course will help you master the skills.
              </p>

              {/* Info */}
              <div className="flex items-center space-x-4 text-sm text-gray-400 mt-4">
                <span></span>
                <span></span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                <span></span>
                <span></span>
              </div>

              {/* Price */}
              <div className="mt-4 text-xl font-bold">
                {" "}
                <span className="text-gray-500 line-through text-sm"></span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#161a23] rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-2xl transition relative">
            {/* Image Placeholder */}
            <div className="h-40 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">[ Add Image Here ]</span>
            </div>

            {/* Discount Badge */}
            <div className="absolute  text-white text-xs font-bold px-3 py-1 rounded-br-lg">
              
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">
                [English] Complete 2025 Python Bootcamp: Learn Python from
                Scratch
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Unlock your potential and become a confident Python developer in
                2025 with this beginner-friendly course.
              </p>

              {/* Info */}
              <div className="flex items-center space-x-4 text-sm text-gray-400 mt-4">
                <span></span>
                <span></span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                <span></span>
                <span></span>
              </div>

              {/* Price */}
              <div className="mt-4 text-xl font-bold">
                {" "}
                <span className="text-gray-500 line-through text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

const Profile = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
      <div className="bg-white p-8 rounded-lg shadow-md mt-5">
        
        {/* Profile Header: Photo and Name */}
        <div className="flex items-center space-x-6">
          {/* Photo Icon Placeholder */}
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          
          {/* Name and Specialization */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Dr. Evelyn Reed</h3>
            <p className="text-lg text-teal-600 font-medium mt-1">
              Quantum Physics
            </p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          {/* Experience */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Experience</h4>
            <p className="text-lg text-gray-700 mt-1">15+ Years</p>
          </div>

          {/* Short Description */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">About Me</h4>
            <p className="text-gray-600 leading-relaxed mt-2">
              Dedicated and passionate physicist with over a decade of experience in academic research and teaching. My work focuses on the fundamental principles of quantum mechanics and its applications in modern technology. I am committed to fostering a challenging and supportive learning environment for all my students.
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 text-right">
            <button
                type="button"
                className="py-2 px-5 rounded-md font-medium bg-teal-500 text-white hover:bg-teal-600 transition duration-300"
            >
                Edit Profile
            </button>
        </div>

      </div>
    </section>
  );
};

export default Profile;
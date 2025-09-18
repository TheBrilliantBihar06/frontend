import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Uprendra from "../assets/upendraanmol.png";
import Rajiv from "../assets/rajivranjan.png";
import DRCB from "../assets/drcb.png";

const ThreeDivComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Expert</span> Educators
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Experience the wisdom of renowned mentors shaping future civil servants.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1 - UPSC */}
          <div className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-orange-300 transition-all duration-500 group hover:scale-105 hover:shadow-2xl">
            {/* Faculty Image */}
            <div className="relative h-64 w-full">
              <img
                src={DRCB}
                alt="Dr. C.B.P Srivastava"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Dr. C.B.P Srivastava</h3>
              <p className="text-gray-300 mb-6">
                President, Centre for Applied Research in Governance (CARG)
              </p>
              <button
                onClick={() => navigate("/Faculty1")} 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                <span>Read more</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 2 - BPSC */}
          <div className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-300 transition-all duration-500 group hover:scale-105 hover:shadow-2xl">
            {/* Faculty Image */}
            <div className="relative h-64 w-full">
              <img
                src={Uprendra}
                alt="Upendra Anmol"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Upendra Anmol</h3>
              <p className="text-gray-300 mb-6">
                Founder, Center for Administrative Literacy (CAL) & Director, SPACE IAS Academy
              </p>
              <button
                onClick={() => navigate("/Faculty2")}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                <span>Read more</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 3 - Foundation */}
          <div className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-green-300 transition-all duration-500 group hover:scale-105 hover:shadow-2xl">
            {/* Faculty Image */}
            <div className="relative h-64 w-full">
              <img
                src={Rajiv}
                alt="Rajiv Ranjan"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Rajiv Ranjan</h3>
              <p className="text-gray-300 mb-6">
                Founder, Center for Administrative Literacy (CAL) & Director, SPACE IAS Academy
              </p>
              <button
                onClick={() => navigate("/Faculty3")}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-300"
              >
                <span>Read more</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThreeDivComponent;

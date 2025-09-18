import React from 'react';
import { BookOpen, Users, Award, ArrowRight, GraduationCap, Target, Clock } from 'lucide-react';

export default function BrilliantBiharLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111827' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Merit-Based Selection
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Unlock Your 
                <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Civil Services
                </span>
                <span className="block">Dreams</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Clear our qualifying exam and get <strong className="text-orange-400">FREE ACCESS</strong> to premium UPSC & BPSC coaching with Bihar's top civil services faculties.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center">
                  Take Qualifying Exam
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">500+</div>
                  <div className="text-sm text-gray-400">Selections</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">95%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">FREE</div>
                  <div className="text-sm text-gray-400">For Qualified</div>
                </div>
              </div>
            </div>

            {/* Right Side - Student Image Replacement */}
            <div className="flex-1 relative">
              <div className="relative bg-gradient-to-br from-purple-500/30 to-white/30 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  FREE ACCESS
                </div>
                
                {/* Mock Student Figure */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">Aspiring IAS Officer</h3>
                  <p className="text-gray-300 text-center mb-6">
                    "Brilliant Bihar helped me achieve my dream of serving Bihar through civil services."
                  </p>
                  
                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <Target className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <div className="text-sm text-white font-medium">Expert Faculty</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-sm text-white font-medium">Small Batches</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-sm text-white font-medium">Flexible Hours</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                      <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-sm text-white font-medium">Study Material</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Simple 3-step process to unlock your free premium civil services coaching
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Take the Exam</h3>
              <p className="text-gray-300">
                Appear for our carefully designed qualifying examination that tests your aptitude and dedication.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Clear the Merit</h3>
              <p className="text-gray-300">
                Score above the merit threshold to qualify for our premium coaching program.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Start Learning</h3>
              <p className="text-gray-300">
                Get free access to study with Bihar's best civil services faculties and achieve your dreams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      {/* <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who have transformed their lives through our merit-based program.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25">
            Apply for Qualifying Exam
          </button>
        </div>
      </div> */}
    </div>
  );
}
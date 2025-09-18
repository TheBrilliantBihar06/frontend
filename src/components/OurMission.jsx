import React from 'react';
import { Target, Users, Award, Globe, BookOpen, Heart, Search, GraduationCap, Shield, Rocket, Users2, Trophy, Eye, Mountain } from 'lucide-react';

const MissionVisionComponent = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Images */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {/* Top left image - Target/Precision */}
              <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl p-8 flex items-center justify-center h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-orange-400/30"></div>
                <div className="relative">
                  <Target className="w-16 h-16 text-orange-600" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Top right image - Teamwork */}
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-8 flex items-center justify-center h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-400/30"></div>
                <div className="relative">
                  <Users className="w-16 h-16 text-blue-600" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
              </div>

              {/* Bottom spanning image - Growth/Strategy */}
              <div className="col-span-2 z-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-3xl p-8 flex items-center justify-center h-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/30 to-gray-900/30"></div>
                <div className="relative   flex items-center space-x-6">
                  <Trophy className="w-12 h-12 text-yellow-400" />
                  <Award className="w-10 h-10 text-orange-400" />
                  <GraduationCap className="w-14 h-14 text-blue-400" />
                  <Globe className="w-11 h-11 text-green-400" />
                </div>
                <div className="absolute top-4 right-4 w-20 h-1 bg-orange-400 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-1 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-8 -left-8 grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }, (_, i) => (
                <div key={i} className="w-2 h-2 bg-orange-200 rounded-full opacity-60"></div>
              ))}
            </div>
            <div className="absolute z-0 -bottom-8 right-24 grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }, (_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-200 rounded-full opacity-60"></div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 space-y-12">
            {/* Header */}
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Beyond the Code – What Defines{' '}
                <span className="text-orange-500">Brilliant Bihar's</span> Journey
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our fundamental beliefs drive our commitment to the success of students.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                Transforming Bihar into a hub of brilliant minds through world-class education and unwavering support. We aspire to create a platform where financial limitations never become a barrier for deserving students with big dreams.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                We identify and nurture Bihar's brightest minds through rigorous entrance examinations, providing 200 exceptional students annually with comprehensive free scholarships and expert faculty guidance, ensuring merit triumphs over financial constraints while empowering future leaders to serve the nation with excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Cards - Bottom Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">How We Achieve Our Mission</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Rigorous Selection</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Identifying brightest minds through comprehensive entrance examination</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">200 Annual Scholars</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Selecting exceptional students for comprehensive scholarship program</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Expert Faculty</h4>
              <p className="text-gray-300 text-sm leading-relaxed">World-class coaching from highly experienced civil services mentors</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Merit Over Money</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Ensuring financial constraints never limit deserving talent</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Bridge Opportunity Gap</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Connecting Bihar's youth with national-level competition readiness</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Future Leaders</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Empowering students to serve the nation with integrity and excellence</p>
            </div>
          </div>
        </div>

        {/* Vision Goals - Additional Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Vision in Action</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Transform Education</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Nurturing raw talent into excellence across Bihar's educational landscape</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">200 Scholars Annually</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Supporting meritorious students with world-class guidance and faculty</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Breaking Barriers</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Ensuring financial limitations never hinder deserving students' dreams</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Excellence in Civil Services</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Empowering students for UPSC and BPSC success with integrity</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">Knowledge & Leadership</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Building responsible leaders with deep social consciousness</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
              <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-white">National Pride</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Creating change-makers who represent Bihar on global platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionComponent;
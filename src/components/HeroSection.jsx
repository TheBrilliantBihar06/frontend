import React, { useState, useEffect } from 'react';
import mainImage from '../assets/main1.jpg'; // Ensure you have an image in this path
import { FaWpforms } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  BookOpen, 
  Star, 
  ArrowRight, 
  Play,
  CheckCircle,
  Calendar,
  Trophy,
  Target,
  Clock,
  Zap
} from 'lucide-react';

// Mock navigation
const useNavigate = () => {
  return (path) => {
    console.log(`Navigating to: ${path}`);
  };
};

// Replace with your image path

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [enrollmentCount, setEnrollmentCount] = useState(4850);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "AIR 45",
      service: "IAS",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "Brilliant Bihar transformed my UPSC journey!"
    },
    {
      name: "Rajesh Kumar",
      rank: "AIR 78", 
      service: "IPS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "The personalized mentorship made all the difference."
    },
    {
      name: "Sneha Patel",
      rank: "AIR 92",
      service: "IFS", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "Best investment for my civil services preparation."
    }
  ];


  // Rotating testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animated enrollment counter
  useEffect(() => {
    const interval = setInterval(() => {
      setEnrollmentCount(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-no-repeat  bg-center bg-cover  transition-transform duration-1000 ease-out"
          style={{ 
            backgroundImage: `url(${mainImage})`,
            transform: `scale(1.1) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        
        {/* Multi-layer gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-orange-900/20"></div> */}
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Content - Main Hero Text */}
          <div className="lg:col-span-2 text-center lg:text-left space-y-8">
            
          

            {/* Enhanced Subtitle with Animation */}
            <div className="space-y-4">
              <p className="text-red-400 uppercase tracking-widest text-sm font-bold animate-fade-in">
                🎯 India's Premier UPSC Institute
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 mx-auto lg:mx-0 rounded-full shadow-lg"></div>
            </div>

            {/* Main Heading with Improved Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block text-white mb-2 animate-slide-up">Transform Your</span>
                <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-slide-up animation-delay-200">
                  Civil Service
                </span>
                <span className="block text-white animate-slide-up animation-delay-400">Dreams</span>
              </h1>
              
              {/* Decorative Line */}
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-pink-400"></div>
                <Star className="w-4 h-4 text-yellow-400 animate-spin-slow" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-pink-400 to-orange-400"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="max-w-2xl space-y-6">
              <p className="text-xl text-gray-200 leading-relaxed">
                Join <span className="text-red-400 font-bold">Brilliant Bihar</span> and unlock your potential with 
                <span className="text-orange-400 font-semibold"> expert guidance</span>, comprehensive study materials, and 
                <span className="text-pink-400 font-semibold"> personalized mentorship</span>.
              </p>
              
              {/* Enhanced Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Target, text: "Expert Faculty", color: "text-blue-400" },
                  { icon: Zap, text: "Live Classes", color: "text-green-400" }, 
                  { icon: BookOpen, text: "Study Materials", color: "text-purple-400" },
                  { icon: Trophy, text: "Mock Tests", color: "text-yellow-400" }
                ].map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex items-center p-3 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                      <FeatureIcon className={`w-5 h-5 ${feature.color} mr-3 flex-shrink-0`} />
                      <span className="text-white text-sm font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced CTA Section */}
      <div className="flex flex-col sm:flex-row gap-6 pt-8">
  <Link
    to="/form"
    className="group flex items-center justify-center px-10 py-5 border-2 border-white/40 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-300"
  >
    <FaWpforms className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    <span className="text-lg">Enroll Now</span>
  </Link>
</div>



            {/* Trust Indicators with Animation */}
            
          </div>

          
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-40 animate-float">
        <div className="w-16 h-16 border-2 border-red-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-bounce-slow">
        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-lg rotate-45"></div>
      </div>
      <div className="absolute top-1/2 left-5 opacity-20 animate-pulse">
        <Star className="w-8 h-8 text-yellow-400" />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-20px); 
            opacity: 0.6;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-15px) rotate(45deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
            line-height: 1.1;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
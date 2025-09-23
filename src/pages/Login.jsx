import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      console.log("Attempting login with:", { 
        identifier: emailOrUsername, 
        password: password ? "********" : "[empty]" 
      });
      
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: emailOrUsername,
          password,
        }),
      });
      
      const data = await res.json();
      console.log("Login response status:", res.status);
      console.log("Login response:", data);
      
      if (!data.success) {
        throw new Error(data.message || "Login failed");
      }
      
      // Store both user data and token in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      
      console.log("Stored user data:", data.user);
      console.log("User role:", data.user.role);
      
      // Role-based redirection
      const userRole = data.user.role;
      
      if (userRole === "admin") {
        navigate("/admin-dashboard");
      } else if (userRole === "teacher") {
        navigate("/teacher-dashboard");
      } else if (userRole === "student") {
        navigate("/student-dashboard");
      } else {
        // Default fallback if role is not recognized
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main Login Section */}
      <main className="flex-grow bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-500/20 to-gray-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-gray-400/10 to-gray-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative w-full max-w-md z-10">
          {/* Brand Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl mb-6 shadow-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-3">
              Brilliant Bihar
            </h1>
            <p className="text-gray-300 text-lg font-medium">
              Welcome back to your learning journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Login Card */}
          <div className="relative">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl"></div>
            
            {/* Card Content */}
            <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-white mb-2">Sign In</h2>
                <p className="text-gray-300">Enter your credentials to continue</p>
              </div>

              {/* Email/Username Field */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  Email or Username
                </label>
                <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                  <input
                    type="text"
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:border-gray-400/50 focus:ring-2 focus:ring-gray-400/20 focus:bg-white/15 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your email or username"
                    required
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <User className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-gray-300' : 'text-gray-400'}`} />
                  </div>
                  {focusedField === 'email' && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 -z-10 animate-pulse"></div>
                  )}
                </div>
              </div>
              
              {/* Password Field */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gray-400" />
                  Password
                </label>
                <div className={`relative transition-all duration-300 ${focusedField === 'password' ? 'transform scale-[1.02]' : ''}`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:border-gray-400/50 focus:ring-2 focus:ring-gray-400/20 focus:bg-white/15 text-white placeholder-gray-400 pr-12 transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 hover:scale-110 ${focusedField === 'password' ? 'text-gray-300' : 'text-gray-400'} hover:text-gray-200`}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  {focusedField === 'password' && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/10 to-gray-600/10 -z-10 animate-pulse"></div>
                  )}
                </div>
              </div>
              
              {/* Remember Me */}
              <div className="flex items-center text-sm">
                <label className="flex items-center text-gray-300 cursor-pointer group">
                  <input type="checkbox" className="sr-only" />
                  <div className="relative w-5 h-5 bg-white/10 border border-white/20 rounded group-hover:bg-white/20 transition-all duration-300">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="ml-3 group-hover:text-white transition-colors duration-300">Remember me</span>
                </label>
              </div>
              
              {/* Error Message */}
              {error && (
                <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 p-4 rounded-2xl animate-shake">
                  <p className="text-red-200 text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    {error}
                  </p>
                </div>
              )}
              
              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center">
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
              </button>
            </form>
          </div>
          
          {/* Bottom Decoration */}
          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>© 2024 Brilliant Bihar. Empowering Education.</p>
          </div>
        </div>
      </main>

      <Footer />

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
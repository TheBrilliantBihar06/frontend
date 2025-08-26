import React, { useState } from "react";
import { Mail, ArrowLeft, CheckCircle, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending reset email
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
      setCountdown(60);

      // Start countdown timer
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 2000);
  };

  const handleResend = () => {
    if (countdown === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCountdown(60);

        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }, 1000);
    }
  };

  const handleBackToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{ backgroundColor: "#1e2836" }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-orange-400/60 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400/60 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-amber-400/60 rounded-full animate-bounce delay-500"></div>
        </div>

        {/* Main Container */}
        <div className="relative w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
              {isEmailSent ? "Check Your Email" : "Forgot Password?"}
            </h1>
            <p className="text-gray-300">
              {isEmailSent
                ? "We've sent a password reset link to your email address"
                : "No worries! Enter your email and we'll send you a reset link"}
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-300">
            {!isEmailSent ? (
              // Email Input Form
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:ring-0 focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !email}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Reset Link...
                    </div>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>
              </div>
            ) : (
              // Success State
              <div className="text-center space-y-6">
                {/* Success Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>

                {/* Email Sent Message */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Email Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We've sent a password reset link to{" "}
                    <span className="font-semibold text-orange-600">
                      {email}
                    </span>
                    . Please check your inbox and click the link to reset your
                    password.
                  </p>
                </div>

                {/* Instructions */}
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-left">
                  <h4 className="font-semibold text-orange-800 mb-2 text-sm">
                    What to do next:
                  </h4>
                  <ul className="text-orange-700 text-xs space-y-1">
                    <li>• Check your email inbox (and spam folder)</li>
                    <li>• Click the password reset link</li>
                    <li>• Create a new secure password</li>
                    <li>• Sign in with your new password</li>
                  </ul>
                </div>

                {/* Resend Button */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Didn't receive the email?
                  </p>
                  <button
                    onClick={handleResend}
                    disabled={countdown > 0 || isLoading}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-400/30 border-t-gray-400 rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : countdown > 0 ? (
                      <>
                        <Clock className="w-4 h-4" />
                        Resend in {countdown}s
                      </>
                    ) : (
                      "Resend Email"
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Alternative Actions */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="text-center space-y-3">
                <p className="text-sm text-gray-600">
                  Remember your password?{" "}
                  <button
                    onClick={handleBackToLogin}
                    className="text-orange-600 hover:text-orange-700 font-medium hover:underline transition-colors duration-200"
                  >
                    Sign In
                  </button>
                </p>
                <p className="text-sm text-gray-600">
                  Need help?{" "}
                  <a
                    href="/contact"
                    className="text-orange-600 hover:text-orange-700 font-medium hover:underline transition-colors duration-200"
                  >
                    Contact Support
                  </a>
                </p>
                {/* Back to Login moved here */}
                <button
                  onClick={handleBackToLogin}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mt-4 text-sm mx-auto transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign In
                </button>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-300">
              For security reasons, reset links expire after 24 hours.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;

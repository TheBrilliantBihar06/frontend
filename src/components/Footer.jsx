import React, { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  return (
    <footer className="text-white py-8 sm:py-12 lg:py-16" style={{ backgroundColor: "#001427" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-10">
          
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mr-3">
                <span className="font-bold text-lg">BB</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Brilliant Bihar
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Brilliant Bihar is an initiative to transform the education landscape of Bihar. 
              We aim to bridge the gap between students and quality learning by providing 
              accessible resources, mentorship, and career-oriented programs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 5.97 2.98.059.633.074 1.635.074 4.85 0 3.204-.012 3.584-.074 4.85-.148 3.252-1.691 4.771-2.98 5.97-.633.059-1.635.074-4.85.074-3.204 0-3.584-.012-4.85-.074-3.252-.148-4.771-1.691-5.97-2.98-.059-.633-.074-1.635-.074-4.85 0-3.204.012-3.584.074-4.85.148-3.252 1.691-4.771 2.98-5.97.633-.059 1.635-.074 4.85-.074 3.204 0 3.584.012 4.85.074 3.252.148 4.771 1.691 5.97 2.98.059.633.074 1.635.074 4.85 0 3.204-.012 3.584-.074 4.85-.148 3.252-1.691 4.771-2.98 5.97-.633.059-1.635.074-4.85.074zm0 0c0-3.204-.012-3.584-.074-4.85-.148-3.252-1.691-4.771-2.98-5.97-.633-.059-1.635-.074-4.85-.074-3.204 0-3.584.012-4.85.074-3.252.148-4.771 1.691-5.97 2.98-.059.633-.074 1.635-.074 4.85 0 3.204.012 3.584.074 4.85.148 3.252 1.691 4.771 2.98 5.97.633.059 1.635.074 4.85.074zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 016.666 0z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4-3.113v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">About Us</h3>
            <ul className="space-y-3">
              {["Our Teams", "Our Vision", "Our Mission", "Our Leadership", "Our Supporters"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">Contact</h3>
            <ul className="space-y-3">
              {["Help Centre", "Support Community", "Share your story", "Press"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">Keep in touch</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates</p>
            <form onSubmit={handleSubscribe} className="mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500 flex-1 text-sm"
                  style={{
                    backgroundColor: '#F3F4F6',
                    borderColor: '#D1D5DB'
                  }}
                />
                <button 
                  type="submit"
                  className="px-4 py-3 rounded-lg transition-colors duration-300 font-medium text-white text-sm whitespace-nowrap"
                  style={{ backgroundColor: '#000000' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#222222'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#000000'}
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you for subscribing!
                </p>
              )}
            </form>
            <div className="flex space-x-4 md:hidden">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: '#1F2937' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Brilliant Bihar. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
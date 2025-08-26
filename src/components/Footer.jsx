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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Logo and description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-400">
              Brilliant Bihar
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-400">
              Brilliant Bihar is an initiative to transform the education
              landscape of Bihar. We aim to bridge the gap between students and
              quality learning by providing accessible resources, mentorship, and
              career-oriented programs.
            </p>
          </div>

          {/* About Us */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-lg text-gray-400">
              About Us
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {["Our Teams","Our Vision","Our Mission","Our Leadership","Our Supporters"].map((item, idx) => (
                <li key={idx}>
                  <a href="#"
                     className="transition-colors duration-200 text-gray-300 hover:text-orange-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-lg text-gray-400">
              Contact
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {["Help Centre","Support Community","Share your story","Press"].map((item, idx) => (
                <li key={idx}>
                  <a href="#"
                     className="transition-colors duration-200 text-gray-300 hover:text-orange-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-lg text-gray-400">
              Keep in touch
            </h3>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="p-2 sm:p-3 flex-1 rounded-md sm:rounded-l-md sm:rounded-r-none text-black text-sm sm:text-base focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: '#F3F4F6',
                    borderColor: '#D1D5DB'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6B7280'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
                <button 
                  onClick={handleSubscribe}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-r-md sm:rounded-l-none transition-colors duration-200 text-sm sm:text-base font-medium text-white"
                  style={{ backgroundColor: '#000000' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#222222'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#000000'}
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
              )}
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 sm:space-x-6 text-gray-300">
              <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Facebook</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-4 sm:mt-6 lg:mt-8 pt-3 sm:pt-4 border-t" style={{ borderColor: '#1F2937' }}>
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © 2025 Brilliant Bihar. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

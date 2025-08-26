import React, { useState } from "react";
import { Search, Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Scholarship", href: "/scholarship" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold">
              <span className="text-red-500">&lt;/</span>BrilliantBihar
            </span>
          </a>

          {/* Center: Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex flex-1 justify-around max-w-lg lg:max-w-xl">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Search + Auth */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="relative w-32 sm:w-40 md:w-48 lg:w-56">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 text-white placeholder-gray-400 block w-full pl-9 pr-3 py-2 border border-gray-600 rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Search..."
              />
            </div>

            <div className="flex items-center space-x-2 lg:space-x-3">
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors">
                Login
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm lg:text-base font-medium transition-colors">
                Signup
              </button>
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 lg:h-5 lg:w-5 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-orange-500 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Search */}
            <div className="pt-4 pb-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-700 text-white placeholder-gray-400 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Search..."
                />
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-2 pb-3 space-y-2">
              <button className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                Login
              </button>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-base font-medium">
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

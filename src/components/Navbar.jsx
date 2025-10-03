import React, { useState, useEffect } from "react";
import { Menu, X, LogOut, Camera, LayoutDashboard } from "lucide-react";
import logo from "../assets/BBLogo.png"; // Assume logo is in assets folder


// Mock components for demo
const Link = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>{children}</a>
);


const useNavigate = () => {
  return (path) => {
    console.log(`Navigating to: ${path}`);
  };
};


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);


  const navigate = useNavigate();


  // Effect to handle scroll for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Effect to load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (storedUser) {
      setUser(storedUser);
      setProfileImage(
        storedUser.profileImage ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(storedUser.name)}&background=0284c7&color=fff&size=128`
      );
    }
  }, []);


  // Effect to handle closing the profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest(".profile-dropdown-container")) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);


  // Effect to handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const toggleProfile = () => {
    if (user?.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      setIsProfileOpen(!isProfileOpen);
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsProfileOpen(false);
    navigate("/login");
  };


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageUrl = e.target.result;
        setProfileImage(newImageUrl);
        const updatedUser = { ...user, profileImage: newImageUrl };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
      };
      reader.readAsDataURL(file);
    }
  };


  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Our Faculty", href: "/teachers" },
    { label: "Events", href: "/events" },
    { label: "Contact Us", href: "/contact" },
  ];


  const getDashboardLink = () => {
    if (!user) return "#";
    switch (user.role) {
      case "student": return "/student-dashboard";
      case "teacher": return "/teacher-dashboard";
      case "admin": return "/admin-dashboard";
      default: return "#";
    }
  };
 
  const getDashboardLabel = () => {
    if (!user) return "Dashboard";
     switch (user.role) {
       case "student": return "Student Dashboard";
       case "teacher": return "Teacher Dashboard";
       case "admin": return "Admin Dashboard";
       default: return "Dashboard";
     }
  }


  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'md:backdrop-blur-lg border-b border-gray-800/50 shadow-lg bg-[#5d5d5d] md:bg-transparent'
          : 'bg-transparent'
      }`}>
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
           
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group flex items-center">
              <div className="mr-2 sm:mr-3 flex-shrink-0">
                <img
                  src={logo}
                  alt="BrilliantBihar Logo"
                  className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
                />
              </div>
             
              <span className="text-xl sm:text-2xl font-bold tracking-wider relative">
                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                  <span className="text-red-400"></span>TheBrilliantBihar
                  <span className="text-red-400"></span>
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 group-hover:w-full transition-all duration-500"></div>
              </span>
            </Link>
           
            {/* Desktop Nav Links */}
            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group relative px-4 py-2 rounded-xl text-sm font-medium text-white/90 hover:text-white transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>


            {/* Desktop Auth Section */}
            <div className="hidden md:block">
              {user ? (
                <div className="relative ml-4 profile-dropdown-container">
                  <button
                    onClick={toggleProfile}
                    className="flex text-sm rounded-full focus:outline-none ring-2 ring-offset-4 ring-offset-transparent ring-white/20 hover:ring-red-400 transition-all duration-300 group"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="relative">
                      <img
                        className="h-10 w-10 rounded-full object-cover border-2 border-white/30 group-hover:border-red-400 transition-colors duration-300"
                        src={profileImage}
                        alt="User profile"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </button>


                  {/* Profile Dropdown Panel */}
                  <div
                    className={`
                      absolute right-0 mt-3 w-80 origin-top-right rounded-2xl shadow-2xl
                      bg-white/95 backdrop-filter backdrop-blur-lg border border-gray-200/20
                      transition-all duration-300 ease-in-out transform
                      ${isProfileOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                    `}
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
                        <div className="relative group">
                          <img
                            className="w-16 h-16 rounded-full object-cover border-3 border-gray-200"
                            src={profileImage}
                            alt="Profile"
                          />
                          <label className="absolute -bottom-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full p-1.5 cursor-pointer hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg transform hover:scale-110">
                            <Camera className="w-3 h-3" />
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                          </label>
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-900 truncate">{user.name}</p>
                          <p className="text-sm text-gray-600 truncate">{user.email}</p>
                          <div className="mt-1 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                            Online
                          </div>
                        </div>
                      </div>


                      <div className="mt-4 space-y-2">
                        <Link
                          to={getDashboardLink()}
                          onClick={() => setIsProfileOpen(false)}
                          className="group flex items-center w-full px-4 py-3 text-sm text-gray-700 rounded-xl hover:bg-gray-100 transition-all duration-300"
                        >
                          <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors duration-300 mr-3">
                            <LayoutDashboard className="w-4 h-4 text-red-600" />
                          </div>
                          <span className="font-medium">{getDashboardLabel()}</span>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="group flex items-center w-full px-4 py-3 text-sm text-gray-700 rounded-xl hover:bg-red-50 transition-all duration-300"
                        >
                          <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors duration-300 mr-3">
                            <LogOut className="w-4 h-4 text-red-600" />
                          </div>
                          <span className="font-medium">Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="relative group inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white border border-white/30 rounded-full overflow-hidden transition-all duration-300 hover:border-white/50 bg-white/10 hover:bg-white/20"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Login
                    <div className="ml-2 w-0 group-hover:w-5 transition-all duration-300 overflow-hidden">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </span>
                </Link>
              )}
            </div>


            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'}`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-2.5'}`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>


        {/* Mobile Menu Panel */}
        <div
          className={`
            md:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          `}
        >
          <div
            className="absolute inset-0 bg-[#5d5d5d] backdrop-blur-lg"
            onClick={() => setIsMenuOpen(false)}
          ></div>
         
          <div className={`
            relative h-full w-full max-w-sm bg-[#5d5d5d] backdrop-blur-xl border-r border-gray-800/50
            transform transition-transform duration-500 ease-out
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-800/50">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="BrilliantBihar Logo"
                  className="w-12 h-12 object-contain mr-2 rounded-lg"
                />
                <span className="text-xl font-bold text-white">BrilliantBihar</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
           
            <div className="px-6 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-4 rounded-xl text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
             
              <div className="pt-6 mt-6 border-t border-gray-800/50">
                {user ? (
                    <div className="space-y-4">
                        <Link
                            to={getDashboardLink()}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center px-4 py-4 rounded-xl text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                        >
                            <img src={profileImage} alt="profile" className="w-10 h-10 rounded-full object-cover border-2 border-white/30 mr-4" />
                            <div>
                              <div className="font-semibold">{user.name}</div>
                              <div className="text-sm text-white/60">{getDashboardLabel()}</div>
                            </div>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center px-4 py-4 rounded-xl text-base font-medium text-red-300 hover:text-red-200 hover:bg-red-500/10 transition-all duration-300"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-center px-6 py-4 text-white font-semibold bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 hover:from-red-600 hover:via-orange-600 hover:to-pink-600 rounded-xl shadow-lg transition-all duration-300"
                    >
                      Login
                    </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};


export default Navbar;


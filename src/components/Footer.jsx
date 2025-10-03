// import React, { useState } from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { ArrowRight, Check } from 'lucide-react';

// // --- IMPORTANT: Import your logo here ---
// // 1. Make sure your logo is inside the `src` folder (e.g., `src/assets/images/`).
// // 2. Adjust the path below to match your file's location.
// import brilliantBiharLogo from '../assets/The_Brillinat_bihar_logo.png'; 

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success'

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email && /^\S+@\S+\.\S+$/.test(email)) {
//       setStatus('loading');
//       // Simulate API call
//       setTimeout(() => {
//         setStatus('success');
//         setEmail("");
//         setTimeout(() => setStatus('idle'), 3000);
//       }, 1500);
//     }
//   };

//   const usefulLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Our Courses', href: '/courses' },
//     { name: 'Our Faculty', href: '/teachers' },
//     { name: 'Events', href: '/events' },
//   ];

//   const contactLinks = [
//     { name: 'Send Message', href: '/contact' },
//     { name: 'Contact Details', href: '/contact' },
//     { name: 'Our Location', href: '/contact' },
//   ];
  
//   const socialLinks = [
//     { name: 'Facebook', icon: <FaFacebookF size={14} />, href: '#' },
//     { name: 'Twitter', icon: <FaTwitter size={14} />, href: '#' },
//     { name: 'Instagram', icon: <FaInstagram size={14} />, href: '#' },
//     { name: 'LinkedIn', icon: <FaLinkedinIn size={14} />, href: '#' },
//   ];

//   return (
//     <footer className="bg-[#3a3a3a] text-slate-300 relative">
//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 pb-6">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Column 1: Logo, description, socials */}
//           <div className="lg:col-span-1">
//             <a href="/" className="flex items-center mb-3 group w-fit">
//               <img 
//                 src={brilliantBiharLogo} // Use the imported logo variable
//                 alt="Brilliant Bihar Logo" 
//                 className="w-9 h-9 mr-2"
//               />
//               <h2 className="text-xl font-bold text-white">
//                 Brilliant Bihar
//               </h2>
//             </a>
//             <p className="text-xs leading-relaxed mb-5 text-slate-300 max-w-sm">
//               Your premier destination for UPSC & BPSC preparation. We provide expert-led courses and mentorship to empower your civil services journey.
//             </p>
//             <div className="flex space-x-2">
//               {socialLinks.map(social => (
//                 <a 
//                   key={social.name}
//                   href={social.href} 
//                   className="w-7 h-7 rounded-full bg-[#3a3a3a]/60 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           {/* Column 2: Useful Links */}
//           <div>
//             <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">Useful Links</h3>
//             <ul className="space-y-2">
//               {usefulLinks.map((link) => (
//                 <li key={link.name}>
//                   <a href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center gap-2">
//                     <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">&gt;</span>{link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* Column 3: Contact Us */}
//           <div>
//             <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">Contact Us</h3>
//             <ul className="space-y-2">
//               {contactLinks.map((link) => (
//                 <li key={link.name}>
//                   <a href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center gap-2">
//                     <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">&gt;</span>{link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Newsletter */}
//           <div className="md:col-span-2 lg:col-span-1">
//             <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">Stay Updated</h3>
//             <p className="text-slate-300 mb-3 text-xs">
//               Subscribe to our newsletter for the latest updates.
//             </p>
//             <form onSubmit={handleSubscribe} className="relative">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email address"
//                 className="w-full px-3 py-2.5 rounded-lg bg-[#3a3a3a]/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs border border-gray-600/50 placeholder:text-slate-500"
//                 required
//               />
//               <button 
//                 type="submit"
//                 className="absolute right-1 top-1 h-7 w-7 flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 transition-colors duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
//                 aria-label="Subscribe"
//                 disabled={status === 'loading'}
//               >
//                 {status === 'loading' ? <span className="animate-spin h-3 w-3 border-2 border-white border-t-transparent rounded-full"></span> : status === 'success' ? <Check size={14}/> : <ArrowRight size={14}/>}
//               </button>
//             </form>
//             {status === 'success' && (
//               <p className="text-green-400 text-xs mt-2">
//                 Thank you for subscribing!
//               </p>
//             )}
//           </div>
//         </div>
        
//         {/* Sub-Footer */}
//         <div className="mt-8 pt-4 border-t border-gray-500/40">
//           <div className="flex flex-col md:flex-row justify-between items-center text-xs">
//             <p className="text-slate-400 mb-3 md:mb-0">
//               © {new Date().getFullYear()} Brilliant Bihar. All Rights Reserved.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
//               <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ArrowRight, Check } from 'lucide-react';

// --- IMPORTANT: Import your logo here ---
// 1. Make sure your logo is inside the `src` folder (e.g., `src/assets/images/`).
// 2. Adjust the path below to match your file's location.
import brilliantBiharLogo from '../assets/BBLogo.png'; 

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      setStatus('loading');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setEmail("");
        setTimeout(() => setStatus('idle'), 3000);
      }, 1500);
    }
  };

  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Courses', href: '/courses' },
    { name: 'Our Faculty', href: '/teachers' },
    { name: 'Events', href: '/events' },
  ];

  const contactLinks = [
    { name: 'Send Message', href: '/contact' },
    { name: 'Contact Details', href: '/contact' },
    { name: 'Our Location', href: '/contact' },
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF size={16} />, href: '#' },
    { name: 'Twitter', icon: <FaTwitter size={16} />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram size={16} />, href: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn size={16} />, href: '#' },
  ];

  return (
    <footer className="bg-[#4a4a4a] text-slate-300 relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Logo, description, socials */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-4 group w-fit">
              <img 
                src={brilliantBiharLogo} // Use the imported logo variable
                alt="Brilliant Bihar Logo" 
                className="w-12 h-12 mr-3"
              />
              <h2 className="text-2xl font-bold text-white">
                Brilliant Bihar
              </h2>
            </a>
            <p className="text-sm leading-relaxed mb-6 text-slate-300 max-w-sm">
              Your premier destination for UPSC & BPSC preparation. We provide expert-led courses and mentorship to empower your civil services journey.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-9 h-9 rounded-full bg-[#3a3a3a]/60 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Useful Links */}
          <div>
            <h3 className="font-bold mb-5 text-lg text-white">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center gap-2">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">&gt;</span>{link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact Us */}
          <div>
            <h3 className="font-bold mb-5 text-lg text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center gap-2">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">&gt;</span>{link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-bold mb-5 text-lg text-white">Stay Updated</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-[#3a3a3a]/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm border border-gray-600/50 placeholder:text-slate-500"
                required
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1.5 h-9 w-9 flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 transition-colors duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
                aria-label="Subscribe"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span> : status === 'success' ? <Check size={16}/> : <ArrowRight size={16}/>}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-green-400 text-sm mt-2">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
        
        {/* Sub-Footer */}
        <div className="mt-10 pt-6 border-t border-gray-500/40">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-slate-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Brilliant Bihar. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms-conditions" className="text-slate-400 hover:text-blue-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
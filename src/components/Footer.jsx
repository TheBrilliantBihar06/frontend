import React from "react";
import footerImg from "../assets/footerimg.jpeg"; // adjust path if needed

const Footer = () => {
  return (
    <footer
      className="text-white py-16 min-h-[500px] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${footerImg})`,
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and description */}
        <div>
          <h2 className="text-xl font-bold">Brilliant Bihar</h2>
          <p className="mt-2 text-sm">
            Brilliant Bihar is an initiative to transform the education
            landscape of Bihar. We aim to bridge the gap between students and
            quality learning by providing accessible resources, mentorship, and
            career-oriented programs.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 text-sm">
            <li>Our Teams</li>
            <li>Our Vision</li>
            <li>Our Mission</li>
            <li>Our Leadership</li>
            <li>Our Supporters</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Help Centre</li>
            <li>Support Community</li>
            <li>Share your story</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Keep in touch</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="email address"
              className="p-2 w-full rounded-l-md text-black"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-sm text-gray-300">
        © 2025 Brilliant Bihar All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-red-500 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section: Links */}
        <div className="flex justify-between items-center border-b  border-gray-700 pb-4 mb-4">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold">Hello-Bizz</h1>
            <p className="text-sm">Connecting businesses and communities.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/home" className="hover:text-gray-300">Home</Link>
            <Link href="/news" className="hover:text-gray-300">News</Link>
            <Link href="/clubs" className="hover:text-gray-300">Clubs</Link>
            <Link href="/offers" className="hover:text-gray-300">Offers</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className=" flex items-center justify-center ml-20">
          <p>&copy; {new Date().getFullYear()} Hello-Bizz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mt-8">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-xs text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Zidio Hackathon</span>. All rights reserved.
        </div>

        {/* Right Section */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaTwitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../assets/bird_2.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r to-transparent p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Company Logo */}
        <div className="flex items-center mt-1">
          <Image
            src={logo} // Add the correct path to your company logo
            alt="Company Logo"
            width={80}
            height={80}
          />
        </div>

        {/* Center (List items) - Hidden on mobile */}
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-white">
            Mutual Funds
          </a>
          <a href="#" className="text-white">
            Home Loan
          </a>
          <a href="#" className="text-white">
            Health Insurance
          </a>
          <a href="#" className="text-white">
            Finteck UPI
          </a>
          <a href="#" className="text-white">
            Cash Loan
          </a>
          <a href="#" className="text-white">
            Calculator
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
        </div>

        {/* Right side - Download button (Visible on larger screens) */}
        <div className="hidden lg:flex items-center">
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md mr-4">
            Download
          </button>
        </div>

        {/* Mobile menu icon - Visible on smaller screens */}
        <div className="lg:hidden cursor-pointer" onClick={handleMenuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Mobile menu (Visible on smaller screens when menu is open) */}
        {isMenuOpen && (
          <div className="lg:small fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-30 backdrop-filter backdrop-blur-sm">
            <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-md p-4 relative">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white hover:text-black">
                    Mutual Funds
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-black">
                    Home Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-black">
                    Health Insurance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-black">
                    Finteck UPI
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-black">
                    Cash Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-black">
                    Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-black">
                    Blog
                  </a>
                </li>
              </ul>
              {/* Close icon */}
              <div
                className="cursor-pointer absolute top-2 right-2"
                onClick={handleMenuToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

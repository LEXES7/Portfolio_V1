import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "home" }, // Use section IDs
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <img
            src="./src/assets/logo.svg" // Replace with your logo path
            alt="Logo"
            className="h-10 w-auto mr-3"
          />
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.link}
              smooth={true}
              duration={500}
              className="text-white text-sm font-semibold hover:text-yellow-400 transition duration-300 cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <IoMenu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex items-center justify-between px-6 py-4">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="flex items-center cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img
                    src="/logo.svg" // Replace with your logo path
                    alt="Logo"
                    className="h-8 w-auto mr-3"
                  />
                  <span className="text-xl font-bold text-white">My Portfolio</span>
                </ScrollLink>
                <button
                  className="text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IoMdClose className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col items-center justify-center flex-grow space-y-6">
                {navItems.map((item, index) => (
                  <ScrollLink
                    key={index}
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="text-white text-lg font-semibold hover:text-yellow-400 transition duration-300 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
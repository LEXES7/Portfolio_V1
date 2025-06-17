import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", link: "home" }, 
    { name: "About", link: "about" },
    { name: "Education", link: "education" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-lg" 
          : "py-4 bg-gray-800 bg-opacity-90 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center cursor-pointer"
          aria-label="Go to home section"
        >
          <img
            src="/src/assets/logo.svg" 
            alt="Logo"
            className={`transition-all duration-300 ${scrolled ? "h-8" : "h-10"} w-auto`}
            loading="eager"
          />
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-8">
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.link}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-yellow-400"
              className="text-white text-sm font-semibold px-3 py-2 hover:text-yellow-400 transition duration-300 cursor-pointer relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <IoMenu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Dark overlay */}
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-xs bg-gray-900 shadow-xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="flex items-center cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img
                    src="/src/assets/logo.svg"
                    alt="Logo"
                    className="h-8 w-auto mr-3"
                  />
                  <span className="text-lg font-bold text-white">Portfolio</span>
                </ScrollLink>
                <button
                  className="text-gray-400 hover:text-white transition duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <IoMdClose className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile nav links */}
              <div className="flex flex-col py-6 px-4 space-y-2 overflow-y-auto">
                {navItems.map((item, index) => (
                  <ScrollLink
                    key={index}
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-300 hover:text-yellow-400 hover:bg-gray-800 py-3 px-4 rounded-lg transition duration-200 text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
              
              {/* Social links in mobile menu footer */}
              <div className="mt-auto border-t border-gray-800 py-4 px-4">
                <p className="text-sm text-gray-400 text-center">
                  © {new Date().getFullYear()} Sachintha Bhashitha
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
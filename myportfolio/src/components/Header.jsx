import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      // Header background change on scroll
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Active section detection
      const sections = ["home", "about", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 300; // Add offset to improve detection
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", link: "home" }, 
    { name: "About", link: "about" },
    { name: "Education", link: "education" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const handleNavClick = (sectionId) => {
    // Close mobile menu
    setMobileMenuOpen(false);
    
    // Update active section immediately
    setActiveSection(sectionId);
    
    // Scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      // Get header height dynamically
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 80;
      
      // Calculate position
      const yOffset = -headerHeight - 20; // Additional 20px buffer
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      // Perform scroll
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
      
      console.log(`Scrolling to ${sectionId} at position ${y}`);
    } else {
      console.error(`Section with id "${sectionId}" not found`);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-lg" 
          : "py-4 bg-gray-800 bg-opacity-90 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center cursor-pointer"
          aria-label="Go to home section"
        >
          <img
            src="/src/assets/logo.svg" 
            alt="Logo"
            className={`transition-all duration-300 ${scrolled ? "h-8" : "h-10"} w-auto`}
            loading="eager"
          />
        </button>

        <div className="hidden lg:flex items-center space-x-1 xl:space-x-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.link)}
              className={`text-sm font-semibold px-3 py-2 transition duration-300 cursor-pointer relative group
                ${activeSection === item.link ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
            >
              {item.name}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300
                  ${activeSection === item.link ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </button>
          ))}
        </div>

        <button
          className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <IoMenu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              className="fixed right-0 top-0 h-full w-[85%] max-w-xs bg-gray-900 shadow-xl flex flex-col z-[101] overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
                <button
                  onClick={() => handleNavClick("home")}
                  className="flex items-center cursor-pointer"
                >
                  <img
                    src="/src/assets/logo.svg"
                    alt="Logo"
                    className="h-8 w-auto mr-3"
                  />
                  <span className="text-lg font-bold text-white">Portfolio</span>
                </button>
                <button
                  className="text-gray-400 hover:text-white transition duration-200 p-2"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <IoMdClose className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col py-6 px-4 space-y-3 overflow-y-auto">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.link)}
                    className={`text-left py-4 px-4 rounded-lg transition duration-200 text-lg font-medium
                      ${activeSection === item.link
                        ? "bg-gray-800 text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"}`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
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
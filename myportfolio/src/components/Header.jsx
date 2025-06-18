import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      // Header background change on scroll
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "py-2 bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-lg" 
            : "py-4 bg-gray-800 bg-opacity-90 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo button */}
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

          {/* Desktop navigation */}
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

          {/* Mobile menu toggle button */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IoMdClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Full-screen Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 shadow-lg">
            <div className="px-2 py-3 space-y-1 sm:px-3 max-h-[70vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.link)}
                  className={`w-full block px-4 py-3 rounded-md text-base font-medium text-left transition-colors ${
                    activeSection === item.link
                      ? "text-yellow-400 bg-gray-800"
                      : "text-white hover:text-yellow-400 hover:bg-gray-800"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* fix gap between header and home section */}
      <div className="header-spacer" id="header-spacer" style={{ height: "0px" }}></div>

      {/* adjust the header spacer height */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function adjustHeaderSpacer() {
            const header = document.querySelector('header');
            const spacer = document.getElementById('header-spacer');
            if (header && spacer) {
              spacer.style.height = header.offsetHeight + 'px';
            }
          }
          // Run on load and on resize
          window.addEventListener('load', adjustHeaderSpacer);
          window.addEventListener('resize', adjustHeaderSpacer);
          // Also run now
          adjustHeaderSpacer();
        `
      }} />
    </>
  );
}
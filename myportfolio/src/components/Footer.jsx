import React from "react";
import { IoHeart } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import logosvg from "../assets/logo.svg";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/yourusername",
    }
  ];

  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Education", link: "education" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Top - Links & Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logosvg}
              alt="Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 text-center md:text-left">
              Creating innovative web solutions and exploring new technologies with passion.
            </p>
          </div>
          
          {/* Middle - Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-400 hover:text-yellow-400 transition duration-200 cursor-pointer text-sm"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </div>
          
          {/* Right - Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Divider */}
        <div className="border-t border-gray-800 my-6"></div>
        
        {/* Footer Bottom - Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Sachintha Bhashitha. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="inline-flex items-center text-sm text-gray-400">
              Crafted with
              <IoHeart
                className="mx-1 text-red-500 animate-pulse"
                aria-label="Heart Icon"
              />
              by
              <span className="ml-1 text-yellow-400 font-semibold">
                Sachintha Bhashitha
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
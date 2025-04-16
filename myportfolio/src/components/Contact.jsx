import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 pt-20 pb-10">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-gray-300">
          Feel free to reach out to me through any of the platforms below!
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/LEXES7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub className="text-3xl" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/vdrax.melo.7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 transition duration-300"
          aria-label="Facebook"
        >
          <FaFacebook className="text-3xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/the.starboyy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 transition duration-300"
          aria-label="Instagram"
        >
          <FaInstagram className="text-3xl" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sachintha-bhashitha-675286357/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-500 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
    </section>
  );
}
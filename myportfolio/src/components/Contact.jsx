import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const socialLinks = [
    { 
      platform: "GitHub",
      icon: <FaGithub className="text-3xl sm:text-4xl" />,
      url: "https://github.com/LEXES7",
      color: "hover:text-gray-400"
    },
    { 
      platform: "Facebook",
      icon: <FaFacebook className="text-3xl sm:text-4xl" />,
      url: "https://www.facebook.com/vdrax.melo.7/",
      color: "hover:text-blue-500" 
    },
    { 
      platform: "Instagram",
      icon: <FaInstagram className="text-3xl sm:text-4xl" />,
      url: "https://www.instagram.com/the.starboyy/",
      color: "hover:text-pink-500"
    },
    { 
      platform: "LinkedIn",
      icon: <FaLinkedin className="text-3xl sm:text-4xl" />,
      url: "https://www.linkedin.com/in/sachintha-bhashitha-675286357/",
      color: "hover:text-blue-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16 sm:py-20">
      {/* Transparent container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-700 border-opacity-50 max-w-3xl mx-auto"
      >
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">Contact Me</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Feel free to reach out to me through any of the platforms below. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Social Media Icons with animations */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 transition duration-300 transform ${social.color} hover:scale-110`}
              aria-label={social.platform}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-300">Prefer email?</p>
          <a 
            href="mailto:sachinthabhashithawork@gmail.com" 
            className="text-yellow-400 hover:text-yellow-300 font-medium text-lg inline-block mt-1 border-b-2 border-yellow-500 hover:border-yellow-300 transition-all duration-300"
          >
            sachinthabhashithawork@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
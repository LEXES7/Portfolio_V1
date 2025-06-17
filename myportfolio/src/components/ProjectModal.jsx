import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { title, description, github, live, tags } = project;

  // Close on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  // Close when clicking outside modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="bg-gray-900 bg-opacity-95 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full mx-auto border border-gray-700 border-opacity-50 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-yellow-400 font-poppins"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close project details"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 p-1"
          >
            <FaTimes className="text-xl sm:text-2xl" />
          </motion.button>
        </div>

        {/* Description */}
        <motion.p 
          className="text-gray-100 mb-6 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Links */}
        <motion.div 
          className="flex justify-center space-x-8 my-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${title}`}
              className="text-gray-300 hover:text-yellow-400 transition duration-300 flex flex-col items-center"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <FaGithub className="text-2xl sm:text-3xl mb-1" />
              <span className="text-xs">GitHub</span>
            </motion.a>
          )}
          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${title}`}
              className="text-gray-300 hover:text-yellow-400 transition duration-300 flex flex-col items-center"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <FaExternalLinkAlt className="text-2xl sm:text-3xl mb-1" />
              <span className="text-xs">Live Demo</span>
            </motion.a>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div 
          className="mt-6 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-yellow-500 bg-opacity-90 text-gray-900 font-medium rounded-full px-3 py-1 text-xs"
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "#e9b308" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string,
    live: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
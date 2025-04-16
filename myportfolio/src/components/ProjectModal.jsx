import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { title, description, github, live, tags } = project;

  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-8 max-w-lg w-full mx-4 transition duration-300 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-yellow-600 dark:text-yellow-500 transition duration-300">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="text-neutral-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-500 transition duration-300"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <p className="text-neutral-900 dark:text-gray-100 transition duration-300 mb-4">
          {description}
        </p>
        <div className="flex justify-center space-x-5 my-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${title}`}
              className="text-neutral-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-500 transition duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${title}`}
              className="text-neutral-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-500 transition duration-300"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          )}
        </div>
        <div className="mt-4 flex flex-wrap justify-center">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-yellow-600 dark:bg-yellow-500 text-white rounded-full px-3 py-1 text-xs mr-2 mb-2 transition duration-300"
              initial="hidden"
              animate="visible"
              variants={tagVariants}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
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
import React, { useState } from "react";
import { ProjectsData } from "../data/ProjectsData.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal.jsx";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" className="container mx-auto px-4 pt-20">
      {/* Title section */}
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="myprojects-title">MyProjects</h2> {/* Apply the custom class */}
     
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-neutral-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 border border-yellow-600 dark:border-yellow-500 transform hover:scale-105 hover:shadow-xl flex flex-col justify-between lg:h-80 transition duration-300"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start space-x-2">
              <div
                onClick={() => handleViewMore(project)}
                className="cursor-pointer"
                aria-label={`View details for ${project.title}`}
              >
                <h3 className="text-2xl font-bold text-yellow-600 dark:text-gray-300 hover:underline transition duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-gray-400 transition duration-300">
                  {project.year}
                </p>
              </div>
              <div className="flex space-x-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-neutral-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-500 transition duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                    className="text-neutral-900 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-500 transition duration-300"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                )}
              </div>
            </div>
            <p
              className="text-neutral-900 dark:text-gray-100 mt-2 transition duration-300 overflow-hidden overflow-ellipsis"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap justify-center">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  className="bg-yellow-600 dark:bg-yellow-500 text-white rounded-full px-3 py-1 text-xs mr-2 mb-2 transition duration-300"
                  initial="hidden"
                  animate="visible"
                  variants={tagVariants}
                  transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show more button */}
      {visibleProjects < ProjectsData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-yellow-600 dark:bg-yellow-500 text-white rounded-full px-6 py-2 text-sm hover:bg-yellow-700 dark:hover:bg-yellow-600 transition duration-300"
          >
            Show more
          </button>
        </div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
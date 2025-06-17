import React, { useState, useEffect } from "react";
import { ProjectsData } from "../data/ProjectsData.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal.jsx";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [category, setCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);
  
  // Get unique categories from projects
  const categories = ["All", ...new Set(ProjectsData.flatMap(project => project.tags))];
  
  // Filter projects when category changes
  useEffect(() => {
    if (category === "All") {
      setFilteredProjects(ProjectsData);
    } else {
      setFilteredProjects(
        ProjectsData.filter(project => project.tags.includes(category))
      );
    }
    // Reset visibleProjects when changing categories
    setVisibleProjects(6);
  }, [category]);

  const handleShowMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
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
    <section id="projects" className="container mx-auto px-4 py-16 sm:py-20">
      {/* Transparent container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-700 border-opacity-50"
      >
        {/* Title section */}
        <motion.div
          className="flex flex-col items-center mb-10 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="myprojects-title">My Projects</h2>
        </motion.div>
        
        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.slice(0, 8).map((cat, index) => (
            <motion.button
              key={index}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                category === cat 
                  ? "bg-yellow-500 text-gray-900 font-medium" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-700 border-opacity-40 h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              {/* Project header */}
              <div className="p-5 sm:p-6 flex justify-between items-start border-b border-gray-700 border-opacity-40 bg-gray-900 bg-opacity-40">
                <div
                  onClick={() => handleViewMore(project)}
                  className="cursor-pointer"
                  aria-label={`View details for ${project.title}`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 hover:underline transition duration-300 font-poppins">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 transition duration-300">
                    {project.year}
                  </p>
                </div>
                <div className="flex space-x-3 mt-1">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-gray-300 hover:text-yellow-400 transition duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <FaGithub className="text-lg sm:text-xl" />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                      className="text-gray-300 hover:text-yellow-400 transition duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <FaExternalLinkAlt className="text-lg sm:text-xl" />
                    </motion.a>
                  )}
                </div>
              </div>
              
              {/* Project description */}
              <div className="p-5 sm:p-6 flex-grow">
                <p
                  className="text-gray-300 text-sm sm:text-base overflow-hidden overflow-ellipsis mb-4"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {project.description}
                </p>
                
                {/* View details button */}
                <button
                  onClick={() => handleViewMore(project)}
                  className="text-sm text-yellow-400 hover:text-yellow-300 font-medium flex items-center transition duration-300"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Project tags */}
              <div className="p-5 sm:p-6 pt-0 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="bg-gray-700 text-gray-300 rounded-full px-2.5 py-1 text-xs"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={tagVariants}
                    transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
                {project.tags.length > 3 && (
                  <motion.span
                    className="bg-gray-700 text-gray-300 rounded-full px-2.5 py-1 text-xs"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={tagVariants}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    +{project.tags.length - 3}
                  </motion.span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-300 text-lg">
              No projects found matching the selected category.
            </p>
          </motion.div>
        )}

        {/* Show more button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleShowMore}
              className="px-8 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium rounded-full text-sm sm:text-base transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </motion.div>

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
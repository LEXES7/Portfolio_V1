import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import ProfileImage from "../assets/profile.jpeg"; 
import { TechnologiesData } from "../data/TechnologiesData.jsx";
import ResumePDF from "../assets/ResumeSachinthaBhashitha.pdf";

export default function About() {
  const techVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Sachintha_Bhashitha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="pt-20 transition duration-300"> 
      <div className="container mx-auto px-4">
        {/* Transparent box */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 border-opacity-50"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-white font-bold">
              About Me
            </h2>
            
            {/* Download CV */}
            <motion.button
              onClick={handleDownloadCV}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl group"
            >
              <HiDownload className="mr-2 text-lg group-hover:animate-bounce" />
              Download CV
            </motion.button>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3 lg:w-1/3 mb-8 md:mb-0"
            >
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              />
            </motion.div>

            <div className="w-full md:pt-8 lg:w-2/3 lg:pl-12 text-justify text-white transition duration-300">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                Hi, I&apos;m Sachintha Bhashitha, a passionate web developer. I
                enjoy creating innovative solutions and exploring new
                technologies. My journey in the tech world has been fueled by a
                constant desire to learn and grow.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                I am currently pursuing my studies at SLIIT. Below are some of the technologies I have worked
                with:
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center items-center"
                initial="hidden"
                animate="visible"
                variants={techVariants}
                transition={{ duration: 0.5 }}
              >
                {TechnologiesData.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center m-2 p-1.5 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg transition duration-300"
                    initial="hidden"
                    animate="visible"
                    variants={techVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span
                      aria-label={`${tech.name} icon`}
                      className="text-2xl text-yellow-500 mr-2 transition duration-300"
                    >
                      {tech.icon}
                    </span>

                    <span className="text-sm font-semibold text-gray-100 transition duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
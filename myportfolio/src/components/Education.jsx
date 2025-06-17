import React from "react";
import { motion } from "framer-motion";

// Education data
const educationData = [
  {
    id: 1,
    degree: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    duration: "2022 - 2026",
    description: "Foundation studies in programming, data structures, and computer architecture.",
  },
  {
    id: 2,
    degree: "Diploma in English and Information Technology",
    institution: "Esoft",
    duration: "2022 - 2023",
    description: "Foundation studies and practical skills in English communication and IT fundamentals.",
  }
];

const Education = () => {
  return (
    <section id="education" className="container mx-auto px-4 py-16 sm:py-20">
      {/* Transparent container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-700 border-opacity-50"
      >
        {/* Title */}
        <motion.div
          className="flex flex-col items-center mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="education-title text-3xl sm:text-4xl">Education</h2>
        </motion.div>

        {/* Modern Timeline container */}
        <div className="relative min-h-[300px] max-w-4xl mx-auto">
          {/* Modernized vertical line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full glow-line"></div>

          {/* Education items with improved spacing */}
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex flex-col md:flex-row items-start mb-16 sm:mb-20 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Modern Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-0 glow-dot"></div>

              {/* Content with improved styling */}
              <div 
                className={`md:w-1/2 pl-8 ${
                  index % 2 === 0 
                    ? "md:pl-0 md:pr-12 md:text-right" 
                    : "md:pl-12"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-md border border-gray-700 border-opacity-40"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2 font-poppins">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg sm:text-xl text-white mb-2 font-poppins">
                    {item.institution}
                  </h4>
                  <p className="text-gray-400 mb-3 text-sm font-poppins">
                    {item.duration}
                  </p>
                  <p className="text-gray-300 font-poppins text-sm sm:text-base">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
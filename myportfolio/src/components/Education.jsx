import React from "react";
import { motion } from "framer-motion";

// Education data
const educationData = [
  {
    id: 1,
    degree: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    duration: "2021 - 2025",
    description: "Specializing in Software Engineering with focus on web and mobile application development.",
  },
  {
    id: 2,
    degree: "Diploma in Computer Science",
    institution: "SLIIT Academy",
    duration: "2020 - 2021",
    description: "Foundation studies in programming, data structures, and computer architecture.",
  }
];

const Education = () => {
  return (
    <section id="education" className="container mx-auto px-4 py-16">
      {/* Title */}
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="education-title">Education</h2>
      </motion.div>

      {/* Modern Timeline container */}
      <div className="relative min-h-[300px] max-w-4xl mx-auto">
        {/* Modernized vertical line */}
        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full glow-line"></div>

        {/* Education items with improved spacing */}
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex flex-col md:flex-row items-start mb-20 relative ${
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
            <div className={`md:w-1/2 pl-8 ${
              index % 2 === 0 
                ? "md:pl-0 md:pr-12 md:text-right" 
                : "md:pl-12"
            }`}>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2 font-poppins">
                {item.degree}
              </h3>
              <h4 className="text-xl text-white mb-2 font-poppins">
                {item.institution}
              </h4>
              <p className="text-gray-400 mb-3 text-sm font-poppins">
                {item.duration}
              </p>
              <p className="text-gray-300 font-poppins text-base">
                {item.description}
              </p>
            </div>

            <div className="md:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const positions = ["Software Developer", "Web Designer", "UI/UX Enthusiast", "Problem Solver"];

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <motion.span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ));
};

const Position = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % positions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative cursor-default font-medium ml-8 text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-start items-center h-[36px] sm:h-[40px] md:h-[48px] 2xl:h-[70px] overflow-hidden">
      <motion.div
        key={currentPosition}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text flex items-center"
        aria-label={positions[currentPosition]}
      >
        {produceSpans(positions[currentPosition], "animate-textRotate1")}
      </motion.div>
    </div>
  );
};

export default Position;
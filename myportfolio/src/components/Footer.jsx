import React from "react";
import { IoHeart } from "react-icons/io5";

const Footer = () => {
  return (
<footer className="mt-auto bg-primary">
          <div className="w-ful mx-auto max-w-screen-xl p-4 flex items-center justify-center transition duration-300">
        <span className="inline-flex items-center text-sm text-gray-900 dark:text-gray-100 transition duration-300">
          Crafted with&nbsp;
          <IoHeart
            className="text-lg text-red-500 transition duration-300"
            aria-label="Heart Icon"
          />
          &nbsp;by
        </span>
        <span className="text-sm text-blue-600 dark:text-blue-500 font-extrabold text-center transition duration-300">
          &nbsp;Sachintha Bhashitha
        </span>
      </div>
    </footer>
  );
};

export default Footer;
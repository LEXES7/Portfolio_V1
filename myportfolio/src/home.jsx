import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import critical components eagerly
import Header from "./components/Header";
import Position from "./components/Position";
import StarsCanvas from "./components/StarsCanvas";
import SpacemanCanvas from "./components/Spaceman";

// Lazy load less critical components
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Import background images
import Stars from "./assets/background/1Stars.svg";
import Planets from "./assets/background/2Planets.svg";
import MountainFar from "./assets/background/3Mountain.svg";
import MountainClose from "./assets/background/4Mountain.svg";
import Crater from "./assets/background/5Crater.svg";
import Sun from "./assets/background/6Sun.svg";

// Simple loading component
const SectionLoader = () => (
  <motion.div 
    className="flex justify-center items-center py-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
  </motion.div>
);

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Preload background images
  useEffect(() => {
    const imageUrls = [Stars, Planets, MountainFar, MountainClose, Crater, Sun];
    let loadedCount = 0;
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
      img.src = url;
    });
  }, []);
  
  return (
    <div className="home-container relative">
      <StarsCanvas />
      <Header />

      {/* Home section */}
      <section id="home" className="min-h-screen">
        <motion.div 
          className="parallax"
          initial={{ opacity: 0 }}
          animate={{ opacity: imagesLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background parallax layers */}
          <img 
            src={Stars} 
            alt="stars" 
            className="parallax__stars" 
            loading="eager"
          />
          <img 
            src={Planets} 
            alt="planets" 
            className="parallax__planets" 
            loading="eager"
          />
          <img 
            src={Sun} 
            alt="sun" 
            className="parallax__sun" 
            loading="eager"
          />
          <img 
            src={MountainFar} 
            alt="mountain-far" 
            className="parallax__mountain1" 
            loading="eager"
          />
          <img 
            src={MountainClose} 
            alt="mountain-close" 
            className="parallax__mountain2" 
            loading="eager"
          />
          <img 
            src={Crater} 
            alt="crater" 
            className="parallax__crater" 
            loading="eager"
          />

          {/* 3D Spaceman */}
          <div className="parallax__content touch-responsive">
            <SpacemanCanvas />
          </div>

          {/* Hero text section */}
          <section className="parallax">
            <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto flex flex-col lg:flex-row items-start z-10">
              {/* Name heading */}
              <div className="flex-1 lg:mb-0 text-left">
                <h1 className="font-medium ml-8 text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
                  Sachintha Bhashitha
                </h1>
                <Position />
              </div>

              {/* Tagline */}
              <div className="flex-1 flex justify-start lg:justify-end sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
                <div className="glowing-text font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
                  I love creating <br /> creative solutions to the digital world.
                </div>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Welcome description */}
        <div className="description-box">
          <h1 className="description-title">Welcome to My Portfolio</h1>
          <p className="description-text">
            Explore the universe of my work and creativity. Scroll down to learn more about my projects, skills, and experiences.
          </p>
        </div>
      </section>

      {/* About section */}
      <section id="about">
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </section>
      
      {/* Education section */}
      <section id="education">
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
      </section>
      
      {/* Projects section */}
      <section id="projects">
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
      </section>
      
      {/* Contact section */}
      <section id="contact">
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </section>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
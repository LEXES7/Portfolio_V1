import React from "react";
import SpacemanCanvas from "./components/Spaceman";
import Position from "./components/Position";
import Projects from "./components/Projects.jsx";


import StarsCanvas from "./components/StarsCanvas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

import Stars from "./assets/background/1Stars.svg";
import Planets from "./assets/background/2Planets.svg";
import MountainFar from "./assets/background/3Mountain.svg";
import MountainClose from "./assets/background/4Mountain.svg";
import Crater from "./assets/background/5Crater.svg";
import Sun from "./assets/background/6Sun.svg";

export default function Home() {
  return (
    <div className="home-container relative">

      <StarsCanvas />


      <Header />

      <div className="parallax">

        <img src={Stars} alt="stars" className="parallax__stars" />
        <img src={Planets} alt="planets" className="parallax__planets" />
        <img src={Sun} alt="sun" className="parallax__sun" />
        <img src={MountainFar} alt="mountain-far" className="parallax__mountain1" />
        <img src={MountainClose} alt="mountain-close" className="parallax__mountain2" />
        <img src={Crater} alt="crater" className="parallax__crater" />


        <div className="parallax__content touch-responsive">
          <SpacemanCanvas />
        </div>


        <section className="parallax">
          <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto flex flex-col lg:flex-row items-start z-10">

            <div className="flex-1 lg:mb-0 text-left">
              <h1 className="font-medium ml-8 text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
                Sachintha Bhashitha
              </h1>
              <Position />
            </div>


            <div className="flex-1 flex justify-start lg:justify-end sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
              <div className="glowing-text font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
                I love creating <br /> creative solutions to the digital world.
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className="description-box">
        <h1 className="description-title">Welcome to My Portfolio</h1>
        <p className="description-text">
          Explore the universe of my work and creativity. Scroll down to learn more about my projects, skills, and experiences.
        </p>
      </div>


      <div>
        <About />
      </div>
      <div>
      <Projects />
      </div>


      <Footer />
    </div>
  );
}
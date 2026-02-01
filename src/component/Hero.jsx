import React from "react";
import HeroSec from "../assets/HeroSec.png";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">
        {/* Left Side (Blue) */}
        <div className="relative flex items-center justify-center h-[50vh] md:h-full ">
          <img
            src="/HeroRight.webp"
            alt="Hero model"
            width="1600"
            height="900"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-6 left-6 bg-lime-300 px-4 py-2 text-sm md:text-base font-semibold shadow-md m-10 cursor-pointer">
            CHECK NEW ARRIVALS
          </button>
        </div>

        {/* Right Side (Red) */}
        <div className="relative flex flex-col justify-center items-start p-6 md:p-14 h-[50vh] md:h-full">
          <span className="uppercase text-xs md:text-sm font-semibold mb-2 tracking-wide relative z-20 bg-white p-2 border">
            Summer 2024
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight relative z-20">
            Creating <br /> Unique Style.
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-md mb-6 relative z-20">
            From concept to execution, we craft timeless identities that
            resonate with your audience.
          </p>

          <img
            src="/HeroSec.webp"
            alt="Model Right"
             width="1600"
            height="900"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="absolute top-0 right-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="w-full bg-black flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 p-6 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-lime-300">
          COLLUSION X RAYEN
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#585858]">
          SELECTED
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#ffffff]">
          SUMMER / 2024
        </h1>
      </div>
    </section>
  );
};

export default Hero;

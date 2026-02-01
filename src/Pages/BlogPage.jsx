import React from "react";
import Hat from "../assets/HatChain.png";
import SKY from "../assets/Sky.png";
import ModelLeft from "../assets/ModelLeft.png";
import ModelRight from "../assets/ModelRight.png";
import ModelBack from "../assets/ModelBack.png";

const BlogPage = () => {
  return (
    <section className="max-w-full overflow-hidden">
      {/* Top Heading */}
      <div className="w-full px-6 md:px-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-8">
        {/* Left Text Section */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 md:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Feel young, <br /> be unstoppable.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            From concept to execution, we craft timeless identities that
            resonate with your audience.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/3">
          <img
            src="/HatChain.webp"
            alt="hat"
            className="object-contain h-[150px] sm:h-[200px] md:h-[250px] transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>

      {/* Hero Images */}
      <div className="w-full">
        <div
          className="h-[300px] sm:h-[400px] md:h-[500px] flex flex-col sm:flex-row justify-center items-center sm:justify-between px-4 sm:px-8 gap-4 sm:gap-6 bg-cover bg-center"
          style={{ backgroundImage: `url(${SKY})` }}
        >
          <img
            src={ModelRight}
            alt="Model"
            className="object-contain w-[40%] sm:w-[30%] md:w-[25%]"
          />
          <img
            src={ModelBack}
            alt="Model"
            className="object-contain w-[40%] sm:w-[30%] md:w-[25%]"
          />
          <img
            src={ModelLeft}
            alt="Model"
            className="object-contain w-[40%] sm:w-[30%] md:w-[25%]"
          />
        </div>
      </div>

      {/* Scroll Down Banner */}
      <div className="w-full bg-lime-300 px-6 md:px-8 text-xs sm:text-sm font-semibold py-2 md:py-3 border text-center tracking-wide">
        SCROLL DOWN
      </div>

      {/* Bottom Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-10 px-6 md:px-12 py-12 gap-8">
        {/* Our Vision (70%) */}
        <div className="md:col-span-7 space-y-3 text-center md:text-left">
          <h4 className="text-sm font-semibold uppercase mb-1 text-gray-700">
            OUR VALUES
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            Our Vision <br />
            is to connect with <br /> the world through
          </h2>
        </div>

        {/* Story of Foundation (30%) */}
        <div className="md:col-span-3 px-4 md:px-8 border-t md:border-l md:border-t-0 pt-6 md:pt-0 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            The Story of Foundation
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Filled with a spirit of fun and freedom, Collusion was founded on a
            1990s road trip that spanned California, New Mexico, and beyond. It
            has since grown into a brand that celebrates youth culture and
            diversity, always pushing the boundaries of fashion and identity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

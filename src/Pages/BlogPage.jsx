import React from "react";
import Hat from "../assets/HatChain.png";
import SKY from "../assets/Sky.png";
import ModelLeft from "../assets/ModelLeft.png";
import ModelRight from "../assets/ModelRight.png";
import ModelBack from "../assets/ModelBack.png";

const BlogPage = () => {
  return (
    <section className="max-w-full">
      {/* Top Heading */}
      <div className="w-full pl-6 mx-auto flex items-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight w-[60%]">
          Feel young, <br /> be unstoppable.
        </h1>
        <p className="text-gray-600 max-w-lg text-sm md:text-base  w-full ">
          From concept to execution, we craft timeless identities that resonate
          with your audience.
        </p>
        <div>
          <img src={Hat} alt="hat" className=" object-cover h-full w-full " />
        </div>
      </div>

      {/* Hero Images */}
      <div className="w-full ">
        <div
          className="h-[400px] md:h-[500px] flex flex-col md:flex-row justify-between px-6 gap-6 bg-cover bg-center"
          style={{ backgroundImage: `url(${SKY})` }}
        >
            <img src={ModelRight} alt="Model" className="object-cover" />
            <img src={ModelBack} alt="Model" className="object-cover" />
            <img src={ModelLeft} alt="Model" className="object-cover" />
        </div>
      </div>
      <div className="w-full bg-lime-300 px-8 text-xs font-semibold py-2 border">
        SCROLL DOWN
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-10 px-6 py-12 md:px-12 gap-8 ">
        {/* Our Vision (70%) */}
        <div className=" w-full md:col-span-7">
          <h4 className="text-sm font-semibold uppercase mb-2">OUR VALUES</h4>
          <h2 className="text-2xl md:text-6xl font-bold mb-4">
            Our Vision <br />
            is to connect with <br /> the world through
          </h2>
        </div>

        {/* Story of Foundation (30%) */}
        <div className=" md:col-span-3 px-8 border-l">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The Story of Foundation
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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

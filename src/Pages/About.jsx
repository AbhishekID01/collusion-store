import React from "react";

const About = () => {
  return (
    <section className="w-full">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold m-4">About Our Brand</h2>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 border-t">
        <div className="flex items-center justify-center border-r">
          <img
            src="/BlackDress.webp"
            alt="About our brand"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center p-6 md:p-12 space-y-6">
          <div className="space-y-6">
            {/* Vision */}
            <div className="border-b">
              <h3 className="font-semibold text-lg">Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Our vision is to push forward with creativity and guide people
                with clarity and strength. We craft strategies that align with
                our clients’ goals and aspirations, transforming their dreams
                into reality.
              </p>
            </div>

            {/* Innovation */}
            <div className="border-b">
              <h3 className="font-semibold text-lg">Innovation</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Innovation is at the heart of everything we do. We embrace
                curiosity, explore uncharted territories, and challenge the
                status quo by pushing boundaries and thinking outside the box.
              </p>
            </div>

            {/* Connection */}
            <div>
              <h3 className="font-semibold text-lg">Connection</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We believe in the power of connection, building bridges between
                brands and their audiences. Through compelling stories and
                meaningful experiences, we create relationships that inspire
                trust and authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

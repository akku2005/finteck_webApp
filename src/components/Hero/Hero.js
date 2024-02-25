import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-0">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4">
        Click me
      </button>
      <h1 className="text-7xl font-bold mb-4">
        Hello, I'm <span className="text-green-600">Akash!</span>{" "}
      </h1>
      <p className="text-base text-gray-600 mb-8">
        I'm a developer passionate about creating awesome things with
        technology.
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-full">
        Learn More
      </button>
      <p className="text-base text-gray-600 mt-2">No credit card required.</p>
    </div>
  );
};

export default Hero;

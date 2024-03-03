import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center  mt-20 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
       <div className="flex items-center  rounded-full p-1 mb-3 bg-lime-400">
      <p className="text-black mr-2 ml-2 text-center font-light">
        Version 2.1 Out Now
      </p>
      <div className="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 text-gray-900"
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
        </svg>
      </div>
    </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
        Unleashing the <br />
        <span>
          Magic of <span className="text-lime-400">Design</span>
        </span>
      </h1>

      <p className="text-base font-medium sm:text-lg md:text-xl lg:text-base xl:text-lg text-gray-400 mt-1 mb-8 text-center">
  Build Professional Websites Without a Single Line of Code,<br />
  Blasting Speed, and Elevate SEO and Performance.
</p>

      <button className="bg-green-500 text-white px-4 py-2 rounded-full">
        Learn More
      </button>
      <p className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg text-gray-600 mt-2">
        No credit card required.
      </p>
    </div>
  );
};

export default Hero;

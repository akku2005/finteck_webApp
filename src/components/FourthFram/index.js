// index.js

import React from "react";
import "../../styles/GlassMorphismCard.css";

const TestimonialCard = ({
  backgroundColor,
  content,
  textColor,
  imageSrc,
  name,
  profession,
}) => {
  return (
    <li className="relative overflow-hidden">
      <div className={`bg-${backgroundColor} rounded-xl shadow-md p-8`}>
        <div className="flex items-center mb-4">
          <img
            src={imageSrc}
            alt={`Testimonial ${name} Avatar`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h6 className="text-sm font-medium">{name}</h6>
            <p className="text-xs">{profession}</p>
          </div>
        </div>
        <p className={`text-${textColor}`}>{content}</p>
      </div>
    </li>
  );
};

const TestimonialSection = () => {
  return (
    <div>
      <section className="py-0 px-0">
        {/* Testimonials Section */}
        <section>
          <div>
            <section className="py-5">
              <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Testimonial 01 */}
                <li className="flex-shrink-0">
                  <div className="bg-gray-200 p-6 rounded-xl text-start">
                    {/* Testimonial Content */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-black text-start mb-3">
                        Effortless Website Publishing for a Time-Saving
                        Experience
                      </h3>
                      <p className="text-gray-600 text-start">
                        Nexus provides endless design possibilities without the
                        need for coding. It's a game-changer for designers who
                        want to focus on creativity.
                      </p>
                    </div>

                    {/* Testimonial Meta */}
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src="https://framerusercontent.com/images/1w5GLrTygMdtAPGPL4s9ozQhxM.png"
                          alt="Michael Anderson"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium text-gray-800 text-start">
                          Michael Anderson
                        </h6>
                        <p className="text-xs text-gray-600 text-start">
                          Swift Web Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Testimonial 03 */}
                <li className="flex-shrink-0 text-start">
                  <div className="bg-gray-200 p-6 rounded-xl">
                    {/* Testimonial Content */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-black text-start mb-3">
                        Empowering Designers Worldwide to Take on New Challenges
                      </h3>
                      <p className="text-gray-600 text-start">
                        As a designer who doesn't code, Nexus is a dream come
                        true. It has all the tools and features I need to create
                        visually stunning websites without code.
                      </p>
                    </div>

                    {/* Testimonial Meta */}
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src="https://framerusercontent.com/images/5N3cdWjzwqic8cfHlPsZ3e7jU.png"
                          alt="Mark Stevens"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium text-gray-800 text-start">
                          Mark Stevens
                        </h6>
                        <p className="text-xs text-gray-600 text-start">
                          Creative Agency
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Testimonial 04 (Repeat structure for other testimonials) */}
                {/* ... */}

                {/* Testimonial 05 */}
                <li className="flex-shrink-0 text-start">
                  <div className="bg-gray-200 p-7 rounded-xl">
                    {/* Testimonial Content */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-black mb-3">
                        A Absolute Game-Changer for My Web Design Business
                      </h3>
                      <p className="text-gray-600">
                        Nexus has given me the confidence to take on web design
                        projects that I would have otherwise hesitated to
                        tackle. It's an empowering tool.
                      </p>
                    </div>

                    {/* Testimonial Meta */}
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src="https://framerusercontent.com/images/svI826FUD9DRarzqAtHVUnTfGq8.png"
                          alt="Sarah Thompson"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium text-gray-800">
                          Sarah Thompson
                        </h6>
                        <p className="text-xs text-gray-600 text-start">
                          Design Studio
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      {/* Glass Morphism Effect Section */}
      <section className="glass text-black">
        <div className="glass-morphism-bg">
          <div className="glass text-center">
            <section>
              {/* Rating Section */}
              <section className="flex text-center items-center justify-center mt-0 px-4 lg:mx-auto">
                <div className="flex items-center justify-center p-2 w-18 backdrop-blur-md rounded-full border bg-gray-900 ">
                  {/* Rating component */}
                  <div className="ml-1 mr-1">
                    <div className="bg-lime-400   rounded-full h-full w-full p-3 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-5 h-5"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Rating text component */}
                  <div className="mt-1 mb-1">
                    <p className="text-white  text-center">
                      Rated <span className="text-lime-400 ">4.8/5</span> by
                      over 1000 users
                    </p>
                  </div>
                </div>
              </section>
              <section className="lg:w-30pc mt-5 text-center sm:w-11/12 md:w-10/12 mx-auto">
                <div>
                  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-7xl font-bold leading-relaxed text-black dark:text-white">
                    Glowing Testimonials that
                    <span className="block">Speak Volumes</span>
                  </p>
                </div>
              </section>

              {/* Additional Section 1 */}
              <TestimonialSection />
              <TestimonialSection />
            </section>
            {/* pricing section */}
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <section>
                    <div className="flex items-center justify-center">
                      <div className="rounded-full p-6">
                        {/* Title Container */}
                        <div className="text-center mb-5">
                          <button className="border p-2 rounded-full bg-lime-300">
                            Pricing
                          </button>
                          <h2 className="text-2xl font-bold">
                            Flexible Pricing Plans to Suit Your Needs
                          </h2>
                        </div>

                        {/* Description Container */}
                        <div className="text-center">
                          <p className="text-gray-600">
                            Choose from our range of affordable pricing options.
                            No hidden fees, transparent and straightforward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="flex mx-auto border-2 bg-gray-200 rounded-full overflow-hidden p-2 mt-6">
                    <button className="py-3  px-4 bg-black border rounded-full  text-white focus:outline-none">
                      Monthly
                    </button>
                    <button className="py-1 px-4 focus:outline-none">
                      Annually
                    </button>
                  </div>
                </div>
                <div className=" text-start flex flex-wrap -m-4">
                  <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        START
                      </h2>
                      <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                        Free
                      </h1>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Vexillologist pitchfork
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Tumeric plaid portland
                      </p>
                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                        Button
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      <p className="text-xs text-gray-500 mt-3">
                        Literally you probably haven't heard of them jean
                        shorts.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 bg-gradient-to-r from-gray-00 to-rose-500 flex flex-col relative overflow-hidden">
                      <span className="bg-lime-400 text-black font-semibold px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-full mt-2 mr-2">
                        Save 20%
                      </span>
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        PRO
                      </h2>
                      <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$38</span>
                        <span className="text-lg ml-1 font-normal text-gray-500">
                          /mo
                        </span>
                      </h1>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Vexillologist pitchfork
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Tumeric plaid portland
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Hexagon neutra unicorn
                      </p>
                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                        Button
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      <p className="text-xs text-gray-500 mt-3">
                        Literally you probably haven't heard of them jean
                        shorts.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        BUSINESS
                      </h2>
                      <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$56</span>
                        <span className="text-lg ml-1 font-normal text-gray-500">
                          /mo
                        </span>
                      </h1>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Vexillologist pitchfork
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Tumeric plaid portland
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Hexagon neutra unicorn
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Vexillologist pitchfork
                      </p>
                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                        Button
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      <p className="text-xs text-gray-500 mt-3">
                        Literally you probably haven't heard of them jean
                        shorts.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        SPECIAL
                      </h2>
                      <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$72</span>
                        <span className="text-lg ml-1 font-normal text-gray-500">
                          /mo
                        </span>
                      </h1>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Vexillologist pitchfork
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Tumeric plaid portland
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Hexagon neutra unicorn
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Vexillologist pitchfork
                      </p>
                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-auto"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                        Button
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      <p className="text-xs text-gray-500 mt-3">
                        Literally you probably haven't heard of them jean
                        shorts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>The Go-To Choice for Over 200,000 Designers</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

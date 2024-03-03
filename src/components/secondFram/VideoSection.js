import React from "react";

const VideoSection = () => {
  return (
    <section
      className="text-gray-800"
      data-framer-name="Section About"
      name="Section About"
    >
      <div className="container mx-auto lg:mx-15 px-8">
        <div className="flex justify-center">
          <div className="max-w-screen-lg w-full">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="col-span-">
                <div className="relative rounded-md overflow-hidden">
                  <div className="relative ">
                    <div className="relative rounded-md overflow-hidden">
                      <img
                        src="https://framerusercontent.com/images/2ul769vh4sN19F6X5DiMmnlPQ.jpg?scale-down-to=1024"
                        alt=""
                        srcSet="https://framerusercontent.com/images/2ul769vh4sN19F6X5DiMmnlPQ.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/2ul769vh4sN19F6X5DiMmnlPQ.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/2ul769vh4sN19F6X5DiMmnlPQ.jpg 1400w"
                        sizes="max((min(max(min(100vw - 64px, 1856px), 0px) - 128px, 1400px) - 64px) / 2, 0px)"
                        className="block w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="absolute top-0 left-0 bottom-0 right-0"
                      style={{
                        backgroundColor: "rgba(203, 251, 69, 0.3)",
                        borderRadius: "inherit",
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="col-span-1">
                <div className="mt-6">
                  <h2 className="text-3xl font-bold mb-4 sm:leading-normal leading-10">
                    Build Stunning Websites
                  </h2>
                  <p className="text-gray-600">
                    The revolutionary website builder that empowers you to build
                    stunning websites effortlessly. Say goodbye to coding
                    complexities and unleash your creativity like never before.
                    With Nexus, you have the power to bring your vision to life
                    without writing a single line of code.
                  </p>
                </div>
                <div className="flex mt-5 gap-3">
                  {/* Card 1 */}
                  <div className="flex-1 rounded-lg p-5 border bg-gray-100 ">
                    <div className="rounded-full overflow-hidden w-7 h-7 bg-green-300">
                      <div className="relative mt-1.5 justify-center items-center bg-green-300">
                        <div className="relative rounded-md overflow-hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 mx-auto text-white"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold mb-2">No Code</h3>
                      <p className="text-gray-600">
                        Create websites effortlessly, all without the need for
                        any coding.
                      </p>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex-1 border rounded-lg p-4 bg-gray-100 ">
                    <div className="rounded-full w-7 h-7 overflow-hidden bg-green-300">
                      <div className="relative mt-1.5 bg-green-300">
                        <div className="relative rounded-md overflow-hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 mx-auto text-white"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold mb-2">Nitro Speed</h3>
                      <p className="text-gray-600">
                        Ensuring fast and efficient website loading for an
                        exceptional experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 mb-4">
        <div className="p-4 text-center">
          <button className="bg-lime-500 text-white py-2 px-4 mt-4 rounded-full">
            Click me
          </button>

          <h1 className="text-3xl font-bold mt-4">
            Welcome to my <span className="text-indigo-400">website</span>{" "}
          </h1>

          <p className="text-gray-700 mt-2">
            This is a sample text for demonstration purposes. You can add your
            content here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

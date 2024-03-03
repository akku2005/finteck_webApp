// "use client";

// import React, { useEffect, useState } from "react";
// import SecondFram from "../secondFram/SecondFram";
// import VideoSection from "../secondFram/VideoSection";
// import TopScrollEffect from "../secondFram/TopScrollEffect"
// import "../../styles/GlassMorphismCard.css";

// const GlassMorphismCard = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Remove the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section className={`glass ${isScrolled ? "slide-up" : ""} bg-white`}>
//       <main className="flex min-h-screen flex-col items-center justify-between lg:mx-10">
//         <div className="mb-5 grid grid-cols-2 gap-8 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//           {/* ... your content here ... */}
//         </div>
//         <TopScrollEffect/>
//         <VideoSection />
//         <SecondFram />
//       </main>
//     </section>
//   );
// };

// export default GlassMorphismCard;


import React from "react";
import SecondFram from "../secondFram/SecondFram";
import VideoSection from "../secondFram/VideoSection";
import TopScrollEffect from "../secondFram/TopScrollEffect";
import "../../styles/GlassMorphismCard.css";

const GlassMorphismCard = () => {
  return (
    <section className="glass bg-black">
      <main className="flex min-h-screen flex-col items-center justify-between lg:mx-10">
        <div className="mb-5 grid grid-cols-2 gap-8 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {/* ... your content here ... */}
        </div>
        <TopScrollEffect />
        <VideoSection />
        <SecondFram />
      </main>
    </section>
  );
};

export default GlassMorphismCard;

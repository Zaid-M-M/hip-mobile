// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const TSec = () => {
//   return (
//     <div className="lg:min-h-screen min-h-[50vh] flex flex-col justify-start items-center py-[45px] lg:py-[70px] bg-[url('/sustainability/hero_header_section.webp')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
//       <div className="flex flex-col items-center w-full justify-center">
//         <div className="bw-m px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white">
//           <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
//             Home
//           </a>{" "}
//           /{" "}
//           <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px]">
//             Sustainability
//           </a>
//         </div>
//         <h1 className="text-[35px] flex xl:flex-row xl:justify-center flex-col fix whitespace-nowrap text-center md:text-[45px] lg:text-[64px] lg:leading-[74px] md:leading-[55px] leading-[45px] text-white bw-r">
//           <span className="bw-m">Build For Progress.</span>
//           <span> Driven By Purpose.</span>
//         </h1>
//       </div>
//       <div className="w-full absolute left-0 bottom-0 bg-gradient-to-b from-transparent from-5% to-[#161515] h-[40vh] z-30" />
//     </div>
//   );
// };

// export default TSec;
"use client";
import React from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/src/app/TransitionLink";

const TSec = () => {
  return (
    <div className="lg:min-h-screen min-h-[85vh] flex flex-col justify-start items-center py-[45px] lg:py-[70px] relative overflow-hidden">
      {/* Full-screen video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-bottom -z-10 hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/sustainability/sustainable_banner_desk.webp"
        src="/sustainability/sustainable_banner_desk_new.mp4"
      />

      <video
        className="absolute inset-0 w-full h-full object-cover -z-10 block md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/sustainability/sustainable_banner_mob.webp"
        src="/sustainability/sustainable_banner_mob_new.mp4"
      />

      {/* Optional dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40 -z-10" /> */}

      <div className="absolute z-10 flex flex-col items-start fixup lg:pt-20 h-full justify-start">
        {/* Breadcrumb */}
        <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-[fit-content] border-[0.5px] border-[rgba(255,255,255,0.20)] bg-[rgba(0,0,0,0.3)] backdrop-blur-[5px] text-white">
          <TransitionLink
            href="/"
            className="text-[13px] md:text-[13px] lg:text-[16px]"
          >
            Home
          </TransitionLink>
          /{" "}
          <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px]">
            Sustainability
          </a>
        </div>

        {/* Main heading */}
        {/* <h1 className="text-[35px] flex xl:flex-row xl:justify-center flex-col whitespace-nowrap text-center md:text-[45px] lg:text-[64px] lg:leading-[74px] md:leading-[55px] leading-[45px] text-white bw-r mt-8">
          <span className="bw-m">Build For Progress.</span>
          <span> Driven By Purpose.</span>
        </h1> */}
      </div>

      {/* Bottom gradient fade (kept from original design) */}
      {/* <div className="w-full absolute left-0 bottom-0 bg-gradient-to-b from-transparent from-5% via-[#0E2C00] to-[#121A0F] h-[40vh] z-20 pointer-events-none" /> */}
    </div>
  );
};

export default TSec;

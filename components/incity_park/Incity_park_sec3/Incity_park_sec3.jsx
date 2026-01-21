// normal design without function but design correct
// "use client";
// import React from "react";
// import { FaPause } from "react-icons/fa6";

// const Incity_park_sec3 = () => {
//   return (
//     <div className="md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[50px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px]">
//       {/* Background vectors */}
//       <img
//         className="purple_vctr hidden md:block absolute -top-40 -left-10 md:w-[370px] w-[300px]"
//         src="/purple_vector.svg"
//         alt="Purple Vector"
//       />
//       <img
//         className="orange_vctr hidden md:block absolute -top-40 left-20 md:w-[370px] w-[300px]"
//         src="/orange_vector.svg"
//         alt="Orange Vector"
//       />

//       <div className="relative w-full fix">
//         <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row">
//           {/* --- Left --- */}
//           <div className="max-w-[100%] xl:max-w-[45%]">
//             <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
//               <div className="flex items-start flex-col">
//                 <h1 className="lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex gap-[10px] md:gap-[17px]">
//                   Take a
//                   <img
//                     src="/abstract_pattern.svg"
//                     className="abstract_svg"
//                     alt="Grade A Box"
//                   />
//                 </h1>
//                 <h1 className="bw-m lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
//                   Closer Look
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Paragraph spans full width under "Closer Look" */}
//         <p className="text-black bw-m w-full text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-[20px] 360:text-[14px] 360:leading-[21px]">
//           Navigate through our interactive 3D model to see how our in-city parks
//           are designed for accessibility, efficiency, and scale.
//         </p>
//       </div>
//       <div className="w-full flex justify-center relative p-[40px] pb-[0px]">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-auto object-cover shadow-lg"
//         >
//           <source
//             src="/network_overview/Network_Overview.mp4"
//             type="video/mp4"
//           />
//           {/* Your browser does not support the video tag. */}
//         </video>
//         <div className="absolute bottom-[20px] right-[60px]">
//           <button className="text-white bg-black p-[16px] bw-m flex items-center justify-center gap-[5px]">
//             Watch Video
//             <img src="/play.svg" alt="Play Icon" />
//             <FaPause/>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec3;

// "use client";
// import React, { useRef, useState } from "react";
// import { FaPlay, FaPause } from "react-icons/fa";

// const Incity_park_sec3 = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     if (!videoRef.current) return;

//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[50px] py-[45px] lg:!pt-[40px] !pt-[17px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px] ">
//       {/* Background vectors */}
//       {/* <img
//         className="purple_vctr hidden md:block absolute -top-40 -left-10 md:w-[370px] w-[300px]"
//         src="/purple_vector.svg"
//         alt="Purple Vector"
//       />
//       <img
//         className="orange_vctr hidden md:block absolute -top-40 left-20 md:w-[370px] w-[300px]"
//         src="/orange_vector.svg"
//         alt="Orange Vector"
//       /> */}

//       {/* Text content */}
//       <div className="relative w-full fix">

//         <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row">
//           <div className="max-w-[100%] xl:max-w-[45%]">
//             <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
//               <div className="flex items-start flex-col">
//                 <h1 className="lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex gap-[10px] md:gap-[17px]">
//                   Take a
//                   <img
//                     src="/abstract_pattern.svg"
//                     className="abstract_svg"
//                     alt="Grade A Box"
//                   />
//                 </h1>
//                 <h1 className="bw-m lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
//                   Closer Look
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         <p className="text-black bw-r w-full text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-[20px] 360:text-[14px] 360:leading-[21px]">
//           Navigate through our interactive 3D model to see how our in-city parks
//           are designed for accessibility, efficiency, and scale.
//         </p>
//       </div>

//       {/* Video with responsive play/pause button */}
//       <div className="w-full flex justify-center relative fix">
//         <video
//           ref={videoRef}
//           muted
//           loop
//           playsInline
//           className="w-full h-auto object-cover shadow-lg"
//         >
//           <source
//             src="/network_overview/Network_Overview.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video format.
//         </video>

//         {/* Play/Pause button */}
//         <button
//           onClick={handlePlayPause}
//           className="absolute bottom-[7px] right-[7px] md:bottom-[15px] md:right-[20px] text-white bg-black px-3 md:px-6 py-2 md:py-3 bw-m flex items-center justify-center gap-2 text-[9px] md:text-[16px]  transition uppercase cursor-pointer"
//         >
//           {isPlaying ? "Pause Video" : "Watch Video"}
//           {isPlaying ? <FaPause /> : <FaPlay />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec3;

"use client";
import React from "react";

const Incity_park_sec3 = () => {
  return (
    <div className="md:py-[80px] lg:py-[100px] lg:pb-[50px] xl:pb-[80px] py-[45px] lg:!pt-[60px] !pt-[17px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[45px]">
      {/* Text content */}
      <div className="relative w-full fix">
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row">
          <div className="max-w-[100%] xl:max-w-[45%]">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <div className="flex items-start flex-col">
                <h1 className="lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex gap-[10px] md:gap-[17px]">
                  Take a
                  <img
                    src="/abstract_pattern.svg"
                    className="abstract_svg"
                    alt="Grade A Box"
                  />
                </h1>
                <h1 className="bw-m lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
                  Closer Look
                </h1>
              </div>
            </div>
          </div>
        </div>

        <p className="text-black bw-r w-full text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-[20px] 360:text-[14px] 360:leading-[21px]">
          Navigate through our interactive 3D model to see how our InCity
          Centers are designed for accessibility, efficiency, and scale.
        </p>
      </div>

      {/* Embedded iframe replacing video */}
      <div className="w-full relative fix h-[300px] lg:h-[700px] md:h-[500px]">
        <iframe
          src="https://phpstack-819107-5760335.cloudwaysapps.com/"
          width="100%"
          height="100%"
          className=""
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Incity_park_sec3;

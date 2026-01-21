import React from "react";

const GovernSpot = () => {
  return (
    <div>
      <div className="relative w-full h-[70vh] 1280:h-[100vh] 1366:h-[590px] overflow-hidden">
        {/* Desktop image */}
        <img
          className="w-full h-full object-cover md:block hidden"
          src={"/governance/govern.webp"}
          alt="Governance Banner"
        />
        {/* Mobile image */}
        <img
          className="w-full h-full object-cover md:hidden block"
          src="/governance/governance_banner_mob.webp"
          alt="Governance Banner Mobile"
        />

        {/* Overlay content */}
        <div className="absolute lg:bottom-[60px] lg:left-[50px] 1280:left-[65px] 1366:left-[70px] 1440:left-[70px] 1536:left-[100px] 1600:left-[130px] 1920:left-[288px] md:bottom-[40px] md:left-[40px] bottom-[40px] left-[20px]">
          <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white">
            <a href="/" className="text-[13px] md:text-[13px] lg:text-[16px]">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[13px] md:text-[13px] lg:text-[16px]">
              {"Governance"}
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="bw-m text-white text-[35px] leading-[45px] sm:text-[45px] sm:leading-[55px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px]">
              {"Governance"}
              <span className="w-[80px] sm:w-[100px] 768:w-[120px]  ml-[15px] mb-[8px] s h-[4px] 1280:w-[249px] md:h-[6px] bg-[#fff] 768:mb-[10px] 768:ml-[12px] 1280:mb-[14px] 1280:ml-[30px] inline-block"></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernSpot;

// "use client";
// import React from "react";

// const Box = ({ children, className = "" }) => {
//   return (
//     <div
//       className={`relative ${className} 1280:p-3 1366:p-6`}
//       style={{
//         borderWidth: "1.2px", // border thickness
//         borderStyle: "solid",
//         borderImageSource:
//           "repeating-linear-gradient(45deg, #7D7D7D 0 10px, transparent 10px 20px)", // gradient dashed with #7D7D7D
//         borderImageSlice: 1.5,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const GovernStructure = () => {
//   return (
//     <div className="py-[45px] bg-black sm:py-[80px] 1366:py-[100px]">
//       <div className="flex gap-[10px] 1366:gap-[23px] fixup w-full h-full ">
//         <div className="flex 1280:w-[70%] 1366:flex-1 ">
//           {/* Left image */}
//           <div className="-mr-[148px] z-30">
//             <img src="/governance/structure.png" alt="" />
//           </div>

//           {/* Right column with gradient dashed borders */}
//           <div className="flex flex-col gap-[20px] z-0">
//             {/* --- Box 1 with arrow --- */}
//             <div className="flex items-center ">
//               <Box className="pl-36 flex-1">
//                 <div className="flex flex-col gap-[14px]">
//                   <div className="flex items-center gap-[20px]">
//                     <img src="/governance/arr.svg" alt="" />
//                     <p className="text-[16px] text-white leading-[26px]">
//                       Providing the strategic Vision and Direction for carbon
//                       neutrality
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-[20px]">
//                     <img src="/governance/arr.svg" alt="" />
//                     <p className="text-[16px] text-white leading-[26px]">
//                       Providing the strategic Vision and Direction for carbon
//                       neutrality
//                     </p>
//                   </div>
//                 </div>
//               </Box>
//               {/* Arrow beside the box */}
//               <img
//                 src="/governance/linearr.svg"
//                 alt=""
//                 className="w-auto h-auto"
//               />
//             </div>

//             {/* --- Box 2 with arrow --- */}
//             <div className="flex items-center ">
//               <Box className="pl-36 flex-1 1366:w-full">
//                 <div className="flex flex-col gap-[14px]">
//                   {Array.from({ length: 4 }).map((_, i) => (
//                     <div key={i} className="flex items-center gap-[20px]">
//                       <img src="/governance/arr.svg" alt="" />
//                       <p className="text-[16px] text-white leading-[26px]">
//                         Providing the strategic Vision and Direction for carbon
//                         neutrality
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </Box>
//               {/* Arrow beside the box */}
//               <img
//                 src="/governance/linearr.svg"
//                 alt=""
//                 className="w-auto h-auto"
//               />
//             </div>

//             {/* --- Box 3 with arrow --- */}
//             <div className="flex items-center ">
//               <Box className="pl-36 flex-1">
//                 <div className="flex flex-col gap-[14px]">
//                   {Array.from({ length: 3 }).map((_, i) => (
//                     <div key={i} className="flex items-center gap-[20px]">
//                       <img src="/governance/arr.svg" alt="" />
//                       <p className="text-[16px] text-white leading-[26px]">
//                         Providing the strategic Vision and Direction for carbon
//                         neutrality
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </Box>
//               {/* Arrow beside the box */}
//               <img
//                 src="/governance/linearr.svg"
//                 alt=""
//                 className="w-auto h-auto"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="text-white flex flex-col flex-1">
//           {" "}
//           <div className="mb-6">
//             <h2 className="text-[#2BB04C] uppercase bw-m text-[16px] leading-[150%]">
//               APEX COMMITTEE
//             </h2>{" "}
//             <p className="text-[#E0E0E0] bw-r text-[16px] leading-[26px]">
//               The Apex Committee will meet quarterly or bi-annually to set
//               strategic direction for carbon neutrality and make final decisions
//               on emission reduction initiatives/projects.{" "}
//             </p>{" "}
//           </div>{" "}
//           <div className="mb-12 mt-9">
//             <h2 className="text-[#2BB04C] uppercase bw-m text-[16px] leading-[150%]">
//               Core Steering Committee
//             </h2>{" "}
//             <p className="text-[#E0E0E0] bw-r text-[16px] leading-[26px]">
//               The Core Steering Committee will meet weekly during the first 6
//               months and monthly thereafter. They will handle key tasks like
//               monitoring the GHG inventory, prioritizing the decarbonization
//               levers, and conducting capacity-building sessions to ensure smooth
//               project execution.
//             </p>{" "}
//           </div>{" "}
//           <div className="mb-6">
//             <h2 className="text-[#2BB04C] uppercase bw-m text-[16px] leading-[150%]">
//               Asset wise carbon champion{" "}
//             </h2>{" "}
//             <p className="text-[#E0E0E0] bw-r text-[16px] leading-[26px]">
//               Providing the strategic Vision and Direction for carbon neutrality{" "}
//             </p>{" "}
//           </div>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GovernStructure;

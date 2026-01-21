// import React from "react";
// import Workforcecard from "./Workforcecard";

// const Work_sec1 = ({ data }) => {
//   return (
//     <div>
//       <div className="relative w-full max-w-screen fix  md:py-[80px] lg:py-[100px]  py-[45px]">
//         {/* <img
//           className="purple_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[-100px] lg:right-[30px] md:w-[350px] w-[300px]"
//           src="/purple_vector.svg"
//         />
//         <img
//           className="orange_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[-100px] lg:right-[-200px]  md:w-[350px] w-[300px]"
//           src="/orange_vector.svg"
//         /> */}

//         <div className="flex flex-col justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
//           <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
//             <div className="flex flex-col md:flex-row md:items-center relative  md:w-[460px] lg:w-[auto]">
//               <div className="flex items-start gap-5 flex-col">
//                 <h1 className="sec_hd flex flex-col max-h-fit justify-start bw-r md:w-[460px] lg:w-[auto] capitalize">
//                   <span className="bw-m w-full flex items-center gap-5">
//                     {data.heading}
//                   </span>
//                   {/* A Prime Industrial <br />
//                   Real Estate Location */}
//                 </h1>
//                 <img
//                   src="/abstract_pattern.svg"
//                   className="object-cover h-[58px] lg:w-[318px] md:w-[318px] w-[100px]"
//                   alt="Grade A Box"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="1280:max-w-[550px] flex flex-col gap-[15px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
//             <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
//               {data.desc}
//             </p>
//             <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
//               {data.para}
//             </p>
//             <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
//               {data.extra}
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* ✅ Cards Section */}
//       <div className="flex items-center justify-center w-full bg-white">
//         <FeatureCards />
//       </div>
//     </div>
//   );
// };

// export default Work_sec1;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React from "react";
// import FeatureCards from "./FeatureCards";

// const Work_sec1 = ({ data }) => {
//   return (
//     <div className=" md:py-[80px] lg:py-[100px] py-[45px] flex flex-col gap-8 lg:gap-16 relative overflow-hidden">
//       <img
//         className="purple_vctr hidden md:block absolute -bottom-40 -right-20 md:w-[350px] w-[300px]"
//         src="/purple_vector.svg"
//       />
//       <img
//         className="orange_vctr hidden md:block absolute -bottom-40 right-20 md:w-[350px] w-[300px]"
//         src="/orange_vector.svg"
//       />

//       <div className="relative w-full fix">
//         <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
//           {/* --- Left --- */}
//           <div className="max-w-[600px] md:max-w-[100%] xl:max-w-[45%]">
//             <div className="flex flex-col md:flex-row md:items-center relative md:w-[460px] lg:w-auto">
//               <div className="flex items-start gap-2 lg:gap-5 flex-col">
//                 <h1 className="lg:text-[56px] lg:leading-[66px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[42px] text-[32px] flex flex-col max-h-fit justify-start bw-r capitalize">
//                   <span className="bw-m w-full flex items-center gap-5">
//                     {data.heading}
//                   </span>
//                 </h1>

//                 <img
//                   src="/abstract_pattern.svg"
//                   className="object-cover lg:h-[58px] h-[40px] lg:w-[318px] md:w-[50%] w-auto"
//                   alt="Grade A Box"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* --- Right --- */}
//           <div className="flex flex-col gap-[15px] max-w-full xl:max-w-1/2">
//             {data.desc && (
//               <p
//                 className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//                 dangerouslySetInnerHTML={{ __html: data.desc }}
//               />
//             )}
//             {data.para && (
//               <p
//                 className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//                 dangerouslySetInnerHTML={{ __html: data.para }}
//               />
//             )}
//             {data.extra && (
//               <p
//                 className="bw-r md:text-[17px] lg:text-[17px] flex flex-col gap-[15px] 1280:text-[20px] md:leading-[30px]"
//                 dangerouslySetInnerHTML={{ __html: data.extra }}
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ✅ Cards Section (pass amenities from props) */}
//       <div className="flex items-center justify-center w-full bg-white">
//         <FeatureCards amenities={data.amenities} />
//       </div>
//     </div>
//   );
// };

// export default Work_sec1;
"use client";
import React, { useState } from "react";
import Workforcecard from "../Workforcecard";
import { motion, AnimatePresence } from "framer-motion";
import Work_sec2 from "../Work_sec2/Work_sec2";

const Work_sec1 = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=" md:py-[80px] lg:py-[100px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden">
      {/* Background vectors */}
      {/* <img
        className="purple_vctr hidden md:block absolute -bottom-40 -right-20 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      <img
        className="orange_vctr hidden md:block absolute -bottom-40 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      /> */}

      <div className="relative w-full fix  ">
        <div className="bw-m px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-black">
          <a
            href="/"
            className="text-[13px] md:text-[13px] lg:text-[16px] text-black"
          >
            Home
          </a>
          <span className="text-[13px] md:text-[13px] lg:text-[16px] text-black mx-1">
            /
          </span>
          <a
            href="#"
            className="text-[13px] md:text-[13px] lg:text-[16px] text-black"
          >
            Workforce Amenities
          </a>
        </div>
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
          {/* --- Left --- */}
          <div className="max-w-[100%] xl:max-w-[45%] ">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <div className="flex items-start gap-2 lg:gap-2 flex-col">
                {/* ✅ Breadcrumb on top of text */}

                {/* ✅ Heading */}
                <h1 className="lg:text-[56px] xl:text-[56px] wmhead xl:leading-[66px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
                  <span
                    className="bw-r w-full"
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                  />
                  <span
                    className="bw-m w-full"
                    dangerouslySetInnerHTML={{ __html: data.heading1 }}
                  />
                </h1>

                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="Grade A Box"
                />
              </div>
            </div>
          </div>

          {/* --- Right --- */}
          <div className="flex flex-col gap-[15px] max-w-full xl:max-w-1/2">
            {data.desc && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
            )}
            {data.para && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                dangerouslySetInnerHTML={{ __html: data.para }}
              />
            )}

            {/* ✅ Animated expandable section */}
            <AnimatePresence initial={false}>
              {showMore && data.extra && (
                <motion.div
                  key="extra"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className="bw-r md:text-[17px] lg:text-[17px] flex flex-col gap-[15px] 1280:text-[20px] md:leading-[30px]"
                    dangerouslySetInnerHTML={{ __html: data.extra }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {showMore && data.extra1 && (
                <motion.div
                  key="extra"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className="bw-r md:text-[17px] lg:text-[17px] flex flex-col gap-[15px] 1280:text-[20px] md:leading-[30px]"
                    dangerouslySetInnerHTML={{ __html: data.extra1 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {showMore && data.extra2 && (
                <motion.div
                  key="extra"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className="bw-r md:text-[17px] lg:text-[17px] flex flex-col gap-[15px] 1280:text-[20px] md:leading-[30px]"
                    dangerouslySetInnerHTML={{ __html: data.extra2 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {data.extra && (
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="md:mt-2 text-black bw-m flex md:gap-2 text-[16px] md:text-[20px] items-center w-fit cursor-pointer uppercase"
              >
                {showMore ? "Read Less" : "Read More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    showMore ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            )}

            {/* <AnimatePresence initial={false}>
              {showMore && data.extra1 && (
                <motion.div
                  key="extra"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className="bw-r md:text-[17px] lg:text-[17px] flex flex-col gap-[15px] 1280:text-[20px] md:leading-[30px]"
                    dangerouslySetInnerHTML={{ __html: data.extra1 }}
                  />
                </motion.div>
              )}
            </AnimatePresence> */}

            {/* {data.extra1 && (
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="md:mt-2 text-black bw-m flex md:gap-2 text-[16px] md:text-[20px] items-center w-fit cursor-pointer uppercase"
              >
                {showMore ? "Read Less" : "Read More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    showMore ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            )} */}
          </div>
        </div>
      </div>
      <Work_sec2 />
      {/* ✅ Cards Section */}
      <div className="flex items-center justify-center w-full bg-white">
        <Workforcecard amenities={data.amenities} />
      </div>
    </div>
  );
};

export default Work_sec1;

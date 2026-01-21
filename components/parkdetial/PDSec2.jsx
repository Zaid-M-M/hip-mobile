// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const PDSec2 = ({ para1, para2, hdPara, overview_left_content }) => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="overflow-hidden">
//       <div className="relative w-full max-w-screen fix">
//         {/* Background vectors */}
//         <img
//           className="purple_vctr hidden md:block absolute top-0 right-0 lg:bottom-auto sm:top-[-100px] lg:right-[30px] md:w-[350px] w-[300px]"
//           src="/purple_vector.svg"
//           alt="Purple Vector"
//         />
//         <img
//           className="orange_vctr hidden md:block absolute top-0 right-0 lg:bottom-auto sm:top-[-100px] sm:right-[-200px] md:w-[350px] w-[300px]"
//           src="/orange_vector.svg"
//           alt="Orange Vector"
//         />

//         <div className="flex flex-col justify-between md:gap-[40px] gap-[15px] lg:flex-row">
//           {/* Left section */}
//           <div className="flex justify-between flex-col max-w-[600px] md:max-w-[100%] lg:max-w-[45%] pt-12 xl:pt-24">
//             {/* <div className="flex flex-col md:justify-between md:flex-row md:items-center">
//               <h1 className="w-full text-[35px] tracking-tight leading-[45px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] flex flex-col max-h-fit justify-start bw-r capitalize">
//                 <span className="bw-m w-full md:justify-between xl:flex-row flex-col flex xl:items-center gap-2 lg:gap-5">
//                   Overview
//                   <img
//                     src="/frm2.png"
//                     className="xl:w-auto lg:w-[60%] md:w-[30%] lg:h-[58px] object-cover w-[50%] h-[40px]"
//                     alt="Grade A Box"
//                   />
//                 </span>
//               </h1>
//             </div> */}
//             <div className="flex gap-[10px] md:gap-[17px]">
//               <h2 className="text-[35px] tracking-tight leading-[45px] md:text-[45px] md:leading-[45px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] flex flex-col max-h-fit justify-start bw-m capitalize">
//                 Overview
//               </h2>
//               <img src="/abstract_pattern.svg" className="abstract_svg" />
//             </div>
//             <img
//               src="/parkdetail/ovarr.svg"
//               alt="Arrow filler"
//               className="w-full 1440:flex hidden mt-auto"
//             />
//             <img
//               src="/parkdetail/ovarr3.svg"
//               alt="Arrow filler"
//               className="w-full 1440:hidden lg:flex hidden mt-10"
//             />
//             {/* {overview_left_content && (
//               <p
//                 className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mt-6"
//                 dangerouslySetInnerHTML={{ __html: overview_left_content }}
//               />
//             )} */}
//           </div>

//           {/* Right section */}
//           <div className="1280:max-w-[550px] flex flex-col gap-[15px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] pt-0 pb-12 lg:py-12 xl:py-24">
//             {hdPara && (
//               <p
//                 className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//                 dangerouslySetInnerHTML={{ __html: hdPara }}
//               />
//             )}
//             {para1 && (
//               <p
//                 className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//                 dangerouslySetInnerHTML={{ __html: para1 }}
//               />
//             )}

//             {/* ✅ Animated expandable section */}
//             <AnimatePresence initial={false}>
//               {showMore && para2 && (
//                 <motion.div
//                   key="para2"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                   className="overflow-hidden"
//                 >
//                   <p
//                     className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//                     dangerouslySetInnerHTML={{ __html: para2 }}
//                   />
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Read More / Read Less button */}
//             {para2 && (
//               <button
//                 onClick={() => setShowMore((prev) => !prev)}
//                 className="flex items-center lg:gap-2 text-[16px] lg:text-[20px] uppercase bw-m cursor-pointer"
//               >
//                 {showMore ? "Read Less" : "Read More"}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className={`transition-transform ${
//                     showMore ? "rotate-180" : ""
//                   }`}
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PDSec2;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PDSec2 = ({ para1, para2, hdPara, overview_left_content }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="relative w-full max-w-screen fix">
        {/* Background vectors */}
        <img
          className="purple_vctr hidden md:block absolute top-0 right-0 lg:bottom-auto sm:top-[-100px] lg:right-[30px] md:w-[350px] w-[300px]"
          src="/purple_vector.svg"
          alt="Purple Vector"
        />
        <img
          className="orange_vctr hidden md:block absolute top-0 right-0 lg:bottom-auto sm:top-[-100px] sm:right-[-200px] md:w-[350px] w-[300px]"
          src="/orange_vector.svg"
          alt="Orange Vector"
        />

        <div className="flex flex-col justify-between md:gap-[40px] gap-[15px] lg:flex-row">
          {/* Left section */}
          <div className="relative flex justify-start flex-col max-w-[600px] md:max-w-[100%] lg:max-w-[45%] pt-12 xl:pt-24">
            {/* <div className="flex flex-col md:justify-between md:flex-row md:items-center">
              <h1 className="w-full text-[35px] tracking-tight leading-[45px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] flex flex-col max-h-fit justify-start bw-r capitalize">
                <span className="bw-m w-full md:justify-between xl:flex-row flex-col flex xl:items-center gap-2 lg:gap-5">
                  Overview
                  <img
                    src="/frm2.png"
                    className="xl:w-auto lg:w-[60%] md:w-[30%] lg:h-[58px] object-cover w-[50%] h-[40px]"
                    alt="Grade A Box"
                  />
                </span>
              </h1>
            </div> */}
            <div className="flex gap-[10px] md:gap-[17px]">
              <h2 className="text-[35px] tracking-tight leading-[34px] md:text-[45px] md:leading-[45px] xl:text-[64px] xl:leading-[55px] xl:tracking-[-2.56px] flex flex-col max-h-fit justify-start bw-m capitalize">
                Overview
              </h2>
              <img src="/abstract_pattern.webp" className="abstract_svg" />
            </div>
            {overview_left_content && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mt-6"
                dangerouslySetInnerHTML={{ __html: overview_left_content }}
              />
            )}
            <img
              src="/parkdetail/ovarr.svg"
              alt="Arrow filler"
              className="w-full lg:flex hidden mt-auto xl:max-w-[500px] xl:w-[500px] absolute bottom-[-55px]"
            />
            {/* <img
              src="/parkdetail/ovarr3.svg"
              alt="Arrow filler"
              className="w-full 1440:hidden lg:flex hidden mt-10"
            /> */}
          </div>

          {/* Right section */}
          <div className="1280:max-w-[550px] flex flex-col gap-[15px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] pt-0 pb-12 lg:py-12 xl:py-24">
            {hdPara && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                dangerouslySetInnerHTML={{ __html: hdPara }}
              />
            )}
            {para1 && (
              <p
                className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                dangerouslySetInnerHTML={{ __html: para1 }}
              />
            )}

            {/* ✅ Animated expandable section */}
            <AnimatePresence initial={false}>
              {showMore && para2 && (
                <motion.div
                  key="para2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
                    dangerouslySetInnerHTML={{ __html: para2 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More / Read Less button */}
            {para2 && (
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="flex items-center lg:gap-2 text-[16px] lg:text-[20px] uppercase bw-m cursor-pointer"
              >
                {showMore ? "Read Less" : "Read More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDSec2;

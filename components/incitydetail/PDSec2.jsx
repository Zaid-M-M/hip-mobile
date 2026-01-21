// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const PDSec2 = ({ para1, para2, hdPara, incity_info_list_box }) => {
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

//         <div className="flex flex-col gap-12">
//           <div className="flex flex-col justify-between md:gap-10 gap-[15px] lg:flex-row">
//             {/* Left section */}
//             <div className="flex justify-between flex-col max-w-[600px] md:max-w-[100%] lg:max-w-[45%] pt-12 xl:pt-24">
//               <div className="flex gap-[10px] md:gap-[17px]">
//                 <h1 className="text-[35px] tracking-tight leading-[45px] md:text-[45px] md:leading-[45px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] flex flex-col max-h-fit justify-start bw-m capitalize">
//                   Overview
//                 </h1>
//                 <img src="/abstract_pattern.svg" className="abstract_svg" />
//               </div>
//               <img
//                 src="/parkdetail/ovarr.svg"
//                 alt="Arrow filler"
//                 className="w-full 1440:flex hidden mt-auto"
//               />
//               <img
//                 src="/parkdetail/ovarr3.svg"
//                 alt="Arrow filler"
//                 className="w-full 1440:hidden lg:flex hidden mt-10"
//               />
//             </div>

//             {/* Right section */}
//             <div className="1280:max-w-[550px] flex flex-col gap-[15px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] pt-0 pb-12 lg:py-12 xl:py-24">
//               {hdPara && (
//                 <p
//                   className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//                   dangerouslySetInnerHTML={{ __html: hdPara }}
//                 />
//               )}
//               {para1 && (
//                 <p
//                   className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//                   dangerouslySetInnerHTML={{ __html: para1 }}
//                 />
//               )}

//               {/* ✅ Animated expandable section */}
//               <AnimatePresence initial={false}>
//                 {showMore && para2 && (
//                   <motion.div
//                     key="para2"
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                     className="overflow-hidden"
//                   >
//                     <p
//                       className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//                       dangerouslySetInnerHTML={{ __html: para2 }}
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Read More / Read Less button */}
//               {para2 && (
//                 <button
//                   onClick={() => setShowMore((prev) => !prev)}
//                   className="flex items-center lg:gap-2 text-[16px] lg:text-[20px] uppercase bw-m cursor-pointer"
//                 >
//                   {showMore ? "Read Less" : "Read More"}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className={`transition-transform ${
//                       showMore ? "rotate-180" : ""
//                     }`}
//                   >
//                     <path d="m6 9 6 6 6-6" />
//                   </svg>
//                 </button>
//               )}
//             </div>
//             {/* icon box will appear here */}
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

const PDSec2 = ({
  para1,
  para2,
  hdPara,
  incity_info_list_box = [],
  hdTitle,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="overflow-hidden bg-[#F5F5F5]">
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

        <div className="flex flex-col">
          <div className="flex flex-col justify-between md:gap-10 gap-[15px] lg:flex-row">
            {/* Left section */}
            <div className="flex justify-start flex-col xl:gap-6 max-w-[600px] md:max-w-full lg:max-w-[45%] pt-12 xl:pt-24">
              <div className="flex gap-[10px] md:gap-[17px]">
                <h2 className="text-[35px] tracking-tight leading-[34px] md:text-[45px] md:leading-[45px] xl:text-[64px] xl:leading-[55px] xl:tracking-[-2.56px] flex flex-col max-h-fit justify-start bw-m capitalize">
                  Overview
                </h2>
                <img src="/abstract_pattern.svg" className="abstract_svg" />
              </div>
              <div className="flex flex-col mt-4 xl:gap-4 gap-2">
                {hdTitle && (
                  <h3
                    className="bw-r text-[24px] bw-m lg:text-[28px] 1280:text-[32px] lg:leading-[36px] leading-[30px] xl:leading-[42px]"
                    dangerouslySetInnerHTML={{ __html: hdTitle }}
                  />
                )}
                {hdPara && (
                  <p
                    className="bw-r text-[20px] leading-[28px] lg:text-[24px] lg:leading-[30px] 1280:text-[28px] xl:leading-[36px]"
                    dangerouslySetInnerHTML={{ __html: hdPara }}
                  />
                )}
              </div>
              <img
                src="/parkdetail/ovarr.svg"
                alt="Arrow filler"
                className="w-full 1440:flex hidden mt-auto h-[200px] object-cover object-top"
              />
              {/* <img
                src="/parkdetail/ovarr.svg"
                alt="Arrow filler"
                className="w-full 1440:hidden lg:flex hidden mt-10"
              /> */}
            </div>

            {/* Right section */}
            <div className="1280:max-w-[550px] flex flex-col gap-[15px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] pt-0 pb-6 lg:py-12 xl:py-24">
              {para1 && (
                <p
                  className="bw-r md:text-[17px] flex flex-col gap-5 lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
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

          {/* ✅ Icon boxes section (using same Dcard design) */}
          {incity_info_list_box?.length > 0 && (
            // <div className="xl:pb-24 pb-12 lg:-mt-12 xl:-mt-48">
            <div className="xl:pb-24 pb-12 lg:-mt-12">
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-3.5 w-full justify-center bg-transparent">
                  {incity_info_list_box.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center bg-white border border-[#CDCDCD] 1440:p-4 p-2 lg:h-[180px] xl:h-[210px] xl:w-[calc(16.6666%-14px)] w-[calc(50%-7px)] lg:w-[calc(25%-14px)]"
                    >
                      {/* Icon */}
                      <div className="flex justify-center mb-2">
                        <img
                          src={item.incity_info_list_icon}
                          alt={item.title}
                          className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] xl:w-[90px] xl:h-[90px] object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-[14px] md:text-[16px] bw-m"
                        dangerouslySetInnerHTML={{
                          __html: item.incity_info_list_title,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDSec2;

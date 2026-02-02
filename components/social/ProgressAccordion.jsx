// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusIcon, Minus } from "lucide-react";
// import { socialTabsData } from "./data/socialTabsData";
// import Btn from "@/components/global/Btn";

// const VideoSkeleton = () => {
//   return (
//     <div className="relative w-full aspect-video bg-gray-200 animate-pulse">
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
//     </div>
//   );
// };

// // const ProgressAccordionItem = ({
// //   index,
// //   isOpen,
// //   title,
// //   content,
// //   video,
// //   btnLabel,
// //   btnLink,
// //   onToggle,
// // }) => {
// //   const [videoLoaded, setVideoLoaded] = useState(false);

// //   return (
// //     <div className="border-b border-gray-200">
// //       <button
// //         className="flex items-center text-[20px] py-[12px] md:py-[15px] 2xl:py-[20px] justify-between w-full text-left bg-[#ffffff]"
// //         onClick={() => onToggle(index)}
// //       >
// //         <h3 className="md:text-[25px] md:leading-[35px] xl:text-[26px] xl:leading-[36px] cursor-pointer">
// //           {typeof title === "string" ? title : title}
// //         </h3>
// //         <span className="ml-2 text-[18px] sm:text-xl cursor-pointer">
// //           {isOpen ? (
// //             <Minus className="w-5 h-5 sm:w-7 sm:h-7" />
// //           ) : (
// //             <PlusIcon className="w-5 h-5 sm:w-7 sm:h-7" />
// //           )}
// //         </span>
// //       </button>

// //       <AnimatePresence initial={false}>
// //         {isOpen && (
// //           <motion.div
// //             key="content"
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
// //             className="overflow-hidden"
// //           >
// //             <div className="flex flex-col bg-[#ffffff] pb-[20px]">
// //               {/* Video Content */}
// //               <div className="mb-4">
// //                 <div className="relative w-full aspect-video">
// //                   {!videoLoaded && <VideoSkeleton />}
// //                   <iframe
// //                     src={`${video}?autoplay=0&title=0&byline=0&portrait=0`}
// //                     frameBorder="0"
// //                     allow="autoplay"
// //                     allowFullScreen
// //                     className={`w-full h-full ${videoLoaded ? "opacity-100" : "opacity-0"}`}
// //                     onLoad={() => setVideoLoaded(true)}
// //                   ></iframe>
// //                 </div>
// //               </div>

// //               {/* Description */}
// //               <p className="text-[16px] sm:text-[16px] bw-r leading-[23px] sm:leading-[26px] text-[#000]">
// //                 {content}
// //               </p>

// //               {/* Button */}
// //               {btnLabel && btnLink && (
// //                 <div className="mt-5">
// //                   <Btn text={btnLabel} href={btnLink} />
// //                 </div>
// //               )}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// const ProgressAccordionItem = ({
//   index,
//   isOpen,
//   title,
//   content,
//   video,
//   btnLabel,
//   btnLink,
//   onToggle,
// }) => {
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   return (
//     <div className="border-b border-gray-200">
//       <button
//         className="flex items-center text-[20px] py-[12px] md:py-[15px] 2xl:py-[20px] justify-between w-full text-left bg-white"
//         onClick={() => onToggle(index)}
//       >
//         <h3 className="md:text-[25px] md:leading-[35px] xl:text-[26px] xl:leading-[36px]">
//           {title}
//         </h3>
//         {isOpen ? (
//           <Minus className="w-5 h-5 sm:w-7 sm:h-7" />
//         ) : (
//           <PlusIcon className="w-5 h-5 sm:w-7 sm:h-7" />
//         )}
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="overflow-hidden"
//           >
//             <div className="flex flex-col bg-white pb-[20px] gap-4">
//               {/* FIXED HEIGHT VIDEO SLOT */}
//               <div className="relative w-full aspect-video overflow-hidden">
//                 {!videoLoaded && <VideoSkeleton />}
//                 <iframe
//                   src={`${video}?autoplay=0&title=0&byline=0&portrait=0`}
//                   frameBorder="0"
//                   allow="autoplay"
//                   allowFullScreen
//                   className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
//                     videoLoaded ? "opacity-100" : "opacity-0"
//                   }`}
//                   onLoad={() => setVideoLoaded(true)}
//                 />
//               </div>

//               <p className="text-[16px] bw-r leading-[23px] text-black">
//                 {content}
//               </p>

//               {btnLabel && btnLink && (
//                 <div className="mt-2">
//                   <Btn text={btnLabel} href={btnLink} />
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const ProgressAccordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [isClosable, setIsClosable] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsClosable(window.innerWidth <= 1950);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleToggle = (index) => {
//     if (openIndex === index) {
//       if (isClosable) {
//         setOpenIndex(null);
//       }
//       return;
//     }
//     setOpenIndex(index);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.1 }}
//       transition={{
//         delay: 0.3,
//         duration: 1.2,
//         ease: [0.7, 0, 0.4, 1],
//       }}
//       className="divide-y pt-[20px] lg:pt-[25px] 2xl:pt-[50px] 3xl:pt-[80px] min-w-[100%] sm:min-w-auto pb-3 lg:max-w-[400px] divide-gray-200 xl:h-full xl:pb-[60px] 2xl:h-[auto]"
//     >
//       {socialTabsData.map((item, index) => (
//         <ProgressAccordionItem
//           key={index}
//           index={index}
//           isOpen={openIndex === index}
//           title={item.label}
//           content={item.description}
//           video={item.video}
//           btnLabel={item.btnLabel}
//           btnLink={item.btnLink}
//           onToggle={handleToggle}
//         />
//       ))}
//     </motion.div>
//   );
// };

// export default ProgressAccordion;
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
//
//
//
//
//
// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusIcon, Minus } from "lucide-react";
// import { socialTabsData } from "./data/socialTabsData";
// import Btn from "@/components/global/Btn";

// const VideoSkeleton = () => {
//   return (
//     <div className="relative w-full aspect-video bg-gray-200 animate-pulse">
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
//     </div>
//   );
// };

// const ProgressAccordionItem = ({
//   index,
//   isOpen,
//   title,
//   content,
//   video,
//   btnLabel,
//   btnLink,
//   onToggle,
// }) => {
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   return (
//     <div className="border-b last:border-b-0 border-gray-200">
//       <button
//         className="flex items-center text-[20px] py-[12px] md:py-[15px] 2xl:py-[20px] justify-between w-full text-left bg-white outline-none group"
//         onClick={() => onToggle(index)}
//       >
//         <h3 className="md:text-[25px] md:leading-[35px] xl:text-[26px] xl:leading-[36px] font-medium">
//           {title}
//         </h3>
//         <span className="ml-2">
//           {isOpen ? (
//             <Minus className="w-5 h-5 sm:w-7 sm:h-7" />
//           ) : (
//             <PlusIcon className="w-5 h-5 sm:w-7 sm:h-7" />
//           )}
//         </span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{
//               height: "auto",
//               opacity: 1,
//             }}
//             exit={{
//               height: 0,
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.4,
//               ease: [0.4, 0, 0.2, 1], // Smoother standard easing to prevent "jumping"
//             }}
//             className="overflow-hidden"
//           >
//             <div className="flex flex-col bg-white pb-[30px] min-h-[435px] gap-5">
//               {/* Video Container - Border Radius Removed */}
//               <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
//                 {!videoLoaded && <VideoSkeleton />}
//                 <iframe
//                   src={`${video}?autoplay=0&title=0&byline=0&portrait=0`}
//                   frameBorder="0"
//                   allow="autoplay"
//                   allowFullScreen
//                   className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
//                     videoLoaded ? "opacity-100" : "opacity-0"
//                   }`}
//                   onLoad={() => setVideoLoaded(true)}
//                 />
//               </div>

//               <p className="text-[16px] leading-[24px] sm:text-[17px] sm:leading-[26px] text-gray-800">
//                 {content}
//               </p>

//               {btnLabel && btnLink && (
//                 <div className="mt-2">
//                   <Btn text={btnLabel} href={btnLink} />
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const ProgressAccordion = () => {
//   // 1. Keep first one open by default (Index 0)
//   const [openIndex, setOpenIndex] = useState(0);

//   const handleToggle = (index) => {
//     // 2. No closing allowed: only change if clicking a different item
//     if (openIndex !== index) {
//       setOpenIndex(index);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.1 }}
//       transition={{
//         duration: 0.8,
//         ease: [0.7, 0, 0.4, 1],
//       }}
//       // Added h-auto and transition-all to the container to help stabilize movement
//       className="w-full lg:max-w-[500px] xl:max-w-[600px] mx-auto divide-y mt-5 divide-gray-200 transition-all duration-500"
//     >
//       {socialTabsData.map((item, index) => (
//         <ProgressAccordionItem
//           key={index}
//           index={index}
//           isOpen={openIndex === index}
//           title={item.label}
//           content={item.description}
//           video={item.video}
//           btnLabel={item.btnLabel}
//           btnLink={item.btnLink}
//           onToggle={handleToggle}
//         />
//       ))}
//     </motion.div>
//   );
// };

// export default ProgressAccordion;
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, Minus } from "lucide-react";
import { socialTabsData } from "./data/socialTabsData";
import Btn from "@/components/global/Btn";

const ProgressAccordionItem = ({
  index,
  isOpen,
  title,
  content,
  video,
  btnLabel,
  btnLink,
  onToggle,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="border-b last:border-b-0 border-gray-200">
      <button
        className="flex items-center text-[20px] py-[12px] md:py-[15px] 2xl:py-[20px] justify-between w-full text-left bg-white outline-none group"
        onClick={() => onToggle(index)}
      >
        <h3 className="md:text-[25px] md:leading-[35px] xl:text-[26px] xl:leading-[36px] font-medium">
          {title}
        </h3>
        <span className="ml-2">
          {isOpen ? (
            <Minus className="w-5 h-5 sm:w-7 sm:h-7" />
          ) : (
            <PlusIcon className="w-5 h-5 sm:w-7 sm:h-7" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pt-3 bg-white pb-[20px] min-h-[435px] gap-3">
              {/* Video Container - No Radius, No Skeleton */}
              <div className="relative w-full aspect-video overflow-hidden">
                <iframe
                  src={`${video}?autoplay=0&title=0&byline=0&portrait=0`}
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className={`absolute inset-0 w-full h-full`}
                  onLoad={() => setVideoLoaded(true)}
                />
              </div>

              <p className="text-[16px] leading-[24px] sm:text-[17px] sm:leading-[26px] text-gray-800">
                {content}
              </p>

              {btnLabel && btnLink && (
                <div className="">
                  <Btn text={btnLabel} href={btnLink} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProgressAccordion = () => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    // Only toggle if the user clicks a DIFFERENT item (prevents closing the active one)
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: [0.7, 0, 0.4, 1],
      }}
      className="w-full lg:max-w-[500px] xl:max-w-[600px] mx-auto divide-y mt-5 divide-gray-200 transition-all duration-500"
    >
      {socialTabsData.map((item, index) => (
        <ProgressAccordionItem
          key={index}
          index={index}
          isOpen={openIndex === index}
          title={item.label}
          content={item.description}
          video={item.video}
          btnLabel={item.btnLabel}
          btnLink={item.btnLink}
          onToggle={handleToggle}
        />
      ))}
    </motion.div>
  );
};

export default ProgressAccordion;

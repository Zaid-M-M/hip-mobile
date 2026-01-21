// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import clsx from "clsx";

// const Fulfillment_sec5 = () => {
//   const [open, setOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);
//   const [loading, setLoading] = useState(false); // NEW: loading state

//   const tabs = [
//     {
//       title: "Wide Roads and Superior Access",
//       image: "/fulfillment_center/fullfill_sec5.jpg",
//       content:
//         "Horizon’s strategically located parks feature wide, well-paved internal roads designed to minimize congestion and enhancing safety.",
//     },
//     {
//       title: "Ample Parking",
//       image: "/fulfillment_center/Ample Parking  1 (1).jpg",
//       content:
//         "Spacious parking lots for employees’ vehicles and trucks, ensuring ease of access at all times.",
//     },
//     {
//       title: "Electric Vehicle Charging",
//       image: "/fulfillment_center/EV Station (1).jpg",
//       content:
//         "Provision for EV charging stations to support sustainable transport options.",
//     },
//     {
//       title: "Reliable Power Supply and Backup Systems",
//       image: "/fulfillment_center/Back up System (1).jpg",
//       content:
//         "Our facilities are connected to high-capacity power grids, and solar panels are installed on warehouse roofs to generate renewable energy.",
//     },
//     {
//       title: "Water Supply and Waste Management Solutions",
//       image: "/fulfillment_center/Water Supply and Waste Management (1).jpg",
//       content:
//         "Our comprehensive water and waste infrastructure to support sustainable and hygienic operations. Well maintained drainage systems prevent flooding and waterlogging, protecting infrastructure and surrounding environments. Our facilities are also equipped with rainwater harvesting systems, efficient sewage systems and treatment plants compliant with local environmental standards.",
//     },
//   ];

//   // Trigger skeleton loading for smooth transitions
//   const handleTabChange = (index) => {
//     if (index === activeTab) return;
//     setLoading(true);
//     setTimeout(() => {
//       setActiveTab(index);
//       setLoading(false);
//     }, 500); // skeleton visible for 0.5s
//   };

//   return (
//     <div className="bg-white relative">
//       <div>
//         {/* Header Section */}
//         <div className="fix flex flex-col justify-between gap-[15px] lg:gap-[25px] xl:gap-[0px] mb-[0px] pt-[45px] lg:pt-[90px]">
//           <div className="flex flex-col relative">
//             <h1 className="text-[30px] leading-[38px] sm:text-[36px] sm:leading-[46px] md:text-[50px] md:leading-[60px] lg:text-[58px] lg:leading-[68px] xl:text-[64px] xl:leading-[74px] font-medium bw-m text-black capitalize tracking-[-1.2px] sm:tracking-[-1.5px] md:tracking-[-1.9px] lg:tracking-[-2.3px] xl:tracking-[-2.56px] whitespace-nowrap">
//               Comprehensive Utilities
//             </h1>

//             <div className="flex gap-[10px] items-center">
//               <h1 className="text-[30px] leading-[38px] sm:text-[36px] sm:leading-[46px] md:text-[50px] md:leading-[60px] lg:text-[58px] lg:leading-[68px] xl:text-[64px] xl:leading-[74px] bw-r text-black capitalize tracking-[-1.2px] sm:tracking-[-1.5px] md:tracking-[-1.9px] lg:tracking-[-2.3px] xl:tracking-[-2.56px] whitespace-nowrap">
//                 and Services
//               </h1>
//               <img
//                 src="/abstract_pattern.svg"
//                 alt="Accent Decoration"
//                 className="abstract_svg "
//               />
//             </div>
//           </div>

//           <p className="text-black bw-r text-[15px] lg:text-[20px] pt-[6px] lg:pt-[32px]">
//             Our customers also benefit from the extensive infrastructure and
//             utilities at our parks for a seamless operational experience.
//           </p>
//         </div>

//         {/* Desktop Image Section */}
//         <div className="relative fix w-full lg:pt-[30px] lg:pb-[50px] pt-[20px] pb-[20px] hidden lg:block">
//           <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden object-cover">
//             <AnimatePresence mode="wait">
//               {loading ? (
//                 <motion.div
//                   key="skeleton-img"
//                   className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                 />
//               ) : (
//                 <motion.img
//                   key={tabs[activeTab].index}
//                   src={tabs[activeTab].image}
//                   alt={tabs[activeTab].title}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   initial={{ opacity: 0, scale: 1.03 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 1.03 }}
//                   transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//                 />
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Tabs - Desktop */}
//         <div className="fix max-w-[1250px] mx-auto hidden lg:block">
//           <div className="bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-[#CDCDCD] rounded-2xl overflow-hidden">
//             {tabs.map((tab, i) => {
//               const active = i === activeTab;
//               return (
//                 <motion.button
//                   key={i}
//                   onClick={() => handleTabChange(i)}
//                   initial={false}
//                   animate={{
//                     backgroundImage: active
//                       ? "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)"
//                       : "linear-gradient(to right, #FFFFFF, #FFFFFF)",
//                   }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className={clsx(
//                     "relative flex items-center justify-between px-[16px] py-[10px] border-r border-[#CDCDCD] last:border-r-0 cursor-pointer focus:outline-none"
//                   )}
//                 >
//                   <motion.h2
//                     animate={{ color: active ? "#fff" : "#000" }}
//                     className="bw-r text-left text-[14px] md:text-[16px] xl:text-[20px] bw-l leading-[26px] w-[190px]"
//                   >
//                     {tab.title}
//                   </motion.h2>

//                   <AnimatePresence mode="wait" initial={false}>
//                     {active && !loading && (
//                       <motion.img
//                         key={`arrow-${i}`}
//                         initial={{ y: "0%", x: "-100%", opacity: 0 }}
//                         animate={{ y: 0, x: 0, opacity: 1 }}
//                         exit={{ y: "0%", x: "-100%", opacity: 0 }}
//                         transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//                         src="/fulfillment_center/fulfillment_icon_sec5.svg"
//                         alt="Arrow"
//                         className="w-[20%] md:w-[18%] xl:w-[16%]"
//                       />
//                     )}
//                   </AnimatePresence>
//                 </motion.button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Desktop Content */}
//         <div className="fix w-full lg:pb-[80px] lg:pt-[50px] pb-[40px] pt-[10px] px-4 md:px-0 hidden lg:block">
//           <AnimatePresence mode="wait">
//             {loading ? (
//               <motion.div
//                 key="skeleton-desktop"
//                 className="flex flex-col gap-3 animate-pulse"
//               >
//                 <div className="w-[40%] h-[24px] bg-gray-200 rounded"></div>
//                 <div className="w-[100%] h-[18px] bg-gray-200 rounded"></div>
//                 <div className="w-[95%] h-[18px] bg-gray-200 rounded"></div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -15 }}
//                 transition={{ duration: 0.4, ease: [0.6, 0, 0.4, 1] }}
//                 className="flex flex-col"
//               >
//                 <h3 className="text-[18px] lg:text-[24px] md:text-2xl bw-m text-gray-900 lg:mb-3 mb-1">
//                   {tabs[activeTab].title}
//                 </h3>
//                 <p className="text-gray-600 text-[14px] leading-[24px] lg:text-[20px] lg:leading-[30px]">
//                   {tabs[activeTab].content}
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* MOBILE + TABLET */}

//         {/* MOBILE + TABLET (Collapsible Style with AccMob Animation) */}
//         <div className="block lg:hidden w-full">
//           <div className="w-[90%] mx-auto py-[10px] flex flex-col gap-3">
//             {tabs.map((tab, i) => {
//               const isActive = activeTab === i;

//               return (
//                 <div
//                   key={i}
//                   className="border-b border-b-gray-300 overflow-hidden bg-white"
//                 >
//                   {/* Header Button */}
//                   <button
//                     onClick={() => setActiveTab(isActive ? null : i)}
//                     className="w-full flex items-center gap-3 text-left focus:outline-none py-2 cursor-pointer"
//                   >
//                     <motion.div
//                       initial={false}
//                       animate={{ rotate: isActive ? 180 : 0 }}
//                       transition={{ duration: 0.25, ease: "easeInOut" }}
//                       className="w-[20px] h-[20px]"
//                     >
//                       {isActive ? (
//                         <svg
//                           width="20"
//                           height="20"
//                           viewBox="0 0 12 12"
//                           fill="none"
//                         >
//                           <defs>
//                             <linearGradient
//                               id="gradMinus"
//                               x1="0"
//                               y1="0"
//                               x2="12"
//                               y2="0"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop offset="0%" stopColor="#AC38D9" />
//                               <stop offset="100%" stopColor="#F47922" />
//                             </linearGradient>
//                           </defs>
//                           <rect
//                             x="1.2"
//                             y="5.28"
//                             width="9.6"
//                             height="1.44"
//                             fill="url(#gradMinus)"
//                           />
//                         </svg>
//                       ) : (
//                         <svg
//                           width="20"
//                           height="20"
//                           viewBox="0 0 12 12"
//                           fill="none"
//                         >
//                           <defs>
//                             <linearGradient
//                               id="gradPlus"
//                               x1="0"
//                               y1="0"
//                               x2="12"
//                               y2="0"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop offset="0%" stopColor="#AC38D9" />
//                               <stop offset="100%" stopColor="#F47922" />
//                             </linearGradient>
//                           </defs>
//                           <rect
//                             x="5.28"
//                             y="1.2"
//                             width="1.44"
//                             height="9.6"
//                             fill="url(#gradPlus)"
//                           />
//                           <rect
//                             x="1.2"
//                             y="5.28"
//                             width="9.6"
//                             height="1.44"
//                             fill="url(#gradPlus)"
//                           />
//                         </svg>
//                       )}
//                     </motion.div>

//                     <h3 className="text-[14px] md:text-[16px] font-medium text-black">
//                       {tab.title}
//                     </h3>
//                   </button>

//                   {/* Smooth Open Animation (no close animation flash) */}
//                   <AnimatePresence initial={false}>
//                     {isActive && (
//                       <motion.div
//                         key={`content-mobile-${i}`}
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.25, ease: "easeInOut" }}
//                         className="overflow-hidden mt-3 px-1 pb-3"
//                       >
//                         {tab.image && (
//                           <motion.img
//                             src={tab.image}
//                             alt={tab.title}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.4 }}
//                             className="w-full h-[130px] sm:h-[240px] md:h-[300px] object-cover mb-3"
//                           />
//                         )}
//                         <p className="text-gray-700 text-[14px] md:text-[15px] leading-[24px]">
//                           {tab.content}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fulfillment_sec5;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Fulfillment_sec5 = () => {
  // ✅ Default active desktop tab (first tab open)
  const [activeTab, setActiveTab] = useState(0);

  // ✅ Default mobile accordion open (first one open by default)
  const [mobileActiveTab, setMobileActiveTab] = useState(0);

  // ✅ Skeleton loading for smooth desktop transitions
  const [loading, setLoading] = useState(false);

  const tabs = [
    {
      title: "Wide Roads and Superior Access",
      image: "/fulfillment_center/fullfill_sec5.jpg",
      content:
        "Horizon’s strategically located parks feature wide, well-paved internal roads designed to minimize congestion and enhancing safety.",
    },
    {
      title: "Ample Parking",
      image: "/fulfillment_center/Ample Parking  1 (1).jpg",
      content:
        "Spacious parking lots for employees’ vehicles and trucks, ensuring ease of access at all times.",
    },
    {
      title: "Electric Vehicle Charging",
      image: "/fulfillment_center/EV Station (1).jpg",
      content:
        "Provision for EV charging stations to support sustainable transport options.",
    },
    {
      title: "Reliable Power Supply and Backup Systems",
      image: "/fulfillment_center/Back up System (1).jpg",
      content:
        "Our facilities are connected to high-capacity power grids, and solar panels are installed on warehouse roofs to generate renewable energy.",
    },
    {
      title: "Water Supply and Waste Management Solutions",
      image: "/fulfillment_center/Water Supply and Waste Management (1).jpg",
      content:
        "Our comprehensive water and waste infrastructure to support sustainable and hygienic operations. Well maintained drainage systems prevent flooding and waterlogging, protecting infrastructure and surrounding environments. Our facilities are also equipped with rainwater harvesting systems, efficient sewage systems and treatment plants compliant with local environmental standards.",
    },
  ];

  // ✅ Desktop tab change handler with skeleton loader
  const handleTabChange = (index) => {
    if (index === activeTab) return;
    setLoading(true);
    setTimeout(() => {
      setActiveTab(index);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-white relative">
      <div>
        {/* ---------- HEADER ---------- */}
        <div className="fix flex flex-col justify-between gap-[15px] lg:gap-[25px] xl:gap-[0px] mb-[0px] pt-[45px] lg:pt-[60px]">
          <div className="flex flex-col relative">
            <h2 className="text-[30px] leading-[38px] sm:text-[36px] sm:leading-[46px] md:text-[50px] md:leading-[60px] lg:text-[58px] lg:leading-[68px] xl:text-[64px] xl:leading-[74px] font-medium bw-m text-black capitalize tracking-[-1.2px] sm:tracking-[-1.5px] md:tracking-[-1.9px] lg:tracking-[-2.3px] xl:tracking-[-2.56px] whitespace-nowrap">
              Comprehensive Utilities
            </h2>

            <div className="flex gap-[10px] items-center">
              <h2 className="text-[30px] leading-[38px] sm:text-[36px] sm:leading-[46px] md:text-[50px] md:leading-[60px] lg:text-[58px] lg:leading-[68px] xl:text-[64px] xl:leading-[74px] bw-r text-black capitalize tracking-[-1.2px] sm:tracking-[-1.5px] md:tracking-[-1.9px] lg:tracking-[-2.3px] xl:tracking-[-2.56px] whitespace-nowrap">
                and Services
              </h2>
              <img
                src="/abstract_pattern.svg"
                alt="Accent Decoration"
                className="abstract_svg "
              />
            </div>
          </div>

          <p className="text-black bw-r text-[15px] lg:text-[20px] pt-[6px] lg:pt-[17px]">
            Our customers also benefit from the extensive infrastructure and
            utilities at our parks for a seamless operational experience.
          </p>
        </div>

        {/* ---------- DESKTOP IMAGE SECTION ---------- */}
        <div className="relative fix w-full lg:pt-[25px] lg:pb-[25px] pt-[20px] pb-[20px] hidden lg:block">
          <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden object-cover">
            <AnimatePresence mode="wait">
              {loading ? (
                // Skeleton Loader (Gray placeholder while switching)
                <motion.div
                  key="skeleton-img"
                  className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ) : (
                // ✅ Safe check to avoid undefined image crash
                tabs[activeTab] && (
                  <motion.img
                    key={tabs[activeTab].title}
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                  />
                )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ---------- DESKTOP TABS ---------- */}
        <div className="fix max-w-[1250px] mx-auto hidden lg:block">
          <div className="bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-[#CDCDCD] rounded-2xl overflow-hidden">
            {tabs.map((tab, i) => {
              const active = i === activeTab;
              return (
                <motion.button
                  key={i}
                  onClick={() => handleTabChange(i)}
                  initial={false}
                  animate={{
                    backgroundImage: active
                      ? "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)"
                      : "linear-gradient(to right, #FFFFFF, #FFFFFF)",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={clsx(
                    "relative flex items-center justify-between px-[16px] py-[10px] border-r border-[#CDCDCD] last:border-r-0 cursor-pointer focus:outline-none"
                  )}
                >
                  <motion.h2
                    animate={{ color: active ? "#fff" : "#000" }}
                    className="bw-r text-left text-[14px] md:text-[16px] xl:text-[20px] bw-l leading-[26px] w-[190px]"
                  >
                    {tab.title}
                  </motion.h2>

                  <AnimatePresence mode="wait" initial={false}>
                    {active && !loading && (
                      <motion.img
                        key={`arrow-${i}`}
                        initial={{ y: "0%", x: "-100%", opacity: 0 }}
                        animate={{ y: 0, x: 0, opacity: 1 }}
                        exit={{ y: "0%", x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                        src="/fulfillment_center/fulfillment_icon_sec5.svg"
                        alt="Arrow"
                        className="w-[20%] md:w-[18%] xl:w-[16%]"
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ---------- DESKTOP CONTENT ---------- */}
        <div className="fix w-full lg:pb-[80px] lg:pt-[20px] pb-[40px] pt-[10px] px-4 md:px-0 hidden lg:block">
          <AnimatePresence mode="wait">
            {loading ? (
              // Skeleton Loader for Desktop Text
              <motion.div
                key="skeleton-desktop"
                className="flex flex-col gap-3 animate-pulse"
              >
                <div className="w-[40%] h-[24px] bg-gray-200 rounded"></div>
                <div className="w-[100%] h-[18px] bg-gray-200 rounded"></div>
                <div className="w-[95%] h-[18px] bg-gray-200 rounded"></div>
              </motion.div>
            ) : (
              // ✅ Safe render only if activeTab exists
              tabs[activeTab] && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.6, 0, 0.4, 1] }}
                  className="flex flex-col"
                >
                  <h3 className="text-[18px] lg:text-[24px] md:text-2xl bw-m text-gray-900 lg:mb-3 mb-1">
                    {tabs[activeTab].title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-[24px] lg:text-[20px] lg:leading-[30px]">
                    {tabs[activeTab].content}
                  </p>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* ---------- MOBILE + TABLET SECTION ---------- */}
        <div className="block lg:hidden w-full pb-[45px]">
          <div className="w-[90%] mx-auto py-[10px] flex flex-col gap-0">
            {tabs.map((tab, i) => {
              const isActive = mobileActiveTab === i;

              return (
                <div
                  key={i}
                  className="border-b border-b-gray-300 overflow-hidden bg-white py-[5px]"
                >
                  {/* Header Button */}
                  <button
                    onClick={() => setMobileActiveTab(isActive ? null : i)} // toggle accordion
                    className="w-full flex items-center gap-3 text-left focus:outline-none py-2 cursor-pointer"
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: 0 }} // keep rotation static
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="w-[20px] h-[20px]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id={`grad-${i}`}
                            x1="0"
                            y1="0"
                            x2="12"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0%" stopColor="#AC38D9" />
                            <stop offset="100%" stopColor="#F47922" />
                          </linearGradient>
                        </defs>

                        {/* Always render horizontal line */}
                        <motion.rect
                          x="1.2"
                          y="5.28"
                          width="9.6"
                          height="1.44"
                          fill={`url(#grad-${i})`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Render vertical line only if accordion is closed (for +) */}
                        {!isActive && (
                          <motion.rect
                            x="5.28"
                            y="1.2"
                            width="1.44"
                            height="9.6"
                            fill={`url(#grad-${i})`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </svg>
                    </motion.div>

                    <h3 className="text-[16px] md:text-[16px] font-medium text-black">
                      {tab.title}
                    </h3>
                  </button>

                  {/* Smooth Open / Close Animation */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`content-mobile-${i}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden mt-3 px-1 pb-3"
                      >
                        {tab.image && (
                          <motion.img
                            src={tab.image}
                            alt={tab.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-[130px] sm:h-[240px] md:h-[300px] object-cover mb-3"
                          />
                        )}
                        <p className="text-gray-700 text-[14px] md:text-[15px] leading-[24px]">
                          {tab.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fulfillment_sec5;

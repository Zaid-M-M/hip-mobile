// "use client";
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import clsx from "clsx";

// const SocialTabs = ({ tabs, activeTab, setActiveTab }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
//       viewport={{ once: true, amount: 0.2 }}
//       className="w-full bg-white flex md:rounded-2xl  lg:rounded-[28px] overflow-hidden"
//     >
//       {tabs.map((tab, i) => {
//         const isActive = tab.title === activeTab;
//         return (
//           <motion.button
//             key={tab.title + i}
//             onClick={() => setActiveTab(tab.title)}
//             className={clsx(
//               "relative flex items-center justify-between border border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none w-auto h-[100px] px-[20px]",
//               isActive ? "text-white" : "text-black"
//             )}
//           >
//             {/* Gradient overlay */}
//             {/* <motion.div
//               initial={false}
//               animate={{ opacity: isActive ? 1 : 0 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="absolute inset-0"
//               style={{
//                 background:
//                   "linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)",
//               }}
//             /> */}
//             <motion.div
//               initial={false}
//               animate={{ opacity: isActive ? 1 : 0 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="absolute inset-0 pointer-events-none"
//               style={{
//                 background:
//                   "linear-gradient(111deg, #0db14b 6.59%, #772BF2 113.67%), linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)",
//                 borderRadius: "20px 0 0 20px",
//                 zIndex: 1,
//               }}
//             />

//             {/* Content */}
//             <div className="relative z-10 flex items-center  justify-between w-full gap-2">
//               <h2 className="whitespace-nowrap md:text-[16px] lg:text-[20px] xl:text-[23px]">
//                 {tab.title}
//               </h2>
//               <span className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] relative overflow-hidden block">
//                 <AnimatePresence mode="wait" initial={false}>
//                   {isActive && (
//                     <motion.img
//                       key="active-icon"
//                       initial={{ y: "100%", x: "-100%", opacity: 0 }}
//                       animate={{ y: 0, x: 0, opacity: 1 }}
//                       exit={{ y: "100%", x: "-100%", opacity: 0 }}
//                       transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//                       src="/whiteexternal.svg"
//                       alt="Active"
//                       className="w-full h-full"
//                     />
//                   )}
//                 </AnimatePresence>
//               </span>
//             </div>
//           </motion.button>
//         );
//       })}
//     </motion.div>
//   );
// };

// export default SocialTabs;

"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const SocialTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex overflow-hidden bg-white md:rounded-2xl lg:rounded-[28px]"
    >
      {tabs.map((tab, i) => {
        const isActive = tab.title === activeTab;
        const isFirst = i === 0;
        const isLast = i === tabs.length - 1;

        return (
          <motion.button
            key={tab.title + i}
            onClick={() => setActiveTab(tab.title)}
            className={clsx(
              "relative flex items-center justify-between border border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none flex-1 1366:w-auto h-[100px] px-[12px] 1280:px-[20px]",
              isActive ? "text-white" : "text-black",
              isFirst && "!rounded-l-[28px] border-l",
              isLast && "!rounded-r-[28px] border-r",
              "first:border-l last:border-r" // Ensure borders are present
            )}
          >
            {/* Gradient overlay */}
            {/* <motion.div
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(111deg, #0db14b 6.59%, #772BF2 113.67%), linear-gradient(131deg, #AC38D9 24.37%, #F47922 80.46%)",

                zIndex: 0,
              }}
            /> */}

            <motion.div
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #2BB04C 30%, #8F53A1 78%)",
                zIndex: 0,
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center  justify-between w-full gap-2">
              <h2 className="whitespace-nowrap text-left md:text-[16px] lg:text-[18px] 1366:text-[18px] 1600:text-[20px] 1920:text-[20px]">
                {tab.title}
              </h2>
              <span className=" hidden 1280:flex items-center justify-center md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] 1366:w-[40px] 1366:h-[40px] relative overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  {isActive && (
                    <motion.img
                      key="active-icon"
                      initial={{ y: "100%", x: "-100%", opacity: 0 }}
                      animate={{ y: 0, x: 0, opacity: 1 }}
                      exit={{ y: "100%", x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                      src="/whiteexternal.svg"
                      alt="Active"
                      className="w-full h-full"
                    />
                  )}
                </AnimatePresence>
              </span>
            </div>
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default SocialTabs;

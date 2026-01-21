// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import TransitionLink from "@/src/app/TransitionLink";
// import Industrial from "./Industrial";
// import Incity from "./Incity";
// import State from "./State";

// const OverView = ({ setIsNavOpen, isNavOpen }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="flex w-full h-[460px] overflow-hidden pt-5 1440:w-[1340px] 1440:mx-auto 1440:pr-0 pr-[max(5%,calc((100vw-1340px)/2))]">
//       {/* Left gradient + image */}
//       <div
//         className="w-[30%] flex flex-col gap-[29px] p-10 min-h-screen"
//         style={{
//           background:
//             "linear-gradient(-245deg, #8F53A1 19.06%, #F47922 105.78%)",
//         }}
//       >
//         <img
//           src="/network_overview_menu.webp"
//           alt="Park Overview"
//           className="w-[325px] h-[200px] object-cover"
//         />
//         <div className="relative z-10 flex items-center w-full justify-between cursor-pointer">
//           <TransitionLink
//             href="/network-overview"
//             isNavOpen={isNavOpen}
//             setIsNavOpen={setIsNavOpen}
//             className="text-white text-[28px] font-medium underline"
//           >
//             Network Overview
//           </TransitionLink>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="50"
//             height="50"
//             viewBox="0 0 50 50"
//             fill="none"
//           >
//             <path
//               d="M13.3281 36.666L36.6615 13.3326"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M13.3281 13.3326H36.6615V36.666"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Right tabs section */}
//       <div className="flex-1 bg-white pl-6 2xl:pl-12 pb-12 flex flex-col">
//         {/* Tabs header */}
//         <div className="flex w-full mb-4 gap-[30px]">
//           <button
//             onClick={() => setActiveTab(0)}
//             className={`px-4 py-2 flex-1 border-b cursor-pointer text-left transition-all duration-500 border-gray-300 font-medium text-[16px] ${
//               activeTab === 0
//                 ? "border-orange-500 bg-[rgba(0,0,0,0.02)] text-black"
//                 : "text-gray-500"
//             }`}
//           >
//             Industrial & Logistics Parks
//           </button>
//           <button
//             onClick={() => setActiveTab(1)}
//             className={`px-4 py-2 flex-1 border-b cursor-pointer text-left transition-all duration-500 border-gray-300 font-medium text-[16px] ${
//               activeTab === 1
//                 ? "border-orange-500 bg-[rgba(0,0,0,0.02)] text-black"
//                 : "text-gray-500"
//             }`}
//           >
//             InCity Centers
//           </button>
//           <button
//             onClick={() => setActiveTab(2)}
//             className={`px-4 py-2 flex-1 border-b cursor-pointer text-left transition-all duration-500 border-gray-300 font-medium text-[16px] ${
//               activeTab === 2
//                 ? "border-orange-500 bg-[rgba(0,0,0,0.02)] text-black"
//                 : "text-gray-500"
//             }`}
//           >
//             View by States
//           </button>
//         </div>

//         {/* Tab content */}
//         <div className="flex gap-6 relative flex-1">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="w-full"
//             >
//               {/* ──────────────────────── TAB 0 ──────────────────────── */}
//               {activeTab === 0 && (
//                 <Industrial isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
//               )}

//               {/* ──────────────────────── TAB 1 ──────────────────────── */}
//               {activeTab === 1 && (
//                 <Incity isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
//               )}

//               {/* ──────────────────────── TAB 2 ──────────────────────── */}
//               {activeTab === 2 && (
//                 <State isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverView;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransitionLink from "@/src/app/TransitionLink";
import Industrial from "./Industrial";
import Incity from "./Incity";
import State from "./State";
const OverView = ({ setIsNavOpen, isNavOpen }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex w-full h-[460px] overflow-hidden pt-5 justify-between">
      {/* Left gradient + image */}
      <div
        className="w-[25%] flex flex-col gap-[29px] p-7 1440:p-10 min-h-screen"
        style={{
          background:
            "linear-gradient(-245deg, #8F53A1 19.06%, #F47922 105.78%)",
        }}
      >
        <img
          src="/network_overview_menu.webp"
          alt="Park Overview"
          className="1440:w-[325px] w-full aspect-[3.25/2] object-cover"
        />
        <div className="relative w-full z-10 flex items-center justify-between cursor-pointer">
          <TransitionLink
            href="/network-overview/"
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            className="text-white text-[24px] 1440:text-[22px] font-medium underline"
          >
            Network Overview
          </TransitionLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M13.3281 36.666L36.6615 13.3326"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3281 13.3326H36.6615V36.666"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* Middle tabs section */}
      <div className="w-[48%] bg-white 1440:pl-0 pb-12 1440:pr-0 flex flex-col">
        {/* Tabs header */}
        <div className="flex w-full mb-4 gap-[30px]">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-6 py-4 flex-1 border-b cursor-pointer text-left transition-all duration-500 border-gray-300 font-medium text-[20px] ${
              activeTab === 0
                ? "border-orange-500  text-black"
                : "text-gray-500"
            }`}
          >
            Industrial & Logistics Parks
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-6 py-4 flex-1 border-b cursor-pointer text-left transition-all duration-500 border-gray-300 font-medium text-[20px] ${
              activeTab === 1
                ? "border-orange-500  text-black"
                : "text-gray-500"
            }`}
          >
            InCity Centers
          </button>
        </div>
        {/* Tab content */}
        <div className="flex gap-6 relative flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {activeTab === 0 && (
                <Industrial isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
              )}
              {activeTab === 1 && (
                <Incity isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Right static View by States section */}
      <div className="w-[22%] bg-[#F3F3F3]  pb-9 flex flex-col border-l border-gray-200">
        <div className="px-6 py-4 border-b border-gray-300 ">
          <h3 className="font-medium text-[20px] text-black">View by States</h3>
        </div>
        <div className="flex-1 overflow-y-auto pl-5 pt-[11px]">
          <State isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      </div>
    </div>
  );
};
export default OverView;

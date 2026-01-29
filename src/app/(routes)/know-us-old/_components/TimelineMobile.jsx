// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function TimelineMobile({ years, data }) {
//   const [activeYear, setActiveYear] = useState(years[0]);

//   return (
//     <div className="relative text-white">
//       {/* CONTENT */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeYear}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.35 }}
//           className="lg:space-y-6 space-y-[10px]"
//         >
//           {data[activeYear].map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center gap-0 last:!border-0 border-b border-[#2E2E2E] pb-[10px] lg:pb-6 px-[15px]"
//             >
//               {/* ICON / IMAGE */}
//               {/* <div className="lg:w-auto w-fit flex justify-center flex-shrink-0"> */}
//               <div className="lg:w-[110px] w-[95px] flex justify-center flex-shrink-0">
//                 {item.icon && (
//                   // <img src={item.icon} alt="" className="w-[110px] h-[64px]" />
//                   <img
//                     src={item.icon}
//                     alt=""
//                     className="w-full h-[64px] object-cover"
//                     style={{ objectPosition: "left center" }}
//                   />
//                 )}

//                 {item.image && (
//                   <img
//                     src={item.image}
//                     alt=""
//                     className="w-[110px] h-[64px] object-cover rounded"
//                   />
//                 )}
//               </div>

//               {/* TEXT */}
//               <p className="bw-r text-[14px] leading-[22px] text-[#E0E0E0]">
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </AnimatePresence>

//       {/* YEAR SLIDER */}
//       <div className="mt-8">
//         <div className="relative flex justify-between items-center px-[0px]">
//           {years.map((year) => {
//             const isActive = year === activeYear;
//             return (
//               // <button
//               //   key={year}
//               //   onClick={() => setActiveYear(year)}
//               //   className={`bw-m w-full text-[18px] transition-all ${
//               //     isActive ? "text-transparent bg-clip-text" : "text-[#fff]"
//               //   }`}
//               //   style={
//               //     isActive
//               //       ? {
//               //           backgroundImage:
//               //             "linear-gradient(92deg,#8F53A1 37%,#F47922 98%)",
//               //         }
//               //       : {}
//               //   }
//               // >
//               //   {year}
//               // </button>
//               <button
//                 key={year}
//                 onClick={() => setActiveYear(year)}
//                 className={`w-full flex justify-center items-center`}
//               >
//                 <span
//                   className={`bw-m w-fit text-[18px] transition-all duration-1000 ${
//                     // isActive ? "text-transparent bg-clip-text" : "text-[#fff]"
//                     isActive
//                       ? "text-transparent bg-clip-text"
//                       : "text-transparent bg-clip-text"
//                   }`}
//                   style={{
//                     backgroundImage: isActive
//                       ? "linear-gradient(92deg,#8F53A1 37%,#F47922 98%)"
//                       : "linear-gradient(0deg, #ffffff, #ffffff)",
//                   }}
//                 >
//                   {year}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* ACTIVE BAR */}
//         <div className="relative mt-3 h-[3px] bg-[#2E2E2E]">
//           <motion.div
//             layout
//             className="absolute -top-[4px] left-0 h-[10px]"
//             style={{
//               width: `${100 / years.length}%`,
//               background: "linear-gradient(92deg,#8F53A1 37%,#F47922 98%)",
//             }}
//             animate={{
//               x: `${years.indexOf(activeYear) * 100}%`,
//             }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TimelineMobile({ years, data }) {
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <div className="relative text-white">
      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="space-y-[10px]"
        >
          {data[activeYear].map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b border-[#2E2E2E] pb-[10px] px-[15px] last:border-0"
            >
              <div className="w-[75px] flex justify-center flex-shrink-0">
                {(item.icon || item.image) && (
                  <img
                    src={item.icon || item.image}
                    alt=""
                    className="w-full h-[64px] object-cover object-left rounded"
                  />
                )}
              </div>
              <p className="bw-r text-[14px] leading-[22px] text-[#E0E0E0]">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* YEAR SLIDER */}
      <div className="mt-8 px-[0px]">
        <div className="relative flex w-full">
          {years.map((year) => {
            const isActive = year === activeYear;
            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className="relative flex-1 py-2 flex flex-col items-center justify-center outline-none"
              >
                <span
                  className={`bw-m text-[18px] transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#7a7a7a]"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundImage:
                            "linear-gradient(92deg,#8F53A1 37%,#F47922 98%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : {}
                  }
                >
                  {year}
                </span>

                {/* THE INDICATOR BAR */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2E2E2E]" />

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-0.5 h-[7px] z-10"
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(92deg,#8F53A1 37%,#F47922 98%)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { motion } from "framer-motion";

// export default function TimelineTabsMobile({
//   years,
//   activeYear,
//   setActiveYear,
// }) {
//   const patchHeight = 40; // highlight height

//   return (
//     <div className="relative w-full overflow-x-auto no-scrollbar mt-6">
//       <div className="flex gap-6 px-2 relative">
//         {years.map((year) => {
//           const isActive = activeYear === year;

//           return (
//             <div key={year} className="relative flex items-center">
//               {isActive && (
//                 <motion.div
//                   layoutId="activeHighlightMobile"
//                   className="absolute -top-1 left-0 right-0 rounded-md"
//                   style={{
//                     height: `${patchHeight}px`,
//                     background:
//                       "linear-gradient(90deg, rgb(139,92,246), rgb(255,112,67))",
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                 />
//               )}

//               <button
//                 onClick={() => setActiveYear(year)}
//                 className={`relative px-4 py-2 font-semibold  text-base sm:text-lg transition-colors duration-300`}
//                 style={
//                   isActive
//                     ? {
//                         backgroundImage:
//                           "linear-gradient(90deg, rgba(139,92,246,1), rgba(255,112,67,1))",
//                         WebkitBackgroundClip: "text",
//                         backgroundClip: "text",
//                         color: "transparent",
//                       }
//                     : { color: "#E0E0E0" }
//                 }
//               >
//                 {year}
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function TimelineTabsMobile({
  years,
  activeYear,
  setActiveYear,
}) {
  const patchHeight = 4; // thinner bar below the year

  return (
    <div className="relative w-full overflow-x-auto no-scrollbar mt-6">
      <div className="flex gap-6 justify-between px-4 relative">
        {years.map((year) => {
          const isActive = activeYear === year;

          return (
            <div key={year} className="relative flex flex-col  items-center">
              {/* Year button */}
              <button
                onClick={() => setActiveYear(year)}
                className={`relative px-2 py-1 font-semibold text-base bm-w sm:text-lg transition-colors duration-300 z-10`}
                style={
                  isActive
                    ? {
                      backgroundImage:
                        "linear-gradient(90deg, rgba(139,92,246,1), rgba(255,112,67,1))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      fontFamily: 'Barlow'
                    }
                    : { color: "#E0E0E0", fontFamily: 'Barlow' }
                }
              >
                {year}
              </button>

              {/* Gradient underline highlight */}
              {isActive && (
                <motion.div
                  layoutId="activeHighlightMobile"
                  className="absolute bottom-0 left-0 right-0 mx-auto rounded-full"
                  style={{
                    height: `${patchHeight}px`,
                    width: "100%",
                    background:
                      "linear-gradient(90deg, rgb(139,92,246), rgb(255,112,67))",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

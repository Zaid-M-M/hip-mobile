"use client";
import { motion } from "framer-motion";
import { Pointer } from "lucide-react";
import { useRef, useEffect } from "react";

export default function TimelineTabs({ years, activeYear, setActiveYear }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(".active-row");
    // if (activeEl)
    //   activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeYear]);

  const patchWidth = 15;

  return (
    <div className="relative flex flex-col items-start pr-3 min-h-full no-scrollbar">
      {/* Scroll container with a ::before vertical line */}
      <div
        ref={containerRef}
        className="relative flex flex-col  justify-between min-h-full no-scrollbar"
      >
        {/* ::before vertical line */}
        {/* <div className="absolute left-6 1366:left-[21px] top-[24px] h-[calc(100%-48px)] w-[3px] bg-[#323232]" /> */}
        <div
          className="absolute left-6 1366:left-[21px] w-[3px] bg-[#323232]"
          style={{ top: "0px", height: "calc(100% - 0px)" }}
        />
        {/* <div className="absolute left-6 1366:left-[21px] top-[24px] bottom-[24px]  w-[3px] bg-[#323232]" /> */}

        {years.map((year, index) => {
          const isActive = activeYear === year;
          const isFirst = index === 0;
          const isLast = index === years.length - 1;

          const baseClasses =
            "active-row ml-12 text-lg bw-m font-semibold bw-m text-base sm:text-[24px] transition-all duration-300 focus:outline-none";
          const stateClasses = isActive
            ? "text-transparent bg-clip-text"
            : "text-white";
          const positionClasses = `${isFirst ? "pt-[12px]" : "pt-[8px]"} ${isLast ? "pb-[12px]" : " pb-[8px]"
            }`;

          return (
            <div
              key={year}
              className="relative flex items-center mb-[130px] last:mb-0"
            >
              {isActive && (
                <motion.div
                  layoutId="activeHighlight"
                  className="absolute"
                  style={{
                    left: `calc(24px - ${patchWidth / 2}px)`,
                    width: `${patchWidth}px`,
                    height: "80px",
                    background:
                      "linear-gradient(to bottom, rgb(139,92,246), rgb(255,112,67))",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              <button
                onClick={() => setActiveYear(year)}
                className={`${baseClasses} ${stateClasses} ${positionClasses}`}
                style={
                  isActive
                    ? {
                      backgroundImage:
                        "linear-gradient(92deg, #8F53A1 37.32%, #F47922 98.38%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      cursor: 'Pointer'
                    }
                    : { cursor: 'Pointer' }
                }
              >
                {year}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

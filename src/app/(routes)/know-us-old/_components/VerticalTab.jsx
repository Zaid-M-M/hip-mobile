"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function VerticalTabs({ years, activeYear, setActiveYear }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(".active-tab");
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeYear]);

  return (
    <div className="relative flex flex-col items-start pr-6">
      {/* Gradient line */}
      <div className="absolute left-2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 via-pink-500 to-orange-400 rounded-full" />

      {/* Year Tabs */}
      <div
        ref={containerRef}
        className="flex flex-col space-y-8 overflow-y-auto max-h-[80vh] pl-6 scrollbar-hide"
      >
        {years.map((year) => (
          <motion.button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`relative text-lg font-semibold transition-all duration-300 ${
              activeYear === year
                ? "text-white active-tab"
                : "text-gray-400 hover:text-white"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {/* Year text */}
            {year}

            {/* Active Dot */}
            <span
              className={`absolute -left-[30px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 ${
                activeYear === year
                  ? "bg-orange-400 border-orange-400"
                  : "bg-black border-gray-600"
              }`}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

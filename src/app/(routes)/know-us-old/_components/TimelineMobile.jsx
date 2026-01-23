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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-6"
        >
          {data[activeYear].map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b border-[#2E2E2E] pb-6"
            >
              {/* ICON / IMAGE */}
              <div className="flex-shrink-0">
                {item.icon && (
                  <img src={item.icon} alt="" className="w-[42px] h-[42px]" />
                )}

                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="w-[52px] h-[52px] object-cover rounded"
                  />
                )}
              </div>

              {/* TEXT */}
              <p className="bw-r text-[14px] leading-[22px] text-[#E0E0E0]">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* YEAR SLIDER */}
      <div className="mt-8">
        <div className="relative flex justify-between items-center">
          {years.map((year) => {
            const isActive = year === activeYear;
            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`bw-m text-[14px] transition-all ${
                  isActive ? "text-transparent bg-clip-text" : "text-[#8A8A8A]"
                }`}
                style={
                  isActive
                    ? {
                        backgroundImage:
                          "linear-gradient(92deg,#8F53A1 37%,#F47922 98%)",
                      }
                    : {}
                }
              >
                {year}
              </button>
            );
          })}
        </div>

        {/* ACTIVE BAR */}
        <div className="relative mt-3 h-[3px] bg-[#2E2E2E]">
          <motion.div
            layout
            className="absolute top-0 left-0 h-full"
            style={{
              width: `${100 / years.length}%`,
              background: "linear-gradient(92deg,#8F53A1 37%,#F47922 98%)",
            }}
            animate={{
              x: `${years.indexOf(activeYear) * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </div>
  );
}

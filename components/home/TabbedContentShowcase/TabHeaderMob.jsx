"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const tabs = [
  { name: "Case Studies" },
  { name: "Blog" },
  { name: "News" },
  { name: "Events" },
  { name: "Press Release" },
];

export default function TabHeaderMob({ activeTab, setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white grid grid-cols-5 border border-[#CDCDCD] rounded-2xl overflow-hidden mt-4"
    >
      {tabs.map((tab, i) => {
        const isActive = i === activeTab;

        return (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={clsx(
              "relative flex items-center justify-center px-3 py-4 border-r border-[#CDCDCD] transition-all duration-500 overflow-hidden cursor-pointer focus:outline-none",
              isActive && "bggrad",
              i === tabs.length - 1 && "border-r-0",
            )}
          >
            <h2
              className={clsx(
                "text-[12px] bw-r text-left leading-tight",
                isActive ? "text-white" : "text-black",
              )}
            >
              {tab.name}
            </h2>
          </button>
        );
      })}
    </motion.div>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon1 } from "./svgs/SVGIconsFF"; // Adjust the import path as needed

// Accordion Component
function Accordion({ id, title, content, activeId, setActiveId, Icon }) {
  const open = activeId === id;

  return (
    <div
      className="mb-4 rounded-lg "
      onClick={() => setActiveId(open ? null : id)}
    >
      <div className="bg-[url(/solutions/accbg.jpg)] bg-cover bg-no-repeat text-black overflow-hidden">
        <button className="w-full overflow-hidden flex items-center gap-3 py-4 px-4 text-left">
          <span className="font-medium overflow-hidden">{title}</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className=""
            >
              <div className="pb-4 px-4 text-gray-700">{content}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Diamond Component
function GradientDiamond({ activeId }) {
  const secondDiamondSize = 756;
  const smallestDiamondSize = 247;

  const DiamondLayer = ({ size, opacity }) => (
    <div
      className="absolute rotate-45 z-1"
      style={{
        width: size,
        height: size,
        borderWidth: "2px",
        borderStyle: "solid",
        borderImage: "linear-gradient(45deg, #a855f7, #fb923c) 1",
        borderImageSlice: 1,
        opacity: opacity,
      }}
    />
  );

  return (
    <div className="relative flex justify-center items-center h-[400px] w-full">
      {/* Diamond layers */}
      <DiamondLayer size="1469px" opacity={0.2} />
      <DiamondLayer size="1141px" opacity={0.4} />
      <DiamondLayer size={`${secondDiamondSize}px`} opacity={0.4} />
      <DiamondLayer size="488px" opacity={0.9} />
      <DiamondLayer size={`${smallestDiamondSize}px`} opacity={1} />

      {/* Center diamond */}
      <div className="relative flex justify-center items-center">
        <div className="w-16 h-16 rotate-45 bg-gradient-to-r from-orange-400 to-purple-600" />
      </div>

      {/* 2 icons on Y-axis of second smallest diamond */}
      <div
        className="absolute z-[100]"
        style={{
          top: `calc(50% - ${secondDiamondSize / 2}px)`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Icon1 active={activeId === 1} />
      </div>
      <div
        className="absolute z-[100]"
        style={{
          bottom: `calc(50% - ${secondDiamondSize / 2}px)`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Icon1 active={activeId === 2} />
      </div>

      {/* 2 icons on X-axis of smallest diamond */}
      <div
        className="absolute z-[100]"
        style={{
          left: `calc(50% - 220px)`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Icon1 active={activeId === 3} />
      </div>
      <div
        className="absolute z-[100]"
        style={{
          right: `calc(50% - 220px)`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Icon1 active={activeId === 4} />
      </div>
    </div>
  );
}

// Main Section
export default function MainSection() {
  const [activeId, setActiveId] = useState(null);

  const accordionItems = [
    {
      id: 1,
      title: "Accordion Item 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae.",
    },
    {
      id: 2,
      title: "Accordion Item 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae.",
    },
    {
      id: 3,
      title: "Accordion Item 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae.",
    },
    {
      id: 4,
      title: "Accordion Item 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae.",
    },
  ];

  return (
    <section className="bg-black min-h-[200vh] pr-20 flex items-end py-24 overflow-hidden">
      <div className="w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Accordions */}
        <div className="relative z-20 w-[70%] min-h-[360px] ml-[max(5%,calc((100vw-1340px)/2))]">
          {accordionItems.map((item) => (
            <Accordion
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              Icon={item.icon}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
        {/* Right side - Diamond */}
        <div className="pb-20 scale-75">
          <GradientDiamond activeId={activeId} />
        </div>
      </div>
    </section>
  );
}

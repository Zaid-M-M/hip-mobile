"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SusCard = ({
  title1,
  v1,
  u1,
  title2,
  v2,
  u2,
  title3,
  v3,
  u3,
  sub1,
  sub2,
  sub3,
  imgsrc,
  imgOp,
  textY,
  textOp,
}) => (
  <motion.div className="lg:!flex !hidden lg:flex-row flex-col lg:justify-between lg:items-center w-full gap-10 min-h-full">
    {/* Image */}
    <div className="2xl:w-1/2 xl:w-[44%] overflow-hidden">
      <motion.img
        src={imgsrc}
        alt="Sustainability"
        className="w-full object-cover"
        style={{ opacity: imgOp }}
      />
    </div>

    {/* Text */}
    <motion.div
      className="2xl:w-1/2 xl:w-[58%] grid grid-cols-2 gap-y-12 gap-x-12 bg-white"
      style={{ y: textY, opacity: textOp }}
    >
      {[
        { title: title1, v: v1, u: u1, sub: sub1 },
        { title: title2, v: v2, u: u2, sub: sub2 },
        { title: title3, v: v3, u: u3, sub: sub3 },
      ].map((item, i) => (
        <div key={i} className="flex flex-col gap-2">
          {item.title && (
            <p className="text-[20px] pb-3 leading-[25px] border-b border-[#D0D0D0]">
              {item.title}
            </p>
          )}
          <span className="flex gap-3 items-baseline">
            {item.v && (
              <span className="bw-sb text-[48px] leading-[48px] md:text-[76px] md:leading-[69px] txt_gradient_sustain">
                {item.v}
              </span>
            )}
            {item.u && (
              <span className="md:text-[56px] text-[24px] leading-[34px] md:leading-[66px]">
                {item.u}
              </span>
            )}
          </span>
          {item.sub && (
            <span className="text-[14px] xl:-mt-12 text-black bw-r leading-[20px]">
              {item.sub}
            </span>
          )}
        </div>
      ))}
    </motion.div>
  </motion.div>
);

export default function IMPScrollF() {
  const susArray = [
    {
      id: 1,
      title1: "Total Solar Installed",
      v1: "20",
      u1: "MWp",
      title2: "LED Implementation",
      v2: "100",
      u2: "%",
      title3: "Emissions Reduced",
      v3: "20,470",
      u3: "tCO₂e",
      imgsrc: "/sustainability/scroll/ite1.jpg",
    },
    {
      id: 2,
      title1: "Water Recycled",
      v1: "100",
      u1: "%",
      title2: "Parks with RWH systems",
      v2: "100",
      u2: "%",
      imgsrc: "/sustainability/scroll/ite4.jpg",
    },
    {
      id: 3,
      title1: "Employees trained and sensitised on conduct and ethics",
      v1: "100",
      u1: "%",
      sub3: "(Ethical Business Practices, Code of Conduct, and Cyber Security/POSH)",
      title2: "People impacted through CSR programmes",
      v2: "3000",
      u2: "+",
      imgsrc: "/sustainability/scroll/ite3.jpg",
    },
    {
      id: 4,
      title1: "Developments Built to IGBC/LEED Standards",
      v1: "100",
      u1: "%",
      title2: "Major non-compliance incidents in EHS",
      v2: "0",
      title3: "ESG policy adoption",
      v3: "100",
      u3: "%",
      imgsrc: "/sustainability/scroll/ite2.jpg",
    },
  ];

  const containerRef = useRef(null);

  // Start scroll progress when container top hits viewport top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="xl:!flex !hidden flex-col gap-0 relative">
      {/* Header */}
      <div className="flex w-full h-full">
        <h3 className="flex flex-col">
          <span className="md64m">Impact</span>
          <span className="md64r flex gap-[10px] xl:gap-[17px] items-end">
            <span>So Far</span>
            <img
              className="abstract_sustian_svg xl:mb-[5px]"
              src="/abstract_pattern_sustain.png"
              alt="Abstract Gradient"
            />
          </span>
        </h3>
      </div>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="relative bg-white"
        style={{ height: `${(susArray.length - 1) * 150}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center gap-10 lg:gap-20 justify-center overflow-hidden">
          {susArray.map((item, i) => {
            const total = susArray.length;
            const isFirst = i === 0;
            const isLast = i === total - 1;

            // Define scroll segments
            const start = isFirst ? 0 : i / total;
            const mid = (i + 0.5) / total;
            const end = (i + 1) / total;

            // Image Opacity
            const imgOp = useTransform(
              scrollYProgress,
              isFirst ? [0, start, mid, end] : [start, mid, end],
              isFirst
                ? [0, 1, 1, isLast ? 1 : 0] // First: fade in instantly, stay, then fade out only at end
                : isLast
                ? [0, 1, 1]
                : [0, 1, 0]
            );

            // Text Y (slide up/down)
            const textY = useTransform(
              scrollYProgress,
              isFirst ? [0, start, mid, end] : [start, mid, end],
              isFirst
                ? ["0%", "0%", "0%", isLast ? "0%" : "-50%"] // First: already in place
                : isLast
                ? ["50%", "0%", "0%"]
                : ["50%", "0%", "-50%"]
            );

            // Text Opacity
            const textOp = useTransform(
              scrollYProgress,
              isFirst ? [0, start, mid, end] : [start, mid, end],
              isFirst
                ? [1, 1, 1, isLast ? 1 : 0] // First: fully visible from start
                : isLast
                ? [0, 1, 1]
                : [0, 1, 0]
            );

            return (
              <motion.div
                key={item.id}
                className="absolute inset-0 flex items-center justify-center"
              >
                <SusCard
                  {...item}
                  imgOp={imgOp}
                  textY={textY}
                  textOp={textOp}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

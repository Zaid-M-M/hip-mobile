"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// ----- Card ----- //
const SusCardMobile = ({
  title1,
  v1,
  u1,
  title2,
  v2,
  u2,
  title3,
  v3,
  u3,
  imgsrc,
  sub1,
  sub2,
  sub3,
}) => (
  <div className="flex flex-col justify-center w-full gap-12 min-h-full">
    {/* Image */}
    <div className="w-full overflow-hidden">
      <img src={imgsrc} alt="Solar Panels" className="w-full object-cover" />
    </div>

    {/* Text */}
    <div className="grid grid-cols-1 gap-y-8 bg-white">
      {[
        { title: title1, v: v1, u: u1, sub: sub1 },
        { title: title2, v: v2, u: u2, sub: sub2 },
        { title: title3, v: v3, u: u3, sub: sub3 },
      ].map((item, i) => (
        <div key={i} className="flex flex-col gap-3">
          {item.title && (
            <p className="text-[20px] pb-3 leading-[25px] border-b border-[#D0D0D0]">
              {item.title}
            </p>
          )}
          <span className="flex gap-0 items-center">
            {item.v && (
              <span className="bw-sb text-[48px] leading-[40px] md:text-[76px] md:leading-[69px] txt_gradient_sustain">
                {item.v}
              </span>
            )}
            {item.u && (
              <span className="md:text-[56px] text-[32px] leading-[32px] md:leading-[66px]">
                {item.u}
              </span>
            )}
          </span>
          {item.sub && (
            <span className="text-[14px] -mt-7 text-black bw-r leading-[20px]">
              {item.sub}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default function IMPScrollFM() {
  const susArray = [
    {
      id: 1,
      title1: "Total Solar Installed",
      v1: "18",
      u1: "MWp",
      title2: "LED Implementation",
      v2: "100",
      u2: "%",
      title3: "Emissions Reduced",
      v3: "20,476.80",
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
      imgsrc: "/sustainability/scroll/ite2.jpg",
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
      // u2: "",
      title3: "ESG policy adoption",
      v3: "100",
      u3: "%",
      imgsrc: "/sustainability/scroll/ite4.jpg",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end end"],
  });

  return (
    // <ReactLenis root>
    <div className="flex flex-col gap-0 relative lg:!hidden">
      <div className="flex w-full h-full">
        <h3 className="flex flex-col">
          <span className="md64m">Impact</span>
          <span className="md64r flex  gap-[10px] xl:gap-[17px] items-end">
            <span>So Far</span>
            <img
              src="/abstract_pattern_sustain.png"
              className="abstract_sustian_svg"
              alt="Abstract Gradient"
            />
          </span>
        </h3>
      </div>

      <div
        ref={containerRef}
        className="relative bg-white"
        style={{ height: `${(susArray.length - 1) * 150}vh` }}
      >
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          {susArray.map((item, i) => {
            const total = susArray.length;
            const start = i / total;
            const mid = (i + 0.5) / total;
            const end = (i + 1) / total;
            const isLast = i === total - 1;

            // Parent card fade in/out + slide Y
            const cardY = useTransform(
              scrollYProgress,
              [start, mid, end],
              isLast ? ["10%", "0%", "0%"] : ["10%", "0%", "-10%"]
            );
            const cardOp = useTransform(
              scrollYProgress,
              [start, mid, end],
              isLast ? [0, 1, 1] : [0, 1, 0]
            );

            return (
              <motion.div
                key={item.id}
                className="absolute inset-0 flex flex-col items-center justify-center w-full"
                style={{ y: cardY, opacity: cardOp }}
              >
                <SusCardMobile {...item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    // </ReactLenis>
  );
}

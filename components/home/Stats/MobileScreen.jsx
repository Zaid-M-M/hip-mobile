"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
const texts = [
  {
    heading: "2200",
    sub: "Acres",
    imgmd: "/home/mobstats/stat1.png",
    img: "/home/mobstats/stat1.png",
  },
  {
    heading: "58 Million",
    sub: "Sq ft",
    imgmd: "/home/mobstats/stat2.png",
    img: "/home/mobstats/stat2.png",
  },
  {
    heading: "10",
    sub: "Markets",
    imgmd: "/home/mobstats/stat3.png",
    img: "/home/mobstats/stat3.png",
  },
  {
    heading: "45",
    sub: "Parks",
    imgmd: "/home/mobstats/stat4.png",
    img: "/home/mobstats/stat4.png",
  },
];
export default function MobileScreen() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end end"], // start when 20% visible
  });
  return (
    <ReactLenis root>
      <div
        ref={containerRef}
        className="relative bg-white lg:!hidden !block"
        style={{ height: `${(texts.length - 1) * 150}vh` }} // remove top whitespace
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {texts.map((item, i) => {
            const total = texts.length;
            const start = i / total;
            const mid = (i + 0.5) / total;
            const end = (i + 1) / total;
            // Last item: no exit animation
            const isLast = i === texts.length - 1;
            const opacity = useTransform(
              scrollYProgress,
              [start, mid, end],
              isLast ? [0, 1, 1] : [0, 1, 0],
            );
            const y = useTransform(
              scrollYProgress,
              [start, mid, end],
              isLast ? ["10%", "0%", "0%"] : ["10%", "0%", "-10%"],
            );
            return (
              <motion.div
                key={i}
                style={{ opacity, y }}
                className="absolute inset-0 flex md:items-start items-center justify-center"
              >
                <div className="bg-white md:h-[60vh] h-auto w-[90%]  justify-end flex flex-col-reverse gap-3">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full md:hidden flex h-auto object-contain"
                  />
                  <img
                    src={item.imgmd}
                    alt={item.heading}
                    className="w-full md:flex hidden h-auto object-contain"
                  />
                  <div className="flex flex-col gap-3 max-w-[80%]">
                    <h2 className="text-[50px] md:text-[55px] md:leading-[55px] bw-m leading-[45px] tracking-[-0.04em]">
                      {item.heading}
                    </h2>
                    <div className="flex items-center gap-2">
                      <p className="bw-r text-[40px] md:text-[45px] md:leading-[34px] leading-[30px]">
                        {item.sub}
                      </p>
                      <img
                        src="/abstract_pattern.webp"
                        alt="Truck"
                        className="object-cover  abstract_svg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ReactLenis>
  );
}

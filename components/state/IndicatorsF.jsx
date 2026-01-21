"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReactLenis } from "lenis/react";

const IndicatorItem = ({ item, isLast }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
    once: false,
  });

  // detect mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  // Common border class
  const borderClass = isLast ? "" : "border-b";
  const pbclass = isLast ? "" : "pb-8";
  const mpbclass = isLast ? "" : "pb-2";
  // If mobile, no animation
  if (isMobile) {
    return (
      <div ref={ref} className={`${borderClass} border-gray-200 ${mpbclass}`}>
        <h2 className="text-[32px] lg:!h-[86px] indhead md:text-[48px] lg:text-[76px] lg:leading-[86px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
          <span dangerouslySetInnerHTML={{ __html: item.value }} />
        </h2>
        <p
          className="md:text-[20px] text-[16px] text-black"
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
      </div>
    );
  }

  // Desktop with animation
  return (
    <motion.div
      ref={ref}
      className={`${borderClass} border-[#ACACAC] ${pbclass} flex flex-col gap-0`}
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0.3 },
      }}
      transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
    >
      <h2 className="text-[32px] indhead md:text-[48px] lg:text-[76px] lg:leading-[86px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
        <span dangerouslySetInnerHTML={{ __html: item.value }} />
      </h2>
      <p
        className="text-[20px] text-black"
        dangerouslySetInnerHTML={{ __html: item.label }}
      />
    </motion.div>
  );
};

const IndicatorsF = ({ data }) => {
  return (
    <ReactLenis root>
      <div className=" ">
        <div className="w-full bg-white relative">
          <section className="relative h-full fix md:py-[80px] lg:py-[100px] py-[45px]">
            <div className="flex flex-col md:flex-row justify-between gap-[40px] relative">
              {/* Left column (sticky) */}
              <div className="lg:max-w-[45%] max-w-[600px] relative">
                <div className="sticky top-[100px] self-start">
                  <h2 className="md64m mb-2 lg:mb-5">
                    <span className="md64r bw-r block">Economic</span>
                    <span className="bw-m block">Indicators</span>
                  </h2>
                  <img
                    src="/abstract_pattern.svg"
                    className="abstract_svg"
                    alt="Grade A Box"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="relative lg:max-w-[55%] md:w-[55%]">
                <div className="flex flex-col gap-5 lg:gap-10 relative">
                  {data.map((item, idx) => (
                    <IndicatorItem
                      key={idx}
                      item={item}
                      isLast={idx === data.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ReactLenis>
  );
};

export default IndicatorsF;

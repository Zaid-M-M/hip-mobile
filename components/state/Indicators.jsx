"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReactLenis } from "lenis/react";
const IndicatorItem = ({ item }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
    once: false,
  });

  // detect mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  // If mobile, just return a plain div (no animation)
  if (isMobile) {
    return (
      <div ref={ref} className="border-b border-gray-200 pb-6">
        <h2 className="text-[32px] md:text-[48px] lg:text-[76px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
          <span dangerouslySetInnerHTML={{ __html: item.value }} />
        </h2>
        <p
          className="text-[16px] text-gray-600"
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
      </div>
    );
  }

  // Desktop → use animation
  return (
    <motion.div
      ref={ref}
      className="border-b border-gray-200 pb-6"
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      variants={{
        // visible: { opacity: 1, filter: "blur(0px)" },
        // hidden: { opacity: 0.4, filter: "blur(8px)" },
        visible: { opacity: 1 },
        hidden: { opacity: 0.2 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-[32px] md:text-[48px] lg:text-[76px] bw-sb flex items-baseline gap-2 leading-[1] text-[#f47920]">
        <span dangerouslySetInnerHTML={{ __html: item.value }} />
      </h2>
      <p
        className="text-[16px] text-gray-600"
        dangerouslySetInnerHTML={{ __html: item.label }}
      />
    </motion.div>
  );
};

const Indicators = ({ data }) => {
  return (
    <ReactLenis root>
      {/* Outer wrapper – no overflow-hidden here */}
      <div className="w-full bg-white relative ">
        {/* <img
          className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] 
             top-0 right-0 lg:top-[-120px] xl:top-[-150px]"
          src="/green_vector.svg"
          alt="green vector"
        />
        <img
          className="orange_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] 
             top-0 right-0 md:top-[-80px] lg:top-[-120px] xl:-right-[100px]"
          src="/orange_vector.svg"
          alt="orange vector"
        /> */}

        <section className="relative h-full fix md:py-[80px] lg:py-[100px] py-[45px]">
          {/* Put overflow-hidden here instead if you need it */}
          <div className="flex flex-col md:flex-row justify-between gap-[40px] relative">
            {/* Left column (sticky) */}
            <div className="lg:max-w-[45%] max-w-[600px] relative">
              <div className="sticky top-[100px] self-start">
                <h2 className="md64m mb-2 lg:mb-5">
                  <span className="md64r block">Economic</span>
                  <span className="bw-m block">Indicators</span>
                </h2>

                <img
                  src="/abstract_pattern.svg"
                  className="object-cover lg:h-[58px] h-[40px] lg:w-[368px] md:w-full w-auto"
                  alt="Grade A Box"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="relative max-h-[500px] overflow-hidden lg:max-w-[55%] md:w-[55%]">
              <div className="flex flex-col gap-5 lg:gap-10 relative">
                {data.map((item, idx) => (
                  <IndicatorItem key={idx} item={item} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};
export default Indicators;

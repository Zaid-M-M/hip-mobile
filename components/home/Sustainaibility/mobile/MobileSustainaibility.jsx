"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Sustainaibility from "../Sustainaibility";

const MobileSustainaibility = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [showCard, setShowCard] = useState(false);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect: card moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // video.addEventListener("timeupdate", handleTimeUpdate);
    // return () => {
    //   video.removeEventListener("timeupdate", handleTimeUpdate);
    // };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full mt-10 1024:hidden flex flex-col items-center"
    >
      <div className="flex pb-5 justify-start w-full fix">
        <div className="w-full">
          <h2 className="bw-m text-[32px] leading-[40px] 768:text-[35px] 768:leading-[42px] xl:leading-[66px] 1024:text-[45px] 1024:leading-[50px] 1280:text-[56px] tracking-[-0.04em] ">
            Progress That Doesn’t
          </h2>
          <div className="flex items-center gap-3 xl:gap-[12px] ">
            <h3 className="bw-r text-[32px] leading-[40px] 768:text-[35px] 768:leading-[42px] 1024:text-[45px] 1024:leading-[50px] xl:text-[56px] xl:leading-[66px] tracking-[-0.04em]">
              Cost the Planet{" "}
            </h3>
            <span className="lg:flex mt-[6px] md:mt-[auto] h-[auto] 768:h-[auto] 1024:h-[35px]  justify-start xl:h-[52px] xl:w-[180px] overflow-hidden">
              <img
                src="/abstract_pattern_sustain.png"
                alt="Truck"
                className="abstract_sustian_svg"
              />
            </span>
          </div>
        </div>
      </div>
      {/* Background Video */}
      <video
        ref={videoRef}
        // src="/home/sustainaibility/sustainaibility.mp4"
        src="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/sustainaibility.mp4"
        className="w-full h-[300px] md:h-[600px] object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Card with parallax */}
      <motion.div
        style={{ y, opacity }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative -mt-12 w-[90%] max-w-md pb-10"
      >
        <Sustainaibility />
      </motion.div>
    </div>
  );
};

export default MobileSustainaibility;

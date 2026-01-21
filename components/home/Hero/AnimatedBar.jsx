"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBar = () => {
  const ref = useRef(null);
  const [targetWidth, setTargetWidth] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        setTargetWidth(width);
        setShow(true);
      }
    };

    measure();

    // Optional: watch for resize
    const resizeObserver = new ResizeObserver(() => measure());
    if (ref.current) resizeObserver.observe(ref.current);

    return () => {
      if (ref.current) resizeObserver.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      {/* Hidden div for measurement */}
      <div
        ref={ref}
        className="invisible absolute sm:w-[20px] md:w-[105px] lg:w-[100px] xl:w-[220px] 2xl:w-[249px] h-[5px]"
      />
      {show && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: targetWidth }}
          transition={{
            duration: 1,
            ease: [0.7, 0, 0.4, 1],
            delay: 0.7,
          }}
          className="sm:w-[20px] md:w-[25px] lg:w-[26px] xl:w-[220px] 2xl:w-[249px] h-[5px] bg-white"
        />
      )}
    </>
  );
};

export default AnimatedBar;

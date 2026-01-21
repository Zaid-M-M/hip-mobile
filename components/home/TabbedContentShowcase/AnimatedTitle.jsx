"use client";
import { motion } from "framer-motion";

export default AnimatedTitle = ({ text }) => {
  const words = text.split(" ");

  return (
    <motion.div className="overflow-hidden flex flex-wrap text-[32px] sm:text-[38px] lg:text-[46px] xl:text-[56px] bw-m">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ width: 0 }}
          whileInView={{ width: "auto" }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.7, 0, 0.4, 1],
          }}
          className="overflow-hidden whitespace-nowrap mr-[10px] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

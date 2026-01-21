import FeatherText from "@/components/global/FeatherText";
import { motion } from "framer-motion";

export const HeaderSection = ({ title, description }) => (
  <div className="w-full ">
    <motion.h1
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ once: true, amount: 0.1 }}
      // transition={{
      //   duration: 1.4,
      //   ease: [0.7, 0, 0.4, 1],
      // }}
      className="text-[32px] max-w-[80%] bw-m leading-[120%] tracking-[-0.04em] font-bold"
    >
      <FeatherText text={title} />
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay: 0.3,
        duration: 1.2,
        ease: [0.7, 0, 0.4, 1],
      }}
      className="mt-3 inter-r max-w-[90%] text-[16px]  sm:text-[18px] leading-[20px] sm:leading-[24px] text-gray-600"
    >
      {description}
    </motion.p>
  </div>
);

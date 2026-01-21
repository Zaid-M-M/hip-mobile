// import Image from "next/image";
// import React from "react";

// const FeatureImage = () => {
//   return (
//     <div className="relative z-30 w-[908px] h-[749px]">
//       {" "}
//       {/* or set a fixed height if needed */}
//       <Image
//         src="/integrated.png"
//         alt="Integrated Solutions"
//         fill
//         className="object-contain" // cover if you want it to stretch
//         priority
//       />
//     </div>
//   );
// };

// export default FeatureImage;

// import Image from "next/image";
// import React from "react";

// const FeatureImage = () => {
//   return (
//     <div className="relative w-full h-auto  max-w-[908px]">
//       {/* // <div className="relative w-full h-full  max-w-[908px]"> */}
//       {/* <Image
//         src="/integrate.png"
//         alt="Integrated Solutions"
//         height="auto"
//         width={908}
//         className="relative object-contain" // or 'object-cover' if you want full fill
//         priority
//       /> */}
//       <img src="/integrate.png" alt="Integrated Solutions" />
//     </div>
//   );
// };

// export default FeatureImage;
// "use client";

// import { motion } from "framer-motion";

// export default function ImageSection() {
//   return (
//     <div className="relative w-full h-auto max-w-[908px]">
//       <motion.img
//         src="/integrate.png"
//         alt="Integrated Solutions"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 1.2,
//           delay: 0.8,
//           ease: [0.42, 0, 0.58, 1], // smooth easing
//         }}
//         className="w-full h-auto object-contain"
//       />
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function ImageSection() {
//   return (
//     <motion.img
//       src="/home/Integrated/arrow.png"
//       alt="Integrated Solutions"
//       initial={{ x: -100, y: 100 }} // start from bottom-left
//       whileInView={{ x: 0, y: 0 }} // move to original position
//       viewport={{ once: true }}
//       transition={{
//         duration: 1.2,
//         delay: 0.2,
//         ease: [0.42, 0, 0.58, 1], // smooth cubic-bezier
//       }}
//       className="w-full h-auto object-contain"
//     />
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function ImageSection() {
//   return (
//     <>
//       <div className="relative">
//         <div className="absolute -top-6 left-28 z-10">
//           <img src="/home/Integrated/growth.png" alt="" />
//         </div>
//         <div className="absolute -bottom-2 left-8 z-10">
//           <img src="/home/Integrated/check.png" alt="" />
//         </div>
//         <div className="absolute -bottom-2 -right-8 z-10">
//           <img src="/home/Integrated/group.png" alt="" />
//         </div>
//         <div className="absolute -bottom-2 -left-36 z-0">
//           <img src="/home/Integrated/union.png" alt="" />
//         </div>
//         <div className="absolute -top-10 right-48 z-0">
//           <img src="/home/Integrated/t1.png" alt="" />
//         </div>
//         <div className="absolute top-16 right-12 z-0">
//           <img src="/home/Integrated/t2.png" alt="" />
//         </div>
//         <motion.div
//           initial={{ clipPath: "inset(100% 100% 0% 0%)" }} // hidden from bottom-left
//           whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }} // fully revealed
//           viewport={{ once: false }}
//           transition={{
//             duration: 1.2,
//             delay: 0.2,
//             ease: [0.42, 0, 0.58, 1],
//           }}
//           className="overflow-hidden w-full h-auto"
//         >
//           <img
//             src="/home/Integrated/arrow.png"
//             alt="Integrated Solutions"
//             className="w-full h-auto object-contain"
//           />
//         </motion.div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function ImageSection() {
//   return (
//     <div className="relative">
//       {/* Growth */}
//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.6, delay: 1.2, ease: [0.42, 0, 0.58, 1] }}
//         viewport={{ once: true }}
//         className="absolute -top-6 left-28 z-10"
//       >
//         <img src="/home/Integrated/growth.png" alt="Growth" />
//       </motion.div>

//       {/* Check */}
//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.6, delay: 1.2, ease: [0.42, 0, 0.58, 1] }}
//         viewport={{ once: true }}
//         className="absolute -bottom-2 left-8 z-10"
//       >
//         <img src="/home/Integrated/check.png" alt="Check" />
//       </motion.div>

//       {/* Group */}
//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.6, delay: 1.2, ease: [0.42, 0, 0.58, 1] }}
//         viewport={{ once: true }}
//         className="absolute -bottom-2 -right-8 z-10"
//       >
//         <img src="/home/Integrated/group.png" alt="Group" />
//       </motion.div>

//       {/* Union (special: from bottom-left like arrow) */}
//       <motion.div
//         initial={{ opacity: 0, x: -100, y: 100 }}
//         whileInView={{ opacity: 1, x: 0, y: 0 }}
//         transition={{ duration: 1, delay: 1.8, ease: [0.42, 0, 0.58, 1] }}
//         viewport={{ once: true }}
//         className="absolute -bottom-2 -left-36 z-0"
//       >
//         <img src="/home/Integrated/union.png" alt="Union" />
//       </motion.div>

//       {/* T1 */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="absolute -top-10 right-48 z-0"
//       >
//         <img src="/home/Integrated/t1.png" alt="T1" />
//       </motion.div>

//       {/* T2 */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="absolute top-16 right-12 z-0"
//       >
//         <img src="/home/Integrated/t2.png" alt="T2" />
//       </motion.div>

//       {/* Arrow with mask animation */}
//       <motion.div
//         initial={{ clipPath: "inset(100% 100% 0% 0%)" }}
//         whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 1.2,
//           delay: 0.2,
//           ease: [0.42, 0, 0.58, 1],
//         }}
//         className="overflow-hidden w-full h-auto"
//       >
//         <img
//           src="/home/Integrated/arrow.png"
//           alt="Integrated Solutions"
//           className="w-full h-auto object-contain"
//         />
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// import { delay, motion } from "framer-motion";

// export default function ImageSection() {
//   // Variants for scaling icons
//   const scaleIn = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // Variants for fade-in
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 0.8, delay: 2, ease: "easeOut" },
//     },
//   };

//   // Variants for bottom-left reveal (union)
//   const bottomLeftIn = {
//     hidden: { opacity: 0, x: -80, y: 80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
//     },
//   };

//   return (
//     <div className="relative">
//       {/* Growth */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         variants={scaleIn}
//         transition={{ delay: 2 }}
//         className="absolute -top-6 left-28 z-10"
//       >
//         <img src="/home/Integrated/growth.png" alt="" />
//       </motion.div>

//       {/* Check */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         variants={scaleIn}
//         transition={{ delay: 2 }}
//         className="absolute -bottom-2 left-8 z-10"
//       >
//         <img src="/home/Integrated/check.png" alt="" />
//       </motion.div>

//       {/* Group */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         variants={scaleIn}
//         transition={{ delay: 2 }}
//         className="absolute -bottom-2 -right-8 z-10"
//       >
//         <img src="/home/Integrated/group.png" alt="" />
//       </motion.div>

//       {/* Union (comes from bottom-left) */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         variants={bottomLeftIn}
//         transition={{ delay: 2 }}
//         className="absolute -bottom-2 -left-36 z-0"
//       >
//         <img src="/home/Integrated/union.png" alt="" />
//       </motion.div>

//       {/* t1 */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         variants={fadeIn}
//         transition={{ delay: 2.2 }}
//         className="absolute -top-10 right-48 z-0"
//       >
//         <img src="/home/Integrated/t1.png" alt="" />
//       </motion.div>

//       {/* t2 */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         variants={fadeIn}
//         transition={{ delay: 2.4 }}
//         className="absolute top-16 right-12 z-0"
//       >
//         <img src="/home/Integrated/t2.png" alt="" />
//       </motion.div>

//       {/* Arrow Reveal */}
//       <motion.div
//         initial={{ clipPath: "inset(100% 100% 0% 0%)" }}
//         whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
//         viewport={{ once: false }}
//         transition={{
//           duration: 1.2,
//           // delay: 0.2,
//           ease: [0.42, 0, 0.58, 1],
//         }}
//         className="overflow-hidden w-full h-auto"
//       >
//         <img
//           src="/home/Integrated/arrow.png"
//           alt="Integrated Solutions"
//           className="w-full h-auto object-contain"
//         />
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { delay, motion } from "framer-motion";

export default function ImageSection() {
  // Scale in for icons
  const scaleIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.1, ease: [0.7, 0, 0.4, 1] },
    },
  };

  // Fade in (t1, t2)
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.8, ease: [0.7, 0, 0.4, 1] },
    },
  };

  // Union from bottom-left
  const bottomLeftIn = {
    hidden: { opacity: 0, x: -80, y: 80 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.5, delay: 1.2, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <div className="relative xl:w-[95%] 1536:w-[95%] 1920:w-[90%]">
      {/* Arrow Reveal First */}
      <motion.div
        initial={{ clipPath: "inset(100% 100% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="overflow-hidden w-full h-auto relative "
      >
        <img
          src="/home/Integrated/arr.png"
          alt="Integrated Solutions"
          className="w-full h-auto relative z-20 object-contain"
        />

        {/* <div className="absolute -bottom-32 right-0 z-10 pointer-events-none">
          <img
            className="purple_vctr w-[200px] md:w-[200px] lg:w-[300px] xl:w-[500px] mt-[-50px] xl:right-[-20px] xl:mt-[600px]"
            src="/purple_vector.svg"
            alt="Purple Vector"
          />
          <img
            className="orange_vctr w-[200px] md:w-[200px] lg:w-[300px] xl:w-[500px] mt-[-200px] 1024:mt-[-50px] xl:-right-[900px] xl:mt-[60px]"
            src="/orange_vector.svg"
            alt="Orange Vector"
          />
        </div> */}
        <div className="absolute -bottom-32 right-0 1280:-right-14 z-10 pointer-events-none">
          <img
            className="purple_vctr w-[200px] md:w-[200px] lg:w-[300px] xl:w-[300px] xl:bottom-[80px] xl:right-[200px]"
            src="/purple_vector.svg"
            alt="Purple Vector"
          />
          <img
            className="orange_vctr w-[200px] md:w-[200px] lg:w-[300px] xl:w-[100px] mt-[-200px] 1024:mt-[-50px] xl:right-[-100px] xl:top-[0px]"
            src="/orange_vector.svg"
            alt="Orange Vector"
          />
        </div>
      </motion.div>

      {/* Icons come in together */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      // variants={{}}
      >
        {/* <motion.div
          variants={scaleIn}
          // transition={{ delay: 1.2 }}
          className="absolute -top-6 left-32 1440:left-60 z-10"
        >
          <img src="/home/Integrated/growth.png" alt="Growth" />
        </motion.div> */}

        {/* <motion.div
          variants={scaleIn}
          // transition={{ delay: 1.2 }}
          className="absolute 1024:w-[40%] 1024:h-[40%] 1280:w-auto 1280:h-auto 1024:bottom-2 1280:-bottom-2 left-8 z-10"
        >
          <img src="/home/Integrated/check.png" alt="Check" />
        </motion.div> */}

        {/* <motion.div
          variants={scaleIn}
          // transition={{ delay: 1.2 }}
          className="absolute 1024:w-[30%] 1024:h-[30%] 1280:w-auto 1280:h-auto 1024:bottom-8 1280:-bottom-2 1024:-right-5 1280:-right-8 z-10"
        >
          <img src="/home/Integrated/group.png" alt="Group" />
        </motion.div> */}
      </motion.div>

      {/* t1 and t2 fade in together */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeIn}
          // transition={{ delay: 1 }}
          className="absolute -top-10 right-48 z-0"
        >
          <img src="/home/Integrated/t1.png" alt="T1" />
        </motion.div>
        <motion.div
          variants={fadeIn}
          // transition={{ delay: 1 }}
          className="absolute -top-24 right-0 z-0"
        >
          <img src="/home/Integrated/bird.svg" alt="T1" />
        </motion.div>

        <motion.div
          variants={fadeIn}
          // transition={{ delay: 1 }}
          className="absolute -top-4 1024:top-28 1280:top-40  1440:top-60 right-5 1024:right-[-32px] 1280:-right-9 z-0"
        >
          <img src="/home/Integrated/t2.png" alt="T2" />
        </motion.div>
      </motion.div>

      {/* Union comes last */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={bottomLeftIn}
        viewport={{ once: true }}
        className="absolute -bottom-2 1366:w-[80%] w-[85%] -left-24 1366:-left-12 1366:-bottom-4 1440:bottom-3 1440:-left-36 z-0"
      >
        <img src="/home/Integrated/union.png" alt="Union" />
      </motion.div>
    </div>
  );
}

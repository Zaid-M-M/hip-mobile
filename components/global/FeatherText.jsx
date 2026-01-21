// "use client";
// import { motion } from "framer-motion";
// import { featherContainer, featherItem } from "@/animations/motionVariants"; // adjust path if needed

// export default function FeatherText({ text, className = "" }) {
//   const words = text.split(" ");

//   return (
//     <motion.span
//       className={`inline-block overflow-hidden ${className}`}
//       variants={featherContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {words.map((word, index) => (
//         <motion.span
//           key={index}
//           variants={featherItem}
//           className="inline-block mr-[0.25em] whitespace-nowrap"
//         >
//           {word}
//         </motion.span>
//       ))}
//     </motion.span>
//   );
// }
// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// export default function FeatherText({ text, className = "" }) {
//   return (
//     <div className={`relative inline-block overflow-hidden ${className}`}>
//       {/* The text we want to reveal */}
//       <motion.span
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.1 }}
//         viewport={{ once: true }}
//         className="relative z-10"
//       >
//         {text}
//       </motion.span>

//       {/* Wipe overlay */}
//       <motion.span
//         initial={{ x: "0%" }}
//         whileInView={{ x: "100%" }}
//         transition={{
//           duration: 1.2,
//           ease: [0.77, 0, 0.175, 1],
//         }}
//         viewport={{ once: true }}
//         className="absolute top-0 left-0 z-20 w-full h-full bg-white"
//       />
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import React from "react";

export default function FeatherText({ text, className = "" }) {
  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      {/* Text underneath */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10"
      >
        {text}
      </motion.span>

      {/* Feather-style vertical reveal */}
      <motion.span
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        transition={{
          duration: 2.8,
          ease: [0.77, 0, 0.175, 1],
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute top-0 left-0 z-20 w-full h-full origin-top-left bg-white"
      />
    </div>
  );
}
// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// export default function FeatherText({ text, className = "" }) {
//   return (
//     <div className={`relative inline-block overflow-hidden ${className}`}>
//       {/* Text wrapper with background to fully hide text before reveal */}
//       <motion.span
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
//         viewport={{ once: true }}
//         className="relative z-10 bg-white" // <-- background to hide text before reveal
//       >
//         {text}
//       </motion.span>

//       {/* White overlay wiping across, hides text initially */}
//       <motion.span
//         initial={{ x: "0%", rotate: 0 }}
//         whileInView={{ x: "120%", rotate: 20 }}
//         transition={{
//           duration: 1.8,
//           ease: [0.77, 0, 0.175, 1],
//         }}
//         viewport={{ once: true }}
//         className="absolute top-0 left-0 z-20 w-full h-full origin-top-left bg-white"
//       />
//     </div>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// export default function FeatherText({ text, className = "" }) {
//   return (
//     <motion.span
//       initial={{ opacity: 0, x: -30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{
//         duration: 1.2,
//         ease: [0.77, 0, 0.175, 1],
//       }}
//       viewport={{ once: true, amount: 0.3 }}
//       className={`inline-block ${className}`}
//     >
//       {text}
//     </motion.span>
//   );
// }
// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// export default function FeatherText({ text, className = "" }) {
//   return (
//     <span className={`relative inline-block overflow-hidden ${className}`}>
//       <motion.span
//         initial={{ x: -30, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{
//           duration: 1.2,
//           ease: [0.77, 0, 0.175, 1],
//         }}
//         viewport={{ once: true, amount: 0.3 }}
//         className="relative z-10 inline-block"
//       >
//         {text}
//       </motion.span>

//       {/* Mask/cover element */}
//       <motion.span
//         initial={{ x: 0 }}
//         whileInView={{ x: "100%" }}
//         transition={{
//           duration: 1.2,
//           ease: [0.77, 0, 0.175, 1],
//         }}
//         viewport={{ once: true, amount: 0.3 }}
//         className="absolute inset-0 z-20 bg-white"
//       />
//     </span>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// export default function FeatherText({
//   text,
//   className = "",
//   bgColor = "white",
// }) {
//   return (
//     <span className={`relative inline-block overflow-hidden ${className}`}>
//       {/* Text itself */}
//       <motion.span
//         initial={{ x: -20, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{
//           duration: 1.2,
//           ease: [0.77, 0, 0.175, 1],
//         }}
//         viewport={{ once: true, amount: 0.3 }}
//         className="relative z-10 inline-block"
//       >
//         {text}
//       </motion.span>

//       {/* Mask — now tightly fits content and moves fully out */}
//       <motion.span
//         initial={{ x: 0 }}
//         whileInView={{ x: "101%" }}
//         transition={{
//           duration: 2.2,
//           ease: [0.77, 0, 0.175, 1],
//         }}
//         viewport={{ once: true, amount: 0.3 }}
//         className={`absolute top-0 left-0 w-full h-full z-20 bg-${bgColor}`}
//       />
//     </span>
//   );
// }

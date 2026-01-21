"use client";
import { motion } from "framer-motion";
export default function CloseMenu({ isOpen }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="w-full block"
    >
      <path d="M14 2L2 14" stroke="white" strokeLinecap="round" />
      <path d="M2 2L14 14" stroke="white" strokeLinecap="round" />
    </motion.svg>
  );
}

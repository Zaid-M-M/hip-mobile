"use client";
import { motion } from "framer-motion";
export default function MenuIcon({ isOpen }) {
  return (
    <motion.svg
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="w-full block"
    >
      <circle cx="4" cy="4.5" r="2" fill="white" />
      <circle cx="12" cy="4.5" r="2" fill="white" />
      <circle cx="4" cy="12.5" r="2" fill="white" />
      <circle cx="12" cy="12.5" r="2" fill="white" />
    </motion.svg>
  );
}

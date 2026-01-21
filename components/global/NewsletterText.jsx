"use client";
import { motion } from "framer-motion";
import React from "react";

export default function NewsletterText({ text, className = "" }) {
  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      {/* Text */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {text}
      </motion.span>

      {/* Gradient Mask Reveal */}
      <motion.span
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        transition={{
          duration: 2.8,
          ease: [0.77, 0, 0.175, 1],
        }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 z-20 w-full h-full origin-top-left bg-gradient-to-br from-[#D53883] to-[#F27121]"
      />
    </div>
  );
}

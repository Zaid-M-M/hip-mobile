"use client";
import { useKeySectorsStore } from "./useKeySectorsStore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SectorBackground({ defaultBg }) {
  const active = useKeySectorsStore((s) => s.activeBg);
  const [currentBg, setCurrentBg] = useState(defaultBg);
  const [nextBg, setNextBg] = useState(null);
  const [isNextLoaded, setIsNextLoaded] = useState(false);

  useEffect(() => {
    if (active && active !== currentBg) {
      const img = new Image(); // ✅ Regular Image constructor
      img.src = active;
      img.onload = () => {
        setNextBg(active);
        setIsNextLoaded(true);
      };
    }
  }, [active, currentBg]);

  useEffect(() => {
    if (isNextLoaded && nextBg) {
      const timeout = setTimeout(() => {
        setCurrentBg(nextBg);
        setNextBg(null);
        setIsNextLoaded(false);
      }, 400); // Match transition duration

      return () => clearTimeout(timeout);
    }
  }, [isNextLoaded, nextBg]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Current background */}
      <img
        src={currentBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out duration-400 md:block hidden"
      />

      <img
        src="/home/keysectors/sector_bg_mob.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out duration-400 md:hidden block"
      />

      {/* Crossfade image on top */}
      {nextBg && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: [1, 0, 0.3, 0.7] }}
        >
          <img
            src={nextBg}
            alt="Next background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </div>
  );
}

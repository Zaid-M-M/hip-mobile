"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as flubber from "flubber";
import { ReactLenis } from "lenis/react";

const shapes = [
  "M0 112V82.8261V55.0326C0 46.7483 6.71573 40.0326 15 40.0326H40.1456C48.4299 40.0326 55.1456 33.3169 55.1456 25.0326V15C55.1456 6.71573 61.8613 0 70.1456 0H127C135.284 0 142 6.71575 142 15V71.9674C142 80.2517 135.284 86.9674 127 86.9674H101.854C93.5701 86.9674 86.8544 93.6831 86.8544 101.967V112C86.8544 120.284 80.1387 127 71.8544 127H15C6.71573 127 0 120.284 0 112Z",
  "M30,5 L55,55 L5,55 Z",
  "M10,10 H50 V50 H10 Z",
  "M30,5 L36,22 H55 L39,34 L45,52 L30,41 L15,52 L21,34 L5,22 H24 Z",
  "M20,5 C10,25 30,25 20,45 C40,35 40,15 20,5 Z",
];

export default function ScrollFocusSections() {
  const sectionRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [currentPath, setCurrentPath] = useState(shapes[0]);

  const isAnimatingRef = useRef(false);
  const pendingIndexRef = useRef(null);

  const animateShape = (from, to, onComplete) => {
    const interpolator = flubber.interpolate(from, to, {
      maxSegmentLength: 2,
    });

    let frame = 0;
    const totalFrames = 30;

    const animateFrame = () => {
      const nextPath = interpolator(frame / totalFrames);
      setCurrentPath(nextPath);
      frame++;

      if (frame <= totalFrames) {
        requestAnimationFrame(animateFrame);
      } else {
        onComplete?.();
      }
    };

    animateFrame();
  };

  const handleMorph = (nextIndex) => {
    if (nextIndex === focusedIndex || isAnimatingRef.current) {
      pendingIndexRef.current = nextIndex;
      return;
    }

    isAnimatingRef.current = true;

    const from = shapes[focusedIndex];
    const to = shapes[nextIndex];

    animateShape(from, to, () => {
      setFocusedIndex(nextIndex);
      isAnimatingRef.current = false;

      if (
        pendingIndexRef.current !== null &&
        pendingIndexRef.current !== nextIndex
      ) {
        const next = pendingIndexRef.current;
        pendingIndexRef.current = null;
        handleMorph(next);
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;

      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      handleMorph(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [focusedIndex]);

  return (
    <ReactLenis root>
      <div className="flex w-full min-h-screen bg-white">
        {/* Sticky SVG on left */}
        <div className="w-[20%] bg-gray-50 flex items-start justify-end pr-6">
          <div className="sticky top-[150px]">
            <motion.svg
              width="200"
              height="350"
              viewBox="0 0 142 127"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradientFill"
                  x1="-24.1263"
                  y1="151.158"
                  x2="137.769"
                  y2="-37.7765"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.186217" stopColor="#f47920" />
                  <stop offset="1" stopColor="#8F53A1" />
                </linearGradient>
              </defs>
              <motion.path
                d={currentPath}
                fill="url(#gradientFill)"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="w-[80%] flex flex-col py-[150px]">
          {[...Array(5)].map((_, i) => {
            const isFocused = focusedIndex === i;
            return (
              <motion.div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                animate={{
                  filter: isFocused ? "blur(0px)" : "blur(6px)",
                  opacity: isFocused ? 1 : 0.5,
                }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                className={`h-[232px] px-2 ${isFocused ? "text-black" : "text-gray-500"
                  }`}
              >
                <h2 className="text-[46px] mb-1 bw-m tracking-[-4%]">
                  Right Fitted
                </h2>
                <p className="bw-r text-[24px] tracking-[-4%]">
                  Solutions that perfectly fit your logistics needs: across
                  first-mile, mid-mile, and last-mile operations, in strategic
                  locations, and with options ranging from ready-to-move
                  facilities to 100% built-to-suit developments.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ReactLenis>
  );
}

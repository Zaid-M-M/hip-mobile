"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as flubber from "flubber";
import { ReactLenis } from "lenis/react";
import FocusHeader from "./FocusHeader";

const sectionsContent = [
  {
    title: "Right Fitted",
    paragraph:
      "Solutions that perfectly fit your logistics needs: across first-mile, mid-mile, and last-mile operations, in strategic locations, and with options ranging from ready-to-move facilities to 100% built-to-suit developments.",
    link: "/know-us/arrup.svg",
    fill: "#8F53A1",
  },
  {
    title: "Hands-On",
    paragraph:
      "We adopt a consultative, customer-first approach led by seasoned industry experts, with proven experience across multiple sectors to deliver Grade A parks designed to meet unique customer needs.",
    link: "/know-us/integration.svg",
    fill: "#f47920",
  },
  {
    title: "Efficient",
    paragraph:
      "Integrated project delivery with 100% compliance and on-time execution, by using cutting-edge tech to streamline land acquisition and speculative developments, with reduced time-to-market for customers.",
    link: "/know-us/future.svg",
    fill: "none",
  },
  {
    title: "Sustainable",
    paragraph:
      "Green warehousing through energy-efficient design, biodiversity and resource management, fostering inclusive communities via education, healthcare, and jobs for the differently abled, and upholding ethical governance across our partner network. ",
    link: "/know-us/green.svg",
    fill: "#0db14b",
  },
];

const shapes = [
  // folder-open (1 path)
  [
    "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
  ],
  // thumbs-up (2 paths)
  [
    "M7 10v12",
    "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
  ],

  // check (1 path)
  ["M20 6 9 17l-5-5"],
  // leaf (2 paths)
  [
    "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
  ],
];

export default function ScrollFocusSections() {
  const sectionRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [currentPaths, setCurrentPaths] = useState(shapes[0]); // array of paths

  const isAnimatingRef = useRef(false);
  const pendingIndexRef = useRef(null);

  const animateShape = (from, to, onComplete) => {
    // ensure both are arrays
    const fromArr = Array.isArray(from) ? from : [from];
    const toArr = Array.isArray(to) ? to : [to];

    // Match path counts (use first if mismatch)
    const maxLen = Math.max(fromArr.length, toArr.length);
    const interpolators = Array.from({ length: maxLen }, (_, i) =>
      flubber.interpolate(fromArr[i] || fromArr[0], toArr[i] || toArr[0], {
        maxSegmentLength: 2,
      })
    );

    let frame = 0;
    const totalFrames = 15; // Reduced from 30 to 15 for faster morphing

    const animateFrame = () => {
      const progress = frame / totalFrames;
      const nextPaths = interpolators.map((interp) => interp(progress));
      setCurrentPaths(nextPaths);
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
    <div
      className="fix py-[40px] sm:py-[70px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/know-us/gradient.png')" }}
    >
      <FocusHeader />
      <div className="flex w-full min-h-screen bg-white pt-[30px]">
        {/* Sticky SVG on left */}
        <div className="w-[25%] sm:w-[20%] bg-inherit flex items-start pr-1.5 sm:pr-4 justify-end 1280:pr-6">
          <div className="sticky top-[300px]">
            <motion.svg
              className="w-full max-w-[140px] h-auto"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {currentPaths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill={sectionsContent[focusedIndex].fill}
                  transition={{ duration: 0.1, ease: [0.7, 0, 0.4, 1] }}
                />
              ))}
            </motion.svg>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="w-full sm:w-[80%] flex flex-col pt-[0px]">
          {sectionsContent.map((section, i) => {
            const isFocused = focusedIndex === i;
            return (
              <motion.div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                animate={{
                  filter: isFocused ? "blur(0px)" : "blur(6px)",
                  opacity: isFocused ? 1 : 0.5,
                }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className={`h-fit pl-3 sm:px-2 pb-[80px] ${
                  isFocused ? "text-black" : "text-gray-500"
                }`}
              >
                <h2 className="bw-r text-[32px] 768:text-[40px] whitespace-nowrap 1024:text-[40px] 1280:text-[42px] 1366:text-[46px] leading-[46px] sm:leading-[76px] mb-1 bw-m tracking-[-4%]">
                  {section.title}
                </h2>
                <div>
                  <div className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[24px] 1024:leading-[25px] 1280:leading-[30px] tracking-[-4%] flex flex-col gap-2">
                    <p>{section.paragraph}</p>
                    <span>JOIN HORIZON</span>
                    <img
                      src="/know-us/arrup.svg"
                      alt="Arrow icon"
                      className="w-6 h-6 self-start"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";

// const items = [
//   "Agriculture and Food Processing",
//   "Tourism and Hospitality",
//   "Information Technology and Information Technology Enabled Services (IT and ITeS)",
//   "Construction and Real Estate",
//   "Education",
//   "Health",
// ];

export default function ArrowList({ data, arrow }) {
  const wrapRef = useRef(null);
  const rowRefs = useRef([]);
  const [vLine, setVLine] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const measure = () => {
      if (!wrapRef.current || rowRefs.current.length === 0) return;
      const wrapRect = wrapRef.current.getBoundingClientRect();
      const first = rowRefs.current[0];
      const last = rowRefs.current[rowRefs.current.length - 1];
      if (!first || !last) return;

      const fr = first.getBoundingClientRect();
      const lr = last.getBoundingClientRect();

      const top = fr.top - wrapRect.top + fr.height / 2;
      const bottom = lr.top - wrapRect.top + lr.height / 2;

      setVLine({ top, height: Math.max(0, bottom - top) });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrapRef.current);
    rowRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", measure);
    // Commentt
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);
  console.log(
    "ArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowDataArrowData",
    arrow
  );
  return (
    <div
      ref={wrapRef}
      className="relative grid grid-cols-[70px_1fr] justify-between gap-y-10 lg:gap-y-16"
    >
      {/* vertical gradient line */}
      <div
        className="absolute w-[2px] bg-[#8F53A1] lg:left-[16px] left-0"
        style={{
          // left: "16px",
          top: vLine.top,
          height: vLine.height,
          // background: "linear-gradient(180deg, #f47920 0%, #8F53A1 77%)",
        }}
      />

      {arrow.focusSectors.map((text, i) => (
        <React.Fragment key={i}>
          {/* left cell */}
          <div
            ref={(el) => (rowRefs.current[i] = el)}
            className="relative h-full"
          >
            {/* horizontal connector (extend to arrow base) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] lg:left-[16px] left-0"
              style={{
                // left: "16px",
                width: "40px", // extended to touch arrow
                background:
                  "linear-gradient(92deg, #8F53A1 37.32%, #F47922 98.38%)",
              }}
            />

            {/* triangle arrow (shifted left to remove gap) */}
            <svg
              className="absolute top-1/2 -translate-y-1/2 left-[36px] lg:left-[52px]" // moved closer
              width="18"
              height="18"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id={`grad-fill-${i}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f47920" />
                  <stop offset="77%" stopColor="#f47920" />
                </linearGradient>
              </defs>
              <polygon points="6,4 20,12 6,20" fill={`url(#grad-fill-${i})`} />
            </svg>
          </div>

          {/* text cell */}
          <div className="text-white text-[16px] leading-[26px] lg:text-[22px] lg:leading-[32px] lg:ml-3">
            {text}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

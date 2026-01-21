"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransitionLink from "@/src/app/TransitionLink";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const ParkCard = ({ park }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col h-fit w-auto group"
      onMouseEnter={() => window.innerWidth >= 768 && setHovered(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setHovered(false)}
    >
      {/* Image Container - We KEEP the height transition on container */}
      {/* But we PREVENT image jitter by forcing GPU layer + transform trick */}
      <div className="h-[200px] md:group-hover:h-[190px] transition-all duration-300 w-full overflow-hidden">
        <img
          src={formatMediaUrl(park.image)}
          alt={park.title}
          unoptimized
          className="w-full h-full object-cover"
          style={{
            transform: "translateZ(0)", // Forces GPU layer
            backfaceVisibility: "hidden", // Eliminates repaint jank
            imageRendering: "-webkit-optimize-contrast", // Optional: sharper on Chrome
          }}
        />
      </div>

      {/* Content - Grows exactly like your original (perfect!) */}
      <div
        className="flex py-7 px-4 flex-col justify-between bg-white border border-gray-200 transition-all duration-300
                      h-[218px] md:group-hover:h-[228px]"
      >
        <div className="flex flex-col 2xl:gap-3 gap-1">
          <div className="w-full justify-between gap-5 flex items-center">
            <h2 className="text-[20px] bw-sb">
              {park.incity_city_name ? park.incity_city_name : park.title}
            </h2>
          </div>

          <div className="flex w-full justify-between items-center">
            <p className="text-[16px] bw-r">Area</p>
            <span className="bw-sb text-[16px]">{park.area}</span>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="text-[16px] bw-r">Potential</p>
            <span className="bw-sb text-[16px]">{park.potential}</span>
          </div>

          {park.certification && (
            <div className="flex w-full justify-between items-center">
              <p className="text-[16px] bw-r">Certification</p>
              <span className="bw-sb text-[16px] text-right">
                {park.certification}
              </span>
            </div>
          )}
        </div>

        {/* Desktop Hover Link */}
        {park.slug === "warehousing-park-narasapura" ? null : (
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="mt-4 hidden md:block"
              >
                <TransitionLink
                  href={
                    park.incity_city_name
                      ? `/incity-centers/${park.slug}`
                      : `/${park.slug}`
                  }
                  className="text-[16px] uppercase leading-[20px] bw-sb text-[#f47920]"
                >
                  {park.incity_city_name
                    ? "Explore Incity Centers"
                    : "Explore Park"}
                </TransitionLink>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        {/* Mobile Always Visible */}
        {park.slug === "warehousing-park-narasapura" ? null : (
          <div className="mt-4 md:hidden">
            <TransitionLink
              href={
                park.incity_city_name
                  ? `/incity-centers/${park.slug}`
                  : `/${park.slug}`
              }
              className="text-[16px] uppercase leading-[20px] bw-sb text-[#f47920]"
            >
              {park.incity_city_name
                ? "Explore Incity Centers"
                : "Explore Park"}
            </TransitionLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkCard;

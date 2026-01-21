"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const VidSec = ({ career_sec8_video = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const sidebarRef = useRef(null);
  const isHoveringSidebar = useRef(false);

  useEffect(() => {
    if (career_sec8_video.length) {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [career_sec8_video]);

  // === PREVENT PARENT SCROLL WHEN HOVERING SIDEBAR ===
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleWheel = (e) => {
      if (!isHoveringSidebar.current) return;

      const atTop = sidebar.scrollTop === 0;
      const atBottom =
        sidebar.scrollHeight - sidebar.scrollTop === sidebar.clientHeight;

      // If scrolling up and at top OR scrolling down and at bottom → allow parent scroll
      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        return; // Let parent handle
      }

      e.stopPropagation();
      e.preventDefault();

      // Apply scroll manually for smoothness
      sidebar.scrollTop += e.deltaY;
    };

    const handleMouseEnter = () => {
      isHoveringSidebar.current = true;
    };

    const handleMouseLeave = () => {
      isHoveringSidebar.current = false;
    };

    sidebar.addEventListener("wheel", handleWheel, { passive: false });
    sidebar.addEventListener("mouseenter", handleMouseEnter);
    sidebar.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sidebar.removeEventListener("wheel", handleWheel);
      sidebar.removeEventListener("mouseenter", handleMouseEnter);
      sidebar.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [career_sec8_video]);

  if (!career_sec8_video.length) return null;

  const activeVideo = career_sec8_video[activeIndex];
  const sidebarVideos = career_sec8_video.filter((_, i) => i !== activeIndex);

  return (
    <div
      data-prevent-lenis
      className="flex xl:flex-row flex-col gap-4 scroll-mt-20"
    >
      {/* Big active video */}
      <div className="flex-1 scroll-mt-20" id="active">
        {loading ? (
          <div className="w-full h-[220px] xl:h-[380px] 1440:h-[430px] bg-gray-800 animate-pulse" />
        ) : (
          <iframe
            className="w-full h-[220px] xl:h-[380px] 1440:h-[430px]"
            src={activeVideo.career_testimonial_video_url}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Active Video"
          />
        )}
      </div>

      {/* Sidebar wrapper */}
      <div className="flex-[0.7] relative 1440:h-[550px] 1440:max-h-[550px] xl:max-h-[550px] max-h-[400px] vidsec-sidebar scroll-mt-20">
        <div
          ref={sidebarRef}
          className="gradscroll overflow-y-auto xl:overflow-y-scroll relative flex flex-col gap-3 xl:gap-7 h-full pr-2 1440:h-[600px] 1440:max-h-[600px] xl:max-h-[550px] max-h-[400px] scroll-mt-20
                     scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-600
                     overscroll-contain"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {loading
            ? Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-4 min-h-10 border bg-gray-700/40 backdrop-blur-[27px] animate-pulse flex-shrink-0"
                >
                  <div className="w-[50%] h-16 bg-gray-600" />
                  <div className="flex-1 h-4 bg-gray-600" />
                </div>
              ))
            : sidebarVideos.map((video, idx) => (
                <Link
                  href="#active"
                  key={idx}
                  onClick={() =>
                    setActiveIndex(career_sec8_video.indexOf(video))
                  }
                  scroll={false}
                >
                  <motion.div
                    initial={{
                      borderImageSource:
                        "linear-gradient(45deg, #ffffff60, #ffffff20)",
                    }}
                    whileHover={{
                      borderImageSource:
                        "linear-gradient(to right, #8f53a1, #f47922)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-[#ffffff24] flex group items-center gap-3 xl:gap-6 p-3 xl:p-6 min-h-[120px] xl:min-h-[178px] border border-white backdrop-blur-[27px] cursor-pointer flex-shrink-0 overflow-hidden"
                    style={{ borderImageSlice: 2 }}
                  >
                    <div className="relative h-[100px] xl:h-[133px] min-w-[55%] max-w-[55%] xl:max-w-[45%] xl:min-w-[45%]">
                      <img
                        src={formatMediaUrl(video.career_thumbnail_image)}
                        priority
                        unoptimized // ← Must be true
                        alt={video.career_testimonial_title}
                        className="w-full h-full object-cover"
                      />
                      <img
                        src="/culture/CTA.svg"
                        alt="CTA"
                        className="absolute bottom-2 right-2 w-8 h-8"
                      />
                    </div>
                    <div
                      className="flex-1 text-[14px] xl:text-[20px] bw-sb text-white
                      bg-gradient-to-r from-[#8f53a1] to-[#f47922] bg-clip-text text-transparent
                      transition-all duration-500"
                    >
                      {video.career_testimonial_title}
                    </div>
                  </motion.div>
                </Link>
              ))}
        </div>

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-black to-transparent z-50" />
      </div>
    </div>
  );
};

export default VidSec;

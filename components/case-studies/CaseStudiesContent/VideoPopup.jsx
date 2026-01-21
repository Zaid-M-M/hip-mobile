"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoPopup = ({ isOpen, onClose, videoData }) => {
  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoData) return null;

  // Handle Vimeo player URLs from API
  const getVimeoEmbedUrl = (url) => {
    if (url.includes('player.vimeo.com/video/')) {
      const videoId = url.split('/video/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
    }
    return url;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-[10px] sm:p-[20px]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Main Container - Responsive */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
            className="relative flex flex-col pt-[30px] md:pt-[auto] items-center gap-[8px] sm:gap-[20px] md:gap-[24px] p-0 bg-white max-w-[100vw] sm:max-w-[90vw] md:max-w-[900px] w-full mx-0"
          >
            {/* Close Button - Top Right, with exact design specs */}
            <button
              onClick={onClose}
              className="absolute top-[15px] right-[15px] sm:top-[20px] sm:right-[20px] flex items-center justify-center bg-transparent hover:opacity-70 transition-opacity duration-200 w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] border border-black/[.22] gap-[7.87px] opacity-100 box-border cursor-pointer"
            >
              <img
                src="/cross.svg"
                alt="Close"
                className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] opacity-100 brightness-0 saturate-100"
              />
            </button>

            {/* Title - Responsive */}
            <h2
              className="text-center text-black pt-[8px] sm:pt-[25px] md:pt-[30px] px-[12px] sm:px-[20px] md:px-0 text-[16px] sm:text-[20px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[35px] font-barlow font-semibold h-auto"
            >
              {videoData.company}
            </h2>

            {/* Video Container - Responsive */}
            <div className="flex flex-col items-center gap-0 sm:gap-[10px] md:gap-[10px] p-0 w-full">
              {/* Video Player - Responsive */}
              <div className="w-full max-w-[100vw] sm:max-w-[90vw] md:max-w-[800px] h-[197px] sm:h-[280px] md:h-[350px] lg:h-[420px] px-[10px] sm:px-0">
                <iframe
                  src={getVimeoEmbedUrl(videoData.videoUrl)}
                  title={`${videoData.company} - Client Testimonial`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description - Responsive */}
              <div className="w-full max-w-[100vw] sm:max-w-[90vw] md:max-w-[800px] px-[20px] sm:px-[20px] pt-[5px] pb-[20px] sm:pb-[25px] md:pb-[30px]">
                <p
                  className="text-left text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px] font-barlow font-normal h-auto text-black"
                >
                  {videoData.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VideoPopup;

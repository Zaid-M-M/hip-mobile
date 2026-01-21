"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Btn from "@/components/global/Btn";

const SocialTabContent = ({ tabs, activeTab }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="w-full h-fit mt-8">
      <AnimatePresence mode="wait">
        {tabs
          .filter((tab) => tab.title === activeTab)
          .map((tab) => (
            <motion.div
              key={tab.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.6, 0, 0.3, 1] }}
              className="grid grid-cols-1 items-start 1280:grid-cols-[minmax(0,800px)_1fr] 1366:grid-cols-[minmax(0,850px)_1fr] 1536:grid-cols-[minmax(0,920px)_1fr]  h-fit gap-6"
            >
              <div className="relative flex w-full 1280:max-w-auto  overflow-hidden">
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`${tab.video}?autoplay=1&title=0&byline=0&portrait=0`}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

              </div>

              {/* Right description */}
              <div className="flex flex-col items-start">
                <p className="text-[16px] leading-[26px] xl:pr-[26px] lg:text-[20px] lg:leading-[32px] text-gray-800">
                  {tab.description}
                </p>
                <div className="mt-3">
                  {tab.btnLabel && tab.btnLink && (
                    <div className="mt-3">
                      <Btn text={tab.btnLabel} href={tab.btnLink} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default SocialTabContent;

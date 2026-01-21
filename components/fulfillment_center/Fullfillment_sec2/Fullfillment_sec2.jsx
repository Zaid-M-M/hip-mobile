"use client";
import React, { useRef, useState, useEffect } from "react";
const Fulfillment_sec2 = () => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.8, // video must be at least 50% visible
      }
    );
    observer.observe(video);
    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isIntersecting]);
  return (
    <div className="relative fix">
      <div className="w-full h-full flex justify-center xl:mb-[30px] 360:pb-[5px] relative">
        {/* Video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-auto object-cover shadow-lg"
        >
          <source
            src="/fulfillment_center/Sequence 01_1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
export default Fulfillment_sec2;

"use client";
import React from "react";

const Indspot = () => {
  return (
    <div>
      <div className="relativew-full aspect-[9/15] overflow-hidden h-[77vh] md:h-[43vh] lg:h-[60svh]  xl:h-[calc(100vh-80px)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/ind/Industrial_Logistics_desktop.webp"
          className="absolute top-0 left-0 w-full md:h-auto xl:h-full object-cover z-0 md:block hidden"
        >
          <source
            src="/ind/Industrial_Logistics_desktop.mp4"
            type="video/mp4"
          />
          {/* Your browser does not support the video tag. */}
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/ind/Industrial_Logistics_mobile.webp"
          className="absolute top-0 left-0 w-full h-auto object-cover z-0 md:hidden block"
        >
          <source src="/ind/Industrial_Logistics_mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Indspot;

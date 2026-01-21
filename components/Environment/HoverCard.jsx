"use client";
import React from "react";

const HoverCard = ({
  index,
  activeIndex,
  setActiveIndex,
  title,
  description,
  image,
}) => {
  const isActive = activeIndex === index;

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      setActiveIndex(isActive ? null : index); // toggle only on mobile/tablet
    }
  };

  return (
    <div
      onClick={handleToggle}
      className={`relative flex items-end justify-center 
        w-full md:w-[320px] lg:w-[400px] xl:w-[530px] 1366:w-[580px] 1440:w-[600px] 2xl:w-[630px]
        h-[350px] md:h-[300px] lg:h-[380px] xl:h-[420px] 1366:h-[450px] 1440:h-[470px] 2xl:h-[500px]
        rounded-[40px_0_40px_40px] overflow-hidden 
        group cursor-pointer transition-all duration-500`}
    >
      {/* Card Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div
        className={`absolute !w-[102%] !h-[102%] inset-0 rounded-[20px_0_20px_20px] 
    1024:rounded-[40px_0_40px_40px] transition-opacity duration-500
    ${isActive ? "opacity-100" : "opacity-0"} 
    group-hover:opacity-100`}
        style={{
          background: "linear-gradient(134deg, #2BB04C 30%, #8F53A1 78%)",
        }}
      />

      {/* Border Glow */}
      <div
        className={`absolute inset-0 rounded-[20px_0_20px_20px] 
    1024:rounded-[40px_0_40px_40px] pointer-events-none p-[2px] 
    transition-opacity duration-500
    ${isActive ? "opacity-100" : "opacity-0"} 
    group-hover:opacity-100`}
        style={{
          background: "linear-gradient(134deg, #2BB04C 30%, #8F53A1 78%)",
          boxShadow: "0 0 44px rgba(43, 176, 76, 0.40)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Dark Glass Overlay (only when idle) */}
      <div
        className={`absolute !w-[102%] !h-[102%] inset-0  bg-black/60
          [mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))]
          [mask-repeat:no-repeat] [mask-size:100%_100%] 
          transition-opacity duration-500
          ${isActive ? "opacity-0" : "opacity-100"} 
          lg:group-hover:opacity-0`}
      ></div>

      {/* Title (hidden on hover/active) */}
      <div
        className={`relative z-10 text-white px-2 lg:px-6 flex flex-wrap md:gap-8 gap-4 md:justify-center md:items-center 
          transition-opacity duration-500
          ${isActive ? "opacity-0" : "opacity-100"} 
          lg:group-hover:opacity-0`}
      >
        <div className="h-fit py-5  bw-r text-center leading-[120%] text-[24px] xl:text-[32px] w-[95%] xl:w-[70%] flex items-center justify-center">
          {title}
        </div>
      </div>

      {/* Info Box (only visible on hover/active) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 
          p-6 text-white flex flex-col items-center justify-center text-center
          ${isActive ? "opacity-100" : "opacity-0"} 
          lg:group-hover:opacity-100`}
      >
        <h3 className="text-[21px] leading-[31px] 1024:text-[24px] 1024:leading-[34px] 1280:text-[32px] bw-r 1280:leading-[120%] mb-2 border-b border-[#B1B1B1] pb-[4px]">
          {title}
        </h3>
        <div
          className="
              overflow-y-auto scrollbar-thin 
              scrollbar-thumb-[#0db14b]/80 
              scrollbar-track-transparent 
              hover:scrollbar-thumb-[#772BF2]/80 scrollbar-theme"
        >
          <p className="text-[17px] 768:text-[16px] bw-r leading-[26px] 1280:text-[24px] 1280:leading-[34px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;

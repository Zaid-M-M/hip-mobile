"use client";
import React from "react";

const GovernCard = ({
  index,
  activeIndex,
  setActiveIndex,
  title,
  image,
  keypoints,
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
        w-full md:w-[320px] lg:w-[400px] xl:w-[530px] 2xl:w-[630px]
        h-[320px] md:h-[300px] lg:h-[380px] xl:h-[420px] 1366:h-[450px] 1440:h-[470px] 2xl:h-[500px]
        border-[1px] transition-colors duration-500
        ${isActive ? "border-transparent" : "border-[#505050]"} 
        rounded-[40px_0_40px_40px] overflow-hidden 
        group cursor-pointer`}
    >
      {/* Card Background Image (full, no gap) */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat rounded-[40px_0_40px_40px]"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Background (fades in on hover/active) */}
      <div
        className={`absolute inset-[1px] rounded-[40px_0_40px_40px] transition-opacity duration-500
          ${isActive ? "opacity-100" : "opacity-0"} 
          lg:group-hover:opacity-100`}
        style={{
          background: "linear-gradient(134deg, #2BB04C 30%, #8F53A1 78%)",
        }}
      />

      {/* Gradient Border + Glow (fades in on hover/active) */}
      <div
        className={`absolute inset-0 rounded-[40px_0_40px_40px] pointer-events-none p-[2px] transition-opacity duration-500
          ${isActive ? "opacity-100" : "opacity-0"} 
          lg:group-hover:opacity-100`}
        style={{
          background: "linear-gradient(134deg, #2BB04C 30%, #8F53A1 78%)",
          boxShadow: "0 0 44px rgba(43, 176, 76, 0.40)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Dark Glass Overlay (only for idle bottom text area) */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[40%] 
          backdrop-blur-[8px] bg-black/60
          [mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0))]
          [mask-repeat:no-repeat] [mask-size:100%_100%]
          transition-opacity duration-500
          ${isActive ? "opacity-0" : "opacity-100"} 
          lg:group-hover:opacity-0`}
      />

      {/* Title Section */}
      <div
        className={`absolute bottom-0 left-0 w-full px-6 py-5 1366:py-8
          text-white text-center
          transition-opacity duration-500
          ${isActive ? "opacity-0" : "opacity-100"} 
          lg:group-hover:opacity-0`}
      >
        <div
          className="relative z-10 text-[18px] leading-[26px] 
            768:text-[22px] 1280:text-[32px] 768:leading-[120%]"
        >
          {title}
        </div>
      </div>

      {/* Info Box (only visible on hover/active) */}
      <div
        className={`absolute inset-[1px] transition-opacity duration-500 
          p-6 1280:px-[40px] 1280:py-[50px] text-white flex flex-col 
          ${isActive ? "opacity-100" : "opacity-0"} 
          lg:group-hover:opacity-100`}
      >
        {/* Title stays fixed */}
        <h3 className="text-lg 1024:text-[24px] 1024:leading-[30px] 1280:text-[32px] bw-r text-center 1280:leading-[120%] mb-2 border-b border-[#B1B1B1] pb-[6px] 768:pb-[10px] 1280:pb-[12px] 1366:pb-[18px]">
          {title}
        </h3>

        {/* Scrollable keypoints */}
        <div
          className="flex-1 overflow-y-auto pr-2 1024:mt-2 1280:mt-3.5 scrollbar-thin 
            scrollbar-thumb-[#0db14b]/80 
            scrollbar-track-transparent 
            hover:scrollbar-thumb-[#772BF2]/80 scrollbar-theme"
        >
          {keypoints?.map((point, i) => (
            <div
              key={i}
              className="flex gap-[7px] 1024:gap-[14px] items-start mb-2"
            >
              <div className="w-[20px] h-[20px] 1024:w-[32px] 1024:h-[32px] xl:w-[35px] xl:h-[35px] flex-shrink-0">
                <img
                  src="/governance/check.svg"
                  alt="Check icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="bw-r text-[16px] 1024:text-[17px] 1024:leading-[24px] 1280:text-[24px] leading-[24px] 1280:leading-[34px]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernCard;

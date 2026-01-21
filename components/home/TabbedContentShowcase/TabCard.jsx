import React from "react";

const TabCard = ({ image, date, title, linkText = "Read More" }) => {
  return (
    <div className="w-full h-full">
      {/* Top Image */}
      <div className="max-h-[200px] relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bw-b text-[12px] leading-[20px] px-[27px] py-[8px] bg-black text-white tracking-[0.08em] uppercase">
            Policy
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col border border-[#C3C3C3] gap-[14px] p-[24px]">
        {/* Date */}
        <div className="flex items-center gap-[9px]">
          <img src="/home/tabcal.svg" alt="Calendar" />
          <span className="bw-m text-[16px] text-[#6D6D6D] leading-[20px]">
            {date}
          </span>
        </div>

        {/* Title */}
        <p className="text-[24px] leading-[30px] text-black">{title}</p>

        {/* CTA */}
        <span className="uppercase w-fit px-[30px] py-[15px] bw-m border">
          {linkText}
        </span>
      </div>
    </div>
  );
};

export default TabCard;

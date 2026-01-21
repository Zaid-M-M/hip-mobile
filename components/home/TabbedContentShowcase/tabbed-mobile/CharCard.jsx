import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import EventPopup from "./EventPopup";

const CharCard = ({
  charImage,
  charcont,
  charTitle,
  charSlug,
  index = 0,
  description,
  type,
  date,
  media,
  onEventClick,
}) => {
  const labelColors = ["#8A52A0", "#000000", "#F47922"];
  const bgColor = labelColors[index % labelColors.length];

  // Event detection
  const isEvent = type?.toLowerCase() === "events";

  // Case study detection
  const isCaseStudy =
    type?.toLowerCase() === "case-studies" ||
    charcont?.toLowerCase() === "case studies";

  const handleEventClick = (e) => {
    if (isEvent) {
      e.preventDefault();
      onEventClick?.({
        image: charImage,
        title: charTitle,
        date: date,
        media: media,
        description: description, // Pass the content from description prop
      });
    }
  };

  // Motion variants for desktop
  const titleVariants = {
    hover: { y: -10, transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] } },
  };
  const buttonVariants = {
    hover: {
      y: 10,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.7, 0, 0.4, 1], delay: 0.1 },
    },
  };

  return (
    <>
      {/* Desktop Card */}
      <div className="hidden 1024:block">
        <motion.div
          className="w-full h-fit group relative overflow-hidden cursor-pointer"
          whileHover="hover"
        >
          {/* Top Image */}
          {/* <div className="w-full h-full relative">
            <img
              src={charImage || fallbackImage}
              alt={charTitle || fallbackTitle}
              className="w-full h-[230px] object-cover"
            />
            <div className="absolute top-4 left-4">
              <span
                className="bw-b text-[12px] leading-[20px] px-[27px] py-[8px] text-white tracking-[0.08em] uppercase"
                style={{ backgroundColor: bgColor }}
              >
                {charcont || fallbackCategory}
              </span>
            </div>
          </div> */}

          <div className="w-full h-[230px] relative bg-gray-200 overflow-hidden">
            {/* Image or Skeleton */}
            {charImage ? (
              <img
                src={charImage}
                alt={charTitle || "Title Not Available"}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 animate-pulse"></div>
            )}

            {/* Category Badge */}
            {/* {charcont && isCaseStudy && (
              <div className="absolute top-4 left-4 z-20">
                <span
                  className="bw-b text-[12px] leading-[20px] px-[27px] py-[8px] text-white tracking-[0.08em] uppercase"
                  style={{ backgroundColor: bgColor }}
                >
                  {charcont}
                </span>
              </div>
            )} */}
          </div>

          {/* Content */}
          <div className="flex flex-col border h-[270px] overflow-hidden bg-white border-[#C3C3C3] gap-[0] p-[24px] relative">
            {/* Date */}
            <div className="flex items-center gap-[5px] 1280:gap-[9px]">
              <div>
                <img src="/home/tabcal.svg" alt="Calendar" />
              </div>
              <span className="bw-m text-[16px] text-[#6D6D6D] leading-[20px]">
                {date}
              </span>
            </div>

            {/* Title & Button */}
            <div className="flex flex-col justify-between h-[150px] mt-[20px] relative">
              <motion.h2
                className="text-[20px] leading-[30px] line-clamp-3 1366:text-[24px] 1366:leading-[34px] bw-m"
                variants={titleVariants}
              >
                {charTitle}
              </motion.h2>
              <motion.a
                href={isEvent ? "#" : charSlug}
                onClick={handleEventClick}
                className="absolute bottom-0 left-0 uppercase w-fit px-[20px] py-[10px] bw-m border-2 border-black bg-white"
                variants={buttonVariants}
                initial={{ y: 20, opacity: 0 }}
              >
                Read More
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile/Tablet Card */}
      <div className="block 1024:!hidden">
        <div className="w-full min-h-[400px] 1440:w-[424px] 1280:min-h-[424px] relative overflow-hidden cursor-pointer">
          {/* Top Image */}
          <div className="w-full h-[230px] relative bg-gray-200 overflow-hidden">
            {charImage ? (
              <img
                src={charImage}
                alt={charTitle || "Title Not Available"}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 animate-pulse"></div>
            )}

            {/* Category Badge */}
            {/* {isCaseStudy && (
              <div className="absolute top-4 left-4 z-20">
                <span
                  className="bw-b text-[12px] leading-[20px] px-[27px] py-[8px] text-white tracking-[0.08em] uppercase"
                  style={{ backgroundColor: bgColor }}
                >
                  {charcont}
                </span>
              </div>
            )} */}
          </div>

          {/* Content */}
          <div className="flex flex-col border h-[210px] sm:h-[242px] overflow-hidden bg-white border-[#C3C3C3] gap-[14px] p-[18px] sm:p-[24px] relative">
            {/* Date */}
            <div className="flex items-center gap-[3px] sm:gap-[5px] 1280:gap-[9px]">
              <div>
                <img
                  src="/home/tabcal.svg"
                  alt="Calendar"
                  className="w-full h-auto max-w-[18px] sm:max-w-[24px]"
                />
              </div>

              <span className="bw-m text-[12px] leading-[22px] sm:text-[16px] text-[#6D6D6D] sm:leading-[20px]">
                {date}
              </span>
            </div>

            {/* Title & Button */}
            <div className="flex flex-col justify-between h-[170px] mt-[0px] relative">
              <p className="text-[16px] leading-[26px] sm:text-[20px] sm:leading-[30px] line-clamp-3 1366:text-[24px] 1366:leading-[34px] text-black">
                {charTitle}
              </p>
              <a
                href={isEvent ? "#" : charSlug}
                onClick={handleEventClick}
                className="absolute bottom-0 left-0 uppercase w-fit text-[14px] sm:text-[16px] px-[20px] py-[10px] sm:px-[30px] sm:py-[15px] bw-m border-[1px] border-black bg-white"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharCard;

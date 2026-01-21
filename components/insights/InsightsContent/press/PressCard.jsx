"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TransitionLink from "@/src/app/TransitionLink";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const PressCard = ({ pressRelease }) => {
  const titleRef = useRef(null);
  const [titleHeight, setTitleHeight] = useState(0);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${day} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const imageUrl = pressRelease.acf?.pr_image || "";

  const publishDate =
    pressRelease.acf?.pr_publish_date ||
    (pressRelease.acf?.publish_date &&
    pressRelease.acf?.publish_month &&
    pressRelease.acf?.publish_year
      ? `${pressRelease.acf.publish_date} ${pressRelease.acf.publish_month} ${pressRelease.acf.publish_year}`
      : formatDate(pressRelease.date));

  const pressUrl = `/press-release/${pressRelease.slug}`;

  const title =
    typeof pressRelease.title === "object"
      ? pressRelease.title.rendered
      : pressRelease.title || "";

  const CardContent = () => (
    <div className="relative overflow-hidden bg-white border border-[#c3c3c3] group">
      {/* Image */}
      <div className="relative w-full h-[200px] xl:h-[250px] overflow-hidden">
        <Image
          src={formatMediaUrl(imageUrl)}
          alt={title}
          fill
          priority
          unoptimized // ← Must be true
          className="object-cover"
          onError={(e) => {
            e.target.src = "";
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative px-[16px] py-[20px] flex flex-col"
        style={{ height: "240px" }}
      >
        {/* Date */}
        <div className="flex items-center gap-[5px] my-[2px] h-[24px]">
          <Image
            src="/calendaricon.svg"
            alt="Calendar"
            width={24}
            height={24}
          />
          <span
            className="bw-m text-[16px] leading-[20px] text-[#6d6d6d]"
            dangerouslySetInnerHTML={{ __html: publishDate }}
          />
        </div>

        <div className="flex-1" />

        {/* Title */}
        <div className="absolute left-[16px] lg:!block !hidden right-[16px] bottom-[22px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[70px]">
          <h3
            ref={titleRef}
            className="bw-m text-left text-[24px] leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] line-clamp-3 overflow-hidden"
            style={{ display: "-webkit-box" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <div className="absolute left-[16px] lg:!hidden !block right-[16px] bottom-auto top-[70px]">
          <h3
            ref={titleRef}
            className="bw-m text-[24px] text-left leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
            style={{ display: "-webkit-box" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* Read More Button */}
        <div className="absolute left-[16px] right-[16px] bottom-[16px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 lg:!block !hidden">
          <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
              READ MORE
            </span>
            <img alt="" className="w-5 h-5" src="/blackexternal.svg" />
          </div>
        </div>
        <div className="absolute left-[16px] right-[16px] bottom-[16px] lg:!hidden !block">
          <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
              READ MORE
            </span>
            <img alt="" className="w-5 h-5" src="/blackexternal.svg" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <TransitionLink className="w-full" href={pressUrl}>
        <CardContent />
      </TransitionLink>
    </div>
  );
};

export default PressCard;

"use client";
import React, { useRef } from "react";
import Image from "next/image";
import TransitionLink from "@/src/app/TransitionLink";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const NewsCard = ({ item }) => {
  const titleRef = useRef(null);

  // ✅ Format date: show only Month + Year using WordPress' default publish date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
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
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const imageUrl = item?.acf?.m_news_image || item?.acf?.news_image || "";
  const publishDate = formatDate(item?.date);
  const title =
    typeof item?.title === "object" ? item.title.rendered : item?.title || "";
  const newsUrl = item?.slug ? `/news/${item.slug}` : "#";

  // Detect external link
  const isExternalLink =
    item?.acf?.m_news_external_link === true ||
    (typeof newsUrl === "string" && newsUrl.startsWith("http"));

  return (
    <TransitionLink
      href={newsUrl}
      className="relative overflow-hidden bg-white border border-[#c3c3c3] group"
    >
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

        {/* Category Tag */}
        {item?.acf?.m_news_platform && (
          <div className="absolute top-[16px] left-[16px] px-[12px] py-[8px] flex items-center justify-center bg-black">
            <span
              className="bw-m text-[10px] md:text-[11px] text-white uppercase tracking-[1px] leading-none"
              dangerouslySetInnerHTML={{ __html: item?.acf?.m_news_platform }}
            />
          </div>
        )}
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
          <span className="bw-m text-[16px] leading-[20px] text-[#6d6d6d]">
            {publishDate}
          </span>
        </div>

        <div className="flex-1" />

        {/* Title (desktop hover animation) */}
        <div className="absolute left-[16px] lg:!block !hidden right-[16px] bottom-[22px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[70px]">
          <h3
            ref={titleRef}
            className="bw-m text-left text-[24px] leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] line-clamp-3 overflow-hidden"
            style={{ display: "-webkit-box" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* Title (mobile static) */}
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
          <div
            className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center"
            onClick={(e) => {
              if (isExternalLink) {
                e.preventDefault();
                e.stopPropagation();
                if (newsUrl && newsUrl !== "#") {
                  window.open(newsUrl, "_blank", "noopener,noreferrer");
                }
              }
            }}
          >
            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
              READ MORE
            </span>
            <Image
              alt="External link"
              width={20}
              height={20}
              className="w-5 h-5"
              src="/blackexternal.svg"
            />
          </div>
        </div>

        {/* Mobile Read More */}
        <div className="absolute left-[16px] right-[16px] bottom-[16px] lg:!hidden !block">
          <div
            className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center"
            onClick={(e) => {
              if (isExternalLink) {
                e.preventDefault();
                e.stopPropagation();
                if (newsUrl && newsUrl !== "#") {
                  window.open(newsUrl, "_blank", "noopener,noreferrer");
                }
              }
            }}
          >
            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
              READ MORE
            </span>
            <Image
              alt="External link"
              width={20}
              height={20}
              className="w-5 h-5"
              src="/blackexternal.svg"
            />
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

export default NewsCard;

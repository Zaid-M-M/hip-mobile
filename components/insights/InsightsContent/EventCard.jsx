"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const EventCard = ({ blog, activeTab, onEventClick }) => {
  const titleRef = useRef(null);
  const [titleHeight, setTitleHeight] = useState(0);

  // Format date
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

  const getImageUrl = () => {
    if (blog.acf?.featured_slider_image) return blog.acf.featured_slider_image;
    if (blog.acf?.blog_image) return blog.acf.blog_image;
    if (blog.acf?.news_image) return blog.acf.news_image;
    if (blog.acf?.pr_image) return blog.acf.pr_image;
    if (blog.acf?.feature_image) return blog.acf.feature_image;
    if (blog.acf?.featured_image) return blog.acf.featured_image;
    if (blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
      return blog._embedded["wp:featuredmedia"][0].source_url;
    }
    return "";
  };

  const decodeHtmlEntities = (text) => {
    if (!text) return "";
    if (typeof window !== "undefined") {
      const textArea = document.createElement("textarea");
      textArea.innerHTML = text;
      return textArea.value;
    }
    return text;
  };

  const stripHtmlAndDecode = (text) => {
    if (!text) return "";
    return decodeHtmlEntities(text.replace(/<[^>]*>/g, ""));
  };

  const getTitle = () => {
    let title = "";
    if (typeof blog.title === "object") {
      title = blog.title.rendered || blog.title;
    } else {
      title = blog.title;
    }
    return stripHtmlAndDecode(title);
  };

  const getPublishDate = () => {
    if (blog.acf?.blog_publish_date) return blog.acf.blog_publish_date;
    if (
      blog.acf?.publish_date &&
      blog.acf?.publish_month &&
      blog.acf?.publish_year
    ) {
      return `${blog.acf.publish_date} ${blog.acf.publish_month} ${blog.acf.publish_year}`;
    }
    return formatDate(blog.date);
  };

  const getBlogUrl = () => `/blog/${blog.slug}`;
  const getNewsUrl = () => blog.acf?.news_link || blog.link || "#";

  // const IMAGE_HEIGHT = 410;
  // const uniformContentHeight = 240;

  const CardContent = () => (
    <div className="relative overflow-hidden bg-white border border-[#c3c3c3] group">
      {/* Image */}
      <div className="relative w-full h-[200px] xl:h-[250px] overflow-hidden">
        <Image
          src={formatMediaUrl(getImageUrl())}
          alt={getTitle()}
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
          <span className="bw-m text-[16px] leading-[20px] text-[#6d6d6d]">
            {getPublishDate()}
          </span>
        </div>

        <div className="flex-1" />

        {/* Title */}
        <div
          className="absolute left-[16px] lg:!block !hidden right-[16px] bottom-[22px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[70px]"
          // className="absolute left-[16px] top-28 lg:!block !hidden right-[16px] bottom-[22px] transition-[top] duration-300 ease-in-out group-hover:top-16"
        >
          <h3
            ref={titleRef}
            className="bw-m text-[24px] leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
            style={{ display: "-webkit-box" }}
          >
            {getTitle()}
          </h3>
          {activeTab === "News" && (
            <p className="text-[#000] mt-[10px] font-barlow text-[20px] leading-[30px] overflow-hidden">
              {blog.acf?.news_description || ""}
            </p>
          )}
        </div>
        <div className="absolute left-[16px] lg:!hidden !block right-[16px] bottom-auto top-[70px]">
          <h3
            ref={titleRef}
            className="bw-m text-[24px] leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
            style={{ display: "-webkit-box" }}
          >
            {getTitle()}
          </h3>
          {activeTab === "News" && (
            <p className="text-[#000] mt-[10px] font-barlow text-[20px] leading-[30px] overflow-hidden">
              {blog.acf?.news_description || ""}
            </p>
          )}
        </div>

        {/* Read More Button */}
        <div
          className="absolute left-[16px] right-[16px] bottom-[16px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 lg:!block !hidden"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (activeTab === "Events" && onEventClick) {
              onEventClick(blog);
            } else if (activeTab === "News") {
              const url = getNewsUrl();
              if (url && url !== "#") window.open(url, "_blank");
            } else {
              window.location.href = getBlogUrl();
            }
          }}
        >
          <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
              READ MORE
            </span>
            <img alt="" class="w-5 h-5" src="/blackexternal.svg" />
          </div>
        </div>
        <div
          className="absolute left-[16px] right-[16px] bottom-[16px] lg:!hidden !block"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (activeTab === "Events" && onEventClick) {
              onEventClick(blog);
            } else if (activeTab === "News") {
              const url = getNewsUrl();
              if (url && url !== "#") window.open(url, "_blank");
            } else {
              window.location.href = getBlogUrl();
            }
          }}
        >
          <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
              READ MORE
            </span>
            <img alt="" class="w-5 h-5" src="/blackexternal.svg" />
          </div>
        </div>
      </div>

      <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-[#c3c3c3]" />
    </div>
  );

  return (
    <div
      className="bg-white border-b border-[#c3c3c3] md:border-b-0"
      // style={{ height: `${IMAGE_HEIGHT + uniformContentHeight}px` }}
    >
      {activeTab === "Events" ? (
        <CardContent />
      ) : activeTab === "News" ? (
        <a href={getNewsUrl()} target="_blank" rel="noopener noreferrer">
          <CardContent />
        </a>
      ) : (
        <Link href={getBlogUrl()}>
          <CardContent />
        </Link>
      )}
    </div>
  );
};

export default EventCard;

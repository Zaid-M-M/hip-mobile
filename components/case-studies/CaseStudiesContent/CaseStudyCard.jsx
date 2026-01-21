"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import cmsApi from "@/src/lib/cmsApi";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const CaseStudyCard = ({ caseStudy, activeTab }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [titleHeight, setTitleHeight] = useState(0);
  const titleRef = useRef(null);

  // Get image URL using CMS API helper
  const getImageUrl = () => {
    return cmsApi.getFeaturedImage(caseStudy) || "";
  };

  // Get title from different API structures
  const getTitle = () => {
    if (typeof caseStudy.title === "object") {
      return caseStudy.title.rendered || caseStudy.title;
    }
    return caseStudy.title;
  };

  // Measure title height to determine if card needs expansion
  useEffect(() => {
    const measureHeight = () => {
      if (titleRef.current) {
        titleRef.current.style.display = "-webkit-box";
        titleRef.current.style.webkitLineClamp = "unset";
        const fullHeight = titleRef.current.scrollHeight;
        titleRef.current.style.webkitLineClamp = "3";
        setTitleHeight(fullHeight);
      }
    };
    const timer = setTimeout(measureHeight, 100);
    return () => clearTimeout(timer);
  }, [caseStudy]);

  // Format date like in BlogCard
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
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Get publish date from different API structures
  const getPublishDate = () => {
    if (caseStudy.acf?.completion_date)
      return formatDate(caseStudy.acf.completion_date);
    if (caseStudy.acf?.project_date)
      return formatDate(caseStudy.acf.project_date);
    if (caseStudy.date) return formatDate(caseStudy.date);
    return formatDate(new Date()); // fallback
  };

  // Create case study URL
  const getCaseStudyUrl = () => `/case-studies/${caseStudy.slug}`;

  // Get industry from different API structures
  const getIndustry = () => {
    if (caseStudy.acf?.industry) return caseStudy.acf.industry;
    if (
      caseStudy._embedded &&
      caseStudy._embedded["wp:term"] &&
      caseStudy._embedded["wp:term"][0]
    ) {
      const categoryTerms = caseStudy._embedded["wp:term"][0];
      if (Array.isArray(categoryTerms) && categoryTerms.length > 0) {
        return categoryTerms[0].name || "Manufacturing";
      }
    }
    return "Manufacturing";
  };

  // Get industry background color
  const getIndustryColor = () => {
    const industry = getIndustry().toUpperCase();
    const colorMap = {
      LOGISTICS: "#000",
      MANUFACTURING: "#000",
      TECHNOLOGY: "#000",
      RETAIL: "#000",
      HEALTHCARE: "#000",
      FINANCE: "#000",
      DEFAULT: "#000",
    };
    return colorMap[industry] || colorMap["DEFAULT"];
  };

  const IMAGE_HEIGHT = 410;
  const uniformContentHeight = 240;

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 768;

  const handleCardClick = (e) => {
    if (!isMobile()) return;
    e.preventDefault();
    e.stopPropagation();
    window.location.href = getCaseStudyUrl();
  };

  return (
    <div
      className="group cursor-pointer bg-white border-b border-[#c3c3c3] md:border-b-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <Link href={getCaseStudyUrl()}>
        <div className="relative overflow-hidden bg-white border border-[#c3c3c3] max-w-full">
          {/* Image */}
          <div className="relative w-full h-[250px] overflow-hidden">
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
            {/* Industry tag */}
            <div
              className="absolute top-[16px] left-[16px] px-[12px] py-[8px] flex items-center justify-center"
              style={{ backgroundColor: getIndustryColor() }}
            >
              <span className="bw-m text-[10px] md:text-[11px] text-white uppercase tracking-[1px] leading-none">
                {getIndustry()}
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className="relative px-[16px] py-[20px] flex flex-col"
            style={{ height: `${uniformContentHeight}px` }}
          >
            {/* Date */}
            <div className="w-auto h-[24px] flex items-center gap-[5px] my-[2px]">
              <Image
                src="/calendaricon.svg"
                alt="Calendar"
                width={24}
                height={24}
                className="text-[#6d6d6d]"
              />
              <span className="bw-m text-[16px] leading-[20px] text-[#6d6d6d]">
                {getPublishDate()}
              </span>
            </div>

            <div className="flex-1" />

            {/* Title */}
            <div className="absolute left-[16px] right-[16px] bottom-[22px]">
              <h3
                ref={titleRef}
                className={`bw-m text-[24px] leading-[30px] text-[#000000] transition-all duration-300 ease-out [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden ${
                  isHovered ? "-translate-y-[80px]" : "translate-y-0"
                }`}
                style={{ display: "-webkit-box" }}
              >
                {getTitle()}
              </h3>
            </div>

            {/* Read More */}
            <div
              className={`absolute left-[16px] right-[16px] transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{ bottom: "16px" }}
            >
              <div className="w-[157px] h-[56px] flex items-center justify-center cursor-pointer bg-transparent border border-black">
                <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
                  READ MORE
                </span>
                <span className="md:w-[23px] w-5 h-5 md:h-[23px] ml-1 flex items-center justify-center">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src="/blackexternal.svg"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Mobile divider */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-[#c3c3c3] pointer-events-none" />
        </div>
      </Link>
    </div>
  );
};

export default CaseStudyCard;

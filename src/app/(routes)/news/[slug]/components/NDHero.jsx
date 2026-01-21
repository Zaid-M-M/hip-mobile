"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import cmsApi from "@/src/lib/cmsApi";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

// Breathing skeleton component using Tailwind's animate-pulse
const BreathingSkeleton = ({ className = "" }) => (
  <div className={`bg-gray-200 rounded animate-pulse ${className}`} />
);

const NDHero = ({ slug }) => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await cmsApi.getNewNewsBySlug(slug);

        if (result?.success && result.data) {
          setNews(result.data);
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      }
      setLoading(false);
    };

    if (slug) fetchNews();
  }, [slug]);

  const getImageUrl = () => {
    return news?.acf?.m_news_image || "";
  };

  if (loading) {
    return (
      <div className="w-full pt-[45px] pb-0 bg-white">
        <div className="fix">
          {/* Breadcrumb Skeleton */}
          <div className="mb-0 flex items-center space-x-2">
            <BreathingSkeleton className="h-5 w-16" />
            <span className="text-gray-400">/</span>
            <BreathingSkeleton className="h-5 w-16" />
          </div>

          {/* Title and Abstract Pattern Skeleton */}
          <div className="mt-[15px] mb-[50px]">
            <BreathingSkeleton className="h-[66px] w-4/5 max-w-[800px] mb-5" />
            <BreathingSkeleton className="h-[58px] w-[210px]" />
          </div>

          {/* Hero Image Skeleton */}
          <BreathingSkeleton className="w-full h-[150px] md:h-[600px] lg:h-[700px] mb-[45px] md:mb-[125px]" />
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="w-full pt-[45px] pb-[45px] bg-white">
        <div className="fix text-center">
          <div className="bw-r text-[18px] text-[#666666]">
            Content not found
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-[45px] pb-0 bg-white">
      <div className="fix">
        {/* Breadcrumb */}
        <div className="mb-0">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/media" },
            ]}
            color="#000000"
          />
        </div>

        {/* Title with Abstract Pattern */}
        <div className="mt-[15px] mb-[50px]">
          <h1
            className="bw-r text-[28px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] 
            tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] mb-2 lg:mb-[20px] text-[#000000]"
            dangerouslySetInnerHTML={{
              __html: news?.title?.rendered || news?.title || "",
            }}
          />
          <img
            src="/abstract_pattern.svg"
            alt="Abstract Pattern"
            className="abstract_svg"
          />
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden mb-[45px] md:mb-[50px]">
          <Image
            src={formatMediaUrl(getImageUrl())}
            priority
            unoptimized // ← Must be true
            alt={news?.title?.rendered || "News Image"}
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-auto"
            onError={(e) => (e.currentTarget.src = "")}
          />
        </div>
      </div>
    </div>
  );
};

export default NDHero;

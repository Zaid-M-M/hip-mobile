"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ParkCard from "./ParkCard";

// State category map for /parks (Industrial & Logistics Parks)
const categoryMap = {
  delhi: 61,
  gujarat: 60,
  maharashtra: 57,
  goa: 5,
  telangana: 58,
  karnataka: 56,
  "tamil-nadu": 59,
  haryana: 55,
};

// InCity category map for /incity_parks
export const incityCategoryMap = {
  NCR: 2,
  maharashtra: 57,
  gujarat: 3,
  karnataka: 56,
  telangana: 6,
  tamilnadu: 59,
  goa: 5,
};

const ParksSliderF = () => {
  const params = useParams();
  const slug = params?.slug;
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [threshold, setThreshold] = useState(3);

  // THESE ARE THE SLUGS TO HIDE
  const EXCLUDED_SLUGS = [
    "warehousing-park-delhi-i",
    "warehousing-park-delhi-ii",
  ];

  // Map slug to InCity key
  const getIncityKey = (slug) => {
    if (slug === "delhi") return "NCR";
    return slug.replace(/-/g, "");
  };

  // Responsive threshold
  useEffect(() => {
    const updateThreshold = () => {
      const width = window.innerWidth;
      if (width < 640) setThreshold(1);
      else if (width < 1280) setThreshold(3);
      else setThreshold(4);
    };

    updateThreshold();
    window.addEventListener("resize", updateThreshold);
    return () => window.removeEventListener("resize", updateThreshold);
  }, []);

  // Fetch parks
  useEffect(() => {
    if (!slug) return;

    const fetchAllParks = async () => {
      setLoading(true);
      let industrialParks = [];
      let incityParks = [];

      // Fetch Industrial Parks
      const industrialCategoryId = categoryMap[slug];
      if (industrialCategoryId) {
        try {
          const res = await fetch(
            `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks?categories=${industrialCategoryId}`,
            { cache: "no-store" }
          );
          if (res.ok) {
            const data = await res.json();
            industrialParks = data.map((park) => ({
              id: park.id,
              title: park.acf?.park_name || "Unnamed Park",
              incity_city_name: park.acf?.incity_city_name,
              slug: park.slug,
              status: park.acf?.construction_status || "Unknown",
              statusColor:
                (park.acf?.construction_status || "").toLowerCase() === "active"
                  ? "text-[#0db14b]"
                  : "text-[#f47920]",
              image: park.acf?.park_spotlight_new_image || "/state/test.png",
              area: park.acf?.land_area?.replace(/<[^>]+>/g, "") || "",
              potential:
                park.acf?.development_potential?.replace(/<[^>]+>/g, "") || "",
              usage: park.acf?.land_usage || "",
              certification: park.acf?.igbc_status || "",
              isIncity: false,
            }));
          }
        } catch (error) {
          console.error("Error fetching industrial parks:", error);
        }
      }

      // Fetch InCity Centers
      const incityKey = getIncityKey(slug);
      const incityCategoryId = incityCategoryMap[incityKey];
      if (incityCategoryId) {
        try {
          const res = await fetch(
            `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/incity_parks?categories=${incityCategoryId}`,
            { cache: "no-store" }
          );
          if (res.ok) {
            const data = await res.json();
            incityParks = data.map((park) => ({
              id: park.id,
              title: park.acf?.incity_name || "Unnamed InCity Centers",
              incity_city_name: park.acf?.incity_city_name,
              slug: park.slug,
              status: park.acf?.incity_construction_status || "Unknown",
              statusColor:
                (park.acf?.incity_construction_status || "").toLowerCase() ===
                "active"
                  ? "text-[#0db14b]"
                  : "text-[#f47920]",
              image: park.acf?.incity_spotlight_image || "/state/test.png",
              area: park.acf?.incity_land_area?.replace(/<[^>]+>/g, "") || "",
              potential:
                park.acf?.incity_development_potential?.replace(
                  /<[^>]+>/g,
                  ""
                ) || "",
              usage: park.acf?.incity_land_usage || "",
              certification: park.acf?.incity_igbc_status || "",
              isIncity: true,
            }));
          }
        } catch (error) {
          console.error("Error fetching incity_parks:", error);
        }
      }

      // Combine and dedupe
      const combined = [...industrialParks, ...incityParks];
      const uniqueParks = Array.from(
        new Map(combined.map((p) => [p.id, p])).values()
      );

      // FILTER OUT EXCLUDED PARKS HERE (before rendering)
      const filteredParks = uniqueParks.filter(
        (park) => !EXCLUDED_SLUGS.includes(park.slug)
      );

      setParks(filteredParks);
      setLoading(false);
    };

    fetchAllParks();
  }, [slug]);

  // Skeleton Loader
  const SkeletonLoader = () => (
    <div className="flex flex-col h-fit w-full animate-pulse">
      <div className="h-[200px] w-full bg-gray-200" />
      <div className="flex flex-col py-7 px-4 bg-white border border-gray-200 mt-0 space-y-3">
        <div className="h-5 w-3/4 bg-gray-200"></div>
        <div className="h-4 w-1/2 bg-gray-200"></div>
        <div className="h-4 w-2/3 bg-gray-200"></div>
        <div className="h-4 w-1/3 bg-gray-200"></div>
        <div className="h-4 w-1/4 bg-gray-200"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center overflow-hidden">
        <SkeletonLoader />
      </div>
    );
  }

  if (!parks.length) return null;

  const renderContent = () => {
    if (parks.length <= threshold) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 1440:grid-cols-4 gap-0 w-full">
          {parks.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      );
    }

    return (
      <>
        <Swiper
          modules={[Navigation]}
          className="state-swiper w-full max-w-full"
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 1 },
            1280: { slidesPerView: 3, slidesPerGroup: 1 },
            1440: { slidesPerView: 4, slidesPerGroup: 1 },
          }}
        >
          {parks.map((park) => (
            <SwiperSlide key={park.id}>
              <ParkCard park={park} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center mt-5 lg:mt-10 gap-4 h-10 lg:h-20 w-full">
          <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
            <img src="/state/stateprev.svg" alt="Prev" />
          </button>
          <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
            <img src="/state/statenext.svg" alt="Next" />
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="w-full flex flex-col overflow-hidden">
      {renderContent()}
    </div>
  );
};

export default ParksSliderF;

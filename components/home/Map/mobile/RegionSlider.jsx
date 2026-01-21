import RegionCard from "./RegionCard";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import Link from "next/link";

export const RegionSlider = ({
  parks = [],
  regionName,
  isRegionSelected,
  highlightedRegions,
  activeRegionId,
  type,
}) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.slideTo(0);
  }, [parks]);

  const hasParks = parks.length > 0;

  const parkCount = activeRegionId
    ? highlightedRegions?.[activeRegionId]?.locations?.length || 0
    : type === "incity"
      ? 17
      : type === "industrial"
        ? 28
        : Object.values(highlightedRegions || {}).reduce(
            (sum, region) => sum + (region.locations?.length || 0),
            0,
          );

  const overviewLabel = activeRegionId
    ? `${highlightedRegions?.[activeRegionId]?.label || regionName} Overview`
    : type === "incity"
      ? "InCity Centers"
      : type === "industrial"
        ? "Industrial & Logistics Parks"
        : "Network Overview";

  const overviewHref = activeRegionId
    ? highlightedRegions?.[activeRegionId]?.slug || "/network-overview/"
    : type === "incity"
      ? "/incity-centers/"
      : type === "industrial"
        ? "/industrial-logistics-parks/"
        : "/network-overview/";

  return (
    <div className="mt-0">
      {/* Main content area — relative so placeholder can cover it */}
      <div className="relative mt-0 min-h-[180px]">
        {isRegionSelected ? (
          <>
            {hasParks ? (
              <div>
                <div className="flex items-center justify-end pt-0 gap-2.5 mb-4">
                  {isRegionSelected && (
                    <h3 className="text-2xl flex-1 text-white bw-sb">
                      {regionName}
                      {parks.length >= 2 && <br />}
                      Parks
                    </h3>
                  )}
                  <button
                    className={`sbp flex items-center border border-[#2E373A] p-3 justify-center transition-opacity duration-300 ${
                      hasParks ? "opacity-100" : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!hasParks}
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <ArrowLeft size={24} color="white" />
                  </button>
                  <button
                    className={`sbn flex items-center justify-center transition-opacity border border-[#2E373A] p-3 duration-300 ${
                      hasParks ? "opacity-100" : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!hasParks}
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <ArrowRight size={24} color="white" />
                  </button>
                </div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".sbp",
                    nextEl: ".sbn",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="mb-[25px]"
                >
                  {parks.map((park, idx) => (
                    <SwiperSlide
                      key={idx}
                      style={
                        idx === parks.length - 1 ? { paddingRight: "0px" } : {}
                      }
                    >
                      <RegionCard park={park} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <p className="text-white/70 text-lg mt-6">
                No parks available in this region.
              </p>
            )}
          </>
        ) : (
          /* Default state — "Click on location pins" placeholder */
          <div className="absolute inset-0 bg-[#212324] flex flex-col items-center justify-start gap-[22px] text-sm text-gray-400 z-10">
            <div className="flex items-center justify-center pt-[22px] gap-[12px] text-gray-400">
              <hr className="w-[40%] border-t border-gray-500" />
              <span className="bw-l text-[20px] leading-[20px]">OR</span>
              <hr className="w-[40%] border-t border-gray-300" />
            </div>
            <div className="bg-[#2E373A] px-[5px] py-[5px] rounded-[5px]">
              <img
                src="/home/map/cursor.png"
                width={24}
                height={24}
                alt="cursor"
              />
            </div>
            <span className="bw-m text-[20px] leading-[24px]">
              Click on location pins
            </span>
          </div>
        )}
      </div>
      {/* ALWAYS SHOW THIS SECTION — moved outside the conditional */}
      <div className="flex mb-5 gap-[14px] mt-[9px]">
        <div className="relative w-[110px] z-50 aspect-square">
          <img
            src="/home/map/pattern.webp"
            alt="Park Numbers"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
            <div className="text-[38px] font-bold bw-r text-white leading-none">
              {parkCount}
            </div>
            <div className="text-[14px] bw-r text-white/80 mt-[0px]">Parks</div>
          </div>
        </div>
        <div className="w-full h-[78px] z-50 bg-[#1A1A1A] flex items-end pb-[16px] pl-[15px] pr-[15px] justify-end">
          <Link href={overviewHref} className="flex items-center gap-2 ">
            <p
              dangerouslySetInnerHTML={{
                __html: overviewLabel,
              }}
              className="text-[16px] bw-m text-white/80 hover:text-white transition-colors"
            />
            <img src="/home/map/whitearr.svg" alt="Go" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

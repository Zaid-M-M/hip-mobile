"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import TransitionLink from "@/src/app/TransitionLink";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const HorizonRegion = ({ data = [] }) => {
  const swiperRef = useRef(null);

  if (!data || data.length === 0) return null; // nothing to show

  // Ensure Swiper navigation updates after data is rendered
  useEffect(() => {
    if (data.length > 0 && swiperRef.current) {
      const attemptNavigationInit = () => {
        const swiper = swiperRef.current;
        const prevButton = document.querySelector(".custom-prev");
        const nextButton = document.querySelector(".custom-next");

        if (swiper && prevButton && nextButton && swiper.navigation) {
          try {
            swiper.navigation.update();
          } catch (e) {
            // Fallback in case update fails
            console.error("Navigation update failed:", e);
          }
        } else {
          // Retry after a short delay if buttons are not yet in DOM
          setTimeout(attemptNavigationInit, 50);
        }
      };

      // Start the initialization attempt immediately
      attemptNavigationInit();
    }
  }, [data]);

  return (
    <div className="bg-white py-[45px] lg:py-[100px] overflow-hidden relative">
      <img
        className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px] md:left-auto  right-[-80px] md:top-[0px] lg:top-[-120px] xl:right-[-180px] 1920:right-[-50px]"
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px]  md:left-auto right-[0px] md:top-[-80px] lg:top-[-120px] xl:right-[100px] 1920:right-[100px]"
        src="/orange_vector.svg"
      />
      <div className="fixup pb-5 lg:pb-[50px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[10px] md:gap-[17px]">
            <h2 className="bw-m text-[35px] md:text-[45px] xl:text-[64px] xl:leading-[64px] tracking-[-0.04em] leading-[45px] md:leading-[55px]">
              Horizon
            </h2>
            <img
              src="/abstract_pattern.svg"
              className="abstract_svg "
              alt="Grade A Box"
            />
          </div>
          <h3 className="bw-r text-[35px] md:text-[45px] leading-[45px] md:leading-[55px] tracking-[-0.04em]  xl:text-[64px] xl:leading-[64px]">
            in Other Regions
          </h3>
        </div>
      </div>

      <div className="w-full flex flex-col overflow-hidden">
        {/* Swiper */}
        {/* <Swiper
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView="auto"
          className="state-swiper w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
            1920: { slidesPerView: 6 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store Swiper instance
          }}
        > */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView="auto"
          className="state-swiper w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            // 1536: { slidesPerView: 5 },
            1920: { slidesPerView: 5 },
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          onBeforeInit={(swiper) => {
            // Manually assign elements to navigation before init
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.params.navigation.nextEl = ".custom-next";
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((region, idx) => (
            <SwiperSlide key={region.name || idx}>
              <TransitionLink
                // href={region.url || "#"}
                href={`/${region.url || "#"}`}
                className={`flex flex-col h-full group w-full border border-[rgba(0,0,0,0.20)] ${
                  idx !== 0 ? "border-l-0" : ""
                }`}
              >
                {/* Image */}
                <div className="h-[360px] overflow-hidden w-full">
                  <img
                    src={formatMediaUrl(region.image)}
                    priority
                    unoptimized // ← Must be true
                    alt={region.alt || region.name}
                    className="w-full group-hover:scale-110 transition duration-500 h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-10 h-[86px] flex items-center justify-between">
                  <h2 className="bw-m text-[28px] leading-[28px]">
                    {region.name}
                  </h2>
                  <div className="h-[24px] w-[24px]">
                    <img
                      src="/blackarr.png"
                      alt="arrow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TransitionLink>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons in normal flow */}
        <div className="flex items-center mt-5 lg:mt-10 gap-4 h-10 lg:h-20 w-full pl-[max(5%,calc((100vw-1340px)/2))]">
          <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-[rgba(0,0,0,0.20)] bg-white flex items-center justify-center">
            <img src="/state/stateprev.svg" alt="Prev" />
          </button>
          <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-[rgba(0,0,0,0.20)] bg-white flex items-center justify-center">
            <img src="/state/statenext.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizonRegion;

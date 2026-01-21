"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import TestCard from "./TestCard";

export default function TestTest({ testimonials = [] }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      id="testtest"
      className="relative lg:!block !hidden fixup min-h-[560px] xl:min-h-[600px] 2xl:min-h-[620px]"
    >
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(s) => {
          swiperRef.current = s;
          setActiveIndex(s.activeIndex);
        }}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={50}
        speed={700}
        loop={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full min-h-[560px] xl:min-h-[600px] 2xl:min-h-[620px]"
      >
        {testimonials.map((testimonial, i) => {
          const isLeftActive = i === activeIndex;
          const isRightNeighbor = i === activeIndex + 1;
          const visible = isLeftActive || isRightNeighbor;

          return (
            <SwiperSlide key={testimonial.id} className="">
              <div className="w-full min-h-full !relative z-[-1] flex items-start">
                <motion.div
                  initial={false}
                  animate={{
                    scale: i === activeIndex ? 1 : 0.55,
                    y: i === activeIndex ? 0 : "-22.5%",
                  }}
                  transition={{
                    scale: { duration: 0.7, ease: [0.7, 0, 0.4, 1] },
                    y: { duration: 0.7, ease: [0.7, 0, 0.4, 1] },
                    opacity: { duration: 0.7, ease: "easeInOut" },
                  }}
                  style={{
                    pointerEvents: visible ? "auto" : "none",
                  }}
                  className="1024:min-w-[560px] 1280:min-w-[700px] 1366:min-w-[750px] 1440:min-w-[780px] 2xl:min-w-[820px] 1920:min-w-[850px] min-h-full p-0"
                >
                  <TestCard
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    quote={testimonial.quote}
                    logo={testimonial.logo}
                    video={testimonial.video}
                    thumbnail={testimonial.thumbnail}
                    isActive={i === activeIndex}
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Buttons */}
      <div className="flex items-center justify-end fixup absolute bottom-0 right-0 z-[10000]">
        <button
          ref={prevRef}
          className="cursor-pointer bg-[#fff] mr-6 w-10 h-10 md:w-[80px] md:h-[80px] border border-black/20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <path
              d="M34.0007 18.0002H1.82738"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.9141 34.0869L1.82738 18.0002L17.9141 1.91355"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="cursor-pointer bg-[#fff] w-10 h-10 md:w-[80px] md:h-[80px] border border-black/20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
          >
            <path
              d="M0.999257 17.9998H33.1726"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.0859 1.91309L33.1726 17.9998L17.0859 34.0864"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

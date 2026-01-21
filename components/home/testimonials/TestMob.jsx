"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import TestCard from "./TestCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestMob = ({ testimonials = [] }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="!block lg:!hidden fixup">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: ".test-prev",
          nextEl: ".test-next",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={t.id || idx}>
            <TestCard {...t} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + View All */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-3">
          <button
            className={`test-prev flex border border-black/20 w-12 h-12 items-center justify-center ${
              isBeginning ? "opacity-40 cursor-not-allowed" : ""
            }`}
            disabled={isBeginning}
          >
            <ArrowLeft size={24} strokeWidth={1} />
          </button>
          <button
            className={`test-next flex border border-black/20 w-12 h-12 items-center justify-center ${
              isEnd ? "opacity-40 cursor-not-allowed" : ""
            }`}
            disabled={isEnd}
          >
            <ArrowRight size={24} strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestMob;

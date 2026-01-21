"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
import CaseStudyCard from "../CaseStudiesContent/CaseStudyCard";

const RelatedCaseStudiesMobile = ({ caseStudies }) => {
  return (
    <div className="mt-5 md:!hidden block relative">
      {caseStudies.length < 2 ? (
        // STATIC MODE - When less than 2 case studies
        <AnimatePresence mode="wait">
          <div
            key="static-mobile-casestudies"
            className="mb-12"
          >
            <div className="flex justify-center items-center">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="w-full">
                  <CaseStudyCard caseStudy={caseStudy} activeTab="Case Studies" />
                  {/* Ensure bottom divider visible on mobile */}
                  <div className="md:hidden h-px bg-[#c3c3c3]" />
                </div>
              ))}
            </div>
          </div>
        </AnimatePresence>
      ) : (
        // SLIDER MODE - When 2 or more case studies
        <div className="w-full">
          <Swiper
            key="swiper-casestudies"
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next-casestudies",
              prevEl: ".custom-prev-casestudies",
            }}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={1}
            className="w-full"
          >
            {caseStudies.map((caseStudy) => (
              <SwiperSlide key={caseStudy.id}>
                <AnimatePresence mode="wait">
                  <div
                    key={caseStudy.id}
                    className="relative pb-[1px]"
                  >
                    <CaseStudyCard caseStudy={caseStudy} activeTab="Case Studies" />
                    {/* Mobile-only divider to avoid clipping by swiper overflow */}
                    <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-[#c3c3c3]" />
                  </div>
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation */}
          <div className="flex items-center justify-end !mt-5 !mb-12 gap-4 h-10 w-full">
            <button className="custom-prev-casestudies cursor-pointer h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/stateprev.svg" alt="Prev" />
            </button>
            <button className="custom-next-casestudies cursor-pointer h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/statenext.svg" alt="Next" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedCaseStudiesMobile;
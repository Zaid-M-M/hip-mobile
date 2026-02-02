"use client";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function NewAwardSlider({ awards }) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={{
        nextEl: ".custom-next-blogs",
        prevEl: ".custom-prev-blogs",
      }}
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className=""
    >
      {awards.map((award, index) => {
        const images = Array.isArray(award.images)
          ? award.images
          : [award.images];

        return (
          <SwiperSlide key={index} className="pr-[1px]">
            <div className="w-full h-[500px] relative bg-white border border-[#CDCDCD] overflow-hidden">
              <img
                src="/brand_journey/cardel.svg"
                alt="Card element"
                className="h-[50px] w-[50px] absolute top-0 right-0 z-20"
              />
              {/* Image */}
              <div className="w-[80%] mx-auto h-[360px] flex items-center overflow-hidden justify-center">
                {images.length > 1 ? (
                  <Swiper
                    modules={[Autoplay]}
                    speed={800}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    className="w-full h-full"
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          className="w-full h-[360px] mx-auto"
                          src={img}
                          alt="award"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img
                    className="w-full h-[360px]"
                    src={images[0]}
                    alt="award"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex items-center flex-col border-t border-[#CDCDCD] h-[140px] justify-center">
                <h2 className="text-[20px] text-center leading-[26px] bw-m text-[#000] mb-2">
                  {award.title}
                </h2>
                <h5 className="bw-m text-center text-[16px] leading-[22px] text-gray-600">
                  {award.subtitle}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      {/* Navigation buttons */}
      <div className="flex items-center justify-start !mt-9 gap-4 h-fit w-full">
        <button className="custom-prev-blogs cursor-pointer h-12 w-12 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
          <img src="/brand_journey/awprev.svg" alt="Prev" />
        </button>
        <button className="custom-next-blogs cursor-pointer h-12 w-12 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
          <img src="/brand_journey/awnext.svg" alt="Next" />
        </button>
      </div>
    </Swiper>
  );
}

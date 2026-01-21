"use client";
import React, { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function AwardSlider({ awards }) {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="awards_slider"
    >
      {awards.map((award, index) => {
        // 🔹 Prepare images array
        // if award.images is a string → replicate it 3 times
        // else use award.images array directly
        const images = Array.isArray(award.images)
          ? award.images
          : Array.from(
              { length: Math.floor(Math.random() * 4) + 1 }, // random 1–4 images
              () => award.images
            );

        return (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleFlip(index)}
              className="group w-full xl:h-[450px] lg:h-[350px] md:h-[350px] h-[350px] [perspective:1000px] my-[25px]"
            >
              <div
                className={`relative w-[99.8%] h-full duration-700 [transform-style:preserve-3d] px-[15px]
                  ${flippedIndex === index ? "[transform:rotateY(180deg)]" : ""}
                  group-hover:[transform:rotateY(180deg)]
                `}
              >
                {/* Front */}
                <div className="absolute left-0 w-full h-full bg-white flex items-center justify-center backface-hidden border border-[#CDCDCD] flex-col cursor-pointer text-center px-[10px] md:px-[20px]">
                  <h2 className="text-[24px] leading-[32px] md:leading-[35px] md:text-[24px] xl:text-[28px] bw-m text-[#000] mb-[8px]">
                    {award.title}
                  </h2>
                  <h5 className="bw-m text-[18px] lg:text-[18px] xl:text-[20px] leading-[25px] xl:leading-[29px] xl:mb-[5px] 1440:mt-[10px] xl:mt-[0px]">
                    {award.subtitle}
                  </h5>
                  <p className="bw-r text-[15px] lg:text-[15px] xl:text-[15px] leading-[20px] xl:leading-[24px]">
                    {award.description}
                  </p>
                  <img
                    src="/brand_journey/flip_icon.svg"
                    className="absolute top-0 right-0"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(99%) sepia(3%) saturate(888%) hue-rotate(339deg) brightness(91%) contrast(90%)",
                    }}
                    alt="flip icon"
                  />
                </div>

                {/* Back */}
                <div className="absolute left-0 w-full h-full bg-white flex items-center justify-center [transform:rotateY(180deg)] border border-[#CDCDCD] backface-hidden flex-col cursor-pointer overflow-hidden">
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
                            className="absolute bottom-0 w-[75%] left-1/2 -translate-x-1/2"
                            src={img}
                            alt="award"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <img
                      className="absolute bottom-0 w-[75%] left-1/2 -translate-x-1/2"
                      src={images[0]}
                      alt="award"
                    />
                  )}
                  <img
                    src="/brand_journey/flip_icon.svg"
                    className="absolute top-0 right-0"
                    alt="flip icon"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      {/* Navigation buttons */}
      <div className="swiper-button-prev !text-black !left-0" />
      <div className="swiper-button-next !text-black !right-0" />
    </Swiper>
  );
}

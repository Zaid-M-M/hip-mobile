"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const awards = [
  {
    title: "Frontiers of Grade A Industrial Parks",
    subtitle:
      "10th edition of the CII IL Supply Chain and Logistics Excellence (SCALE) Awards",
    image: "/brand_journey/award_img.png",
  },
  {
    title: "Fastest Growing Industrial and Logistic Park",
    subtitle: "15th Express Logistics & Supply Chain Awards",
    image: "/brand_journey/awards/2023/fast_growing_2023.png",
  },
];

export default function Awrd_2023() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          // when window width is >= 320px (mobile)
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 768px (tablet)
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 3,
          },
        }}
        className="awards_slider"
      >
        {/* <SwiperSlide>
          <h2>Slide 1</h2>
        </SwiperSlide> */}

        {awards.map((award, index) => (
          <SwiperSlide>
            <div
              key={index}
              onClick={() => handleFlip(index)}
              className="group w-full xl:h-[425px] lg:h-[350px] md:h-[425px] h-[350px] 3xl:h-[200px] [perspective:1000px] my-[25px]"
            >
              <div
                className={`relative md:w-full lg:w-[99.8%] w-[99.8%] h-full duration-700 [transform-style:preserve-3d] px-[15px]
                  ${flippedIndex === index ? "[transform:rotateY(180deg)]" : ""}
                  group-hover:[transform:rotateY(180deg)]
                `}
              >
                {/* Front */}
                <div className="absolute left-0 w-full h-full bg-white flex items-center justify-center backface-hidden border border-[#CDCDCD] flex-col ml-[0px] md:ml-[1px] 1280:ml-[0px] 1920:ml-[1px] cursor-pointer text-center  md:px-[20px] px-[10px]">
                  <h2 className="text-[28px] leading-[35px] lg:text-[24px] lg:leading-[34px] xl:text-[28px] xl:leading-[35px] bw-m text-[#000] text-center mb-[8px]">
                    {award.title}
                  </h2>
                  <p className="bw-r text-[15px] leading-[20px] lg:text-[15px] xl:text-[19px] xl:leading-[29px]">
                    {award.subtitle}
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
                <div className="absolute left-0 w-full h-full bg-white z-10 text-white flex items-center justify-center [transform:rotateY(180deg)] border border-[#CDCDCD] backface-hidden flex-col ml-[0px] md:ml-[1px] 1280:ml-[0px] 1920:ml-[-1px] cursor-pointer">
                  <img
                    className="absolute top-[auto] bottom-0 w-[75%]"
                    src={award.image}
                    alt="award"
                  />
                  {/* <h2 className="text-[28px] leading-[35px] lg:text-[24px] lg:leading-[34px] xl:text-[28px] xl:leading-[35px] bw-m text-[#000] text-center mb-[8px]">
                    {award.title}
                  </h2> */}
                  <img
                    src="/brand_journey/flip_icon.svg"
                    className="absolute top-0 right-0"
                    alt="flip icon"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Add these navigation buttons outside SwiperSlide */}
        <div className="swiper-button-prev !text-black !left-0" />
        <div className="swiper-button-next !text-black !right-0" />
      </Swiper>
    </>
  );
}

{
  /* <div className="flex items-center justify-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8">

          {awards.map((award, index) => (

            <div
              key={index}
              className="group w-full h-[425px] 3xl:h-[200px] [perspective:1000px]"

            >
              <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] px-[15px]">

                <div className="absolute left-0 w-full h-full bg-white flex items-center justify-center backface-hidden border border-[#CDCDCD] flex-col">
                  <h2 className="text-[30px] bw-m leading-[36px] text-[#000] text-center mb-[8px]">
                    {award.title}
                  </h2>
                  <p className="bw-r text-[20px] leading-[22px]">
                    {award.subtitle}
                  </p>
                  <img
                    src="/brand_journey/flip_icon.svg"
                    className="absolute top-0 right-0"
                    alt="flip icon"
                  />
                </div>

     
                <div className="absolute left-0 w-full h-full text-white flex items-center justify-center [transform:rotateY(180deg)] border border-[#CDCDCD] backface-hidden flex-col">
                  <img src={award.image} alt="award" />
                  <h2 className="text-[30px] bw-m leading-[36px] text-[#000] text-center mb-[8px]">
                    {award.title}
                  </h2>
                </div>
              </div>
            </div>

          ))}


        </div>
      </div> */
}

"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const sec2_data = [
  {
    image: "/sector_specialist/slide1.jpg",
  },
  {
    image: "/sector_specialist/slide2.jpg",
  },
  {
    image: "/sector_specialist/slide3.jpg",
  },
  {
    image: "/sector_specialist/slide4.jpg",
  }
];


const SS_sec2 = () => {

  return (
    <div className=" bg-[#000] pt-[45px] pb-[120px] md:pt-[0px] md:pb-[0px] px-[20px] md:pr-[0px] 1280:pl-[65px] 1366:pl-[70px] 1440:pl-[80px] 1536:pl-[100px] 1600:pl-[130px] 1920:pl-[283px] md:pl-[50px]">
      <div className="flex md:flex-row flex-col">

        <div className="xl:py-[105px] lg:py-[60px] md:pr-[30px] md:pt-[30px] md:pb-[70px] lg:pr-[100px] xl:pr-[170px] flex-1 mb-[40px] xl:mb-[0px]">

          <p className="bw-r xl:text-[20px] md:text-[16px] md:leading-[26px] lg:leading-[30px]  md:mb-[15px] mb-[15px] text-[#E0E0E0]">Today, over <span className="bw-b text-[24px] text-[#f47920] leading-[30px]">50%</span> developments delivered by Horizon are tailored Build-to-Suit (BTS). These numbers reflect more than the volume or technical capability—they show our commitment to sector-specific, responsive design.</p>

          <p className="bw-r xl:text-[20px] md:text-[16px] md:leading-[26px] lg:leading-[30px] text-[#E0E0E0]">Where needed, we also offer temporary space solutions to help customers manage seasonal surges—because we understand that flexibility isn't a feature; it is a necessity.</p>
        </div>

        <div className="flex-1 md:max-w-1/2 relative">
          <div className="h-[100%] sector_slider">
            <Swiper
              slidesPerView={1.2}
              speed={600} // smooth slide transition (ms)
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}

              modules={[Navigation]}
              breakpoints={{
                // when window width is >= 320px (mobile)
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 768px (tablet)
                768: {
                  slidesPerView: 1,
                },
                // when window width is >= 1024px (desktop)
                1024: {
                  slidesPerView: 1,
                },
                1270: {
                  slidesPerView: 1.2,
                },
              }}
              style={{ maxWidth: "100%", height: "100%", position: "unset" }}
            >
              {sec2_data.map((sec2_data, index) => (
                <SwiperSlide>
                  <div key={index} className="h-[100%]">
                    <img src={sec2_data.image} className="h-[100%] object-cover"></img>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev !text-black invert" />
              <div className="swiper-button-next !text-black invert" />
            </Swiper>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SS_sec2;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
import SPCard from "./SPCard";

const DeskMDS = ({
  activeTab,
  delhiParks = [],
  ahmedabadParks = [],
  puneParks = [],
  goaParks = [],
  hyderabadParks = [],
  bengaluruParks = [],
  chennaiParks = [],
}) => {
  const parksByTab = [
    delhiParks,
    ahmedabadParks,
    puneParks,
    goaParks,
    hyderabadParks,
    bengaluruParks,
    chennaiParks,
  ];

  const currentParks = parksByTab[activeTab] || [];

  return (
    <div className="mt-8 xl:!block !hidden lg:mt-[50px] relative">
      {currentParks.length === 0 ? (
        <p className="text-center w-full">No parks found.</p>
      ) : currentParks.length <= 4 ? (
        // STATIC RENDER MODE with Swiper-matched widths
        <div className="flex justify-start gap-0 w-full">
          {currentParks.map((park) => (
            <div
              key={park.id}
              className={`
                ${
                  currentParks.length === 1
                    ? "w-1/4"
                    : currentParks.length === 2
                    ? "w-1/4"
                    : currentParks.length === 3
                    ? "w-1/4"
                    : "w-1/4"
                }
                max-w-[25%]
              `}
            >
              <SPCard {...park.acf} slug={park.slug} />
            </div>
          ))}
        </div>
      ) : (
        // SLIDER MODE
        <>
          <>
            <Swiper
              key={activeTab}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              slidesPerView={4}
              breakpoints={{
                1600: { slidesPerView: 4 },
                1280: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                0: { slidesPerView: 2 },
              }}
            >
              {currentParks.map((park) => (
                <SwiperSlide key={park.id}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
                      }}
                    >
                      <SPCard {...park.acf} slug={park.slug} />
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Arrows */}
            <div className="swiper-button-prev-custom absolute top-[25%] left-0 w-[150px] flex items-center justify-start z-10 cursor-pointer bg-[linear-gradient(to_right,white_60%,transparent)]">
              <img
                src="/sector/leftr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt="Prev"
              />
            </div>
            <div className="swiper-button-next-custom absolute top-[25%] right-0 w-[150px] flex items-center justify-end z-10 cursor-pointer bg-[linear-gradient(to_left,white_60%,transparent)]">
              <img
                src="/sector/rightr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt="Next"
              />
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default DeskMDS;

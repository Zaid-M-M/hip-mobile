"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlideCard from "./SlideCard";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import CustomDropdown from "./CustomDropdown";

const categories = [
  "Auto & Auto Components",
  "E-Commerce",
  "Engineering & Aerospace",
  "Logistics",
  "Oil, Energy & Chemicals",
  "Retail",
  "Others",
];

// number of logos per tab folder (tab1 → 3 logos, tab2 → 10 logos, etc.)
const logosPerTab = [9, 6, 4, 15, 3, 7, 5];

const images = categories.flatMap((cat, idx) =>
  Array.from({ length: logosPerTab[idx] }).map((_, i) => ({
    id: `${idx}-${i}`,
    category: cat,
    src: `/sector/clientlogos/tab${idx + 1}/logo${i + 1}.png`,
  }))
);

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab];
  const filtered = images.filter((img) => img.category === activeCategory);

  return (
    <div className="w-full relative pt-[45px] lg:pt-[100px] overflow-hidden">

      <img className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px] md:left-[auto]  md:right-[0px] left-[-80px] md:top-[0px] lg:top-[-120px] xl:left-[-180px] 1920:left-[-50px]" src='/green_vector.svg' />
      <img className="orange_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px]  md:left-[auto] md:right-[0px] left-[0px] md:top-[-80px] lg:top-[-120px] xl:left-[100px] 1920:left-[100px]" src='/orange_vector.svg' />

      {/* Heading */}
      <h2 className="bw-l text-center sec_hd text-[#101828]">
        Brands <span className="bw-m">We Serve</span>
      </h2>

      {/* Tabs */}
      <div className="fix">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:h-[60px] lg:h-[85px] xl:h-[100px] bg-white lg:grid hidden grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border border-[#CDCDCD] md:rounded-2xl lg:rounded-[28px] overflow-hidden mt-6"
        >
          {categories.map((cat, i) => {
            const isActive = i === activeTab;
            return (
              <motion.button
                key={i}
                onClick={() => setActiveTab(i)}
                initial={false}
                animate={{
                  backgroundImage: isActive
                    ? "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)"
                    : "linear-gradient(to right, #ffffff, #ffffff)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={clsx(
                  "relative flex items-center justify-between md:px-[12px] xl:px-[23px] xl:py-[20px] border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none"
                )}
              >
                <div className="flex items-center justify-start w-full gap-2">
                  <motion.h2
                    animate={{ color: isActive ? "#ffffff" : "#000000" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={clsx(
                      "md:text-[16px] w-full text-left xl:text-[20px] 1366:text-[23px] bw-r leading-[32px]"
                    )}
                  >
                    {cat}
                  </motion.h2>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <CustomDropdown
          activeTab={activeTab}
          categories={categories}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Slider */}
      <div className="mt-8 xl:!block !hidden lg:mt-[70px] relative">
        {filtered.length < 5 ? (
          // STATIC MODE
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              key={filtered.map((f) => f.id).join("-")} // unique key
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
              }}
            >
              <div className="flex justify-center items-center flex-wrap">
                {filtered.map((img) => (
                  <div
                    key={img.id}
                    className="flex items-center justify-center border-t border-x border-[#CDCDCD] aspect-square w-[304px]"
                  >
                    <img
                      src={img.src}
                      alt="brand"
                      className="lg:w-auto w-[80%] object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          // SLIDER MODE
          <>
            <Swiper
              key={activeTab} // 🔑 ensures autoplay resets correctly
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              slidesPerView={5}
              className="w-full"
              breakpoints={{
                1280: { slidesPerView: 5 },
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                0: { slidesPerView: 2 },
              }}
            >
              {filtered.map((img) => (
                <SwiperSlide key={img.id}>
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
                      <SlideCard src={img.src} />
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom arrows (only for slider mode) */}
            <div
              className="swiper-button-prev-custom absolute top-[25%] left-0 min-h-[50%] lg:w-[150px] flex items-center justify-start z-10 cursor-pointer"
            >
              <img
                src="/sector/leftr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt=""
              />
            </div>

            <div
              className="swiper-button-next-custom absolute top-[25%] right-0 min-h-[50%] lg:w-[150px] flex items-center justify-end z-10 cursor-pointer"
            >
              <img
                src="/sector/rightr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt=""
              />
            </div>
          </>
        )}
      </div>
      <div className="mt-8 xl:!hidden lg:!block !hidden lg:mt-[70px] relative">
        {filtered.length < 4 ? (
          // STATIC MODE
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              key={filtered.map((f) => f.id).join("-")} // unique key
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
              }}
            >
              <div className="flex justify-center items-center">
                {filtered.map((img) => (
                  <div
                    key={img.id}
                    className="flex items-center justify-center border-t border-x border-[#CDCDCD] aspect-square w-[304px]"
                  >
                    <img
                      src={img.src}
                      alt="brand"
                      className="lg:w-auto w-[80%] object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          // SLIDER MODE
          <>
            <Swiper
              key={activeTab} // 🔑 ensures autoplay resets correctly
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              slidesPerView={5}
              className="w-full"
              breakpoints={{
                1024: { slidesPerView: 4 },
              }}
            >
              {filtered.map((img) => (
                <SwiperSlide key={img.id}>
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
                      <SlideCard src={img.src} />
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom arrows (only for slider mode) */}
            <div
              className="swiper-button-prev-custom absolute top-[25%] left-0 min-h-[50%] lg:w-[150px] flex items-center justify-start z-10 cursor-pointer"
            >
              <img
                src="/sector/leftr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt=""
              />
            </div>

            <div
              className="swiper-button-next-custom absolute top-[25%] right-0 min-h-[50%] lg:w-[150px] flex items-center justify-end z-10 cursor-pointer"
            >
              <img
                src="/sector/rightr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt=""
              />
            </div>
          </>
        )}
      </div>
      <div className="mt-8 lg:!hidden md:!block !hidden lg:mt-[70px] relative">
        {filtered.length < 3 ? (
          // STATIC MODE
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              key={filtered.map((f) => f.id).join("-")} // unique key
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
              }}
            >
              <div className="flex justify-center items-center">
                {filtered.map((img) => (
                  <div
                    key={img.id}
                    className="flex items-center justify-center border-t border-x border-[#CDCDCD] aspect-square w-[304px]"
                  >
                    <img
                      src={img.src}
                      alt="brand"
                      className="lg:w-auto w-[80%] object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          // SLIDER MODE
          <>
            <Swiper
              key={activeTab} // 🔑 ensures autoplay resets correctly
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              slidesPerView={5}
              className="w-full"
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
            >
              {filtered.map((img) => (
                <SwiperSlide key={img.id}>
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
                      <SlideCard src={img.src} />
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom arrows (only for slider mode) */}
            <div
              className="swiper-button-prev-custom absolute top-[25%] left-0 min-h-[50%] lg:w-[150px] flex items-center justify-start z-10 cursor-pointer"
            >
              <img
                src="/sector/leftr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt=""
              />
            </div>

            <div
              className="swiper-button-next-custom absolute top-[25%] right-0 min-h-[50%] lg:w-[150px] flex items-center justify-end z-10 cursor-pointer"
            >
              <img
                src="/sector/rightr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt=""
              />
            </div>
          </>
        )}
      </div>
      <div className="mt-8 sm:!hidden block lg:mt-[70px] relative">
        {filtered.length < 2 ? (
          // STATIC MODE
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              key={filtered.map((f) => f.id).join("-")} // unique key
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
              }}
            >
              <div className="flex justify-center items-center">
                {filtered.map((img) => (
                  <div
                    key={img.id}
                    className="flex items-center justify-center border-t border-x border-[#CDCDCD] aspect-square w-[304px]"
                  >
                    <img
                      src={img.src}
                      alt="brand"
                      className="lg:w-auto w-[80%] object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          // SLIDER MODE
          <>
            <Swiper
              key={activeTab} // 🔑 ensures autoplay resets correctly
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              slidesPerView={5}
              className="w-full"
              breakpoints={{
                0: { slidesPerView: 2 },
              }}
            >
              {filtered.map((img) => (
                <SwiperSlide key={img.id}>
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
                      <SlideCard src={img.src} />
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom arrows (only for slider mode) */}
            <div
              className="swiper-button-prev-custom absolute top-[25%] left-0 min-h-[50%] lg:w-[150px] flex items-center justify-start z-10 cursor-pointer"
            >
              <img
                src="/sector/leftr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt=""
              />
            </div>

            <div
              className="swiper-button-next-custom absolute top-[25%] right-0 min-h-[50%] lg:w-[150px] flex items-center justify-end z-10 cursor-pointer"
            >
              <img
                src="/sector/rightr.svg"
                className="lg:w-20 lg:h-20 md:w-12 w-10"
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slider;

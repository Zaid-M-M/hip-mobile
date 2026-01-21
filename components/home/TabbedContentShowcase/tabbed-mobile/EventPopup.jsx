import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EventPopup = ({ isOpen, onClose, title, media, description }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-[2px] z-50"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px] bg-white shadow-xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="flex flex-col w-full">
              {/* Image */}
              {/* <div className="w-full h-[300px] relative overflow-hidden">
                {image && (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div> */}

              {/* Text Content */}
              <div className="p-6">
                {/* Title */}
                <h2 className="sm:text-center text-black bw-m text-[18px] leading-[22px] sm:text-[20px] xl:w-[600px] w-[75vw] sm:leading-[30px] mb-[12px] sm:mb-[24px] sm:ml-0 ml-[10px] xl:m-auto">
                  {title}
                </h2>

                {/* Media Section */}
                {media && (
                  <div className="mt-4 relative">
                    <div className="relative">
                      <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation={{
                          prevEl: ".media-prev",
                          nextEl: ".media-next",
                        }}
                        // pagination={{
                        //   clickable: true,
                        //   dynamicBullets: true,
                        // }}
                        onSlideChange={(swiper) => {
                          setIsBeginning(swiper.isBeginning);
                          setIsEnd(swiper.isEnd);
                        }}
                        className="w-full aspect-video"
                      >
                        {Array.isArray(media) &&
                          media.map((item, idx) => (
                            <SwiperSlide key={idx}>
                              {item.type === "video" ? (
                                <div
                                  className="w-full h-full"
                                  dangerouslySetInnerHTML={{
                                    __html: `<embed 
                                    src="${item.url}" 
                                    width="100%" 
                                    height="100%" 
                                    frameborder="0" 
                                    object-fit="contain"
                                    allowfullscreen
                                  ></embed>`,
                                  }}
                                />
                              ) : (
                                <img
                                  src={item.url}
                                  alt={title}
                                  className="w-full h-full object-contain"
                                />
                              )}
                            </SwiperSlide>
                          ))}
                      </Swiper>

                      {/* Navigation Buttons */}
                      <button
                        className="media-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 md:w-10 md:h-10 flex items-center justify-center bg-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        disabled={isBeginning}
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button
                        className="media-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 md:w-10 md:h-10 flex items-center justify-center bg-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        disabled={isEnd}
                      >
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                {description && (
                  <div className="mt-2">
                    <div
                      className="font-barlow custom-scrollbar sm:ml-0 ml-[10px] xl:text-[16px] xl:leading-[24px] text-[14px] leading-[24px] text-black xl:max-h-[200px] xl:pr-2 pr-0 max-h-[150px] overflow-y-auto home_event_description"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;

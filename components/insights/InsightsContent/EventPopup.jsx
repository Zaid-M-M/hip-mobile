"use client";
import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const EventPopup = ({
  event,
  onClose,
  onPrevEvent,
  onNextEvent,
  hasPrev,
  hasNext,
}) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const mediaItems = useMemo(() => {
    if (!event) return [];
    const items = [];
    if (event.acf?.feature_image) {
      items.push({
        type: "image",
        url: event.acf.feature_image,
        alt: "Featured Image",
      });
    }
    if (Array.isArray(event.acf?.youtube_video_filed)) {
      event.acf.youtube_video_filed.forEach((item, index) => {
        const url = item.youtube_video;
        if (url) {
          const isVideo = /vimeo\.com|youtube\.com|youtu\.be/.test(url);
          items.push({
            type: isVideo ? "video" : "image",
            url,
            alt: `Gallery ${isVideo ? "Video" : "Image"} ${index + 1}`,
          });
        }
      });
    }
    return items;
  }, [event]);

  const getEmbeddedHtml = (url) => {
    if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop();
      return `<iframe src="https://player.vimeo.com/video/${videoId}" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    }
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("youtu.be/")
        ? url.split("youtu.be/")[1].split("?")[0]
        : url.split("v=")[1]?.split("&")[0];
      if (videoId) {
        return `<iframe src="https://www.youtube.com/embed/${videoId}" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      }
    }
    return null;
  };

  const handlePrev = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      if (swiper.activeIndex === 0 && hasPrev) {
        onPrevEvent();
        swiper.slideTo(0);
      } else {
        swiper.slidePrev();
      }
    }
  };

  const handleNext = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      if (swiper.activeIndex === mediaItems.length - 1 && hasNext) {
        onNextEvent();
        swiper.slideTo(0);
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <>
      {event && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <div className="event-modal-card flex items-center justify-center relative z-[1] bg-white w-full max-w-[95vw] xl:max-w-[65vw] 1440:max-w-[750px] shadow-none xl:h-[600px] h-[550px] xl:mt-0 mt-10 overflow-hidden">
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex absolute top-10 sm:top-2 right-2 items-center justify-center cursor-pointer bg-white w-[10vw] aspect-square p-[8px] sm:w-[63px] sm:h-[63px] sm:p-[23.625px]"
            >
              <Image
                src="/cross.svg"
                alt="close"
                width={16}
                height={16}
                className="sm:w-[18px] sm:h-[18px]"
              />
            </button>
            <div className="event-modal-pad flex flex-col sm:items-center gap-0 !my-auto">
              <h2
                className="sm:text-center text-black bw-m text-[18px] leading-[22px] sm:text-[20px] xl:w-[600px] w-[75vw] sm:leading-[30px] mb-[12px] sm:mb-[24px] sm:ml-0 ml-[10px]"
                dangerouslySetInnerHTML={{
                  __html: event?.title?.rendered || event?.title || "",
                }}
              />
              <div className="w-full flex flex-col items-center mb-[20px]">
                <div className="w-fit h-fit xl:!block !flex !flex-col xl:!gap-0 !gap-5">
                  {mediaItems.length > 1 ? (
                    <Swiper
                      modules={[Navigation]}
                      navigation={{ prevEl: ".sbp", nextEl: ".sbn" }}
                      loop={true}
                      allowTouchMove={true}
                      initialSlide={0}
                      className="media-box xl:w-[600px] w-[90vw] h-[220px] xl:h-[320px] bg-white mx-auto"
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                    >
                      {mediaItems.map((media, index) => (
                        <SwiperSlide key={`${index}-${media.url}`}>
                          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            {media.type === "video" ? (
                              <div
                                className="w-full h-full"
                                dangerouslySetInnerHTML={{
                                  __html: getEmbeddedHtml(media.url),
                                }}
                              />
                            ) : (
                              <Image
                                src={formatMediaUrl(media.url)}
                                alt={media.alt}
                                fill
                                priority
                                unoptimized
                                className="object-cover px-0"
                                onError={(e) => {
                                  e.target.src = "";
                                }}
                              />
                            )}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="media-box xl:w-[600px] w-[90vw] h-[220px] xl:h-[320px] bg-white mx-auto">
                      {mediaItems.length > 0 ? (
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                          {mediaItems[0].type === "video" ? (
                            <div
                              className="w-full h-full"
                              dangerouslySetInnerHTML={{
                                __html: getEmbeddedHtml(mediaItems[0].url),
                              }}
                            />
                          ) : (
                            <Image
                              src={formatMediaUrl(mediaItems[0].url)}
                              alt={mediaItems[0].alt}
                              fill
                              priority
                              unoptimized
                              className="object-cover px-0"
                              onError={(e) => {
                                e.target.src = "";
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        <Image
                          src=""
                          alt="No media available"
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  )}
                  {mediaItems.length > 1 && (
                    <div className="xl:!hidden !flex items-center px-2 lg:mt-10 gap-4 h-10 lg:h-20 w-full">
                      <button className="sbp cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
                        <img src="/state/stateprev.svg" alt="Prev" />
                      </button>
                      <button className="sbn cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
                        <img src="/state/statenext.svg" alt="Next" />
                      </button>
                    </div>
                  )}
                </div>
                {mediaItems.length > 1 && (
                  <>
                    <button
                      className="sbp cursor-pointer !h-10 !w-10 !right-auto !left-5 !absolute !top-1/2 -translate-y-1/2 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 bg-white xl:!flex !hidden  items-center justify-center"
                      onClick={handlePrev}
                    >
                      <img src="/state/stateprev.svg" alt="Prev" />
                    </button>
                    <button
                      className="sbn cursor-pointer !h-10 !w-10 !right-5 !left-auto !absolute !top-1/2 -translate-y-1/2 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 bg-white xl:!flex !hidden  items-center justify-center"
                      onClick={handleNext}
                    >
                      <img src="/state/statenext.svg" alt="Next" />
                    </button>
                  </>
                )}
              </div>
              <div className="xl:w-[600px] w-[90vw]">
                <div className="space-y-[6px] sm:space-y-3 font-barlow text-[#6d6d6d] text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px]">
                  {(event?.acf?.event_time || event?.acf?.time) && (
                    <div className="flex items-center gap-2 sm:gap-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                      <span
                        className="bw-m"
                        dangerouslySetInnerHTML={{
                          __html:
                            event?.acf?.event_time || event?.acf?.time || "",
                        }}
                      />
                    </div>
                  )}
                  {(event?.acf?.event_location || event?.acf?.location) && (
                    <div className="flex items-center gap-2 sm:gap-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span
                        className="bw-m"
                        dangerouslySetInnerHTML={{
                          __html:
                            event?.acf?.event_location ||
                            event?.acf?.location ||
                            "",
                        }}
                      />
                    </div>
                  )}
                </div>
                {(event?.content?.rendered ||
                  event?.acf?.event_description ||
                  event?.acf?.description ||
                  event?.excerpt?.rendered) && (
                  <p
                    className="font-barlow custom-scrollbar sm:ml-0 ml-[10px] xl:text-[16px] xl:leading-[24px] text-[14px] leading-[24px] text-black xl:max-h-[100px] xl:pr-2 pr-0 max-h-[120px] overflow-y-auto"
                    dangerouslySetInnerHTML={{
                      __html:
                        event?.content?.rendered ||
                        event?.acf?.event_description ||
                        event?.acf?.description ||
                        event?.excerpt?.rendered ||
                        "",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventPopup;

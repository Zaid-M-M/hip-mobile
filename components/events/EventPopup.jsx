"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EventPopup = ({ isOpen, onClose, event }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mediaItems, setMediaItems] = useState([]);
  const [slideDir, setSlideDir] = useState(0); // 1 for next, -1 for prev

  // Extract media items from event data
  useEffect(() => {
    if (!event) return;

    const items = [];

    // Add feature_image as first item
    if (event.acf?.feature_image) {
      items.push({
        type: "image",
        url: event.acf.feature_image,
        alt: "Featured Image",
      });
    }

    // Add youtube_video_filed items
    if (
      event.acf?.youtube_video_filed &&
      Array.isArray(event.acf.youtube_video_filed)
    ) {
      event.acf.youtube_video_filed.forEach((item, index) => {
        if (item.youtube_video) {
          items.push({
            type: "image", // These appear to be images based on the API data
            url: item.youtube_video,
            alt: `Gallery Image ${index + 1}`,
          });
        }
      });
    }

    setMediaItems(items);
    setCurrentImageIndex(0);
  }, [event]);

  // Navigate to previous image
  const previousImage = () => {
    setSlideDir(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setSlideDir(1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Helper function to decode HTML entities and strip HTML tags
  const stripHtmlAndDecode = (text) => {
    if (!text) return "";
    // First strip HTML tags
    let stripped = text.replace(/<[^>]*>/g, "");
    // Then decode HTML entities
    if (typeof window !== "undefined") {
      const textArea = document.createElement("textarea");
      textArea.innerHTML = stripped;
      return textArea.value;
    }
    return stripped
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8211;/g, "–")
      .replace(/&#8212;/g, "—")
      .replace(/&nbsp;/g, " ");
  };

  // Get title from event data
  const getTitle = () => {
    if (!event) return "";
    let title = "";
    if (typeof event.title === "object") {
      title = event.title.rendered || event.title;
    } else {
      title = event.title || "";
    }
    return stripHtmlAndDecode(title);
  };

  // Get content from event data
  const getContent = () => {
    if (!event) return "";
    if (event.content?.rendered) {
      return stripHtmlAndDecode(event.content.rendered);
    }
    return "";
  };

  // Close popup on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when popup is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!event) {
    console.log("EventPopup: No event provided");
    return null;
  }

  console.log("EventPopup rendering:", { isOpen, eventTitle: getTitle() });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Container */}
          <motion.div
            className="relative bg-white max-w-[900px] w-[95%] sm:w-[90%] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Top Right */}
            <div className="absolute top-[12px] right-[12px] sm:top-[16px] sm:right-[16px] z-10">
              <div
                className="w-[40px] h-[40px] sm:w-[63px] sm:h-[63px] flex items-center justify-center cursor-pointer border border-[#c9c9c9] bg-white"
                onClick={onClose}
                style={{
                  borderWidth: "0.79px",
                }}
              >
                <Image
                  src="/cross.svg"
                  alt="Close"
                  width={14}
                  height={14}
                  className="text-black sm:w-[17.92px] sm:h-[17.92px]"
                />
              </div>
            </div>

            {/* Main Container - controlled spacing */}
            <div className="event-modal-pad flex flex-col items-center gap-0 p-[16px] pt-[54px] sm:p-[40px] sm:pt-[80px] pb-[20px] sm:pb-[40px]">
              {/* Title - Auto height, Barlow semibold 24px, 35 line height, center aligned */}
              <h2 className="text-black text-center font-barlow font-semibold text-[18px] leading-[26px] sm:text-[24px] sm:leading-[35px] h-auto mb-[8px] sm:mb-[24px]">
                {getTitle()}
              </h2>

              {/* Image/Video Section - Container with arrows and media */}
              {mediaItems.length > 0 && (
                <div className="flex flex-col items-center gap-[12px] sm:gap-[24px] w-full">
                  {/* Navigation and Image Container */}
                  <div className="relative w-full flex items-center justify-center gap-[12px] sm:gap-[24px]">
                    {/* Left Arrow */}
                    {mediaItems.length > 1 && (
                      <button onClick={previousImage} className="flex-shrink-0">
                        <Image
                          src="/eventsleftarrow.svg"
                          alt="Previous"
                          width={15}
                          height={15}
                          className="cursor-pointer"
                        />
                      </button>
                    )}

                    {/* Image/Video Display - W800 x H420 */}
                    <div className="media-box relative w-full h-[200px] sm:w-[800px] sm:h-[420px] max-w-full overflow-hidden">
                      <AnimatePresence initial={false} custom={slideDir}>
                        {mediaItems[currentImageIndex] && (
                          <motion.div
                            key={currentImageIndex}
                            className="absolute inset-0"
                            custom={slideDir}
                            initial={{
                              x: slideDir >= 0 ? 60 : -60,
                              opacity: 0,
                            }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: slideDir >= 0 ? -60 : 60, opacity: 0 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.2, 0, 0, 1],
                            }}
                          >
                            <Image
                              src={mediaItems[currentImageIndex].url}
                              alt={mediaItems[currentImageIndex].alt}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                e.target.src = "";
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    {mediaItems.length > 1 && (
                      <button onClick={nextImage} className="flex-shrink-0">
                        <Image
                          src="/eventsrightarrow.svg"
                          alt="Next"
                          width={15}
                          height={15}
                          className="cursor-pointer"
                        />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Content Text - Auto height, Barlow regular 16px, 26 line height, left aligned */}
              <div className="w-full text-left text-black font-barlow font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] h-auto mt-[12px] mb-0">
                {getContent()}
              </div>
            </div>
            <style jsx>{`
              /* Reduce internals for widths below 1400 to avoid inner scrollbar on 1280/1366 */
              @media (min-width: 768px) and (max-width: 1399px) {
                .media-box {
                  height: 360px !important;
                  max-height: 360px !important;
                }
                .event-modal-pad {
                  padding-top: 40px !important;
                  padding-bottom: 30px !important;
                }
              }
              @media (min-width: 1280px) and (max-width: 1399px) {
                .media-box {
                  height: 380px !important;
                  max-height: 380px !important;
                }
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;

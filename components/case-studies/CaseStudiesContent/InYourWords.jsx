"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VideoPopup from "./VideoPopup";
import cmsApi from "@/src/lib/cmsApi";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const InYourWords = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [clientVideos, setClientVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const result = await cmsApi.getCustomersSpeak({ per_page: 100 });

        if (result.success) {
          const transformedData = result.data.map((item, index) => ({
            id: item.id,
            name:
              item.acf?.customer_name ||
              item.title?.rendered ||
              `Customer ${index + 1}`,
            position: item.acf?.designation || "Position",
            company: item.title?.rendered || `Company ${index + 1}`,
            image:
              item.acf?.thumbnail_image ||
              item.acf?.customer_thumbnail_image ||
              "",
            videoUrl: item.acf?.customer_video_url || "#",
            description: cmsApi.stripHtmlTags(
              item.content?.rendered ||
                item.excerpt?.rendered ||
                "Customer testimonial...",
            ),
          }));

          setClientVideos(transformedData);
        } else {
          console.error("Failed to fetch testimonials:", result.error);
          setClientVideos([]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setClientVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleWatchVideo = (video) => {
    setSelectedVideo(video);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div
      id="client-testimonials"
      className="w-full bg-[#F8F9FA] py-[45px] md:py-[45px] lg:py-[100px]"
    >
      <div className="fix">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-[20px] md:mb-[45px]"
        >
          {/* Desktop Version */}
          <div className="hidden md:flex items-start gap-[20px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-[20px]">
                <h2 className="bw-m text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] text-[#000000] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px]">
                  Voices of Trust:
                </h2>
                <img
                  src="/abstract_pattern.svg"
                  className="w-auto h-auto"
                  alt="Abstract Pattern"
                />
              </div>
              <h2 className="bw-r text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] text-[#000000] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px]">
                Our Clients Speak
              </h2>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="flex md:hidden flex-col">
            <div className="flex flex-col">
              <h2 className="bw-m text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] text-[#000000] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px]">
                Voices of Trust:
              </h2>

              <div className="flex gap-[10px] md:gap-[17px] flex-col ">
                <h2 className="bw-r text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] text-[#000000] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px]">
                  Our clients Speak
                </h2>
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="Abstract Pattern"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-[60px]">
            <div className="bw-r text-[18px] text-[#666666]">
              Loading testimonials...
            </div>
          </div>
        ) : (
          <>
            {/* Hero Featured Video */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative mb-[30px] md:case md:mb-[70px]"
            >
              <div className="relative overflow-hidden bg-white border border-[#eaeaea]">
                <div className="relative w-full pt-[56.27%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/955939591"
                    title="Featured Testimonial"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>

            {/* Fixed Grid: Every card is exactly ~50% width on xl+ */}
            <div className="flex flex-col gap-[24px] p-0 overflow-visible">
              {clientVideos
                .reduce((rows, video, index) => {
                  const rowIndex = Math.floor(index / 2);
                  if (!rows[rowIndex]) rows[rowIndex] = [];
                  rows[rowIndex].push(video);
                  return rows;
                }, [])
                .map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[14px]"
                  >
                    {row.map((video) => (
                      <div
                        key={video.id}
                        className="group relative flex flex-col xl:flex-row gap-[18px] p-[24px] 1440:gap-[24px] 1440:p-[30px] bg-white transition-all duration-300"
                      >
                        {/* Thumbnail */}
                        <div className="w-full xl:w-[220px] h-[150px] 1440:w-[256px] 1440:h-[173px] bg-[#dedede] overflow-hidden flex-shrink-0">
                          <img
                            src={formatMediaUrl(video.image)}
                            alt={video.company}
                            className="w-full h-full object-cover"
                            unoptimized
                            onError={(e) => (e.target.src = "")}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 xl:w-[323px] h-auto 1440:h-[173px] flex flex-col justify-between p-0 min-w-0">
                          <h3 className="text-[20px] leading-[30px] md:text-[23px] md:leading-[25px] uppercase text-black font-barlow font-medium tracking-normal">
                            {video.company}
                          </h3>

                          <p
                            className="mb-[8px] text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] 1366:text-[20px] 1366:leading-[30px] text-black overflow-hidden font-barlow font-normal tracking-normal [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                            style={{ display: "-webkit-box" }}
                          >
                            {video.description}
                          </p>

                          <button
                            onClick={() => handleWatchVideo(video)}
                            className="w-fit h-auto md:w-[160px] md:h-[48px] 1440:w-[181px] 1440:h-[55px] flex items-center justify-center gap-[6px] md:gap-[10px] px-[10px] py-[6px] md:px-[20px] md:py-[12px] 1440:px-[30px] 1440:py-[15px] transition-all duration-300 cursor-pointer backdrop-blur-[10px] bg-black/75 hover:bg-black/90"
                          >
                            <span className="text-white text-[12px] leading-[20px] md:text-[14px] md:leading-[24px] whitespace-nowrap font-barlow font-semibold tracking-[0.1em] uppercase">
                              Watch Video
                            </span>
                            <img
                              src="/playbtn.svg"
                              alt="Play"
                              className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] filter brightness-0 invert"
                            />
                          </button>
                        </div>

                        {/* Corner Clip */}
                        <div className="absolute top-0 right-0">
                          <img
                            src="/clipgrey.svg"
                            alt=""
                            className="group-hover:hidden block transition-all duration-300"
                          />
                          <img
                            src="/clipgreen.svg"
                            alt=""
                            className="group-hover:block hidden transition-all duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>

      <VideoPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        videoData={selectedVideo}
      />
    </div>
  );
};

export default InYourWords;

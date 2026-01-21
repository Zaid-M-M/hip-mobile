"use client";
import { motion } from "framer-motion";

const PopupSection = ({
  breadcrumb = [],
  heading,
  highlight,
  image,
  paragraphs = [],
  buttonText,
  buttonAction,
  videoThumb,
  onVideoClick,
}) => {
  return (
    <div className="relative w-full min-h-full pt-[80px] pb-[36px] overflow-hidden 768:pb-[60px] 1024:pb-[80px] 1280:pb-[85px]">
      <div className="fix">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
            viewport={{ amount: 0.25, once: true }}
            className="bw-m bcstyles flex gap-[10px] items-center px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit"
          >
            {breadcrumb.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <a href={item.href} className="text-[13px] md:text-[16px]">
                  {item.label}
                </a>
                {idx < breadcrumb.length - 1 && <div>/</div>}
              </div>
            ))}
          </motion.div>
        )}

        {/* Heading */}
        <div className="flex items-center gap-4">
          <h1 className="bw-r text-[36px] 768:text-[52px] 1024:text-[68px] 1280:text-[72px] leading-[76px]">
            <b className="bw-m">{highlight}</b> {heading}
          </h1>
        </div>

        {/* Content Row */}
        <div className="flex flex-col 1024:flex-row gap-[24px] pt-[30px]">
          {/* Image */}
          {image && (
            <div className="flex w-full lg:w-[50%]">
              <img className="min-w-full" src={image} alt={heading} />
            </div>
          )}

          {/* Text */}
          <div className="flex flex-col 1024:w-[60%] lg:flex-1">
            <div className="flex flex-col gap-[20px]">
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="bw-r text-[16px] 768:text-[20px] leading-[26px] 1280:leading-[30px]"
                >
                  {text}
                </p>
              ))}
            </div>

            {buttonText && (
              <div className="pt-6">
                <button
                  onClick={buttonAction}
                  className="px-6 py-3 bg-black text-white text-sm md:text-base rounded-lg hover:bg-[#f47920] transition"
                >
                  {buttonText}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Video Section */}
        {videoThumb && (
          <div className="flex mt-10 w-full lg:w-[50%]">
            <div
              className="relative w-full 1280:w-[670px] aspect-video cursor-pointer"
              onClick={onVideoClick}
            >
              <img
                src={videoThumb}
                alt="Video Thumbnail"
                className="object-cover w-full h-full rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black/40">
                ▶
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupSection;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const Culture_sec4 = ({
  career_sec3_infobox = [],
  career_sec3_sub_paragraph,
  career_sec3_infobox_copy = [],
}) => {
  if (!career_sec3_infobox.length && !career_sec3_infobox_copy.length)
    return null;

  return (
    <div className="w-full relative overflow-hidden">
      <img
        className="purple_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/purple_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="relative w-full fix 1280:pt-[100px] 1280:pb-[20px] pt-[45px] pb-[45px]">
        <div className="flex lg:flex-row flex-col justify-between gap-[15px] lg:gap-[25px] xl:gap-[50px] mb-[0px]">
          <div className="flex items-left flex-col relative w-fit">
            <div className="flex flex-row gap-[10px] md:gap-[17px]">
              <h2 className="text-black text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] !font-medium bw-m whitespace-nowrap capitalize">
                A Culture
              </h2>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg w-max"
                alt=""
              />
            </div>
            <h2 className="text-black text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-r capitalize">
              of Trust and Openness
            </h2>
          </div>

          <p
            className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-black xl:w-[500px] lg:pt-[17px]"
            dangerouslySetInnerHTML={{ __html: career_sec3_sub_paragraph }}
          />
        </div>
      </div>

      <div className="relative">
        <div className="fixup pb-[45px] xl:pt-[60px] xl:pb-[90px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] 768:gap-[20px] 1024:gap-[0px] 1280:gap-[40px] 1366:gap-[40px]">
            {/* First Column */}
            <div className="flex flex-col items-center gap-[20px] 1024:gap-[55px] 1280:gap-[34px]">
              {career_sec3_infobox_copy.slice(0, 2).map((item, idx) => (
                <div key={idx} className="border border-[#CDCDCD]">
                  <div className="xl:h-[318px] h-[200px]">
                    {item.career_sec3_infobox_image_11?.length > 1 ? (
                      <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        className="h-full w-full"
                        style={{ width: "100%", height: "100%" }} // :white_check_mark: constrain swiper
                      >
                        {item.career_sec3_infobox_image_11.map((imgObj, i) => (
                          <SwiperSlide
                            key={i}
                            className="!w-full !h-full" // :white_check_mark: force slide size
                          >
                            <img
                              className="h-full w-full object-cover" // :white_check_mark: match parent box
                              src={formatMediaUrl(
                                imgObj.career_sec3_infobox_imageeee
                              )}
                              priority
                              unoptimized // ← Must be true
                              alt={
                                item.career_sec3_infobox_title ||
                                `culture-img-${idx}-${i}`
                              }
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <img
                        className="h-full w-full object-cover"
                        src={formatMediaUrl(
                          item.career_sec3_infobox_image_11?.[0]
                            ?.career_sec3_infobox_imageeee || ""
                        )}
                        priority
                        unoptimized // ← Must be true
                        alt={
                          item.career_sec3_infobox_title || `culture-img-${idx}`
                        }
                      />
                    )}
                  </div>
                  <div className="xl:py-[44px] p-5 xl:px-[34px] bg-white relative">
                    <h2 className="bw-m text-[24px] leading-[24px] xl:text-[36px] xl:leading-[46px] mb-[15px] xl:mb-[15px]">
                      {item.career_sec3_infobox_title1}
                    </h2>
                    <p
                      className="xl:text-[20px] text-[16px] leading-[24px] xl:leading-[30px]"
                      dangerouslySetInnerHTML={{
                        __html: item.career_sec3_infobox_description1 || "",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center gap-[20px] 1024:gap-[55px] 1280:gap-[34px] md:mt-[90px]">
              {career_sec3_infobox_copy.slice(2, 4).map((item, idx) => (
                <div key={idx} className="border border-[#CDCDCD]">
                  <div className="xl:h-[318px] h-[200px]">
                    {item.career_sec3_infobox_image_11?.length > 1 ? (
                      <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        className="h-full w-full"
                        style={{ width: "100%", height: "100%" }} // :white_check_mark: constrain swiper
                      >
                        {item.career_sec3_infobox_image_11.map((imgObj, i) => (
                          <SwiperSlide
                            key={i}
                            className="!w-full !h-full" // :white_check_mark: force slide size
                          >
                            <img
                              className="h-full w-full object-cover" // :white_check_mark: match parent box
                              src={formatMediaUrl(
                                imgObj.career_sec3_infobox_imageeee
                              )}
                              priority
                              unoptimized // ← Must be true
                              alt={
                                item.career_sec3_infobox_title ||
                                `culture-img-${idx}-${i}`
                              }
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <img
                        className="h-full w-full object-cover"
                        src={formatMediaUrl(
                          item.career_sec3_infobox_image_11?.[0]
                            ?.career_sec3_infobox_imageeee || ""
                        )}
                        priority
                        unoptimized // ← Must be true
                        alt={
                          item.career_sec3_infobox_title || `culture-img-${idx}`
                        }
                      />
                    )}
                  </div>
                  <div className="xl:py-[44px] p-5 xl:px-[34px] bg-white relative ">
                    <h2 className="bw-m text-[24px] leading-[24px] xl:text-[36px] xl:leading-[46px] mb-[15px] xl:mb-[15px]">
                      {item.career_sec3_infobox_title1}
                    </h2>
                    <p
                      className="xl:text-[20px] text-[16px] leading-[24px] xl:leading-[30px]"
                      dangerouslySetInnerHTML={{
                        __html: item.career_sec3_infobox_description1 || "",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img
        className="purple_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] bottom-[-50px] left-[0px] lg:bottom-[-80px] lg:left-[140px] "
        src="/purple_vector.svg"
      />
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] bottom-[-50px] left-[0px] lg:bottom-[-80px] lg:left-[-100px]"
        src="/green_vector.svg"
      />
    </div>
  );
};

export default Culture_sec4;

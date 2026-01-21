import React from "react";
import Btn from "@/components/global/Btn";

const Ecom_sec3 = () => {
  return (
    <div className="bg-[url('/ecommerce/ecom_sec3_bg.jpg')] bg-no-repeat bg-cover bg-center w-full">
      <div className="relative w-full  overflow-hidden fix 1280:pt-[100px] 1280:pb-[40px] pt-[45px] pb-[45px]">
        <div className="flex items-left flex-col relative w-fit">
          <h2 className="sec_hd !font-medium bw-m bg-gradient-to-r whitespace-nowrap overflow-visible from-[#AC38D9] to-[#f47920] bg-clip-text text-transparent capitalize">
            What Makes Our Parks{" "}
          </h2>
          <div className="flex gap-[10px] md:gap-[17px]">
            <h2 className="sec_hd bw-r bg-gradient-to-r whitespace-nowrap overflow-visible text-white capitalize">
              Stand Out?
            </h2>
            <img
              src="/abstract_pattern.svg"
              className="abstract_svg mt-[5px]"
            />
          </div>
        </div>

        <div className="flex md:mt-[49px] mt-[40px] gap-[20px] h-[auto] xl:h-[610px] flex-col xl:flex-row">
          {/* column 1 */}
          <div className="w-full xl:w-[370px] h-[100%]">
            <div className="text-white bg-[#f47920] relative pt-[25px] pb-[25px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex flex-col h-[100%] 1536:h-[90.3%]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px]  mb-[15px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/automotive/high_auto.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    High-Capacity <br></br>Infrastructure
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r">
                  Wide column spans and enhanced floor loads designed to support
                  heavy machinery, robotic automation, and high-volume
                  production cycles.
                </p>
              </div>
              <div className="flex justify-end w-full pt-[20px] xl:pt-[122px] pr-[0px] 1536:pt-[70px]">
                <img
                  className="w-[100px] xl:w-[auto]"
                  src="/ecommerce/orange_box_img.svg"
                />
              </div>
            </div>
          </div>

          {/* column 2 */}
          <div className="flex flex-col md:flex-row xl:flex-col gap-[20px] flex-1 w-full xl:w-[465px] h-[100%]">
            {/* 1 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#fff] relative pt-[25px] pb-[25px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto] 1536:h-[265px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px]  mb-[15px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/automotive/high_customised.svg"
                  />
                  <h3 className="text-[#000] text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Customised Manufacturing Provisions
                  </h3>
                </div>

                <p className="text-[#525252] text-[18px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r ">
                  Inspection pits, multi-point power sources, and adaptable bays
                  built around specific assembly and process requirements.
                </p>
              </div>
              <img
                className="absolute right-[33px] bottom-0 lg:w-[auto] w-[230px]"
                src="/ecommerce/white_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#0db14b] relative pt-[25px] pb-[25px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto] 1536:h-[265px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px] mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/automotive/logistic_logis.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Logistics-Smart <br></br>Layouts
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r">
                  Integrated dispatch bays, dock levellers, and separate
                  movement zones streamline material handling and personnel
                  safety
                </p>
              </div>
              <img
                className="absolute right-0 bottom-0 w-[100px] lg:w-[auto]"
                src="/Cap_Overview/cards_dbl_arrow.svg"
              />
            </div>
          </div>

          {/* column 3 */}
          <div className="flex flex-col md:flex-row xl:flex-col gap-[20px] flex-1 w-full xl:w-[465px] h-[100%]">
            {/* 1 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#8F53A1] relative pt-[25px] pb-[25px] lg:pt-[38px]  xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto] 1536:h-[265px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px]  mb-[15px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/automotive/scalable_logis.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Scalable Growth <br></br>Pathways
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r">
                  Flexible unit sizes and expansion-ready layouts that let
                  manufacturers grow without relocating operations.
                </p>
              </div>
              <img
                className="absolute right-0 top-[30px] w-[60px] lg:w-[auto]"
                src="/ecommerce/purple_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#000] relative pt-[25px] pb-[25px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto] 1536:h-[265px]">
              <div>
                <div className="flex gap-[17px]  xl:gap-[20px] xl:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/automotive/ESG_logis.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    ESG & Workforce Friendly
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r">
                  Passive ventilation, rooftop solar, rainwater harvesting, and
                  employee-focused amenities create sustainable, people-first
                  ecosystems
                </p>
              </div>
              <img
                className="absolute right-0 top-0 w-[60px] lg:w-[auto]"
                src="/ecommerce/black_box_img.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_sec3;

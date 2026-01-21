import React from "react";
import Btn from "@/components/global/Btn";

const Aro_sec3 = () => {
  return (
    <div className="bg-[url('/ecommerce/ecom_sec3_bg.jpg')] bg-no-repeat bg-cover bg-center w-full">
      <div className="relative w-full  overflow-hidden fix 1280:pt-[100px] 1280:pb-[100px] pt-[45px] pb-[45px]">
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
            <div className="text-white bg-[#f47920] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex flex-col h-[100%] xl:h-[100%] 1440:h-[105%]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px] 1440:mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/aerospace/precision_aero.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[24px] xl:text-[24px] 1440:text-[26px]   leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Precision-Engineered Spaces<br></br>
                  </h3>
                </div>

                <p className="md:text-[16px] md:leading-[24px] 1440:text-[21px] 1440:leading-[28px] xl:text-[18px] xl:leading-[28px] bw-r">
                  High structural tolerance, FM-2 grade floors, and modular bays
                  designed to support assembly lines, precision tools, and
                  controlled processes.
                </p>
              </div>
              <div className="flex justify-end w-full pt-[20px] xl:pt-[150px] pr-[0px]">
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#fff] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[295px] 1440:h-[310px]  h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px] 1440:mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/aerospace/custom_aero.svg"
                  />
                  <h3 className="text-[#000] text-[24px] md:text-[25px] lg:text-[24px] xl:text-[24px] 1440:text-[26px]   leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Custom Utilities & Technical Services
                  </h3>
                </div>

                <p className="text-[#525252] text-[18px]  md:text-[16px] md:leading-[24px] 1440:text-[21px] 1440:leading-[28px] xl:text-[18px] xl:leading-[28px] bw-r ">
                  Provisions for compressed air lines, epoxy flooring,
                  cleanrooms, calibration labs, and testing zones tailored to
                  the exacting needs of aerospace and engineering operations.
                </p>
              </div>
              <img
                className="absolute right-[33px] bottom-0 lg:w-[auto] w-[230px]"
                src="/ecommerce/white_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#0db14b] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[295px] 1440:h-[310px]  h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[13px] xl:mb-[25px] 1440:mb-[25px]  md:mb-[10px] mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/aerospace/heavy_aero.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[24px] xl:text-[24px] 1440:text-[26px]   leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Heavy-Duty Yet Agile <br></br>Infrastructure
                  </h3>
                </div>

                <p className="md:text-[16px] md:leading-[24px] 1440:text-[21px] 1440:leading-[28px] xl:text-[18px] xl:leading-[28px] bw-r">
                  PEB structures with high floor load, 12m clear height, and
                  wide column spans - ideal for CNC installations, robotic arms,
                  and high-performance machinery, with flexibility to evolve as
                  processes change.
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#8F53A1] relative pt-[30px] pb-[20px] lg:pt-[38px]  xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[295px] 1440:h-[310px]  h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px] 1440:mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/aerospace/innovate_aero.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[24px] xl:text-[24px] 1440:text-[26px]   leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Innovation-Ready <br></br>Design
                  </h3>
                </div>

                <p className="md:text-[16px] md:leading-[24px] 1440:text-[21px] 1440:leading-[28px] xl:text-[18px] xl:leading-[28px] bw-r">
                  Dedicated spaces for R&D, storage, and phased expansion -
                  ensuring seamless scale-up and the ability to adapt to new
                  tooling, technology, or product lines.
                </p>
              </div>
              <img
                className="absolute right-0 top-[30px] w-[60px] lg:w-[auto]"
                src="/ecommerce/purple_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#000] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[295px] 1440:h-[310px]  h-[auto]">
              <div>
                <div className="flex gap-[17px]  xl:gap-[20px] xl:mb-[25px] md:mb-[10px] 1440:mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/aerospace/sustain_aero.svg"
                  />
                  <h3 className="text-[24px] md:text-[23px] 1440:text-[26px] leading-[34px] md:leading-[36px] 1440:leading-[35px] bw-m mb-[0px]">
                    Sustainable & People-Centric Ecosystems
                  </h3>
                </div>

                <p className="md:text-[16px] md:leading-[24px] 1440:text-[21px] 1440:leading-[28px] xl:text-[18px] xl:leading-[28px] bw-r">
                  On-site Skill Centres and housing for both blue- and
                  white-collar staff, paired with ESG features such as rooftop
                  solar, rainwater harvesting, EV-ready infra, and full
                  wastewater recycling
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

export default Aro_sec3;

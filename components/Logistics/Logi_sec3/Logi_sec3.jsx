import React from "react";
import Btn from "@/components/global/Btn";

const Ecom_sec3 = () => {
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

        <div className="flex md:mt-[49px] mt-[40px] gap-[20px] h-[auto] xl:h-[auto] flex-col xl:flex-row">
          {/* column 1 */}
          <div className="w-full xl:w-[370px] h-[100%]">
            <div className="text-white bg-[#f47920] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[25px] lg:pb-[48px] px-[20px] lg:px-[24px] flex flex-col h-[97.5%]  xl:h-[790px] 1366:h-[680px]  1440:h-[710px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[10px] xl:mb-[15px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/logistics/strategic_logis.svg"
                  />
                  <h3 className="text-[23px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[34px] bw-m mb-[0px] xl:text-[23px] 1440:text-[24px]">
                    Strategic Locations & <br></br>Multimodal Access
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[20px]  xl:text-[19px]  1440:text-[20px]  leading-[31px] bw-r">
                  Parks located close to national highways, airports, industrial
                  clusters, and consumption hubs across key logistics corridors
                  - ensuring faster reach and wider market coverage
                </p>
              </div>
              <div className="flex justify-end w-full pt-[20px] xl:pt-[290px] 1366:pt-[190px] 1440:pt-[170px] pr-[0px] ">
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#fff] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[25px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[385px] h-[auto] 1280:h-[385px] 1366:h-[330px] 1440:h-[345px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[10px] xl:mb-[15px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/logistics/speed_logis.svg"
                  />
                  <h3 className="text-[#000] text-[23px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[34px] bw-m mb-[0px] xl:text-[23px] 1440:text-[24px]">
                    Speed-Optimised & Fulfilment Ready
                  </h3>
                </div>

                <p className="text-[#525252] text-[18px] md:text-[17px] lg:text-[20px]  xl:text-[19px]  1440:text-[20px]  leading-[31px] bw-r ">
                  High dock ratios, wide turning radii, and flexible layouts
                  designed for large fleets. Adaptable floor plans with
                  cross-docking facilities support high-velocity distribution
                  and smooth inbound/outbound flow, even during seasonal peaks.
                </p>
              </div>
              <img
                className="absolute right-[33px] bottom-0 lg:w-[auto] w-[230px]"
                src="/ecommerce/white_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#0db14b] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[25px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[385px] h-[auto] 1366:h-[330px] 1440:h-[345px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[10px] xl:mb-[15px] md:mb-[10px] mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/logistics/techno_logis.svg"
                  />
                  <h3 className="text-[23px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[34px] bw-m mb-[0px] xl:text-[23px] 1440:text-[24px]">
                    Technology-Ready <br></br>Infrastructure
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[20px]  xl:text-[19px]  1440:text-[20px]  leading-[31px] bw-r">
                  FM-2 grade flooring suited for pallet racking and multi-tier
                  shelving systems, abundant skylights for natural lighting, and
                  built-in power provisions to support automation, sortation,
                  and advanced fulfilment technologies.
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#8F53A1] relative pt-[30px] pb-[20px] lg:pt-[38px]  xl:pt-[30px] 1366:pt-[25px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[385px] h-[auto] 1280:h-[385px] 1366:h-[330px] 1440:h-[345px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[10px] xl:mb-[15px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/logistics/scalable_logis.svg"
                  />
                  <h3 className="text-[23px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[34px] bw-m mb-[0px] xl:text-[23px] 1440:text-[24px]">
                    Scalable & Sustainable <br></br>Ecosystems
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[20px] xl:text-[19px] 1440:text-[20px]  leading-[31px] bw-r">
                  Expandable units and phased development options enable growth
                  without disruption. Rooftop solar, rainwater harvesting, and
                  STPs for water recycling ensure resilience while supporting
                  ESG commitments and operational uptime
                </p>
              </div>
              <img
                className="absolute right-0 top-[30px] w-[60px] lg:w-[auto]"
                src="/ecommerce/purple_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#000] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[25px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[385px] 1366:h-[330px] h-[auto] 1440:h-[345px]">
              <div>
                <div className="flex gap-[17px]  xl:gap-[10px] xl:mb-[15px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/logistics/people_logis.svg"
                  />
                  <h3 className="text-[23px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[34px] bw-m mb-[0px] xl:text-[23px] 1440:text-[24px]">
                    People & Talent-Centric Planning
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[20px]  xl:text-[19px]  1440:text-[20px]  leading-[31px] bw-r">
                  Amenities such as driver rest areas, crèches, food courts, and
                  safe walkways enhance on-ground experience. Upcoming Skill
                  Centres, along with housing for blue- and white-collar staff,
                  ensure a trained, supported workforce right at your doorstep
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

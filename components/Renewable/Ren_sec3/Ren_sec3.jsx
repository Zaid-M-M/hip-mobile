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
              Out Stand?
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
            <div className="text-white bg-[#f47920] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex flex-col lg-[111.7%] xl:h-[680px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[15px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/renewable/build_Energy.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[24px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px] ">
                    Built for Clean Energy Logistics <br></br>
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[18px]  leading-[28px] bw-r 1440:text-[21px] 1280:leading-[31px]">
                  Wide spans, FM-2 grade floors, and high clearances with open
                  yards to handle oversized wind and solar components - plus
                  dock-dense layouts for smooth flow of heavy cargo.
                </p>
              </div>
              <div className="flex justify-end w-full pt-[20px] xl:pt-[160px] 1440:pt-[130px] pr-[0px]">
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#fff] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[330px] h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[15px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/renewable/ESG_Energy.svg"
                  />
                  <h3 className="text-[#000] text-[24px] md:text-[25px] lg:text-[24px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]  ">
                    ESG-Aligned & Future-Ready Infrastructure
                  </h3>
                </div>

                <p className="text-[#525252] text-[18px] md:text-[17px] lg:text-[18px]  leading-[28px] bw-r 1440:text-[21px] 1280:leading-[31px] ">
                  IGBC Platinum certified parks with solar-ready roofs, water
                  recycling, and natural daylighting. Scaling to 29+ MW of solar
                  power. EV charging and decarbonised yards built in.
                </p>
              </div>
              <img
                className="absolute right-[33px] bottom-0 lg:w-[auto] w-[230px]"
                src="/ecommerce/white_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#0db14b] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[330px] h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[15px] md:mb-[10px] mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/renewable/Power_Energy.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[24px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px] ">
                    Power Security & Compliance <br></br>
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[18px]  leading-[28px] bw-r 1440:text-[21px] 1280:leading-[31px]">
                  Dual-feed power, custom substations, and clean-power corridors
                  ensure reliability. Fire-rated segregation and advanced safety
                  networks safeguard battery and inverter storage.
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#8F53A1] relative pt-[30px] pb-[20px] lg:pt-[38px]  xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[330px] h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[15px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/renewable/strategic_Energy.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[24px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px] ">
                    Strategic Connectivity <br></br>
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[18px]  leading-[28px] bw-r 1440:text-[21px] 1280:leading-[31px]">
                  Close to renewable manufacturing clusters and ports across
                  Tamil Nadu, Karnataka, Maharashtra, and Gujarat - optimising
                  both inbound materials and export dispatches.
                </p>
              </div>
              <img
                className="absolute right-0 top-[30px] w-[60px] lg:w-[auto]"
                src="/ecommerce/purple_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#000] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[330px] h-[auto]">
              <div>
                <div className="flex gap-[17px]  xl:gap-[20px] xl:mb-[15px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[80px]"
                    src="/renewable/scalable_Energy.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[24px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px] ">
                    Scalable, Human-Centric Ecosystems
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[18px]  leading-[28px] bw-r 1440:text-[21px] 1280:leading-[31px]">
                  Modular units and expansion-ready parcels allow phased growth.
                  On-ground management and full workforce amenities -
                  accommodation, crèche, food courts, training - create thriving
                  ecosystems.
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

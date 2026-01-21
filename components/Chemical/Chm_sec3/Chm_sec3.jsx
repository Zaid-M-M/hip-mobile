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

        <div className="flex md:mt-[49px] mt-[30px] gap-[20px] h-[auto] xl:h-[auto] flex-col xl:flex-row">
          {/* column 1 */}
          <div className="w-full xl:w-[370px] h-[100%]">
            <div className="text-white bg-[#f47920] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex flex-col xl:h-[683px] 1440:h-[640px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[15px] 1440:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/chemical/Compliance_chemical.png"
                  />
                  <h3 className="text-[24px] lg:text-[27px] leading-[34px] md:text-[15px] md:leading-[25px] lg:leading-[37px] bw-m mb-[0px]">
                    Compliance-First <br></br>Design
                  </h3>
                </div>

                <p className=" text-[21px] md:text-[17px] lg:text-[21px] lg-leading-[31px] 1280:text-[19px] 1280:leading-[29px]  leading-[28px] bw-r">
                  Chemical-resistant flooring, fire-rated partitions, and
                  layouts aligned to the highest safety standards ensure safe
                  operations from day one.
                </p>
              </div>
              <div className="flex justify-end w-full pt-[20px] xl:pt-[220px] 1440:pt-[160px]  pr-[0px]">
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#fff] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto] 1280:h-[310px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[15px] 1440:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/chemical/advanced_chem.svg"
                  />
                  <h3 className="text-[#000] text-[24px] md:text-[15px] md:leading-[25px]  lg:text-[27px] leading-[34px] lg:leading-[37px] bw-m mb-[0px]">
                    Advanced Fire & Safety Systems
                  </h3>
                </div>

                <p className="text-[#525252] text-[18px] md:text-[17px] lg:text-[21px] 1280:text-[19px] 1280:leading-[29px]  leading-[28px] bw-r ">
                  Roof and in-rack sprinklers, hydrants, foam suppression, and
                  centralised control rooms safeguard high-risk materials and
                  meet stringent fire protocols.
                </p>
              </div>
              <img
                className="absolute right-[33px] bottom-0 lg:w-[auto] w-[230px]"
                src="/ecommerce/white_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#0db14b] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto] xl:h-[353px] 1440:h-[310px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[13px] xl:mb-[15px] 1440:mb-[25px] md:mb-[10px] mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/chemical/ventilate_chem.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[35px] md:leading-[36px] lg:leading-[36px] bw-m mb-[0px]">
                    Ventilation, Containment & <br></br>Zoning
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[21px]  leading-[28px] 1280:text-[19px] 1280:leading-[29px] bw-r">
                  High-volume ventilation, exhaust systems, secondary
                  containment, and site-level segregation for hazardous vs.
                  non-hazardous cargo - supported with isolated storage rooms
                  and access-controlled buffer zones.
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#8F53A1] relative pt-[30px] pb-[20px] lg:pt-[38px]  xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto] 1280:h-[310px]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[15px] 1440:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/chemical/approval_chem.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[35px] md:leading-[36px] lg:leading-[36px] bw-m mb-[0px]">
                    Approval-Ready & <br></br>Efficient
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[21px]  leading-[28px] 1280:text-[19px] 1280:leading-[29px] bw-r">
                  Designs pre-aligned with PESO, CFO, and regulatory standards
                  to fast-track statutory clearances. Additional features like
                  weigh bridges and fenced premises improve operational
                  efficiency.
                </p>
              </div>
              <img
                className="absolute right-0 top-[30px] w-[60px] lg:w-[auto]"
                src="/ecommerce/purple_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#000] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto] xl:h-[353px] 1440:h-[310px]">
              <div>
                <div className="flex gap-[17px]  xl:gap-[20px] xl:mb-[15px] 1440:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/chemical/ESG_chem.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[35px] md:leading-[36px] lg:leading-[36px] bw-m mb-[0px]">
                    ESG & Resilience Built In
                  </h3>
                </div>

                <p className=" text-[18px] md:text-[17px] lg:text-[21px]  leading-[28px] 1280:text-[19px] 1280:leading-[29px] bw-r">
                  LED lighting, rooftop solar integration, green buffer zones,
                  and effluent treatment systems strengthen sustainability while
                  supporting compliance goals.
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

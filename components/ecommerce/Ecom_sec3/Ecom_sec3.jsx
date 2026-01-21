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

        <div className="flex md:mt-[49px] mt-[40px] gap-[20px] h-[auto] xl:h-[610px] flex-col xl:flex-row">
          {/* column 1 */}
          <div className="w-full xl:w-[370px] h-[100%]">
            <div className="text-white bg-[#f47920] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex flex-col h-[100%]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/ecommerce/orange_box_icon.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Logistics-First <br></br>Design
                  </h3>
                </div>

                <p className=" text-[17px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r">
                  Wide roads and truck aprons, efficient dock layouts, dock
                  levellers, and navigational signages, separate circulation for
                  goods and people—engineered to reduce turnaround times and
                  loading bottlenecks.
                </p>
              </div>
              <div className="flex justify-end w-full pt-[20px] xl:pt-[60px] pr-[0px]">
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#fff] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/ecommerce/white_box_icon.svg"
                  />
                  <h3 className="text-[#000] text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    High-Speed, High-Capacity Spaces
                  </h3>
                </div>

                <p className="text-[#525252] text-[17px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r ">
                  12m clear height, high floor load capacity, and
                  mezzanine-ready structures ideal for offices, racking,
                  automation, and seamless operations.
                </p>
              </div>
              <img
                className="absolute right-[33px] bottom-0 lg:w-[auto] w-[230px]"
                src="/ecommerce/white_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#0db14b] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px] mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/ecommerce/green_box_icon.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Smart, Sustainable, <br></br>Secure
                  </h3>
                </div>

                <p className=" text-[17px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r">
                  Solar-powered energy solutions, LED lighting, smart meters,
                  water recycling, and round-the-clock security—all integrated
                  into the park ecosystem.
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
            <div className="md:flex-1 xl:flex-none text-white bg-[#8F53A1] relative pt-[30px] pb-[20px] lg:pt-[38px]  xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto]">
              <div>
                <div className="flex gap-[17px] xl:gap-[20px] xl:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/ecommerce/purple_box_icon.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Last-Mile Friendly <br></br>Locations
                  </h3>
                </div>

                <p className=" text-[17px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r">
                  Strategically placed near urban and consumption centres across
                  India's top logistics corridors—helping you deliver faster and
                  scale up as needed.
                </p>
              </div>
              <img
                className="absolute right-0 top-[30px] w-[60px] lg:w-[auto]"
                src="/ecommerce/purple_box_img.svg"
              />
            </div>

            {/* 2 */}
            <div className="md:flex-1 xl:flex-none text-white bg-[#000] relative pt-[30px] pb-[20px] lg:pt-[38px] xl:pt-[30px] 1366:pt-[38px] lg:pb-[48px] px-[20px] lg:px-[24px] flex md:h-[auto] lg:h-[296px] h-[auto]">
              <div>
                <div className="flex gap-[17px]  xl:gap-[20px] xl:mb-[25px] md:mb-[10px]  mb-[25px] items-center">
                  <img
                    className="w-[60px] xl:w-[70px] 1440:w-[70px]"
                    src="/ecommerce/black_box_icon.svg"
                  />
                  <h3 className="text-[24px] md:text-[25px] lg:text-[26px] leading-[34px] md:leading-[36px] lg:leading-[35px] bw-m mb-[0px]">
                    Ready When You Are
                  </h3>
                </div>

                <p className=" text-[17px] md:text-[17px] lg:text-[21px]  leading-[28px] bw-r">
                  Plug-and-play units and scalable built-to-suit facilities
                  tailored to adapt to peak seasons and regional expansions.
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

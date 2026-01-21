import React from "react";
import Btn from "@/components/global/Btn";

const Success = () => {
  return (
    <div className="bg-[#fff]">
      <div className="relative w-full  overflow-hidden fix 1280:py-[55px] pb-[0px] pt-[45px] lg:py-[45px] ">
        <div className="flex justify-between lg:flex-row flex-col">
          {/* Column 1 */}
          <div className="w-full xl:w-[510px] 1440:w-[570px] xl:pb-[30px] 1440:pb-[0px]">
            <div className="flex items-left flex-col relative w-fit">
              <h2 className="inline-block w-fit sec_hd bw-m capitalize whitespace-nowrap">
                Your Success
              </h2>

              <h2 className="sec_hd text-[#000] bw-r bg-gradient-to-r whitespace-nowrap overflow-visible capitalize">
                <span className="bw-m">Is Our Success</span>
              </h2>
            </div>

            <div className="1440:w-[522px] xl:w-full lg:mt-[35px]">
              <p className="bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px] text-[#000]">
                Being true partners in our customers’ growth, we pull out all
                stops to meet their business requirements. 365 days a year, 24
                hours a day.
              </p>

              <p className="bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px] text-[#000]">
                Horizon Industrial Parks is proud to partner with leading global
                and national brands from diverse sectors and offer them modern,
                well planned, technology-enabled industrial and logistics
                spaces.
              </p>
              <p className="bw-r md:text-[20px] lg:text-[20px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px] text-[#000]">
                Horizon portfolio comprises more than 100 brands from a variety
                of industry verticals including Third-party logistics,
                e-Commerce, Automotive & Auto Ancillaries, Aerospace,
                Engineering, FMCG and Retail.
              </p>

              <Btn
                text="View Case Studies"
                href="/case-studies/"
                className="mt-[24px]"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="xl:w-[820px] w-full relative">
            <img
              className="w-[75%] lg:w-[460px] xl:w-[750px] m-[auto] pt-[30px] lg:pt-[0px] relative lg:absolute lg:bottom-[-48px] xl:bottom-[-70px]"
              src="/ind/arr.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

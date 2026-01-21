"use client";
import React from "react";
import Enba_agilcard from "../Enab_agilecard";

const Enab_Agil_sec3 = ({ amenities }) => {
  return (
    <div className="relative overflow-hidden bg-black pt-[100px] 360:pt-[45px] ">
      <div className=" absolute right-5 768:right-10 w-[50%] 768:w-[35%] top-8 1024:top-10 lg:w-[50%] 1280:w-[45%] 1280:right-19">
        <img src="/workflow/workbg_sec3.png" alt="" />
      </div>

      {/* Main content */}
      <div className="lg:my-0 my-0 z-50">
        <div className="fixup ">
          <div className="flex items-left flex-col md:flex-row md:items-center ">
            <h2 className="sec_hd bw-r flex flex-col ">
              <span className="txt_gradient flex gap-3 lg:gap-4 items-center bw-m">
                Land
                <br className="block" />
              </span>

              <span className=" bw-r text-white flex flex-col md:flex-row gap-3 lg:gap-4 items-start md:items-center z-20">
                Acquisition
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                />
              </span>
            </h2>
          </div>

          {/* Flex reverse */}
          <div className="flex flex-col 1024:flex-row-reverse z-10 justify-between mt-[20px] xl:mt-[30px] gap-5 xl:gap-[50px] lg:gap-[100px] 1440:gap-[100px]">
            {/* Image */}
            <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] z-20 xl:max-w-[48%] 1440:max-w-[45%]">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/enabling_agile/enablingsec3.jpg"
                alt="Factory"
              />
            </div>

            {/* Text */}
            <div className="1280:max-w-[550px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] z-20">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                Navigating land acquisition is complex, so you never have to get
                into it with us as your partners.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                We invest early and acquire strategically located land parcels
                with clear titles, industrial zoning, and access to trunk
                infrastructure, backed by rigorous, compliance-first due
                diligence. Every site is chosen based on our deep understanding
                of supply chain networks, customer infrastructure needs, and
                India’s evolving logistics landscape. Backed by our pan-India
                presence and in-depth local knowledge, we identify
                high-potential locations in both Tier I and Tier II
                markets—including in-city zones for last-mile distribution and
                manufacturing hubs for scale.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                Our process is strengthened by rigorous, compliance-first due
                diligence and partnerships with local communities and
                authorities. Combined with our access to international standards
                and delivery expertise, we ensure your business can expand where
                it matters, with confidence and clarity.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-black py-18 md:pt-[40px] pt-[10px]">
          <Enba_agilcard amenities={amenities} />
        </div>
      </div>

      {/* ✅ Amenities card section at the end inside black div */}
    </div>
  );
};

export default Enab_Agil_sec3;

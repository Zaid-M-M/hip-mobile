"use client";
import React from "react";
import Enab_assestcard from "../Enab_assestcard";

const Enab_Agil_sec6 = ({ amenitiesasset }) => {
  return (
    <div className="relative overflow-hidden bg-white pt-[100px] 360:pt-[45px] ">
      {/* <div className=" absolute right-5 768:right-10 w-[50%] 768:w-[35%] top-8 1024:top-10 lg:w-[50%] 1280:w-[45%] 1280:right-19">
        <img src="/workflow/workbg_sec3.png" alt="" />
      </div> */}
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      {/* Main content */}
      <div className="lg:my-0 my-0 z-50 pt-[15px]">
        <div className="fixup ">
          <div className=" items-left flex-col md:flex-row md:items-center ">
            <h2 className="sec_hd bw-r flex gap-[20px]">
              <span className="text-black bw-m flex gap-3 lg:gap-4 items-center bw-m">
                Asset Management
                <br className="block" />
              </span>

              {/* <span className=" bw-r text-black flex flex-col md:flex-row gap-3 lg:gap-4 items-start md:items-center z-20">
                Project Development
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                />
              </span> */}
            </h2>

            <h2 className="sec_hd bw-r lg:flex lg:gap-[20px]">
              {/* <span className="txt_gradient flex gap-3 lg:gap-4 items-center bw-m">
                Design &
                <br className="block" />
              </span> */}

              <span className=" bw-r text-black flex flex-col md:flex-row gap-3 lg:gap-4 items-start md:items-center z-20">
                & Operations
              </span>
              <img
                src="/abstract_pattern.svg"
                className="abstract_svg 360:mt-[5px]"
                alt="pattern"
              />
            </h2>
          </div>

          {/* Flex reverse */}
          <div className="flex flex-col 1024:flex-row z-10 justify-between mt-[20px] xl:mt-[30px] gap-5 xl:gap-[30px] lg:gap-[40px] 1440:gap-[40px]">
            {/* Image */}
            <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] z-20 xl:max-w-[48%] 1440:max-w-[45%]">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/enabling_agile/enablingsec6.jpg"
                alt="Factory"
              />
            </div>

            {/* Text */}
            <div className="1280:max-w-[550px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] z-20">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-black">
                And once you’re in, we keep everything running smoothly.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px] md:leading-[30px] mb-[20px] text-black">
                Our in-park operations teams are committed to ensuring 24x7
                functionality across all our facilities. From daily maintenance,
                safety, utilities, landscaping, and infrastructure performance,
                we work to minimise disruption and extend the life of every
                asset.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px] md:leading-[30px] mb-[20px] text-black">
                We go beyond upkeep. Our property management team follows robust
                safety protocols that include round-the-clock surveillance,
                regular drills, and emergency preparedness.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-black">
                We also take care of the softer systems. Our biodiversity
                gardens, native plantations, and nature-inspired design elements
                promote a healthy environment for your workforce. And with
                initiatives that foster a sense of community, we ensure Horizon
                parks are not just efficient, but welcoming.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-white py-18 md:pt-[40px] pt-[10px]">
          <Enab_assestcard amenitiesasset={amenitiesasset} />
        </div>
      </div>

      {/* ✅ Amenities card section at the end inside black div */}
    </div>
  );
};

export default Enab_Agil_sec6;

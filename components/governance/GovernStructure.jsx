"use client";
import React from "react";

const Box = ({ children, className = "" }) => {
  return (
    <div
      className={`relative ${className} py-4 xl:py-5 1440:py-6 pr-2`}
      style={{
        borderWidth: "1.2px", // border thickness
        borderStyle: "solid",
        borderImageSource:
          "repeating-linear-gradient(45deg, #D7D7D7 0 10px, transparent 10px 20px)", // gradient dashed with #7D7D7D
        borderImageSlice: 1.5,
      }}
    >
      {children}
    </div>
  );
};

const GovernStructure = () => {
  // Define data for each box
  const boxData1 = [
    "Providing the strategic Vision and Direction for carbon neutrality",
    "Providing final approval for projects",
  ];

  const boxData2 = [
    "Monitoring of GHG Inventory and emissions projections",
    "Provide recommendation on selection of decarbonisation lever",
    "Assess the budget for decarbonisation lever",
    "Capacity building sessions for team",
  ];

  const boxData3 = [
    "Capacity building within the team on data requirements",
    "Provide on the ground visibility on GHG Emission monitoring",
    "Identity implementable for emission reduction",
  ];

  return (
    <div className="py-[45px] hidden 1280:block bg-white sm:py-[80px] 1366:py-[100px]">
      <div className="fixup pb-[30px] 1366:pb-[40px]">
        <div className="flex gap-[10px] mt-2 md:gap-[17px] md:items-center md:flex-row flex-col pb-[15px] 1366:pb-[30px]">
          <h2 className="bw-m 1280:text-[56px] text-[#000] 1366:text-[64px] w-fit tracking-[-0.04em] 1280:leading-[66px] 1366:leading-[74px]">
            <span className="bw-r">Governance</span> Structure
          </h2>
          <img
            src="/abstract_pattern_sustain.png"
            className="abstract_sustian_svg h-fit"
          />
        </div>

        <p className="bw-r text-[24px] leading-[34px] text-[#000]">
          {" "}
          Monitoring Framework & ESG Governance Structure
        </p>
      </div>
      <div className="flex  1280:gap-[12px]  1366:gap-[16px] fixup w-full h-full ">
        <div className="flex  1280:w-full">
          {/* Left image */}

          <div className="-mr-[145px] 1366:-mr-[148px] 1536:-mr-[158px] z-30">
            <img
              src="/governance/structure.png"
              alt=""
              className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]  xl:h-[535px] 1366:h-[540px] 1440:h-[560px] object-cover"
            />
          </div>

          {/* Right column with gradient dashed borders */}
          <div className="flex flex-col gap-[18px] 1280:gap-[20px] mt-3 1366:mt-6 z-0">
            {/* --- Box 1 with arrow --- */}
            <div className="flex items-center ">
              <Box className="pl-36 1366:pl-40  flex-1">
                <div className="flex flex-col gap-[12px] 1280:gap-[14px]">
                  {boxData1.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-[8px] 1280:gap-[10px] 1366:gap-[20px]"
                    >
                      <img
                        src="/governance/arr.svg"
                        alt=""
                        className="object-contain xl:mt-2 1366:mt-1.5 w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]  1366:w-[20px] 1366:h-[20px]"
                      />
                      <p className="text-[16px] text-[#000] leading-[26px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Box>
              {/* Arrow beside the box */}
              <img
                src="/governance/linearr.svg"
                alt=""
                className="w-auto h-auto"
              />
            </div>

            {/* --- Box 2 with arrow --- */}
            <div className="flex items-center ">
              <Box className="pl-36 1366:pl-40 flex-1">
                <div className="flex flex-col gap-[12px] 1280:gap-[14px]">
                  {boxData2.map((item, i) => (
                    // <div
                    //   key={i}
                    //   className="flex  1280:gap-[10px] 1366:gap-[20px]"
                    // >
                    //   <img
                    //     src="/governance/arr.svg"
                    //     alt=""
                    //     className="object-contain w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] 1280:w-[16px] 1280:h-[16px] 1366:w-[20px] 1366:h-[20px]"
                    //   />
                    //   <p className="text-[16px] text-[#000] leading-[26px]">
                    //     {item}
                    //   </p>
                    // </div>
                    <div
                      key={i}
                      className="flex items-center gap-[8px] 1280:gap-[10px] 1366:gap-[20px]"
                    >
                      <img
                        src="/governance/arr.svg"
                        alt=""
                        className="object-contain w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]  1366:w-[20px] 1366:h-[20px]"
                      />
                      <p className="text-[16px] bw-r text-[#000] leading-[26px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Box>
              {/* Arrow beside the box */}
              <img
                src="/governance/linearr.svg"
                alt=""
                className="w-auto h-auto"
              />
            </div>

            {/* --- Box 3 with arrow --- */}
            <div className="flex items-center ">
              <Box className="pl-36 1366:pl-40 flex-1">
                <div className="flex flex-col gap-[12px] 1280:gap-[14px]">
                  {boxData3.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center 1280:gap-[10px] 1366:gap-[20px]"
                    >
                      <img
                        src="/governance/arr.svg"
                        alt=""
                        className="object-contain w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]  1366:w-[20px] 1366:h-[20px]"
                      />
                      <p className="text-[16px] bw-r text-[#000] leading-[26px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Box>
              {/* Arrow beside the box */}
              <img
                src="/governance/linearr.svg"
                alt=""
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
        <div className="text-white w-[30%] 1280:w-[30%] xl:mt-3 1440:mt-4 1536:w-[40%] ">
          <div className="mb-2.5 xl:mb-6 1440:mb-3">
            <h2 className="text-[#2BB04C] uppercase bw-m text-[16px] leading-[150%]">
              APEX COMMITTEE
            </h2>
            <p className="text-[#000] bw-r text-[14px] leading-[24px] 1366:text-[16px] 1366:leading-[26px]">
              The Apex Committee will meet quarterly or bi-annually to set
              strategic direction for carbon neutrality and make final decisions
              on emission reduction initiatives/projects.{" "}
            </p>{" "}
          </div>{" "}
          <div className=" mb-2.5 1366:mb-0 1440:mb-4   1280:mt-12 1366:mt-3  1440:mt-0 1536:mt-12">
            <h2 className="text-[#2BB04C] uppercase bw-m text-[16px] leading-[150%]">
              Core Steering Committee
            </h2>{" "}
            <p className="text-[#000] bw-r text-[14px] leading-[24px] 1366:text-[16px] 1366:leading-[26px]">
              The Core Steering Committee will meet weekly during the first 6
              months and monthly thereafter. They will handle key tasks like
              monitoring the GHG inventory, prioritizing the decarbonization
              levers, and conducting capacity-building sessions to ensure smooth
              project execution.
            </p>{" "}
          </div>{" "}
          <div className="mt-10 1280:mt-18 1366:mt-6  1366:mb-6 1440:mt-4 1536:mt-15">
            <h2 className="text-[#2BB04C] uppercase bw-m text-[16px] leading-[150%]">
              Asset wise carbon champion{" "}
            </h2>{" "}
            <p className="text-[#000] bw-r text-[14px] leading-[24px] 1366:text-[16px] 1366:leading-[26px]">
              Providing the strategic Vision and Direction for carbon neutrality{" "}
            </p>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default GovernStructure;

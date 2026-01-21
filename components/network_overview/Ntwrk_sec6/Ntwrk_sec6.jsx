"use client";
import React from "react";

const Ntwrk_sec6 = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative w-full fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] xl:pb-[100px]">
        <div className="flex flex-col justify-between mb-[30px] xl:mb-[0px] mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
          <div className="mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex items-start flex-col md:items-start relative overflow-hidden md:overflow-visible">
              <h2 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[45px] md:leading-[55px] xl:text-[56px] xl:leading-[66px] lg:tracking-[-2.64px] bw-r md:w-[460px] lg:w-[auto] capitalize">
                Built for Speed, Scale<br></br>
              </h2>

              <div className="flex gap-[10px] mt-2 md:gap-[17px]  md:flex-row flex-col">
                <h2 className="tracking-[-2px] text-[33px] leading-[34px] md:text-[45px] md:leading-[40px] xl:text-[56px] xl:leading-[55px] lg:tracking-[-2.64px] bw-r md:w-fit lg:w-[auto] capitalize">
                  <span className="bw-m">and Smarter Growth</span>
                </h2>
                <img src="/abstract_pattern.webp" className="abstract_svg" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[20px] flex-col lg:mt-[50px]  md:flex-row ">
          {/* column 1 */}
          <div className="group cursor-pointer bg-[#F7C99B] md:w-[170px] lg:w-[299px] h-[480px] md:h-[380px] lg:h-[480px] xl:h-[540px] pb-[20px] lg:pb-[0px] overflow-hidden relative">
            <div className="w-full z-1 lg:mb-[0px] mb-[20px] pt-[20px] pl-[15px] pr-[10px]  md:pt-[17px] md:pl-[14px] xl:pl-[17px] lg:pl-[20px] absolute">
              <h3 className="bw-m text-[26px] lg:text-[25px] md:text-[18px] xl:text-[28px] leading-[32px] lg:leading-[30px] xl:leading-[32px] md:leading-[21px] text-[#3C3C3C] w-[175px] md:w-[160px] lg:w-[auto]">
                Pan-India <br></br> Presence
              </h3>
              <p className="capitalize bw-r text-[#212121] text-[18px] md:text-[12px] lg:text-[15px] xl:text-[18px] mt-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                near major industrial corridors and urban consumption hubs
              </p>
            </div>
            <img
              src="/network_overview/pan_india.png"
              className="ml-[8px] absolute top-[auto] bottom-[0]  w-full "
            ></img>
            <img
              src="/network_overview/pan_india_overlay.png"
              className="w-full absolute top-[auto] bottom-[0] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></img>
          </div>

          {/* column 2 */}
          <div className="flex flex-col md:w-[170px] lg:w-[320px] lg:h-[480px] xl:h-[540px] gap-[20px]">
            {/* Box 1 */}
            <div className="group cursor-pointer bg-[#C7B2D6] h-[260px] md:h-[180px] lg:h-[230px] xl:h-[260px] relative">
              <div className="w-full z-1 pt-[20px] pl-[15px] pr-[10px]  md:pl-[14px] md:pt-[17px] xl:pl-[17px] lg:pl-[20px] absolute">
                <h3 className="bw-m text-[26px] lg:text-[25px] md:text-[18px] lk:text-[28px] leading-[32px] lg:leading-[30px] xl:leading-[32px] md:leading-[21px]  text-[#3C3C3C]  md:w-[160px] lg:w-[auto] ">
                  Grade A Future- <br></br> Ready Parks
                </h3>
                <p className="capitalize bw-r text-[#212121] text-[18px]  md:text-[12px] lg:text-[15px] xl:text-[18px] mt-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  with globally compliant infrastructure and operational
                  flexibility
                </p>
              </div>
              <img
                src="/network_overview/grade_A.png"
                className="w-full absolute bottom-[0px]"
              ></img>
              <img
                src="/network_overview/grade_A_overlay.png"
                className="w-full absolute top-[auto] bottom-[0] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></img>
            </div>

            {/* Box 2 */}
            <div className="group cursor-pointer bg-[#636466] h-[260px] md:h-[180px] lg:h-[230px] xl:h-[260px] overflow-hidden relative">
              <div className="w-full z-1 pt-[20px] pl-[15px] pr-[10px]  md:pl-[14px] md:pt-[17px] xl:pl-[17px] lg:pl-[20px] absolute">
                <h3 className=" bw-m text-[26px] lg:text-[25px] md:text-[18px] xk:text-[28px] leading-[32px] lg:leading-[30px] xl:leading-[32px] md:leading-[21px] text-[#fff]  md:w-[160px] lg:w-[auto]">
                  Fully Managed<br></br> Operations
                </h3>
                <p className="capitalize bw-r text-[#fff] text-[18px]  md:text-[12px] lg:text-[15px] xl:text-[18px] mt-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  to shift, scale, or split operations seamlessly across our
                  connected network
                </p>
              </div>
              <img
                src="/network_overview/human.png"
                className="w-full  absolute bottom-[0px] xl:bottom-[0px]"
              ></img>
              <img
                src="/network_overview/Fully_manag_overlay.png"
                className="w-full absolute top-[auto] bottom-[0]  opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></img>
            </div>
          </div>

          {/* column 3 */}
          <div className="flex flex-col md:w-[170px] lg:w-[320px] lg:h-[480px] xl:h-[540px] gap-[20px] relative">
            {/* Box 1 */}
            <div className="group cursor-pointer bg-[#939598] h-[260px] md:h-[180px] lg:h-[230px] xl:h-[260px]  overflow-hidden relative">
              <div className="w-full z-1 pt-[20px] pl-[15px] pr-[10px]  md:pl-[14px] md:pt-[17px] xl:pl-[17px] lg:pl-[20px] absolute">
                <h3 className="bw-m text-[26px] lg:text-[25px] md:text-[18px] xl:text-[28px] leading-[32px] lg:leading-[30px] xl:leading-[32px] md:leading-[21px]  text-[#fff]  md:w-[160px] lg:w-[auto] ">
                  Customisable <br></br> Spaces
                </h3>
                <p className="capitalize bw-r text-[#fff] text-[18px] md:text-[12px] lg:text-[15px] xl:text-[18px] mt-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
                  with options for tailored built-to-suit and plug-and-play
                  facilities
                </p>
              </div>
              <img
                src="/network_overview/customise.png"
                className="w-full mt-[6px]  md:absolute bottom-[0px]"
              ></img>
              <img
                src="/network_overview/customise_overlay.png"
                className="w-full absolute top-[auto] bottom-[0] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></img>
            </div>

            {/* Box 2 */}
            <div className="group cursor-pointer h-[260px] md:h-[180px] lg:h-[230px] xl:h-[260px] overflow-hidden relative">
              <div className="w-full z-1 pt-[20px] pl-[15px] pr-[10px]  md:pl-[14px] md:pt-[17px] xl:pl-[17px] lg:pl-[20px] absolute">
                <h3 className="bw-m text-[26px] lg:text-[25px] md:text-[18px] xk:text-[28px] leading-[32px] lg:leading-[30px] xl:leading-[32px] md:leading-[21px]  text-[#fff]  md:w-[160px] lg:w-[auto] ">
                  Sustainable By Design
                </h3>
                <p className="capitalize bw-r text-[#fff] text-[18px]  md:text-[12px] lg:text-[15px] xl:text-[18px] mt-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
                  with IGBC-certified parks, green building practices, and
                  IoT-enabled facilities management
                </p>
              </div>
              <img
                src="/network_overview/sustainable.png"
                className="w-full h-full object-cover mt-[8px] md:absolute bottom-[0px]"
              ></img>
              <img
                src="/network_overview/sustainable_overlay.png"
                className="w-full h-full object-cover absolute top-[auto] bottom-[0] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></img>
            </div>
          </div>

          {/* column 4 */}
          <div className="flex flex-col md:w-[170px] lg:w-[320px] lg:h-[480px] xl:h-[540px] gap-[20px] relative">
            {/* Box 1 */}
            <div className="group cursor-pointer bg-[#A987BC] h-[260px] md:h-[180px] lg:h-[230px] xl:h-[260px] relative overflow-hidden">
              <div className="w-full z-1 pt-[20px] pl-[15px] pr-[10px]  md:pl-[14px] md:pt-[17px] xl:pl-[17px] lg:pl-[20px] absolute">
                <h3 className=" bw-m text-[26px] lg:text-[25px] md:text-[18px] xk:text-[28px] leading-[32px] lg:leading-[30px] xl:leading-[32px] md:leading-[21px]  text-[#fff] md:w-[160px] lg:w-[auto] ">
                  Human-Centric <br></br> Environments
                </h3>
                <p className="capitalize bw-r text-[#fff] text-[18px]  md:text-[12px] lg:text-[15px] xl:text-[18px] mt-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  designed for wellbeing, safety, and workforce productivity
                </p>
              </div>
              <img
                src="/network_overview/human1.png"
                className="mt-[0px] w-full h-full object-cover"
              ></img>
              <img
                src="/network_overview/human1_overlay.png"
                className="w-full absolute top-[auto] bottom-[0] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></img>
            </div>

            {/* Box 2 */}
            <div className="group cursor-pointer bg-[#FCC79B] h-[260px] md:h-[180px] lg:h-[230px] xl:h-[260px] overflow-hidden relative">
              <div className="w-full z-1 pt-[20px] pl-[15px] pr-[10px]  md:pl-[14px] md:pt-[17px] xl:pl-[17px] lg:pl-[20px] absolute ">
                <h3 className=" bw-m text-[26px] lg:text-[25px] md:text-[18px] xk:text-[28px] leading-[32px] lg:leading-[30px] xl:leading-[32px] md:leading-[21px]  text-[#3C3C3C] md:w-[160px] lg:w-[auto] ">
                  Flexibility And<br></br> Scalability
                </h3>
                <p className="capitalize bw-r text-[#212121] text-[18px]  md:text-[12px] lg:text-[15px] xl:text-[18px] mt-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  to simplify your growth journey, wherever you go
                </p>
              </div>
              <img
                src="/network_overview/leasing.png"
                className="w-full mt-[8px] md:absolute bottom-[0px]"
              ></img>
              <img
                src="/network_overview/leasing_overlay.png"
                className="w-full absolute top-[auto] bottom-[0] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}
    </div>
  );
};

export default Ntwrk_sec6;

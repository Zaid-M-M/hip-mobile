"use client";
import React from "react";
import Btn from "@/components/global/Btn";

const park_data = [
  {
    title: "Barrier-free layouts ",
    icon: "/network_overview/wheelchair.svg",
  },
  {
    title: "Shaded green spaces ",
    icon: "/network_overview/trees.svg",
  },
  {
    title: "On-site Cafeteria",
    icon: "/network_overview/cafeteria.svg",
  },
  {
    title: "Medical rooms",
    icon: "/network_overview/medical.svg",
  },
  {
    title: "Urban Forest ",
    icon: "/network_overview/urban_forest.svg",
  },
];

const Ntwrk_sec4 = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        className="purple_vctr hidden md:block absolute top-0 left-0 lg:top-auto lg:bottom-[-110px] lg:left-[170px] md:w-[350px] w-[300px]"
        src="/purple_vector.svg"
      />
      <img
        className="green_vctr hidden md:block absolute top-0 left-0 lg:top-auto lg:bottom-[-110px] lg:left-[170px] md:w-[350px] w-[300px]"
        src="/green_vector.svg"
      />

      <div className="relative w-full fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] xl:pb-[100px]">
        <div className="flex flex-col justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex items-start flex-col relative gap-[23px] md:w-[460px] lg:w-[auto]">
              <h1 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[45px] md:leading-[55px] xl:text-[56px] xl:leading-[66px] lg:tracking-[-2.64px] bw-r md:w-[460px] lg:w-[auto] capitalize">
                Designed for People<br></br>
                <span className="bw-m">Built for Productivity.</span>
              </h1>
              <img src="/abstract_pattern.webp" className="" />
            </div>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">
              At Horizon, we believe the heartbeat of any business isn’t the
              machines — it’s the people. That’s why our industrial and
              logistics parks are human-centric—designed not just for efficient
              operations, but for the happiness of people who spend most of
              their waking hours in these environs.
            </p>

            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              From barrier-free layouts and shaded green spaces to on-site
              cafeterias, medical rooms, and urban forests, every detail is
              built to nurture wellbeing and productivity. Because when people
              thrive, businesses grow.
            </p>
            <Btn text="OUR PARKS" className="mt-[24px]" />
          </div>
        </div>
      </div>

      {/* Icon Box */}
      <div className="flex gap-[50px] mb-[100px]">
        {park_data.map((park_data, index) => (
          <div className="border-1 border-[#D4D4D4] w-[280px] h-[280px] flex justify-center items-center text-center">
            <div>
              <img src={park_data.icon} className="m-[auto]"></img>
              <h3 className="">{park_data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ntwrk_sec4;

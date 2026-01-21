"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Btn from "@/components/global/Btn";

const park_data = [
  { title: "Barrier-Free Layouts ", icon: "/network_overview/wheelchair.svg" },
  { title: "Shaded Green Spaces ", icon: "/network_overview/trees.svg" },
  { title: "On-Site Cafeteria", icon: "/network_overview/cafeteria.svg" },
  { title: "Medical Rooms", icon: "/network_overview/medical.svg" },
  { title: "Urban Forest ", icon: "/network_overview/urban_forest.svg" },
];

const Ntwrk_sec4 = () => {
  return (
    <div className="relative overflow-hidden h-[auto] 1600:h-[auto] 1920:h-[auto]">
      {/* Background Vectors */}
      <img
        className="purple_vctr absolute bottom-0 right-0 lg:top-auto lg:bottom-[-110px] lg:left-[-200px] md:w-[350px] xl:w-[auto] w-[300px]"
        src="/purple_vector.svg"
      />
      <img
        className="green_vctr  absolute bottom-0 right-0 lg:top-auto lg:bottom-[-110px] lg:left-[150px] md:w-[350px] xl:w-[auto] w-[300px]"
        src="/green_vector.svg"
      />

      <div className="sticky top-0 h-[auto] 1600:pb-[85px] pb-[45px]">
        {/* Text Section */}
        <div className="relative w-full fix pt-[45px] md:pt[80px] lg:pt[70px] pb-[45px] md:pb[55px] xl:pb-[70px]">
          <div className="flex flex-col justify-between xl:mt-[15px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
            <div className=" max-w-[600px] lg:max-w-[45%]">
              <div className="flex items-start flex-col relative gap-[8px] lg:gap-[15px] md:w-[480px]">
                <h2 className="tracking-[-2px] bw-m text-[33px] leading-[43px] md:text-[45px] md:leading-[55px] xl:text-[56px] xl:leading-[66px] lg:tracking-[-2.64px] bw-r capitalize">
                  Designed for People <br />
                  <span className="bw-r">Built for Productivity.</span>
                </h2>
                <img
                  src="/abstract_pattern.webp"
                  alt="decor"
                  className="abstract_svg"
                />
              </div>
            </div>
            <div className="1280:max-w-[auto] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-r md:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">
                At Horizon, we believe the heartbeat of any business isn’t the
                machines — it’s the people. That’s why our industrial and
                logistics parks are human-centric—designed not just for
                efficient operations, but for the happiness of people who spend
                most of their waking hours in these environs
              </p>
              <p className="bw-r md:text-[17px] 1280:text-[20px] md:leading-[30px]">
                From barrier-free layouts and shaded green spaces to on-site
                cafeterias, medical rooms, and urban forests, every detail is
                built to nurture wellbeing and productivity. Because when people
                thrive, businesses grow.
              </p>
              <Btn text="OUR PARKS" className="mt-[24px]" />
            </div>
          </div>
        </div>

        {/* Icon Box Horizontal Scroll */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:flex-row gap-[14px] fix">
          {park_data.map((park_data, index) => (
            <div className="border-1 bg-[#fff] border-[#D4D4D4] px-[10px] py-[15px] w-[auto] md:w-[auto] md:h-[200px] flex justify-center items-center text-center">
              <div>
                <img
                  src={park_data.icon}
                  className="m-[auto] w-[50px] lg:w-[60px] mb-[10px]"
                ></img>
                <h3 className="text-[#212324] text-[17px] leading-[20px] lg:text-[20px] bw-m ">
                  {park_data.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ntwrk_sec4;

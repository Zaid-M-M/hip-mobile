"use client";
import Btn from "@/components/global/Btn";
import PlayIcon from "./PlayIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

const BuildFuture = () => {

  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = new Player(videoRef.current);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playerRef.current?.play();
            } else {
              playerRef.current?.pause();
            }
          });
        },
        { threshold: 0.5 } // play when at least 50% of video is visible
      );

      observer.observe(videoRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);


  return (
    <>
      {/* Section */}
      <div className="relative flex overflow-hidden w-full h-full 1024:h-auto py-[50px] 1024:py-[70px] 1280:pt-[60px] 1280:pb-[80px] bg-black ">
        <img
          src="/know-us/bgfuture.png"
          className="absolute top-auto bottom-[0px] xl:right-[1%] 1440:right-[3%] 1536:right-[5%] 1600:right-[7%] 1920:right-[15%] xl:w-[100%] 1400:w-[91%] 1536:w-[86%] 1600:w-[80%] 1920:w-[71%] right-[5%] 1024:w-full z-0 h-auto"
          alt=""
        />
        <div className="absolute bottom-0 -left-3.5 sm:left-0 w-[320px] h-[320px] rotate-[-32.402deg] rounded-full opacity-30 bg-[#0db14b] blur-[115px]"></div>

        <div className="fix1440 z-10">
          <h1 className="bw-m text-[35px] 768:text-[45px] md:mb-5 h-fit 1280:text-[65px] leading-[40px] sm:leading-normal 1280:leading-[120%] 1366:text-[64px] bg-[linear-gradient(94deg,#AC38D9_10%,#f47920_40%,#f47920_100%)] bg-clip-text text-transparent whitespace-nowrap overflow-visible tracking-[-0.04em]">
            We're Building <br className="md:hidden flex" /> For The Future
          </h1>

          <div className="flex flex-col-reverse 1024:flex-row gap-[32px] xl:gap-[35px] 1440:gap-[85px] justify-between items-start pt-[20px] 1024:pt-[1%]">
            {/* Left content */}
            <div className="flex flex-1 flex-col gap-[20px] 1024:gap-[10px] 1366:gap-[10px]">
              <p className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[18px] 1280:text-[20px] leading-[26px] 1024:leading-[25px] 1280:leading-[30px] w-full 1280:w-[100%] text-[#E0E0E0]">
                We’re committed to building planet-friendly and human-centric environments where businesses thrive, and communities grow— with smarter tech, greener buildings, and strong governance mechanisms.
              </p>
              <p className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[18px] 1280:text-[20px] leading-[26px] 1024:leading-[25px] 1280:leading-[30px] w-full 1280:w-[100%] text-[#E0E0E0]">
                From reducing our carbon footprint to developing ergonomic spaces and introducing inclusive growth policies, we are committed to creating a better future for all.
              </p>
              <p className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[18px] 1280:text-[20px] leading-[26px] 1024:leading-[25px] 1280:leading-[30px] w-full 1280:w-[100%] text-[#E0E0E0]">
                Our parks are IGBC platinum certified and we are aligned with global standards including GRESB, ISO, UNSDGs and GPTW.
              </p>

              <div className="flex flex-row gap-[14px] xl:mt-[25px]">
                <a href="#" className="flex items-center gap-[10px] px-[20px] py-[12px] border tracking-[1.8px] bw-m text-[12px] 768:text-[16px] 1280:text-[16px] border-white text-white w-fit uppercase bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
                  Human Centric Parks
                  <img className='w-[23px] md:w-[24px] lg:w-[25px] ' src='/btn_whit_arrow.svg' />
                </a>
                <a href="#" className="flex items-center gap-[10px] px-[20px] py-[12px] border tracking-[1.8px] bw-m text-[12px] 768:text-[16px] 1280:text-[16px] border-white text-white w-fit uppercase bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
                  Sustainability
                  <img className='w-[23px] md:w-[24px] lg:w-[25px] ' src='/btn_whit_arrow.svg' />
                </a>
              </div>
            </div>


            {/* Autoplay Video */}
            <div className="flex z-0 w-full lg:w-[50%] h-full pointer-events-auto md:items-end md:justify-start lg:flex">
              <div className="relative w-full 1280:w-[670px] aspect-video">
                <iframe
                  ref={videoRef}
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/1114218589?muted=1&autopause=0"
                  title="We're Building For The Future Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
};

export default BuildFuture;

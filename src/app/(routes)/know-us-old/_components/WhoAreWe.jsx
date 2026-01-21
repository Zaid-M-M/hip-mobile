"use client";

import Btn from "@/components/global/Btn";
import PlayIcon from "./PlayIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

const WhoAreWe = () => {
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
    <div className="relative w-full min-h-full pt-[45px] pb-[45px] overflow-hidden 768:pb-[60px] 1024:pb-[80px] 1280:pb-[85px]">
      <div className="fix">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
          viewport={{ amount: 0.25, once: true }}
          className="bw-m bcstyles flex gap-[10px] items-center px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-[fit-content]"
        >
          <Link href="/" className="text-[13px] md:text-[16px]">
            Home
          </Link>
          <div>/</div>
          <Link href="#" className="text-[13px] md:text-[16px]">
            Who Are We
          </Link>
        </motion.div>
        <div className="flex items-left gap-4 sm:mt-1 1024:gap-0 relative flex-col w-fit ">
          <h1 className="bw-m text-[35px] 768:text-[45px] 768:leading-[55px] 1280:leading-[74px] whitespace-nowrap tracking-[-0.04em] 1024:text-[62px] 1280:text-[64px] 1366:text-[64px] leading-[74px]">
            India’s fastest growing
          </h1>
          <h1 className="bw-r text-[35px] 768:text-[45px] 768:leading-[55px] 1280:leading-[74px] whitespace-nowrap tracking-[-0.04em] 1024:text-[62px] 1280:text-[64px] 1366:text-[64px] leading-[74px]">
            Developers of Grade A parks
          </h1>
          <div className="xl:w-[307px] xl:h-[58px] md:w-[200px] md:h-[48px] w-[150px] overflow-hidden absolute xl:top-[19px] xl:right-[-27%]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.25, once: true }}
            >
              <img
                src="/abstract_pattern.svg"
                className="w-[100px] xl:h-[58px] sm:w-auto md:h-[48px] h-[30px] object-cover"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col 1024:flex-row gap-[24px] 768:gap-[32px] pt-[10px] 768:pt-[30px] 1024:pt-[40px]">
          <div className="flex w-full lg:w-[50%] 1280:w-auto">
            <img className="min-w-full" src="/know-us/k1.png" alt="" />
          </div>
          <div className="flex flex-col 1024:w-[60%] lg:flex-1">
            <div className="flex flex-col gap-[10px] 1024:gap-[12px] 1280:gap-[30px]">
              <p className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[26px] 1024:leading-[25px] 1280:leading-[30px]">
                Horizon is creating high-performance ecosystems that power the country’s growth. We provide infrastructure that powers manufacturing and enables efficient storage and movement of goods.
              </p>
              <p className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[26px] 1024:leading-[25px] 1280:leading-[30px]">
                As a Blackstone logistics platform, we leverage the group’s vast experience in global real estate management and best practices. This combined with our talented team, deep local expertise and strong partnerships empowers to deliver world class and premium industrial and warehousing solutions.
              </p>
            </div>
            <div className="flex items-end 1280:items-start pt-[20px] 1024:pt-[5%] h-full">
              <Btn text="Our Brand and Journey" />
            </div>
          </div>
        </div>

      </div>

      {/* Section 2 with video */}
      <div className="relative">

        <img className="green_vctr hidden md:block absolute top-[-80px] right-[20px] lg:top-[-110px] lg:right-[150px] lg:w-[auto] md:w-[350px] w-[300px]" src='/green_vector.svg' />
        <img className="orange_vctr hidden md:block absolute top-[-100px] right-[-100px] lg:top-[-100px] lg:right-[-50px] lg:w-[auto]  md:w-[350px] w-[300px]" src='/orange_vector.svg' />

        <div className="relative flex flex-col-reverse h-full w-full sm:pt-[80px] items-center justify-between gap-1 768:gap-[32px] pt-8 fix 1024:flex-row">
          <div className="flex flex-col w-full lg:w-[50%] pt-2.5 768:pt-0 gap-[18px] 1280:gap-[34px]">

            <div className="flex items-left gap-4 sm:mt-1 1024:gap-0 relative flex-col w-fit ">
              <h1 className="bw-m text-[35px] 768:text-[45px] 768:leading-[55px] 1280:leading-[74px] whitespace-nowrap tracking-[-0.04em] 1024:text-[62px] 1280:text-[64px] 1366:text-[64px] leading-[74px]">
                360° Customization.
              </h1>
              <h1 className="bw-r text-[35px] 768:text-[45px] 768:leading-[55px] 1280:leading-[74px] whitespace-nowrap tracking-[-0.04em] 1024:text-[62px] 1280:text-[64px] 1366:text-[64px] leading-[74px]">
                360° Solutions.
              </h1>
              <div className="xl:w-[210px] xl:h-[58px] md:w-[200px] md:h-[48px] w-[150px] overflow-hidden absolute xl:bottom-[10px] xl:right-[-18%]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
                  viewport={{ amount: 0.25, once: true }}
                >
                  <img
                    src="/abstract_pattern.svg"
                    className="w-[100px] xl:w-[207px] xl:h-[58px] sm:w-auto md:h-[48px] h-[30px] object-cover"
                    alt=""
                  />
                </motion.div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[14px] w-full sm:w-[90%] 1024:w-[86%] pb-[20px] 1280:pb-[34px]">
                <p className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[26px] 1024:leading-[25px] 1280:leading-[30px]">
                  Beyond just strategically located industrial and logistics parks, we are committed to providing integrated solutions that surpass our customers’ expectations. These include design and construction, leasing, operations, and asset management—ensuring efficiency, quality, and agility at every step
                </p>
                <p className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[26px] 1024:leading-[25px] 1280:leading-[30px]">
                  We empower our customers to get a head start and focus on their core business by also offering value adds in the form of solutions for renewable energy, CAPEX for fitouts, technology integration and more.

                </p>
              </div>
              <div>
                <Btn text="Integrated Solutions" />
              </div>
            </div>
          </div>

          {/* Autoplay Video */}
          <div className="flex z-0 w-full lg:w-[50%] h-full pointer-events-auto md:items-end md:justify-start lg:flex">
            <div className="relative w-full 1280:w-[670px] aspect-video">
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src="https://player.vimeo.com/video/1114210964?muted=1&autopause=0"
                title="Who Are We Video"
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

  );
};

export default WhoAreWe;
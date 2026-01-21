"use client";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "framer-motion";
import TransitionLink from "@/src/app/TransitionLink";

export default function Sector_solution() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // fade starts when section enters
  });

  return (
    <div className="bg-[#000000]">
      <div
        ref={sectionRef}
        className="fix sticky top-0 flex flex-col lg:flex-row justify-between pt-[45px] pb-[45px] xl:pt-[100px] xl:pb-[100px]"
      >
        <ReactLenis root>
          <Sector_scroll progress={scrollYProgress} />
        </ReactLenis>
      </div>
    </div>
  );
}

function Sector_scroll({ progress }) {
  const paraRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paraRef,
    offset: ["start start", "end end"], // animation happens when para enters/exits viewport
  });
  const para_scroll = useTransform(
    scrollYProgress,
    [0.8, 0.3],
    ["0px", "720px"]
  );
  // Fade in text between 0% and 40% of section scroll
  // const para_scroll = useTransform(progress, [1, 0.9], ['720px', '0px']);

  return (
    <>
      {/* Left Text */}
      <div className="flex-1 " ref={paraRef}>
        <div className=" pt-[0px] pb-[10px] bg-[#000]">
          <h2 className="sec_hd whitespace-nowrap overflow-visible ">
            <span className="bg-clip-text bw-m txt_gradient">
              Sector Special
            </span>
          </h2>

          <div className="flex gap-[10px] md:gap-[17px]">
            <h2 className="sec_hd whitespace-nowrap overflow-visible">
              <span className="bw-r text-[#fff]">Solutions</span>
            </h2>
            <img src="/abstract_pattern.svg" className="abstract_svg" />
          </div>
        </div>
        <div className="lg:w-[600px] lg:mt-[30px] mg-[15px]">
          <motion.div transition={{ duration: 0.8, ease: "easeOut" }}>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[18px] text-[#E0E0E0]">
              Horizon’s facilities reflect our experience in serving diverse
              sectors and their unique business needs.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[0px] text-[#E0E0E0]">
              From building auto component plants in Maharashtra to
              fast-tracking a plug-and-play fulfillment center in NCR, or
              developing a factory for aerospace components in Telangana, we
              design with purpose—adapting layouts, specs, and timelines to your
              sector’s operational, safety, and compliance requirements.
            </p>

            {/* <a href="#" className="w-fit m-[auto] bw-sb uppercase border-1 tracking-[1.6px] text-[#fff] bg-[#000] border-[#fff] text-[13px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[20px]  lg:py-[8px] lg:px-[20px]  xl:py-[15px] xl:px-[30px] flex gap-[10px] items-start justify-start">
              Sector Specialist
              <img className='w-[23px] md:w-[24px] lg:w-[25px] ' src='/btn_whit_arrow.svg' />
            </a> */}
            <div className="w-fit pt-[20px] md:pt-[34px]">
              <TransitionLink
                href="/sector-specialists/"
                className="bw-sb uppercase border-1 tracking-[1.6px] text-[#fff] bg-[#000] border-[#fff] text-[13px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[20px]  lg:py-[8px] lg:px-[20px]  xl:py-[15px] xl:px-[30px] flex gap-[10px] items-start justify-start"
              >
                Sectors Specialist
                <img
                  className="w-[23px] md:w-[24px] lg:w-[25px]"
                  src="/btn_whit_arrow.svg"
                />
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Image */}
      <div
        div
        className="flex-1 ml-auto xl:pt-[30px] pt-[30px] md:m-[auto] mt-[20px] md:mt-[auto]"
      >
        <img
          src="/Cap_Overview/sector_img.png"
          alt="Sector"
          className="ml-[auto] md:m-[auto] md:w-[80%] lg:w-[80%]"
        />
        {/* <a href="#" className="w-fit m-[auto] bw-sb uppercase border-1 tracking-[1.6px] text-[#fff] bg-[#000] border-[#fff] text-[13px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-[26px] py-[6px] px-[13px] md:py-[7px] md:px-[20px]  lg:py-[8px] lg:px-[20px]  xl:py-[15px] xl:px-[30px] flex gap-[10px] items-center">
          Sector Specialist
          <img className='w-[23px] md:w-[24px] lg:w-[25px] ' src='/btn_whit_arrow.svg' />
        </a> */}
      </div>
    </>
  );
}

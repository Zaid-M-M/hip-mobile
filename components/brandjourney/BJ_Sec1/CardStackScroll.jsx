"use client";
import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import TransitionLink from "@/src/app/TransitionLink";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [offsetY, setOffsetY] = useState({
    card1: -80,
    card2: -40,
    card3: 0,
    card4: 45,
  });

  useEffect(() => {
    const width = window.innerWidth;

    if (width >= 1920) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1600) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1536) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1440) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1366) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1280) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1024) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width <= 767) {
      setOffsetY({ card1: 35, card2: 55, card3: 75, card4: 95 });
    } else {
      setOffsetY({ card1: -80, card2: -40, card3: 0, card4: 45 });
    }
  }, []);

  return (
    // <ReactLenis root>
    <main
      ref={container}
      className="1280:pt-[0px] 1600:pt-[0px] pb-[150px] fix"
    >
      {/* CARD 1 */}
      <Card1 progress={scrollYProgress} offsetY={offsetY.card1} />

      {/* CARD 2 */}
      <Card2 progress={scrollYProgress} offsetY={offsetY.card2} />

      {/* CARD 3 */}
      <Card3 progress={scrollYProgress} offsetY={offsetY.card3} />

      {/* CARD 4 */}
      <Card4 progress={scrollYProgress} offsetY={offsetY.card4} />
    </main>
    // </ReactLenis>
  );
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

// CARD 1
function Card1({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(
    progress,
    [0, 0.4],
    isMobile ? [1, 0.91] : [1, 0.89]
  );
  const blur = useTransform(progress, [0.0, 0.1], ["blur(0px)", "blur(1.2px)"]);

  return (
    <div
      ref={container}
      className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center w-full "
    >
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[97%] bg-[#8F53A1] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[480px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-start md:items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px]  lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Built to Global Specifications
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
                Featuring standardised infrastructure, smart facilities, and
                scalable design, our parks are engineered for agility,
                productivity, safety, and sustainability. From land acquisition
                and master planning to construction, leasing, and long-term
                asset management, our team is here to support you end-to-end.
              </p>
              <TransitionLink
                href="/integrated-business-solutions/"
                className="text-[13px] leading-[22px] gap-[15px] xl:mt-[40px] lg:mt-[20px] mt-[25px] text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex lg:items-center text-left bw-sb"
              >
                Integrated Business Solutions{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </TransitionLink>
            </div>
            <img
              className="absolute right-0 top-0 w-[70px] lg:w-[auto]"
              src="/brand_journey/cards_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/brand_journey/card1.jpg"
            ></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// CARD 2
function Card2({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(
    progress,
    [0, 0.5],
    isMobile ? [1, 0.94] : [1, 0.92]
  );
  const blur1 = useTransform(
    progress,
    [0.3, 0.5],
    ["blur(0px)", "blur(1.2px)"]
  );

  return (
    <div
      ref={container}
      className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur1 }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[98%] bg-[#0db14b] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[480px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px]  py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                60% of Our Customers Are Fortune 500 Companies
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
                We are proud to serve the needs of more than 100 customers
                across diverse industries such as 3PL, e-Commerce, automotive
                and auto ancillaries, aerospace and engineering, FMCG, and
                retail.
              </p>

              <TransitionLink
                href="/sector-specialists/"
                className="text-[13px] leading-[22px] gap-[15px] xl:mt-[40px] lg:mt-[20px] mt-[25px] text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex lg:items-center text-left bw-sb"
              >
                Sector Specialists{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </TransitionLink>
            </div>
            <img
              className="absolute left-0 bottom-0 w-[70px] lg:w-[auto]"
              src="/brand_journey/cards_dbl_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/brand_journey/card2.jpg"
            ></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// CARD 3
function Card3({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(
    progress,
    [0, 0.5],
    isMobile ? [1, 0.97] : [1, 0.95]
  );
  const blur2 = useTransform(progress, [0.5, 1], ["blur(0px)", "blur(1.2px)"]);

  return (
    <div
      ref={container}
      className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur2 }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[99%]  bg-[#f47920] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[480px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                More Than Infrastructure
              </h2>
              <div className="crd3_scroll">
                <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px] xl:mb-[10px]">
                  We’re committed to building planet-friendly and human-centric
                  environments where businesses thrive, and communities grow -
                  with smarter tech, greener buildings, and strong governance
                  mechanisms.
                </p>
                <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px] xl:mb-[10px]">
                  From reducing our carbon footprint to developing sustainable
                  parks - IGBC platinum certified and aligned with global
                  environmental standards, we are committed to creating a better
                  future for all.
                </p>
                {/* <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
                  Our parks are IGBC platinum certified, and we are aligned with global standards including GRESB, ISO, UNSDGs and GPTW.
                </p> */}
              </div>

              <TransitionLink
                href="/sustainability/"
                className="text-[13px] leading-[22px] gap-[15px] xl:mt-[40px] lg:mt-[20px] mt-[25px] text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex lg:items-center text-left bw-sb"
              >
                Sustainability{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </TransitionLink>
            </div>
            <img
              className="absolute right-0 top-0 w-[70px] lg:w-[auto]"
              src="/brand_journey/cards_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/brand_journey/card3.jpg"
            ></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// CARD 4
function Card4({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(progress, [0, 0.5], isMobile ? [1, 1] : [1, 0.98]);
  // const blur3 = useTransform(progress, [0.9, 1.5], ['blur(0px)', 'blur(4px)']);

  return (
    <div
      ref={container}
      className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{ scale, translateY: offsetY }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[100%]  bg-[#000] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[480px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px]  py-[30px] px-[20px] 1280:h-[auto] h-[100%] relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Backed by Blackstone
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
                As a Blackstone Logistics Platform, and with access to its
                global scale, capital, and best practices, Horizon is redefining
                industrial infrastructure in India. Our strong local
                partnerships, combined with Blackstone’s global insights, give
                us a competitive edge; accelerating growth, raising the bar on
                quality, and ensuring long-term value for our customers
              </p>
              {/* <a href='' className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[13px] lg:leading-[24px] flex items-center">Integrated Business Solutions <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a> */}
            </div>
            <img
              className="absolute left-0 bottom-0 w-[70px] lg:w-[auto]"
              src="/brand_journey/cards_dbl_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/brand_journey/card4.jpg"
            ></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

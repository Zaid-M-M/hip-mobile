"use client";
import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import TransitionLink from "@/src/app/TransitionLink";

export default function Index({ career_sec3_infobox = [] }) {
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
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 110 });
    } else if (width >= 1600) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 110 });
    } else if (width >= 1536) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 110 });
    } else if (width >= 1440) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 110 });
    } else if (width >= 1366) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 110 });
    } else if (width >= 1280) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 110 });
    } else if (width >= 1024) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width <= 767) {
      setOffsetY({ card1: 35, card2: 55, card3: 35, card4: 55 });
    } else {
      setOffsetY({ card1: -80, card2: -40, card3: 0, card4: 45 });
    }
  }, []);

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="1280:pt-[0px] 1600:pt-[0px] xl:mt-[50px] xl:pb-[150px] 1920:pb-[150px] pb-[80px] relative "
      >
        {/* <img
          className="absolute right-0 top-0 w-[700px] mt-[27px] hidden lg:block"
          src="/arrow_mark.png"
        /> */}
        {/* CARD 1 */}
        {/* <Card1 progress={scrollYProgress} offsetY={offsetY.card1} /> */}

        {/* CARD 2 */}
        <Card2 progress={scrollYProgress} offsetY={offsetY.card2 - 50} />

        {/* CARD 3 */}
        <Card3 progress={scrollYProgress} offsetY={offsetY.card3} />

        {/* CARD 4 */}
        <Card4 progress={scrollYProgress} offsetY={offsetY.card4} />
      </main>
    </ReactLenis>
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

// // CARD 2

function Card2({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(
    progress,
    [0, 0.5],
    isMobile ? [1, 0.94] : [1, 0.9]
  );
  const blur1 = useTransform(
    progress,
    [0.3, 0.5],
    ["blur(0px)", "blur(1.2px)"]
  );

  // Determine translateY based on device
  const translateY = isMobile ? offsetY + 20 : offsetY + 40;

  return (
    <div
      ref={container}
      className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{ scale, translateY, filter: blur1 }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[98%] bg-[#8F53A1] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[480px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px] 1280:h-[auto] h-[100%] relative flex items-center">
            <div className="z-1">
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Upskilling Programs
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[29px] xl:text-[20px] xl:leading-[30px]">
                Our learning and development programmes keep the team ahead of
                the curve. With skill development workshops, business ethics,
                compliance and managerial training, we nurture a future-ready
                workforce. We prioritise their well-being through regular
                wellness sessions for physical and mental health. Tech workshops
                further drive innovation and growth. These programs focus on
                helping our team master best business practices, emerging trends
                and sharpen their leadership skills.
              </p>
              {/* <a
                href=""
                className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex items-center bw-sb"
              >
                Sector Specialists{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </a> */}
              <TransitionLink
                href="/sector-specialists/"
                className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex items-center bw-sb"
              >
                Sector Specialists{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </TransitionLink>
            </div>
            <img
              className="absolute left-0 bottom-0 w-[70px] lg:w-[130px] xl:w-[auto] z-0"
              src="/brand_journey/cards_dbl_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/culture/card1.jpg"
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
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[99%]  bg-[#0db14b] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px]  md:h-[500px] h-[550px]">
          <div className="w-[100%] md:w-[50%]  lg:px-[45px] 1440:px-[70px]  lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[40px] 1440:text-[44px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Progressive Work Environment
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] md:text-[17px] lg:text-[19px] lg:leading-[29px] xl:text-[18px] xl:leading-[30px] pb-[15px]">
                We foster a culture where everyone feels valued, supported, and
                equipped to succeed. Through Employee Satisfaction (E-SAT)
                surveys, we listen, understand, and take action to boost
                engagement, support professional growth, and maintain a strong
                sense of community.
              </p>
            </div>
            <img
              className="absolute right-0 top-0 w-[60px] md:w-[70px] lg:w-[130px] xl:w-[auto]"
              src="/brand_journey/cards_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/culture/card2.jpg"
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
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[100%]  bg-[#f47920] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] md:h-[500px] h-[550px]">
          <div className="w-[100%] md:w-[50%] lg:px-[45px] 1440:px-[70px]  lg:py-[0px]  py-[30px] px-[20px] 1280:h-[auto] h-[100%] relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[40px] 1440:text-[44px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Lean and Talented Teams
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] md:text-[17px] lg:text-[19px] lg:leading-[29px] xl:text-[18px] xl:leading-[30px] pb-[15px]">
                Our lean team structures ensure clarity, accountability, and
                quick decision-making. Our open-door policy promotes real-time
                problem-solving. Finally, every team member is encouraged to
                identify inefficiencies and propose innovations, creating a
                workplace that thrives on accountability, innovation, and
                growth.
              </p>
            </div>
            <img
              className="absolute left-0 bottom-0  w-[60px] md:w-[70px] lg:w-[130px] xl:w-[auto]"
              src="/brand_journey/cards_dbl_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/culture/card3.jpg"
            ></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

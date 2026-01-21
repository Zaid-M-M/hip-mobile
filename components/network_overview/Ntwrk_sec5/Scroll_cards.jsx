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
        className="1280:pt-[0px] 1600:pt-[0px] xl:mt-[0px] xl:pb-[150px] 1920:pb-[150px] pb-[80px] relative"
      >
        <img
          className="absolute right-0 top-0 w-[700px] mt-[27px] hidden lg:block"
          src="/arrow_mark.png"
        />
        {/* CARD 1 */}
        {/* <Card1 progress={scrollYProgress} offsetY={offsetY.card1} /> */}

        {/* CARD 2 */}
        {/* <Card2 progress={scrollYProgress} offsetY={offsetY.card2} /> */}

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

// CARD 1
// function Card1({ progress, offsetY }) {
//   const container = useRef(null);
//   const isMobile = useIsMobile();
//   const scale = useTransform(
//     progress,
//     [0, 0.4],
//     isMobile ? [1, 0.91] : [1, 0.89]
//   );
//   const blur = useTransform(progress, [0.0, 0.1], ["blur(0px)", "blur(1.2px)"]);

//   return (
//     <div
//       ref={container}
//       className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center w-full "
//     >
//       <motion.div
//         style={{ scale, translateY: offsetY, filter: blur }}
//         className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[97%] bg-[#8F53A1] p-0 flex flex-col justify-between overflow-hidden"
//       >
//         <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[480px]">
//           <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-start md:items-center">
//             <div>
//               <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px]  lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
//                 Built to Global Specifications
//               </h2>
//               <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[29px] xl:text-[20px] xl:leading-[30px]">
//                 Featuring standardised infrastructure, smart facilities, and
//                 scalable design, our parks are engineered for agility,
//                 productivity, safety, and sustainability. From land acquisition
//                 and master planning to construction, leasing, and long-term
//                 asset management, our team is here to support you end-to-end.
//               </p>
//               <a
//                 href=""
//                 className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[13px] lg:leading-[24px] flex items-center"
//               >
//                 Integrated Business Solutions{" "}
//                 <img
//                   className="w-[23px] md:w-[30px]"
//                   src="/btn_whit_arrow.svg"
//                 />
//               </a>
//             </div>
//             <img
//               className="absolute right-0 top-0 w-[70px] lg:w-[130px] xl:w-[auto]"
//               src="/brand_journey/cards_arrow.svg"
//             />
//           </div>
//           <div className="w-[100%] md:w-[50%] hidden md:block">
//             <img
//               className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
//               src="/brand_journey/card1.jpg"
//             ></img>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// CARD 2
// function Card2({ progress, offsetY }) {
//   const container = useRef(null);
//   const isMobile = useIsMobile();
//   const scale = useTransform(
//     progress,
//     [0, 0.5],
//     isMobile ? [1, 0.94] : [1, 0.92]
//   );
//   const blur1 = useTransform(
//     progress,
//     [0.3, 0.5],
//     ["blur(0px)", "blur(1.2px)"]
//   );

//   return (
//     <div
//       ref={container}
//       className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
//     >
//       <motion.div
//         style={{ scale, translateY: offsetY, filter: blur1 }}
//         className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[98%] bg-[#0db14b] p-0 flex flex-col justify-between overflow-hidden"
//       >
//         <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[480px]">
//           <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px]  py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
//             <div>
//               <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
//                 40% of Our Customers Are Fortune 500 Companies
//               </h2>
//               <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[29px] xl:text-[20px] xl:leading-[30px]">
//                 We are proud to serve the needs of more than 100 customers
//                 across diverse industries such as 3PL, e-Commerce, automotive
//                 and auto ancillaries, aerospace and engineering, FMCG, and
//                 retail.
//               </p>
//               <a
//                 href=""
//                 className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[13px] lg:leading-[24px] flex items-center"
//               >
//                 Sector Specialists{" "}
//                 <img
//                   className="w-[23px] md:w-[30px]"
//                   src="/btn_whit_arrow.svg"
//                 />
//               </a>
//             </div>
//             <img
//               className="absolute left-0 bottom-0 w-[70px] lg:w-[130px] xl:w-[auto]"
//               src="/brand_journey/cards_dbl_arrow.svg"
//             />
//           </div>
//           <div className="w-[100%] md:w-[50%] hidden md:block">
//             <img
//               className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
//               src="/brand_journey/card2.jpg"
//             ></img>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

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
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[99%]  bg-[#8F53A1] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px]  md:h-[500px] h-[550px]">
          <div className="w-[100%] md:w-[50%]  lg:px-[45px] 1440:px-[70px]  lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[40px] 1440:text-[44px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                InCity Centers
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] md:text-[17px] lg:text-[19px] lg:leading-[29px] xl:text-[18px] xl:leading-[30px] pb-[15px]">
                We also offer 17 hyperlocal, in-city centers that bring your
                operations closer to customers for faster deliveries and
                seamless fulfilment.
              </p>
              <p className="bw-l text-white text-[16px] leading-[25px] md:text-[17px] lg:text-[19px] lg:leading-[29px] xl:text-[18px] xl:leading-[30px]">
                With a combined development potential of 6 MSFT, these
                facilities, located across 7 markets, are perfect for
                q-commerce, e-commerce, retail, and urban distribution needs.
                This is the largest in-city portfolio managed by an
                institutional developer in India presently.
              </p>
              <a
                href="/incity-centers/"
                className="text-[15px] leading-[26px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[15px] lg:leading-[24px] flex items-center"
              >
                InCity Centers{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </a>
            </div>
            <img
              className="absolute right-0 top-0 w-[60px] md:w-[70px] lg:w-[130px] xl:w-[auto]"
              src="/brand_journey/cards_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/network_overview/last_mile.jpg"
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
  // change commit check
  return (
    <div
      ref={container}
      className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
    >
      {/*  */}
      <motion.div
        style={{ scale, translateY: offsetY }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[100%]  bg-[#EB7E2B] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] md:h-[500px] h-[550px]">
          <div className="w-[100%] md:w-[50%] lg:px-[45px] 1440:px-[70px]  lg:py-[0px]  py-[30px] px-[20px] 1280:h-[auto] h-[100%] relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[40px] 1440:text-[44px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Industrial & Logistics Parks
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] md:text-[17px] lg:text-[19px] lg:leading-[29px] xl:text-[18px] xl:leading-[30px] pb-[15px]">
                Horizon offers 28 strategically located mid-mile hubs designed
                for manufacturing, storage, and regional distribution.{" "}
              </p>
              <p className="bw-l text-white text-[16px] leading-[25px] md:text-[17px] lg:text-[19px] lg:leading-[29px] xl:text-[18px] xl:leading-[30px]">
                With a combined development potential of 52 MSFT, these are
                built for scale, speed, and operational efficiency with modern
                infrastructure and smart connectivity.
              </p>

              <TransitionLink
                href="/industrial-logistics-parks/"
                className="text-[15px] leading-[26px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[15px] lg:leading-[24px] flex items-center"
              >
                Industrial & Logistics Parks{" "}
                <img
                  className="w-[23px] md:w-[25px]"
                  src="/btn_whit_arrow.svg"
                />
                {/*  */}
                {/*  */}
              </TransitionLink>
            </div>
            <img
              className="absolute left-0 bottom-0  w-[60px] md:w-[70px] lg:w-[130px] xl:w-[auto]"
              src="/brand_journey/cards_dbl_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/network_overview/industrial_park.jpg"
            ></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

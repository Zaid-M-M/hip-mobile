// "use client";
// import { ReactLenis } from "lenis/react";
// import { useScroll, useTransform, motion } from "motion/react";
// import { useRef, useState, useEffect } from "react";
// import Image from "next/image";

// export default function CMain() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const [offsetY, setOffsetY] = useState({
//     card1: -80,
//     card2: -40,
//     card3: 0,
//     card4: 45,
//   });

//   useEffect(() => {
//     const width = window.innerWidth;

//     if (width >= 1920) {
//       setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
//     } else if (width >= 1600) {
//       setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
//     } else if (width >= 1536) {
//       setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
//     } else if (width >= 1440) {
//       setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
//     } else if (width >= 1366) {
//       setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
//     } else if (width >= 1280) {
//       setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
//     } else if (width >= 1024) {
//       setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
//     } else if (width <= 767) {
//       setOffsetY({ card1: 35, card2: 55, card3: 75, card4: 95 });
//     } else {
//       setOffsetY({ card1: -80, card2: -40, card3: 0, card4: 45 });
//     }
//   }, []);

//   return (
//     <ReactLenis root>
//       <div className="w-full bg-gray-200">
//         <main
//           ref={container}
//           className="1280:pt-[50px] 1600:pt-[0px] pb-[150px] fix "
//         >
//           {/* CARD 1 */}
//           <Card1 progress={scrollYProgress} offsetY={offsetY.card1} />

//           {/* CARD 2 */}
//           <Card2 progress={scrollYProgress} offsetY={offsetY.card2} />

//           {/* CARD 3 */}
//           <Card3 progress={scrollYProgress} offsetY={offsetY.card3} />
//         </main>
//       </div>
//     </ReactLenis>
//   );
// }

// function useIsMobile(breakpoint = 768) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, [breakpoint]);

//   return isMobile;
// }
//
// // CARD 1
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
//         className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] w-[97%] bg-[#8A52A0] p-0 flex flex-col justify-between overflow-hidden"
//       >
//         <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
//           <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] min-h-[100%]  relative flex items-start md:items-center">
//             <div>
//               <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px]  lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
//                 Environmental <br />
//                 Responsibility
//               </h2>
//               <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
//                 Lowering our carbon footprint through renewable energy, water
//                 management, and green infrastructure.
//               </p>
//               <a
//                 href=""
//                 className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
//               >
//                 Know More{" "}
//                 <img
//                   className="w-[23px] md:w-[30px]"
//                   src="/btn_whit_arrow.svg"
//                 />
//               </a>
//             </div>
//             <img
//               className="absolute right-0 top-0 w-[70px] lg:w-[auto]"
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

// // CARD 2
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
//         className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] w-[98%] bg-[#0db14b] p-0 flex flex-col justify-between overflow-hidden"
//       >
//         <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
//           <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px]  py-[30px] px-[20px]  1280:h-[auto] min-h-[100%]  relative flex items-center">
//             <div>
//               <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
//                 Social Impact
//               </h2>
//               <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
//                 Prioritising human-centric workplaces and investing in
//                 communities we operate in.
//               </p>
//               <a
//                 href=""
//                 className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
//               >
//                 KNow MOre{" "}
//                 <img
//                   className="w-[23px] md:w-[30px]"
//                   src="/btn_whit_arrow.svg"
//                 />
//               </a>
//             </div>
//             <img
//               className="absolute left-0 bottom-0 w-[70px] lg:w-[auto]"
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

// // CARD 3
// function Card3({ progress, offsetY }) {
//   const container = useRef(null);
//   const isMobile = useIsMobile();
//   const scale = useTransform(
//     progress,
//     [0, 0.5],
//     isMobile ? [1, 0.97] : [1, 0.95]
//   );
//   const blur2 = useTransform(progress, [0.5, 1], ["blur(0px)", "blur(1.2px)"]);

//   return (
//     <div
//       ref={container}
//       className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
//     >
//       <motion.div
//         style={{ scale, translateY: offsetY, filter: blur2 }}
//         className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] w-[99%]  bg-[#F47922] p-0 flex flex-col justify-between overflow-hidden"
//       >
//         <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
//           <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] min-h-[100%]  relative flex items-center">
//             <div>
//               <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
//                 Governance Integrity
//               </h2>
//               <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
//                 Operating with transparency, accountability, and ethical
//                 business practices.
//               </p>
//               <a
//                 href=""
//                 className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
//               >
//                 Know more{" "}
//                 <img
//                   className="w-[23px] md:w-[30px]"
//                   src="/btn_whit_arrow.svg"
//                 />
//               </a>
//             </div>
//             <img
//               className="absolute right-0 top-0 w-[70px] lg:w-[auto]"
//               src="/brand_journey/cards_arrow.svg"
//             />
//           </div>
//           <div className="w-[100%] md:w-[50%] hidden md:block">
//             <img
//               className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
//               src="/brand_journey/card3.jpg"
//             ></img>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";
// import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function CMain() {
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
    <div className="w-full bg-gray-200">
      <main
        ref={container}
        className="1280:pt-[50px] 1600:pt-[0px] pb-[150px] fix "
      >
        {/* CARD 1 */}
        <Card1 progress={scrollYProgress} offsetY={offsetY.card1} />

        {/* CARD 2 */}
        <Card2 progress={scrollYProgress} offsetY={offsetY.card2} />

        {/* CARD 3 */}
        <Card3 progress={scrollYProgress} offsetY={offsetY.card3} />
      </main>
    </div>
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
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] w-[97%] bg-[#2BB04C] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full relative flex flex-col md:flex-row py-[0px] px-[0px] xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
          <img
            src="/sustainability/fbutt.png"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 2xl:w-[167px] w-[100px]"
            alt="Butterflies"
          />
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] min-h-[100%]  relative flex items-start md:items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px]  lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Environmental <br />
                Responsibility
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
                Lowering our carbon footprint through renewable energy, water
                management, and green infrastructure.
              </p>
              <a
                href=""
                className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
              >
                Know More{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </a>
            </div>
            <img
              className="absolute right-0 top-0 w-[70px] lg:w-[auto]"
              src="/brand_journey/cards_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/sustainability/fcard.jpg"
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
    [0.3, 0.8],
    ["blur(0px)", "blur(1.2px)"]
  );

  return (
    <div
      ref={container}
      className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur1 }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] w-[98%] bg-[#F47922] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full relative flex flex-col md:flex-row py-[0px] px-[0px] xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px]  py-[30px] px-[20px]  1280:h-[auto] min-h-[100%]  relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Social Impact
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
                Prioritising human-centric workplaces and investing in
                communities we operate in.
              </p>
              <a
                href=""
                className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
              >
                KNow MOre{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </a>
            </div>
            <img
              className="absolute left-0 bottom-0 w-[70px] lg:w-[auto]"
              src="/brand_journey/cards_dbl_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-auto h-full"
              src="/sustainability/scard.jpg"
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
  const blur2 = useTransform(progress, [0.5, 1], ["blur(0px)", "blur(0px)"]);

  return (
    <div
      ref={container}
      className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur2 }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] w-[99%]  bg-[#8F53A1] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] min-h-[100%]  relative flex items-center">
            <div>
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                Governance Integrity
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
                Operating with transparency, accountability, and ethical
                business practices.
              </p>
              <a
                href=""
                className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
              >
                Know more{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                />
              </a>
            </div>
            <img
              className="absolute right-0 top-0 w-[70px] lg:w-[auto]"
              src="/brand_journey/cards_arrow.svg"
            />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
              src="/sustainability/tcard.jpg"
            ></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

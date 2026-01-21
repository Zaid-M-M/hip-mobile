// "use client";
// import { ReactLenis } from "lenis/react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// // ---------- Hook ----------
// function useIsMobile(breakpoint = 768) {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth <= breakpoint);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, [breakpoint]);
//   return isMobile;
// }

// // ---------- Reusable Card ----------
// function Card({
//   progress,
//   offsetY,
//   bg,
//   title,
//   desc,
//   img,
//   imgAlt,
//   arrowImg,
//   arrowPosition,
//   blurRange = [0, 0.1],
//   scaleRange = [1, 0.89],
//   scaleRangeProgress = [0, 0.5],
//   extraImg = null,
//   animate = true, // <-- control animation
// }) {
//   const isMobile = useIsMobile();

//   const scale = animate
//     ? useTransform(
//         progress,
//         scaleRangeProgress,
//         isMobile ? [1, scaleRange[1] + 0.02] : scaleRange
//       )
//     : 1;

//   const blur = animate
//     ? useTransform(progress, blurRange, ["blur(0px)", "blur(1.2px)"])
//     : "blur(0px)";

//   return (
//     <div className="h-auto lg:h-auto sticky top-0 flex items-center justify-center w-full">
//       <motion.div
//         style={{ scale, translateY: offsetY, filter: blur }}
//         className="w-full rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] p-0 flex flex-col justify-between overflow-hidden"
//       >
//         <div className="w-full relative flex flex-col md:flex-row py-[0px] px-[0px] xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
//           {extraImg && (
//             <img
//               src={extraImg.src}
//               className={extraImg.className}
//               alt={extraImg.alt || ""}
//             />
//           )}

//           <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px] min-h-[100%] relative flex items-start md:items-center">
//             <div>
//               <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
//                 {title}
//               </h2>
//               <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
//                 {desc}
//               </p>
//               <Link
//                 href="#"
//                 className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
//               >
//                 Know More{" "}
//                 <img
//                   className="w-[23px] md:w-[30px]"
//                   src="/btn_whit_arrow.svg"
//                 />
//               </Link>
//             </div>
//             <img
//               className={`absolute ${arrowPosition} w-[70px] lg:w-[auto]`}
//               src={arrowImg}
//               alt="arrow"
//             />
//           </div>

//           <div className="w-[100%] md:w-[50%] hidden md:block">
//             <img
//               className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover"
//               src={img}
//               alt={imgAlt}
//             />
//           </div>
//         </div>
//         <div
//           style={{ backgroundColor: bg }}
//           className="absolute inset-0 -z-10"
//         />
//       </motion.div>
//     </div>
//   );
// }

// // ---------- Main ----------
// export default function CMainF() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const [offsetY, setOffsetY] = useState({
//     card1: -80,
//     card2: -40,
//     card3: 0,
//   });

//   useEffect(() => {
//     const w = window.innerWidth;
//     const common = { card1: 0, card2: 35, card3: 70 };
//     if (w >= 1024) setOffsetY(common);
//     else if (w <= 767) setOffsetY({ card1: 35, card2: 55, card3: 75 });
//     else setOffsetY({ card1: -80, card2: -40, card3: 0 });
//   }, []);

//   return (
//     <ReactLenis root>
//       <div className="w-full bg-gray-200">
//         <main
//           ref={container}
//           className="1280:pt-[50px] 1600:pt-[0px] pb-[150px] fix"
//         >
//           <Card
//             progress={scrollYProgress}
//             offsetY={offsetY.card1}
//             bg="#2BB04C"
//             title="Environmental Responsibility"
//             desc="Lowering our carbon footprint through renewable energy, water management, and green infrastructure."
//             img="/sustainability/fcard.jpg"
//             imgAlt="Environmental"
//             arrowImg="/brand_journey/cards_arrow.svg"
//             arrowPosition="right-0 top-0"
//             extraImg={{
//               src: "/sustainability/fbutt.png",
//               className:
//                 "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 2xl:w-[167px] w-[100px]",
//               alt: "Butterflies",
//             }}
//             blurRange={[0.0, 0.3]}
//             scaleRange={[1, 0.96]}
//             scaleRangeProgress={[0, 0.5]}
//             animate={true}
//           />

//           <Card
//             progress={scrollYProgress}
//             offsetY={offsetY.card2}
//             bg="#F47922"
//             title="Social Impact"
//             desc="Prioritising human-centric workplaces and investing in communities we operate in."
//             img="/sustainability/scard.jpg"
//             imgAlt="Social"
//             arrowImg="/brand_journey/cards_dbl_arrow.svg"
//             arrowPosition="left-0 bottom-0"
//             blurRange={[0.3, 1]}
//             scaleRange={[1, 0.97]}
//             scaleRangeProgress={[0, 0.5]}
//             animate={true}
//           />

//           <Card
//             progress={scrollYProgress}
//             offsetY={offsetY.card3}
//             bg="#8F53A1"
//             title="Governance Integrity"
//             desc="Operating with transparency, accountability, and ethical business practices."
//             img="/sustainability/tcard.jpg"
//             imgAlt="Governance"
//             arrowImg="/brand_journey/cards_arrow.svg"
//             arrowPosition="right-0 top-0"
//             animate={false}
//           />
//         </main>
//       </div>
//     </ReactLenis>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import { ReactLenis } from "lenis/react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// // ---------- Hook ----------
// function useIsMobile(breakpoint = 768) {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth <= breakpoint);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, [breakpoint]);
//   return isMobile;
// }

// // ---------- Reusable Card ----------
// function Card({
//   progress,
//   offsetY,
//   bg,
//   title,
//   desc,
//   img,
//   imgAlt,
//   arrowImg,
//   arrowPosition,
//   blurRange = [0, 0.1],
//   scaleRange = [1, 0.89],
//   scaleRangeProgress = [0, 0.5],
//   extraImg = null,
//   animate = true, // <-- control animation
// }) {
//   const isMobile = useIsMobile();

//   const scale = animate
//     ? useTransform(
//         progress,
//         scaleRangeProgress,
//         isMobile ? [1, scaleRange[1] + 0.02] : scaleRange
//       )
//     : 1;

//   const blur = animate
//     ? useTransform(progress, blurRange, ["blur(0px)", "blur(1.2px)"])
//     : "blur(0px)";

//   return (
//     <div className="h-fit lg:h-auto sticky top-0 flex items-center justify-center w-full">
//       <motion.div
//         style={{ scale, translateY: offsetY, filter: blur }}
//         className="w-full rounded-br-[40px] rounded-tl-[40px] md:min-h-auto min-h-full rounded-bl-[40px] p-0 flex flex-col justify-between overflow-hidden"
//       >
//         <div className="w-full relative flex flex-col-reverse md:flex-row py-[0px] px-[0px] h-full xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
//           {extraImg && (
//             <img
//               src={extraImg.src}
//               className={extraImg.className}
//               alt={extraImg.alt || ""}
//             />
//           )}

//           <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px] min-h-[269px] md:min-h-[100%] relative flex items-start md:items-center">
//             <div>
//               <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
//                 {title}
//               </h2>
//               <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
//                 {desc}
//               </p>
//               <Link
//                 href="#"
//                 className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
//               >
//                 Know More{" "}
//                 <img
//                   className="w-[23px] md:w-[30px]"
//                   src="/btn_whit_arrow.svg"
//                 />
//               </Link>
//             </div>
//             <img
//               className={`absolute ${arrowPosition} w-[70px] lg:w-[auto]`}
//               src={arrowImg}
//               alt="arrow"
//             />
//           </div>

//           {/* Make image visible for mobile too */}
//           <div className="w-[100%] md:w-[50%] md:h-auto h-auto">
//             <img
//               className="w-full 1920:h-[600px] 1280:h-[550px] h-full object-cover"
//               src={img}
//               alt={imgAlt}
//             />
//           </div>
//         </div>
//         <div
//           style={{ backgroundColor: bg }}
//           className="absolute inset-0 -z-10"
//         />
//       </motion.div>
//     </div>
//   );
// }

// // ---------- Main ----------
// export default function CMainF() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const isMobile = useIsMobile();

//   const cardsData = [
//     {
//       bg: "#2BB04C",
//       title: "Environmental Responsibility",
//       desc: "Lowering our carbon footprint through renewable energy, water management, and green infrastructure.",
//       img: "/sustainability/fcard.jpg",
//       imgAlt: "Environmental",
//       arrowImg: "/brand_journey/cards_arrow.svg",
//       arrowPosition: "right-0 top-0",
//       extraImg: {
//         src: "/sustainability/fbutt.png",
//         className:
//           "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 2xl:w-[167px] w-[100px]",
//         alt: "Butterflies",
//       },
//       blurRange: [0.0, 0.3],
//       scaleRange: [1, 0.96],
//       scaleRangeProgress: [0, 0.5],
//       animate: true,
//     },
//     {
//       bg: "#F47922",
//       title: "Social Impact",
//       desc: "Prioritising human-centric workplaces and investing in communities we operate in.",
//       img: "/sustainability/scard.jpg",
//       imgAlt: "Social",
//       arrowImg: "/brand_journey/cards_dbl_arrow.svg",
//       arrowPosition: "left-0 bottom-0",
//       blurRange: [0.3, 1],
//       scaleRange: [1, 0.97],
//       scaleRangeProgress: [0, 0.5],
//       animate: true,
//     },
//     {
//       bg: "#8F53A1",
//       title: "Governance Integrity",
//       desc: "Operating with transparency, accountability, and ethical business practices.",
//       img: "/sustainability/tcard.jpg",
//       imgAlt: "Governance",
//       arrowImg: "/brand_journey/cards_arrow.svg",
//       arrowPosition: "right-0 top-0",
//       animate: false,
//     },
//   ];

//   const [offsetY, setOffsetY] = useState({ card1: -80, card2: -40, card3: 0 });
//   useEffect(() => {
//     const w = window.innerWidth;
//     const common = { card1: 0, card2: 35, card3: 70 };
//     if (w >= 1024) setOffsetY(common);
//     else if (w <= 767) setOffsetY({ card1: 35, card2: 55, card3: 75 });
//     else setOffsetY({ card1: -80, card2: -40, card3: 0 });
//   }, []);

//   if (isMobile) {
//     // MOBILE SWIPER
//     return (
//       <div className="w-full bg-gray-200 sm:!hidden block relative py-12 px-[5%]">
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//           spaceBetween={16}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           speed={1000}
//           slidesPerView={1}
//           className="w-full"
//         >
//           {cardsData.map((card, i) => (
//             <SwiperSlide key={i}>
//               <Card
//                 {...card}
//                 progress={scrollYProgress} // dummy, not used in mobile
//                 offsetY={0}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom navigation */}
//         <div className="flex items-center justify-end fix !mt-5 gap-4 h-10 lg:h-20 w-full">
//           <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border flex items-center justify-center">
//             <img src="/state/stateprev.svg" alt="Prev" />
//           </button>
//           <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border flex items-center justify-center">
//             <img src="/state/statenext.svg" alt="Next" />
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // DESKTOP / SCROLL
//   return (
//     <ReactLenis root>
//       <div className="w-full bg-gray-200">
//         <main
//           ref={container}
//           className="1280:pt-[50px] 1600:pt-[0px] pb-[150px] fix"
//         >
//           {cardsData.map((card, i) => (
//             <Card
//               key={i}
//               {...card}
//               offsetY={Object.values(offsetY)[i]}
//               progress={scrollYProgress}
//             />
//           ))}
//         </main>
//       </div>
//     </ReactLenis>
//   );
// }
"use client";
// import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import TransitionLink from "@/src/app/TransitionLink";

// ---------- Hook ----------
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

// ---------- Reusable Card ----------
// ---------- Reusable Card ----------
function Card({
  progress,
  offsetY,
  bg,
  title,
  desc,
  img,
  imgAlt,
  arrowImg,
  arrowPosition,
  blurRange = [0, 0.1],
  scaleRange = [1, 0.89],
  scaleRangeProgress = [0, 0.5],
  extraImg = null,
  animate = true, // <-- control animation
  link,
}) {
  const isMobile = useIsMobile();

  const scale = animate
    ? useTransform(
        progress,
        scaleRangeProgress,
        isMobile ? [1, scaleRange[1] + 0.02] : scaleRange
      )
    : 1;

  const blur = animate
    ? useTransform(progress, blurRange, ["blur(0px)", "blur(1.2px)"])
    : "blur(0px)";

  return (
    <div className="h-fit lg:h-auto sticky min-h-full top-0 flex items-center justify-center w-full">
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur }}
        className="w-full rounded-br-[40px] rounded-tl-[40px] md:min-h-auto min-h-full rounded-bl-[40px] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full relative flex flex-col-reverse md:flex-row py-[0px] px-[0px] h-full xl:h-[400px] 2xl:h-[427px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px]">
          {/* ✅ Show extraImg only on desktop/tablet */}
          {extraImg && !isMobile && (
            <img
              src={extraImg.src}
              className={extraImg.className}
              alt={extraImg.alt || ""}
            />
          )}

          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px] min-h-[269px] md:min-h-[100%] relative flex items-start md:items-center">
            <div className="z-1">
              <h2 className="bw-m text-[28px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] 1280:text-[42px] 1440:text-[46px] 1440:leading-[48px] 1280:leading-[44px] lg:mb-[10px] xl:mb-[30px]">
                {title}
              </h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">
                {desc}
              </p>
              <TransitionLink
                isNavOpen={false}
                href={link}
                className="text-[16px] gap-[15px] leading-[26px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[16px] flex items-center"
              >
                Know More{" "}
                <img
                  className="w-[23px] md:w-[30px]"
                  src="/btn_whit_arrow.svg"
                  alt="arrow"
                />
              </TransitionLink>
            </div>
            <img
              className={`absolute ${arrowPosition} w-[70px] lg:w-[auto] z-0`}
              src={arrowImg}
              alt="arrow"
            />
          </div>

          <div className="w-[100%] md:w-[50%] md:h-auto h-auto">
            <img
              className="w-full 1920:h-[600px] 1280:h-[550px] h-full object-cover"
              src={img}
              alt={imgAlt}
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: bg }}
          className="absolute inset-0 -z-10"
        />
      </motion.div>
    </div>
  );
}

// ---------- Main ----------
export default function CMainF() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const isMobile = useIsMobile();

  const cardsData = [
    {
      bg: "#2BB04C",
      title: "Environmental Responsibility",
      desc: "Lowering our carbon footprint through renewable energy, water management, and green infrastructure.",
      img: "/sustainability/fcard.jpg",
      imgAlt: "Environmental",
      arrowImg: "/brand_journey/cards_arrow.svg",
      arrowPosition: "right-0 top-0",
      extraImg: {
        src: "/sustainability/fbutt.png",
        className:
          "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 2xl:w-[167px] w-[100px]",
        alt: "Butterflies",
      },
      blurRange: [0.0, 0.3],
      scaleRange: [1, 0.9],
      scaleRangeProgress: [0, 0.5],
      animate: true,
      link: "/environment",
    },
    {
      bg: "#F47922",
      title: "Social Impact",
      desc: "Prioritising human-centric workplaces and investing in communities we operate in.",
      img: "/sustainability/scard.jpg",
      imgAlt: "Social",
      arrowImg: "/brand_journey/cards_dbl_arrow.svg",
      arrowPosition: "left-0 bottom-0",
      blurRange: [0.3, 1],
      scaleRange: [1, 0.95],
      scaleRangeProgress: [0, 0.5],
      animate: true,
      link: "/social",
    },
    {
      bg: "#8F53A1",
      title: "Governance Integrity",
      desc: "Operating with transparency, accountability, and ethical business practices.",
      img: "/sustainability/tcard.jpg",
      imgAlt: "Governance",
      arrowImg: "/brand_journey/cards_arrow.svg",
      arrowPosition: "right-0 top-0",
      animate: false,
      link: "/governance",
    },
  ];

  const [offsetY, setOffsetY] = useState({ card1: -80, card2: -40, card3: 0 });
  useEffect(() => {
    const w = window.innerWidth;
    const common = { card1: 0, card2: 35, card3: 70 };
    if (w >= 1024) setOffsetY(common);
    else if (w <= 767) setOffsetY({ card1: 35, card2: 55, card3: 75 });
    else setOffsetY({ card1: -80, card2: -40, card3: 0 });
  }, []);

  if (isMobile) {
    // MOBILE SWIPER
    return (
      <div className="w-full bg-gray-200 sm:!hidden block relative py-12 px-[5%]">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          slidesPerView={1}
          className="w-full"
        >
          {cardsData.map((card, i) => (
            <SwiperSlide key={i}>
              <Card
                {...card}
                progress={scrollYProgress} // dummy, not used in mobile
                offsetY={0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation */}
        <div className="flex items-center justify-end fix !mt-5 gap-4 h-10 lg:h-20 w-full">
          <button className="custom-prev cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border flex items-center justify-center">
            <img src="/state/stateprev.svg" alt="Prev" />
          </button>
          <button className="custom-next cursor-pointer lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border flex items-center justify-center">
            <img src="/state/statenext.svg" alt="Next" />
          </button>
        </div>
      </div>
    );
  }

  // DESKTOP / SCROLL
  return (
    // <ReactLenis root>
    <div className="w-full min-h-screen xl:pt-24 xl:pb-36 bg-gray-200">
      <main ref={container} className="fix">
        {cardsData.map((card, i) => (
          <Card
            key={i}
            {...card}
            offsetY={Object.values(offsetY)[i]}
            progress={scrollYProgress}
          />
        ))}
      </main>
    </div>
    // </ReactLenis>
  );
}

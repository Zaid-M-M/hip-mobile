// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const sboxs = [
//   {
//     image: "/incity_park/plug_incity_sec6.jpg",
//     text: "Plug-and-Play Operations",
//   },
//   {
//     image: "/incity_park/faster_incity_sec6.jpg",
//     text: "Faster, Smarter Deliveries",
//   },
//   {
//     image: "/incity_park/flexble_incity_sec6.jpg",
//     text: "Flexible Spaces",
//   },
//   {
//     image: "/incity_park/optimised_incity_sec6.jpg",
//     text: "Optimised Last-Mile Shipping",
//   },
//   {
//     image: "/incity_park/sustanable_incity_sec6.jpg",
//     text: "Sustainable Operations",
//   },
//   {
//     image: "/incity_park/efficient_incity_sec6.jpg",
//     text: "Efficient Urban Logistics",
//   },
// ];

// const Incity_park_sec6 = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIsMobile(window.innerWidth < 2500);
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   return (
//     <div className="bg-[url(/ind/bt.jpg)] bg-cover bg-no-repeat">
//       <div className="fix flex flex-col gap-14 lg:py-24 py-[45px]">
//         {/* Heading */}
//         <div>
//           <div className="flex items-center gap-5">
//             <h2 className="inline-block w-fit text-[35px] leading-[45px] md:text-[40px] md:leading-[50px] lg:text-[46px] lg:leading-[56px] xl:tracking-[-2.56px] xl:text-[60px] xl:leading-[70px] bw-m bg-[linear-gradient(111deg,#AC38D9,#f47920)] bg-clip-text text-transparent font-medium capitalize ">
//               Ecosystem Designed to Simplify Operations
//             </h2>
//           </div>
//           <div className="flex items-center gap-[10px] md:gap-[17px]">
//             <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] bw-r text-white">
//               With Your Needs
//             </h2>
//             <img
//               src="/abstract_pattern.svg"
//               className="abstract_svg hidden md:block"
//               alt=""
//             />
//           </div>
//           <img
//             src="/abstract_pattern.svg"
//             className="abstract_svg block md:hidden mt-[10px]"
//             alt=""
//           />
//         </div>

//         {/* Grid Boxes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sboxs.map((sb, index) => (
//             <motion.div
//               key={index}
//               className="relative group w-full aspect-square bg-[#212324] flex flex-col gap-4 text-white overflow-hidden"
//               initial="initial"
//               animate={isMobile ? undefined : "hover"}
//               whileHover={isMobile ? undefined : "hover"}
//             >
//               {/* Overlay text container */}
//               <div className="absolute bottom-2 left-0 w-full p-4  to-transparent text-white z-10">
//                 <p className="text-[18px] md:text-[20px] xl:text-[22px] bw-r">
//                   {sb.text}
//                 </p>
//               </div>

//               {/* Image */}
//               <motion.img
//                 src={sb.image}
//                 alt={sb.text}
//                 className="absolute object-cover bottom-0 right-0 left-0 top-0 w-full h-full z-0"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec6;

// {remove all animation}
// "use client";
// import React, { useEffect, useState } from "react";

// const sboxs = [
//   {
//     image: "/incity_park/plug_incity_sec6.jpg",
//     text: "Plug-and-Play Operations",
//   },
//   {
//     image: "/incity_park/faster_incity_sec6.jpg",
//     text: "Faster, Smarter Deliveries",
//   },
//   {
//     image: "/incity_park/flexble_incity_sec6.jpg",
//     text: "Flexible Spaces",
//   },
//   {
//     image: "/incity_park/optimised_incity_sec6.jpg",
//     text: "Optimised Last-Mile Shipping",
//   },
//   {
//     image: "/incity_park/sustanable_incity_sec6.jpg",
//     text: "Sustainable Operations",
//   },
//   {
//     image: "/incity_park/efficient_incity_sec6.jpg",
//     text: "Efficient Urban Logistics",
//   },
// ];

// const Incity_park_sec6 = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIsMobile(window.innerWidth < 2500);
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   return (
//     <div className="bg-[url(/ind/bt.jpg)] bg-cover bg-no-repeat">
//       <div className="fix flex flex-col gap-14 lg:py-24 py-[45px]">
//         {/* Heading */}
//         <div>
//           <div className="flex items-center gap-5">
//             <h2 className="inline-block w-fit text-[35px] leading-[45px] md:text-[40px] md:leading-[50px] lg:text-[46px] lg:leading-[56px] xl:tracking-[-2.56px] xl:text-[60px] xl:leading-[70px] bw-m bg-[linear-gradient(111deg,#AC38D9,#f47920)] bg-clip-text text-transparent font-medium capitalize">
//               Ecosystem Designed to Simplify Operations
//             </h2>
//           </div>
//           <div className="flex items-center gap-[10px] md:gap-[17px]">
//             <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] bw-r text-white">
//               With Your Needs
//             </h2>
//             <img
//               src="/abstract_pattern.svg"
//               className="abstract_svg hidden md:block"
//               alt=""
//             />
//           </div>
//           <img
//             src="/abstract_pattern.svg"
//             className="abstract_svg block md:hidden mt-[10px]"
//             alt=""
//           />
//         </div>

//         {/* Grid Boxes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sboxs.map((sb, index) => (
//             <div
//               key={index}
//               className="relative group w-full aspect-square bg-[#212324] flex flex-col gap-4 text-white overflow-hidden"
//             >
//               {/* Overlay text container */}
//               <div className="absolute bottom-2 left-0 w-full p-4 text-white z-10">
//                 <p className="text-[18px] md:text-[20px] xl:text-[22px] bw-r">
//                   {sb.text}
//                 </p>
//               </div>

//               {/* Image */}
//               <img
//                 src={sb.image}
//                 alt={sb.text}
//                 className="absolute object-cover bottom-0 right-0 left-0 top-0 w-full h-full z-0"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec6;

// hover animation working
// "use client";
// import React, { useEffect, useState } from "react";

// const sboxs = [
//   {
//     image: "/incity_park/plug_incity_sec6.jpg",
//     text: "Plug-and-Play Operations",
//     hoverText:
//       "Fully managed environments with common amenities, driver rest areas, EV charging stations, and on-site facilities management",
//   },
//   {
//     image: "/incity_park/faster_incity_sec6.jpg",
//     text: "Faster, Smarter Deliveries",
//     hoverText:
//       "Optimized delivery routes, real-time tracking, and automated dispatch for speed and efficiency",
//   },
//   {
//     image: "/incity_park/flexble_incity_sec6.jpg",
//     text: "Flexible Spaces",
//     hoverText:
//       "Adaptable storage and workspaces tailored to your operational needs",
//   },
//   {
//     image: "/incity_park/optimised_incity_sec6.jpg",
//     text: "Optimised Last-Mile Shipping",
//     hoverText:
//       "Seamless integration with urban logistics networks to reduce delivery times and costs",
//   },
//   {
//     image: "/incity_park/sustanable_incity_sec6.jpg",
//     text: "Sustainable Operations",
//     hoverText:
//       "Energy-efficient infrastructure and eco-friendly materials for greener operations",
//   },
//   {
//     image: "/incity_park/efficient_incity_sec6.jpg",
//     text: "Efficient Urban Logistics",
//     hoverText:
//       "Streamlined workflows with smart storage, handling, and dispatch systems",
//   },
// ];

// const Incity_park_sec6 = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIsMobile(window.innerWidth < 768); // hover only on desktop
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   return (
//     <div className="bg-[url(/ind/bt.jpg)] bg-cover bg-no-repeat">
//       <div className="fix flex flex-col gap-14 lg:py-24 py-[45px]">
//         {/* Heading */}
//         <div>
//           <div className="flex items-center gap-5">
//             <h2 className="inline-block w-fit text-[35px] leading-[45px] md:text-[40px] md:leading-[50px] lg:text-[46px] lg:leading-[56px] xl:tracking-[-2.56px] xl:text-[60px] xl:leading-[70px] bw-m bg-[linear-gradient(111deg,#AC38D9,#f47920)] bg-clip-text text-transparent font-medium capitalize">
//               Ecosystem Designed to Simplify Operations
//             </h2>
//           </div>
//           <div className="flex items-center gap-[10px] md:gap-[17px]">
//             <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] bw-r text-white">
//               With Your Needs
//             </h2>
//             <img
//               src="/abstract_pattern.svg"
//               className="abstract_svg hidden md:block"
//               alt=""
//             />
//           </div>
//           <img
//             src="/abstract_pattern.svg"
//             className="abstract_svg block md:hidden mt-[10px]"
//             alt=""
//           />
//         </div>

//         {/* Grid Boxes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sboxs.map((sb, index) => (
//             <div
//               key={index}
//               className="relative group w-full aspect-square bg-[#212324] flex flex-col gap-4 text-white overflow-hidden"
//             >
//               {/* Default bottom text */}
//               <div className="absolute bottom-2 left-0 w-full p-4 text-white z-10">
//                 <p className="text-[18px] md:text-[20px] xl:text-[22px] bw-r">
//                   {sb.text}
//                 </p>
//               </div>

//               {/* Hover overlay */}
//               {!isMobile && (
//                 <div className="absolute bottom-0 left-0 w-full h-full bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-start justify-center p-6 text-start z-20">
//                   <p className="text-white text-[16px] md:text-[18px] xl:text-[20px] bw-r">
//                     {sb.hoverText}
//                   </p>
//                 </div>
//               )}

//               {/* Image */}
//               <img
//                 src={sb.image}
//                 alt={sb.text}
//                 className="absolute object-cover bottom-0 right-0 left-0 top-0 w-full h-full z-0"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec6;
// correct
"use client";
// import { style } from "motion/dist/react-client";
import React, { useEffect, useState } from "react";

const sboxs = [
  {
    image: "/incity_park/plug_incity_sec6.jpg",
    text: "Plug-and-Play Operations",
    hoverText:
      "Fully managed environments with common amenities, driver rest areas, EV charging stations, and on-site facilities management",
  },
  {
    image: "/incity_park/faster_incity_sec6.jpg",
    text: "Faster, Smarter Deliveries",
    hoverText:
      "Reduce transportation cost and drive customer loyalty with faster same-day and express deliveries",
  },
  {
    image: "/incity_park/flexble_incity_sec6.jpg",
    text: "Flexible Spaces",
    hoverText:
      "Flexible layouts with the option for bespoke infrastructure upgrades, and opportunity to expand with Horizon’s pan-India InCity network",
  },
  {
    image: "/incity_park/optimised_incity_sec6.jpg",
    text: "Optimised Last-Mile Shipping",
    hoverText:
      "Ample parking and easy access points support multiple delivery modes cutting delivery costs and emissions",
  },
  {
    image: "/incity_park/sustanable_incity_sec6.jpg",
    text: "Sustainable Operations",
    hoverText:
      "Availability of local manpower, and park design with green buildings, safety-first infrastructure, and continuous power and water supply backups",
  },
  {
    image: "/incity_park/efficient_incity_sec6.jpg",
    text: "Efficient Urban Logistics",
    hoverText:
      "Multiple access areas, cross-docking facilities, ramps, and freight lifts configured to move goods in and out quickly",
  },
];

const Incity_park_sec6 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tappedIndex, setTappedIndex] = useState(null);
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024); // changed from 768 to 1024
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleTap = (index) => {
    if (tappedIndex === index) {
      setTappedIndex(null); // untap if tapped again
    } else {
      setTappedIndex(index);
    }
  };

  return (
    <div className="bg-[url(/ind/bt.jpg)] bg-cover bg-no-repeat">
      <div className="fix flex flex-col lg:gap-14 gap-6 lg:py-24 py-[45px]">
        {/* Heading */}
        <div>
          <div className="flex items-center gap-5">
            <h2 className="inline-block w-fit text-[30px] leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[46px] lg:leading-[56px] xl:tracking-[-2.56px] xl:text-[60px] xl:leading-[70px] bw-m bg-[linear-gradient(111deg,#AC38D9,#f47920)] bg-clip-text text-transparent font-medium capitalize">
              Ecosystem Designed to Simplify Operations
            </h2>
          </div>
          <div className="flex items-center gap-[10px] md:gap-[17px]">
            <h2 className="text-[25px] leading-[35px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] xl:text-[60px] xl:leading-[70px] xl:tracking-[-2.56px] bw-r text-white">
              And Accelerate Fulfilment
            </h2>
            <img
              src="/abstract_pattern.webp"
              className="abstract_svg hidden md:block mt-[11px]"
              alt=""
            />
          </div>
          <img
            src="/abstract_pattern.webp"
            className="abstract_svg block md:hidden mt-[10px]"
            alt=""
          />
        </div>

        {/* Grid Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {sboxs.map((sb, index) => (
            <div
              key={index}
              className="relative group w-full aspect-square bg-[#212324] flex flex-col gap-4 text-white overflow-hidden cursor-pointer"
              onClick={() => isMobile && handleTap(index)}
            >
              {/* Default bottom text */}
              <div className="absolute bottom-2 left-0 w-full p-4 text-white z-10">
                <p className="text-[21px] md:text-[21px] xl:text-[22px] bw-r">
                  {sb.text}
                </p>
              </div>

              {/* Hover overlay sliding from bottom with opacity */}
              {/* <div
                className={`absolute bottom-0 left-0 w-full h-full bg-[#212324] transform transition-all duration-500 flex flex-col items-start justify-start p-6 text-start z-20 bw-r
    ${
      !isMobile
        ? "translate-y-[20%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        : tappedIndex === index
        ? "translate-y-0 opacity-100"
        : "translate-y-[20%] opacity-0"
    }`}
              >
                <h1 className="text-[28px] pt-[10px]">{sb.text}</h1>
                <hr className="border-white my-2" />
                <p className="text-white text-[16px] md:text-[18px] xl:text-[20px] bw-m">
                  {sb.hoverText}
                </p>
              </div> */}
              <div
                className={`absolute bottom-0 left-0 w-full h-full bg-[#212324] transform transition-all duration-500 flex flex-col items-start justify-start p-6 text-start z-20 bw-r
  ${
    !isMobile
      ? "translate-y-[20%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      : tappedIndex === index
        ? "translate-y-0 opacity-100"
        : "translate-y-[20%] opacity-0"
  }`}
              >
                <h2 className="lg:text-[28px] text-[22px] pb-[10px] lg:pb-[20px] pt-[8px] lg:pt-[15px] text-white">
                  {sb.text}
                </h2>

                {/* ✅ visible white line */}
                <hr className="w-full border-t-[2px] border-[#B1B1B1] mt-0 mb-3 md:my-3 " />

                <p className="text-white text-[16px] md:text-[18px] xl:text-[20px] bw-r lg:pt-[15px] pt-[9px]">
                  {sb.hoverText}
                </p>
              </div>

              {/* Image */}
              <img
                src={sb.image}
                alt={sb.text}
                className="absolute object-cover bottom-0 right-0 left-0 top-0 w-full h-full z-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incity_park_sec6;

// chatgpt future code

// "use client";
// import React, { useEffect, useState } from "react";

// const sboxs = [
//   {
//     image: "/incity_park/plug_incity_sec6.jpg",
//     text: "Plug-and-Play Operations",
//     hoverText:
//       "Fully managed environments with common amenities, driver rest areas, EV charging stations, and on-site facilities management",
//   },
//   {
//     image: "/incity_park/faster_incity_sec6.jpg",
//     text: "Faster, Smarter Deliveries",
//     hoverText:
//       "Reduce transportation cost and drive customer loyalty with faster same-day and express deliveries",
//   },
//   {
//     image: "/incity_park/flexble_incity_sec6.jpg",
//     text: "Flexible Spaces",
//     hoverText:
//       "Flexible layouts with the option for bespoke infrastructure upgrades, and opportunity to expand with Horizon’s pan-India in-city network",
//   },
//   {
//     image: "/incity_park/optimised_incity_sec6.jpg",
//     text: "Optimised Last-Mile Shipping",
//     hoverText:
//       "Ample parking and easy access points support multiple delivery modes cutting delivery costs and emissions",
//   },
//   {
//     image: "/incity_park/sustanable_incity_sec6.jpg",
//     text: "Sustainable Operations",
//     hoverText:
//       "Availability of local manpower, and park design with green buildings, safety-first infrastructure, and continuous power and water supply backups",
//   },
//   {
//     image: "/incity_park/efficient_incity_sec6.jpg",
//     text: "Efficient Urban Logistics",
//     hoverText:
//       "Multiple access areas, cross-docking facilities, ramps, and freight lifts configured to move goods in and out quickly",
//   },
// ];

// const Incity_park_sec6 = () => {
//   const [isTouchDevice, setIsTouchDevice] = useState(false);
//   const [tappedIndex, setTappedIndex] = useState(null);

//   useEffect(() => {
//     // Detect touch devices (better than just screen width)
//     const mq = window.matchMedia("(hover: none), (pointer: coarse)");
//     const update = () => setIsTouchDevice(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);

//   const handleTap = (index) => {
//     if (!isTouchDevice) return; // only works on mobile/tablet
//     setTappedIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div className="bg-[url(/ind/bt.jpg)] bg-cover bg-no-repeat">
//       <div className="fix flex flex-col lg:gap-14 gap-6 lg:py-24 py-[45px]">
//         {/* Heading */}
//         <div>
//           <div className="flex items-center gap-5">
//             <h2 className="inline-block w-fit text-[30px] leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[46px] lg:leading-[56px] xl:tracking-[-2.56px] xl:text-[60px] xl:leading-[70px] bw-m bg-[linear-gradient(111deg,#AC38D9,#f47920)] bg-clip-text text-transparent font-medium capitalize">
//               Ecosystem Designed to Simplify Operations
//             </h2>
//           </div>
//           <div className="flex items-center gap-[10px] md:gap-[17px]">
//             <h2 className="text-[25px] leading-[35px] md:text-[45px] md:leading-[55px] lg:text-[46px] lg:leading-[56px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-2.56px] bw-r text-white">
//               And Accelerate Fulfilment
//             </h2>
//             <img
//               src="/abstract_pattern.svg"
//               className="abstract_svg hidden md:block"
//               alt=""
//             />
//           </div>
//           <img
//             src="/abstract_pattern.svg"
//             className="abstract_svg block md:hidden mt-[10px]"
//             alt=""
//           />
//         </div>

//         {/* Grid Boxes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sboxs.map((sb, index) => (
//             <div
//               key={index}
//               className="relative group w-full aspect-square bg-[#212324] flex flex-col text-white overflow-hidden cursor-pointer"
//               onClick={() => handleTap(index)}
//             >
//               {/* Default text */}
//               <div className="absolute bottom-2 left-0 w-full p-4 text-white z-10 pointer-events-none">
//                 <p className="text-[18px] md:text-[21px] xl:text-[22px] bw-r">
//                   {sb.text}
//                 </p>
//               </div>

//               {/* Hover / Tap Overlay */}
//               <div
//                 className={[
//                   "absolute bottom-0 left-0 w-full h-full bg-[#212324] transition-all duration-500 flex flex-col items-start justify-start p-6 text-start z-20 bw-r",
//                   // Desktop: hover to show
//                   "lg:opacity-0 lg:translate-y-[20%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0",
//                   // Mobile/tablet: tap to toggle
//                   isTouchDevice && tappedIndex === index
//                     ? "opacity-100 translate-y-0"
//                     : isTouchDevice
//                     ? "opacity-0 translate-y-[20%]"
//                     : "",
//                 ]
//                   .filter(Boolean)
//                   .join(" ")}
//               >
//                 <h1 className="lg:text-[28px] text-[22px] pb-[10px] lg:pb-[20px] pt-[8px] lg:pt-[15px] text-white">
//                   {sb.text}
//                 </h1>
//                 <hr className="w-full border-t-[2px] border-[#B1B1B1] my-3" />
//                 <p className="text-white text-[16px] md:text-[18px] xl:text-[20px] bw-r lg:pt-[15px] pt-[9px]">
//                   {sb.hoverText}
//                 </p>
//               </div>

//               {/* Background Image */}
//               <img
//                 src={sb.image}
//                 alt={sb.text}
//                 className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec6;

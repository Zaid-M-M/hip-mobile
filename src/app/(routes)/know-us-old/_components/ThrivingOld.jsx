// "use client";
// import { useState } from "react";
// import React from "react";
// import Btn from "@/components/global/Btn";

// const Thriving = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const handleCardClick = (cardIndex) => {
//     setActiveCard(activeCard === cardIndex ? null : cardIndex);
//   };

//   return (
//     <div className="relative min-h-full overflow-hidden">
//       {/* <img className="purple_vctr block md:hidden absolute top-[-80px] right-[20px]  md:w-[350px] w-[300px]" src='/purple_vector.svg' />
//       <img className="orange_vctr block md:hidden absolute top-[-100px] right-[-100px]  md:w-[350px] w-[300px]" src='/orange_vector.svg' /> */}

//       <div className="fix w-full xl:pb-[20px] 1440:pb-[100px] py-[45px] 768:py-[70px] px-0 overflow-hidden">
//         <div className="flex w-full flex-col justify-between sm:flex-row 1280:gap-8">
//           {/* Left Column */}
//           <div className="w-full sm:w-[40%]  1366:w-1/2 flex flex-col gap-[25px] md:gap-[24px] lg:gap-[44px] relative">
//             {/* <img className="purple_vctr hidden md:block absolute top-[auto] bottom-[-150px] left-[20px] lg:top-[auto] lg:bottom-[-150px] lg:left-[0px] lg:w-[auto] md:w-[350px] w-[300px]" src='/purple_vector.svg' />
//             <img className="orange_vctr hidden md:block absolute top-[auto] bottom-[-400px] left-[-100px] md:left-[200px] md:top-[auto] md:bottom-[-200px] lg:top-[auto] lg:bottom-[-400px] lg:left-[200px] lg:w-[auto]  md:w-[350px] w-[300px]" src='/orange_vector.svg' /> */}

//             <h2 className="flex flex-col bw-m text-[35px] sm:text-[45px] 1280:text-[64px] leading-[1.1] tracking-[-0.04em]">
//               A Thriving <span className="bw-r">Work Culture</span>
//               <img
//                 className="abstract_svg w-max xl:mt-[12px]"
//                 src="/abstract_pattern.svg"
//                 alt="Abstrac"
//               />
//             </h2>
//             <p className="bw-r text-[18px] md:text-[20px] xl:text-[24px] sm:leading-[28px]  pr-1  xl:leading-[34px] tracking-normal">
//               Driven by values of agility, collaboration, and excellence, we are
//               on a mission to transform not just industrial spaces and power
//               businesses, but also nurture an exceptional team of employees and
//               partners who deliver exceptional performance and innovation.
//             </p>

//             <Btn href="/culture/" text="Careers" />
//             {/* Mobile Grid Cards */}
//             <div className="w-full  sm:w-1/2 items-center flex sm:hidden pt-[20px] sm:pt-0 flex-col gap-0">
//               {/* Card 1 */}
//               <div
//                 className={`cursor-pointer border-t border-r flex justify-end pr-1 pt-2 relative aspect-square w-full max-w-[280px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 ${
//                   activeCard === 1
//                     ? "bg-[#f47920] border-[#f47920]"
//                     : "border-[#BFBFBF]"
//                 }`}
//                 onClick={() => handleCardClick(1)}
//               >
//                 <div
//                   className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//                     activeCard === 1 ? "opacity-0" : "opacity-100"
//                   }`}
//                 ></div>
//                 <p
//                   className={`absolute text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[18px] sm:text-[20px] px-0 transition-opacity duration-300 ${
//                     activeCard === 1 ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   At Horizon, collaboration is at the heart of how we work and
//                   grow together. Success is a collective journey.
//                 </p>
//                 <div
//                   className={`flex flex-col gap-2 items-end transition-opacity duration-300 pr-1 ${
//                     activeCard === 1 ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <svg width="24" height="24" viewBox="0 0 34 35" fill="none">
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="cursor-pointer text-[18px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture of <br /> trust and <br /> openness
//                   </p>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div
//                 className={`border-t border-r flex justify-end pr-2 pt-2 relative aspect-square w-full max-w-[280px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 ${
//                   activeCard === 2
//                     ? "bg-[#0db14b] border-[#0db14b]"
//                     : "border-[#BFBFBF]"
//                 }`}
//                 onClick={() => handleCardClick(2)}
//               >
//                 <div
//                   className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//                     activeCard === 2 ? "opacity-0" : "opacity-100"
//                   }`}
//                 ></div>
//                 <p
//                   className={`absolute text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[18px] sm:text-[20px] px-2 transition-opacity duration-300 ${
//                     activeCard === 2 ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   Agility is more than a workplace trait—it is a mindset that
//                   empowers us to innovate, adapt, and deliver excellence every
//                   step of the way.
//                 </p>
//                 <div
//                   className={`flex flex-col gap-2 items-end transition-opacity duration-300 ${
//                     activeCard === 2 ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <svg width="24" height="24" viewBox="0 0 34 35" fill="none">
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="cursor-pointer text-[18px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture of <br /> Learning And <br /> Experimentation
//                   </p>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div
//                 className={`border-t border-r flex justify-end pr-2 pt-2 relative aspect-square w-full max-w-[280px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 ${
//                   activeCard === 3
//                     ? "bg-[#8F53A1] border-[#8F53A1]"
//                     : "border-[#BFBFBF]"
//                 }`}
//                 onClick={() => handleCardClick(3)}
//               >
//                 <div
//                   className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//                     activeCard === 3 ? "opacity-0" : "opacity-100"
//                   }`}
//                 ></div>
//                 <p
//                   className={`absolute text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[18px] sm:text-[20px] px-1 transition-opacity duration-300 ${
//                     activeCard === 3 ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   From embracing diversity to fostering mentorship, safety, and
//                   sustainability, being excellent is a core part of our ethos.
//                 </p>
//                 <div
//                   className={`flex flex-col gap-2 items-end transition-opacity duration-300 ${
//                     activeCard === 3 ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <svg width="24" height="24" viewBox="0 0 34 35" fill="none">
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="cursor-pointer text-[18px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture that <br /> values diversity, <br /> quality and{" "}
//                     <br /> responsibility
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column (Grid Cards) */}
//           <div className="w-full sm:w-[60%] lg:w-1/2 hidden sm:flex flex-col gap-0">
//             {/* Row 1 */}
//             <div className="flex">
//               {/* Card 1 */}
//               <div className="cursor-pointer  border-t group hover:border-[#f47920] flex justify-end pr-1 pt-2 border-r relative border-[#BFBFBF] aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[320px] hover:bg-[#f47920] transition-all duration-300">
//                 <div className="absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 group-hover:opacity-0"></div>
//                 <p className="absolute opacity-0 group-hover:opacity-100 text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] lg:text-[20px] px-0 transition-opacity duration-300">
//                   At Horizon, collaboration is at the heart of how we work and
//                   grow together. Success is a collective journey.
//                 </p>
//                 <div className="flex flex-col gap-2 items-end transition-opacity duration-300 group-hover:opacity-0 pr-1">
//                   <svg
//                     className="md:w-[22px] md:h-[22px] 1024:w-[34px] 1024:h-[34px]"
//                     viewBox="0 0 34 35"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="text-[14px] sm:text-[14px] 1280:text-[18px] 1366:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture of <br /> trust and <br /> openness
//                   </p>
//                 </div>
//               </div>
//               {/* Card 2 */}
//               <div className="cursor-pointer border-t group hover:border-[#0db14b] flex justify-end pr-2 pt-2 border-r relative border-[#BFBFBF] aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[320px] hover:bg-[#0db14b] transition-all duration-300">
//                 <div className="absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 group-hover:opacity-0"></div>
//                 <p className="absolute opacity-0 group-hover:opacity-100 text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-2 transition-opacity duration-300">
//                   Agility is more than a workplace trait—it is a mindset that
//                   empowers us to innovate, adapt, and deliver excellence every
//                   step of the way.
//                 </p>
//                 <div className="flex flex-col gap-2 items-end transition-opacity duration-300 group-hover:opacity-0">
//                   <svg
//                     className="md:w-[22px] md:h-[22px] 1024:w-[34px] 1024:h-[34px]"
//                     viewBox="0 0 34 35"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="text-[14px] sm:text-[14px] 1280:text-[18px] 1366:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture of <br /> Learning And <br /> Experimentation
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* Row 2 */}
//             <div className="flex">
//               <div className="aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[320px]"></div>
//               {/* Card 3 */}
//               <div className="cursor-pointer  border-t group hover:border-[#8F53A1] flex justify-end pr-2 pt-2 border-r relative border-[#BFBFBF] aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[320px] hover:bg-[#8F53A1] transition-all duration-300">
//                 <div className="absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 group-hover:opacity-0"></div>
//                 <p className="absolute opacity-0 group-hover:opacity-100 text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-1 transition-opacity duration-300">
//                   From embracing diversity to fostering mentorship, safety, and
//                   sustainability, being excellent is a core part of our ethos.
//                 </p>
//                 <div className="flex flex-col gap-2 items-end transition-opacity duration-300 group-hover:opacity-0">
//                   <svg
//                     className="md:w-[22px] md:h-[22px] 1024:w-[34px] 1024:h-[34px]"
//                     viewBox="0 0 34 35"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="text-[14px] sm:text-[14px] 1280:text-[18px] 1366:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture that <br /> values diversity, <br /> quality and{" "}
//                     <br /> responsibility
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Thriving;
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
// //
// "use client";
// import { useState } from "react";
// import React from "react";
// import Btn from "@/components/global/Btn";

// const Thriving = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const handleCardClick = (cardIndex) => {
//     setActiveCard(activeCard === cardIndex ? null : cardIndex);
//   };

//   return (
//     <div className="relative min-h-full overflow-hidden">
//       {/* <img className="purple_vctr block md:hidden absolute top-[-80px] right-[20px]  md:w-[350px] w-[300px]" src='/purple_vector.svg' />
//       <img className="orange_vctr block md:hidden absolute top-[-100px] right-[-100px]  md:w-[350px] w-[300px]" src='/orange_vector.svg' /> */}

//       <div className="fix w-full xl:pb-[20px] 1440:pb-[100px] py-[45px] 768:py-[70px] px-0 overflow-hidden">
//         <div className="flex w-full flex-col justify-between sm:flex-row 1280:gap-8">
//           {/* Left Column */}
//           <div className="w-full sm:w-[40%]  1366:w-1/2 flex flex-col gap-[25px] md:gap-[24px] lg:gap-[44px] relative">
//             {/* <img className="purple_vctr hidden md:block absolute top-[auto] bottom-[-150px] left-[20px] lg:top-[auto] lg:bottom-[-150px] lg:left-[0px] lg:w-[auto] md:w-[350px] w-[300px]" src='/purple_vector.svg' />
//             <img className="orange_vctr hidden md:block absolute top-[auto] bottom-[-400px] left-[-100px] md:left-[200px] md:top-[auto] md:bottom-[-200px] lg:top-[auto] lg:bottom-[-400px] lg:left-[200px] lg:w-[auto]  md:w-[350px] w-[300px]" src='/orange_vector.svg' /> */}

//             <h2 className="flex flex-col bw-m text-[35px] sm:text-[45px] 1280:text-[64px] leading-[1.1] tracking-[-0.04em]">
//               A Thriving <span className="bw-r">Work Culture</span>
//               <img
//                 className="abstract_svg w-max xl:mt-[12px]"
//                 src="/abstract_pattern.svg"
//                 alt="Abstrac"
//               />
//             </h2>
//             <p className="bw-r text-[18px] md:text-[20px] xl:text-[24px] sm:leading-[28px]  pr-1  xl:leading-[34px] tracking-normal">
//               Driven by values of agility, collaboration, and excellence, we are
//               on a mission to transform not just industrial spaces and power
//               businesses, but also nurture an exceptional team of employees and
//               partners who deliver exceptional performance and innovation.
//             </p>

//             <Btn href="/culture/" text="Careers" />
//             {/* Mobile Grid Cards */}
//             <div className="w-full  sm:w-1/2 items-center flex sm:hidden pt-[20px] sm:pt-0 flex-col gap-0">
//               {/* Card 1 */}
//               <div
//                 className={`cursor-pointer border-t border-r flex justify-end pr-1 pt-2 relative aspect-square w-full max-w-[280px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 ${
//                   activeCard === 1
//                     ? "bg-[#f47920] border-[#f47920]"
//                     : "border-[#BFBFBF]"
//                 }`}
//                 onClick={() => handleCardClick(1)}
//               >
//                 <div
//                   className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//                     activeCard === 1 ? "opacity-0" : "opacity-100"
//                   }`}
//                 ></div>
//                 <p
//                   className={`absolute text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[18px] sm:text-[20px] px-0 transition-opacity duration-300 ${
//                     activeCard === 1 ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   At Horizon, collaboration is at the heart of how we work and
//                   grow together. Success is a collective journey.
//                 </p>
//                 <div
//                   className={`flex flex-col gap-2 items-end transition-opacity duration-300 pr-1 ${
//                     activeCard === 1 ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <svg width="24" height="24" viewBox="0 0 34 35" fill="none">
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="cursor-pointer text-[18px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture of <br /> trust and <br /> openness
//                   </p>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div
//                 className={`border-t border-r flex justify-end pr-2 pt-2 relative aspect-square w-full max-w-[280px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 -mt-[100px] mr-[50px] ${
//                   activeCard === 2
//                     ? "bg-[#0db14b] border-[#0db14b]"
//                     : "border-[#BFBFBF]"
//                 }`}
//                 onClick={() => handleCardClick(2)}
//               >
//                 <div
//                   className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//                     activeCard === 2 ? "opacity-0" : "opacity-100"
//                   }`}
//                 ></div>
//                 <p
//                   className={`absolute text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[18px] sm:text-[20px] px-2 transition-opacity duration-300 ${
//                     activeCard === 2 ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   Agility is more than a workplace trait—it is a mindset that
//                   empowers us to innovate, adapt, and deliver excellence every
//                   step of the way.
//                 </p>
//                 <div
//                   className={`flex flex-col gap-2 items-end transition-opacity duration-300 ${
//                     activeCard === 2 ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <svg width="24" height="24" viewBox="0 0 34 35" fill="none">
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="cursor-pointer text-[18px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture of <br /> Learning And <br /> Experimentation
//                   </p>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div
//                 className={`border-t border-r flex justify-end pr-2 pt-2 relative aspect-square w-full max-w-[280px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 -mt-[100px] mr-[100px] ${
//                   activeCard === 3
//                     ? "bg-[#8F53A1] border-[#8F53A1]"
//                     : "border-[#BFBFBF]"
//                 }`}
//                 onClick={() => handleCardClick(3)}
//               >
//                 <div
//                   className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//                     activeCard === 3 ? "opacity-0" : "opacity-100"
//                   }`}
//                 ></div>
//                 <p
//                   className={`absolute text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[18px] sm:text-[20px] px-1 transition-opacity duration-300 ${
//                     activeCard === 3 ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   From embracing diversity to fostering mentorship, safety, and
//                   sustainability, being excellent is a core part of our ethos.
//                 </p>
//                 <div
//                   className={`flex flex-col gap-2 items-end transition-opacity duration-300 ${
//                     activeCard === 3 ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <svg width="24" height="24" viewBox="0 0 34 35" fill="none">
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="cursor-pointer text-[18px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture that <br /> values diversity, <br /> quality and{" "}
//                     <br /> responsibility
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column (Grid Cards) */}
//           <div className="w-full sm:w-[60%] lg:w-1/2 hidden sm:flex flex-col gap-0">
//             {/* Row 1 */}
//             <div className="flex">
//               {/* Card 1 */}
//               <div className="cursor-pointer  border-t group hover:border-[#f47920] flex justify-end pr-1 pt-2 border-r relative border-[#BFBFBF] aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[320px] hover:bg-[#f47920] transition-all duration-300">
//                 <div className="absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 group-hover:opacity-0"></div>
//                 <p className="absolute opacity-0 group-hover:opacity-100 text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] lg:text-[20px] px-0 transition-opacity duration-300">
//                   At Horizon, collaboration is at the heart of how we work and
//                   grow together. Success is a collective journey.
//                 </p>
//                 <div className="flex flex-col gap-2 items-end transition-opacity duration-300 group-hover:opacity-0 pr-1">
//                   <svg
//                     className="md:w-[22px] md:h-[22px] 1024:w-[34px] 1024:h-[34px]"
//                     viewBox="0 0 34 35"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="text-[14px] sm:text-[14px] 1280:text-[18px] 1366:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture of <br /> trust and <br /> openness
//                   </p>
//                 </div>
//               </div>
//               {/* Card 2 */}
//               <div className="cursor-pointer border-t group hover:border-[#0db14b] flex justify-end pr-2 pt-2 border-r relative border-[#BFBFBF] aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[320px] hover:bg-[#0db14b] transition-all duration-300">
//                 <div className="absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 group-hover:opacity-0"></div>
//                 <p className="absolute opacity-0 group-hover:opacity-100 text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-2 transition-opacity duration-300">
//                   Agility is more than a workplace trait—it is a mindset that
//                   empowers us to innovate, adapt, and deliver excellence every
//                   step of the way.
//                 </p>
//                 <div className="flex flex-col gap-2 items-end transition-opacity duration-300 group-hover:opacity-0">
//                   <svg
//                     className="md:w-[22px] md:h-[22px] 1024:w-[34px] 1024:h-[34px]"
//                     viewBox="0 0 34 35"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="text-[14px] sm:text-[14px] 1280:text-[18px] 1366:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture of <br /> Learning And <br /> Experimentation
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* Row 2 */}
//             <div className="flex">
//               <div className="aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[320px]"></div>
//               {/* Card 3 */}
//               <div className="cursor-pointer  border-t group hover:border-[#8F53A1] flex justify-end pr-2 pt-2 border-r relative border-[#BFBFBF] aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[320px] hover:bg-[#8F53A1] transition-all duration-300">
//                 <div className="absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 group-hover:opacity-0"></div>
//                 <p className="absolute opacity-0 group-hover:opacity-100 text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-1 transition-opacity duration-300">
//                   From embracing diversity to fostering mentorship, safety, and
//                   sustainability, being excellent is a core part of our ethos.
//                 </p>
//                 <div className="flex flex-col gap-2 items-end transition-opacity duration-300 group-hover:opacity-0">
//                   <svg
//                     className="md:w-[22px] md:h-[22px] 1024:w-[34px] 1024:h-[34px]"
//                     viewBox="0 0 34 35"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M7.05078 27.2893L26.7902 7.5498"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M7.05078 7.5498H26.7902V27.2893"
//                       stroke="black"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <p className="text-[14px] sm:text-[14px] 1280:text-[18px] 1366:text-[20px] bw-r text-right w-[160px] capitalize">
//                     A culture that <br /> values diversity, <br /> quality and{" "}
//                     <br /> responsibility
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Thriving;

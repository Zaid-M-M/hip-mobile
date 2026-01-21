// import React from "react";

// const SDGHead = () => {
//   return (
//     <div className="relative w-full fix">
//       <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row ">
//         {/* --- Left --- */}
//         <div className="max-w-[100%] xl:max-w-[45%]">
//           <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
//             {/* <div className="flex items-start gap-2 lg:gap-5 flex-col">
//                 <h2 className="lg:text-[52px] wmhead lg:leading-[60px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[42px] text-[32px] flex flex-col max-h-fit justify-start bw-r capitalize">
//                   <span className="bw-m w-full flex items-center gap-5">
//                     {data.heading}
//                   </span>
//                 </h2>

//                 <img
//                   src="/state/statefrm.png"
//                   className="object-cover lg:h-[58px] h-[40px] lg:w-[318px] md:w-[50%] w-[70%]"
//                   alt="Grade A Box"
//                 />
//               </div> */}
//             <div className="flex items-start gap-2 lg:gap-5 flex-col">
//               <h2 className="lg:text-[52px] wmhead lg:leading-[60px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[42px] text-[32px] flex flex-col max-h-fit justify-start capitalize">
//                 <span
//                   className="bw-r w-full"
//                   dangerouslySetInnerHTML={{ __html: data.heading }}
//                 />
//               </h2>

//               <img
//                 src="/state/statefrm.png"
//                 className="object-cover lg:h-[58px] h-[40px] lg:w-[318px] md:w-[50%] w-[70%]"
//                 alt="Grade A Box"
//               />
//             </div>
//           </div>
//         </div>

//         {/* --- Right --- */}
//         <div className="flex flex-col gap-[15px] max-w-full xl:max-w-1/2">
//           {data.desc && (
//             <p
//               className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//               dangerouslySetInnerHTML={{ __html: data.desc }}
//             />
//           )}
//           {data.para && (
//             <p
//               className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]"
//               dangerouslySetInnerHTML={{ __html: data.para }}
//             />
//           )}

//           {/* ✅ Animated expandable section */}
//           <AnimatePresence initial={false}>
//             {showMore && data.extra && (
//               <motion.div
//                 key="extra"
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                 className="overflow-hidden"
//               >
//                 <p
//                   className="bw-r md:text-[17px] lg:text-[17px] flex flex-col gap-[15px] 1280:text-[20px] md:leading-[30px]"
//                   dangerouslySetInnerHTML={{ __html: data.extra }}
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {data.extra && (
//             <button
//               onClick={() => setShowMore((prev) => !prev)}
//               className="md:mt-2 text-black bw-m flex md:gap-2 text-[16px] md:text-[20px] items-center w-fit cursor-pointer uppercase"
//             >
//               {showMore ? "Read Less" : "Read More"}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="30"
//                 height="30"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className={`transition-transform ${
//                   showMore ? "rotate-180" : ""
//                 }`}
//               >
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SDGHead;
"use client";
import React from "react";

const SDGHead = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between md:gap-10 gap-5">
      {/* ---- LEFT ---- */}
      <div className="w-full 2xl:w-[65%] xl:w-[55%] flex flex-col justify-center">
        <h2 className="text-[35px] flex flex-col md:text-[45px] 1366:text-[51px] 1366:leading-[61px] 1440:text-[53px] 1440:leading-[63px] 2xl:text-[56px] 2xl:leading-[66px] 1440:tracking-[-2.05px] md:tracking-[-1.8px] tracking-[-1.4px] 2xl:tracking-[-2.24px] md:leading-[55px] leading-[45px] bw-r">
          <span className="txt_gradient_sustain bw-m">Aligned With The</span>
          <span className="text-white bw-r">UN Sustainable Development</span>
          <span className="flex md:flex-row flex-col xl:gap-[17px] gap-[10px] md:items-end">
            <span className="text-white bw-r">Goals (UN SDGs)</span>
            <img
              src="/abstract_pattern_sustain.png"
              className="abstract_sustian_svg xl:mb-[-6px] 1366:mb-[0px]"
              alt="Sustainability Gradient"
            />
          </span>
        </h2>
      </div>

      {/* ---- RIGHT ---- */}
      <div className="2xl:w-[35%] xl:w-[45%] w-full flex flex-col justify-center">
        <p className="text-white bw-r text-[16px] leading-[26px] xl:text-[20px] xl:leading-[30px]">
          Through thoughtful design, responsible construction, and efficient
          operations, we aim to minimise environmental impact while maximising
          value for our customers, communities, and stakeholders. Our objectives
          are rooted in:
        </p>
      </div>
    </div>
  );
};

export default SDGHead;

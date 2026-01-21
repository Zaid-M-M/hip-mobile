import Btn from "@/components/global/Btn";
import TransitionLink from "@/src/app/TransitionLink";
import Link from "next/link";
import React from "react";

const Sustainaibility = () => {
  return (
    <div className="w-full sm:min-h-[100vh] flex items-center justify-center sm:justify-start">
      <div className="1366:w-[587px] h-auto w-[100%] relative shadow-lg shadow-[#00000030] 1280:h-full 1366:h-full 768:w-[100%] 1024:w-[60%] 1280:w-[50%] bg-gray-100 px-[30px] py-[30px] 1280:px-[45px] 1280:py-[35px] 1366:px-[60px] 1366:py-[60px] rounded-l-[40px] rounded-b-[40px]">
        <img
          src="/susleaf.svg"
          alt="Sustainability Leaf"
          className=" absolute bottom-0 brightness-200 saturate-200 contrast-200 right-0 z-10"
        />

        {/* --- Unified vertical stack --- */}
        <div className="flex flex-col h-full w-full justify-start gap-6 1280:gap-[30px]  z-20 relative">
          {/* Title */}
          <div className="hidden lg:block">
            <h2 className="bw-m text-[32px] leading-[40px] whitespace-nowrap 768:text-[35px] 768:leading-[42px] 1024:text-[40px] 1024:leading-[50px] 1280:text-[48px] tracking-[-0.04em]">
              Progress That Doesn’t
            </h2>

            <div className="flex items-center gap-[16px] xl:gap-[24px]">
              <h3 className="bw-r text-[32px] leading-[40px] 768:text-[35px] 768:leading-[42px] 1024:text-[40px] whitespace-nowrap 1024:leading-[50px] xl:text-[46px] xl:leading-[68px] tracking-[-0.04em]">
                Cost the Planet
              </h3>
              <span className="">
                <img
                  src="/abstract_pattern_sustain.png"
                  alt="Truck"
                  className="abstract_sustian_svg h-full"
                />
              </span>
            </div>
          </div>

          {/* Paragraph */}
          <p className="bw-r text-[16px] leading-[26px] w-full 1280:text-[20px] 1280:leading-[30px]">
            We believe sustainable growth is the only kind of growth. That’s why
            our parks are developed in alignment with leading global standards,
            including ISO, GRESB, IGBC, and LEED, to reduce environmental impact
            and create long-term value, for both, our clients and our planet
          </p>

          {/* Buttons */}
          <div className="flex items-start gap-2.5 bw-r text-[20px] leading-[30px]">
            {/* ESG Button */}
            <TransitionLink
              href="/sustainability/"
              className="whitespace-nowrap w-auto cursor-pointer bg-black text-white text-center text-[11px] py-[5px] 1280:text-[14px] 1280:py-[10px] 1280:px-[40px] px-[10px] uppercase inter-sb tracking-[0.1em] border-2 border-black flex justify-center items-center"
            >
              ESG
              <span className="md:w-[30px] w-5 h-5 md:h-[30px] ml-2 flex items-center justify-center">
                <img
                  src="/whiteexternal.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </span>
            </TransitionLink>

            {/* Download Report Button */}
            <TransitionLink
              href="/sustainability#reportdownload"
              className="whitespace-nowrap w-fit cursor-pointer text-[11px] py-[5px] 1280:text-[14px] 1280:py-[10px] 1280:px-[20px] px-[10px] uppercase inter-sb tracking-[0.1em] bg-transparent border-2 border-black text-black flex items-center justify-center"
            >
              DOWNLOAD REPORT
              <span className="md:w-[30px] w-5 h-5 md:h-[30px] ml-2 flex items-center justify-center">
                <img
                  src="/blackexternal.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </span>
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainaibility;

// "use client";
// import Btn from "@/components/global/Btn";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";

// const parentVariants = {
//   hidden: { opacity: 0, y: 100 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       staggerChildren: 0.2, // 👈 staggers children
//     },
//   },
// };

// const childVariants = {
//   hidden: { opacity: 0, x: -50 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// const Sustainaibility = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }} // start hidden & lower
//       whileInView={{ opacity: 1, y: 0 }} // fade in & slide up
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.1 }} // animate only once when 30% visible
//       className="w-full min-h-[100vh] fix flex items-center justify-start"
//     >
//       <motion.div
//         initial={{ x: "-100px", opacity: 0 }}
//         whileInView={{ x: "0", opacity: 1 }}
//         transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
//         viewport={{ once: false, amount: 0.1 }}
//         className="1366:w-[587px] 1366:h-[456px] w-[65%] 1024:w-[50%] h-full bg-gray-100 px-[30px] py-[30px] 1280:px-[60px] rounded-l-[40px] rounded-b-[40px]  1280:py-[60px]"
//       >
//         <motion.div
//           variants={parentVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="flex flex-col h-full w-full justify-start gap-[23px]"
//         >
//           <div>
//             <motion.h2
//               variants={childVariants}
//               initial={{ x: -50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className="bw-m text-[28px] 768:text-[35px] 768:leading-[42px] xl:leading-[66px] 1024:text-[45px] 1024:leading-[50px] 1280:text-[56px] tracking-[-0.04em]"
//             >
//               Our Sustainaibility
//             </motion.h2>

//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//               className="flex items-center gap-1.5 xl:gap-[12px]"
//             >
//               <motion.h3
//                 variants={childVariants}
//                 initial={{ x: "-100px", opacity: 0 }}
//                 whileInView={{ x: "0", opacity: 1 }}
//                 transition={{
//                   duration: 1.4,
//                   ease: [0.7, 0, 0.4, 1],
//                   delay: 0.2,
//                 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 className="bw-r 768:text-[35px] 768:leading-[42px] 1024:text-[45px] 1024:leading-[50px] xl:text-[56px] xl:leading-[66px] tracking-[-0.04em]"
//               >
//                 Initiatives{" "}
//               </motion.h3>
//               <span className="lg:flex h-[25px] 768:h-[28px] 1024:h-[35px] justify-start xl:h-[52px] xl:w-[180px] overflow-hidden">
//                 <motion.img
//                   src="/frm2.png"
//                   alt="Truck"
//                   className="object-cover h-full"
//                   variants={childVariants}
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "257px" }}
//                   viewport={{ once: true, amount: 0.6 }}
//                   transition={{
//                     duration: 1,
//                     ease: [0.7, 0, 0.4, 1],
//                     delay: 0.5,
//                   }}
//                 />
//               </span>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//             className="flex flex-col h-auto w-full gap-[23px] items-start"
//           >
//             <p className="bw-r text-[20px] leading-[30px]">
//               From reducing our carbon footprint to introducing inclusive growth
//               policies, we are wholeheartedly committed to creating a better
//               future for all.
//             </p>

//             <div className="flex items-start justify-between bw-r text-[20px] leading-[30px]  1024:pt-0  xl:pt-6 w-auto gap-2.5">
//               <motion.a
//                 href="/"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="whitespace-nowrap cursor-pointer bg-black text-white w-fit text-[12px] py-[10px] 1280:text-[14px] 1280:py-[15px] 1280:px-[40px] px-[16px] uppercase inter-sb tracking-[0.1em] border-2 border-black"
//               >
//                 OUR ESG REPORT
//               </motion.a>

//               <motion.a
//                 href="/"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="whitespace-nowrap cursor-pointer w-fit text-[12px] 1280:text-[14px] 1280:py-[15px] 1280:px-[40px] px-[16px] py-[10px] uppercase inter-sb tracking-[0.1em] bg-transparent border-2 border-black text-black"
//               >
//                 DOWNLOAD REPORT
//               </motion.a>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Sustainaibility;

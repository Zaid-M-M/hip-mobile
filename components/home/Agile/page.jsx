// import Btn from "@/components/global/Btn";
// import { motion } from "framer-motion";
// import React from "react";

// const Agile = () => {
//   return (
//     <div
//       className="h-full overflow-hidden  w-full relative py-[45px] sm:py-[80px] 1366:py-[100px] bg-white"
//       //   style={{ backgroundImage: "url('/whatnew.webp')" }}
//     >
//       <div className="flex-col flex sm:flex-row items-start  h-full justify-center gap-[22px] sm:gap-0 sm:justify-between fixup w-full">
//         <div className="flex flex-col justify-between gap-8 h-full">
//           <div className="h-fit">
//             <motion.h1
//               // initial={{ opacity: 0, x: -80 }}
//               // animate={{ opacity: 1, x: 0 }}
//               // transition={{
//               //   delay: 0.2,
//               //   duration: 0.6,
//               //   ease: "easeIn",
//               // }}
//               className="text-[35px] md:text-[45px]  lg:text-[56px] xl:text-[66px] z-10 bw-m lg:leading-[65px] xl:leading-[75px] 1366:leading-[76px]  sm:pb-0 md:leading-[55px] leading-[45px] justify-start 2xl:-mb-36  2xl:pb-[30px] "
//             >
//               <motion.span
//                 // initial={{ x: "-100px", opacity: 0 }}
//                 // whileInView={{ x: "0", opacity: 1 }}
//                 // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
//                 // viewport={{ once: true, amount: 0.1 }}
//                 className="flex items-center gap-2   1280:gap-[20px] whitespace-nowrap tracking-[-0.04em]"
//               >
//                 We Are Agile.{" "}
//                 <motion.div className="relative inline-block overflow-hidden  sm:align-middle w-full max-w-[249px] h-auto">
//                   <motion.div
//                     className="lg:flex hidden justify-start items-end h-[58px] overflow-hidden"
//                     // initial={{ width: 0 }}
//                     // whileInView={{ width: "257px" }}
//                     // viewport={{ once: true, amount: 0.6 }}
//                     // transition={{
//                     //   duration: 1,
//                     //   ease: [0.7, 0, 0.4, 1],
//                     //   delay: 0.5,
//                     // }}
//                   >
//                     <img
//                       src="/frm.svg"
//                       alt="Truck"
//                       className="object-cover h-[35px] sm:h-[40px]"
//                     />
//                   </motion.div>
//                   <motion.div
//                     className="lg:hidden flex items-center justify-start sm:justify-start h-[35px] sm:h-[40px] overflow-hidden"
//                     // initial={{ width: 0 }}
//                     // whileInView={{ width: "102px" }}
//                     // viewport={{ once: true, amount: 0.6 }}
//                     // transition={{
//                     //   duration: 1,
//                     //   ease: [0.7, 0, 0.4, 1],
//                     //   delay: 0.5,
//                     // }}
//                   >
//                     <img
//                       src="/frm2.png"
//                       alt="Truck"
//                       className="object-cover h-full"
//                     />
//                   </motion.div>
//                 </motion.div>
//               </motion.span>
//               <motion.span
//                 // initial={{ x: "-100px", opacity: 0 }}
//                 // whileInView={{ x: "0", opacity: 1 }}
//                 // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//                 // viewport={{ once: true, amount: 0.1 }}
//                 className="block bw-r whitespace-nowrap  tracking-[-0.04em]"
//               >
//                 For Your Growth
//               </motion.span>
//             </motion.h1>
//           </div>
//           <div className="h-auto 1536:h-full">
//             <img
//               src="/agile.svg"
//               alt="Agile"
//               className="object-contain w-full max-h-[500px]"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col justify-center gap-[14px] sm:gap-[20px] lg:gap-[20px] w-[100%] sm:w-[50%]">
//           <motion.p
//             // initial={{ y: 30, opacity: 0 }}
//             // whileInView={{ y: 0, opacity: 1 }}
//             // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             // viewport={{ once: true, amount: 0.1 }}
//             className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
//           >
//             From warehousing to industrial clusters — we create ecosystems that
//             move goods, enable production, and strengthen India's position in
//             global trade. Every decision we make, every space we design, every
//             policy we advocate for, is guided by one question: Will this help
//             our customer grow?{" "}
//           </motion.p>
//           <motion.p
//             // initial={{ y: 30, opacity: 0 }}
//             // whileInView={{ y: 0, opacity: 1 }}
//             // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             // viewport={{ once: true, amount: 0.1 }}
//             className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
//           >
//             We anticipate challenges, adapt to shifting needs, and align our
//             processes so that your goals are never left waiting. Whether it’s
//             tailoring spaces, streamlining timelines, or navigating regulatory
//             landscapes, we stay flexible—so your operations stay future-ready.{" "}
//           </motion.p>
//           <motion.p
//             // initial={{ y: 30, opacity: 0 }}
//             // whileInView={{ y: 0, opacity: 1 }}
//             // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             // viewport={{ once: true, amount: 0.1 }}
//             className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
//           >
//             Our agility means you can scale with confidence, expand without
//             disruption, and build without compromise. Because growth isn’t just
//             a milestone for you. It is a shared mission for us.{" "}
//           </motion.p>
//           <motion.div
//           // initial={{ opacity: 0, y: 30 }}
//           // whileInView={{ opacity: 1, y: 0 }}
//           // transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.35, 1] }}
//           // viewport={{ once: true, amount: 0.1 }}
//           >
//             <Btn text={"Know Us Overview"} />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Agile;

// "use client";

// import Btn from "@/components/global/Btn";
// import { AnimatePresence, motion } from "framer-motion";
// import React, { useState } from "react";

// const Agile = () => {
//   const [showMore, setShowMore] = useState(false);
//   return (
//     <div
//       className="h-full overflow-hidden  w-full relative py-[45px] sm:py-[80px] 1366:py-[100px] bg-white"
//       //   style={{ backgroundImage: "url('/whatnew.webp')" }}
//     >
//       <div className="flex-col flex 1024:flex-row items-start h-full justify-center gap-[22px] 1024:gap-[60px] 1280:gap-0 sm:justify-between fixup w-full">
//         <div className="flex flex-col justify-between gap-8 h-full 1536:min-h-[550px]">
//           <div className="h-fit">
//             <motion.h1
//               // initial={{ opacity: 0, x: -80 }}
//               // animate={{ opacity: 1, x: 0 }}
//               // transition={{
//               //   delay: 0.2,
//               //   duration: 0.6,
//               //   ease: "easeIn",
//               // }}
//               className="text-[35px] md:text-[45px]  lg:text-[56px]  z-10 bw-m lg:leading-[65px]    sm:pb-0 md:leading-[55px] leading-[45px] justify-start 2xl:-mb-36  2xl:pb-[30px] "
//             >
//               <motion.span
//                 // initial={{ x: "-100px", opacity: 0 }}
//                 // whileInView={{ x: "0", opacity: 1 }}
//                 // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
//                 // viewport={{ once: true, amount: 0.1 }}
//                 className="flex items-center gap-2   1280:gap-[20px] whitespace-nowrap tracking-[-0.04em]"
//               >
//                 We Are Agile.{" "}
//                 <motion.div className="relative inline-block overflow-hidden  sm:align-middle w-full max-w-[249px] h-auto">
//                   <motion.div
//                     className="lg:flex hidden justify-start items-end h-[58px] overflow-hidden"
//                     // initial={{ width: 0 }}
//                     // whileInView={{ width: "257px" }}
//                     // viewport={{ once: true, amount: 0.6 }}
//                     // transition={{
//                     //   duration: 1,
//                     //   ease: [0.7, 0, 0.4, 1],
//                     //   delay: 0.5,
//                     // }}
//                   >
//                     <img
//                       src="/frm.svg"
//                       alt="Truck"
//                       className="object-cover h-[35px] sm:h-[40px]"
//                     />
//                   </motion.div>
//                   <motion.div
//                     className="lg:hidden flex items-center justify-start sm:justify-start h-[35px] sm:h-[40px] overflow-hidden"
//                     // initial={{ width: 0 }}
//                     // whileInView={{ width: "102px" }}
//                     // viewport={{ once: true, amount: 0.6 }}
//                     // transition={{
//                     //   duration: 1,
//                     //   ease: [0.7, 0, 0.4, 1],
//                     //   delay: 0.5,
//                     // }}
//                   >
//                     <img
//                       src="/frm2.png"
//                       alt="Truck"
//                       className="object-cover h-full"
//                     />
//                   </motion.div>
//                 </motion.div>
//               </motion.span>
//               <motion.span
//                 // initial={{ x: "-100px", opacity: 0 }}
//                 // whileInView={{ x: "0", opacity: 1 }}
//                 // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//                 // viewport={{ once: true, amount: 0.1 }}
//                 className="block bw-r whitespace-nowrap  tracking-[-0.04em]"
//               >
//                 For Your Growth
//               </motion.span>
//             </motion.h1>
//           </div>
//           <div className="hidden 1024:h-auto 1024:block 1536:h-full">
//             <img
//               src="/agile.svg"
//               alt="Agile"
//               className="object-contain w-full max-h-[500px]"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col justify-center gap-[14px] sm:gap-[20px] lg:gap-[20px] w-full 1024:w-[50%]">
//           <motion.p
//             // initial={{ y: 30, opacity: 0 }}
//             // whileInView={{ y: 0, opacity: 1 }}
//             // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             // viewport={{ once: true, amount: 0.1 }}
//             className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
//           >
//             From warehousing to industrial clusters — we create ecosystems that
//             move goods, enable production, and strengthen India's position in
//             global trade. Every decision we make, every space we design, every
//             policy we advocate for, is guided by one question: Will this help
//             our customer grow?{" "}
//           </motion.p>
//           <motion.p
//             // initial={{ y: 30, opacity: 0 }}
//             // whileInView={{ y: 0, opacity: 1 }}
//             // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             // viewport={{ once: true, amount: 0.1 }}
//             className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
//           >
//             We anticipate challenges, adapt to shifting needs, and align our
//             processes so that your goals are never left waiting. Whether it’s
//             tailoring spaces, streamlining timelines, or navigating regulatory
//             landscapes, we stay flexible—so your operations stay future-ready.{" "}
//           </motion.p>
//           {/* <motion.p
//             // initial={{ y: 30, opacity: 0 }}
//             // whileInView={{ y: 0, opacity: 1 }}
//             // transition={{ duration: 1, delay: 0.3, ease: [0.7, 0, 0.4, 1] }}
//             // viewport={{ once: true, amount: 0.1 }}
//             className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
//           >
//             Our agility means you can scale with confidence, expand without
//             disruption, and build without compromise. Because growth isn’t just
//             a milestone for you. It is a shared mission for us.{" "}
//           </motion.p> */}
//           <AnimatePresence initial={false}>
//             <motion.div
//               key="para3"
//               initial={{ height: "auto", opacity: 1 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//               className="overflow-hidden"
//             >
//               <motion.p className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]">
//                 Our agility means you can scale with confidence, expand without
//                 disruption, and build without compromise. Because growth isn’t
//                 just a milestone for you. It is a shared mission for us.
//               </motion.p>
//               {showMore && (
//                 <motion.p
//                   className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px] mt-2"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   This extended section provides more insights about how our
//                   agility supports scalability in the most challenging logistics
//                   and industrial environments. We remain committed to shaping
//                   spaces that adapt as fast as your business does.
//                 </motion.p>
//               )}
//             </motion.div>
//           </AnimatePresence>
//           <motion.div
//           // initial={{ opacity: 0, y: 30 }}
//           // whileInView={{ opacity: 1, y: 0 }}
//           // transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.35, 1] }}
//           // viewport={{ once: true, amount: 0.1 }}
//           >
//             <Btn text={"Know Us Overview"} />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Agile;

"use client";

import Btn from "@/components/global/Btn";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import TransitionLink from "@/src/app/TransitionLink";
import Portfolio from "../Portfolio/Portfolio";

const Agile = () => {
  // const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-full overflow-hidden w-full relative py-[45px] sm:py-[50px] lg:py-[80px] xl:py-[100px] xl:pb-[0px] bg-white">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] top-auto lg:w-[400px] bottom-[-50px] right-[0px] lg:bottom-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] top-auto lg:w-[400px] bottom-[-50px] right-[0px] lg:bottom-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="flex-col flex 1024:flex-row items-start h-full justify-center gap-[12px] 1024:gap-[60px] 1280:gap-[60px] 1366:gap-0 sm:justify-between fixup w-full">
        {/* Left content */}
        <div className="flex flex-col relative justify-between gap-8 h-full lg:min-h-[500px] 1536:min-h-[550px] lg:w-[45%]">
          <div className="h-fit">
            <motion.h1 className="text-[35px] md:text-[45px] lg:text-[56px] z-10 bw-m lg:leading-[65px] 1280:text-[64px] 1280:leading-[74px] sm:pb-0 md:leading-[55px] leading-[45px]">
              <motion.span className="flex items-center gap-2 1280:gap-[10px] 1440:gap-[20px] whitespace-nowrap tracking-[-0.04em]">
                We Are Agile.
                <motion.div className="relative inline-block overflow-hidden sm:align-middle w-full max-w-[249px] h-auto">
                  <motion.div className="lg:flex hidden justify-start items-center h-[58px] overflow-hidden">
                    <img
                      src="/abstract_pattern.webp"
                      alt="Truck"
                      className="abstract_svg"
                    />
                  </motion.div>
                  <motion.div className="lg:hidden flex items-center justify-start h-[35px] sm:h-[40px] overflow-hidden">
                    <img
                      src="/abstract_pattern.webp"
                      alt="Truck"
                      className="abstract_svg"
                    />
                  </motion.div>
                </motion.div>
              </motion.span>
              <motion.span className="block bw-r whitespace-nowrap tracking-[-0.04em]">
                For Your Growth
              </motion.span>
            </motion.h1>

            <motion.p className="bw-m text-[18px] md:text-[25px] sm:text-xl xl:mt-[25px] lg:text-[28px] text-black leading-[26px] sm:leading-[38px] mt-[10px]">
              Every decision we make, every space we design, every policy we
              advocate for, is guided by one question: Will this help our
              customer grow?
            </motion.p>
          </div>

          <div className="hidden 1024:h-auto 1024:block absolute top-auto bottom-0">
            <img
              src="/agile.svg"
              alt="Agile"
              className="object-contain w-full max-h-[500px]"
            />
          </div>
        </div>

        {/* Right content with Read More */}
        <div className="flex flex-col justify-center gap-[14px] sm:gap-[20px] lg:gap-[20px] w-full 1024:w-[50%]">
          {/* <motion.p className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]">
            From warehousing to industrial clusters — we create ecosystems that
            move goods, enable production, and strengthen India's position in
            global trade.
          </motion.p>

          <motion.p className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]">
            We anticipate challenges, adapt to shifting needs, and align our
            processes so that your goals are never left waiting. Whether it’s
            tailoring spaces, streamlining timelines, or navigating regulatory
            landscapes, we stay flexible—so your operations stay future-ready.
          </motion.p>
          <motion.p
            key="extraPara"
            className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
          >
            Our agility means you can scale with confidence, expand without
            disruption, and build without compromise. Because growth isn’t just
            a milestone for you. It is a shared mission for us.
          </motion.p> */}

          <motion.p className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]">
            Horizon is India’s largest and fastest-growing industrial and
            logistics infrastructure developer. We've established a national
            footprint in just 5 years and have become a critical supply chain
            enabler, building essential industrial and logistics infrastructure
            for more than 100 customers across manufacturing, ecommerce, and
            3PLs. With all our operational parks IGBC certified, we embed
            sustainability, efficiency, and long-term value into every
            development - helping occupiers meet global ESG expectations with
            confidence.
          </motion.p>

          <motion.p className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]">
            Horizon is the only scaled, pure-play industrial and logistics
            platform in India, with an integrated development and active asset
            management model.
          </motion.p>
          <motion.p
            key="extraPara"
            className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
          >
            We anticipate challenges, adapt to shifting needs, and align our
            processes so that your goals are never left waiting. Whether it’s
            tailoring spaces, streamlining timelines, or navigating regulatory
            landscapes, we stay flexible - so your operations stay future-ready.
            Our agility means you can scale with confidence, expand without
            disruption, and build without compromise.
          </motion.p>

          <motion.div>
            <Btn href="/know-us/" text={"Know Us Overview"} />
          </motion.div>
        </div>
      </div>

      <Portfolio />
    </div>
  );
};

export default Agile;

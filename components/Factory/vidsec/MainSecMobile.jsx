// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";

// const texts = [
//   {
//     heading: "Customized factory setups",
//     sub: "with zero upfront investment",
//     imgmd: "/factory/cust.png",
//     img: "/factory/i1.jpg",
//   },
//   {
//     heading: "Flexible space and expansion",
//     sub: "options ideal for MSMEs and first-time manufacturers",
//     imgmd: "/factory/flexible.png",
//     img: "/factory/i2.jpg",
//   },
//   {
//     heading: "Tailored rental",
//     sub: "plans aligned to your operational needs",
//     imgmd: "/factory/tailor.png",
//     img: "/factory/i3.jpg",
//   },
//   {
//     heading: "Trusted by Leading Manufacturing Clients",
//     sub: "across automotive, aerospace, engineering, and network technology sectors",
//     imgmd: "/factory/trust.png",
//     img: "/factory/i4.jpg",
//   },
// ];

// export default function MainSecMobile() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.9", "end end"], // start when 20% visible
//   });

//   return (
//     <ReactLenis root>
//       <div
//         ref={containerRef}
//         className="relative bg-white lg:!hidden !block"
//         style={{ height: `${(texts.length - 1) * 150}vh` }} // remove top whitespace
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           {texts.map((item, i) => {
//             const total = texts.length;
//             const start = i / total;
//             const mid = (i + 0.5) / total;
//             const end = (i + 1) / total;

//             // Last item: no exit animation
//             const isLast = i === texts.length - 1;

//             const opacity = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               isLast ? [0, 1, 1] : [0, 1, 0]
//             );

//             const y = useTransform(
//               scrollYProgress,
//               [start, mid, end],
//               isLast ? ["10%", "0%", "0%"] : ["10%", "0%", "-10%"]
//             );

//             return (
//               <motion.div
//                 key={i}
//                 style={{ opacity, y }}
//                 className="absolute inset-0 flex md:items-start items-center justify-center"
//               >
//                 <div className="bg-white md:h-[60vh] h-[100vh] w-[90%] pt-[100px] justify-end flex flex-col-reverse gap-3">
//                   <img
//                     src={item.img}
//                     alt={item.heading}
//                     className="w-full md:hidden flex h-auto object-contain"
//                   />
//                   <img
//                     src={item.imgmd}
//                     alt={item.heading}
//                     className="w-full md:flex hidden h-auto object-contain"
//                   />
//                   <div className="flex flex-col gap-3 max-w-[80%]">
//                     <h2 className="text-[35px] md:text-[45px] md:leading-[55px] bw-m leading-[45px] tracking-[-0.04em]">
//                       {item.heading}
//                     </h2>
//                     <p className="bw-r text-[20px] md:text-[24px] md:leading-[34px] leading-[30px]">
//                       {item.sub}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </ReactLenis>
//   );
// }

"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";

const texts = [
  {
    heading: (
      <>
        Customized <br /> Factory Setups
      </>
    ),
    sub: "with zero upfront investment",
    imgmd: "/factory/cust.png",
    img: "/factory/i1.jpg",
  },
  {
    heading: (
      <>
        Flexible Space <br /> and Expansion
      </>
    ),
    sub: (
      <>
        options ideal for MSMEs and <br /> first-time manufacturers
      </>
    ),
    imgmd: "/factory/flexible.png",
    img: "/factory/i4.jpg",
  },
  {
    heading: "Tailored Rental",
    sub: (
      <>
        Plans aligned to your <br /> operational needs
      </>
    ),
    imgmd: "/factory/tailor.png",
    img: "/factory/i3.jpg",
  },
  {
    heading: "Trusted by Leading Manufacturing Clients",
    sub: (
      <>
        across automotive, aerospace, <br /> engineering, and network <br />{" "}
        technology sectors
      </>
    ),
    imgmd: "/factory/trust.png",
    img: "/factory/i2.jpg",
  },
];

export default function MainSecMobileF() {
  const containerRef = useRef(null);

  // Raw scroll progress - no smoothing, just 1:1 movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <div
        ref={containerRef}
        className="relative bg-white lg:!hidden !block"
        style={{ height: `${(texts.length - 1) * 125}vh` }}
      >
        <div className="sticky top-[60px] h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden">
          {texts.map((item, i) => {
            const total = texts.length;
            const start = i / total;
            const end = (i + 1) / total;

            const isFirst = i === 0;
            const isLast = i === texts.length - 1;

            // itemOpacity: Snappy 8% window using raw scroll
            const itemOpacity = useTransform(
              scrollYProgress,
              [start, start + 0.08, end - 0.08, end],
              isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0],
            );

            // imageOpacity: Blink 2% window using raw scroll
            const imageOpacity = useTransform(
              scrollYProgress,
              [start, start + 0.02, end - 0.02, end],
              isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0],
            );

            // textY: 12% movement window using raw scroll
            const textY = useTransform(
              scrollYProgress,
              [start, start + 0.12, end - 0.12, end],
              isFirst
                ? ["0%", "0%", "0%", "-100%"]
                : isLast
                  ? ["30%", "0%", "0%", "0%"]
                  : ["50%", "0%", "0%", "-100%"],
            );

            return (
              <motion.div
                key={i}
                style={{ opacity: itemOpacity }}
                className="absolute inset-0 flex md:items-start items-center justify-center pointer-events-none"
              >
                <div className="bg-white w-full pt-[0px] justify-between flex flex-col-reverse h-[calc(100vh-100px)] gap-3 pointer-events-auto">
                  <motion.div
                    style={{ opacity: imageOpacity }}
                    className="w-full h-[calc(60vh-40px)] flex items-end -mt-[140vh]"
                  >
                    <img
                      src={item.img}
                      alt="factory"
                      className="w-full md:hidden flex h-auto object-contain"
                    />
                    <img
                      src={item.imgmd}
                      alt="factory"
                      className="w-full md:flex hidden h-auto object-contain"
                    />
                  </motion.div>

                  <div className="bg-gradient-to-b pt-[15%] from-white from-40% z-20 px-[5%] to-transparent relative min-h-[70vh] mb-auto mt-0 h-[70vh]">
                    <motion.div
                      style={{ y: textY }}
                      className="flex flex-col gap-3 w-full relative"
                    >
                      <h2 className="text-[35px] md:text-[45px] md:leading-[55px] bw-m leading-[45px] tracking-[-0.04em]">
                        {item.heading}
                      </h2>
                      <p className="bw-r text-[20px] md:text-[24px] md:leading-[34px] leading-[30px]">
                        {item.sub}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ReactLenis>
  );
}

// import Marquee from "react-fast-marquee";

// const brands = [
//   "/brands/s1.svg",
//   "/brands/s2.svg",
//   "/brands/s3.svg",
//   "/brands/s4.svg",
//   "/brands/s5.svg",
// ];

// const Slider = () => {
//   return (
//     <Marquee direction="left" gradient={false} speed={120} className="py-4">
// <div className="inline-flex items-center gap-12 min-w-max">
//   {brands.map((logo, index) => (
//     <img
//       priority
//       key={index}
//       src={logo}
//       alt={`Brand ${index}`}
//       className="block object-contain w-auto h-20"
//     />
//   ))}
// </div>
//     </Marquee>
//   );
// };

// export default Slider;

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
// import Image from "next/image";

const brands = [
  "/home/brands/s1.svg",
  "/home/brands/s2.svg",
  "/home/brands/s3.svg",
  "/home/brands/s4.svg",
  "/home/brands/s5.svg",
];

const Slider = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [1, 0, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden fix bg-inherit gap-[26px] flex flex-col merqueSlider mx-auto"
    >
      <motion.div className="flex items-center justify-between merqueSlide h-fit">
        <Marquee direction="left" speed={120}>
          <div className="inline-flex items-center gap-3 xl:gap-12 px-6 min-w-max">
            {brands.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Brand ${index}`}
                priority={index === 0} // only prioritize the first one if needed
                className="object-contain w-auto h-16 xl:h-20"
              />
            ))}
          </div>
        </Marquee>
      </motion.div>
    </motion.div>
  );
};
export default Slider;

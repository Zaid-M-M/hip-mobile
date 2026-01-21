// import React from "react";

// const GrowSection = () => {
//   return (
//     <div>
//       <div className="fixup">
//         <div className="flex flex-col gap-[25px] 1024:flex-row items-center justify-center w-full h-fit bg-cover bg-center">
//           <div className="w-full  1024:-mt-0 1280:mt-10 1366:mt-16 1440:mt-20 1536:mt-16 1024:w-1/2 flex flex-col items-start gap-[12px] 1024:gap-[16px] 1280:gap-[18px] ">
//             <div>
//               <h1 className="bw-m text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] 1366:leading-[74px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:tracking-[-3.04px]">
//                 Growing
//               </h1>
//               <h2 className="bw-r text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:leading-[74px] 1366:tracking-[-3.04px]">
//                 Responsibly
//               </h2>
//             </div>
//             <div className="h-[35px] 1024:h-[52px] ">
//               <img
//                 src="/green.svg"
//                 className="w-full h-full max-w-full"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="w-full items-center 1024:w-1/2">
//             <p className="bw-r 768:text-[18px] 768:leading-[28px] 1280:text-[20px] 1280:leading-[30px]">
//               We embed ethical practices, transparency, and accountability into
//               every decision. By empowering our teams with training and ensuring
//               strict compliance, we create a culture of trust that extends to
//               our suppliers, partners, and communities.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GrowSection;
import React from "react";

const GrowSection = () => {
  return (
    <div className="relative overflow-hidden h-fit">
      <div className="fixup lg:py-16 py-12">
        <div className="flex flex-col gap-[25px] 1024:flex-row items-start justify-start w-full h-fit bg-cover bg-center">
          <div className="w-full 1024:w-1/2 flex sm:flex-row flex-col xl:items-start md:items-end items-start xl:flex-col gap-[12px] 1024:gap-[16px] 1280:gap-[18px] ">
            <div>
              <h2 className="bw-m text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] 1366:leading-[74px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:tracking-[-3.04px]">
                Growing
              </h2>
              <h2 className="bw-r text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:leading-[74px] 1366:tracking-[-3.04px]">
                Responsibly
              </h2>
            </div>
            <div className="">
              <img
                src="/abstract_pattern_sustain.png"
                className="w-full xl:mb-0 sm:mb-2 mb-0 h-full max-w-full abstract_sustian_svg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full  1024:w-1/2">
            <p className="bw-r 768:text-[18px] 768:leading-[28px] 1280:text-[20px] 1280:leading-[30px]">
              We embed ethical practices, transparency, and accountability into
              every decision. By empowering our teams with training and ensuring
              strict compliance, we create a culture of trust that extends to
              our suppliers, partners, and communities.
            </p>
          </div>
        </div>
      </div>
      <img
        className="purple_vctr  md:block absolute -top-20 1024:-top-40 1024:-bottom-40 -right-32 768:-right-10 1024:-right-20 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      {/* <img
        className="orange_vctr hidden md:block absolute -bottom-40 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      /> */}
      <img
        className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px] md:left-[auto] md:right-[0px] right-[-80px]  lg:bottom-[-120px] xl:right-[-160px] 1920:right-[-50px]"
        src="/green_vector.svg"
      />
    </div>
  );
};

export default GrowSection;

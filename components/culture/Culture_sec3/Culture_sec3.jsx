// import React from "react";
// import Csec3_cards from "./Csec3_cards";

// const Culture_sec3 = ({ career_sec2_sub_paragraph }) => {
//   return (
//     <div className="bg-black w-full ">
//       <div className="relative w-full fix 1280:pt-[100px] 1280:pb-[20px] pt-[45px] pb-[45px]">
//         <div className="flex lg:flex-row flex-col justify-between gap-[15px] lg:gap-[25px] xl:gap-[50px] mb-[0px]">
//           <div className="flex items-left flex-col relative w-fit">
//             <h1 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] !font-medium bw-m txt_gradient whitespace-nowrap capitalize">
//               A Culture of Learning
//             </h1>
//             <div className="flex flex-col gap-[10px] md:gap-[17px]">
//               <h1 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-r bg-gradient-to-r overflow-visible text-white capitalize">
//                 and Experimentation
//               </h1>
//               <img src="/abstract_pattern.svg" className="abstract_svg w-max" />
//             </div>
//           </div>

//           <p
//             className="bw-r md:mb-0 mb-5 md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-[#E0E0E0] xl:w-[670px] lg:pt-[17px]"
//             dangerouslySetInnerHTML={{ __html: career_sec2_sub_paragraph }}
//           />
//         </div>

//         <Csec3_cards />
//       </div>
//     </div>
//   );
// };

// export default Culture_sec3;

import React from "react";
import Csec3_cards from "./Csec3_cards";

const Culture_sec3 = ({ career_sec2_sub_paragraph }) => {
  return (
    <div className="bg-black w-full ">
      <div className="relative w-full fix 1280:pt-[100px] 1280:pb-[20px] pt-[45px] pb-[100px]">
        <div className="flex lg:flex-row flex-col justify-between gap-[15px] lg:gap-[25px] xl:gap-[50px] mb-[0px]">
          <div className="flex items-left flex-col relative w-fit">
            <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] !font-medium bw-m txt_gradient whitespace-nowrap capitalize">
              A Culture of Learning
            </h2>
            <div className="flex flex-col gap-[10px] md:gap-[17px]">
              <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-r bg-gradient-to-r overflow-visible text-white capitalize">
                and Experimentation
              </h2>
              <img src="/abstract_pattern.svg" className="abstract_svg w-max" />
            </div>
          </div>

          <p
            className="bw-r md:mb-0 mb-10 md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-[#E0E0E0] xl:w-[670px] lg:pt-[17px]"
            dangerouslySetInnerHTML={{ __html: career_sec2_sub_paragraph }}
          />
        </div>

        <Csec3_cards />
      </div>
    </div>
  );
};

export default Culture_sec3;

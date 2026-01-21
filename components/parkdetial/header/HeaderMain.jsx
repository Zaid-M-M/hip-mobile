// import React from "react";
// import Bbar from "./Bbar";
// import BreadCrum from "./BreadCrum";
// import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

// const HeaderMain = ({
//   title,
//   h1,
//   spotlightImage,
//   metaTitle,
//   metaDescription,
//   igbcLogo,
//   igbcStatus,
//   park_name,
//   stats = [],
// }) => {
//   const formattedImage = formatMediaUrl(spotlightImage);
//   return (
//     <>
//       <div
//         id="pdspotlight"
//         className="relative w-full h-[35vh] md:h-[50vh] lg:h-[80vh] xl:h-[calc(100vh-5%)] overflow-hidden"
//       >
//         {/* Background Image */}
//         <img
//           className="w-full h-full xl:h-[calc(100vh-5%)] object-cover"
//           src={formattedImage}
//           priority
//           unoptimized // ← Must be true
//           alt={title}
//         />
//         <div className="absolute w-full h-[100%] bottom-0 bg-gradient-to-t from-[#00000070] md:from-60% from-40% to-transparent"></div>

//         {/* Content */}
//         <div className="w-full lg:w-auto  absolute left-[max(5%,calc((100vw-1340px)/2))] right-[max(5%,calc((100vw-1340px)/2))] top-auto lg:bottom-[60px] md:bottom-[30px] bottom-[20px]">
//           <BreadCrum park_name={park_name} />

//           <div className="flex flex-col">
//             {/* h1_tag or fallback */}
//             <div className="flex gap-8 items-center">
//               <h1
//                 className="bw-m text-white text-[33px] md:text-[43px] leading-[43px] md:leading-[53px] lg:text-[60px] lg:leading-[70px] xl:text-[76px] xl:leading-[86px] xl:tracking-[-2.56px]"
//                 dangerouslySetInnerHTML={{ __html: park_name }}
//               />
//               <span className="md:w-[249px] md:h-[6px] bg-[#fff] inline-block"></span>
//             </div>

//             {/* meta title or park title fallback */}
//             <h2
//               className="bw-r text-white text-[15px] md:text-[26px] lg:text-[32px] leading-[120%] pr-[50px] lg:mt-[15px]"
//               dangerouslySetInnerHTML={{
//                 __html: h1 || title,
//               }}
//             />

//             {/* IGBC certification info if available */}
//             <div className="hidden lg:block">
//               <Bbar stats={stats} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="block lg:hidden">
//         <Bbar stats={stats} />
//       </div>
//     </>
//   );
// };

// export default HeaderMain;
import React from "react";
import Bbar from "./Bbar";
import BreadCrum from "./BreadCrum";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const HeaderMain = ({
  title,
  h1,
  spotlightImage,
  metaTitle,
  metaDescription,
  igbcLogo,
  igbcStatus,
  park_name,
  stats = [],
}) => {
  const formattedImage = formatMediaUrl(spotlightImage);
  return (
    <>
      <div
        id="pdspotlight"
        className="relative w-full xl:aspect-[16/7.5] overflow-hidden h-[30vh] xl:h-[calc(100vh-80px)] md:h-auto"
      >
        {/* Background Image */}
        <img
          className="w-full h-full  xl:aspect-[16/7.5] object-cover"
          src={formattedImage}
          // src="/parkdetail/park_img.jpg"
          priority
          unoptimized // ← Must be true
          alt={title}
        />
        {/* <div className="absolute w-full h-[100%] bottom-0 bg-gradient-to-t from-[#00000070] md:from-60% from-40% to-transparent"></div> */}

        {/* Content */}
        <div className="w-full lg:w-auto absolute left-[max(5%,calc((100vw-1340px)/2))] lg:left-[max(5%,calc((100vw-1340px)/2))] lg:right-[max(5%,calc((100vw-1340px)/2))] top-auto lg:bottom-[140px] md:bottom-[30px] bottom-[20px]">
          <BreadCrum park_name={park_name} />

          <div className="flex flex-col">
            {/* h1_tag or fallback */}
            <div className="flex gap-8 items-center">
              <h1
                className="bw-m text-white text-[28px] md:text-[43px] leading-[38px] md:leading-[53px] lg:text-[60px] lg:leading-[70px] xl:text-[64px] xl:leading-[74px] xl:tracking-[-3.04px]"
                dangerouslySetInnerHTML={{ __html: park_name }}
              />
              <span className="md:w-[249px] md:h-[6px] bg-[#fff] inline-block"></span>
            </div>

            {/* meta title or park title fallback */}
            <h2
              className="bw-r text-white text-[14px] md:text-[26px] lg:text-[28px] leading-[120%] pr-[50px] lg:mt-[5px] xl:tracking-[-1.28px]"
              dangerouslySetInnerHTML={{
                __html: h1 || title,
              }}
            />

            {/* IGBC certification info if available */}
          </div>
        </div>
        <div className="hidden relative lg:block">
          <Bbar stats={stats} />
        </div>
      </div>
      <div className="block lg:hidden">
        <Bbar stats={stats} />
      </div>
    </>
  );
};

export default HeaderMain;

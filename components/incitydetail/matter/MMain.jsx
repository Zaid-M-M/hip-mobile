// import React from "react";
// import Btn from "../../global/Btn";

// const MMain = ({
//   matters_hd1,
//   matters_hd2,
//   matters_description,
//   matter_icon_box = [],
// }) => {
//   return (
//     <div className="relative overflow-hidden bg-[#F5F5F5]">
//       <img
//         className="purple_vctr hidden md:block absolute top-0 right-0 md:top-[-70px] md:right-[50px] lg:w-[450px] md:w-[350px] w-[300px]"
//         src="/purple_vector.svg"
//         alt=""
//       />
//       <img
//         className="green_vctr hidden md:block absolute top-0 right-0 md:top-[-100px] md:right-[-100px] lg:w-[450px] md:w-[350px] w-[300px]"
//         src="/green_vector.svg"
//         alt=""
//       />

//       <div className="fix lg:py-[70px] xl:py-[100px] py-[45px]">
//         {/* Heading + Button */}
//         <div className="flex md:flex-row flex-col lg:gap-0 gap-10 w-full justify-between md:items-center 360:pb-[15px]">
//           <div className="flex w-full justify-between">
//             <h2 className="bw-r sec_hd">
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: matters_hd1 || "Loading...",
//                 }}
//               />
//               <span
//                 className="bw-m flex items-center gap-[10px] md:gap-[17px]"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     (matters_hd2 || "Loading ....") +
//                     ' <img src="/abstract_pattern.svg" class="abstract_svg" alt=""/>',
//                 }}
//               />
//             </h2>

//             {matters_description && (
//               <p
//                 className="text-[17px] md:text-[18px] mt-4 max-w-[750px] leading-[1.6]"
//                 dangerouslySetInnerHTML={{ __html: matters_description }}
//               />
//             )}
//           </div>
//           {/* <div>
//             <Btn text="WORKFORCE AMENITIES" className="hidden md:flex" />
//           </div> */}
//         </div>

//         {/* Icon boxes */}
//         <div className="flex lg:flex-nowrap flex-wrap w-full md:mt-[20px] mt-0 gap-[13px] md:gap-[8px] ">
//           {matter_icon_box.map((ib, index) => (
//             <div
//               key={index}
//               className="flex bw-r text-[20px] flex-col xl:w-1/3.4 w-[46%] md:w-[46%] items-start md:gap-3 gap-0 border md:border-l md:border-y-0 md:border-r-0 border-[#94969C] md:py-6 md:px-5 p-2.5 360:w-auto"
//             >
//               {ib.matters_icon && (
//                 <img
//                   src={ib.matters_icon}
//                   alt={ib.heading || ""}
//                   className="w-[60px] md:w-20 h-20 shrink-0"
//                 />
//               )}
//               {ib.matters_title && (
//                 <h1
//                   className="text-[25px] md:text-[30px] bw-m"
//                   dangerouslySetInnerHTML={{ __html: ib.matters_title }}
//                 />
//               )}
//               {ib.matters_description && (
//                 <p
//                   className="text-[17px] md:text-[17px] leading-[1.5]"
//                   dangerouslySetInnerHTML={{ __html: ib.matters_description }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* <Btn text="WORKFORCE AMENITIES" className="mt-[30px] block md:hidden" /> */}
//       </div>
//     </div>
//   );
// };

// export default MMain;
import React from "react";
import Btn from "../../global/Btn";

const MMain = ({
  matters_hd1,
  matters_hd2,
  matters_description,
  matter_icon_box = [],
}) => {
  return (
    <div className="relative overflow-hidden ">
      <div className="fix lg:py-[70px] xl:py-[100px] py-[45px]">
        {/* Heading + Description */}
        <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-6 md:gap-12 360:pb-6">
          <div className="flex-shrink-0">
            <h2 className="bw-r sec_hd flex flex-col">
              <span
                dangerouslySetInnerHTML={{
                  __html: matters_hd1 || "Loading...",
                }}
              />
              <span
                className="bw-m flex items-center gap-[10px] md:gap-[17px]"
                dangerouslySetInnerHTML={{
                  __html:
                    (matters_hd2 || "Loading ....") +
                    ' <img src="/abstract_pattern.webp" class="abstract_svg" alt=""/>',
                }}
              />
            </h2>
          </div>

          {matters_description && (
            <div className="flex h-fit gap-2 xl:gap-11">
              <div className="w-[100px] md:w-auto">
                <img
                  src="/indetail/lq.png"
                  alt=""
                  className="w-[100px] md:w-auto"
                />
              </div>
              <p
                className="bigmainp "
                dangerouslySetInnerHTML={{ __html: matters_description }}
              />
              <div className="min-h-full xl:mt-20 flex items-end w-[100px] md:w-auto">
                <img
                  src="/indetail/rq.png"
                  alt=""
                  className="w-[100px] md:w-auto"
                />
              </div>
            </div>
          )}
        </div>

        {/* Icon boxes */}
        <div className="flex flex-wrap lg:flex-nowrap w-full md:mt-[20px] mt-0">
          {matter_icon_box.map((ib, index) => (
            <div
              key={index}
              className="flex flex-col items-start h-auto md:h-[330px] bw-r text-[20px] xl:w-1/3.4 w-[46%] md:w-[46%] gap-3 border md:border-l md:border-y-0 md:border-r-0 border-[#94969C] md:py-6 md:px-5 p-2.5 pb-[20px] 360:w-auto mb-[20px] lg:mb-auto"
            >
              {/* Icon */}
              {ib.matters_icon && (
                <img
                  src={ib.matters_icon}
                  alt={ib.heading || ""}
                  className="w-[60px] md:w-20 h-20 shrink-0"
                />
              )}

              {/* Title (fixed height for alignment) */}
              {ib.matters_title && (
                <h2
                  className="text-[25px] md:text-[25px] bw-m min-h-[40px] lg:min-h-[75px] 1440:min-h-[30px] flex items-start"
                  dangerouslySetInnerHTML={{ __html: ib.matters_title }}
                />
              )}

              {/* Description (fixed height for alignment) */}
              {ib.matters_description && (
                <p
                  className="text-[17px] md:text-[17px] leading-[1.5] min-h-[85px] flex items-start"
                  dangerouslySetInnerHTML={{ __html: ib.matters_description }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MMain;

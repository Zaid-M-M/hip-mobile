// import React from "react";
// import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

// const FeatureCards = ({ amenities = [] }) => {
//   return (
//     <div className="fix flex justify-center">
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] lg:gap-[14px] justify-center lg:justify-start">
//         {amenities.map((item, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 h-[140px] border border-[#D4D4D4] w-full md:h-[180px] 2xl:w-[324px] xl:h-[200px] flex flex-col justify-center gap-2 items-center text-center bg-white p-4 ${
//               index === 4
//                 ? "lg:col-start-2 lg:row-start-2"
//                 : index === 5
//                 ? "lg:col-start-3 lg:row-start-2"
//                 : ""
//             }`}
//           >
//             <img
//               src={formatMediaUrl(item.image)}
//               className="md:w-[60px] md:h-[60px] aspect-square h-[30px] xl:w-[70px] xl:h-[70px] mb-[10px]"
//               alt={item.title}
//             />
//             <h3 className="xl:text-[16px] md:text-[14px] text-[12px] 1440:text-[20px] bw-m 1440:leading-[25px]">
//               {item.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;
import React from "react";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const FeatureCards = ({ amenities = [] }) => {
  return (
    <div className="fix flex justify-center">
      <div className="flex flex-wrap gap-3.5 justify-center">
        {amenities.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 h-[140px] border border-[#D4D4D4] md:h-[180px] 2xl:w-[324px] xl:h-[200px] flex flex-col justify-center gap-2 items-center text-center bg-white p-4 xl:w-[calc(25%-14px)] md:w-[calc(33.3333%-14px)] w-[calc(50%-8px)]`}
          >
            <img
              src={formatMediaUrl(item.image)}
              priority
              unoptimized // ← Must be true
              className="md:w-[60px] md:h-[60px] aspect-square h-[30px] xl:w-[70px] xl:h-[70px] mb-[10px]"
              alt={item.title}
            />
            <h3 className="xl:text-[16px] md:text-[14px] text-[12px] 1440:text-[20px] bw-m 1440:leading-[25px]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

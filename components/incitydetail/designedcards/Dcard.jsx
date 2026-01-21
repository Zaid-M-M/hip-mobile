// import React from "react";

// const Dcard = ({ amenities = [] }) => {
//   return (
//     <div className="fix flex justify-center">
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[14px] lg:gap-[14px] w-full justify-center lg:justify-start">
//         {amenities.map((item, index) => (
//           <div
//             key={index}
//             className={`shrink-0 h-[160px] border border-[#D4D4D4] max-w-full md:h-[180px] xl:h-[220px] flex flex-col justify-center gap-2 items-center text-center bg-white p-4`}
//           >
//             <img
//               src={item.image}
//               className="md:w-[60px] md:h-[60px] aspect-square h-[30px] xl:w-[90px] xl:h-[90px] md:mb-[10px] 360:w-[60px] 360:h-[60px]"
//               alt={item.title}
//             />
//             <div className="flex flex-col gap-0 items-center">
//               <h3 className="xl:w-[180px] xl:text-[16px] md:text-[14px] text-[12px] bw-m xl:leading-[20px]">
//                 {item.title}
//               </h3>
//               <p className="text-[16px] leading-[20px]">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dcard;
import React from "react";

const Dcard = ({ amenities = [] }) => {
  return (
    <div className="flex justify-center fixup">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[14px] w-full justify-center lg:justify-start bg-transparent">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white/50 border border-[#CDCDCD] p-3 xl:p-4 h-full"
          >
            {/* Icon */}
            <div className="flex justify-center mb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] xl:w-[90px] xl:h-[90px] object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-[14px] md:text-[16px] xl:text-[16px] font-medium mb-1">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[12px] md:text-[14px] xl:text-[14px] leading-[18px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dcard;

// import React from "react";

// const park_data = [
//   { title: "2 International Airports", icon: "/network_overview/medical.svg" },
//   { title: "12 Expressways", icon: "/network_overview/urban_forest.svg" },
//   { title: "2 Freight Corridors", icon: "/network_overview/medical.svg" },
//   { title: "23,160 Km Road Network", icon: "/network_overview/medical.svg" },
//   { title: "40 Railway Stations", icon: "/network_overview/medical.svg" },
//   {
//     title: "Largest Metro Rail Network in India",
//     icon: "/network_overview/medical.svg",
//   },
// ];

// const FeatureCards = () => {
//   return (
//     <div className="w-full overflow-x-auto px-[10px] md:px-[30px] py-10 bg-white flex justify-center">
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[24px] justify-center lg:justify-start">
//         {park_data.map((park, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 border border-[#D4D4D4] w-[155px] h-[155px] lg:w-[180px] lg:h-[180px] xl:w-[324px] xl:h-[200px] flex flex-col justify-center items-center text-center bg-white p-4 ${
//               index === 4
//                 ? "lg:col-start-2 lg:row-start-2"
//                 : index === 5
//                 ? "lg:col-start-3 lg:row-start-2"
//                 : ""
//             }`}
//           >
//             <img
//               src={park.icon}
//               className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] mb-[10px]"
//               alt={park.title}
//             />
//             <h3 className="text-[16px] bw-sb xl:text-[20px] bw-m leading-[20px]">
//               {park.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;

import React from "react";

const FeatureCards = ({ amenities = [] }) => {
  return (
    <div className="fix flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] lg:gap-[14px] justify-center lg:justify-start">
        {amenities.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 h-[140px] border border-[#D4D4D4] w-full md:h-[180px] xl:w-[275px] 2xl:w-[324px] xl:h-[200px] flex flex-col justify-center gap-2 items-center text-center bg-white p-4 ${
              index === 4
                ? "lg:col-start-2 lg:row-start-2"
                : index === 5
                ? "lg:col-start-3 lg:row-start-2"
                : ""
            }`}
          >
            <img
              src={item.image}
              className="md:w-[60px] md:h-[60px] aspect-square h-[30px] xl:w-[70px] xl:h-[70px] md:mb-[10px] 360:w-[60px] 360:h-[60px]"
              alt={item.title}
            />
            <h3 className="  xl:w-[180px] xl:text-[20px] md:text-[14px] text-[12px] 1440:text-[20px] bw-m 1440:leading-[25px]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

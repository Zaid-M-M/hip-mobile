// "use client";
// import React from "react";

// const Skeleton = ({ type, count = 3 }) => {
//   if (type === "filters") {
//     return (
//       <div className="flex gap-4 fixup items-center mt-10 h-[82px]">
//         <div className="md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)] h-10 bg-gray-200 animate-pulse"></div>
//       </div>
//     );
//   }

//   if (type === "grid") {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 fixup my-10">
//         {Array.from({ length: count }).map((_, i) => (
//           <div
//             key={i}
//             className="h-[491px] w-full aspect-[9/14] bg-gray-200 animate-pulse"
//           ></div>
//         ))}
//       </div>
//     );
//   }

//   return null;
// };

// export default Skeleton;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React from "react";

// const Skeleton = ({ type, count = 3 }) => {
//   if (type === "filters") {
//     return (
//       <div className="flex gap-4 fixup items-center mt-10 h-[82px]">
//         <div className="md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)] h-10 bg-gray-200 animate-pulse"></div>
//       </div>
//     );
//   }

//   if (type === "grid") {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px] fixup my-10">
//         {Array.from({ length: count }).map((_, i) => (
//           <div
//             key={i}
//             className="relative overflow-hidden bg-white border border-[#c3c3c3] animate-pulse"
//           >
//             {/* Image Section */}
//             <div className="relative w-full h-[200px] xl:h-[250px] bg-gray-200"></div>

//             {/* Content Section */}
//             <div
//               className="relative px-[16px] py-[20px] flex flex-col"
//               style={{ height: "240px" }}
//             >
//               {/* Date Section */}
//               <div className="flex items-center gap-[5px] my-[2px] h-[24px]">
//                 <div className="w-[24px] h-[24px] bg-gray-200 rounded"></div>
//                 <div className="w-[120px] h-[16px] bg-gray-200 rounded"></div>
//               </div>

//               <div className="flex-1" />

//               {/* Title Section */}
//               <div className="absolute left-[16px] right-[16px] bottom-[22px] lg:!block !hidden">
//                 <div className="w-full h-[24px] bg-gray-200 rounded mb-[8px]"></div>
//                 <div className="w-[80%] h-[24px] bg-gray-200 rounded"></div>
//               </div>
//               <div className="absolute left-[16px] right-[16px] bottom-auto top-[70px] lg:!hidden !block">
//                 <div className="w-full h-[24px] bg-gray-200 rounded mb-[8px]"></div>
//                 <div className="w-[80%] h-[24px] bg-gray-200 rounded"></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return null;
// };

// export default Skeleton;
"use client";
import React from "react";

const Skeleton = ({ type, count = 3 }) => {
  // Inline CSS for the shine animation
  const shineStyles = `
    @keyframes shine {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    .animate-shine {
      background: linear-gradient(
        90deg,
        rgba(229, 231, 235, 1) 0%,
        rgba(243, 244, 246, 1) 40%,
        rgba(229, 231, 235, 1) 80%
      );
      background-size: 200% 100%;
      animation: shine 1.5s linear infinite;
    }
  `;

  if (type === "filters") {
    return (
      <>
        <style>{shineStyles}</style>
        <div className="flex gap-4 fixup items-center mt-10 h-[82px]">
          <div className="md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)] h-10 bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 animate-shine"></div>
          </div>
        </div>
      </>
    );
  }

  if (type === "grid") {
    return (
      <>
        <style>{shineStyles}</style>
        <div className="xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px] hidden fixup my-10">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-white border border-[#c3c3c3]"
            >
              {/* Image Section */}
              <div className="relative w-full h-[200px] xl:h-[250px] bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 animate-shine"></div>
              </div>

              {/* Content Section */}
              <div
                className="relative px-[16px] py-[20px] flex flex-col"
                style={{ height: "240px" }}
              >
                {/* Date Section */}
                <div className="flex items-center gap-[5px] my-[2px] h-[24px]">
                  <div className="w-[24px] h-[24px] bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                  <div className="w-[120px] h-[16px] bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                </div>

                <div className="flex-1" />

                {/* Title Section */}
                <div className="absolute left-[16px] right-[16px] bottom-[22px] lg:!block !hidden">
                  <div className="w-full h-[24px] bg-gray-200 rounded mb-[8px] relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                  <div className="w-[80%] h-[24px] bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-auto top-[70px] lg:!hidden !block">
                  <div className="w-full h-[24px] bg-gray-200 rounded mb-[8px] relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                  <div className="w-[80%] h-[24px] bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="xl:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px] grid my-10">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-white border border-[#c3c3c3]"
            >
              {/* Image Section */}
              <div className="relative w-full h-[200px] xl:h-[250px] bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 animate-shine"></div>
              </div>

              {/* Content Section */}
              <div
                className="relative px-[16px] py-[20px] flex flex-col"
                style={{ height: "240px" }}
              >
                {/* Date Section */}
                <div className="flex items-center gap-[5px] my-[2px] h-[24px]">
                  <div className="w-[24px] h-[24px] bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                  <div className="w-[120px] h-[16px] bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                </div>

                <div className="flex-1" />

                {/* Title Section */}
                <div className="absolute left-[16px] right-[16px] bottom-[22px] lg:!block !hidden">
                  <div className="w-full h-[24px] bg-gray-200 rounded mb-[8px] relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                  <div className="w-[80%] h-[24px] bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                </div>
                <div className="absolute left-[16px] right-[16px] bottom-auto top-[70px] lg:!hidden !block">
                  <div className="w-full h-[24px] bg-gray-200 rounded mb-[8px] relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                  <div className="w-[80%] h-[24px] bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 animate-shine"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return null;
};

export default Skeleton;

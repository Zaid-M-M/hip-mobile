import React from "react";

// const Box = ({ children, className = "" }) => {
//   return (
//     <div
//       className={`relative ${className} p-4 pr-2`}
//       style={{
//         borderWidth: "1.2px", // border thickness
//         borderStyle: "solid",
//         borderImageSource:
//           "repeating-linear-gradient(45deg, #7D7D7D 0 10px, transparent 10px 20px)", // gradient dashed with #7D7D7D
//         borderImageSlice: 1.5,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const MobileStructure = () => {
//   const boxData1 = [
//     "Providing the strategic Vision and Direction for carbon neutrality",
//     "Providing final approval for projects",
//   ];
//   return (
//     <div className="fixup py-[80px]">
//       {" "}
//       <div className="grid grid-cols-3 ">
//         <div className="flex flex-col">
//           <div className="border border-green-300 w-fit px-2 py-1">
//             Director Level
//           </div>
//           <div className="">
//             <img
//               src="/governance/linearr.svg"
//               alt=""
//               className="w-auto rotate-90 h-auto"
//             />
//           </div>
//           <Box className=" flex-1">
//             <div className="flex flex-col gap-[12px] 1280:gap-[14px]">
//               {boxData1.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-[8px] 1280:gap-[10px] 1366:gap-[20px]"
//                 >
//                   <img
//                     src="/governance/arr.svg"
//                     alt=""
//                     className="object-contain xl:mt-2 1366:mt-1.5 w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]  1366:w-[20px] 1366:h-[20px]"
//                   />
//                   <p className="text-[16px] text-[#000] leading-[26px]">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </Box>
//           <div className="">
//             <img
//               src="/governance/linearr.svg"
//               alt=""
//               className="w-auto rotate-90 h-auto"
//             />
//           </div>
//           <div>
//             <div className="mb-2.5 1440:mb-6">
//               <h2 className="text-[#2BB04C] uppercase bw-m text-[16px] leading-[150%]">
//                 APEX COMMITTEE
//               </h2>
//               <p className="text-gray-800 bw-r text-[14px] leading-[24px] 1366:text-[16px] 1366:leading-[26px]">
//                 The Apex Committee will meet quarterly or bi-annually to set
//                 strategic direction for carbon neutrality and make final
//                 decisions on emission reduction initiatives/projects.{" "}
//               </p>{" "}
//             </div>
//           </div>
//         </div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default MobileStructure;

const Box = ({ children, className = "" }) => {
  return (
    <div
      className={`relative ${className} p-4 pr-2`}
      style={{
        borderWidth: "1.4px",
        borderStyle: "solid",
        borderImageSource:
          "repeating-linear-gradient(45deg, #7D7D7D 0 10px, transparent 10px 20px)",
        borderImageSlice: 0.6,
      }}
    >
      {children}
    </div>
  );
};

const MobileStructure = () => {
  const boxData1 = [
    "Providing the strategic Vision and Direction for carbon neutrality",
    "Providing final approval for projects",
  ];
  const boxData2 = [
    "Monitoring of GHG Inventory and emissions projections",
    "Provide recommendation on selection of decarbonisation lever",
    "Assess the budget for decarbonisation lever",
    "Capacity building sessions for team",
  ];

  const boxData3 = [
    "Capacity building within the team on data requirements",
    "Provide on the ground visibility on GHG Emission monitoring",
    "Identity implementable for emission reduction",
  ];

  return (
    <div className="bg-white block 1280:!hidden">
      <div className="fixup py-[45px] xl:py-[100px]">
        <div className=" pb-[40px] ">
          <h2 className="bw-m text-[29px] 768:text-[35px] 768:leading-[40px] 1024:text-[45px] w-fit tracking-[-0.04em] leading-[31px] 1024:leading-[35px] pb-[15px] 1366:pb-[30px]">
            Governance Structure
          </h2>

          <p className="bw-r text-[16px] leading-[26px] 768:text-[18px] 768:leading-[26px] 1024:text-[18px] 1024:leading-[28px] text-[#000] ">
            {" "}
            Monitoring Framework & ESG Governance Structure
          </p>
        </div>
        <div className="grid gap-[50px] 1024:gap-[30px] grid-cols-1 1024:grid-cols-3">
          <div className="flex flex-col items-center border-b 1024:border-none border-gray-700 ">
            {/* Director Level */}
            <div className="border text-[16px] leading-[22px] text-[#000]  border-green-300 w-fit px-3 py-2">
              Director Level
            </div>

            {/* Arrow Down */}
            <div className="my-4 flex justify-center">
              <img
                src="/governance/linearr.svg"
                alt="Down Arrow"
                className="rotate-90  h-[12px] w-auto"
              />
            </div>

            {/* Box with items */}
            <Box className="">
              <div className="flex flex-col gap-[12px] 1280:gap-[14px]">
                {boxData1.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-[8px] 1280:gap-[10px] 1366:gap-[20px]"
                  >
                    <img
                      src="/governance/arr.svg"
                      alt=""
                      className="object-contain mt-2 1366:mt-1.5 w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] 1366:w-[20px] 1366:h-[20px]"
                    />
                    <p className="text-[16px] text-[#000] leading-[26px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Box>

            {/* Arrow Down */}
            <div className="my-4 flex justify-center">
              <img
                src="/governance/linearr.svg"
                alt="Down Arrow"
                className="rotate-90 h-[12px] w-auto"
              />
            </div>

            {/* Apex Committee */}
            <div>
              <div className="pb-[50px]">
                <h2 className="text-[#2BB04C] text-center uppercase bw-m text-[16px] leading-[27px]">
                  APEX COMMITTEE
                </h2>
                <p className="text-[#000] text-center bw-r text-[14px] leading-[24px] 1366:text-[16px] 1366:leading-[26px]">
                  The Apex Committee will meet quarterly or bi-annually to set
                  strategic direction for carbon neutrality and make final
                  decisions on emission reduction initiatives/projects.
                </p>
              </div>
            </div>
          </div>

          {/* Empty grid columns */}
          <div className="flex flex-col items-center border-b 1024:border-none border-gray-700 ">
            {" "}
            {/* Director Level */}
            <div className="border text-[16px] leading-[22px] text-[#000]  border-green-300 w-fit px-3 py-2">
              Core Working Team
            </div>
            {/* Arrow Down */}
            <div className="my-4 flex justify-center">
              <img
                src="/governance/linearr.svg"
                alt="Down Arrow"
                className="rotate-90  h-[12px] w-auto"
              />
            </div>
            {/* Box with items */}
            <Box className="">
              <div className="flex flex-col gap-[12px] 1280:gap-[14px]">
                {boxData2.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-[8px] 1280:gap-[10px] 1366:gap-[20px]"
                  >
                    <img
                      src="/governance/arr.svg"
                      alt=""
                      className="object-contain mt-2 1366:mt-1.5 w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] 1366:w-[20px] 1366:h-[20px]"
                    />
                    <p className="text-[16px] text-[#000] leading-[24px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Box>
            {/* Arrow Down */}
            <div className="my-4 flex justify-center">
              <img
                src="/governance/linearr.svg"
                alt="Down Arrow"
                className="rotate-90 h-[12px] w-auto"
              />
            </div>
            {/* Apex Committee */}
            <div>
              <div className="sm:pb-0 pb-[50px]">
                <h2 className="text-[#2BB04C] text-center uppercase bw-m text-[16px] leading-[27px]">
                  Core Steering Committee
                </h2>
                <p className="text-[#000] text-center bw-r text-[14px] leading-[24px] 1366:text-[16px] 1366:leading-[26px]">
                  The Core Steering Committee will meet weekly during the first
                  6 months and monthly thereafter. They will handle key tasks
                  like monitoring the GHG inventory, prioritizing the
                  decarbonization levers, and conducting capacity-building
                  sessions to ensure smooth project execution.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* Director Level */}
            <div className="border text-[#000]  border-green-300 w-fit px-2 py-1">
              Site Team
            </div>

            {/* Arrow Down */}
            <div className="my-4 flex justify-center">
              <img
                src="/governance/linearr.svg"
                alt="Down Arrow"
                className="rotate-90  h-[12px] w-auto"
              />
            </div>

            {/* Box with items */}
            <Box className="">
              <div className="flex flex-col gap-[12px] 1280:gap-[14px]">
                {boxData3.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-[8px] 1280:gap-[10px] 1366:gap-[20px]"
                  >
                    <img
                      src="/governance/arr.svg"
                      alt=""
                      className="object-contain mt-2 1366:mt-1.5 w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] 1366:w-[20px] 1366:h-[20px]"
                    />
                    <p className="text-[16px] text-[#000] leading-[26px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Box>

            {/* Arrow Down */}
            <div className="my-4 flex justify-center">
              <img
                src="/governance/linearr.svg"
                alt="Down Arrow"
                className="rotate-90 h-[12px] w-auto"
              />
            </div>

            {/* Apex Committee */}
            <div>
              <div className="">
                <h2 className="text-[#2BB04C] text-center uppercase bw-m text-[16px] leading-[27px]">
                  Asset wise carbon champion
                </h2>
                <p className="text-[#000] text-center bw-r text-[14px] leading-[24px] 1366:text-[16px] 1366:leading-[26px]">
                  Providing the strategic Vision and Direction for carbon
                  neutrality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStructure;

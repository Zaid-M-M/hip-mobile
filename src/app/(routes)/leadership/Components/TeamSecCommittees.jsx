// "use client";

// import React, { useState } from "react";
// import { teamDataCommittees } from "../data/teamDataCommittees";
// import { motion, AnimatePresence } from "framer-motion";

// const TeamSecCommittees = () => {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (id) => {
//     setOpenAccordion(openAccordion === id ? null : id);
//   };

//   return (
//     <div className="w-full">
//       {teamDataCommittees.map((committee) => (
//         <div key={committee.id} className="border-b border-[#828282]">
//           <button
//             onClick={() => toggleAccordion(committee.id)}
//             className="w-full flex justify-between items-center py-[10px] md:py-[30px] text-left cursor-pointer"
//           >
//             <h3 className="text-[18px] md:text-[24px] xl:text-[28px] xl:leading-[30px] bw-m text-[#424242]">
//               {committee.name}
//             </h3>
//             <motion.svg
//               animate={{ rotate: openAccordion === committee.id ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M6 9L12 15L18 9"
//                 stroke="#101828"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </motion.svg>
//           </button>

//           <AnimatePresence>
//             {openAccordion === committee.id && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="pb-[30px]">
//                   <div className="flex flex-col gap-[15px]">
//                     {/* Header Row */}
//                     <div className="grid grid-cols-2 gap-[20px] pb-[10px] border-b border-[#828282]">
//                       <div className="text-[16px] md:text-[18px] bw-sb text-black">
//                         Name
//                       </div>
//                       <div className="text-[16px] md:text-[18px] bw-sb text-black">
//                         Designation
//                       </div>
//                     </div>

//                     {/* Member Rows */}
//                     {committee.members.map((member, index) => (
//                       <div
//                         key={index}
//                         className="grid grid-cols-2 gap-[20px] py-[10px]"
//                       >
//                         <div className="text-[15px] md:text-[17px] bw-r text-[#433F45]">
//                           {member.name}
//                         </div>
//                         <div className="text-[15px] md:text-[17px] bw-r text-[#433F45]">
//                           {member.role}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeamSecCommittees;
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
//
//
//
//
//
//
//
//
// "use client";

// import React, { useState } from "react";
// import { teamDataCommittees } from "../data/teamDataCommittees";
// import { motion, AnimatePresence } from "framer-motion";

// const TeamSecCommittees = () => {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (id) => {
//     setOpenAccordion(openAccordion === id ? null : id);
//   };

//   return (
//     <div className="w-full">
//       {teamDataCommittees.map((committee) => (
//         <div key={committee.id} className="border-b border-[#828282]">
//           <button
//             onClick={() => toggleAccordion(committee.id)}
//             className="w-full flex justify-between items-center py-[10px] md:py-[30px] text-left cursor-pointer"
//           >
//             <h3 className="text-[18px] md:text-[24px] xl:text-[28px] xl:leading-[30px] bw-m text-[#424242]">
//               {committee.name}
//             </h3>
//             <motion.svg
//               animate={{ rotate: openAccordion === committee.id ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M6 9L12 15L18 9"
//                 stroke="#101828"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </motion.svg>
//           </button>

//           <AnimatePresence>
//             {openAccordion === committee.id && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="pb-[30px]">
//                   <div className="border border-[#828282] overflow-hidden">
//                     {/* Header Row */}
//                     <div className="grid grid-cols-2 bg-[#000] border-b border-[#828282]">
//                       <div className="text-[16px] md:text-[18px] bw-sb text-white xl:px-[16px] xl:py-[12px] px-2 py-2 border-r border-[#828282]">
//                         Name
//                       </div>
//                       <div className="text-[16px] md:text-[18px] bw-sb text-white xl:px-[16px] xl:py-[12px] px-2 py-2">
//                         Designation
//                       </div>
//                     </div>

//                     {/* Member Rows */}
//                     {committee.members.map((member, index) => (
//                       <div
//                         key={index}
//                         className="grid grid-cols-2 border-b last:border-b-0 border-[#828282]"
//                       >
//                         <div className="text-[15px] md:text-[17px] bw-r text-[#433F45] xl:px-[16px] xl:py-[12px] px-2 py-2 border-r border-[#828282]">
//                           {member.name}
//                         </div>
//                         <div className="text-[15px] md:text-[17px] bw-r text-[#433F45] xl:px-[16px] xl:py-[12px] px-2 py-2">
//                           {member.role}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeamSecCommittees;
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

// import React, { useState } from "react";
// import { teamDataCommittees } from "../data/teamDataCommittees";
// import { motion, AnimatePresence } from "framer-motion";

// const TeamSecCommittees = () => {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (id) => {
//     setOpenAccordion(openAccordion === id ? null : id);
//   };

//   return (
//     <div className="w-full">
//       {teamDataCommittees.map((committee) => (
//         <div key={committee.id} className="border-b border-[#828282]">
//           <button
//             onClick={() => toggleAccordion(committee.id)}
//             className="w-full flex justify-between items-center py-[10px] md:py-[30px] text-left cursor-pointer"
//           >
//             <h3 className="text-[18px] md:text-[24px] xl:text-[28px] xl:leading-[30px] bw-m text-[#424242]">
//               {committee.name}
//             </h3>
//             <motion.svg
//               animate={{ rotate: openAccordion === committee.id ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M6 9L12 15L18 9"
//                 stroke="#101828"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </motion.svg>
//           </button>

//           <AnimatePresence>
//             {openAccordion === committee.id && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="pb-[30px]">
//                   <div className="border border-[#828282] overflow-hidden">
//                     {/* Header Row */}
//                     <div className="grid grid-cols-3 bg-[#000] border-b border-[#828282]">
//                       <div className="text-[16px] md:text-[18px] bw-sb text-white text-center xl:px-[16px] xl:py-[12px] px-2 py-2 border-r border-[#828282]">
//                         Name
//                       </div>
//                       <div className="text-[16px] md:text-[18px] bw-sb text-white text-center xl:px-[16px] xl:py-[12px] px-2 py-2 border-r border-[#828282]">
//                         Designation
//                       </div>
//                       <div className="text-[16px] md:text-[18px] bw-sb text-white text-center xl:px-[16px] xl:py-[12px] px-2 py-2">
//                         Composition of Committee
//                       </div>
//                     </div>

//                     {/* Member Rows */}
//                     {committee.members.map((member, index) => (
//                       <div
//                         key={index}
//                         className="grid grid-cols-3 border-b last:border-b-0 border-[#828282]"
//                       >
//                         <div className="text-[15px] md:text-[17px] bw-r text-[#433F45] text-center xl:px-[16px] xl:py-[12px] px-2 py-2 border-r border-[#828282]">
//                           {member.name}
//                         </div>
//                         <div className="text-[15px] md:text-[17px] bw-r text-[#433F45] text-center xl:px-[16px] xl:py-[12px] px-2 py-2 border-r border-[#828282]">
//                           {member.designation}
//                         </div>
//                         <div className="text-[15px] md:text-[17px] bw-r text-[#433F45] text-center xl:px-[16px] xl:py-[12px] px-2 py-2">
//                           {member.composition}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeamSecCommittees;
"use client";

import React, { useState } from "react";
import { teamDataCommittees } from "../data/teamDataCommittees";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const TeamSecCommittees = ({
  cellPy = "xl:py-[32px] px-2 py-2",
  cellWidth = "xl:grid-cols-[160px_1fr_160px] grid-cols-[0.5fr_1fr_0.5fr]",
}) => {
  const [openAccordion, setOpenAccordion] = useState(teamDataCommittees[0]?.id);

  const toggleAccordion = (id) => {
    if (openAccordion === id) return;
    setOpenAccordion(id);
  };

  return (
    <div className="w-full  md:mt-[-30px] -mt-5">
      {teamDataCommittees.map((committee) => (
        <div
          key={committee.id}
          className="border-b border-[#BABABA] last:border-b-0!"
        >
          <button
            onClick={() => toggleAccordion(committee.id)}
            className="w-full flex justify-between items-center py-[10px] md:py-[30px] text-left cursor-pointer"
          >
            <h3 className="text-[18px] md:text-[24px] xl:text-[28px] xl:leading-[30px] bw-m text-[#424242]">
              {committee.name}
            </h3>

            {openAccordion === committee.id ? (
              <Minus size={24} strokeWidth={2} color="#101828" />
            ) : (
              <Plus size={24} strokeWidth={2} color="#101828" />
            )}
          </button>

          <AnimatePresence>
            <motion.div
              initial={false}
              animate={{
                height: openAccordion === committee.id ? "auto" : 0,
                opacity: openAccordion === committee.id ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pb-[30px]">
                {committee.text && (
                  <p className="text-[15px] md:text-[17px] md:leading-[23px] 1440:text-[22px] 1440:leading-[30px] 1366:text-[23px] 1280:text-[20px] 1280:leading-[25px] leading-[20px] tracking-[0.04px] bw-m text-[#424242] mb-[10px]">
                    {committee.text}
                  </p>
                )}
                <div className="border border-[#828282] overflow-hidden">
                  <div
                    className={`grid ${cellWidth}  bg-[#2E373A] border-b border-[#828282]`}
                  >
                    <div
                      className={`text-[11px] items-center flex justify-center md:text-[18px] text-white text-center xl:px-[16px] ${cellPy} border-r border-[#828282]`}
                    >
                      Name
                    </div>
                    <div
                      className={`text-[11px] items-center flex justify-center md:text-[18px] text-white text-center xl:px-[16px] ${cellPy} border-r border-[#828282]`}
                    >
                      Designation
                    </div>
                    <div
                      className={`text-[11px] items-center flex justify-center md:text-[18px] text-white text-center xl:px-[16px] ${cellPy}`}
                    >
                      Composition of Committee
                    </div>
                  </div>

                  {committee.members.map((member, index) => (
                    <div
                      key={index}
                      className={`grid ${cellWidth}  border-b last:border-b-0 border-[#828282]`}
                    >
                      <div
                        className={`text-[11px] flex items-center justify-center md:text-[17px] bw-r text-[#000] text-center xl:px-[16px] ${cellPy} border-r border-[#828282] bg-[#fff]`}
                      >
                        {member.name}
                      </div>
                      <div
                        className={`text-[11px] flex items-center justify-center md:text-[17px] bw-r text-[#000] text-center xl:px-[16px] ${cellPy} border-r border-[#828282] bg-[#fff]`}
                      >
                        {member.designation}
                      </div>
                      <div
                        className={`text-[11px] flex items-center justify-center md:text-[17px] bw-r text-[#000] text-center xl:px-[16px] ${cellPy} bg-[#fff]`}
                      >
                        {member.composition}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default TeamSecCommittees;

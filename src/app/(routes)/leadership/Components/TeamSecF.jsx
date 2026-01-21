// "use client";

// import React, { useState } from "react";
// import { teamData } from "../data/teamData";
// import TeamCardsF from "./TeamCardsF";
// import TeamPopF from "./TeamPopF";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";

// const TeamSecF = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (member) => {
//     setSelectedMember(member);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     // delay clearing member to allow exit animation to complete
//     setTimeout(() => setSelectedMember(null), 300); // match duration
//   };
//   // Define animation variants for the container and items
//   const containerVariants = {
//     hidden: { opacity: 1 }, // Can be initially hidden if you prefer: opacity: 0
//     visible: {
//       opacity: 1,
//       transition: {
//         // This tells the container to stagger the animation of its children
//         staggerChildren: 0.2, // The delay between each child animating
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 }, // Start transparent and slightly down
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5, // Control the speed of each individual card's animation
//       },
//     },
//   };
//   return (
//     <div className=" overflow-visible relative">

//       <img className="purple_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[400px] top-[0px] md:left-[0px]  md:right-[auto] left-[0px] md:top-[0px] lg:top-[-120px] xl:left-[-50px] 1920:left-[0px]" src='/purple_vector.svg' />
//       <img className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[400px] top-[0px]  md:left-[0px] md:right-[auto] left-[-80px] md:top-[0px] lg:top-[-120px] xl:left-[200px] 1920:left-[200px]" src='/green_vector.svg' />

//       <div className="fix pt-[0px] py-[45px] xl:py-[70px]">
//         {/* Header */}
//         <div className="flex justify-between items-center flex-col lg:flex-row md:mb-[55px] mb-[25px] md:gap-5 gap-[0px]">
//           <div className="flex flex-col lg:w-auto w-full items-start">

//             <div className="flex gap-[10px] md:gap-[17px] xl:mt-0 mt-5 items-center justify-start text-[#101828] font-[Barlow] w-full md:w-fit xl:h-[96px]">
//               <div className="">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "fit-content" }} // Animate to 100% of the wrapper's width
//                   transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//                   viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
//                   className="md:w-[auto] text-[35px] md:text-[45px] xl:text-[66px] overflow-hidden whitespace-nowrap bw-r tracking-[-2.64px] xl:leading-[76px] leading-[45px] md:leading-[55px]"
//                 >
//                   Team of
//                 </motion.div>
//               </div>

//               <div className="xl:w-[auto] xl:h-[58px] md:w-[200px] md:h-[48px] w-[150px] overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//                   viewport={{ amount: 0.25, once: true }}
//                 >
//                   <img
//                     src="/abstract_pattern.svg"
//                     className="abstract_svg"
//                     alt=""
//                   />
//                 </motion.div>
//               </div>
//             </div>
//             <motion.h2
//               initial={{ width: 0 }}
//               whileInView={{ width: "fit-content" }} // Animate to 100% of the wrapper's width
//               transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
//               className="text-[#101828] overflow-hidden whitespace-nowrap w-full bw-m text-[35px] md:text-[45px] xl:text-[66px] md:tracking-[-2.64px] xl:leading-[76px] leading-[45px] md:leading-[55px] xl:mt-[-15px]"
//             >
//               Industry Veterans
//             </motion.h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }} // Animate to 100% of the wrapper's width
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
//             viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
//             className="flex items-end md:w-fit min-h-full"
//           >
//             <p className="text-black bw-r md:text-[22px] leading-[150%] lg:max-w-xl sm:mt-2 md:mt-5 mt-[15px]">
//               We see things differently, proactively find opportunities with an
//               agile team, and create exceptional value for our customers,
//               partners, and employees.
//             </p>
//           </motion.div>
//         </div>

//         <div className="relative w-full flex justify-center">
//           <div className="hidden xl:flex justify-center w-full">
//             <motion.div
//               className="
//       grid
//       grid-cols-2
//       sm:grid-cols-2
//       md:grid-cols-3
//       xl:grid-cols-4
//       gap-x-[20px]
//       md:gap-x-[35px]
//       lg:gap-x-[55px]
//       2xl:gap-x-[70px]
//       gap-y-[30px]
//       md:gap-y-[55px]
//       xl:[&>*:nth-last-child(2)]:col-start-2
//     "
//               // --- Framer Motion Props for the Container ---
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.1 }}
//             >
//               {teamData.map((member) => (
//                 // --- Wrap the card in a motion component ---
//                 <motion.div key={member.id} variants={itemVariants}>
//                   <TeamCardsF
//                     // Note: key is now on the motion.div wrapper
//                     name={member.name}
//                     role={member.role}
//                     image={member.image}
//                     onClick={() => openModal(member)}
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//           <div className=" flex xl:hidden justify-center w-full">
//             <motion.div
//               className="
//       grid
//       grid-cols-2
//       sm:grid-cols-2
//       md:grid-cols-3
//       xl:grid-cols-4
//       gap-x-[20px]
//       md:gap-x-[35px]
//       lg:gap-x-[55px]
//       2xl:gap-x-[70px]
//       gap-y-[30px]
//       md:gap-y-[55px]
//       lg:[&>*:last-child]:col-start-2
//       md:[&>*:last-child]:col-start-2
//       sm:[&>*:last-child]:col-start-1
//     "
//               // --- Framer Motion Props for the Container ---
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.1 }}
//             >
//               {teamData.map((member) => (
//                 // --- Wrap the card in a motion component ---
//                 <motion.div key={member.id} variants={itemVariants}>
//                   <TeamCardsF
//                     name={member.name}
//                     role={member.role}
//                     image={member.image}
//                     onClick={() => openModal(member)}
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//           {/* Gradient Blobs */}
//           {/* <div className="absolute bottom-0 right-0 z-0 pointer-events-none flex gap-[25px]">
//           <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[295.8px] xl:h-[469.8px] bg-[#8F53A1] opacity-15 blur-[69px]" />
//           <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[219px] xl:h-[226.8px] bg-[#F47920] opacity-15 blur-[69px]" />
//         </div> */}

//         </div>
//         {/* Modal */}
//         <AnimatePresence mode="wait">
//           {isModalOpen && selectedMember && (
//             <TeamPopF
//               key={selectedMember.name}
//               isOpen={isModalOpen}
//               onClose={closeModal}
//               member={selectedMember}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default TeamSecF;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import TeamSecDirectors from "./TeamSecDirectors";
import TeamSecCommittees from "./TeamSecCommittees";
import TeamSecLeadership from "./TeamSecLeadership";

const TeamSecF = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Board of Directors", "Board Committees", "Leadership Team"];

  return (
    <div className="overflow-visible relative">
      <img
        className="purple_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[400px] top-[0px] md:left-[0px] md:right-[auto] left-[0px] md:top-[0px] lg:top-[-120px] xl:left-[-50px] 1920:left-[0px]"
        src="/purple_vector.svg"
      />
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[400px] top-[0px] md:left-[0px] md:right-[auto] left-[-80px] md:top-[0px] lg:top-[-120px] xl:left-[200px] 1920:left-[200px]"
        src="/green_vector.svg"
      />

      <div className="fix pt-[0px] py-[20px] xl:py-[70px]">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mb-[55px] mb-[25px] md:gap-5 gap-[0px]">
          <div className="flex flex-col lg:w-auto w-full items-start">
            <div className="flex gap-[10px] md:gap-[17px] xl:mt-0 mt-5 items-center justify-start text-[#101828] font-[Barlow] w-full md:w-fit xl:h-[96px]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.25, once: true }}
                className="md:w-[auto] text-[35px] md:text-[45px] xl:text-[66px] overflow-hidden whitespace-nowrap bw-r tracking-[-2.64px] xl:leading-[76px] leading-[45px] md:leading-[55px]"
              >
                Leadership &
              </motion.div>
            </div>
            <div className="flex gap-[10px] md:gap-[17px]  items-center">
              <motion.h2
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.25, once: true }}
                className="text-[#101828] overflow-hidden whitespace-nowrap w-full bw-m text-[35px] md:text-[45px] xl:text-[66px] md:tracking-[-2.64px] xl:leading-[76px] leading-[45px] md:leading-[55px] xl:mt-[-15px]"
              >
                Governance
              </motion.h2>
              <div className="xl:w-[auto] xl:h-[58px] md:w-[200px] md:h-[48px] w-[150px] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
                  viewport={{ amount: 0.25, once: true }}
                >
                  <img
                    src="/abstract_pattern.svg"
                    className="abstract_svg"
                    alt=""
                  />
                </motion.div>
              </div>
            </div>
          </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
            viewport={{ amount: 0.25, once: true }}
            className="flex items-end md:w-fit min-h-full"
          >
            <p className="text-black bw-r md:text-[22px] leading-[150%] lg:max-w-xl sm:mt-2 md:mt-5 mt-[15px]">
              We see things differently, proactively find opportunities with an
              agile team, and create exceptional value for our customers,
              partners, and employees.
            </p>
          </motion.div> */}
        </div>

        {/* MATCHED TABS STYLING */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:h-[60px] xl:h-[100px] max-w-[1000px] mx-auto bg-white grid grid-cols-3 border border-[#CDCDCD] rounded-2xl lg:rounded-[28px] overflow-hidden md:mb-[55px] mb-[25px]"
        >
          {tabs.map((tab, i) => {
            const isActive = i === activeTab;

            return (
              <motion.button
                key={i}
                onClick={() => setActiveTab(i)}
                initial={false}
                animate={{
                  backgroundImage: isActive
                    ? "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)"
                    : "linear-gradient(to right, #ffffff, #ffffff)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={clsx(
                  "relative flex items-left last:border-r-0 justify-between md:px-[12px] xl:px-[20px] xl:py-[10px] border-r border-[#CDCDCD] overflow-hidden cursor-pointer focus:outline-none",
                )}
              >
                {/* <div className="flex items-center justify-left w-full gap-2">
                  <motion.h2
                    animate={{ color: isActive ? "#ffffff" : "#000000" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-[12px] md:text-[16px] xl:text-[24px] bw-r xl:leading-[32px] leading-[24px]"
                  >
                    {tab}
                  </motion.h2>
                </div> */}
                <div className="flex items-center xl:justify-start xl:py-0 py-2 justify-center w-full gap-2">
                  <motion.h2
                    animate={{ color: isActive ? "#ffffff" : "#000000" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-[12px] md:text-[16px] lg:hidden xl:text-[24px] bw-r xl:leading-[32px] leading-[100%] text-center"
                  >
                    {tab.split(" ").map((word, i) => (
                      <span key={i} className="block md:inline">
                        {word}
                      </span>
                    ))}
                  </motion.h2>
                  <motion.h2
                    animate={{ color: isActive ? "#ffffff" : "#000000" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-[12px] md:text-[16px] lg:block hidden xl:text-[24px] bw-r xl:leading-[32px] leading-[100%] text-center"
                  >
                    {tab}
                  </motion.h2>
                </div>{" "}
                <AnimatePresence mode="wait" initial={false}>
                  {isActive && (
                    <motion.img
                      key={`active-icon-${i}`}
                      initial={{ y: "100%", x: "-100%", opacity: 0 }}
                      animate={{ y: 0, x: 0, opacity: 1 }}
                      exit={{ y: "100%", x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                      src="/whiteexternal.svg"
                      alt="Active"
                      className="w-[39px] xl:flex hidden"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <div className="relative w-full">
          {activeTab === 0 && <TeamSecDirectors />}
          {activeTab === 1 && (
            <TeamSecCommittees
              cellPy="px-2 py-[15px]!"
              cellWidth="xl:grid-cols-[370px_1fr_370px] grid-cols-[0.5fr_1fr_0.5fr]"
            />
          )}
          {activeTab === 2 && <TeamSecLeadership />}
        </div>
      </div>
    </div>
  );
};

export default TeamSecF;

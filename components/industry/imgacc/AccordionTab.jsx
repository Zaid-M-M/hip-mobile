// "use client";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// // Example usage: pass hotspotsData[2] as `data`
// const AccordionTab = ({ data }) => {
//   const [openIndex, setOpenIndex] = useState(0); // First item open by default

//   const toggleAccordion = (index) => {
//     setOpenIndex(index);
//   };

//   return (
//     <div className="bg-[#EEF0F3] border border-[#D7D7D7] overflow-hidden">
//       {data.map((item, index) => (
//         <div
//           key={item.id}
//           className="mx-[30px] border-[#000000] border-b-[1px] border-opacity-35 last:border-none"
//         >
//           {/* Accordion Header */}
//           <div
//             className="flex items-center justify-between cursor-pointer"
//             onClick={() => toggleAccordion(index)}
//           >
//             <h1 className="text-[#E30613] leading-[30px] fsans-600 text-base uppercase py-[20px]">
//               {item.title}
//             </h1>
//             <img
//               className="w-6 h-6"
//               src={
//                 openIndex === index ? "Cap/cap_minus.svg" : "Cap/cap_plus.svg"
//               }
//               alt=""
//             />
//           </div>

//           {/* Accordion Content */}
//           <AnimatePresence initial={false}>
//             {openIndex === index && (
//               <motion.div
//                 key="content"
//                 layout
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{
//                   height: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
//                   opacity: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
//                 }}
//                 className="overflow-hidden"
//               >
//                 <div className="text-[#434343] flex flex-col gap-3 fsans-400 text-base pb-6">
//                   <p
//                     dangerouslySetInnerHTML={{ __html: item.description }}
//                     className="m-0"
//                   />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AccordionTab;
"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Example usage: pass hotspotsData[2] as `data`
const AccordionTab = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(index);
  };

  // SVG components
  const PlusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-plus"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );

  const MinusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-minus"
    >
      <path d="M5 12h14" />
    </svg>
  );

  return (
    <div className="overflow-hidden">
      {data.map((item, index) => (
        <div key={item.id} className="border-gray-200 border-b">
          {/* Accordion Header */}
          <div
            className="flex items-center h-fit justify-between cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-[#000] bw-m leading-[30px] fsans-600 text-[20px] py-[12px]">
              {item.title}
            </h2>
            <div className="w-6 h-6 flex items-center justify-center">
              {openIndex === index ? <MinusIcon /> : <PlusIcon />}
            </div>
          </div>

          {/* Accordion Content */}
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                layout
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
                  opacity: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
                }}
                className="overflow-hidden"
              >
                <div className="text-[#000] flex flex-col gap-3 fsans-400 text-[16px] bw-m pb-6 EX_accord_tab">
                  <p
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="m-0 "
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default AccordionTab;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const AccMob = ({
//   connectivity,
//   industrial_clusters_nearby,
//   main_access,
//   clat,
//   clon,
//   setClat,
//   setClon,
//   ep,
//   setEp,
// }) => {
//   // Set the first accordion and list item to be open/active by default
//   const [openIndex, setOpenIndex] = useState(0); // First accordion section open by default
//   const [selectedIndex, setSelectedIndex] = useState(0); // First list item active by default

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const MinusIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={24}
//       height={24}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#0db14b"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="lucide lucide-minus"
//     >
//       <path d="M5 12h14" />
//     </svg>
//   );

//   const PlusIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={24}
//       height={24}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#0db14b"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="lucide lucide-plus"
//     >
//       <path d="M12 5v14M5 12h14" />
//     </svg>
//   );

//   const accordionData = [
//     {
//       title: "Connectivity",
//       content: connectivity,
//       latKey: "c_latitude",
//       lonKey: "c_longitude",
//     },
//     {
//       title: "Industrial Clusters Nearby",
//       content: industrial_clusters_nearby,
//       latKey: "ic_latitude",
//       lonKey: "ic_longitude",
//     },
//     {
//       title: "Main Access",
//       content: main_access,
//       latKey: "ma_latitude",
//       lonKey: "ma_longitude",
//     },
//   ];

//   return (
//     <div className="overflow-hidden w-full">
//       {accordionData.map((section, index) => {
//         const isOpen = openIndex === index;

//         return (
//           <div
//             key={index}
//             className="border-b-2 last:border-b-0 py-6 xl:py-12 border-[#ffffff30] transition-all duration-300"
//           >
//             <button
//               onClick={() => toggleAccordion(index)}
//               className="w-full flex items-center justify-between cursor-pointer focus:outline-none"
//             >
//               <h3 className="text-[#fff] xl:text-[28px] xl:leading-[38px] lg:text-[20px] lg:leading-[30px] text-[22px] leading-[32px] bw-r py-0 text-left">
//                 {section.title}
//               </h3>
//               <div className="w-6 h-6 flex items-center justify-center mr-2">
//                 {isOpen ? <MinusIcon /> : <PlusIcon />}
//               </div>
//             </button>

//             <div
//               className={`grid transition-all duration-300 ease-in-out ${
//                 isOpen
//                   ? "grid-rows-[1fr] opacity-100"
//                   : "grid-rows-[0fr] opacity-0"
//               } overflow-hidden`}
//             >
//               <div className="overflow-hidden">
//                 <ul className="text-[#666666] xl:h-[150px] h-[100px] overflow-y-auto cscroll mt-5 flex flex-col gap-3 text-[16px] xl:text-[20px] bw-m list-disc pl-5">
//                   {Array.isArray(section.content) &&
//                     section.content.map((item, idx) => (
//                       <li
//                         key={idx}
//                         className={`cursor-pointer ${
//                           selectedIndex === idx
//                             ? "text-[#f47920]" // Active color for the selected li
//                             : "text-[#666666]" // Default color
//                         }`}
//                       >
//                         <Link
//                           href="#map"
//                           onClick={() => {
//                             setClat(item[section.latKey]);
//                             setClon(item[section.lonKey]);
//                             setEp(item.location_name.replace(/\s*\|\s*$/, ""));
//                             setSelectedIndex(idx); // Set the clicked index as active
//                           }}
//                         >
//                           {item.location_name} {item.location_km}
//                         </Link>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default AccMob;
"use client";
import React, { useState } from "react";
import Link from "next/link";

const AccMob = ({
  connectivity,
  industrial_clusters_nearby,
  main_access,
  clat,
  clon,
  setClat,
  setClon,
  ep,
  setEp,
}) => {
  // Open first accordion by default
  const [openIndex, setOpenIndex] = useState(0);
  // First li of first accordion active by default
  const [selectedItem, setSelectedItem] = useState({ accIndex: 0, liIndex: 0 });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const MinusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0db14b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-minus"
    >
      <path d="M5 12h14" />
    </svg>
  );

  const PlusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0db14b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-plus"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );

  const accordionData = [
    {
      title: "Connectivity",
      content: connectivity,
      latKey: "c_latitude",
      lonKey: "c_longitude",
    },
    {
      title: "Industrial Clusters Nearby",
      content: industrial_clusters_nearby,
      latKey: "ic_latitude",
      lonKey: "ic_longitude",
    },
    {
      title: "Main Access",
      content: main_access,
      latKey: "ma_latitude",
      lonKey: "ma_longitude",
    },
  ];

  return (
    <div className="overflow-hidden w-full">
      {accordionData.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b-2 last:border-b-0 py-6 xl:py-12 border-[#ffffff30] transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between cursor-pointer focus:outline-none"
            >
              <h3 className="text-[#fff] xl:text-[28px] xl:leading-[38px] lg:text-[20px] lg:leading-[30px] text-[22px] leading-[32px] bw-r py-0 text-left">
                {section.title}
              </h3>
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              } overflow-hidden`}
            >
              <div className="overflow-hidden">
                <ul className="text-[#666666] xl:h-[150px] h-[100px] overflow-y-auto cscroll mt-5 flex flex-col gap-3 text-[16px] xl:text-[20px] bw-m list-disc pl-5">
                  {Array.isArray(section.content) &&
                    section.content.map((item, idx) => {
                      const isActive =
                        selectedItem?.accIndex === index &&
                        selectedItem?.liIndex === idx;

                      return (
                        <li
                          key={idx}
                          className={`cursor-pointer ${
                            isActive ? "text-[#f47920]" : "text-[#666666]"
                          }`}
                        >
                          <Link
                            href="#map"
                            onClick={() => {
                              setClat(item[section.latKey]);
                              setClon(item[section.lonKey]);
                              setEp(
                                item.location_name.replace(/\s*\|\s*$/, "")
                              );
                              setSelectedItem({
                                accIndex: index,
                                liIndex: idx,
                              });
                            }}
                          >
                            {item.location_name} {item.location_km}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccMob;

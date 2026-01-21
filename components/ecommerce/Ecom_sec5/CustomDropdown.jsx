// import { useState } from "react";

// export default function CustomDropdown({
//   categories,
//   activeTab,
//   setActiveTab,
//   className = "w-full mt-6 relative lg:!hidden",
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className={className}>
//       {/* Trigger */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full border-0 border-b border-[#CDCDCD] py-3 px-2 bg-white text-black flex justify-between items-center rounded-none"
//       >
//         <span>{categories[activeTab]}</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className={`lucide lucide-chevron-down transition-transform ${
//             open ? "rotate-180" : ""
//           }`}
//         >
//           <path d="m6 9 6 6 6-6" />
//         </svg>
//       </button>

//       {/* Dropdown Options */}
//       {open && (
//         <div className="absolute left-0 right-0 bg-white border border-[#CDCDCD] mt-1 shadow-md z-50">
//           {categories.map((cat, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 setActiveTab(i);
//                 setOpen(false);
//               }}
//               className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                 activeTab === i ? "bg-gray-100 font-medium" : ""
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect, useRef } from "react";

/* --------------------------------------------------------------
   Global registry – lives only while the app is mounted.
   Every dropdown registers itself here.
   -------------------------------------------------------------- */
const openDropdowns = new Set();

function closeAllExcept(exclude) {
  for (const closer of openDropdowns) {
    if (closer !== exclude) closer();
  }
}

/* -------------------------------------------------------------- */
export default function CustomDropdown({
  categories,
  activeTab,
  setActiveTab,
  className = "w-full mt-6 relative lg:!hidden",
}) {
  const [open, setOpen] = useState(false);
  const myCloserRef = useRef(() => {});

  /* Register / unregister this instance */
  useEffect(() => {
    const closeMe = () => setOpen(false);
    myCloserRef.current = closeMe;
    openDropdowns.add(closeMe);

    return () => {
      openDropdowns.delete(closeMe);
    };
  }, []);

  /* Toggle: open this, close all others */
  const toggle = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen) {
      closeAllExcept(myCloserRef.current);
    }
  };

  /* Select item and close */
  const select = (i) => {
    setActiveTab(i);
    setOpen(false);
  };

  return (
    <div className={className}>
      {/* Trigger */}
      <button
        onClick={toggle}
        className="w-full md:max-w-[80%] lg:w-full border-0 border-b border-[#CDCDCD] py-3 px-2 Winery-white text-black flex justify-between items-center rounded-none"
      >
        <span>{categories[activeTab]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Options */}
      {open && (
        <div className="absolute left-0 right-0 bg-white border border-[#CDCDCD] mt-1 shadow-md z-50">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                activeTab === i ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

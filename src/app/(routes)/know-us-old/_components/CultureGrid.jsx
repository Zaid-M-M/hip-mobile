// "use client";
// import { useState } from "react";

// const cultureData = [
//   {
//     title: "A Culture Of Trust And Openness",
//     hoverText:
//       "At Horizon, collaboration is at the heart of how we work and grow together. Success is a collective journey.",
//     clip: "polygon(0 0, 100% 0, 0 100%)", // top-left triangle
//   },
//   {
//     title: "A Culture Of Learning And Experimentation",
//     hoverText:
//       "We encourage curiosity and embrace change. Every challenge is an opportunity to innovate.",
//     clip: "polygon(0 0, 100% 0, 100% 100%)", // top-right triangle
//   },
//   {
//     title: "A Culture That Values Diversity, Quality And Responsibility",
//     hoverText:
//       "We celebrate diversity, aim for excellence, and take ownership in everything we do.",
//     clip: "polygon(0 0, 100% 100%, 0 100%)", // bottom-left triangle
//   },
// ];

// export default function CultureGrid() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <div className="relative w-[660px] h-[660px]">
//       {cultureData.map((item, index) => (
//         <div
//           key={index}
//           className="absolute w-[328px] h-[329px] border border-gray-300 overflow-hidden cursor-pointer"
//           style={{
//             clipPath: item.clip,
//             top: index === 0 ? 0 : index === 1 ? 0 : "auto",
//             left: index === 0 ? 0 : index === 1 ? "50%" : 0,
//             bottom: index === 2 ? 0 : "auto",
//           }}
//           onMouseEnter={() => setActiveIndex(index)}
//           onMouseLeave={() => setActiveIndex(null)}
//         >
//           {/* Default Content */}
//           <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
//             <p className="text-sm font-medium max-w-[220px]">{item.title}</p>
//             <span className="absolute top-3 right-3 text-lg">↗</span>
//           </div>

//           {/* Hover Overlay */}
//           <div
//             className={`absolute inset-0 flex items-center justify-center p-6 text-center text-white bg-orange-500 transition-opacity duration-300 ${
//               activeIndex === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <p className="text-base font-medium max-w-[240px]">
//               {item.hoverText}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";

// const cultureData = [
//   {
//     title: "A Culture Of Trust And Openness",
//     hoverText:
//       "At Horizon, collaboration is at the heart of how we work and grow together. Success is a collective journey.",
//     position: "top-left",
//   },
//   {
//     title: "A Culture Of Learning And Experimentation",
//     hoverText:
//       "We encourage curiosity and embrace change. Every challenge is an opportunity to innovate.",
//     position: "top-right",
//   },
//   {
//     title: "A Culture That Values Diversity, Quality And Responsibility",
//     hoverText:
//       "We celebrate diversity, aim for excellence, and take ownership in everything we do.",
//     position: "bottom-right",
//   },
// ];

// export default function CultureGrid() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <div className="relative w-[660px] h-[660px]">
//       {cultureData.map((item, index) => {
//         let styles = {};
//         if (item.position === "top-left") {
//           styles = {
//             top: 0,
//             left: 0,
//             clipPath: "polygon(0 1px, 100% 1px, 100% 100%, 50% 50%, 0 1px)",
//           };
//         }
//         if (item.position === "top-right") {
//           styles = {
//             top: 0,
//             right: 0,
//             clipPath: "polygon(0 1px, 100% 1px, 100% 100%, 50% 50%, 0 1px)",
//             transform: "rotate(90deg)",
//             transformOrigin: "top right",
//           };
//         }
//         if (item.position === "bottom-right") {
//           styles = {
//             bottom: 0,
//             right: 0,
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 0)",
//           };
//         }

//         const isActive = activeIndex === index;

//         return (
//           <div
//             key={index}
//             className="absolute w-full h-full border border-gray-300 overflow-hidden cursor-pointer"
//             style={styles}
//             onMouseEnter={() => setActiveIndex(index)}
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             {/* Default content */}
//             <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
//               <p className="text-sm font-medium max-w-[220px]">{item.title}</p>
//               <span className="absolute top-3 right-3 text-lg">↗</span>
//             </div>

//             {/* Hover expanding section */}
//             <div
//               className={`absolute inset-0 flex items-center justify-center p-6 text-center text-white bg-orange-500 transition-all duration-500`}
//               style={{
//                 clipPath: isActive
//                   ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
//                   : styles.clipPath,
//                 opacity: isActive ? 1 : 0,
//               }}
//             >
//               <p className="text-base font-medium max-w-[240px]">
//                 {item.hoverText}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";
import { useState } from "react";

const cultureData = [
  {
    title: "A Culture Of Trust And Openness",
    hoverText:
      "At Horizon, collaboration is at the heart of how we work and grow together. Success is a collective journey.",
    position: "top-left",
  },
  {
    title: "A Culture Of Learning And Experimentation",
    hoverText:
      "We encourage curiosity and embrace change. Every challenge is an opportunity to innovate.",
    position: "top-right",
  },
  {
    title: "A Culture That Values Diversity, Quality And Responsibility",
    hoverText:
      "We celebrate diversity, aim for excellence, and take ownership in everything we do.",
    position: "bottom-right",
  },
];

export default function CultureGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    // <div className="relative w-[656px] h-[657px]">
    //   {cultureData.map((item, index) => {
    //     let styles = {};
    //     if (item.position === "top-left") {
    //       styles = {
    //         top: 0,
    //         left: 0,
    //         clipPath: "polygon(0 0, 100% 0, 50% 100%)",
    //       };
    //     }
    //     if (item.position === "top-right") {
    //       styles = {
    //         top: 0,
    //         right: 0,
    //         clipPath: "polygon(0 0, 100% 0, 0 100%)",
    //       };
    //     }
    //     if (item.position === "bottom-right") {
    //       styles = {
    //         bottom: 0,
    //         right: 0,
    //         clipPath: "polygon(100% 0, 0 0, 50% 100%)",
    //       };
    //     }

    //     const isActive = activeIndex === index;

    //     return (
    //       <div
    //         key={index}
    //         className="absolute w-full h-full overflow-hidden cursor-pointer"
    //         style={styles}
    //         onMouseEnter={() => setActiveIndex(index)}
    //         onMouseLeave={() => setActiveIndex(null)}
    //       >
    //         {/* Default content */}
    //         <div className="absolute inset-0 flex items-center justify-center p-6 text-center border border-gray-300">
    //           <p className="text-sm font-medium max-w-[220px]">{item.title}</p>
    //           <span className="absolute top-3 right-3 text-lg">↗</span>
    //         </div>

    //         {/* Hover expanding section */}
    //         <div
    //           className={`absolute inset-0 flex items-center justify-center p-6 text-center text-white bg-orange-500 transition-all duration-500 border border-orange-500`}
    //           style={{
    //             clipPath: isActive
    //               ? "polygon(25% 0, 75% 0, 50% 100%)" // Inverted triangle centered
    //               : styles.clipPath,
    //             opacity: isActive ? 1 : 0,
    //           }}
    //         >
    //           <p className="text-base font-medium max-w-[240px]">
    //             {item.hoverText}
    //           </p>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    // <div className="relative w-[660px] h-[660px] border border-red-300">
    //   <div
    //     className="absolute w-[330px] h-[330px] border-b border-r border-red-300"
    //     style={{ top: 0, left: 0 }}
    //   ></div>
    //   <div
    //     className="absolute w-[330px] h-[330px] border-b border-r border-red-300"
    //     style={{ top: 0, right: 0 }}
    //   ></div>
    //   <div
    //     className="absolute w-[330px] h-[330px] border-b border-r border-red-300"
    //     style={{ bottom: 0, right: 0 }}
    //   ></div>
    //   <div
    //     className="absolute w-[330px] h-[330px] border-b border-r border-red-300"
    //     style={{ bottom: 0, left: 0 }}
    //   ></div>
    // </div>

    <div className="relative w-[660px] h-[660px] border border-red-300">
      <div
        className="absolute w-[330px] h-[660px] border-red-300"
        style={{ top: 0, left: 0 }}
      >
        {/* Diagonal line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            clipPath: "polygon(0 0, 100% 0, 0 100%)", // Triangle shape
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "147%", // Adjusted for diagonal length (approx. sqrt(2) * 100%)
              height: 0,
              borderBottom: "1px solid red",
              transform: "rotate(-45deg)",
              transformOrigin: "0 0",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <p className="text-sm font-medium max-w-[220px]">
            A Culture Of Trust And Openness
          </p>
          <span className="absolute top-3 right-3 text-lg">↗</span>
        </div>
      </div>
    </div>
  );
}

// import { Icon1 } from "./svgs/SVGIconsFF"; // Adjust the import path as needed

// export default function GradientDiamond({ activeId }) {
//   const secondDiamondSize = 756;
//   const smallestDiamondSize = 247;

//   const DiamondLayer = ({ size, opacity }) => (
//     <div
//       className="absolute rotate-45 z-1"
//       style={{
//         width: size,
//         height: size,
//         borderWidth: "2px",
//         borderStyle: "solid",
//         borderImage: "linear-gradient(45deg, #a855f7, #fb923c) 1",
//         borderImageSlice: 1,
//         opacity: opacity,
//       }}
//     />
//   );

//   return (
//     <div className="relative flex justify-center items-center h-[400px] w-full">
//       {/* Diamond layers */}
//       <DiamondLayer size="1469px" opacity={0.2} />
//       <DiamondLayer size="1141px" opacity={0.4} />
//       <DiamondLayer size={`${secondDiamondSize}px`} opacity={0.4} />
//       <DiamondLayer size="488px" opacity={0.9} />
//       <DiamondLayer size={`${smallestDiamondSize}px`} opacity={1} />

//       {/* Center diamond */}
//       <div className="relative flex justify-center items-center">
//         <div className="w-16 h-16 rotate-45 bg-gradient-to-r from-orange-400 to-purple-600" />
//       </div>

//       {/* 2 icons on Y-axis of second smallest diamond */}
//       <div
//         className="absolute z-[100] w-[110px] h-[110px]"
//         style={{
//           top: `calc(50% - ${secondDiamondSize / 2}px)`,
//           left: "50%",
//           transform: "translateX(-50%)",
//         }}
//       >
//         <Icon1 active={activeId === 1} />
//       </div>
//       <div
//         className="absolute z-[100] w-[110px] h-[110px]"
//         style={{
//           bottom: `calc(50% - ${secondDiamondSize / 2}px)`,
//           left: "50%",
//           transform: "translateX(-50%)",
//         }}
//       >
//         <Icon1 active={activeId === 2} />
//       </div>

//       {/* 2 icons on X-axis of smallest diamond */}
//       <div
//         className="absolute z-[100] w-[110px] h-[110px]"
//         style={{
//           left: `calc(50% - 220px)`,
//           top: "50%",
//           transform: "translateY(-50%)",
//         }}
//       >
//         <Icon1 active={activeId === 3} />
//       </div>
//       <div
//         className="absolute z-[100] w-[110px] h-[110px]"
//         style={{
//           right: `calc(50% - 220px)`,
//           top: "50%",
//           transform: "translateY(-50%)",
//         }}
//       >
//         <Icon1 active={activeId === 4} />
//       </div>
//     </div>
//   );
// }
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
"use client";
import { motion } from "framer-motion";

export default function GradientDiamond({ activeId }) {
  const secondDiamondSize = 756;
  const smallestDiamondSize = 247;

  const DiamondLayer = ({ size, opacity }) => (
    <div
      className="absolute rotate-45 z-1"
      style={{
        width: size,
        height: size,
        borderWidth: "2px",
        borderStyle: "solid",
        borderImage: "linear-gradient(45deg, #a855f7, #fb923c) 1",
        borderImageSlice: 1,
        opacity: opacity,
      }}
    />
  );

  // helper to render icon with active/inactive stacked images
  const DiamondIcon = ({ id, positionStyles }) => (
    <div
      className="absolute z-[100] w-[110px] h-[110px]"
      style={positionStyles}
    >
      {/* inactive image (always visible behind) */}
      <img
        src={`/solutions/icons/inactive${id}.svg`}
        alt={`Inactive ${id}`}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      {/* active image (opacity toggled) */}
      <motion.img
        src={`/solutions/icons/active${id}.svg`}
        alt={`Active ${id}`}
        className="absolute top-0 left-0 w-full h-full z-10"
        initial={{ opacity: 0 }} // 👈 prevents flash on first render
        animate={{ opacity: activeId === id ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
      />
    </div>
  );
  return (
    <div className="relative flex justify-center items-center h-[400px] w-full">
      {/* Diamond layers */}
      <DiamondLayer size="1469px" opacity={0.2} />
      <DiamondLayer size="1141px" opacity={0.4} />
      <DiamondLayer size={`${secondDiamondSize}px`} opacity={0.4} />
      <DiamondLayer size="488px" opacity={0.9} />
      <DiamondLayer size={`${smallestDiamondSize}px`} opacity={1} />

      {/* Center diamond */}
      <div className="relative flex justify-center items-center">
        <div className="w-16 h-16 rotate-45 bg-gradient-to-r from-orange-400 to-purple-600" />
      </div>

      {/* 2 icons on Y-axis of second smallest diamond */}
      <DiamondIcon
        id={1}
        positionStyles={{
          top: `calc(50% - ${secondDiamondSize / 2}px)`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <DiamondIcon
        id={2}
        positionStyles={{
          left: `calc(50% - 220px)`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* 2 icons on X-axis of smallest diamond */}
      <DiamondIcon
        id={3}
        positionStyles={{
          right: `calc(50% - 220px)`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <DiamondIcon
        id={4}
        positionStyles={{
          bottom: `calc(50% - ${secondDiamondSize / 2}px)`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}

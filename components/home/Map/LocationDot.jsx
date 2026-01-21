// import React from "react";
// import {
//   staticRegionDataIncity,
//   incityCategoryMap,
//   industrialCategoryMap,
//   staticRegionDataIndustrial,
// } from "@/src/utils/mapStaticData";
// // import { Console } from "console";

// export const LocationDot = ({
//   x = 100,
//   y = 100,
//   label = "Unknown",
//   incityname = "Unknown",
//   xOffset = 5,
//   onClick,
//   onMouseEnter,
//   onMouseLeave,
//   circleRadius = 1,
//   fontSize = 1.8,
//   text_position = "", // "left" or "right"
//   incity_text_position_ = "", // "left" or "right"
//   regionKey = null,
//   zoom: zoomProp = null,
//   parent = "",
// }) => {
//   const [isClicked, setIsClicked] = React.useState(false);

//   // Determine zoom: use prop first, otherwise fetch from staticRegionDataIndustrial
//   const zoom =
//     zoomProp ||
//     (regionKey ? staticRegionDataIndustrial[regionKey]?.zoom : { scale: 1 });

//   const handleClick = (e) => {
//     setIsClicked(!isClicked);
//     onClick?.(e);
//   };

//   const minOffset = 2; // minimum px distance from circle
//   const scaledXOffset = Math.max(
//     xOffset / Math.sqrt(zoom?.scale || 1),
//     minOffset
//   );

//   // === label position (for industrial/static regions) ===
//   const textX =
//     text_position === "left" ? x - scaledXOffset : x + scaledXOffset;
//   const textAnchor = text_position === "left" ? "end" : "start";

//   // === incity label position (for incity map) ===
//   const incityTextX =
//     incity_text_position_ === "left" ? x - scaledXOffset : x + scaledXOffset;
//   const incityTextAnchor = incity_text_position_ === "left" ? "end" : "start";

//   return (
//     <g>
//       <circle
//         cx={x}
//         cy={y}
//         r={isClicked ? circleRadius * 1.4 : circleRadius}
//         fill="#0db14b"
//         stroke="#fff"
//         strokeWidth="1"
//         vectorEffect="non-scaling-stroke"
//         className="transition-all duration-300 ease-in-out cursor-pointer"
//         onClick={handleClick}
//       />

//       {parent === "Incity" ? (
//         <text
//           x={incityTextX}
//           y={y + 0.3}
//           className="cursor-pointer"
//           fill="#fff"
//           fontSize={fontSize}
//           fontWeight="500"
//           textAnchor={incityTextAnchor}
//           dominantBaseline="middle"
//           filter="url(#text-shadow)"
//           onClick={handleClick}
//         >
//           {incityname}
//         </text>
//       ) : (
//         <text
//           x={textX}
//           y={y + 0.3}
//           className="cursor-pointer"
//           fill="#fff"
//           fontSize={fontSize}
//           fontWeight="500"
//           textAnchor={textAnchor}
//           dominantBaseline="middle"
//           filter="url(#text-shadow)"
//           onClick={handleClick}
//         >
//           {label}
//         </text>
//       )}
//     </g>
//   );
// };
import React from "react";
import { staticRegionDataIndustrial } from "@/src/utils/mapStaticData";

export const LocationDot = ({
  x = 100,
  y = 100,
  label = "Unknown",
  incityname = "Unknown",
  xOffset = 5,
  onClick,
  circleRadius = 1,
  fontSize = 1.8,
  text_position = "",
  incity_text_position_ = "",
  regionKey = null,
  zoom: zoomProp = null,
  parent = "",
}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  // ✅ unique id per pin (stable)
  const idRef = React.useRef(`${x}-${y}-${label || incityname}`);

  // Determine zoom
  const zoom =
    zoomProp ||
    (regionKey ? staticRegionDataIndustrial[regionKey]?.zoom : { scale: 1 });

  // ✅ Listen for other pin clicks
  React.useEffect(() => {
    const handleReset = (e) => {
      if (e.detail !== idRef.current) {
        setIsClicked(false);
      }
    };

    window.addEventListener("location-dot-clicked", handleReset);
    return () => {
      window.removeEventListener("location-dot-clicked", handleReset);
    };
  }, []);

  const handleClick = (e) => {
    // 🔥 notify all other pins
    window.dispatchEvent(
      new CustomEvent("location-dot-clicked", {
        detail: idRef.current,
      })
    );

    setIsClicked(true);
    onClick?.(e);
  };

  const minOffset = 2;
  const scaledXOffset = Math.max(
    xOffset / Math.sqrt(zoom?.scale || 1),
    minOffset
  );

  const textX =
    text_position === "left" ? x - scaledXOffset : x + scaledXOffset;
  const textAnchor = text_position === "left" ? "end" : "start";

  const incityTextX =
    incity_text_position_ === "left" ? x - scaledXOffset : x + scaledXOffset;
  const incityTextAnchor = incity_text_position_ === "left" ? "end" : "start";

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={isClicked ? circleRadius * 1.4 : circleRadius}
        fill="#0db14b"
        stroke="#fff"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        className="transition-all duration-300 ease-in-out cursor-pointer"
        onClick={handleClick}
      />

      <text
        x={parent === "Incity" ? incityTextX : textX}
        y={y + 0.3}
        className="cursor-pointer"
        fill="#fff"
        fontSize={fontSize}
        fontWeight="500"
        textAnchor={parent === "Incity" ? incityTextAnchor : textAnchor}
        dominantBaseline="middle"
        filter="url(#text-shadow)"
        onClick={handleClick}
      >
        {parent === "Incity" ? incityname : label}
      </text>
    </g>
  );
};

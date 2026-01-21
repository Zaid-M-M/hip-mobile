
// "use client";
// import { motion } from "framer-motion";

// export default function Leadership() {
//   const paddingLeft = 50;  // left space
//   const paddingRight = 50; // right space
//   const topPadding = 40;   // space for top labels
//   const bottomPadding = 30; // space for bottom points

//   const points = [
//     { year: "FY 2024", label: "BASELINE", sub: "As-Is", x: 0 + paddingLeft, y: 20 + topPadding },
//     { year: "FY 2035", label: "REDUCE 65%", sub: "GHG Emissions", x: 400, y: 80 + topPadding },
//     { year: "FY 2045", label: "REDUCE 81%", sub: "GHG Emissions", x: 800, y: 120 + topPadding },
//     { year: "FY 2050", label: "ACHIEVE", sub: "Net Zero", x: 1340 - paddingRight, y: 150 + topPadding },
//   ];

//   const maxX = points[points.length - 1].x;
//   const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x},${p.y}`).join(" ");
//   const getDelay = (x) => (x / maxX) * 1;

//   return (
//     <div className="w-full flex justify-center bg-black p-10">
//       <motion.svg
//         viewBox={`0 0 1340 ${200 + topPadding + bottomPadding}`}
//         width="100%"
//         preserveAspectRatio="none"
//         className="max-w-[1440px]"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.4 }}
//       >
//         <defs>
//           {/* Gradient from purple to orange fading to transparent at bottom */}
//           <linearGradient id="graphGradient" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="25.41%" stopColor="rgba(172,56,217,0.3)" />
//             <stop offset="59.05%" stopColor="rgba(244,121,34,0.3)" />
//             <stop offset="91.36%" stopColor="rgba(244,121,34,0)" />
//           </linearGradient>

//           {/* Stroke gradient for the curve line (optional) */}
//           <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="rgba(172,56,217,1)" />
//             <stop offset="100%" stopColor="rgba(244,121,34,1)" />
//           </linearGradient>
//         </defs>

//         {/* Fill under curve */}
//         <motion.path
//           d={`${pathD} L ${maxX},${200 + topPadding} L ${points[0].x},${200 + topPadding} Z`}
//           fill="url(#graphGradient)"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.5 }}
//         />

//         {/* Curve Line */}
//         <motion.path
//           d={pathD}
//           stroke="url(#lineGradient)"
//           strokeWidth="3"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           transition={{ duration: 1 }}
//         />

//         {/* Points and Labels */}
//         {points.map((p, i) => {
//           const delay = getDelay(p.x);

//           return (
//             <g key={i}>
//               <motion.circle
//                 cx={p.x}
//                 cy={p.y}
//                 r={14}
//                 fill="rgba(244,121,34,0.2)"
//                 stroke="#FFF"
//                 strokeWidth="1"
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ delay }}
//               />
//               <motion.circle
//                 cx={p.x}
//                 cy={p.y}
//                 r={4}
//                 fill="#FFF"
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ delay: delay + 0.05 }}
//               />
//               <motion.text
//                 x={p.x}
//                 y={p.y - 20}
//                 fill="white"
//                 fontSize="12"
//                 fontWeight="bold"
//                 textAnchor="middle"
//                 initial={{ opacity: 0, y: -5 }}
//                 whileInView={{ opacity: 1, y: -20 }}
//                 transition={{ delay: delay + 0.1 }}
//               >
//                 {p.label}
//               </motion.text>
//               <motion.text
//                 x={p.x}
//                 y={p.y - 8}
//                 fill="white"
//                 fontSize="10"
//                 textAnchor="middle"
//                 initial={{ opacity: 0, y: -5 }}
//                 whileInView={{ opacity: 1, y: -20 }}
//                 transition={{ delay: delay + 0.2 }}
//               >
//                 {p.sub}
//               </motion.text>
//               <motion.text
//                 x={p.x}
//                 y={200 + topPadding}
//                 fill="white"
//                 fontSize="10"
//                 textAnchor="middle"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: delay + 0.3 }}
//               >
//                 {p.year}
//               </motion.text>
//             </g>
//           );
//         })}
//       </motion.svg>
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
// "use client";
// import { motion } from "framer-motion";

// export default function Leadership() {
//   const paddingLeft = 50;  // left space
//   const paddingRight = 50; // right space
//   const topPadding = 40;   // space for top labels
//   const bottomPadding = 30; // space for bottom points

//   const points = [
//     { year: "FY 2024", label: "BASELINE", sub: "As-Is", x: 0 + paddingLeft, y: 70 + topPadding },
//     { year: "FY 2035", label: "REDUCE 65%", sub: "GHG Emissions", x: 400, y: 200 + topPadding },
//     { year: "FY 2045", label: "REDUCE 81%", sub: "GHG Emissions", x: 800, y: 240 + topPadding },
//     { year: "FY 2050", label: "ACHIEVE", sub: "Net Zero", x: 1340 - paddingRight, y: 300 + topPadding },
//   ];

//   const maxX = points[points.length - 1].x;
//   const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x},${p.y}`).join(" ");
//   const getDelay = (x) => (x / maxX) * 1;

//   const svgHeight = 375; // total desired height

//   return (
//     <div className="w-full flex justify-center bg-black p-10">
//       <motion.svg
//         viewBox={`0 0 1340 ${svgHeight}`}
//         width="100%"
//         preserveAspectRatio="none"
//         className="max-w-[1440px]"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.4 }}
//       >
//         <defs>
//           {/* Gradient from purple to orange fading to transparent at bottom */}
//           <linearGradient id="graphGradient" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="25.41%" stopColor="rgba(172,56,217,0.3)" />
//             <stop offset="59.05%" stopColor="rgba(244,121,34,0.3)" />
//             <stop offset="91.36%" stopColor="rgba(244,121,34,0)" />
//           </linearGradient>

//           {/* Stroke gradient for the curve line */}
//           <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="rgba(172,56,217,1)" />
//             <stop offset="100%" stopColor="rgba(244,121,34,1)" />
//           </linearGradient>
//         </defs>

//         {/* Fill under curve */}
//         <motion.path
//           d={`${pathD} L ${maxX},${svgHeight} L ${points[0].x},${svgHeight} Z`}
//           fill="url(#graphGradient)"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.5 }}
//         />

//         {/* Curve Line */}
//         <motion.path
//           d={pathD}
//           stroke="url(#lineGradient)"
//           strokeWidth="3"
//           fill="none"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           transition={{ duration: 1 }}
//         />

//         {/* Points and Labels */}
//         {points.map((p, i) => {
//           const delay = getDelay(p.x);

//           return (
//             <g key={i}>
//               <motion.circle
//                 cx={p.x}
//                 cy={p.y}
//                 r={14}
//                 fill="rgba(244,121,34,0.2)"
//                 stroke="#FFF"
//                 strokeWidth="1"
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ delay }}
//               />
//               <motion.circle
//                 cx={p.x}
//                 cy={p.y}
//                 r={4}
//                 fill="#FFF"
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ delay: delay + 0.05 }}
//               />
//               <motion.text
//                 x={p.x}
//                 y={p.y - 20}
//                 fill="white"
//                 fontSize="12"
//                 fontWeight="bold"
//                 textAnchor="middle"
//                 initial={{ opacity: 0, y: -5 }}
//                 whileInView={{ opacity: 1, y: -20 }}
//                 transition={{ delay: delay + 0.1 }}
//               >
//                 {p.label}
//               </motion.text>
//               <motion.text
//                 x={p.x}
//                 y={p.y - 8}
//                 fill="white"
//                 fontSize="10"
//                 textAnchor="middle"
//                 initial={{ opacity: 0, y: -5 }}
//                 whileInView={{ opacity: 1, y: -20 }}
//                 transition={{ delay: delay + 0.2 }}
//               >
//                 {p.sub}
//               </motion.text>
//               <motion.text
//                 x={p.x}
//                 y={svgHeight + 20}
//                 fill="white"
//                 fontSize="10"
//                 textAnchor="middle"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: delay + 0.3 }}
//               >
//                 {p.year}
//               </motion.text>
//             </g>
//           );
//         })}
//       </motion.svg>
//     </div>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function Leadership() {
  const paddingLeft = 50;  // left space
  const paddingRight = 50; // right space
  const topPadding = 40;   // space for top labels
  const bottomPadding = 30; // space for bottom points

  const points = [
    { year: "FY 2024", label: "BASELINE", sub: "As-Is", x: 0 + paddingLeft, y: 70 + topPadding },
    { year: "FY 2035", label: "REDUCE 65%", sub: "GHG Emissions", x: 400, y: 200 + topPadding },
    { year: "FY 2045", label: "REDUCE 81%", sub: "GHG Emissions", x: 800, y: 240 + topPadding },
    { year: "FY 2050", label: "ACHIEVE", sub: "Net Zero", x: 1340 - paddingRight, y: 300 + topPadding },
  ];

  const maxX = points[points.length - 1].x;
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x},${p.y}`).join(" ");
  const getDelay = (x) => (x / maxX) * 1;

  const svgHeight = 375; // height for curve and gradient
  const yearLabelOffset = 40; // space for year labels and border
  const totalHeight = svgHeight + yearLabelOffset; // total viewBox height

  return (
    <div className="w-full flex justify-center bg-black p-10">
      <motion.svg
        viewBox={`0 0 1340 ${totalHeight}`}
        width="100%"
        preserveAspectRatio="none"
        className="max-w-[1440px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <defs>
          {/* Gradient from purple to orange fading to transparent at bottom */}
          <linearGradient id="graphGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="25.41%" stopColor="rgba(172,56,217,0.3)" />
            <stop offset="59.05%" stopColor="rgba(244,121,34,0.3)" />
            <stop offset="91.36%" stopColor="rgba(244,121,34,0)" />
          </linearGradient>

          {/* Stroke gradient for the curve line */}
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(172,56,217,1)" />
            <stop offset="100%" stopColor="rgba(244,121,34,1)" />
          </linearGradient>
        </defs>

        {/* Fill under curve */}
        <motion.path
          d={`${pathD} L ${maxX},${svgHeight} L ${points[0].x},${svgHeight} Z`}
          fill="url(#graphGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />

        {/* Curve Line */}
        <motion.path
          d={pathD}
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Top border line for year labels */}
        <motion.line

          x1={paddingLeft}
          x2={maxX}
          y1={svgHeight + 5} // just above year labels
          y2={svgHeight + 5}
          stroke="white"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        />

        {/* Points and Labels */}
        {points.map((p, i) => {
          const delay = getDelay(p.x);

          return (
            <g key={i}>
              {/* Outer point */}
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={14}
                fill="rgba(244,121,34,0.2)"
                stroke="#FFF"
                strokeWidth="1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay }}
              />

              {/* Inner point */}
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={4}
                fill="#FFF"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: delay + 0.05 }}
              />

              {/* Label above point */}
              <motion.text
                x={p.x}
                y={p.y - 20}
                fill="white"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: -20 }}
                transition={{ delay: delay + 0.1 }}
              >
                {p.label}
              </motion.text>

              {/* Sub-label above point */}
              <motion.text
                x={p.x}
                y={p.y - 8}
                fill="white"
                fontSize="10"
                textAnchor="middle"
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: -20 }}
                transition={{ delay: delay + 0.2 }}
              >
                {p.sub}
              </motion.text>

              {/* Year below curve with background */}
              <motion.text
                x={p.x}
                y={svgHeight + 25} // inside viewBox
                fill="white"
                fontSize="20"
                fontWeight="normal"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {p.year}
              </motion.text>
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}

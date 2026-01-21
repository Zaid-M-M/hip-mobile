// import React from "react";

// const Blob = () => {
//   return (
//     <div className=" w-[527.196px] h-[357.111px] absolute bottom-0 right-0 opacity-50">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="496"
//         height="503"
//         viewBox="0 0 496 503"
//         fill="none"
//       >
//         <g opacity="0.5" filter="url(#filter0_f_4434_4752)">
//           <path
//             d="M342.63 271.113C340.293 308.286 371.617 365 325.86 365C280.103 365 138.4 205.832 138.4 160.048C138.4 114.263 287.889 154.654 333.646 154.654C379.402 154.654 345.491 225.588 342.63 271.113Z"
//             fill="#0db14b"
//           />
//         </g>
//         <defs>
//           <filter
//             id="filter0_f_4434_4752"
//             x="0.400391"
//             y="0.199951"
//             width="495"
//             height="502.8"
//             filterUnits="userSpaceOnUse"
//             colorInterpolationFilters="sRGB"
//           >
//             <feFlood floodOpacity="0" result="BackgroundImageFix" />
//             <feBlend
//               mode="normal"
//               in="SourceGraphic"
//               in2="BackgroundImageFix"
//               result="shape"
//             />
//             <feGaussianBlur
//               stdDeviation="69"
//               result="effect1_foregroundBlur_4434_4752"
//             />
//           </filter>
//         </defs>
//       </svg>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="394"
//         height="746"
//         viewBox="0 0 394 746"
//         fill="none"
//       >
//         <g opacity="0.3" filter="url(#filter0_f_4434_4751)">
//           <path
//             d="M138.396 363.937C138.396 264.323 289.963 138.161 389.817 138.161C489.671 138.161 389.817 264.323 389.817 363.937C389.817 463.55 448.406 607.961 348.552 607.961C248.698 607.961 138.396 463.55 138.396 363.937Z"
//             fill="#F47920"
//           />
//         </g>
//         <defs>
//           <filter
//             id="filter0_f_4434_4751"
//             x="0.396484"
//             y="0.160889"
//             width="571.8"
//             height="745.8"
//             filterUnits="userSpaceOnUse"
//             colorInterpolationFilters="sRGB"
//           >
//             <feFlood floodOpacity="0" result="BackgroundImageFix" />
//             <feBlend
//               mode="normal"
//               in="SourceGraphic"
//               in2="BackgroundImageFix"
//               result="shape"
//             />
//             <feGaussianBlur
//               stdDeviation="69"
//               result="effect1_foregroundBlur_4434_4751"
//             />
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// export default Blob;

import React from "react";

const Blob = () => {
  return (
    <div className="absolute bottom-0 right-0 w-[600px] h-[700px] opacity-50 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        fill="none"
        className="w-full h-full"
      >
        {/* GREEN BLOB */}
        <g opacity="0.5" filter="url(#greenFilter)">
          <path
            d="M342.63 271.113C340.293 308.286 371.617 365 325.86 365C280.103 365 138.4 205.832 138.4 160.048C138.4 114.263 287.889 154.654 333.646 154.654C379.402 154.654 345.491 225.588 342.63 271.113Z"
            fill="#0db14b"
          />
        </g>

        {/* ORANGE BLOB */}
        <g opacity="0.3" filter="url(#orangeFilter)">
          <path
            d="M138.396 363.937C138.396 264.323 289.963 138.161 389.817 138.161C489.671 138.161 389.817 264.323 389.817 363.937C389.817 463.55 448.406 607.961 348.552 607.961C248.698 607.961 138.396 463.55 138.396 363.937Z"
            fill="#F47920"
          />
        </g>

        {/* FILTERS */}
        <defs>
          <filter
            id="greenFilter"
            x="0.4"
            y="0.2"
            width="495"
            height="502.8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="69"
              result="effect1_foregroundBlur_4434_4752"
            />
          </filter>
          <filter
            id="orangeFilter"
            x="0.4"
            y="0.1"
            width="571.8"
            height="745.8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="69"
              result="effect1_foregroundBlur_4434_4751"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Blob;

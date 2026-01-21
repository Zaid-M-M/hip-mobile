// import React from "react";
// import IMPScroll from "./IMPScroll";

// const IMPMain = () => {
//   return (
//     <div className="w-full xl:py-24 py-12">
//       <div className="fix">
//         <div className="flex flex-col gap-20 relative">
//           <h3 className="sticky z-[1000000] top-20">
//             <span className="md64m">Impact</span>
//             <span className="md64r">
//               <span>So Far</span>
//               <img src="/abstract_pattern_sustain.png" alt="Abstract Gradient" />
//             </span>
//           </h3>
//           <IMPScroll />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IMPMain;

import React from "react";
import IMPScroll from "./IMPScroll";
import IMPScrollF from "./IMPScrollF";
import IMPScrollFM from "./IMPScrollFM";

const IMPMain = () => {
  return (
    <div className="w-full xl:py-24 py-12">
      <div className="fix">
        {/* IMPScroll now includes the heading */}
        <IMPScrollF />
        <IMPScrollFM />
      </div>
    </div>
  );
};

export default IMPMain;

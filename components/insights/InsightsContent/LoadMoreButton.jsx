// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const LoadMoreButton = ({ onLoadMore, loading }) => {
//   return (
//     <div className="w-full">
//       <div className="pb-10 flex justify-center">
//         <motion.a
//           href="javascript:void(0);"
//           onClick={(e) => {
//             e.preventDefault();
//             if (!loading) {
//               onLoadMore();
//             }
//           }}
//           className={`relative overflow-hidden bg-black border-2 border-black px-[40px] py-[14px] bw-m text-[16px] text-white transition-all duration-300 inline-block text-center ${
//             loading
//               ? "opacity-50 cursor-not-allowed pointer-events-none"
//               : "cursor-pointer hover:bg-white hover:text-black"
//           }`}
//         >
//           <span className="relative z-10">
//             {loading ? "Loading..." : "LOAD MORE"}
//           </span>
//         </motion.a>
//       </div>
//     </div>
//   );
// };

// export default LoadMoreButton;

"use client";
import React from "react";
import { motion } from "framer-motion";

const LoadMoreButton = ({ onLoadMore, loading }) => {
  return (
    <div className="w-full">
      <div className="pb-10 flex justify-center">
        <motion.a
          href="javascript:void(0);"
          onClick={(e) => {
            e.preventDefault();
            if (!loading) {
              onLoadMore();
            }
          }}
          className={`relative overflow-hidden bg-black border-2 border-black px-[40px] py-[14px] bw-m text-[16px] text-white transition-all duration-300 inline-block text-center ${
            loading
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : "cursor-pointer hover:bg-white hover:text-black"
          }`}
        >
          <span className="relative z-10">
            {loading ? "Loading..." : "LOAD MORE"}
          </span>
        </motion.a>
      </div>
    </div>
  );
};

export default LoadMoreButton;

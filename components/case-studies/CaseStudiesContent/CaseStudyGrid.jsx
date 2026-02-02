// "use client";
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import CaseStudyCard from "./CaseStudyCard";

// // Skeleton shimmer animation
// const SkeletonCard = () => {
//   return (
//     <div className="group cursor-pointer bg-white border-b border-[#c3c3c3] md:border-b-0">
//       <div className="relative overflow-hidden bg-white border border-[#c3c3c3] max-w-full animate-pulse">
//         {/* Skeleton Image Section */}
//         <div className="relative w-full h-[410px] overflow-hidden bg-[#e8e8e8]">
//           <div className="absolute top-[16px] left-[16px] w-[70px] h-[28px] bg-[#d1d1d1] rounded-sm shimmer" />
//         </div>

//         {/* Skeleton Content Section */}
//         <div
//           className="relative px-[16px] py-[20px] flex flex-col"
//           style={{ height: `240px` }}
//         >
//           {/* Date */}
//           <div className="w-[160px] h-[24px] bg-[#e6e6e6] rounded-md mb-[20px] shimmer" />

//           <div className="flex-1" />

//           {/* Title lines */}
//           <div className="absolute left-[16px] right-[16px] bottom-[22px] space-y-3">
//             <div className="h-[28px] bg-[#e6e6e6] rounded-md shimmer" />
//             <div className="h-[28px] bg-[#e6e6e6] rounded-md shimmer w-[80%]" />
//           </div>

//           {/* Read More Placeholder */}
//           <div
//             className="absolute left-[16px] right-[16px] opacity-0 pointer-events-none"
//             style={{ bottom: "16px" }}
//           >
//             <div className="w-[157px] h-[56px] bg-[#f1f1f1] border border-[#dcdcdc] rounded-md shimmer" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add shimmer effect style
// const shimmerStyle = `
// @keyframes shimmerMove {
//   0% { background-position: -200% 0; }
//   100% { background-position: 200% 0; }
// }
// .shimmer {
//   background: linear-gradient(
//     110deg,
//     #e8e8e8 8%,
//     #f5f5f5 18%,
//     #e8e8e8 33%
//   );
//   background-size: 200% 100%;
//   animation: shimmerMove 1.8s ease-in-out infinite;
// }
// `;

// const CaseStudyGrid = ({ caseStudies = [], activeTab, loading = false }) => {
//   const isEmpty = !caseStudies || caseStudies.length === 0;

//   if (loading) {
//     return (
//       <>
//         <style>{shimmerStyle}</style>
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{ opacity: loading ? 1 : 0 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//           className="w-full"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[40px] min-w-0">
//             {[1, 2, 3].map((i) => (
//               <SkeletonCard key={i} />
//             ))}
//           </div>
//         </motion.div>
//       </>
//     );
//   }

//   if (isEmpty) {
//     return (
//       <div className="text-center py-[60px]">
//         <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
//           No {activeTab.toLowerCase()} found
//         </div>
//         <div className="bw-r text-[16px] text-[#999999]">
//           Try adjusting your filters or check back later.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       <style>{shimmerStyle}</style>
//       <AnimatePresence>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[40px] min-w-0">
//           {caseStudies.map((caseStudy, index) => (
//             <motion.div key={caseStudy.id || index}>
//               <CaseStudyCard caseStudy={caseStudy} activeTab={activeTab} />
//             </motion.div>
//           ))}
//         </div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CaseStudyGrid;

"use client";
import React, { useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";

// Skeleton shimmer animation
const SkeletonCard = () => {
  return (
    <div className="group cursor-pointer bg-white border-b border-[#c3c3c3] md:border-b-0">
      <div className="relative overflow-hidden bg-white border border-[#c3c3c3] max-w-full animate-pulse">
        <div className="relative w-full h-[410px] overflow-hidden bg-[#e8e8e8]">
          <div className="absolute top-[16px] left-[16px] w-[70px] h-[28px] bg-[#d1d1d1] rounded-sm shimmer" />
        </div>
        <div
          className="relative px-[16px] py-[20px] flex flex-col"
          style={{ height: `240px` }}
        >
          <div className="w-[160px] h-[24px] bg-[#e6e6e6] rounded-md mb-[20px] shimmer" />
          <div className="flex-1" />
          <div className="absolute left-[16px] right-[16px] bottom-[22px] space-y-3">
            <div className="h-[28px] bg-[#e6e6e6] rounded-md shimmer" />
            <div className="h-[28px] bg-[#e6e6e6] rounded-md shimmer w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const shimmerStyle = `
@keyframes shimmerMove {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.shimmer {
  background: linear-gradient(
    110deg,
    #e8e8e8 8%,
    #f5f5f5 18%,
    #e8e8e8 33%
  );
  background-size: 200% 100%;
  animation: shimmerMove 1.8s ease-in-out infinite;
}
`;

const CaseStudyGrid = ({ caseStudies = [], activeTab, loading = false }) => {
  // --- ADDED THIS EFFECT ---
  // This ensures that if the user linked to #client-testimonials,
  // the page re-calculates the scroll position after the grid finishes loading.
  useEffect(() => {
    if (!loading && window.location.hash === "#client-testimonials") {
      const element = document.getElementById("client-testimonials");
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [loading]);
  // -------------------------

  const isEmpty = !caseStudies || caseStudies.length === 0;

  if (loading) {
    return (
      <>
        <style>{shimmerStyle}</style>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[40px] min-w-0">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </motion.div>
      </>
    );
  }

  if (isEmpty) {
    return (
      <div className="text-center py-[60px]">
        <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
          No {activeTab.toLowerCase()} found
        </div>
        <div className="bw-r text-[16px] text-[#999999]">
          Try adjusting your filters or check back later.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <style>{shimmerStyle}</style>
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[40px] min-w-0">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id || index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <CaseStudyCard caseStudy={caseStudy} activeTab={activeTab} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CaseStudyGrid;

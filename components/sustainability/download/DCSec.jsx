// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import PopForm from "./PopForm"; // import popup form

// const DCSec = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="flex flex-col relative !z-10">
//       <div className="md:h-24 h-12 relative !z-10">
//         <img
//           src="/sustainability/bird.svg"
//           alt=""
//           className="w-auto h-12 md:h-24 ml-0 md:ml-6"
//         />
//       </div>

//       <div className="flex items-center justify-center lg:flex-nowrap flex-wrap gap-3 xl:gap-6">
//         {/* Sustainability Report */}
//         <div className="flex-1 flex flex-col lg:gap-5 items-center justify-center h-[180px] xl:h-[250px] border border-[#D4D4D4] bg-white p-4">
//           <img
//             src="/sustainability/b3.svg"
//             className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
//             alt="Bridge"
//           />
//           <Link
//             href="/sustain_pdf/ESG-Report-FY25.pdf"
//             target="_blank"
//             download="HIP_Sustainability_Report_FY25.pdf"
//             className="uppercase gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit"
//           >
//             <span className="bw-m text-[16px] leading-[16px]">
//               sustainability report
//             </span>
//             <img
//               src="/sustainability/down.svg"
//               className="xl:w-[34px] w-[20px]"
//               alt="Download"
//             />
//           </Link>
//         </div>

//         {/* ESG Policies */}
//         <div className="xl:flex-[0.8] flex-1 flex flex-col lg:gap-5 items-center justify-center h-[180px] xl:h-[250px] border border-[#D4D4D4] bg-white p-4">
//           <img
//             src="/sustainability/b2.svg"
//             className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
//             alt="Bridge"
//           />
//           <Link
//             href="/sustain_pdf/ESG-Policy-FY25.pdf"
//             target="_blank"
//             download="HIP_Sustainability_policy_FY25.pdf"
//             className="uppercase gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit"
//           >
//             <span className="bw-m text-[16px] leading-[16px]">
//               ESG POLICIES
//             </span>
//             <img
//               src="/sustainability/down.svg"
//               className="xl:w-[34px] w-[20px]"
//               alt="Download"
//             />
//           </Link>
//         </div>

//         {/* Compliance Reports */}
//         <div className="flex-1 md:max-w-1/2 flex flex-col lg:gap-5 items-center justify-center h-[180px] xl:h-[250px] border border-[#D4D4D4] bg-white p-4">
//           <img
//             src="/sustainability/b1.svg"
//             className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
//             alt="Bridge"
//           />
//           <button
//             onClick={() => setShowForm(true)}
//             className="uppercase cursor-pointer gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit"
//           >
//             <span className="bw-m text-[16px] leading-[16px]">
//               Compliance Reports
//             </span>
//             <img
//               src="/sustainability/down.svg"
//               className="xl:w-[34px] w-[20px]"
//               alt="Download"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Popup */}
//       {showForm && (
//         <div className="fixed inset-0 bg-[#00000090] flex items-center justify-center z-[50000000000000000000000000]">
//           <PopForm onClose={() => setShowForm(false)} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DCSec;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PopForm from "./PopForm"; // import popup form

const DCSec = () => {
  const [showForm, setShowForm] = useState(false);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <div className="flex -scroll-mt-20 flex-col relative !z-10">
      <div className="md:h-24 h-12 relative !z-10">
        <img
          src="/sustainability/bird.svg"
          alt=""
          className="w-auto h-12 md:h-24 ml-0 md:ml-6"
        />
      </div>

      <div className="flex items-center justify-center lg:flex-nowrap flex-wrap gap-3 xl:gap-6">
        {/* Sustainability Report */}
        <div className="flex-1 flex flex-col lg:gap-5 items-center justify-center h-[180px] xl:h-[250px] border border-[#D4D4D4] bg-white p-4">
          <img
            src="/sustainability/b3.svg"
            className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
            alt="Bridge"
          />
          <Link
            href="/sustainability-reports/ESG-Report-FY25.pdf"
            target="_blank"
            download="HIP_Sustainability_Report_FY25.pdf"
            className="uppercase gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit"
          >
            <span className="bw-m text-[16px] leading-[16px]">
              sustainability report
            </span>
            <img
              src="/sustainability/down.svg"
              className="xl:w-[34px] w-[20px]"
              alt="Download"
            />
          </Link>
        </div>

        {/* ESG Policies */}
        <div className="xl:flex-[0.8] flex-1 flex flex-col lg:gap-5 items-center justify-center h-[180px] xl:h-[250px] border border-[#D4D4D4] bg-white p-4">
          <img
            src="/sustainability/b2.svg"
            className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
            alt="Bridge"
          />
          <Link
            href="/sustainability-reports/ESG-Policy-FY25.pdf"
            target="_blank"
            download="HIP_Sustainability_policy_FY25.pdf"
            className="uppercase gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit"
          >
            <span className="bw-m text-[16px] leading-[16px]">
              ESG POLICIES
            </span>
            <img
              src="/sustainability/down.svg"
              className="xl:w-[34px] w-[20px]"
              alt="Download"
            />
          </Link>
        </div>

        {/* Compliance Reports */}
        <div className="flex-1 md:max-w-1/2 flex flex-col lg:gap-5 items-center justify-center h-[180px] xl:h-[250px] border border-[#D4D4D4] bg-white p-4">
          <img
            src="/sustainability/b1.svg"
            className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
            alt="Bridge"
          />
          <button
            onClick={() => setShowForm(true)}
            className="uppercase cursor-pointer gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit"
          >
            <span className="bw-m text-[16px] leading-[16px]">
              Compliance Reports
            </span>
            <img
              src="/sustainability/down.svg"
              className="xl:w-[34px] w-[20px]"
              alt="Download"
            />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-[#00000090] flex items-center justify-center z-[5000]">
          <PopForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
};

export default DCSec;

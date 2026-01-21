// "use client";
// import React from "react";
// import TransitionLink from "@/src/app/TransitionLink";

// const CapOverView = ({ setIsNavOpen, isNavOpen }) => {
//   return (
//     <div className="flex w-full h-fit overflow-hidden pt-5 1440:w-[1340px] 1440:mx-auto 1440:pr-0 pr-[max(5%,calc((100vw-1340px)/2))]">
//       {/* Left gradient + image */}
//       <div
//         className="w-[30%] flex flex-col justify-between p-10 min-h-screen"
//         style={{
//           background:
//             "linear-gradient(-245deg, #8F53A1 19.06%, #F47922 105.78%)",
//         }}
//       >
//         <div className="flex flex-col gap-[29px]">
//           <img
//             src="/network_overview_menu.webp"
//             alt="Capabilities Overview"
//             className="w-[325px] h-[200px] object-cover"
//           />
//           <div className="relative z-10 flex items-center w-full justify-between cursor-pointer">
//             <TransitionLink
//               href="/network-overview"
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               className="text-white text-[28px] font-medium underline"
//             >
//               Capabilities Overview
//             </TransitionLink>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="50"
//               height="50"
//               viewBox="0 0 50 50"
//               fill="none"
//             >
//               <path
//                 d="M13.3281 36.666L36.6615 13.3326"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M13.3281 13.3326H36.6615V36.666"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Right side – EXACT match to your screenshot */}
//       <div className="flex-1 bg-white pl-6 2xl:pl-12 pt-12 pb-20 flex">
//         <div className="flex-1 flex gap-20">
//           {/* Left column: Industrial Facilities */}
//           <div className="flex-1">
//             <h2 className="text-[32px] font-bold text-black mb-12">
//               Industrial Facilities
//             </h2>

//             <div className="space-y-16">
//               {/* InCity Centers */}
//               <div>
//                 <h3 className="flex w-full justify-between items-center px-6 py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] 1440:text-[20px] 1440:leading-[26px]">
//                   InCity Centers
//                 </h3>
//               </div>

//               {/* Fulfilment Centers */}
//               <div>
//                 <h3 className="flex w-full justify-between items-center px-6 py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] 1440:text-[20px] 1440:leading-[26px]">
//                   Fulfilment Centers
//                 </h3>
//               </div>
//             </div>
//           </div>

//           {/* Right column: Sectors Specialists – EXACT content & layout */}
//           <div className="w-[460px] bg-[#F7F7F7] p-10">
//             <h3 className="text-[20px] font-bold text-black mb-10">
//               Sectors Specialists
//             </h3>

//             <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-[15px] leading-tight text-[#4D4D4D]">
//               <TransitionLink
//                 href="/"
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 className="hover:text-[#F47922] transition-colors"
//               >
//                 Automotive and Auto Components
//               </TransitionLink>
//               <TransitionLink
//                 href="/"
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 className="hover:text-[#F47922] transition-colors"
//               >
//                 Engineering and Aerospace
//               </TransitionLink>

//               <TransitionLink
//                 href="/"
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 className="hover:text-[#F47922] transition-colors"
//               >
//                 Logistics and Supply Chain
//               </TransitionLink>
//               <TransitionLink
//                 href="/"
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 className="hover:text-[#F47922] transition-colors"
//               >
//                 Packaging
//               </TransitionLink>

//               <TransitionLink
//                 href="/"
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 className="hover:text-[#F47922] transition-colors"
//               >
//                 Chemicals
//               </TransitionLink>
//               <TransitionLink
//                 href="/"
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 className="hover:text-[#F47922] transition-colors"
//               >
//                 FMCG and Retail
//               </TransitionLink>

//               <TransitionLink
//                 href="/"
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 className="hover:text-[#F47922] transition-colors"
//               >
//                 Renewable Energy
//               </TransitionLink>
//               <TransitionLink
//                 href="/"
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 className="hover:text-[#F47922] transition-colors"
//               >
//                 Ecommerce
//               </TransitionLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CapOverView;
"use client";
import React from "react";
import TransitionLink from "@/src/app/TransitionLink";

const CapOverView = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <div className="flex w-full h-[400px] overflow-hidden pt-5 1440:pr-0 pr-[5%]">
      {/* Left gradient + image */}
      <div
        className="1440:w-[25%] w-[25%] flex flex-col justify-between p-10"
        style={{
          background:
            "linear-gradient(-245deg, #8F53A1 19.06%, #F47922 105.78%)",
        }}
      >
        <div className="flex flex-col gap-[29px]">
          <img
            src="/cov.webp"
            alt="Capabilities Overview"
            className="w-full h-fit object-cover"
          />
          <div className="relative z-10 flex items-center w-full justify-between cursor-pointer">
            <TransitionLink
              href="/capabilities-overview/"
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="text-white text-[22px] bw-m underline text-left"
            >
              Capabilities Overview
            </TransitionLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M13.3281 36.666L36.6615 13.3326"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3281 13.3326H36.6615V36.666"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Right side – EXACT match to your screenshot */}
      <div className="flex-1 bg-white pl-6 1440:pl-7 flex">
        <div className="flex-1 flex gap-10 1440:gap-10">
          {/* Left column: Industrial Facilities */}
          <div className="flex-1 flex flex-col space-y-10">
            <TransitionLink
              href="/fulfillment/"
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="flex w-full justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
            >
              Fulfilment Centers
            </TransitionLink>
            <TransitionLink
              href="/factory-and-inplant-solutions/"
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="flex w-full justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
            >
              Industrial Facilities
            </TransitionLink>

            {/* InCity Centers */}
            <TransitionLink
              href="/incity-centers/"
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="flex w-full justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
            >
              InCity Centers
            </TransitionLink>
          </div>

          {/* Fulfilment Centers */}

          {/* Right column: Sectors Specialists */}
          <div className="w-[65%] mb-14 h-fit bg-[#F7F7F7]">
            <TransitionLink
              href="/sector-specialists/"
              className="flex w-full justify-between items-center px-5 1440:px-6 py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#000] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
            >
              Sectors Specialists
            </TransitionLink>

            <div className="flex gap-1 w-full justify-between">
              {/* Automotive and Auto Components */}

              <div className="w-full">
                <TransitionLink
                  href="/automotive/"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Automotive & Auto Components
                </TransitionLink>
                <TransitionLink
                  href="/logistics/"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Logistics & Supply Chain
                </TransitionLink>
                <TransitionLink
                  href="/chemical/"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Chemicals
                </TransitionLink>
                <TransitionLink
                  href="/renewable-energy/"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Renewable Energy
                </TransitionLink>
              </div>
              <div className="w-full">
                <TransitionLink
                  href="/aerospace/"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Engineering & Aerospace
                </TransitionLink>
                <TransitionLink
                  href="/packaging/"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Packaging
                </TransitionLink>
                <TransitionLink
                  href="/fmcg/"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  FMCG & Retail
                </TransitionLink>
                <TransitionLink
                  href="/ecommerce/"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Ecommerce
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapOverView;

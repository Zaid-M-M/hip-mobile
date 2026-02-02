// old code
// "use client";
// import React from "react";
// import TransitionLink from "@/src/app/TransitionLink";

// const KnowUsOverView = ({ setIsNavOpen, isNavOpen }) => {
//   return (
//     <div className="flex w-full h-[400px] overflow-hidden pt-5 1440:pr-0 pr-[5%]">
//       {/* Right side */}
//       <div className="flex-1 bg-white pl-6 1440:pl-7 flex">
//         <div className="flex-1 flex gap-10 1440:gap-10">
//           {/* Left column */}
//           <div className="flex-1 flex flex-col space-y-10">
//             <TransitionLink
//               href="/culture/"
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               className="flex w-full justify-between items-center px-5 1440:px-[20px] py-3 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px] group"
//             >
//               Culture
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="transform transition-transform duration-200 group-hover:translate-x-1"
//               >
//                 <path
//                   d="M9 18L15 12L9 6"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </TransitionLink>
//             <TransitionLink
//               href="/contact/"
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               className="flex w-full justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px] group"
//             >
//               Contact
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="transform transition-transform duration-200 group-hover:translate-x-1"
//               >
//                 <path
//                   d="M9 18L15 12L9 6"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </TransitionLink>
//           </div>

//           {/* Right column */}
//           <div className="w-[65%] mb-14 h-fit bg-[#F7F7F7]">
//             <TransitionLink
//               href="/about-us/"
//               className="flex w-full justify-between items-center px-5 1440:px-6 py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#000] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
//             >
//               Know Us
//             </TransitionLink>

//             <div className="flex gap-1 w-full justify-between">
//               <div className="w-full">
//                 <TransitionLink
//                   href="/about-us/#about"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   About Us
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/about-us/#vision"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Vision & Mission
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/about-us/#leadership"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Leadership
//                 </TransitionLink>
//               </div>
//               <div className="w-full">
//                 <TransitionLink
//                   href="/about-us/#history"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Our History
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/about-us/#values"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Our Values
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/about-us/#team"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Our Team
//                 </TransitionLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KnowUsOverView;
// final code
"use client";
import React from "react";
import TransitionLink from "@/src/app/TransitionLink";

const KnowUsOverView = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <div className="flex w-full h-[400px] overflow-hidden pt-5 1440:pr-0 pr-[5%]">
      {/* Left gradient + image */}
      {/* <div
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
      </div> */}

      {/* Right side – EXACT match to your screenshot */}
      <div className="flex-1 bg-white pl-0 1440:pl-0 flex">
        <div className="flex-1 flex gap-10 1440:gap-10 flex-row-reverse">
          {/* Left column: Industrial Facilities */}
          <div className="flex-1 flex flex-col space-y-10">
            <TransitionLink
              href="/culture/"
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="flex w-[70%] justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
            >
              Culture
            </TransitionLink>
            <TransitionLink
              href="/contact/"
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="flex w-[70%] justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
            >
              Contact Us
            </TransitionLink>

            {/* InCity Centers */}
            {/* <TransitionLink
              href="/incity-centers/"
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="flex w-full justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
            >
              InCity Centers
            </TransitionLink> */}
          </div>

          {/* Fulfilment Centers */}

          {/* Right column: Sectors Specialists */}
          <div className="w-[55%] mb-10 h-fit bg-[#F7F7F7]">
            <TransitionLink
              href="/know-us/"
              className="flex w-full justify-between items-center px-5 1440:px-6 py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#000] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
            >
              Know Us
            </TransitionLink>

            <div className="flex gap-1 w-full justify-between mb-9">
              {/* Automotive and Auto Components */}

              <div className="w-full">
                <TransitionLink
                  href="/know-us/#know-us"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-3 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Overview
                </TransitionLink>
                <TransitionLink
                  href="/know-us/#mission-vision"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-3 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Values, Mission & Vision
                </TransitionLink>
                <TransitionLink
                  href="/know-us/#key-milestones"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-3 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Key Milestones
                </TransitionLink>
                <TransitionLink
                  href="/know-us/#board-of-directors"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-3 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Board of Directors
                </TransitionLink>
              </div>
              <div className="w-full">
                <TransitionLink
                  href="/know-us/#board-committees"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-3 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Board Committees
                </TransitionLink>
                <TransitionLink
                  href="/know-us/#leadership"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-3 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Leadership Team
                </TransitionLink>
                <TransitionLink
                  href="/know-us/#career"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-3 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Career
                </TransitionLink>
                <TransitionLink
                  href="/know-us/#awards"
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-3 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
                >
                  Awards
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowUsOverView;

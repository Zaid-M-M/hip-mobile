// import TransitionLink from "@/src/app/TransitionLink";
// import React from "react";

// const State = ({ isNavOpen, setIsNavOpen }) => {
//   return (
//     <div className="flex w-full justify-between h-fit flex-wrap gap-4">
//       {/* Delhi */}
//       <div className="text-black h-fit text-[14px] bw-m p-2">
//         <h4 className="mb-1">
//           <TransitionLink
//             isNavOpen={isNavOpen}
//             setIsNavOpen={setIsNavOpen}
//             href="/delhi"
//             className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
//           >
//             Delhi
//           </TransitionLink>
//         </h4>
//         <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/incity-alipur-i"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Alipur I
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/incity-alipur-ii"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Alipur II
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/kirti-nagar"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Kirti Nagar
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/narela"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Narela
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/okhla-1"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Okhla I
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/okhla-2"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Okhla II
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/rp-bagh"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               RP Bagh
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/sahibabad-2"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Sahibabad II
//             </TransitionLink>
//           </li>
//         </ul>
//       </div>

//       {/* Haryana */}
//       <div className="text-black h-fit text-[14px] bw-m p-2">
//         <h4 className="mb-1">
//           <TransitionLink
//             isNavOpen={isNavOpen}
//             setIsNavOpen={setIsNavOpen}
//             href="/haryana"
//             className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
//           >
//             Haryana
//           </TransitionLink>
//         </h4>
//         <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/warehousing-park-farukhnagar-i"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Farukhnagar I
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/warehousing-park-farukhnagar-ii"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Farukhnagar II
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-bilaspur"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Bilaspur
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/warehousing-park-koka"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Koka
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/warehousing-park-luhari-delhi-ncr"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Luhari
//             </TransitionLink>
//           </li>

//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/Gurugram"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Gurugram
//             </TransitionLink>
//           </li>
//         </ul>
//       </div>

//       {/* GOA AND GUJARAT */}
//       <div className="flex h-fit flex-col gap-4">
//         {/* Goa */}
//         <div className="text-black h-fit text-[14px] bw-m p-2">
//           <h4 className="mb-1">
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/goa"
//               className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
//             >
//               Goa
//             </TransitionLink>
//           </h4>
//           <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
//             <li>
//               <TransitionLink
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 href="/industrial-and-warehousing-park-verna"
//                 className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//               >
//                 Verna
//               </TransitionLink>
//             </li>
//           </ul>
//         </div>

//         {/* Gujarat */}
//         <div className="text-black h-fit text-[14px] bw-m p-2">
//           <h4 className="mb-1">
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/gujarat"
//               className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
//             >
//               Gujarat
//             </TransitionLink>
//           </h4>
//           <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
//             <li>
//               <TransitionLink
//                 isNavOpen={isNavOpen}
//                 setIsNavOpen={setIsNavOpen}
//                 href="/industrial-and-warehousing-park-bhayala"
//                 className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//               >
//                 Bhayala
//               </TransitionLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Maharashtra */}
//       <div className="text-black h-fit text-[14px] bw-m p-2">
//         <h4 className="mb-1">
//           <TransitionLink
//             isNavOpen={isNavOpen}
//             setIsNavOpen={setIsNavOpen}
//             href="/maharashtra"
//             className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
//           >
//             Maharashtra
//           </TransitionLink>
//         </h4>
//         <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-chakan-ii"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Chakan II
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-chakan-v"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Chakan V
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/talegaon"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Talegaon
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/bhiwandi"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Bhiwandi
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/nashik"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Nashik
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/xsio-park-one"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               XSIO Park One
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/xsio-park-two"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               XSIO Park Two
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/xsio-park-three"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               XSIO Park Three
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/horizon-incity-kurla"
//               className="hover:text-[#F47922] transition-colors duration-200"
//             >
//               Kurla
//             </TransitionLink>
//           </li>

//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/horizon-incity-pimpri"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Pimpri
//             </TransitionLink>
//           </li>

//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/thane"
//               className="hover:text-[#F47922] transition-colors duration-200"
//             >
//               Thane
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/vardhaman-nagar"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Vardhaman Nagar
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/vashi"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Vashi
//             </TransitionLink>
//           </li>
//         </ul>
//       </div>

//       {/* Karnataka */}
//       <div className="text-black h-fit text-[14px] bw-m p-2">
//         <h4 className="mb-1">
//           <TransitionLink
//             isNavOpen={isNavOpen}
//             setIsNavOpen={setIsNavOpen}
//             href="/karnataka"
//             className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
//           >
//             Karnataka
//           </TransitionLink>
//         </h4>
//         <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-dobbaspet-i"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Dobbaspet I
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-dobbaspet-ii"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Dobbaspet II
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/warehousing-park-malur"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Malur
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/hoskote"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Hoskote
//             </TransitionLink>
//           </li>

//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/yeshwantpur"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Yeshwantpur
//             </TransitionLink>
//           </li>
//         </ul>
//       </div>

//       {/* Tamil Nadu */}
//       <div className="text-black h-fit text-[14px] bw-m p-2">
//         <h4 className="mb-1">
//           <TransitionLink
//             isNavOpen={isNavOpen}
//             setIsNavOpen={setIsNavOpen}
//             href="/tamil-nadu"
//             className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
//           >
//             Tamil Nadu
//           </TransitionLink>
//         </h4>
//         <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-chengalpattu"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Chengalpattu
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-redhills-i"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Redhills-I
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-hosur"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Hosur
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehouse-park-mappedu-chennai"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Mappedu
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehouse-park-mwc-chennai"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               MWC
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="#"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Oragadam
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/chromepet"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Chromepet
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/incity-centers/virugambakkam"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Virugambakkam
//             </TransitionLink>
//           </li>
//         </ul>
//       </div>

//       {/* Telangana */}
//       <div className="text-black h-fit text-[14px] bw-m p-2">
//         <h4 className="mb-1">
//           <TransitionLink
//             isNavOpen={isNavOpen}
//             setIsNavOpen={setIsNavOpen}
//             href="/telangana"
//             className="hover:text-[#F47922] bw-sb transition-colors duration-200 underline"
//           >
//             Telangana
//           </TransitionLink>
//         </h4>
//         <ul className="text-[#4D4D4D] space-y-1 cursor-pointer text-[14px] bw-r">
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-kothur"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Kothur
//             </TransitionLink>
//           </li>
//           <li>
//             <TransitionLink
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               href="/industrial-and-warehousing-park-patancheru"
//               className="hover:text-[#F47922] whitespace-nowrap transition-colors duration-200"
//             >
//               Patancheru
//             </TransitionLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default State;

import TransitionLink from "@/src/app/TransitionLink";
import React from "react";
const State = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <TransitionLink
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        href="/delhi/"
        className="hover:text-[#F47922] text-black   text-[16px] transition-colors text-left duration-200 underline px-2 py-1 "
      >
        Delhi
      </TransitionLink>
      <TransitionLink
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        href="/haryana/"
        className="hover:text-[#F47922] text-black  text-[16px] transition-colors text-left duration-200 underline px-2 py-1"
      >
        Haryana
      </TransitionLink>
      <TransitionLink
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        href="/goa/"
        className="hover:text-[#F47922] text-black  text-[16px] transition-colors text-left duration-200 underline px-2 py-1"
      >
        Goa
      </TransitionLink>
      <TransitionLink
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        href="/gujarat/"
        className="hover:text-[#F47922] text-black  text-[16px] transition-colors text-left duration-200 underline px-2 py-1"
      >
        Gujarat
      </TransitionLink>
      <TransitionLink
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        href="/maharashtra/"
        className="hover:text-[#F47922] text-black  text-[16px] transition-colors text-left duration-200 underline px-2 py-1"
      >
        Maharashtra
      </TransitionLink>
      <TransitionLink
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        href="/karnataka/"
        className="hover:text-[#F47922] text-black  text-[16px] transition-colors text-left duration-200 underline px-2 py-1"
      >
        Karnataka
      </TransitionLink>
      <TransitionLink
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        href="/tamil-nadu/"
        className="hover:text-[#F47922] text-black  text-[16px] transition-colors text-left duration-200 underline px-2 py-1"
      >
        Tamil Nadu
      </TransitionLink>
      <TransitionLink
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        href="/telangana/"
        className="hover:text-[#F47922] text-black  text-[16px] transition-colors text-left duration-200 underline px-2 py-1"
      >
        Telangana
      </TransitionLink>
    </div>
  );
};
export default State;

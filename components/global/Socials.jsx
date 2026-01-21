// // import Image from 'next/image'
// // import React from 'react'

// // const socials = [
// //   { name: 'LinkedIn', link: '#' },
// //   { name: 'Facebook', link: '#' },
// //   { name: 'YouTube', link: '#' },
// //   { name: 'Instagram', link: '#' },
// //   { name: 'Map', link: '#' },
// // ]

// // const Socials = () => {
// //   const socials = [
// //     { name: 'LinkedIn', link: '#' },
// //     { name: 'Facebook', link: '#' },
// //     { name: 'YouTube', link: '#' },
// //     { name: 'Instagram', link: '#' },
// //     { name: 'Map', link: '#' },
// //   ]

// //   return (
// //     <div className='h-[146px] bg-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-b border-[#CDCDCD]'>
// //       {socials.map((social, i) => (
// //         <a
// //           href={social.link}
// //           key={i}
// //           className='group flex flex-col gap-[20px] p-[20px] transition-all duration-300 hover:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)]'
// //         >
// //           <span className='flex justify-end'>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               width="26"
// //               height="26"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="#8F53A1"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               className='transition-all duration-300 group-hover:stroke-white'
// //             >
// //               <line x1="5" y1="12" x2="19" y2="12" />
// //               <polyline points="12 5 19 12 12 19" />
// //             </svg>
// //           </span>
// //           <h2 className='bw-r text-[30px] tion-all duration-300 group-hover:text-white'>
// //             {social.name}
// //           </h2>
// //         </a>
// //       ))}
// //     </div>
// //   )
// // }

// // export default Socials

// import Link from 'next/link'
// import React from 'react'

// const Socials = () => {
//   const socials = [
//     { name: 'LinkedIn', link: '#' },
//     { name: 'Facebook', link: '#' },
//     { name: 'YouTube', link: '#' },
//     { name: 'Instagram', link: '#' },
//     { name: 'Map', link: '#' },
//   ]

//   return (
//     <div className='h-[146px] bg-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-b border-[#CDCDCD]'>
//       {socials.map((social, i) => (
//         <Link
//           href={social.link}
//           key={i}
//           className='group flex flex-col gap-[20px] p-[20px] transition-all duration-300 hover:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)]'
//         >
//           <span className='flex justify-end w-[50px] h-[50px]'>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="50"
//               height="50"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#8F53A1"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className='transition-all duration-300 group-hover:stroke-white'
//             >
//               <line x1="7" y1="17" x2="17" y2="7" />
//               <polyline points="7 7 17 7 17 17" />
//             </svg>
//           </span>
//           <h2 className='bw-r text-[30px] tion-all duration-300 group-hover:text-white'>
//             {social.name}
//           </h2>
//         </Link>
//       ))}
//     </div>
//   )
// }

// export default Socials

import Link from "next/link";
// import Image from "next/image";
import React from "react";

const Socials = () => {
  const socials = [
    {
      name: "LinkedIn",
      link: "https://in.linkedin.com/company/horizon-industrial-parks",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/horizonindustrialparks/",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCOfvGN61RBCKY48sE8I6mJQ",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/horizonindustrialparks/",
    },
  ];

  return (
    // <div className=" h-full w-full xl:h-[146px] bg-white grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 border-b border-[#CDCDCD]">
    //   {socials.map((social, i) => (
    //     <Link
    //       href={social.link}
    //       key={i}
    //       target="_blank"
    //       className="group flex flex-col-reverse justify-between p-[20px] border-r border-[#CDCDCD] transition-all duration-300 hover:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)]"
    //     >
    //       <h2 className="bw-r text-[30px] black transition-colors duration-300 ease-in-out group-hover:text-white will-change-[color] backface-hidden">
    //         {social.name}
    //       </h2>

    //       <span className="w-[50px] h-[50px] md:w-full flex items-end justify-end relative">
    //         <Image
    //           src="/external.svg"
    //           alt="external icon"
    //           height={50}
    //           width={50}
    //           className="absolute transition-opacity duration-300 group-hover:opacity-0"
    //         />
    //         <Image
    //           src="/whiteexternal.svg"
    //           alt="external icon hover"
    //           height={50}
    //           width={50}
    //           className="transition-opacity duration-300 opacity-0 group-hover:opacity-100"
    //         />
    //       </span>

    //       {/* <span className='w-[50px] h-[50px] md:w-full flex items-end justify-end'> */}
    //       {/* <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="50"
    //           height="50"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="#8F53A1"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className='transition-all duration-300 group-hover:stroke-white'
    //         >
    //           <line x1="7" y1="17" x2="17" y2="7" />
    //           <polyline points="7 7 17 7 17 17" />
    //         </svg> */}
    //       {/* <Image src={'/external.svg'} height={50} width={50} />
    //       </span> */}
    //     </Link>
    //   ))}
    // </div>
    // <div className="h-full w-full xl:h-[146px] bg-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 border-b border-[#CDCDCD]">
    //   {socials.map((social, i) => (
    //     <Link
    //       href={social.link}
    //       key={i}
    //       target="_blank"
    //       className={`group flex flex-col-reverse justify-between p-[16px] sm:p-[20px] transition-all duration-300 hover:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)] ${
    //         i !== socials.length - 1 ? "border-r border-[#CDCDCD]" : ""
    //       }
    //     ${i < socials.length - 1 ? "border-b border-[#CDCDCD]" : ""}`}
    //     >
    //       <h2 className="bw-r text-2xl md:text-[30px] black transition-colors duration-300 ease-in-out group-hover:text-white will-change-[color] backface-hidden">
    //         {social.name}
    //       </h2>

    //       <span className="sm:w-[50px] h-fit sm:h-[50px] w-full md:w-full flex items-end justify-end relative">
    //         <Image
    //           src="/external.svg"
    //           alt="external icon"
    //           width={40}
    //           height={40}
    //           className="absolute transition-opacity duration-300 group-hover:opacity-0
    // h-[30px] w-[30px] md:h-[40px] md:w-[40px]" // Mobile size (40px), Desktop size (50px)
    //         />

    //         <Image
    //           src="/whiteexternal.svg"
    //           alt="external icon hover"
    //           width={40} // default width for mobile
    //           height={40}
    //           className="transition-opacity duration-300 opacity-0 group-hover:opacity-100
    //  h-[30px] w-[30px] md:h-[40px] md:w-[40px]" // Mobile size (40px), Desktop size (50px)
    //         />
    //       </span>
    //     </Link>
    //   ))}
    // </div>
    // <div className="h-full w-full xl:h-[146px] bg-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 border-b border-[#CDCDCD]">
    // <div className="h-full w-full xl:h-[146px] bg-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 border-b border-[#CDCDCD]">
    //   {socials.map((social, i) => (
    // <Link
    //   href={social.link}
    //   key={i}
    //   target="_blank"
    //   className={`group flex flex-col-reverse justify-between p-[16px] sm:p-[20px] transition-all duration-300 hover:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)] active:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)] focus:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)] ${
    //     i !== socials.length - 1 ? "border-r border-[#CDCDCD]" : ""
    //   } ${i < socials.length - 1 ? "border-b border-[#CDCDCD]" : ""}`}
    // >
    // <Link
    //   href={social.link}
    //   key={i}
    //   target="_blank"
    //   className={`group flex flex-col-reverse justify-between p-[16px] sm:p-[20px] transition-all duration-300 hover:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)] border-r border-[#CDCDCD] border-b border-[#CDCDCD] last:border-r-0 last:lg:border-b-0`}
    // >
    // <div className="grid grid-cols-2 border-t border-l md:grid-cols-4">
    //   {socials.map((link, idx) => (
    //     <Link
    //       key={link.title}
    //       className={`border-r border-b p-4 ${
    //         idx >= socials.length - 2 ? "md:border-b-0" : ""
    //       }`}
    //     >
    //       <h2 className="bw-r text-2xl md:text-[30px] black transition-colors duration-300 ease-in-out group-hover:text-white will-change-[color] backface-hidden">
    //         {social.name}
    //       </h2>

    //       <span className="sm:w-[50px] h-fit sm:h-[50px] w-full md:w-full flex items-end justify-end relative">
    //         <Image
    //           src="/external.svg"
    //           alt="external icon"
    //           width={40}
    //           height={40}
    //           className="absolute transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 group-focus:opacity-0 h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
    //         />

    //         <Image
    //           src="/whiteexternal.svg"
    //           alt="external icon hover"
    //           width={40}
    //           height={40}
    //           className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
    //         />
    //       </span>
    //     </Link>
    //   ))}
    // </div>
    <div className="grid w-full grid-cols-2 lg:grid-cols-4">
      {socials.map((social, idx) => {
        const isLastInRow = (idx + 1) % 2 === 0 && idx < 4; // 2-cols mobile
        const isLastInRowLg = (idx + 1) % 4 === 0; // 4-cols on lg+
        return (
          // <Link
          //   key={social.name}
          //   href={social.link}
          //   target="_blank"
          //   className={`
          //     group flex flex-col-reverse justify-between
          //     p-[16px] sm:p-[20px]
          //     transition-all duration-500 ease-in-out
          //     hover:bg-gradient-to-r from-[#AC38D9] to-[#f47920]
          //     active:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)]
          //     border-b border-[#CDCDCD]
          //     ${!isLastInRow ? "border-r" : ""}
          //     ${!isLastInRowLg ? "lg:border-r" : ""}
          //     will-change-[background]
          //   `}
          // >
          //         <Link
          //           key={social.name}
          //           href={social.link}
          //           target="_blank"
          //           className={`
          //   gradient-hover group relative z-0
          //   flex flex-col-reverse justify-between
          //   p-[16px] sm:p-[20px]
          //   transition-colors duration-500 ease-in-out
          //   border-b border-[#CDCDCD]
          //   ${!isLastInRow ? "border-r" : ""}
          //   ${!isLastInRowLg ? "lg:border-r" : ""}
          // `}
          //         >
          //           {/* Text */}
          //           {/* <h2
          //             className="bw-r text-2xl md:text-[30px] tracking-tight
          //             transition-colors duration-300 ease-in-out group-hover:text-white"
          //           >
          //             {social.name}
          //           </h2> */}

          //           {/* <h2 className="bw-r text-2xl md:text-[30px] tracking-tight relative z-0 transition-colors duration-300 ease-in-out group-hover:text-white">
          //             {social.name}
          //           </h2> */}
          //           <h2
          //             className="bw-r text-2xl md:text-[30px] tracking-tight relative z-0
          //   transition-colors duration-300 ease-in-out
          //   group-hover:text-white group-active:text-white group-focus:text-white"
          //           >
          //             {social.name}
          //           </h2>

          //           {/* Icon */}
          //           <span className="sm:w-[50px] h-fit sm:h-[50px] w-full md:w-full flex items-end justify-end relative">
          //             <img
          //               src="/external.svg"
          //               alt="external icon"
          //               width={40}
          //               height={40}
          //               className="absolute transition-opacity duration-300 ease-in-out group-hover:opacity-0 h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
          //               style={{ willChange: "opacity" }}
          //             />
          //             <img
          //               src="/whiteexternal.svg"
          //               alt="external icon hover"
          //               width={40}
          //               height={40}
          //               className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
          //               style={{ willChange: "opacity" }}
          //             />
          //           </span>
          //         </Link>
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
            className={`
    group gradient-hover relative z-0
    flex flex-col-reverse justify-between
    p-[16px] sm:p-[20px]
    transition-colors duration-500
    border-b border-[#CDCDCD]
    focus:outline-none
    ${!isLastInRow ? "border-r" : ""}
    ${!isLastInRowLg ? "lg:border-r" : ""}
  `}
          >
            {/* Text */}
            <h2
              className="
      bw-r text-2xl md:text-[30px] tracking-tight relative z-0
      transition-colors duration-300 ease-in-out
      group-hover:text-white
      group-focus:text-white
    
    "
            >
              {social.name}
            </h2>

            {/* Icon */}
            <span className="sm:w-[50px] h-fit sm:h-[50px] w-full md:w-full flex items-end justify-end relative z-0">
              <img
                src="/external.svg"
                alt="external icon"
                width={40}
                height={40}
                className="
        absolute transition-opacity duration-300 ease-in-out
        group-hover:opacity-0
        group-focus:opacity-0
    
        h-[30px] w-[30px] md:h-[40px] md:w-[40px]
      "
                style={{ willChange: "opacity" }}
              />
              <img
                src="/whiteexternal.svg"
                alt="external icon hover"
                width={40}
                height={40}
                className="
        transition-opacity duration-300 ease-in-out
        opacity-0
        group-hover:opacity-100
        group-focus:opacity-100
      
        h-[30px] w-[30px] md:h-[40px] md:w-[40px]
      "
                style={{ willChange: "opacity" }}
              />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

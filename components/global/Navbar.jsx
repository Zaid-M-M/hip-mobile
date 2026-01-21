"use client";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import Image from "next/image";
import { motion } from "framer-motion";
// export default function Navbar() {
//   return (
//     <nav className="flex items-center justify-between h-[102px] fix">
//       <BrandLogo/>
//       <div className="">
//         <div className='w-[191px] h-[76px] flex gap-[10px] items-center justify-center'>
//       <div className="rounded-[5px] w-[40px] h-[40px] flex justify-center items-center bg-[#fff] shadow-[inset_0_0_0_1px_#252525]">
//   <Image src="/search.png" alt="search" width={18} height={18} />
// </div>

//        <div className='p-[12px] rounded-[5px] bg-black'>

//           <div className='flex items-center justify-between gap-[12px] '>
//             <div>
//             <h2 className='tracking-[3.3px] text-white inter-sb text-[10px]'>MENU</h2>
//             </div>
//             <div>
//               <Image width={16} height={16} alt='menu' src={'/menu.png'} />
//             </div>
//           </div>
//             </div>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ y: "-100px" }}
//       whileInView={{ y: 0 }}
//       transition={{ duration: 1.4, ease: [1, 0, 0.4, 1] }}
//       viewport={{ once: true, amount: 0 }}
//       className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[102px]  px-6"
//     >
//       <BrandLogo />
//       <div className="w-[191px] h-[76px] flex gap-[10px] items-center justify-center">
//         <div className="rounded-[5px] w-[40px] h-[40px] flex justify-center items-center bg-[#fff] shadow-[inset_0_0_0_1px_#252525]">
//           <Image src="/search.png" alt="search" width={18} height={18} />
//         </div>
//         <div className="p-[12px] rounded-[5px] bg-black">
//           <div className="flex items-center justify-between gap-[12px]">
//             <h2 className="tracking-[3.3px] text-white inter-sb text-[10px]">
//               MENU
//             </h2>
//             <Image width={16} height={16} alt="menu" src="/menu.png" />
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

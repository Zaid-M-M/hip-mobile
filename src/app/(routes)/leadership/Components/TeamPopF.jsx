// import { motion } from "framer-motion";

// const TeamPopF = ({ isOpen, onClose, member }) => {
//   if (!isOpen || !member) return null;

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/40 px-4 overflow-y-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="relative w-full max-w-[1200px] bg-white p-5 xl:p-[50px]"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute lg:border lg:border-[#00000021] lg:p-[10px] -top-10 right-0 md:top-3 md:right-4 text-2xl sm:text-3xl font-bold text-black cursor-pointer"
//           onClick={onClose}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="25"
//             height="26"
//             viewBox="0 0 25 26"
//             fill="none"
//           >
//             <path
//               d="M1 24.375L23.75 1.625"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M23.75 24.375L0.999998 1.625"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         <div className="flex flex-col items-start md:flex-row gap-5 md:gap-10">
//           {/* Image Section with LinkedIn Button */}
//           <div className="relative w-full md:w-[360px]">
//             <img
//               src={member.popupImage || member.image}
//               alt={member.name}
//               className="w-full h-[350px] md:h-[420px] object-cover md:aspect-[396/433]"
//             />
//             {member.linkedIn && (
//               <a
//                 href={member.linkedIn}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute bottom-3 left-3 group"
//               >
//                 <svg
//                   className="transition-colors duration-300"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="34"
//                   height="34"
//                   viewBox="0 0 34 34"
//                   fill="none"
//                 >
//                   <path
//                     className="group-hover:fill-[#126BC4] transition-colors duration-300"
//                     d="M31.4832 0H2.51016C1.12227 0 0 1.0957 0 2.45039V31.543C0 32.8977 1.12227 34 2.51016 34H31.4832C32.8711 34 34 32.8977 34 31.5496V2.45039C34 1.0957 32.8711 0 31.4832 0ZM10.0871 28.973H5.04023V12.7434H10.0871V28.973ZM7.56367 10.532C5.94336 10.532 4.63516 9.22383 4.63516 7.61016C4.63516 5.99648 5.94336 4.68828 7.56367 4.68828C9.17734 4.68828 10.4855 5.99648 10.4855 7.61016C10.4855 9.21719 9.17734 10.532 7.56367 10.532ZM28.973 28.973H23.9328V21.084C23.9328 19.2047 23.8996 16.7809 21.3098 16.7809C18.6867 16.7809 18.2883 18.8328 18.2883 20.9512V28.973H13.2547V12.7434H18.0891V14.9613H18.1555C18.8262 13.6863 20.473 12.3383 22.9234 12.3383C28.0301 12.3383 28.973 15.6984 28.973 20.068V28.973Z"
//                     fill="white"
//                   />
//                 </svg>
//               </a>
//             )}
//           </div>

//           {/* Text Content */}
//           <div className="text-black lg:max-w-[60%] flex flex-col gap-3 sm:gap-[30px]">
//             <div>
//               <h2 className="sm:text-[32px] text-[20px] 2xl:text-[56px] bw-sb  leading-[70%]">
//                 {member.name}
//               </h2>
//               <p
//                 className="text-[14px] sm:text-[22px] bw-m mt-2 md:mt-[25px]"
//                 style={{ color: "#f47920", fontFamily: "Inter" }}
//               >
//                 {member.role}
//               </p>
//             </div>
//             <div className="styled-scroll2 h-[200px] md:h-[300px] pr-2">
//               <p
//                 className="text-[14px] sm:text-[18px] leading-relaxed"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 {member.bio}
//               </p>

//               <p
//                 className="text-[14px] sm:text-[18px] leading-relaxed pt-5"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 {member.edu}
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // export default TeamPopF;

// import { motion } from "framer-motion";

// const TeamPopF = ({ isOpen, onClose, member }) => {
//   if (!isOpen || !member) return null;

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/40 px-4 overflow-y-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={handleBackdropClick}
//     >
//       <motion.div
//         className="relative w-full md:w-[400px] lg:h-auto md:h-[600px] lg:mx-0 mx-auto lg:max-w-[1200px] bg-white p-5 xl:p-[50px]"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//         onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop
//       >
//         {/* Close Button */}
//         <button
//           className="absolute lg:border lg:border-[#00000021] lg:p-[10px] -top-10 right-0 md:top-3 md:right-4 text-2xl sm:text-3xl font-bold text-black cursor-pointer"
//           onClick={onClose}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="25"
//             height="26"
//             viewBox="0 0 25 26"
//             fill="none"
//           >
//             <path
//               d="M1 24.375L23.75 1.625"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M23.75 24.375L0.999998 1.625"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         <div className="flex flex-col items-start 1024:flex-row gap-5 md:gap-10">
//           {/* Image Section with LinkedIn Button */}
//           <div className="relative w-full md:w-[360px]">
//             <img
//               src={member.popupImage || member.image}
//               alt={member.name}
//               className="w-full h-[350px] md:h-[420px] object-cover md:aspect-[396/433]"
//             />
//             {member.linkedIn && (
//               <a
//                 href={member.linkedIn}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute bottom-3 left-3 group"
//               >
//                 <svg
//                   className="transition-colors duration-300"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="34"
//                   height="34"
//                   viewBox="0 0 34 34"
//                   fill="none"
//                 >
//                   <path
//                     className="group-hover:fill-[#126BC4] transition-colors duration-300"
//                     d="M31.4832 0H2.51016C1.12227 0 0 1.0957 0 2.45039V31.543C0 32.8977 1.12227 34 2.51016 34H31.4832C32.8711 34 34 32.8977 34 31.5496V2.45039C34 1.0957 32.8711 0 31.4832 0ZM10.0871 28.973H5.04023V12.7434H10.0871V28.973ZM7.56367 10.532C5.94336 10.532 4.63516 9.22383 4.63516 7.61016C4.63516 5.99648 5.94336 4.68828 7.56367 4.68828C9.17734 4.68828 10.4855 5.99648 10.4855 7.61016C10.4855 9.21719 9.17734 10.532 7.56367 10.532ZM28.973 28.973H23.9328V21.084C23.9328 19.2047 23.8996 16.7809 21.3098 16.7809C18.6867 16.7809 18.2883 18.8328 18.2883 20.9512V28.973H13.2547V12.7434H18.0891V14.9613H18.1555C18.8262 13.6863 20.473 12.3383 22.9234 12.3383C28.0301 12.3383 28.973 15.6984 28.973 20.068V28.973Z"
//                     fill="white"
//                   />
//                 </svg>
//               </a>
//             )}
//           </div>

//           {/* Text Content */}
//           <div className="text-black lg:max-w-[60%] flex flex-col gap-3 sm:gap-[30px]">
//             <div>
//               <h2 className="sm:text-[32px] text-[20px] 2xl:text-[56px] bw-sb leading-[70%]">
//                 {member.name}
//               </h2>
//               <p
//                 className="text-[14px] sm:text-[22px] bw-m mt-2 md:mt-[25px]"
//                 style={{ color: "#f47920", fontFamily: "Inter" }}
//               >
//                 {member.role}
//               </p>
//             </div>
//             <div className="styled-scroll2 h-[200px] md:h-[300px] pr-2">
//               <p
//                 className="text-[14px] sm:text-[18px] leading-relaxed"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 {member.bio}
//               </p>

//               <p
//                 className="text-[14px] sm:text-[18px] leading-relaxed pt-5"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 {member.edu}
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default TeamPopF;

// "use client";

// import { motion } from "framer-motion";

// const TeamPopF = ({ isOpen, onClose, member }) => {
//   if (!isOpen || !member) return null;

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/40 px-4 overflow-y-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={handleBackdropClick}
//     >
//       <motion.div
//         className="relative w-full max-w-[1200px] bg-white p-5 xl:p-[50px] mx-auto"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-3 right-4 text-2xl sm:text-3xl font-bold text-black cursor-pointer z-20 lg:border lg:border-[#00000021] lg:p-[10px]"
//           onClick={onClose}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="25"
//             height="26"
//             viewBox="0 0 25 26"
//             fill="none"
//           >
//             <path
//               d="M1 24.375L23.75 1.625"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M23.75 24.375L0.999998 1.625"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
//           {/* Image Section */}
//           <div className="relative w-full lg:w-[360px] flex-shrink-0">
//             <img
//               src={member.popupImage || member.image}
//               alt={member.name}
//               className="w-full h-[350px] lg:h-[420px] object-cover"
//             />
//             {member.linkedIn && (
//               <a
//                 href={member.linkedIn}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute bottom-3 left-3 group"
//               >
//                 <svg
//                   className="transition-colors duration-300"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="34"
//                   height="34"
//                   viewBox="0 0 34 34"
//                   fill="none"
//                 >
//                   <path
//                     className="group-hover:fill-[#126BC4] transition-colors duration-300"
//                     d="M31.4832 0H2.51016C1.12227 0 0 1.0957 0 2.45039V31.543C0 32.8977 1.12227 34 2.51016 34H31.4832C32.8711 34 34 32.8977 34 31.5496V2.45039C34 1.0957 32.8711 0 31.4832 0ZM10.0871 28.973H5.04023V12.7434H10.0871V28.973ZM7.56367 10.532C5.94336 10.532 4.63516 9.22383 4.63516 7.61016C4.63516 5.99648 5.94336 4.68828 7.56367 4.68828C9.17734 4.68828 10.4855 5.99648 10.4855 7.61016C10.4855 9.21719 9.17734 10.532 7.56367 10.532ZM28.973 28.973H23.9328V21.084C23.9328 19.2047 23.8996 16.7809 21.3098 16.7809C18.6867 16.7809 18.2883 18.8328 18.2883 20.9512V28.973H13.2547V12.7434H18.0891V14.9613H18.1555C18.8262 13.6863 20.473 12.3383 22.9234 12.3383C28.0301 12.3383 28.973 15.6984 28.973 20.068V28.973Z"
//                     fill="white"
//                   />
//                 </svg>
//               </a>
//             )}
//           </div>

//           {/* Text Section */}
//           <div className="flex flex-col justify-between text-black w-full gap-3 sm:gap-[30px]">
//             <div>
//               <h2 className="text-[20px] sm:text-[32px] 2xl:text-[56px] bw-sb leading-[110%]">
//                 {member.name}
//               </h2>
//               <p
//                 className="text-[14px] sm:text-[22px] bw-m mt-2"
//                 style={{ color: "#f47920", fontFamily: "Inter" }}
//               >
//                 {member.role}
//               </p>
//             </div>

//             <div className="overflow-y-auto styled-scroll2 max-h-[300px] sm:max-h-[350px] md:max-h-[400px] pr-2 mt-2">
//               <p
//                 className="text-[14px] sm:text-[18px] leading-relaxed"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 {member.bio}
//               </p>
//               <p
//                 className="text-[14px] sm:text-[18px] leading-relaxed pt-5"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 {member.edu}
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default TeamPopF;

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const TeamPopF = ({ isOpen, onClose, member }) => {
  // ✅ Disable body scroll when modal is open
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isOpen]);

  if (!isOpen || !member) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/40 px-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className="relative w-full max-w-[1000px] bg-white py-[40px] px-[20px] xl:p-[50px] mx-auto h-auto overflow-hidden  768:h-[auto] lg:h-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute md:top-[30px] md:right-[30px] top-[10px] right-[13px] text-[10px] sm:text-3xl font-bold text-black cursor-pointer z-20 lg:border lg:border-[#00000021] lg:p-[10px]"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            className="w-[15px] md:w-[auto]"
          >
            <path
              d="M1 24.375L23.75 1.625"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.75 24.375L0.999998 1.625"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Flex-row from md screens and up */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-5">
          {/* Image Section */}
          <div className="relative w-full  md:h-[100%] lg:h-[420px] md:w-[310px] lg:w-[360px]  flex-shrink-0  md:block hidden">
            <img
              src={member.popupImage || member.image}
              alt={member.name}
              className="w-full h-[350px] md:h-[100%] lg:h-[420px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-start text-black w-full gap-3  sm:gap-[15px]">
            <div>
              <h2 className="text-[25px] sm:text-[35px] 1280:text-[41px] 2xl:text-[41px] bw-sb leading-[110%]">
                {member.name}
              </h2>
              <p className="text-[16px] sm:text-[18px] bw-m md:mt-2 mt-1 text-[#f47920]">
                {member.role}
              </p>
            </div>

            {/* Scrollable Paragraph Section */}
            <div className="overflow-y-auto styled-scroll2 max-h-[275px] mb-3.5 md:h-[70%] pr-2  mt-2">
              <p className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[25px] bw-r">
                {member.bio}
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[25px] pt-5 bw-r">
                {member.edu}
              </p>
            </div>
            {member.linkedIn && (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group  mt-[-10px]"
              >
                <svg
                  className="transition-colors duration-300 w-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    className="fill-[#126BC4] transition-colors duration-300"
                    d="M31.4832 0H2.51016C1.12227 0 0 1.0957 0 2.45039V31.543C0 32.8977 1.12227 34 2.51016 34H31.4832C32.8711 34 34 32.8977 34 31.5496V2.45039C34 1.0957 32.8711 0 31.4832 0ZM10.0871 28.973H5.04023V12.7434H10.0871V28.973ZM7.56367 10.532C5.94336 10.532 4.63516 9.22383 4.63516 7.61016C4.63516 5.99648 5.94336 4.68828 7.56367 4.68828C9.17734 4.68828 10.4855 5.99648 10.4855 7.61016C10.4855 9.21719 9.17734 10.532 7.56367 10.532ZM28.973 28.973H23.9328V21.084C23.9328 19.2047 23.8996 16.7809 21.3098 16.7809C18.6867 16.7809 18.2883 18.8328 18.2883 20.9512V28.973H13.2547V12.7434H18.0891V14.9613H18.1555C18.8262 13.6863 20.473 12.3383 22.9234 12.3383C28.0301 12.3383 28.973 15.6984 28.973 20.068V28.973Z"
                    fill="white"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamPopF;

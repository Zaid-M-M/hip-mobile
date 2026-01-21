// "use client";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { X } from "lucide-react";

// // ===================================================================
// // VideoPopup Component - NO CHANGES NEEDED HERE
// // This component's internal logic is already correct.
// // ===================================================================
// // ===================================================================
// // VideoPopup Component - with scroll lock
// // ===================================================================
// const VideoPopup = ({ video, name, onClose }) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // ✅ Disable background scroll when modal is open
//   useEffect(() => {
//     if (video) {
//       const originalBodyStyle = document.body.style.overflow;
//       const originalHtmlStyle = document.documentElement.style.overflow;

//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";

//       return () => {
//         document.body.style.overflow = originalBodyStyle;
//         document.documentElement.style.overflow = originalHtmlStyle;
//       };
//     }
//   }, [video]);

//   if (!isMounted) return null;

//   return createPortal(
//     <AnimatePresence>
//       {video && (
//         <motion.div
//           key="video-modal"
//           data-lenis-prevent // 👈 Add this here
//           className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 0.3 } }}
//           onClick={onClose}
//         >
//           <motion.div
//             className="relative bg-black w-[99vw] sm:w-[70vw] aspect-video overflow-hidden shadow-lg"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0.8, transition: { duration: 0.3 } }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={onClose}
//               className="absolute top-3 right-3 bg-white text-black px-1 py-0.5 1024:px-2.5 1024:py-2 xl:px-4 xl:py-3.5 text-[10px] 1024:text-[40px] z-10 cursor-pointer"
//             >
//               <X className="w-5 h-5 sm:w-[29px] sm:h-[29px]" />
//             </button>
//             <iframe
//               src={video}
//               className="w-full h-full"
//               allowFullScreen
//               title={`Video for ${name}`}
//             ></iframe>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>,
//     document.body
//   );
// };

// const TestimonialCard = ({
//   name,
//   role,
//   company,
//   quote,
//   logo,
//   video,
//   thumbnail,
//   isActive,
// }) => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   return (
//     <>
//       <motion.article className="bg-inherit relative w-[300px] sm:w-[420px] md:w-auto 1024:w-[700px] md:mx-0 xl:w-[800px] sm:h-[480px] md:h-[680px] lg:h-[350px] xl:h-[420px] 1920:h-[500px] flex flex-col lg:flex-row border border-[#CDCDCD] shadow rounded-none overflow-hidden">
//         {/* --- Left Side (Thumbnail + Play Button) --- */}
//         <div className="relative w-full min-h-[200px] md:min-h-[340px] sm:min-h-[320px] h-full">
//           {thumbnail && (
//             <Image
//               src={thumbnail}
//               alt={`Client video thumbnail for ${name} - ${company}`}
//               fill
//               className="object-cover object-top md:object-center"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               priority={!!isActive}
//             />
//           )}

//           {/* ✅ Green Arrow (Mobile) */}
//           <div className="absolute top-0 right-0 z-20 block lg:!hidden">
//             <svg
//               width="50"
//               height="50"
//               viewBox="0 0 50 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]"
//             >
//               <path
//                 d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
//                 fill={isActive ? "#3AB04A" : "#DEDDCE"}
//               />
//             </svg>
//           </div>

//           {/* ✅ Play Button */}
//           {video && (
//             <button
//               onClick={() => setActiveVideo(video)}
//               className="absolute cursor-pointer bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] 2xl:px-[30px] 2xl:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
//             >
//               Watch Video
//               <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
//                 <Image src="/play.svg" alt="Watch" width={25} height={25} />
//               </span>
//             </button>
//           )}
//         </div>

//         {/* --- Right Side (Text Content) --- */}
//         <div className="flex w-full flex-col justify-start 1024:justify-around relative 1280:justify-around min-h-auto sm:h-full px-[20px] py-[16px] bg-white sm:px-[18px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-1 xl:gap-3">
//           {/* ✅ Logo */}
//           {logo && (
// <div>
//   <Image
//     src={logo}
//     alt={`${company} logo`}
//     width={150}
//     height={60}
//     className="w-[110px] sm:w-auto lg:w-[150px] h-auto sm:auto md:h-[50px] lg:h-[60px]  object-contain"
//   />
// </div>
//           )}

//           {/* ✅ Quote */}
//           <div>
//             <Image
//               src="/quote.svg"
//               width={42}
//               height={42}
//               alt="quote icon"
//               className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
//             />
//             <p
//               data-lenis-prevent
//               itemProp="reviewBody"
//               className="bw-m text-[16px] sm:text-[18px] my-[10px] md:text-[18px] lg:text-[20px] leading-[22px] tracking-normal sm:leading-[20px] md:leading-[28px] pr-0.5 text-[#000] h-[145px] 768:h-[135px] 1280:h-[170px]  1440:h-[175px] 1920:h-full overflow-y-auto testimonial-scrollbar"
//             >
//               {quote}
//             </p>
//           </div>

//           {/* ✅ Name + Role + Company */}
//           <div className="max-w-sm">
//             <strong className="bw-sb sm:leading-[25px] lg:leading-[30px] text-[16px] leading-[26px] text-black sm:text-[18px] lg:text-[18px] 1280:text-[20px]">
//               {name}
//             </strong>
//             {(role || company) && (
//               <p className="bw-r text-[14px] sm:text-[16px] lg:text-[16px] text-[#475467]">
//                 {[role, company].filter(Boolean).join(" · ")}
//               </p>
//             )}
//           </div>

//           {/* ✅ Green Arrow (Desktop) */}
//           <div className="absolute top-0 right-0 z-20 hidden lg:block">
//             <svg
//               width="50"
//               height="50"
//               viewBox="0 0 50 50"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] xl:w-[50px] xl:h-[50px]"
//             >
//               <path
//                 d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
//                 fill={isActive ? "#3AB04A" : "#DEDDCE"}
//               />
//             </svg>
//           </div>
//         </div>
//       </motion.article>

//       <VideoPopup
//         video={activeVideo}
//         name={name}
//         onClose={() => setActiveVideo(null)}
//       />
//     </>
//   );
// };

// export default TestimonialCard;

//
//
//
//
//
//
//
//

// "use client";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { X } from "lucide-react";

// // ===================================================================
// // VideoPopup Component - NO CHANGES NEEDED HERE
// // This component's internal logic is already correct.
// // ===================================================================
// // ===================================================================
// // VideoPopup Component - with scroll lock
// // ===================================================================
// const VideoPopup = ({ video, name, onClose }) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // ✅ Disable background scroll when modal is open
//   useEffect(() => {
//     if (video) {
//       const originalBodyStyle = document.body.style.overflow;
//       const originalHtmlStyle = document.documentElement.style.overflow;

//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";

//       return () => {
//         document.body.style.overflow = originalBodyStyle;
//         document.documentElement.style.overflow = originalHtmlStyle;
//       };
//     }
//   }, [video]);

//   if (!isMounted) return null;

//   return createPortal(
//     <AnimatePresence>
//       {video && (
//         <motion.div
//           key="video-modal"
//           data-lenis-prevent // 👈 Add this here
//           className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 0.3 } }}
//           onClick={onClose}
//         >
//           <motion.div
//             className="relative bg-black w-[99vw] sm:w-[70vw] aspect-video overflow-hidden shadow-lg"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0.8, transition: { duration: 0.3 } }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={onClose}
//               className="absolute top-3 right-3 bg-white text-black px-1 py-0.5 1024:px-2.5 1024:py-2 xl:px-4 xl:py-3.5 text-[10px] 1024:text-[40px] z-10 cursor-pointer"
//             >
//               <X className="w-5 h-5 sm:w-[29px] sm:h-[29px]" />
//             </button>
//             <iframe
//               src={video}
//               className="w-full h-full"
//               allowFullScreen
//               title={`Video for ${name}`}
//             ></iframe>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>,
//     document.body
//   );
// };

// const TestimonialCard = ({
//   name,
//   role,
//   company,
//   quote,
//   logo,
//   video,
//   thumbnail,
//   isActive,
// }) => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   return (
//     <>
//       {/* <div className="w-[805px] h-fit  border border-[#D4D4D4]">
//         <div className="flex flex-col  h-full">
//           <div className="w-full h-[450px] relative">
//             <Image
//               src={thumbnail}
//               alt={`Client video thumbnail for ${name} - ${company}`}
//               fill
//               className="object-cover object-top md:object-center "
//               priority={!!isActive}
//             />
//           </div>
//           <div className="bg-white flex flex-col justify-center h-[200px] w-full relative p-4">
//             <div className="flex items-center gap-[14px]">
//               <div className=" border-r border-[#D4D4D4] pr-4">
//                 <h2 className="bw-sb text-[20px]">{name}</h2>
//                 <span className="bw-r text-[16px] leading-[20px]">
//                   {company}
//                 </span>
//               </div>
//               <div>
//                 <Image
//                   src={logo}
//                   alt={`${company} logo`}
//                   width={150}
//                   height={60}
//                   className="w-[110px] sm:w-auto lg:w-[150px] h-auto md:h-[50px] lg:h-[60px] object-contain"
//                 />
//               </div>
//             </div>
//             <p className="bw-r text-[20px] leading-[30px] mt-4">
//               Seamless operations with top-notch hygiene standards, 24/7 support
//               and security, and proactive maintenance of assets.
//             </p>
//             <div className="absolute top-2 right-[15px]">
//               <img
//                 src="/home/clients/quote.svg"
//                 className="h-[70px] w-auto"
//                 alt="quote icon"
//               />
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <div className="w-[805px] h-fit border border-[#D4D4D4]">
//         <div className="flex flex-col h-full">
//           {/* Thumbnail */}
//           <div className="w-full relative aspect-[16/9]">
//             {" "}
//             {/* or aspect-auto if you want dynamic */}
//             <Image
//               src={"/home/clients/testc.png"}
//               alt={`Client video thumbnail for ${name} - ${company}`}
//               fill
//               className="object-contain" // ✅ shows full image, no crop
//               priority={!!isActive}
//             />
//           </div>

//           {/* Content */}
//           <div className="bg-white flex flex-col justify-center h-[200px] w-full relative p-4">
//             <div className="flex items-center gap-[14px]">
//               <div className="border-r border-[#D4D4D4] pr-4">
//                 <h2 className="bw-sb text-[20px]">{name}</h2>
//                 <span className="bw-r text-[16px] leading-[20px]">
//                   {company}
//                 </span>
//               </div>
//               <div>
//                 <Image
//                   src={logo}
//                   alt={`${company} logo`}
//                   width={150}
//                   height={60}
//                   className="w-[110px] sm:w-auto lg:w-[150px] h-auto md:h-[50px] lg:h-[60px] object-contain"
//                 />
//               </div>
//             </div>
//             <p className="bw-r text-[20px] leading-[30px] mt-4">
//               Seamless operations with top-notch hygiene standards, 24/7 support
//               and security, and proactive maintenance of assets.
//             </p>
//             <div className="absolute top-2 right-[15px]">
//               <img
//                 src="/home/clients/quote.svg"
//                 className="h-[70px] w-auto"
//                 alt="quote icon"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TestimonialCard;

"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
const VideoPopup = ({ video, name, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Disable background scroll when modal is open
  useEffect(() => {
    if (video) {
      const originalBodyStyle = document.body.style.overflow;
      const originalHtmlStyle = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyStyle;
        document.documentElement.style.overflow = originalHtmlStyle;
      };
    }
  }, [video]);

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {video && (
        <motion.div
          key="video-modal"
          data-lenis-prevent // 👈 Add this here
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-black w-[99vw] sm:w-[70vw] aspect-video overflow-hidden shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, transition: { duration: 0.3 } }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-white text-black px-1 py-0.5 1024:px-2.5 1024:py-2 xl:px-4 xl:py-3.5 text-[10px] 1024:text-[40px] z-10 cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-[29px] sm:h-[29px]" />
            </button>
            <iframe
              src={video}
              className="w-full h-full"
              allowFullScreen
              title={`Video for ${name}`}
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const TestimonialCard = ({
  name,
  role,
  company,
  quote,
  logo,
  video,
  thumbnail,
  isActive,
}) => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <div className="w-auto h-full 1280:h-full border border-[#D4D4D4]">
        <div className="flex flex-col h-auto  768:h-full">
          {/* Thumbnail */}
          <div className="w-full aspect-[16/9] lg:flex-1 relative">
            {" "}
            {/* or aspect-auto if you want dynamic */}
            <Image
              // src={"/home/clients/testc.png"}
              src={thumbnail}
              alt={`Client video thumbnail for ${name} - ${company}`}
              fill
              className="object-cover" // ✅ shows full image, no crop
              priority={!!isActive}
            />
            {video && (
              <button
                onClick={() => setActiveVideo(video)}
                className="absolute cursor-pointer bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] 2xl:px-[30px] 2xl:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2 uppercase"
              >
                Watch Video
                <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
                  <Image src="/play.svg" alt="Watch" width={25} height={25} />
                </span>
              </button>
            )}
          </div>

          {/* Content */}
          <div className="bg-white flex flex-col justify-center lg:h-full w-full relative px-3 py-6 min-h-[286px]  sm:py-6 sm:p-4">
            <div className="flex items-center gap-[14px]">
              <div className="border-r border-[#D4D4D4] pr-4">
                <h2 className="bw-sb text-[20px]">{name}</h2>
                <span className="bw-r text-[16px] leading-[20px]">
                  {company}
                </span>
              </div>
              <div className="h-auto relative">
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={200}
                  height={70}
                  className="w-[110px] sm:w-auto lg:w-[150px] h-auto md:h-[50px] lg:h-[60px] object-contain"
                />
              </div>
            </div>
            <p className="bw-r text-[16px] leading-[24px] sm:text-[20px] sm:leading-[30px] mt-4">
              {quote}
            </p>
            <div className="absolute top-6 sm:top-3 right-[15px]">
              <img
                src="/home/clients/quote.svg"
                className="h-[40px] sm:h-[70px] w-auto"
                alt="quote icon"
              />
            </div>
          </div>
        </div>
      </div>

      <VideoPopup
        video={activeVideo}
        name={name}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
};

export default TestimonialCard;

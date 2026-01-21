// "use client";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { X } from "lucide-react";
// const VideoPopup = ({ video, name, onClose }) => {
//   const [isMounted, setIsMounted] = useState(false);
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);
//   // :white_check_mark: Disable background scroll when modal is open
//   //   useEffect(() => {
//   //     if (video) {
//   //       const originalBodyStyle = document.body.style.overflow;
//   //       const originalHtmlStyle = document.documentElement.style.overflow;
//   //       document.body.style.overflow = "hidden";
//   //       document.documentElement.style.overflow = "hidden";
//   //       return () => {
//   //         document.body.style.overflow = originalBodyStyle;
//   //         document.documentElement.style.overflow = originalHtmlStyle;
//   //       };
//   //     }
//   //   }, [video]);
//   //   if (!isMounted) return null;
//   return createPortal(
//     <AnimatePresence>
//       {video && (
//         <motion.div
//           key="video-modal"
//           data-lenis-prevent // :point_left: Add this here
//           className="fixed inset-0 bg-black/80 flex justify-center items-center z-[99999]"
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
// const TestCard = ({
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
//       <div className="w-auto h-full 1280:h-full border border-[#D4D4D4]">
//         <div className="flex flex-col h-auto  768:h-full">
//           {/* Thumbnail */}
//           {/* <div className="w-full aspect-[16/9] lg:flex-1 relative"> */}
//           <div className="w-full min-h-[50%] !aspect-[16/9]  relative">
//             <Image
//               src={thumbnail}
//               alt={`Client video thumbnail for ${name} - ${company}`}
//               fill
//               className="object-cover object-bottom !aspect-video"
//               priority={!!isActive}
//             />
//             {/* or aspect-auto if you want dynamic */}
//             {video && (
//               <button
//                 onClick={() => setActiveVideo(video)}
//                 className="absolute cursor-pointer !z-[9999] bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] 2xl:px-[30px] 2xl:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
//               >
//                 Watch Video
//                 <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
//                   <Image src="/play.svg" alt="Watch" width={25} height={25} />
//                 </span>
//               </button>
//             )}
//           </div>
//           {/* Content */}
//           <div className="bg-white flex flex-col justify-center lg:h-full w-full relative px-3 py-6 sm:py-6 sm:p-4">
//             <div className="flex items-center gap-[14px]">
//               <div className="border-r border-[#D4D4D4] pr-4">
//                 <h2 className="bw-sb text-[20px]">{name}</h2>
//                 <span className="bw-r text-[16px] leading-[20px]">
//                   {company}
//                 </span>
//               </div>
//               <div className="h-auto relative">
//                 <Image
//                   src={logo}
//                   alt={`${company} logo`}
//                   width={200}
//                   height={70}
//                   className="w-[110px] sm:w-auto lg:w-[150px] h-auto md:h-[50px] lg:h-[60px] object-contain"
//                 />
//               </div>
//             </div>
//             <p className="bw-r text-[16px] leading-[24px] sm:text-[18px] sm:leading-[24px] mt-4">
//               {quote}
//             </p>
//             <div className="absolute top-6 sm:top-3 right-[15px]">
//               <img
//                 src="/home/clients/quote.svg"
//                 className="h-[40px] sm:h-[70px] w-auto"
//                 alt="quote icon"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <VideoPopup
//         video={activeVideo}
//         name={name}
//         onClose={() => setActiveVideo(null)}
//       />
//     </>
//   );
// };
// export default TestCard;
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

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {video && (
        <motion.div
          key="video-modal"
          data-lenis-prevent
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[99999]"
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
              className="absolute top-3 right-3 bg-white text-black px-1 py-0.5 1024:px-2.5 1024:py-2 xl:px-4 xl:py-3.5 text-[10px] 1024:text-[40px] z-50 cursor-pointer"
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

const TestCard = ({
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
      <div className="w-auto h-full 1280:h-full border border-[#D4D4D4] relative">
        <div className="flex flex-col h-auto 768:h-full">
          {/* Thumbnail */}
          <div className="w-full min-h-[50%] aspect-[16/9] relative overflow-visible">
            <Image
              src={thumbnail}
              alt={`Client video thumbnail for ${name} - ${company}`}
              fill
              className="object-cover object-bottom"
              priority={!!isActive}
            />
            {video && (
              <button
                onClick={() => setActiveVideo(video)}
                className="absolute bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] 2xl:px-[30px] 2xl:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 z-[50] flex items-center gap-2 cursor-pointer  uppercase"
              >
                Watch Video
                <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
                  <Image src="/play.svg" alt="Watch" width={25} height={25} />
                </span>
              </button>
            )}
          </div>

          {/* Content */}
          <div className="bg-white flex flex-col justify-center h-[310px] lg:h-[220px] w-full relative px-3 py-6 sm:py-6 sm:p-4">
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
            <p className="bw-r text-[16px] leading-[24px] sm:text-[18px] sm:leading-[24px] mt-4">
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

export default TestCard;

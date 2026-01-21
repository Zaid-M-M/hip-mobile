"use client";
import { useEffect, useRef } from "react";
import Player from "@vimeo/player";
import { X } from "lucide-react";

// const VideoPopup = ({ embedUrl, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]">
//       <div className="relative w-[90%] max-w-4xl aspect-video">
//         <iframe
//           src={embedUrl}
//           className="w-full h-full"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         />
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 bg-white text-black p-2 shadow-lg cursor-pointer"
//         >
//           <X className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const BSec = () => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   // const [showPopup, setShowPopup] = useState(false);

//   // ✅ Change this to your actual Vimeo/YouTube embed URL
//   const embedUrl = "https://player.vimeo.com/video/1121914652";

//   useEffect(() => {
//     if (videoRef.current) {
//       playerRef.current = new Player(videoRef.current);

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               playerRef.current?.play();
//             } else {
//               playerRef.current?.pause();
//             }
//           });
//         },
//         { threshold: 0.5 } // play when at least 50% of video is visible
//       );

//       observer.observe(videoRef.current);

//       return () => {
//         observer.disconnect();
//       };
//     }
//   }, []);

//   return (
//     <div className="bg-gradient-to-b w-full from-[#161515] to-black bg-cover bg-no-repeat">
//       <div className="fixup lg:py-24 flex flex-col xl:gap-0 md:gap-10 gap-24 py-12">
//         <h2 className="text-[35px] xl:hidden flex-col flex md:text-[45px] 1366:text-[56px] 1366:leading-[66px] md:leading-[55px] leading-[45px] bw-r">
//           <span className="txt_gradient_sustain bw-m">
//             Creating New Benchmarks
//           </span>
//           <span className="flex flex-col xl:gap-[17px] gap-[10px] align-end">
//             <span className="text-white bw-r">in Sustainability</span>
//             <img
//               className="abstract_sustian_svg"
//               src="/abstract_pattern_sustain.png"
//               alt="Sustainability Gradient"
//             />
//           </span>
//         </h2>
//         <div className="flex md:flex-row flex-col-reverse gap-5 lg:gap-10 items-center">
//           {/* Left Section */}
//           <div className="flex flex-col gap-6 md:w-[50%]">
//             <h2 className="text-[35px] xl:flex xl:flex-col hidden md:text-[45px] 1366:text-[52px] 1366:leading-[66px] md:leading-[55px] leading-[45px] bw-r">
//               <span className="txt_gradient_sustain bw-m">
//                 Creating New Benchmarks
//               </span>
//               <span className="flex xl:gap-[17px] gap-[10px] items-end">
//                 <span className="text-white bw-r">in Sustainability</span>
//                 <img
//                   src="/abstract_pattern_sustain.png"
//                   className="abstract_sustian_svg xl:mb-[-6px] 1366:mb-[-2px]"
//                   alt="Sustainability Gradient"
//                 />
//               </span>
//             </h2>
//             <p className="text-[20px] leading-[30px] text-white bw-r">
//               For us, sustainability is embedded into the way we design, build,
//               and operate our parks. With parks certified and pre-certified to
//               IGBC Platinum standards, we ensure that every development
//               underscores our commitment to green design and climate-resilient
//               infrastructure.
//             </p>
//             <p className="text-[20px] leading-[30px] text-white bw-r">
//               Adding to this, we have been recognised globally, earning a 5-Star
//               GRESB Rating and Green Star designation in our debut year of
//               assessment, placing us among global leaders in ESG performance.
//               These achievements highlight our vision of creating industrial and
//               logistics ecosystems that are future-ready, resilient, and
//               responsible by design; serving our customers, communities, and the
//               environment.
//             </p>
//           </div>

//           {/* Right Section */}
//           <div className="flex flex-col md:w-[48%]">
//             <div className="md:h-24 flex md:justify-start justify-end h-12">
//               <img
//                 src="/sustainability/bird.svg"
//                 alt=""
//                 className="w-auto md:h-24 h-12 -mt-[94px] md:-ml-16"
//               />
//             </div>
//             <div className="flex relative z-[100] flex-col items-center gap-6 -mt-24">
//               {/* ✅ Thumbnail instead of video */}
//               {/* <img
//                 src="/sustainability/thumb.jpg"
//                 alt="Video Thumbnail"
//                 className="aspect-video w-full object-cover cursor-pointer"
//                 onClick={() => setShowPopup(true)}
//               /> */}
//               <div className="relative w-full xl:w-[100%] 1440:w-[670px] aspect-video">
//                 <iframe
//                   ref={videoRef}
//                   className="w-full h-full"
//                   src={embedUrl}
//                   title="Who Are We Video"
//                   frameBorder="0"
//                   allow="autoplay; fullscreen"
//                   allowFullScreen
//                   loading="lazy"
//                   loop="1"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Popup */}
//       {/* {showPopup && (
//         <VideoPopup embedUrl={embedUrl} onClose={() => setShowPopup(false)} />
//       )} */}
//     </div>
//   );
// };

// export default BSec;
import React from "react";

const BSec = () => {
  return (
    // <div className="bg-gradient-to-b w-full from-[#161515] to-black bg-cover bg-no-repeat">
    <div className="bg-gradient-to-b w-full relative from-[#121A0F] to-black bg-cover bg-no-repeat">
      {/* Green Gradient */}
      {/* <div className="w-full absolute left-0 -top-[20vh] bg-gradient-to-b from-transparent from-5% via-[#0E2C00] to-[#121A0F] h-[20vh] z-10 pointer-events-none" /> */}
      <div className="fixup lg:py-24 flex flex-col xl:gap-0 md:gap-10 gap-24 py-12">
        <h2 className="text-[35px] xl:hidden flex-col flex md:text-[45px] 1366:text-[56px] 1366:leading-[66px] md:leading-[55px] leading-[45px] bw-r">
          <span className="txt_gradient_sustain bw-m">
            Creating New Benchmarks
          </span>
          <span className="flex flex-col xl:gap-[17px] gap-[10px] align-end">
            <span className="text-white bw-r">in Sustainability</span>
            <img
              className="abstract_sustian_svg"
              src="/abstract_pattern_sustain.png"
              alt="Sustainability Gradient"
            />
          </span>
        </h2>

        <div className="flex md:flex-row flex-col-reverse gap-5 lg:gap-10 items-center">
          {/* Left Section – unchanged */}
          <div className="flex flex-col gap-6 md:w-[50%]">
            <h1 className="text-[35px] xl:flex xl:flex-col hidden md:text-[45px] 1366:text-[52px] 1366:leading-[66px] md:leading-[55px] leading-[45px] bw-r xl:tracking-[-1.92px]">
              <span className="txt_gradient_sustain bw-m">
                Creating New Benchmarks
              </span>
              <span className="flex xl:gap-[17px] gap-[10px] items-end">
                <span className="text-white bw-r">in Sustainability</span>
                <img
                  src="/abstract_pattern_sustain.png"
                  className="abstract_sustian_svg xl:mb-[-6px] 1366:mb-[-2px]"
                  alt="Sustainability Gradient"
                />
              </span>
            </h1>
            <p className="text-[20px] leading-[30px] text-white bw-r">
              For us, sustainability is embedded into the way we design, build,
              and operate our parks. With parks certified and pre-certified to
              IGBC Platinum standards, we ensure that every development
              underscores our commitment to green design and climate-resilient
              infrastructure.
            </p>
            <p className="text-[20px] leading-[30px] text-white bw-r">
              Adding to this, we have been recognised globally, earning a 5-Star
              GRESB Rating and Green Star designation in our debut year of
              assessment, placing us among global leaders in ESG performance.
              These achievements highlight our vision of creating industrial and
              logistics ecosystems that are future-ready, resilient, and
              responsible by design; serving our customers, communities, and the
              environment.
            </p>
          </div>

          {/* Right Section – video replaced with static image */}
          <div className="flex flex-col md:w-[48%]">
            <div className="md:h-24 flex md:justify-start justify-end h-12">
              <img
                src="/sustainability/bird.svg"
                alt=""
                className="w-auto md:h-24 h-12 z-20 -mt-[94px] md:-ml-16"
              />
            </div>

            <div className="flex relative z-[100] flex-col items-center gap-6 -mt-24">
              {/* Static image with exactly the same wrapper & aspect ratio */}
              <div className="relative w-full xl:w-[100%] 1440:w-[670px] aspect-video">
                <img
                  src="/sustainability/susround.png"
                  alt="Sustainability"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSec;

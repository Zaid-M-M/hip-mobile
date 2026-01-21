// "use client";
// import React, { useRef, useState } from "react";
// import { FaPlay, FaPause } from "react-icons/fa";

// const Incity_park_sec2 = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     if (!videoRef.current) return;
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[50px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px]">
//       {/* Background vectors */}
//       <img
//         className="purple_vctr hidden md:block absolute top-10 right-10 md:w-[370px] w-[300px]"
//         src="/green_vector.svg"
//         alt="Purple Vector"
//       />
//       <img
//         className="orange_vctr hidden md:block absolute top-15 right-20 md:w-[370px] w-[300px]"
//         src="/orange_vector.svg"
//         alt="Orange Vector"
//       />

//       <div className="relative w-full fix">
//         {/* --- Top Heading Section --- */}
//         <div className="flex flex-col justify-between md:gap-[20px] lg:gap-[25px] gap-[17px] xl:flex-col">
//           <div className="max-w-[100%] xl:max-w-[45%]">
//             <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
//               <div className="flex items-start flex-col">
//                 {/* Heading */}
//                 <h1 className="lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[54px] md:text-[44px] whitespace-nowrap flex items-center gap-[10px] md:gap-[17px]">
//                   Purpose Built
//                   <img
//                     src="/abstract_pattern.svg"
//                     alt="Grade A Box"
//                     className="hidden lg:block md:block abstract_svg"
//                   />
//                 </h1>

//                 <h1 className="bw-m lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[54px] md:text-[44px] capitalize xl:w-[500px]">
//                   Last mile spaces
//                 </h1>
//                 <img
//                   src="/abstract_pattern.svg"
//                   className="abstract_svg lg:hidden md:hidden"
//                   alt="Grade A Box"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- Main Content Section --- */}
//         <div className="flex flex-col  lg:gap-[35px] gap-[17px] xl:flex-row">
//           {/* ✅ Left: Video Section */}
//           <div className="max-w-[100%] xl:max-w-[45%] relative flex flex-col ">
//             <div className="w-full flex relative lg:pt-[40px] pt-[20px]">
//               <video
//                 ref={videoRef}
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-auto object-cover shadow-lg"
//               >
//                 <source src="/incity_park/Horizon_1.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>

//               {/* Watch/Pause Video Button */}
//               <div className="absolute bottom-[7px] right-[7px] md:bottom-[15px] md:right-[20px]">
//                 <button
//                   onClick={handlePlayPause}
//                   className="text-white bg-black px-3 md:px-5 py-2 md:py-3 bw-m flex items-center justify-center gap-2 text-[9px] md:text-[14px] uppercase cursor-pointer"
//                 >
//                   {isPlaying ? "Pause Video" : "Watch Video"}
//                   {isPlaying ? (
//                     <FaPause className="w-[12px] md:w-[16px]" />
//                   ) : (
//                     <FaPlay className="w-[12px] md:w-[16px]" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* --- Right: Text Section --- */}
//           <div className="flex flex-col gap-[13px] max-w-full xl:max-w-1/2 lg:pt-[32px] pt-[10px]">
//             <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
//               Horizon is redefining urban logistics with our new Last-Mile
//               Logistics Parks — purpose-built, in-city spaces designed to get
//               your products to your end consumers, faster. With 13 in-city parks
//               across key markets, covering 70 acres and 2.4 million square feet
//               of leasable area, Horizon offers the largest institutional
//               portfolio for last-mile warehousing in India.
//             </p>

//             <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
//               In a landscape driven by instant deliveries, dynamic commerce, and
//               changing consumer behaviour, our hyperlocal parks are designed to
//               help businesses unlock responsiveness, cost savings, and
//               exceptional service — all while staying agile and scalable.
//             </p>

//             <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
//               What’s more, enjoy the same best-in-class infrastructure,
//               flexibility, and operational standards you’ve come to expect from
//               us.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec2;

"use client";
import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";
const Incity_park_sec2 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePlayPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[80px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px]">
      {/* Background vectors */}
      <img
        className="purple_vctr hidden md:block absolute top-10 right-10 md:w-[370px] w-[300px]"
        src="/green_vector.svg"
        alt="Purple Vector"
      />
      <img
        className="orange_vctr hidden md:block absolute top-15 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      />
      <div className="relative w-full fix">
        {/* --- Top Heading Section --- */}
        <div className="flex flex-col justify-between md:gap-[20px] lg:gap-[25px] gap-[17px] xl:flex-col">
          <div className="max-w-[100%] xl:max-w-[45%]">
            <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
              <div className="flex items-start flex-col">
                {/* Heading */}
                <h1 className="lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[54px] md:text-[44px] whitespace-nowrap flex items-center gap-[10px] md:gap-[17px]">
                  Purpose Built
                  <img
                    src="/abstract_pattern.webp"
                    alt="Grade A Box"
                    className="hidden lg:block md:block abstract_svg"
                  />
                </h1>
                <h2 className="bw-m lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[54px] md:text-[44px] capitalize xl:w-[500px]">
                  Last mile spaces
                </h2>
                <img
                  src="/abstract_pattern.webp"
                  className="abstract_svg lg:hidden md:hidden"
                  alt="Grade A Box"
                />
              </div>
            </div>
          </div>
        </div>
        {/* --- Main Content Section --- */}
        <div className="flex flex-col  lg:gap-[35px] gap-[17px] xl:flex-row">
          {/* :white_check_mark: Left: Video Section */}
          <div className="max-w-[100%] xl:max-w-[45%] relative flex flex-col ">
            <div className="w-full flex relative lg:pt-[40px] pt-[20px]">
              {/* <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="w-full h-auto object-cover shadow-lg"
              >
                <source src="/incity_park/Horizon_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img
                src="/incity_park/incity_video_thumb.jpg"
                className="w-full h-auto object-cover"
              ></img>
              {/* Watch/Pause Video Button */}
              <div className="absolute bottom-[7px] right-[7px] md:bottom-[15px] md:right-[20px]">
                <button
                  onClick={handlePlayPopup}
                  className="text-white bg-black px-3 md:px-5 py-2 md:py-3 bw-m flex items-center justify-center gap-2 text-[9px] md:text-[14px] uppercase cursor-pointer"
                >
                  Watch Video
                  <FaPlay className="w-[12px] md:w-[16px]" />
                </button>
              </div>
            </div>
          </div>
          {/* --- Right: Text Section --- */}
          <div className="flex flex-col gap-[13px] max-w-full xl:max-w-1/2 lg:pt-[32px] pt-[10px]">
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Horizon is redefining urban logistics with our new Last-Mile
              Logistics Parks — purpose-built, in-city spaces designed to get
              your products to your end consumers, faster. With 17 in-city
              centers across key markets and 6 million square feet of leasable
              area, Horizon offers the largest institutional portfolio for
              last-mile warehousing in India.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              In a landscape driven by instant deliveries, dynamic commerce, and
              changing consumer behaviour, our hyperlocal parks are designed to
              help businesses unlock responsiveness, cost savings, and
              exceptional service — all while staying agile and scalable.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              What’s more, enjoy the same best-in-class infrastructure,
              flexibility, and operational standards you’ve come to expect from
              us.
            </p>
          </div>
        </div>
      </div>
      {/*Popup Video Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-[90%] max-w-[900px] bg-black overflow-hidden shadow-lg transition-all">
            {/* <video
              controls
              loop
              playsInline
              autoPlay
              className="w-full h-auto object-cover"
            >
              <source src="/incity_park/Horizon_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <iframe
              src="https://player.vimeo.com/video/1152830784"
              allowFullScreen
              className="w-full h-[200px] md:h-[390px] lg:h-[510px] xl:h-[510px]"
            ></iframe>
            {/* <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black p-2 rounded-full transition"
            >
              <FaTimes size={17} />
            </button> */}
            <button
              onClick={handleClosePopup}
              className="absolute top-[15px] right-[15px] sm:top-[20px] sm:right-[20px] flex items-center justify-center hover:opacity-70 transition-opacity duration-200 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] bg-white border border-black/[.22] gap-[7.87px] opacity-100 box-border cursor-pointer"
            >
              <img
                src="/cross.svg"
                alt="Close"
                className="w-[15px] h-[15px] sm:w-[15px] sm:h-[15px] opacity-100 brightness-0 saturate-100"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Incity_park_sec2;

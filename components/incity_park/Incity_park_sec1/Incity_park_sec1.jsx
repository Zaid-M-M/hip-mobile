// import React from "react";

// const Incity_park_sec1 = () => {
//   return (
//     <div>
//       <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]  xl:h-[calc(100vh-80px)]  overflow-hidden  md:aspect-[16/8] aspect-[9/15] ">
//         <video
//           autoPlay
//           muted
//           loop
//           poster="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2026/01/Incity_banner_video.png"
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 hidden md:block"
//         >
//           {/* <source
//             src="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/Incity_banner_video_desk.mp4"
//             type="video/mp4"
//           /> */}
//           <source
//             src="/incity_park/Incity_banner_video_desk_new.mp4"
//             type="video/mp4"
//           />
//         </video>

//         {/* <iframe
//           src="https://player.vimeo.com/video/1152122323?autoplay=1&title=0&byline=0&portrait=0&background=1"
//           frameBorder="0"
//           allow="autoplay"
//           allowFullScreen
//           className="w-full h-full object-cover"
//         ></iframe> */}

//         {/* <iframe
//           src="https://player.vimeo.com/video/1152122323?badge=0&autopause=0&player_id=0&app_id=58479&background=1"
//           width="1920"
//           height="1080"
//           frameborder="0"
//           allowfullscreen
//           allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
//           referrerpolicy="strict-origin-when-cross-origin"
//           title="Incity_banner_video_desk"
//         ></iframe> */}

//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover object-[0_60%] z-0 block md:hidden"
//         >
//           {/* <source
//             src="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/Incity_banner_video_mob.mp4"
//             type="video/mp4"
//           /> */}
//           <source
//             src="/incity_park/Incity_banner_video_mob_new.mp4"
//             type="video/mp4"
//           />
//         </video>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec1;

import React from "react";

const Incity_park_sec1 = () => {
  return (
    <div>
      {/* metadata added */}
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]  xl:h-[calc(100vh-80px)]  overflow-hidden  md:aspect-[16/8] aspect-[9/15] ">
        <video
          autoPlay
          muted
          loop
          preload="metadata"
          poster="/incity_park/Incity_banner_video.webp"
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 hidden md:block"
        >
          <source
            src="/incity_park/Incity_banner_video_desk_new.mp4"
            type="video/mp4"
          />
        </video>

        <video
          autoPlay
          muted
          loop
          preload="metadata"
          poster="/incity_park/Incity_banner_mob_video.webp"
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-[0_60%] z-0 block md:hidden"
        >
          <source
            src="/incity_park/Incity_banner_video_mob_new.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Incity_park_sec1;

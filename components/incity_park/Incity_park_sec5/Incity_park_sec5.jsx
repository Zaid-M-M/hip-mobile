// "use client";
// import React from "react";

// const Incity_park_sec5 = () => {
//      const leftCards = [
//        {
//          video: "/incity_park/Quick Commerce.mp4",
//          title: "Retail, Ecommerce, QCommerce",
//          description:
//            "Enable faster dispatches and seamless fulfilment in the heart of the city.",
//        },
//        {
//          video: "/incity_park/Experience Center.mp4",
//          title: "Service Centres",
//          description:
//            "Provide quick-turnaround repair, installation, or maintenance services.",
//        },
//        {
//          video: "/incity_park/Cold Storage.mp4",
//          title: "Cold Storage Applications",
//          description:
//            "Maintain temperature-sensitive goods in urban distribution networks.",
//        },
//        {
//          video: "/incity_park/Light Industrial.mp4",
//          title: "Light-Industrial Operations",
//          description:
//            "Carry out clean, low-footprint processes right where demand happens.",
//        },
//      ];

//      const rightCards = [
//        {
//          video: "/incity_park/Experience Center.mp4",
//          title: "Micro-Fulfilment Centres for D2C",
//          description:
//            "Bring your direct-to-consumer orders closer, for sub-two-hour delivery promises.",
//        },
//        {
//          video: "/incity_park/R & D (2).mp4",
//          title: "R&D Facilities",
//          description:
//            "Test, prototype, and innovate within proximity to key urban markets.",
//        },
//        {
//          video: "/incity_park/Central Kitchen.mp4",
//          title: "Cloud Kitchens",
//          description:
//            "Optimise delivery-only kitchen operations in dense city zones.",
//        },
//        //    {
//        //      image: "/incity_park/micro_incity_sec5.jpg",
//        //      title: "R&D Facilities",
//        //      description:
//        //        "Test, prototype, and innovate within proximity to key urban markets.",
//        //    },
//      ];
//   return (
//     // <div className="md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[50px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px]">
//     //   <img
//     //     className="purple_vctr hidden md:block absolute -top-1 -right-20 md:w-[370px] w-[300px]"
//     //     src="/purple_vector.svg"
//     //     alt="Purple Vector"
//     //   />
//     //   <img
//     //     className="orange_vctr hidden md:block absolute -top-1 right-20 md:w-[370px] w-[300px]"
//     //     src="/orange_vector.svg"
//     //     alt="Orange Vector"
//     //   />

//     //   <div className="relative w-full fix">
//     //     <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row pb-[30px]">
//     //       <div className="max-w-[100%] xl:max-w-[45%]">
//     //         <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
//     //           <div className="flex items-start flex-col">
//     //             <h1 className="lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex gap-[10px] md:gap-[17px]">
//     //               Versatile.
//     //               <img
//     //                 src="/abstract_pattern.svg"
//     //                 className="abstract_svg"
//     //                 alt="Grade A Box"
//     //               />
//     //             </h1>
//     //             <h1 className="bw-m lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
//     //               Dynamic. Agile.
//     //             </h1>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     {/* Cards Section - Two Columns */}
//     //     <div className="flex flex-col lg:flex-row gap-15 ">
//     //       {/* Left Column */}
//     //       <div className="flex flex-col gap-20 w-[50%]">
//     //         {leftCards.map((card, index) => (
//     //           <div
//     //             key={index}
//     //             className="bg-white  overflow-hidden border border-gray-200  transition-shadow duration-300 flex flex-col"
//     //           >
//     //             <img
//     //               src={card.image}
//     //               alt={card.title}
//     //               className="w-full h-80 object-cover"
//     //             />
//     //             <div className="p-5 flex flex-col justify-center">
//     //               <h3 className="text-[40px]  text-gray-900 mb-2">
//     //                 {card.title}
//     //               </h3>
//     //               <p className="text-gray-600 text-[18px]">
//     //                 {card.description}
//     //               </p>
//     //             </div>
//     //           </div>
//     //         ))}
//     //       </div>

//     //       {/* Right Column */}
//     //       <div className="flex flex-col gap-20 w-[50%] pt-[80px]">
//     //         {rightCards.map((card, index) => (
//     //           <div
//     //             key={index}
//     //             className="bg-white  overflow-hidden border border-gray-200  transition-shadow duration-300 flex flex-col"
//     //           >
//     //             <img
//     //               src={card.image}
//     //               alt={card.title}
//     //               className="w-full h-80 object-cover"
//     //             />
//     //             <div className="p-5 flex flex-col justify-center">
//     //               <h3 className="text-[40px]  text-gray-900 mb-2">
//     //                 {card.title}
//     //               </h3>
//     //               <p className="text-gray-600 text-[18px]">
//     //                 {card.description}
//     //               </p>
//     //             </div>
//     //           </div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[50px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px]">
//       <img
//         className="purple_vctr hidden md:block absolute top-30 -right-20 md:w-[370px] w-[300px]"
//         src="/purple_vector.svg"
//         alt="Purple Vector"
//       />
//       <img
//         className="orange_vctr hidden md:block absolute top-30 right-20 md:w-[370px] w-[300px]"
//         src="/orange_vector.svg"
//         alt="Orange Vector"
//       />
//       <img
//         className="purple_vctr hidden md:block absolute bottom-4 right-20 md:w-[370px] w-[300px]"
//         src="/purple_vector.svg"
//         alt="Purple Vector"
//       />
//       <img
//         className="orange_vctr hidden md:block absolute bottom-1 right-40 md:w-[370px] w-[300px]"
//         src="/green_vector.svg"
//         alt="Orange Vector"
//       />

//       <div className="relative w-full fix">
//         <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row pb-[30px]">
//           <div className="max-w-[100%] xl:max-w-[45%]">
//             <div className="flex flex-col lg:flex-row md:items-center relative lg:w-auto">
//               <div className="flex items-start flex-col">
//                 <h1 className="bw-m lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex gap-[10px] md:gap-[17px]">
//                   Versatile.
//                   <img
//                     src="/abstract_pattern.svg"
//                     className="abstract_svg"
//                     alt="Grade A Box"
//                   />
//                 </h1>
//                 <h1 className="bw-r lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
//                   Dynamic. Agile.
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cards Section - Two Columns */}
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-15">
//           {/* Left Column */}
//           <div className="flex flex-col gap-8 lg:gap-9 w-full lg:w-[50%]">
//             {leftCards.map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-white overflow-hidden border border-[#CDCDCD] transition-shadow duration-300 flex flex-col"
//               >
//                 {/* Video instead of image */}
//                 <video
//                   src={card.video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="w-full h-auto md:h-80 object-cover"
//                 />
//                 <div className="p-4 md:p-5 flex flex-col justify-center">
//                   <h3 className="text-[22px] leading-[33px] md:text-[44px] md:leading-[54px] text-gray-900 mb-2 bw-m">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-600 text-base md:text-[20px] bw-r">
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col gap-8 lg:gap-9 w-full lg:w-[50%] pt-0 lg:pt-[80px]">
//             {rightCards.map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-white overflow-hidden border border-[#CDCDCD] transition-shadow duration-300 flex flex-col"
//               >
//                 {/* Video instead of image */}
//                 <video
//                   src={card.video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   className="w-full h-auto md:h-80 object-cover"
//                 />
//                 <div className="p-4 md:p-5 flex flex-col justify-center">
//                   <h3 className="text-[22px] leading-[33px] md:text-[44px] md:leading-[55px] text-gray-900 mb-2 bw-m">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-600 text-base md:text-[18px] bw-r">
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Incity_park_sec5;

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

"use client";
import React, { useEffect, useRef } from "react";

const Incity_park_sec5 = () => {
  const leftCards = [
    {
      video: "/incity_park/Quick Commerce.mp4",
      title: "3PL/Quick Commerce",
      description:
        "Enable faster dispatches and seamless fulfilment in the heart of the city.",
    },
    // {
    //   video: "/incity_park/Experience Center.mp4",
    //   title: "Service Centres",
    //   description:
    //     "Provide quick-turnaround repair, installation, or maintenance services.",
    // },
    {
      video: "/incity_park/Cold Storage.mp4",
      title: "Cold Storage",
      description:
        "Maintain temperature-sensitive goods in urban distribution networks.",
    },
    {
      video: "/incity_park/Light Industrial.mp4",
      title: "Storage & Assembly-Line Operations",
      description:
        "Carry out clean, low-footprint processes right where demand happens.",
    },
  ];

  const rightCards = [
    {
      video: "/incity_park/Quick Commerce.mp4",
      title: "Storage & Experience Center",
      description:
        "Bring your direct-to-consumer orders closer, for sub-two-hour delivery promises.",
    },
    {
      video: "/incity_park/R & D (2).mp4",
      title: "R&D ",
      description:
        "Test, prototype, and innovate within proximity to key urban markets.",
    },
    {
      video: "/incity_park/Central Kitchen.mp4",
      title: "Cloud Kitchens",
      description:
        "Optimise delivery-only kitchen operations in dense city zones.",
    },
  ];

  // Refs for all videos
  const videoRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.9, // play only when 90% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, options);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className=" lg:py-[100px] lg:pb-[100px] xl:pb-[100px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[45px]">
      {/* Background vectors */}
      <img
        className="purple_vctr hidden md:block absolute top-30 -right-20 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      <img
        className="orange_vctr hidden md:block absolute top-30 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      />
      <img
        className="purple_vctr hidden md:block absolute bottom-4 right-20 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      <img
        className="orange_vctr hidden md:block absolute bottom-1 right-40 md:w-[370px] w-[300px]"
        src="/green_vector.svg"
        alt="Orange Vector"
      />

      <div className="relative w-full fix">
        {/* Headings */}
        <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row pb-[30px]">
          <div className="max-w-[100%] xl:max-w-[45%]">
            <div className="flex flex-col lg:flex-row md:items-start relative lg:w-auto">
              <div className="flex items-start flex-col">
                <h2 className="bw-m lg:text-[56px] lg:leading-[40px] xl:text-[64px] wmhead xl:leading-[55px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[34px] text-[35px] md:leading-[40px] md:text-[43px] flex gap-[10px] md:gap-[17px]">
                  Versatile.
                  <img
                    src="/abstract_pattern.webp"
                    className="abstract_svg"
                    alt="Grade A Box"
                  />
                </h2>
                <h2 className="bw-r lg:text-[56px] lg:leading-[64px] xl:text-[64px] wmhead xl:leading-[74px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[45px] text-[35px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[500px]">
                  Dynamic. Agile.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-8 lg:gap-[40px]">
          {/* Left Column */}
          <div className="flex flex-col gap-8 lg:gap-9 w-full lg:w-[50%]">
            {leftCards.map((card, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden border border-[#CDCDCD] flex flex-col"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={card.video}
                  muted
                  loop
                  playsInline
                  className="w-full  md:h-50 lg:h-85 object-cover p-[7px]"
                />
                <div className="p-4 md:p-5 flex flex-col justify-center">
                  <h3 className="text-[22px] leading-[33px]  md:text-[30px] md:leading-[40px] lg:text-[44px] lg:leading-[54px] text-gray-900 mb-2 bw-m">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-[20px] bw-r">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:gap-9 w-full lg:w-[50%] pt-0 lg:pt-[80px]">
            {rightCards.map((card, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden border border-[#CDCDCD] flex flex-col"
              >
                <video
                  ref={(el) =>
                    (videoRefs.current[leftCards.length + index] = el)
                  }
                  src={card.video}
                  muted
                  loop
                  playsInline
                  className="w-full h-auto md:h-50 lg:h-85 object-cover p-[7px]"
                />
                <div className="p-4 md:p-5 flex flex-col justify-center">
                  <h3 className="text-[22px] leading-[33px] md:text-[30px] md:leading-[40px] lg:text-[44px] lg:leading-[55px] text-gray-900 mb-2 bw-m">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-[18px] bw-r">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incity_park_sec5;

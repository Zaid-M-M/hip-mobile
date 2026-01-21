import React from "react";

// const Card = ({ title, image, category, description, link }) => {
//   return (
//     // <div className="bg-[#EBEBEB] group hover:bg-[#F5F5F5] transition-colors duration-300 w-full relative justify-between flex h-[185px]">
//     //   <div className="xl:pl-[30px] md:pl-[15px] h-full gap-[30px] flex items-center justify-between md:py-[15px] xl:py-[30px]">
//     //     <div className="flex-shrink-0">
//     //       <img
//     //         src={image}
//     //         width={186}
//     //         height={125}
//     //         alt="Thumbnail"
//     //         className="w-[186px] h-[125px] object-cover"
//     //       />
//     //     </div>

//     //     <div className="flex flex-col justify-between ">
//     //       <div className="flex flex-col justify-between w-full h-full gap-[10px]">
//     //         <h3 className="text-[14px] inter-sb text-[#F47922]">
//     //           {" "}
//     //           {category || "No Category"}
//     //         </h3>
//     //         <p className="bw-sb 1024:text-lg xl:text-[20px] line-clamp-2 leading-[26px]">
//     //           {title || "No Title"}
//     //         </p>
//     //         <img src="/grayarr.svg" height={24} width={24} alt="Link" />
//     //       </div>
//     //     </div>
//     //   </div>

//     //   {/* Right-side custom SVG */}
//     //   <div className="flex justify-end h-full w-[30%] items-center ">
//     //     <svg
//     //       width="92"
//     //       height="184"
//     //       viewBox="0 0 92 184"
//     //       xmlns="http://www.w3.org/2000/svg"
//     //       className="transition-colors duration-300"
//     //     >
//     //       <path
//     //         d="M0 92L92 184L92 0L0 92Z"
//     //         className="fill-[#DEDDCE] group-hover:fill-[#0db14b] group-hover:ease-in transition-colors duration-300"
//     //       />
//     //     </svg>
//     //   </div>
//     // </div>
//     <div className="bg-[#EBEBEB] group hover:bg-[#F5F5F5] transition-colors duration-300 w-full relative justify-between flex h-[185px]">
//       <div className="xl:pl-[30px] md:pl-[15px] h-full gap-[30px] flex items-center justify-between md:py-[15px] xl:py-[30px]">
//         <div className="flex-shrink-0">
//           <img
//             src={image}
//             width={186}
//             height={125}
//             alt="Thumbnail"
//             className="w-[186px] h-[125px] object-cover"
//           />
//         </div>

//         <div className="flex flex-col justify-between">
//           <div className="flex flex-col justify-between w-full h-full gap-[10px]">
//             {/* Only show category if it exists */}
//             {category && (
//               <h3 className="text-[14px] inter-sb text-[#F47922]">
//                 {category}
//               </h3>
//             )}

//             <p className="bw-sb 1024:text-lg xl:text-[20px] line-clamp-2 leading-[26px]">
//               {title || "No Title"}
//             </p>

//             {description && (
//               <p className="text-[14px] inter-r text-gray-700 line-clamp-2 leading-[20px]">
//                 {description}
//               </p>
//             )}
//             <img src="/grayarr.svg" height={24} width={24} alt="Link" />
//           </div>
//         </div>
//       </div>

//       {/* Right-side custom SVG */}
//       <div className="flex justify-end h-full w-[30%] items-center">
//         <svg
//           width="92"
//           height="184"
//           viewBox="0 0 92 184"
//           xmlns="http://www.w3.org/2000/svg"
//           className="transition-colors duration-300"
//         >
//           <path
//             d="M0 92L92 184L92 0L0 92Z"
//             className="fill-[#DEDDCE] group-hover:fill-[#0db14b] group-hover:ease-in transition-colors duration-300"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Card;

const Card = ({ title, image, category, description, link, activeTab }) => {
  return (
    <div className="bg-[#EBEBEB] group hover:bg-[#F5F5F5] transition-colors duration-300 w-full relative justify-between flex h-[185px]">
      <div className="xl:pl-[30px] md:pl-[15px] h-full 768:gap-[30px] 1024:gap-[15px] xl:gap-[30px] flex items-center justify-between md:py-[15px] xl:py-[30px]">
        <div className="flex-shrink-0">
          <img
            src={image}
            width={186}
            height={125}
            alt="Thumbnail"
            className="w-[186px] h-[125px] object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-between w-full h-full gap-[10px]">
            {category && (
              <h3 className="text-[14px] inter-sb text-[#F47922]">
                {category}
              </h3>
            )}

            <p className="bw-sb 1024:text-lg xl:text-[20px] line-clamp-2 leading-[26px]">
              {title || "No Title"}
            </p>

            {/* ✅ Only show description if not Blog tab */}
            {activeTab !== 1 && description && (
              <p className="text-[14px] inter-r text-gray-700 line-clamp-2 leading-[20px]">
                {description}
              </p>
            )}

            <img src="/grayarr.svg" height={24} width={24} alt="Link" />
          </div>
        </div>
      </div>

      {/* Right-side SVG */}
      <div className="flex justify-end h-full w-[30%] items-center">
        <svg
          width="92"
          height="184"
          viewBox="0 0 92 184"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300"
        >
          <path
            d="M0 92L92 184L92 0L0 92Z"
            className="fill-[#DEDDCE] group-hover:fill-[#0db14b] group-hover:ease-in transition-colors duration-300"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;

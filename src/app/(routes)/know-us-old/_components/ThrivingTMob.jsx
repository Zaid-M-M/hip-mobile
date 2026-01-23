// "use client";
// import { Plus } from "lucide-react";

// const ThrivingMobile = ({ activeCard, handleCardClick }) => {
//   return (
//     <div className="w-full sm:w-1/2 items-center flex sm:hidden pt-[20px] sm:pt-0 flex-col gap-0">
//       {/* Card 1 */}
//       <div
//         className={`cursor-pointer border-t border-r flex justify-end pr-0 pt-2 relative aspect-square w-full max-w-[260px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 mr-0 ml-auto ${
//           activeCard === 1
//             ? "bg-[#f47920] border-[#f47920]"
//             : "border-[#BFBFBF] bg-white"
//         }`}
//         onClick={() => handleCardClick(1)}
//       >
//         <div
//           className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//             activeCard === 1 ? "opacity-0" : "opacity-100"
//           }`}
//         />
//         <p
//           className={`absolute text-white z-0 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-0 transition-opacity duration-300 ${
//             activeCard === 1 ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           At Horizon, collaboration is at the heart of how we work and grow
//           together. Success is a collective journey.
//         </p>
//         <div
//           className={`flex flex-col gap-2 items-end transition-opacity duration-300 pr-0 ${
//             activeCard === 1 ? "opacity-0" : "opacity-100"
//           }`}
//         >
//           <Plus />
//           <p className="text-[14px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//             A culture of <br /> trust and <br /> openness
//           </p>
//         </div>
//       </div>

//       {/* Card 2 */}
//       <div
//         className={`border-t border-r flex justify-end pr-0 pt-2 relative aspect-square w-full max-w-[260px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 -mt-[130px] ml-auto mr-[35px] ${
//           activeCard === 2
//             ? "bg-[#0db14b] border-[#0db14b]"
//             : "border-[#BFBFBF] bg-white"
//         }`}
//         onClick={() => handleCardClick(2)}
//       >
//         <div
//           className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//             activeCard === 2 ? "opacity-0" : "opacity-100"
//           }`}
//         />
//         <p
//           className={`absolute text-white z-0 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-5 transition-opacity duration-300 ${
//             activeCard === 2 ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           Agility is more than a workplace trait—it is a mindset that empowers
//           us to innovate, adapt, and deliver excellence every step of the way.
//         </p>
//         <div
//           className={`flex flex-col gap-2 items-end transition-opacity duration-300 ${
//             activeCard === 2 ? "opacity-0" : "opacity-100"
//           }`}
//         >
//           <Plus />
//           <p className="text-[14px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//             A culture of <br /> Learning And <br /> Experimentation
//           </p>
//         </div>
//       </div>

//       {/* Card 3 */}
//       <div
//         className={`border-t border-r flex justify-end pr-0 pt-2 relative aspect-square w-full max-w-[260px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 -mt-[130px] ml-auto mr-[70px] ${
//           activeCard === 3
//             ? "bg-[#8F53A1] border-[#8F53A1]"
//             : "border-[#BFBFBF] bg-white"
//         }`}
//         onClick={() => handleCardClick(3)}
//       >
//         <div
//           className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
//             activeCard === 3 ? "opacity-0" : "opacity-100"
//           }`}
//         />
//         <p
//           className={`absolute text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-1 transition-opacity duration-300 ${
//             activeCard === 3 ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           From embracing diversity to fostering mentorship, safety, and
//           sustainability, being excellent is a core part of our ethos.
//         </p>
//         <div
//           className={`flex flex-col gap-2 items-end transition-opacity duration-300 ${
//             activeCard === 3 ? "opacity-0" : "opacity-100"
//           }`}
//         >
//           <Plus />
//           <p className="text-[14px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
//             A culture that <br /> values diversity, <br /> quality and <br />
//             responsibility
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThrivingMobile;
"use client";
import { Plus } from "lucide-react";

const ThrivingMobile = ({ activeCard, handleCardClick }) => {
  return (
    <div className="w-full sm:w-1/2 items-center flex sm:hidden pt-[20px] sm:pt-0 flex-col gap-0">
      {/* Card 1 */}
      <div
        className={`cursor-pointer border-t border-r flex justify-end pr-0 pt-2 relative aspect-square w-full max-w-[260px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] transition-all duration-300 mr-0 ml-auto ${
          activeCard === 1
            ? "bg-[#f47920] border-[#f47920]"
            : "border-[#BFBFBF] bg-white pr-2"
        }`}
        onClick={() => handleCardClick(1)}
      >
        <div
          className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
            activeCard === 1 ? "opacity-0" : "opacity-100"
          }`}
        />
        <p
          className={`absolute text-white z-0 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-5 transition-opacity duration-300 ${
            activeCard === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          At Horizon, collaboration is at the heart of how we work and grow
          together. Success is a collective journey.
        </p>
        <div
          className={`flex flex-col gap-2 items-end transition-opacity duration-300 pr-0 ${
            activeCard === 1 ? "opacity-0" : "opacity-100"
          }`}
        >
          <Plus className="w-7 h-7 text-[#F47922]" />
          <p className="text-[14px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
            A culture of <br /> trust and <br /> openness
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className={`border-t border-r flex justify-end pr-0 pt-2 relative aspect-square w-full
        max-w-[260px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px]
        transition-all duration-300
        ${activeCard === 1 ? "-mt-[40px]" : "-mt-[130px]"}
        ml-auto mr-[35px]
        ${
          activeCard === 2
            ? "bg-[#0db14b] border-[#0db14b]"
            : "border-[#BFBFBF] bg-white pr-2"
        }`}
        onClick={() => handleCardClick(2)}
      >
        <div
          className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
            activeCard === 2 ? "opacity-0" : "opacity-100"
          }`}
        />
        <p
          className={`absolute text-white z-0 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-5 transition-opacity duration-300 ${
            activeCard === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          Agility is more than a workplace trait—it is a mindset that empowers
          us to innovate, adapt, and deliver excellence every step of the way.
        </p>
        <div
          className={`flex flex-col gap-2 items-end transition-opacity duration-300 ${
            activeCard === 2 ? "opacity-0" : "opacity-100"
          }`}
        >
          <Plus className="w-7 h-7 text-[#22B148]" />
          <p className="text-[14px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
            A culture of <br /> Learning And <br /> Experimentation
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className={`border-t border-r flex justify-end pr-0 pt-2 relative aspect-square w-full
        max-w-[260px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px]
        transition-all duration-300
        ${activeCard === 2 ? "-mt-[40px]" : "-mt-[130px]"}
        ml-auto mr-[70px]
        ${
          activeCard === 3
            ? "bg-[#8F53A1] border-[#8F53A1]"
            : "border-[#BFBFBF] bg-white pr-2"
        }`}
        onClick={() => handleCardClick(3)}
      >
        <div
          className={`absolute w-[142%] h-[1px] bg-[#BFBFBF] top-1/2 -left-[21%] rotate-45 transition-opacity duration-300 ${
            activeCard === 3 ? "opacity-0" : "opacity-100"
          }`}
        />
        <p
          className={`absolute text-white z-20 text-center top-1/2 -translate-y-1/2 bw-r text-[14px] sm:text-[20px] px-5 transition-opacity duration-300 ${
            activeCard === 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          From embracing diversity to fostering mentorship, safety, and
          sustainability, being excellent is a core part of our ethos.
        </p>
        <div
          className={`flex flex-col gap-2 items-end transition-opacity duration-300 ${
            activeCard === 3 ? "opacity-0" : "opacity-100"
          }`}
        >
          <Plus className="w-7 h-7 text-[#8F53A1]" />
          <p className="text-[14px] sm:text-[14px] 1280:text-[20px] bw-r text-right w-[160px] capitalize">
            A culture that <br /> values diversity, <br /> quality and <br />
            responsibility
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThrivingMobile;

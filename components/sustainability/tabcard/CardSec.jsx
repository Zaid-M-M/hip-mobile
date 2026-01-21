
// "use client";

// import React from "react";

// const CardSec = ({ cards }) => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
//       {cards.map((image, index) => (
//         <div
//           key={index}
//           className={`flex items-center justify-center h-[140px] md:h-[180px] xl:h-[260px] w-full border border-[#D4D4D4] bg-white p-4 ${index === 4
//               ? "lg:col-start-2 lg:row-start-2"
//               : index === 5
//                 ? "lg:col-start-3 lg:row-start-2"
//                 : ""
//             }`}
//         >
//           <img
//             src={image}
//             alt={`Card ${index + 1}`}
//             className="max-h-full max-w-full object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardSec;
"use client";

import React from "react";

const CardSec = ({ cards, cols = "2 md:grid-cols-3 lg:grid-cols-3" }) => {
  return (
    <div className={`grid ${cols} gap-6 w-full`}>
      {cards.map((image, index) => (
        <div
          key={index}
          className={`flex items-center justify-center h-[140px] md:h-[180px] xl:h-[260px] w-full border border-[#D4D4D4] bg-white p-4 ${index === 4
            ? "lg:col-start-2 lg:row-start-2"
            : index === 5
              ? "lg:col-start-3 lg:row-start-2"
              : ""
            }`}
        >
          <img
            src={image}
            alt={`Card ${index + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default CardSec;

// const cards = Array.from({ length: 18 }, (_, i) => ({ id: i + 1 }));

// export default function CardShowcase() {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto p-4 space-y-6">
//       {/* Grid for first 4 rows (16 cards) */}
//       <div className="grid grid-cols-4 gap-4">
//         {cards.slice(0, 16).map((card) => (
//           <div
//             key={card.id}
//             className="h-40 bg-gray-200 rounded shadow flex items-center justify-center"
//           >
//             Card {card.id}
//           </div>
//         ))}
//       </div>

//       {/* Flex for last row (2 cards) */}
//       <div className="flex justify-center gap-4">
//         {cards.slice(16).map((card) => (
//           <div
//             key={card.id}
//             className="h-40 w-[calc(25%-1rem)] bg-gray-200 rounded shadow flex items-center justify-center"
//           >
//             Card {card.id}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

const cards = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  image: `https://picsum.photos/300/200?random=${i + 1}`,
}));

export default function CardShowcase() {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-6 space-y-6">
      {/* Grid for first 16 cards (4x4) */}
      <div className="grid grid-cols-4 gap-6">
        {cards.slice(0, 16).map((card) => (
          <div
            key={card.id}
            className="bg-white rounded shadow overflow-hidden flex flex-col items-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center text-gray-800 font-semibold">
              {card.title}
            </div>
          </div>
        ))}
      </div>

      {/* Flex for last 2 cards centered */}
      <div className="flex justify-center gap-6">
        {cards.slice(16).map((card) => (
          <div
            key={card.id}
            className="w-[25%] bg-white rounded shadow overflow-hidden flex flex-col items-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center text-gray-800 font-semibold">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

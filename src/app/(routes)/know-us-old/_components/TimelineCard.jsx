// "use client";
// import Image from "next/image";

// export default function TimelineCard({ event }) {
//   return (
//     <div className="p-4 shadow-md break-inside-avoid bg-neutral-900 rounded-xl">
//       {event.image && (
//         <div className="mb-3">
//           <Image
//             src={event.image}
//             alt={event.text}
//             width={500}
//             height={300}
//             className="object-cover rounded-lg"
//           />
//         </div>
//       )}
//       {event.icon && (
//         <div className="mb-2">
//           <Image
//             src={event.icon}
//             alt="icon"
//             width={30}
//             height={30}
//             className="object-contain"
//           />
//         </div>
//       )}
//       <p className="text-sm text-gray-200">{event.text}</p>
//     </div>
//   );
// }

"use client";
import Image from "next/image";

export default function TimelineCard({ event }) {
  return (
    <div className="p-4 transition shadow-md break-inside-avoid bg-neutral-900 rounded-xl hover:shadow-lg">
      {/* Image */}
      {event.image && (
        <div className="mb-3">
          <Image
            src={event.image}
            alt={event.text}
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Icon */}
      {event.icon && (
        <div className="mb-2">
          <Image
            src={event.icon}
            alt="icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      )}

      {/* Text */}
      <p className="text-sm leading-relaxed text-gray-200">{event.text}</p>
    </div>
  );
}

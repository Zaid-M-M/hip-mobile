// export default function RegionPath({ region, isActive, onClick }) {
//   return (
//     <path
//       d={region.path}
//       fill={region.color}
//       stroke={isActive ? "#000" : "transparent"}
//       strokeWidth={2}
//       onClick={onClick}
//       className="transition-all duration-300 cursor-pointer hover:opacity-80"
//     />
//   );
// }

export default function RegionPath({ region, isActive, onClick }) {
  return (
    <path
      d={region.path}
      fill={region.color}
      stroke={isActive ? "#fff" : "transparent"}
      strokeWidth={2}
      onClick={onClick}
      className="transition-all duration-300 cursor-pointer hover:stroke-white"
    />
  );
}

// import { ChevronDown } from "lucide-react";

// export const DropdownFilter = ({ options, selected, onChange }) => (
//   <div className="relative mt-4">
//     <select
//       className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md appearance-none"
//       value={selected}
//       onChange={(e) => onChange(e.target.value)}
//     >
//       {options.map((opt) => (
//         <option key={opt.value} value={opt.value}>
//           {opt.label}
//         </option>
//       ))}
//     </select>
//     <ChevronDown
//       className="absolute right-6 top-[50%] translate-y-[-50%] text-gray-400"
//       size={16}
//     />
//   </div>
// );

import { ChevronDown } from "lucide-react";

export const DropdownFilter = ({ options, selected, onChange }) => (
  <div className="relative mt-4">
    <select
      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md appearance-none"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <ChevronDown
      className="absolute right-6 top-[50%] translate-y-[-50%] text-gray-400"
      size={16}
    />
  </div>
);

export default DropdownFilter;

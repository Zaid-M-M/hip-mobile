// "use client";

// import React from "react";
// import Link from "next/link";
// import clsx from "clsx";

// const Btn2 = ({ text, href, className = "", tgt = false }) => {
//   const baseClass =
//     "flex items-center gap-[10px] text-[12px] px-[18px] py-[12px] lg:px-[22px] cursor-pointer lg:py-[15px] w-fit lg:text-[16px] uppercase inter-sb tracking-[1.6px] bg-black text-white";

//   const classes = clsx(baseClass, className);

//   // Internal link using Next.js Link
//   if (href && href.startsWith("/")) {
//     return (
//       <Link href={href} className={classes}>
//         {text}
//         <img
//           className="w-[23px] md:w-[24px] lg:w-[25px]"
//           src="/btn_whit_arrow.svg"
//         />
//       </Link>
//     );
//   }

//   // External link or anchor
//   if (href) {
//     return (
//       <a
//         href={href}
//         className={classes}
//         target={tgt ? "_blank" : undefined} // <-- FIXED HERE
//         rel={tgt ? "noopener noreferrer" : undefined} // optional but recommended
//       >
//         {text}
//         <img
//           className="w-[23px] md:w-[24px] lg:w-[25px]"
//           src="/btn_whit_arrow.svg"
//         />
//       </a>
//     );
//   }

//   // No href = regular button
//   return (
//     <button className={classes}>
//       {text}
//       <img
//         className="w-[23px] md:w-[24px] lg:w-[25px]"
//         src="/btn_whit_arrow.svg"
//       />
//     </button>
//   );
// };

// export default Btn2;

// "use client";

// import React from "react";
// import Link from "next/link";
// import clsx from "clsx";

// const Btn2 = ({ text, href, className = "", tgt = false }) => {
//   const baseClass =
//     "flex items-center gap-[10px] text-[12px] px-[18px] py-[12px] lg:px-[22px] cursor-pointer lg:py-[15px] w-fit lg:text-[16px] uppercase inter-sb tracking-[1.6px] bg-black text-white";

//   const classes = clsx(baseClass, className);

//   // If it's a link and starts with `/`, use Next.js Link
//   if (href && href.startsWith("/")) {
//     return (
//       <Link href={href} className={classes}>
//         {text}
//         <img
//           className="w-[23px] md:w-[24px] lg:w-[25px] "
//           src="/btn_whit_arrow.svg"
//         />
//       </Link>
//     );
//   }

//   // External link or no href = <a>
//   if (href) {
//     return (
//       <a
//         href={href}
//         className={classes}
//         target={`${tgt && "_blank"}`}
//         rel="noopener noreferrer"
//       >
//         {text}
//         <img
//           className="w-[23px] md:w-[24px] lg:w-[25px] "
//           src="/btn_whit_arrow.svg"
//         />
//       </a>
//     );
//   }

//   // No href = regular button
//   return (
//     <button className={classes}>
//       {text}
//       <img
//         className="w-[23px] md:w-[24px] lg:w-[25px] "
//         src="/btn_whit_arrow.svg"
//       />
//     </button>
//   );
// };

// export default Btn2;
"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

const Btn2 = ({ text, href, className = "", tgt = false }) => {
  const baseClass =
    "flex items-center gap-[10px] text-[12px] px-[18px] py-[12px] lg:px-[22px] lg:py-[15px] w-fit lg:text-[16px] uppercase inter-sb tracking-[1.6px] bg-black text-white  cursor-pointer hover:opacity-80 transition-opacity duration-300";

  const classes = clsx(baseClass, className);

  // Internal link using Next.js Link
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {text}
        <img
          className="!w-[23px] md:!w-[24px] lg:!w-[25px]"
          src="/btn_whit_arrow.svg"
        />
      </Link>
    );
  }

  // External link or anchor
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={tgt ? "_blank" : undefined} // <-- FIXED HERE
        rel={tgt ? "noopener noreferrer" : undefined} // optional but recommended
      >
        {text}
        <img
          className="!w-[23px] md:!w-[24px] lg:!w-[25px]"
          src="/btn_whit_arrow.svg"
        />
      </a>
    );
  }

  // No href = regular button
  return (
    <button className={classes}>
      {text}
      <img
        className="w-[23px] md:w-[24px] lg:w-[25px]"
        src="/btn_whit_arrow.svg"
      />
    </button>
  );
};

export default Btn2;

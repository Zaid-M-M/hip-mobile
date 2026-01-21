// import React from 'react';

// const Btn = ({ text }) => {
//   return (
//     <button className="px-[30px] py-[15px] w-fit text-[14px] uppercase inter-sb tracking-[0.1em] bg-black text-[#fff]">
//       {text}
//     </button>
//   );
// };

// export default Btn;

"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import TransitionLink from "@/src/app/TransitionLink";

const Btn = ({ text, href, className = "" }) => {
  const baseClass =
    "flex items-center gap-[10px] text-[12px] px-[18px] py-[12px] lg:px-[22px] cursor-pointer lg:py-[15px] w-fit lg:text-[16px] uppercase inter-sb tracking-[1.6px] bg-black text-white cursor-pointer hover:opacity-80 transition-opacity duration-300";

  const classes = clsx(baseClass, className);

  // If it's a link and starts with `/`, use Next.js Link
  if (href && href.startsWith("/")) {
    return (
      <TransitionLink href={href} className={classes}>
        {text}
        <img
          className="w-[23px] md:w-[24px] lg:w-[25px] "
          src="/btn_whit_arrow.svg"
        />
      </TransitionLink>
    );
  }

  // External link or no href = <a>
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
        <img
          className="w-[23px] md:w-[24px] lg:w-[25px] "
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
        className="w-[23px] md:w-[24px] lg:w-[25px] "
        src="/btn_whit_arrow.svg"
      />
    </button>
  );
};

export default Btn;

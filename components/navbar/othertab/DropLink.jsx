"use client";
import Link from "next/link";
import React from "react";

const DropLink = ({ text, active = false }) => {
  return (
    <Link
      href={text}
      className={`w-full px-6 py-4 cursor-pointer transition-colors duration-200 
        ${
          active
            ? "border-b border-[#F47922] bg-[rgba(0,0,0,0.02)] text-[#000]"
            : "border-b border-[#D4D4D4] bg-transparent text-[#595959]"
        }
        font-barlow font-medium text-[20px] leading-[26px] text-center`} // optional: text-center
    >
      {text}
    </Link>
  );
};

export default DropLink;

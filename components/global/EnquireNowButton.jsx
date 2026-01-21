// components/global/EnquireNowButton.jsx
import Link from "next/link";
import React from "react";

export default function EnquireNowButton() {
  return (
    <Link
      href="/contact/" // or use a modal or mailto: link
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50
             h-[32px] px-[17.5px] rotate-[-90deg]
             flex items-center justify-center
             text-white bg-[#0D0D0D]
             border-t border-l border-r border-[#8F53A1]
             rounded-t-[10px]
             shadow-[0px_0px_20px_rgba(0,0,0,0.55)] 
             text-sm font-medium hover:bg-[#1a1a1a]
             transition-colors duration-200
            "
    >
      Enquire Now
    </Link>
  );
}

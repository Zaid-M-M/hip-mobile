"use client";

import { useShowcaseStore } from "@/lib/ useShowcaseStore";
// import Image from "next/image";
import { useEffect, useState } from "react";

export default function ShowcaseBackground({ items }) {
  const activeBackground = useShowcaseStore((state) => state.activeBackground);
  const [current, setCurrent] = useState(items[0].backgroundImage);

  useEffect(() => {
    if (activeBackground) setCurrent(activeBackground);
  }, [activeBackground]);

  return (
    <img
      src={current}
      alt="Dynamic background"
      fill
      className="absolute inset-0 z-0 object-cover transition-all duration-500"
    />
  );
}

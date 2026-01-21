"use client";

import { useShowcaseStore } from "@/lib/ useShowcaseStore";

export default function ShowcaseCard({ item }) {
  const setActiveBg = useShowcaseStore((state) => state.setActiveBackground);

  return (
    <div
      onMouseEnter={() => setActiveBg(item.backgroundImage)}
      className="p-4 text-black transition-all duration-300 border cursor-pointer hover:border-white bg-white/10"
    >
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="text-sm">{item.description}</p>
    </div>
  );
}

// import Image from "next/image";
import React from "react";
import ShowcaseCard from "./_components/ShowcaseCard";
import ShowcaseBackground from "./_components/ShowcaseBackground";

const items = [
  {
    id: 1,
    title: "Park One",
    description: "Explore state-of-the-art logistics park.",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1750939042335-7473a126e1c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    title: "Park Two",
    description: "Top-tier industrial infrastructure.",
    backgroundImage: "",
  },
  {
    id: 3,
    title: "Park Two",
    description: "Top-tier industrial infrastructure.",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1749814603352-f47a596edd52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Park Two",
    description: "Top-tier industrial infrastructure.",
    backgroundImage:
      "https://images.unsplash.com/photo-1750263102524-8f24f397b59b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Park Two",
    description: "Top-tier industrial infrastructure.",
    backgroundImage:
      "https://images.unsplash.com/photo-1750658659691-1f7b2bd37337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Park Two",
    description: "Top-tier industrial infrastructure.",
    backgroundImage:
      "https://images.unsplash.com/photo-1750658659691-1f7b2bd37337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Park Two",
    description: "Top-tier industrial infrastructure.",
    backgroundImage:
      "https://images.unsplash.com/photo-1750658659691-1f7b2bd37337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Park Two",
    description: "Top-tier industrial infrastructure.",
    backgroundImage:
      "https://images.unsplash.com/photo-1750688650387-48fbdc7399b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HeroIntroSector() {
  return (
    <div className="min-h-screen space-y-4 text-black fix">
      <h1 className="text-[66px] z-10 bw-m leading-[70px] ">
        <span className="flex items-center gap-4">
          Grade A{" "}
          <div style={{ width: 133, height: 58, position: "relative" }}>
            <img
              src="/frame.png"
              alt="Frame"
              fill // use fill instead of width/height here
              style={{ objectFit: "contain" }}
            />
          </div>
        </span>
        <span className="block">Industrial and Logistics Parks</span>
      </h1>

      <ShowcaseBackground items={items} />
      <div className="relative z-10 grid grid-cols-3 p-12 place-content-end">
        {items.map((item) => (
          <ShowcaseCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

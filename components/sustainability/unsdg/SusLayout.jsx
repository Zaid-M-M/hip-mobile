"use client";
import React from "react";
import SustainCard from "./SustainCard";
import { sustainData } from "./SustainData";
import SustainCardF from "./SustainCardF";

export default function SusLayout() {
  const leftCol = sustainData.filter((_, i) => i % 2 === 0); // even indexes → left
  const rightCol = sustainData.filter((_, i) => i % 2 === 1); // odd indexes → right

  return (
    <>
      <section className="lg:grid z-10 hidden md:grid-cols-2 gap-6 md:gap-20 xl:gap-16 2xl:gap-[90px] pt-12 relative">
        {/* Left column */}
        <div className="flex relative z-10 flex-col gap-8 mt-0">
          {leftCol.map((item, i) => {
            // get original index to display +1
            const realIndex = sustainData.findIndex((d) => d === item);
            return (
              <SustainCardF
                key={realIndex}
                index={realIndex + 1}
                title={item.title}
                desc={item.desc}
                img_data={item.sustain_img}
                imgCount={item.imgCount}
              />
            );
          })}
        </div>

        {/* Right column */}
        <div className="flex relative z-10 flex-col gap-8 mt-40">
          {rightCol.map((item, i) => {
            const realIndex = sustainData.findIndex((d) => d === item);
            return (
              <SustainCardF
                key={realIndex}
                index={realIndex + 1}
                title={item.title}
                desc={item.desc}
                img_data={item.sustain_img}
                imgCount={item.imgCount}
              />
            );
          })}
        </div>
      </section>
      <section className="lg:hidden grid grid-cols-1">
        <div className="flex flex-col gap-2 mt-0">
          {sustainData.map((item, i) => {
            // get original index to display +1
            const realIndex = sustainData.findIndex((d) => d === item);
            return (
              <SustainCardF
                key={realIndex}
                index={realIndex + 1}
                title={item.title}
                desc={item.desc}
                img_data={item.sustain_img}
                imgCount={item.imgCount}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

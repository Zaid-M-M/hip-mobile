"use client";
import Image from "next/image";

export default function SustainCard({ index, title, desc, imgCount }) {
  // Calculate base index for image naming (index here is 1-based)
  const baseIndex = index;

  return (
    <div className="flex flex-col items-end">
      {/* Dynamic index */}
      <span className="relative z-0 w-full flex justify-start text-[55px] md:text-[76px] md:leading-[86px] xl:text-[156px] h-fit xl:leading-[130px] tracking-[-0.5%] bw-xb str-gradient">
        {index}
      </span>

      <div
        className="relative w-full xl:w-[90%] -mt-5 bg-black/60 border border-white/20
             rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] flex flex-col"
        style={{ height: "278px" }}
      >
        {/* Top SDG images */}
        <div
          className="w-full relative z-10 flex flex-wrap p-0 overflow-hidden rounded-tl-[40px]"
          style={{ height: "140px" }}
        >
          {Array.from({ length: imgCount }).map((_, i) => {
            const imgSrc = `/sustainability/s/s${baseIndex}${i + 1}.svg`; // dynamic path
            return (
              <Image
                key={i}
                src={imgSrc}
                alt="SDG Icon"
                width={80}
                height={140}
                className="object-cover w-[calc(25%-0.5rem)] h-full rounded-none flex-1"
              />
            );
          })}
        </div>

        {/* Bottom text */}
        <div className="flex flex-col gap-2 p-5 md:p-7">
          <h3 className="text-white uppercase bw-r xl:leading-[30px] leading-[26px] text-[16px] xl:text-[20px]">
            {title}
          </h3>
          <p className="text-[#E0E0E0] text-[16px] leading-[26px]">{desc}</p>
        </div>
      </div>
    </div>
  );
}

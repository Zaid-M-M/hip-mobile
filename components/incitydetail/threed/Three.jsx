import React from "react";

const Three = ({ incity_3d_h1, incity_3d_h2, incity_3d_url }) => {
  return (
    <div className="relative bg-black w-full xl:py-15 py-12 overflow-hidden !pb-[0px]">
      <img
        src="/culture/vidbg.svg"
        className="top-12 right-[max(5%,calc((100vw-1340px)/2))] z-0 absolute"
        alt=""
      />
      <div className="flex flex-col fixup gap-10">
        <div className="flex items-left flex-col relative w-fit">
          <h2
            className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] !font-medium bw-m txt_gradient whitespace-nowrap capitalize"
            dangerouslySetInnerHTML={{ __html: incity_3d_h1 }}
          />
          <div className="flex gap-[10px] md:gap-[17px]">
            <h2
              className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-r bg-gradient-to-r overflow-visible text-white capitalize"
              dangerouslySetInnerHTML={{ __html: incity_3d_h2 }}
            />
            <img src="/abstract_pattern.svg" className="abstract_svg w-max" />
          </div>
        </div>
      </div>
      <iframe
        className="relative z-20 xl:h-[600px] h-auto xl:aspect-auto aspect-square mt-[50px] pr-[50px]"
        src={incity_3d_url}
        width="100%"
        allow="fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Three;

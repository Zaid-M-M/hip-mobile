import React from "react";
import Culture_tab_sec5 from "./Culture_tab_sec5";

const Culture_sec3 = ({
  career_sec5_accordion = [],
  career_sec4_description,
}) => {
  console.log(career_sec5_accordion);
  return (
    <div className="bg-black w-full ">
      <div className="relative w-full  1280:pt-[100px] 1280:pb-[0px] pt-[45px] pb-[45px]">
        <img
          src="/culture/vidbg.svg"
          className="top-12 opacity-[0.5] right-[max(5%,calc((100vw-1340px)/2))] z-0 absolute"
          alt=""
        />
        <div className="fix flex flex-col justify-between gap-[15px] lg:gap-[25px] xl:gap-[0px] mb-[0px]">
          <div className="flex items-left flex-col relative w-fit">
            <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] !font-medium bw-m txt_gradient whitespace-nowrap capitalize">
              A culture that values
            </h2>

            <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-r bg-gradient-to-r overflow-visible text-white capitalize">
              diversity, quality and responsibility
            </h2>
          </div>

          <p
            className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-[#E0E0E0] lg:pt-[17px]"
            dangerouslySetInnerHTML={{ __html: career_sec4_description }}
          />
        </div>

        <Culture_tab_sec5 career_sec5_accordion={career_sec5_accordion} />
      </div>
    </div>
  );
};

export default Culture_sec3;

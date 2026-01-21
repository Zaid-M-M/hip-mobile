import React from "react";
import Culture_tab_sec5 from "../culture/Culture_sec5/Culture_tab_sec5";
import BusinessTab from "./BusinessTab";

const BusinessEco = () => {
  return (
    <div className="bg-black w-full ">
      <div className="relative w-full  1280:pt-[100px] xl:pb-[70px]  pt-[45px] pb-[45px]  ">
        <img
          src="/culture/vidbg.svg"
          className="top-12 opacity-[0.5] right-[max(5%,calc((100vw-1340px)/2))] z-0 absolute"
          alt=""
        />
        <div className="fixup flex flex-col justify-between gap-[15px] lg:gap-[25px] xl:gap-[0px] mb-[0px]">
          <div className="flex items-left flex-col relative w-fit">
            <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[66px] xl:leading-[76px] xl:tracking-[-2.64px] !font-medium bw-m txt_gradient whitespace-nowrap capitalize">
              Business
            </h2>

            <div className="flex gap-[10px] md:gap-[17px]  flex-row">
              <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[66px] xl:leading-[76px] xl:tracking-[-2.64px] bw-r bg-gradient-to-r overflow-visible text-white capitalize">
                Ecosystem
              </h2>
              <img src="/abstract_pattern.svg" className="abstract_svg" />
            </div>
          </div>

          <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-[#E0E0E0] lg:pt-[17px]">
            Our industrial and logistics parks act as complete business
            ecosystems by concentrating diverse workforce amenities,
            interconnected IT services and inventory management in a single
            location, fostering collaboration, innovation, and growth for
            tenants and the broader community.
          </p>
          <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-[#E0E0E0] lg:pt-[17px]">
            By providing a holistic ecosystem, Horizon parks aim enable
            customers to attract and retain top talent and drive long-term value
            for their business.
          </p>
        </div>
        <BusinessTab />
        {/* <Culture_tab_sec5 career_sec5_accordion={career_sec5_accordion} /> */}
      </div>
    </div>
  );
};

export default BusinessEco;

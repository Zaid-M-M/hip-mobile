import React from "react";
import Btn from "../../global/Btn";

const iboxs = [
  {
    icon: "/fulfillment_center/highquality_sec3.svg",
    text: "We use premium-grade concrete, steel, and roofing systems that ensure long-term durability, resistance to wear and tear, and minimal maintenance costs. ",
    heading: "High-Quality Building Materials",
  },
  {
    icon: "/fulfillment_center/advance_sec3.svg",
    text: "Our warehouses feature wide-span column-free interiors, maximizing usable space and allowing for high-density racking and seamless material flow.",
    heading: "Advanced Structural Design",
  },
  {
    icon: "/fulfillment_center/fast_sec3.svg",
    text: "Leveraging lean construction methodologies and modular building components, we minimize project timelines without compromising quality. ",
    heading: "Fast-Track Construction",
  },
  //   {
  //     icon: "/enabling_agile/sustanable_icon_sec2.5.svg",
  //     text: "Energy-efficient building design, parks that excel in biodiversity and resource management. Initiatives to enrich local communities and ethical governance across our business.",
  //     heading: "Sustainable",
  //   },
  //   {
  //     icon: "/ind/ex.svg",
  //     text: "Smartly designed and well-located signage for easy navigation",
  //     heading: "Right Fitted",
  //   },
];

const Fulfillment_sec3 = () => {
  return (
    <div className="relative overflow-hidden">
      {/* <img
        className="purple_vctr  hidden md:block absolute top-0 right-0 md:top-[-70px] md:right-[50px] lg:w-[450px] md:w-[350px] w-[300px]"
        src="/purple_vector.svg"
      />
      <img
        className="green_vctr  hidden md:block absolute top-0 right-0 md:top-[-100px] md:right-[-100px] lg:w-[450px] md:w-[350px] w-[300px]"
        src="/green_vector.svg"
      /> */}

      <div className="fix lg:py-[70px] xl:py-[50px] py-[45px]">
        {/* Heading + Button */}
        <div className="flex md:flex-row flex-col lg:gap-0 gap-10 w-full justify-between md:items-center 360:pb-[15px]">
          <div>
            <h2 className="bw-r sec_hd text-[34px] sm:text-[44px] md:text-[54px] lg:text-[66px] leading-tight">
              <span className="flex gap-[10px] md:gap-[17px] md:flex-row flex-row text-[28px] leading-[25px] md:text-[45px] md:leading-[55px] lg:text-[64px] lg:leading-[76px] lg:tracking-[-2.56px]">
                Precision Engineering{" "}
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg sm:flex hidden"
                  alt=""
                />
              </span>

              <span className="bw-m flex flex-col lg:flex-row items-start lg:items-center gap-[10px] md:gap-[17px] text-[28px] leading-[34px] md:text-[45px] md:leading-[55px] lg:text-[64px] lg:leading-[76px] lg:letter-spacing-[-2.56px]">
                and Construction Excellence
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg lg:hidden flex md:hidden"
                  alt=""
                />
              </span>
            </h2>

            <p className="text-black bw-r text-[15px] lg:text-[20px] pt-[12px] lg:pt-[37px]">
              We understand that the foundation of a world-class warehouse lies
              in the strength and quality of its construction. Our engineering
              team employs cutting-edge construction techniques and materials to
              deliver structures that are not only durable and resilient but
              also flexible to accommodate future expansions or modifications.
            </p>
          </div>

          {/* Optional button — uncomment if needed */}
          {/* <div>
    <Btn text="WORKFORCE AMENITIES" className="hidden md:flex" />
  </div> */}
        </div>

        {/* ibox items */}
        <div className="flex flex-wrap w-full md:mt-[20px] mt-0 gap-[13px] md:gap-[10px] justify-between">
          {iboxs.map((ib, index) => (
            <div
              key={index}
              className="flex bw-r text-[20px] flex-col 
      w-full                 /* ✅ 1 per row on mobile */
      md:w-[31.5%]           /* ✅ 3 per row on tablet */
      lg:w-1/3.4             /* ✅ normal layout on large screens */
      items-start 
      md:gap-3 gap-[0px] 
      border 
      md:border-l md:border-y-0 md:border-r-0 
      border-[#94969C] 
      md:py-6 md:px-5 p-[10px]"
            >
              <img
                src={ib.icon}
                alt={ib.text}
                className="w-[60px] md:w-20 h-20 shrink-0"
              />
              <h2 className="text-[20px] leading-[30px] lg:text-[24px] lg:leading-[34px] bw-m">
                {ib.heading}
              </h2>
              <p className="text-[15px] leading-[1.4] lg:text-[20px] lg:leading-[1.5]">
                {ib.text}
              </p>
            </div>
          ))}
        </div>

        {/* <Btn text="WORKFORCE AMENITIES" className="mt-[30px] block md:hidden" /> */}
      </div>
    </div>
  );
};

export default Fulfillment_sec3;

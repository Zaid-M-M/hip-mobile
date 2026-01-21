import React from "react";
import Btn from "../../global/Btn";

const iboxs = [
  {
    icon: "/enabling_agile/right_icon_sec2.5.svg",
    text: "Integrated solutions that perfectly fit your needs, across first-mile, mid-mile, and last-mile operations. Parks in strategic locations, offering ready-to-move and built-to-suit developments. ",
    heading: "Right Fitted",
  },
  {
    icon: "/enabling_agile/hand_icon_sec2.5.svg",
    text: "A consultative, customer-first approach led by seasoned industry experts. In-house projects design and development, and asset management team ensuring accountability.",
    heading: "Hands-On",
  },
  {
    icon: "/enabling_agile/efficient_icon_sec2.5.svg",
    text: "Integrated project delivery with 100% compliance and on-time execution, with reduced time-to-market for customers. Technology integration for park management. ",
    heading: "Efficient",
  },
  {
    icon: "/enabling_agile/sustanable_icon_sec2.5.svg",
    text: "Energy-efficient building design, parks that excel in biodiversity and resource management. Initiatives to enrich local communities and ethical governance across our business.",
    heading: "Sustainable",
  },
  //   {
  //     icon: "/ind/ex.svg",
  //     text: "Smartly designed and well-located signage for easy navigation",
  //     heading: "Right Fitted",
  //   },
];

const Enab_Agil_sec2_5 = () => {
  return (
    <div className="relative overflow-hidden bg-[#F5F5F5]">
      <img
        className="purple_vctr  hidden md:block absolute top-0 right-0 md:top-[-70px] md:right-[50px] lg:w-[450px] md:w-[350px] w-[300px]"
        src="/purple_vector.svg"
      />
      <img
        className="green_vctr  hidden md:block absolute top-0 right-0 md:top-[-100px] md:right-[-100px] lg:w-[450px] md:w-[350px] w-[300px]"
        src="/green_vector.svg"
      />

      <div className="fix lg:py-[70px] xl:py-[100px] py-[45px]">
        {/* Heading + Button */}
        <div className="flex md:flex-row flex-col lg:gap-0 gap-10 w-full justify-between md:items-center 360:pb-[15px]">
          <div>
            <h2 className="bw-r sec_hd">
              <span>Our Business </span>
              <span className="bw-m flex items-center gap-[10px] md:gap-[17px]">
                Ethos
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt=""
                />
              </span>
            </h2>
          </div>
          {/* <div>
            <Btn text="WORKFORCE AMENITIES" className="hidden md:flex" />
          </div> */}
        </div>

        {/* ibox items */}
        <div className="flex lg:flex-nowrap flex-wrap w-full md:mt-[20px] mt-0 gap-[13px] md:gap-[8px] ">
          {iboxs.map((ib, index) => (
            <div
              key={index}
              className="flex bw-r text-[20px] flex-col xl:w-1/3.4 w-[46%] md:w-[46%] items-start md:gap-3 gap-[0px] border md:border-l md:border-y-0 md:border-r-0 border-[#94969C] md:py-6 md:px-5 p-[10px] 360:w-[auto]"
            >
              <img
                src={ib.icon}
                alt={ib.text}
                className="w-[60px] md:w-20 h-20 shrink-0"
              />
              <h3 className="text-[25px] md:text-[30px] bw-m">{ib.heading}</h3>
              <p className="text-[17px] md:text-[17px] leading-[1.5]">
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

export default Enab_Agil_sec2_5;

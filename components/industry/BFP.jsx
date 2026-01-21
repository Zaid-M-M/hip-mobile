import React from "react";
import Btn from "../global/Btn";

const iboxs = [
  {
    icon: "/ind/whc.svg",
    text: "Barrier free design for building access to the differently abled",
  },
  {
    icon: "/ind/nat.svg",
    text: "Miyawaki forests, green cover around perimeter & common areas",
  },
  {
    icon: "/ind/tic.svg",
    text: "Conveniences including refreshment on meals and ATM",
  },
  {
    icon: "/ind/exit.svg",
    text: "Signage for regulatory information, safety and emergency guidelines",
  },
  {
    icon: "/ind/ex.svg",
    text: "Smartly designed and well-located signage for easy navigation",
  },
];

const BFP = () => {
  return (
    <div className="relative overflow-hidden">
      <img className="purple_vctr  hidden md:block absolute top-0 right-0 md:top-[-70px] md:right-[50px] lg:w-[450px] md:w-[350px] w-[300px]" src='/purple_vector.svg' />
      <img className="green_vctr  hidden md:block absolute top-0 right-0 md:top-[-100px] md:right-[-100px] lg:w-[450px] md:w-[350px] w-[300px]" src='/green_vector.svg' />

      <div className='fix lg:py-[70px] xl:py-[100px] py-[45px]'>
        {/* Heading + Button */}
        <div className='flex md:flex-row flex-col lg:gap-0 gap-10 w-full justify-between md:items-center'>
          <div>
            <h2 className='bw-r sec_hd'>
              <span>Built For</span>
              <span className='bw-m flex items-center gap-[10px] md:gap-[17px]'>
                People
                <img
                  src='/abstract_pattern.svg'
                  className='abstract_svg'
                  alt=''
                />
              </span>
            </h2>
          </div>
          <div>
            <Btn text='WORKFORCE AMENITIES' className="hidden md:flex" />
          </div>
        </div>

        {/* ibox items */}
        <div className='flex lg:flex-nowrap flex-wrap w-full md:mt-[20px] mt-0 gap-[20px] md:gap-8'>
          {iboxs.map((ib, index) => (
            <div
              key={index}
              className='flex bw-r text-[20px] flex-col xl:w-1/5 w-[46%] md:w-[46%] items-start md:gap-4 gap-[0px] border md:border-l md:border-y-0 md:border-r-0 border-[#94969C] md:py-6 md:px-5 p-[10px]'
            >
              <img src={ib.icon} alt={ib.text} className='w-[60px] md:w-20 h-20 shrink-0' />
              <p className='text-[14px] md:text-[18px] leading-[1.5]'>{ib.text}</p>
            </div>
          ))}
        </div>
        <Btn text='WORKFORCE AMENITIES' className="mt-[30px] block md:hidden" />
      </div>
    </div>
  );
};

export default BFP;

import React from "react";

const Header = () => {
  return (
    <div className="flex items-left flex-col relative w-fit">
      <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] !font-medium bw-m txt_gradient whitespace-nowrap capitalize">
        Don't just take our word
      </h2>

      <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-r bg-gradient-to-r overflow-visible text-white capitalize">
        Here's what our people
      </h2>
      <div className="flex gap-[10px] mt-2 md:gap-[17px]  md:flex-row flex-col">
        <h2 className="text-[35px] leading-[45px] tracking-[-1.90px] md:text-[45px] md:leading-[55px] md:tracking-[-1.90px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-2.24px] bw-r bg-gradient-to-r overflow-visible text-white capitalize">
          Are saying about us
        </h2>
        <img
          src="/abstract_pattern.svg"
          className="abstract_svg xl:mt-[11px]"
        />
      </div>
    </div>
  );
};

export default Header;

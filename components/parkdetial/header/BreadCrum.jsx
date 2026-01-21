import React from "react";

const BreadCrum = ({ park_name }) => {
  return (
    <div className="bw-r text-[11px] md:text-[13px] lg:text-[16px] px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-[fit-content] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-white  whitespace-nowrap">
      <a href="/" className="text-[11px] md:text-[13px] lg:text-[16px]">
        Home
      </a>{" "}
      /{" "}
      <a
        href="/industrial-logistics-parks/"
        className="text-[11px] md:text-[13px] lg:text-[16px] "
      >
        Industrial & Logistics Parks
      </a>{" "}
      /{" "}
      <span
        dangerouslySetInnerHTML={{ __html: park_name }}
        className="text-[11px] md:text-[13px] lg:text-[16px] "
      />
    </div>
  );
};

export default BreadCrum;

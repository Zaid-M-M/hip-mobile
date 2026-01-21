import React from "react";

const White_Paper_sec6 = () => {
  return (
    <div className="relative fix ">
      <h2 className=" text-[33px] leading-[43px] lg:text-[40px] lg:leading-[50px] bw-m lg:pb-[35px] lg:pt-[40px] pb-[20px] pt-[25px]">
        Mapping India's Reverse Logistics Landscape
      </h2>
      <div className="w-full h-[100%] flex justify-center xl:mb-[30px] xl:mt-[10px] pb-[10px] ">
        <img src="/white_paper/white_sec6.jpg" alt="" />
      </div>
      <div className="pb-[30px]">
        <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-m pb-[16px]">
          Return Rates, Market Size & Growth Potential
        </p>
        <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pb-[16px]">
          Reverse logistics in India is shaped by unique local dynamics:
        </p>

        <ul className="space-y-3 xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
          <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            E-commerce explosion:{" "}
            <span className="bw-r">
              From $46B in 2020 to over $75B in 2024 (IBEF).
            </span>{" "}
          </li>
          <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            Cash-on-delivery culture:{" "}
            <span className="bw-r">
              Nearly 26% COD orders rejected, vs &lt;2% prepaid.
            </span>{" "}
          </li>
          <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            Informal recycling sector:{" "}
            <span className="bw-r">
              Unorganized players handle nearly 90% of e-waste.
            </span>{" "}
          </li>
          <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            Urban-rural split:{" "}
            <span className="bw-r">
              Tier-2 and Tier-3 cities drive growth, but returns infrastructure
              lags behind.
            </span>{" "}
          </li>
        </ul>
      </div>
      <div className="w-full h-auto bg-white py-6  ">
        {/* OUTER BOX */}
        <div className="w-full h-auto bg-[#FFFFFF] border border-[#D0D0D0] p-[10px] lg:p-[50px]">
          {/* ---------- TOP HEADING ---------- */}
          <div className="">
            {/* <h2 className="text-[28px]  font-semibold text-black">
              India’s reverse Logistics market
            </h2> */}
            {/* <p className="text-gray-600 text-[16px] mt-4 max-w-[800px] mx-auto">
                Add a subtitle or a brief paragraph that introduces what this
                section is about.
              </p> */}
          </div>

          {/* ---------- BOTTOM IMAGE BOXES ---------- */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            {/* LEFT IMAGE */}
            <div className=" overflow-hidden rounded-xl lg:pt-[65px] pt-[10px] md:pt-[40px]">
              {/* <img
                src="/white_paper/white_sec4 chart.svg"
                alt="Left Side"
                className=" object-cover "
              /> */}
              <h2 className=" text-[17px] leading-[26px] lg:text-[28px] lg:leading-[38px] md:text-[28px] md:leading-[38px] bw-m">
                CATEGORIES WISE E-COMMERCE
              </h2>
              <h2 className="text-[17px] leading-[26px] lg:text-[28px] lg:leading-[38px] md:text-[28px] md:leading-[38px] bw-m">
                RETURN RATE (INDIA 2024)
              </h2>
            </div>

            {/* RIGHT IMAGE */}
            <div className=" overflow-hidden rounded-xl">
              <img
                src="/white_paper/graph.png"
                alt="Right Side"
                className="w-full  object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r ">
          <span className="bw-m">Market size: </span>$33B-$90B (depending on
          inclusion of recycling/re-commerce).
        </h2>
        <h2 className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pt-[26px]">
          <span className="bw-m"> Growth:</span>15-20% CAGR projected till 2030.
        </h2>
        <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[26px] pt-[30px] pb-[10px] bw-m">
          Environmental Dimension:
        </p>
        <ul className="space-y-3 xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
          <li className="bw-r relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            India generated 1.25 million tonnes of e-waste in FY24, projected to
            hit 1.40 million tonnes in FY25 (CPCB data).
          </li>
          <li className="bw-r relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            New EPR (Extended Producer Responsibility) laws mandate companies to
            take back and recycle electronics, batteries, and packaging.
          </li>
          {/* <li className="bw-m relative md:lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            E-commerce explosion:{" "}
            <span className="bw-r">
              From $46B in 2020 to over $75B in 2024 (IBEF).
            </span>{" "}
            
          </li>
          <li className="bw-m relative md:lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
            E-commerce explosion:{" "}
            <span className="bw-r">
              From $46B in 2020 to over $75B in 2024 (IBEF).
            </span>{" "}
            returns.
          </li> */}
        </ul>
        <h2 className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pt-[20px] ">
          <span className="bw-m">Bottom line:</span> Reverse logistics is no
          longer optional. It is central to compliance, ESG goals, and
          profitability.
        </h2>
      </div>
    </div>
  );
};

export default White_Paper_sec6;

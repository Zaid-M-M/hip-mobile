import React from "react";

const White_Paper_sec7 = () => {
  return (
    <section className="bg-white py-6 lg:py-12 relative overflow-hidden">
      <div className="fix">
        {/* ---------- TOP TEXT SECTION ---------- */}

        {/* ---------- IMAGE + CONTENT SECTION ---------- */}
        <div className="flex flex-col lg:flex-row-reverse items-stretch justify-end gap-5 lg:gap-[30px] ">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[43%] pt-[12px]">
            <img
              src="/white_paper/white_sec7.jpg"
              alt="Reverse Logistics Warehouse"
              className="w-full h-auto lg:h-[100%] object-cover "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[53%] flex flex-col justify-between bg-white lg:p-0">
            <div>
              <h2 className="text-[33px] leading-[44px] md:text-[36px] lg:text-[40px] lg:leading-[50px] bw-m text-black  pb-[30px]">
                Why Reverse Logistics Is So Challenging
              </h2>

              <ul className="space-y-2 xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] pb-[20px]">
                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
                  <span className="bw-m">Unpredictability - </span>
                  The true condition and verified availability of returned goods
                  often remain uncertain.
                </li>

                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
                  <span className="bw-m">Cost Spiral - </span>
                  Handling, inspection, repackaging, and redistribution cost
                  more than forward delivery.
                </li>

                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
                  <span className="bw-m">Fraud & Abuse - </span>
                  COD refusals, fake returns, and product swaps inflate losses.
                </li>

                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
                  <span className="bw-m">Compliance Pressure - </span>
                  Extended Producer Responsibility (EPR) rules on electronics,
                  plastics, and packaging.
                </li>

                <li className="relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
                  <span className="bw-m">Customer Expectations - </span>
                  Refunds must be fast, or brand loyalty suffers.
                </li>
              </ul>

              <p className="text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px]">
                <span className="bw-m">Business takeaway:</span> Reverse
                logistics is not just a supply chain issue — it is a finance,
                compliance, and customer loyalty issue.
              </p>
            </div>
          </div>
        </div>

        {/* ---------- STRATEGIES SECTION ---------- */}
        <div className="pt-[50px]">
          <img
            className="purple_vctr hidden md:block absolute bottom-10 right-10 md:w-[370px] w-[300px]"
            src="/green_vector.svg"
            alt="Purple Vector"
          />
          <img
            className="orange_vctr hidden md:block absolute bottom-15 right-20 md:w-[370px] w-[300px]"
            src="/orange_vector.svg"
            alt="Orange Vector"
          />
          <h2 className="text-[33px] leading-[43px] md:text-[36px] lg:text-[40px] lg:leading-[50px] bw-m pb-[25px]">
            Smarter Strategies Emerging in India
          </h2>
          <p className="text-[16px] md:text-[20px] bw-r pb-[20px]">
            Forward-looking companies are turning reverse logistics from a cost
            centre into a value centre.
          </p>
          <ul className="space-y-3 text-[16px] md:text-[20px]">
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Dedicated Returns Hubs —{" "}
              <span className="bw-r">
                Inside modern warehouses — with repair benches, testing labs,
                and recycling rooms.
              </span>
            </li>
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Tech Integration -{" "}
              <span className="bw-r">
                Returns management systems integrated with order and warehouse
                platforms; enabling instant refunds and fraud checks.
              </span>
            </li>
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Customer Nudges -{" "}
              <span className="bw-r">
                Incentives for prepaid orders to reduce COD losses.
              </span>
            </li>
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Re-commerce Platforms -{" "}
              <span className="bw-r">
                Cashify, Amazon Renewed, Flipkart 2GUD. Open-box resale,
                refurbished sales, liquidation rails forming the secondary
                market.
              </span>
            </li>
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Green Logistics -{" "}
              <span className="bw-r">
                Partnerships with recyclers for EPR compliance and ESG branding.
                Licensed recyclers, digital certificates, auditable disposal for
                built-in compliance.
              </span>
            </li>
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Smarter networks:{" "}
              <span className="bw-r">
                Metro hubs with smaller spokes in Tier-2/3 cities.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default White_Paper_sec7;

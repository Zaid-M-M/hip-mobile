"use client";
import React from "react";

const White_paper_sec4 = () => {
  return (
    <section className="bg-white py-2 lg:py-6 relative overflow-hidden">
      <div className="fix">
        {/* ---------- TOP TEXT SECTION ---------- */}
        <div className="w-full mb-10">
          <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] mb-4">
            This paper explores India’s reverse logistics landscape, the unique
            challenges it poses, and the opportunities it creates. It balances
            technical insights (compliance, cost structures, operational models)
            with accessible storytelling (case studies, frameworks, global
            comparisons).
          </p>

          <p className=" xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
            <span className=""> The goal:</span>
            to help businesses transform reverse logistics from a cost burden
            into a strategic advantage.
          </p>
        </div>

        {/* ---------- IMAGE + CONTENT SECTION ---------- */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-10 mt-10">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[40%] h-full">
            <img
              src="/white_paper/white_sec4.jpg"
              alt="Reverse Logistics Warehouse"
              className="w-full h-full object-cover shadow-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[55%] ">
            <h2 className=" text-[29px] leading-[39px] lg:text-[40px] lg:leading-[50px] bw-m text-black  pb-[10px]">
              Why Reverse Logistics Matters Now
            </h2>

            <p className=" xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] pb-[20px]">
              Logistics in India has historically focused on moving goods
              forward — from factory to warehouse to consumer. But consumer
              power has shifted. With the rise of e-commerce, omnichannel
              retail, and stricter environmental rules, the return journey is
              just as important as the delivery.
            </p>
            <p className=" xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] pb-[16px]">
              Returns are no longer rare exceptions. They are structural
              features of modern commerce.
            </p>
            <ul className="space-y-2 xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] pb-[20px]">
              <li className="relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
                Customers expect “no-questions-asked” returns.
              </li>
              <li className="relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
                Regulators demand take-back programs for packaging, electronics,
                and batteries.
              </li>
              <li className="relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
                Investors evaluate companies on their ESG (Environmental,
                Social, Governance) performance, where waste recovery plays a
                key role.
              </li>
            </ul>

            <p className=" xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] ">
              In other words, reverse logistics is where customer trust,
              regulatory compliance, and sustainability converge.
            </p>
          </div>
        </div>
        <div className="pt-[50px]">
          <h2 className=" text-[29px] leading-[39px] lg:text-[40px] lg:leading-[50px] bw-m lg:pb-[30px] pb-[13px] ">
            Defining Reverse Logistics
          </h2>
          <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pb-[20px]">
            Reverse logistics encompasses all activities related to products
            moving backward through the supply chain. Simply put, reverse
            logistics is everything that happens after a customer decides not to
            keep a product.
          </p>
          <ul className="space-y-3 xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Returns & Exchanges:{" "}
              <span className="bw-r">Products sent back by customers.</span>{" "}
            </li>
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Repair & Refurbishment:{" "}
              <span className="bw-r">
                Restoring defective products for resale.
              </span>{" "}
            </li>
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Recycling & Disposal:{" "}
              <span className="bw-r">
                Handling items at end-of-life safely and sustainably.
              </span>{" "}
            </li>
            <li className="bw-m relative lg:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black">
              Re-commerce:{" "}
              <span className="bw-r">
                Reselling used or returned products in secondary markets.
              </span>{" "}
            </li>
          </ul>
          <p className="xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] bw-r pt-[20px]">
            Unlike forward logistics - linear, standardized, predictable, and
            scalable - reverse logistics is variable, costly, fragmented, and
            often opaque. Each return is a small puzzle: What is its condition?
            Can it be resold? Must it be recycled? Should it be scrapped?
          </p>
        </div>
      </div>
    </section>
  );
};

export default White_paper_sec4;

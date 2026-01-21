import React from "react";
import Btn from "@/components/global/Btn";

const Client_sec = () => {

  return (
    <div className="">
      <div className="relative w-full  overflow-hidden fix 1280:pt-[100px] pt-[45px] border-b border-[#CECECE]">

        <div className="flex lg:flex-row flex-col">

          {/* Column 1 */}
          <div className="w-full lg:w-[650px]">
            <div className="flex items-left flex-col relative w-fit">
              <h1 className="sec_hd bw-m bg-gradient-to-r whitespace-nowrap overflow-visible">
                Enabling India’s growth</h1>
              <h1 className="sec_hd bw-r bg-gradient-to-r whitespace-nowrap overflow-visible">
                one warehouse, one factory, <br></br> one corridor at a time
              </h1>
              <img
                src="/abstract_pattern.svg"
                className="absolute right-[88px] bottom-[0px]"
              />
            </div>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[24px] mt-[20px]">We’ve supported some of India’s top e-commerce and logistics brands such as Amazon, Flipkart, Blinkit, Reliance, DHL, Delhivery, Maersk, and Rhenus Logistics through peak sale seasons, rapid expansion, and evolving delivery models. With Horizon, you're not just getting a warehouse—you’re getting a team that thinks ahead, scales fast, and adapts with you.</p>

            <Btn text="INTEGRATED SOLUTIONS" className="mt-[0px]" />
          </div>

          {/* Column 2 */}
          <div className="flex-1">
            <img className="w-[100%]" src='/ecommerce/ecom_sec4_img.png'></img>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Client_sec;

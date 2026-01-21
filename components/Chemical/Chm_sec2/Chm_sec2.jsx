"use client";
import React from "react";

const Ecom_sec2 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] xl:pb-[100px]">
        <img
          className="purple_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[0px] lg:left-[-30px] md:w-[350px] w-[300px]"
          src="/purple_vector.svg"
        />
        <img
          className="orange_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[-100px] lg:left-[200px] md:w-[350px] w-[300px]"
          src="/orange_vector.svg"
        />

        <div className="flex flex-col justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex items-left flex-col md:items-left relative  md:w-[460px] lg:w-[auto]">
              <h2 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[35px] md:leading-[47px] xl:text-[35px] xl:leading-[45px] 1440:text-[39px]  1440:leading-[49px] lg:tracking-[-2.64px] bw-r md:w-[460px] lg:w-[auto] capitalize 360:text-[22px] 360:leading-[32px]">
                Built for Operations. Aligned for Compliance. <br></br>
              </h2>
              <div className="gap-[10px] md:gap-[17px]  md:flex-row flex-col">
                <h2 className="tracking-[-2px] text-[33px] leading-[43px] md:text-[35px] md:leading-[45px] xl:text-[40px] 1440:text-[39px] xl:leading-[50px] 1440:leading-[49px] lg:tracking-[-2.64px] bw-r lg:w-[auto] capitalize 360:text-[22px] 360:leading-[32px]">
                  <span className="bw-m">and regulatory landscape.</span>
                </h2>

                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg mt-[18px] 2xl:mt-[20px]"
                />
              </div>
            </div>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">
              Storing and moving chemicals isn’t just complicated, it’s
              unforgiving. One wrong floor finish, one overlooked sprinkler, and
              you're redoing the whole site. At Horizon, we work backwards from
              your Material Safety Data Sheets (MSDS) sheet, approval
              checklists, and operational hazards to design warehousing and
              light manufacturing setups that tick every box: Petroleum and
              Explosives Safety Organisation (PESO), Chief Fire Officer (CFO),
              and your own internal audits
            </p>
            <p className="text-[18px] leading-[28px] bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Our chemical-operations ready warehouses aren't one-size-fits-all,
              they are built around your zonal needs with the right separation,
              containment, ventilation, and approvals already built in. Whether
              you're expanding capacity, setting up distribution, or
              consolidating inventory, we create infrastructure that evolves
              with your safety protocols and scale targets.
            </p>
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}
    </div>
  );
};

export default Ecom_sec2;

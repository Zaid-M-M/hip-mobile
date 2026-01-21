import React from "react";

const MaterialSection = () => {
  return (
    <div className="relative overflow-hidden h-fit">
      <div className="1280:py-[100px] fixup py-[45px] ">
        <div>
          <div className="flex flex-col gap-[25px] 1024:flex-row items-center justify-center w-full h-full sm:h-auto   1280:h-[240px]  bg-cover bg-center">
            <div className="w-full  1024:-mt-16 1280:-mt-20 1366:-mt-16 1440:-mt-10 1536:-mt-9 1024:w-1/2 flex flex-col items-start gap-[12px] 1024:gap-[16px] 1280:gap-[20px]">
              <div>
                <h1 className="bw-m text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] 1366:leading-[74px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:tracking-[-3.04px]">
                  Materiality
                </h1>
                <h2 className="bw-r text-[35px] leading-[42px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:leading-[74px] 1366:tracking-[-3.04px]">
                  Assessment
                </h2>
              </div>
              <div className="">
                <img
                  src="/abstract_pattern_sustain.png"
                  className="w-full h-full max-w-full abstract_sustian_svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full items-center 1024:w-1/2">
              <p className="bw-r 768:text-[18px] 768:leading-[28px] 1280:text-[20px] 1280:leading-[30px]">
                At Horizon, our sustainability strategy begins with listening —
                to our people, our partners, and the communities we serve. In
                2023, we carried out a detailed materiality assessment to
                pinpoint the ESG issues that matter most to our stakeholders and
                our long-term success. By engaging voices across our ecosystem —
                from employees and customers to community representatives — we
                gathered key insights that now shape our priorities. The result:
                a focused, future-ready roadmap that aligns our efforts with
                what truly drives impact.
              </p>
            </div>
          </div>
        </div>
        <div className=" pt-[40px] sm:pt-[40px] 1280:pt-[100px] 1366:pt-[110px]">
          <img src="/governance/Assesment.png" alt="" />
        </div>
      </div>
      <img
        className="purple_vctr hidden md:block absolute -top-40 left-40 md:w-[370px] w-[300px]"
        src="/purple_vector.svg"
        alt="Purple Vector"
      />
      {/* <img
        className="orange_vctr hidden md:block absolute -top-40 right-20 md:w-[370px] w-[300px]"
        src="/orange_vector.svg"
        alt="Orange Vector"
      /> */}
      <img
        className="green_vctr absolute w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] top-[-50px] md:right-[auto] md:left-48 left-[-80px] md:top-[0px] lg:top-[-120px] xl:left-[380px] 1920:left-[-50px]"
        src="/green_vector.svg"
      />
    </div>
  );
};

export default MaterialSection;

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

        <div className="flex flex-col justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] xl:gap-[40px] gap-[25px] lg:flex-row ">
          <div className="flex-1 mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex items-left flex-col md:items-left relative">
              <h2 className="w-fit 2xl:text-[40px] 2xl:leading-[45px] xl:text-[40px] xl:leading-[45px] capitalize 2xl:tracking-[-2.64px] xl:tracking-[-2.2px] text-[30px] leading-[35px]">
                Because precision starts with the
                <br />
                right foundation,<br></br>
              </h2>
              <div className="gap-[10px] mt-2 md:gap-[17px]  md:flex-row flex-col">
                <h2 className="w-fit 2xl:text-[40px] 2xl:leading-[45px] xl:text-[40px] xl:leading-[45px] capitalize 2xl:tracking-[-2.64px] xl:tracking-[-2.2px] text-[30px] leading-[35px]">
                  <span className="bw-m">
                    {" "}
                    let’s build the environment your
                    <br />
                    innovations need.
                  </span>
                </h2>

                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg mt-[18px] 2xl:mt-[20px]"
                />
              </div>
            </div>
          </div>
          <div className="md:max-w-[100%] lg:max-w-[45%]">
            <p className="bw-r text-[18px] leading-[28px] md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[15px]">
              From aerospace ancillaries to precision engineering, we understand
              that these sectors demand high-spec custom-designed
              infrastructure, dust-free and temperature-controlled environments,
              robust compliance, and future-readiness for expansion and
              scalability. Our warehouses are engineered to support precise
              processes, with features like high-clearance bays, and dedicated
              spaces for testing, calibration, quality checks, clean assembly
              and packaging.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Whether you’re manufacturing components, assembling modules, or
              setting up R&D and prototyping units, Horizon Industrial Parks
              offers tailored infrastructure, fast-track project delivery, and
              deep sector fluency to help you build faster and with confidence.
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

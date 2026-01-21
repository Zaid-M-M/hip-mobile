"use client";
import React from "react";

const Ind2 = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full max-w-screen fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] xl:pb-[100px]">
        <img
          className="purple_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[-100px] lg:right-[30px] md:w-[350px] w-[300px]"
          src="/purple_vector.svg"
        />
        <img
          className="orange_vctr hidden md:block absolute top-0 right-0 lg:top-auto lg:bottom-[-100px] lg:right-[-200px]  md:w-[350px] w-[300px]"
          src="/orange_vector.svg"
        />

        <div className="flex flex-col justify-between mt-[0px] xl:mt-[48px] lg:mt-[0px] md:gap-[20px] gap-[25px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[0px]">
            <div className="flex flex-col md:flex-row md:items-center relative  md:w-[460px] lg:w-[auto]">
              <h1 className="sec_hd flex flex-col max-h-fit justify-start bw-r md:w-[460px] lg:w-[auto] capitalize">
                <span className="bw-m w-full flex items-center gap-[10px] md:gap-5">
                  Grade A
                  <img
                    src="/abstract_pattern.svg"
                    className="abstract_svg"
                    alt="Grade A Box"
                  />
                </span>
                Industrial & <br />
                Logistics Parks
              </h1>
            </div>
          </div>
          <div className="1280:max-w-[550px] flex flex-col gap-[15px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Each of our parks is a self-sustaining business environment that
              offers 100% customisation with built-to-suit as well as
              ready-to-move facilities.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Our park locations are judiciously chosen for their strategic
              points of access, the supportive community and surrounding
              resources, capacity to scale up, and local government support.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              All our parks offer grade A infrastructure in line with global
              standards of institutional players. They provide world class
              infrastructure, standardised specifications and facilities
              designed to make work environment highly productive and ergonomic.
            </p>
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}
    </div>
  );
};

export default Ind2;

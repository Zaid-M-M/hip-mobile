import React from "react";
import Conversation_form from "../global/conversation_form";

const FormSec = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="fix py-[45px] lg:py-[100px]">
        <div className="flex w-full h-full items-center flex-row">
          <div className="bg-white md:p-10 p-[20px] flex flex-col justify-center lg:h-[600px] 1280:h-[600px] 1440:h-[680px] 1536:h-[680px] 1600:h-[700px] 1920:h-[720px] lg:py-[40px] lg:px-10 md:w-[100%] lg:w-[50%]">
            <h3 className="bw-s text-[22px] leading-[32px] tracking-[-1px] xl:text-[35px] xl:leading-[45px] xl:tracking-[-1.2px]">
              <span className="bw-m">Let’s Build the Factory You Need</span>
              <br />
              Not the One You Have to Settle For
            </h3>
            <p className="text-[16px] leading-[26px] bw-r mt-[19px]">
              Talk to our team to explore how Horizon’s network can give your
              business an edge.
            </p>
            <div className="w-full pt-[20px] 1440:pt-[35px]">
              <Conversation_form />
            </div>
          </div>
          <div className="bg-[url('/factory/formbg.jpg')] md:w-[0%] lg:w-[50%] lg:h-[600px] 1280:h-[600px] 1440:h-[680px] 1536:h-[680px] 1600:h-[700px] 1920:h-[720px] bg-cover lg:flex hidden items-end bg-no-repeat ">
            <p className="text-white bw-r text-[22px] pb-[60px] pl-[60px] pr-[90px] leading-[32px]">
              Have questions or ready to explore? Let’s connect and talk about
              how we can help your business grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSec;

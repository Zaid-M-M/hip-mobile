import React from "react";
import Conversation_form from "../global/conversation_form";

const FormSec = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="fix py-[45px] lg:py-[100px]">
        <div className="flex w-full h-full items-center flex-row">
          <div className="bg-white md:p-10 p-5 lg:h-[600px] 1280:h-[600px] 1440:h-[680px] 1536:h-[680px] 1600:h-[700px] 1920:h-[720px] lg:py-[40px] lg:px-10 w-full lg:w-[52%] flex flex-col justify-center">
            <h3 className="bw-s text-[20px] md:text-[40px] xl:text-[32px] 1440:text-[44px] md:leading-[45px] xl:leading-10 1440:leading-[50px] leading-[30px] tracking-tighter">
              <span className="bw-m">Let’s Build the Factory You Need</span>
              <br />
              Not the One You Have to Settle For
            </h3>

            <div className="w-full pt-[20px] 1440:pt-[35px]">
              <Conversation_form />
            </div>
          </div>
          <div className="bg-[url('/factory/formbg.jpg')] md:w-[0%] lg:w-[50%] lg:h-[600px] 1280:h-[600px] 1440:h-[680px] 1536:h-[680px] 1600:h-[700px] 1920:h-[720px] bg-cover lg:flex hidden items-end bg-no-repeat "></div>
        </div>
      </div>
    </div>
  );
};

export default FormSec;

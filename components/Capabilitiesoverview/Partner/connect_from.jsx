import React from "react";
import Conversation_form from "@/components/global/conversation_form";

const Formsec = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="fix py-[45px] lg:py-[100px]">
        <div className="flex w-full h-full items-center flex-row">
          <div className="bg-white p-[20px] lg:px-[0px]  lg:h-[600px] 1280:h-[600px] 1440:h-[680px] 1536:h-[680px] 1600:h-[700px] 1920:h-[720px] lg:py-[40px] lg:pr-10 lg:pl-[60px] md:w-[100%] lg:w-[50%]">
            <h3 className="bw-s text-[30px] md:text-[40px] xl:text-[44px] md:leading-[45px] xl:leading-[50px] leading-[35px] tracking-tighter">
              <span className="bw-m">Get in Touch With Our</span>
              <br />
              Leasing Team
            </h3>
            <p className="text-[16px] leading-[26px] bw-r mt-[19px]">
              Talk to our team to explore how Horizon’s network can give your
              business an edge.
            </p>
            <div className="w-full pt-[35px] 1280:pt-[20px] 1440:pt-[35px]">
              <Conversation_form />
            </div>
          </div>
          <div className="bg-[url('/factory/formbg.jpg')] md:w-[0%] lg:w-[50%]  lg:h-[600px] 1280:h-[600px] 1440:h-[680px] 1536:h-[680px] 1600:h-[700px] 1920:h-[720px] bg-cover flex items-end bg-no-repeat ">
            {/* <p className='text-white bw-r text-[22px] pb-[60px] pl-[60px] pr-[90px] leading-[32px]'>
              Have questions or ready to explore? Let’s connect and talk about
              how we can help your business grow.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formsec;

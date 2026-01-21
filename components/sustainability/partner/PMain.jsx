import Btn from "@/components/global/Btn";
import React from "react";

const PMain = () => {
  return (
    <div className="bg-[url(/sustainability/partner.jpg)] xl:py-20 py-12 bg-cover bg-no-repeat">
      <div className="fix">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 w-full justify-between">
          <h3 className="flex flex-col text-white">
            <span className="md64m">Partner</span>
            <span className="md64r">with Purpose</span>
          </h3>
          <div className="flex flex-col gap-4 lg:gap-10 lg:w-[57%]">
            <div className="flex flex-col gap-4 lg:gap-8 text-white text-[16px] lg:text-[24px] leading-[24px] lg:leading-[34px]">
              <p>
                Whether you're an organisation driving environmental change, a
                community leader seeking support of our CSR hand, or a vendor
                with a shared vision—we’d love to hear from you.
              </p>
              <p>
                Let’s join forces to make a measurable impact. Reach out to us.
              </p>
            </div>
            <Btn text="Contact us" href="/contact/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMain;

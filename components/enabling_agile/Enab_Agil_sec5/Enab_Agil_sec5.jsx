"use client";
import React from "react";
import Enable_parkagilecard from "../Enable_parkagilecard";

const Enab_Agil_sec5 = ({ amenitiespark }) => {
  return (
    <div className="relative overflow-hidden bg-black pt-[100px] 360:pt-[45px] ">
      <div className=" absolute right-5 768:right-10 w-[50%] 768:w-[35%] top-8 1024:top-10 lg:w-[50%] 1280:w-[45%] 1280:right-19">
        <img src="/workflow/workbg_sec3.png" alt="" />
      </div>

      {/* Main content */}
      <div className="lg:my-0 my-0 z-50">
        <div className="fixup ">
          <div className="flex items-left flex-col md:flex-row md:items-center ">
            <h2 className="sec_hd bw-r flex flex-col ">
              <span className="txt_gradient bw-m flex gap-3 lg:gap-4 items-center bw-m">
                Park Compliance
                <br className="block" />
              </span>

              <span className=" bw-r text-white flex flex-col md:flex-row gap-3 lg:gap-4 items-start md:items-center z-20">
                & Due Diligence
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                />
              </span>
            </h2>
          </div>

          {/* Flex reverse */}
          <div className="flex flex-col 1024:flex-row-reverse z-10 justify-between mt-[20px] xl:mt-[30px] gap-[20px] md:gap-[30px] lg:gap-[47px] xl:gap-[47px]">
            {/* Image */}
            <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] z-20 xl:max-w-[48%] 1440:max-w-[45%]">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/enabling_agile/enablingsec5.jpg"
                alt="Factory"
              />
            </div>

            {/* Text */}
            <div className="1280:max-w-[550px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] z-20">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px]md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                Whether it is land, power, labour, or safety, compliance is not
                an afterthought for us. It’s a built-in, ongoing promise. We are
                well-versed and experienced in statutory and regulatory
                framework to support seamless customer operations.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                Our contract and lease management are rooted in fairness and
                transparency and aligned with the interests of both parties.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                We ensure that our business complies with all relevant state and
                national regulations for land acquisition, construction and
                operations. Before acquiring any land or asset, we conduct
                thorough due diligence to ensure that the land or asset has a
                clear title and that no legal disputes or encumbrances are
                associated with it.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[17px] 1280:leading-[27px] 1440:text-[20px] 1440:leading-[30px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                Transparency and disclosure regarding our ESG performance is in
                line with global standards and regulatory requirements. We
                conform to POSH Policy, Code of Conduct and Compliance Manuals.
                We say no to vendors and contractors who engage in child labour,
                forced labour, bribery and corruption.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-black py-18 md:pt-[40px] pt-[10px]">
          <Enable_parkagilecard amenitiespark={amenitiespark} />
        </div>
      </div>

      {/* ✅ Amenities card section at the end inside black div */}
    </div>
  );
};

export default Enab_Agil_sec5;

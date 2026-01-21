"use client";
import React from "react";
import Btn from "@/components/global/Btn";

const C_info_data = [
  {
    title: "Articles of Association",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/company_info_pdf/AOA.pdf",
  },
  {
    title: "Certificate of Incorporation",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/company_info_pdf/COI.pdf",
  },
  {
    title: "Memorandum of Association",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/company_info_pdf/MOA.pdf",
  },
];

const C_info_sec = () => {
  return (
    <div className="w-full bg-[#EBEBEB]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[60px] 1366:gap-[60px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[312px] mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[56px] 1280:leading-[66px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px]  text-[30px] leading-[36px] tracking-[-1px]  bw-r">
              Company<br></br>
              <span className="bw-r">Information</span>
            </h1>
          </div>
          <div className="md:w-[auto] lg:w-[700px] 1280:w-[898px]">
            <div className="flex flex-wrap md:gap-[26px] gap-[16px]">
              {C_info_data.map((info_data, index) => (
                <a
                  href={info_data.pdf}
                  key={index}
                  target="_blank"
                  className="flex justify-between items-center 1280:w-[48%] md:w-[48%] lg:w-[47%] w-[100%] h-[65px] md:h-[85px] lg:h-[70px] 1280:h-[110px] bg-[#F7C99B] bw-r text-[17px] md:text-[17px] md:leading-[23px] 1440:text-[22px] 1440:leading-[30px] 1366:text-[23px] 1280:text-[20px] 1280:leading-[25px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[26px] 1280:px-[31px] relative overflow-hidden"
                >
                  {info_data.title}
                  <img
                    src={info_data.download_img}
                    className="lg:w-[30px] w-[30px] 1280:w-[40px]"
                  ></img>
                  <img
                    className="absolute left-0 1280:w-[85px] 1366:w-[85px] w-[60px] bottom-[-5px]"
                    src={info_data.mark_img}
                  ></img>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C_info_sec;

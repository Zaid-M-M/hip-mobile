"use client";
import React from "react";
import Btn from "@/components/global/Btn";

const C_info_data = [
  {
    title: "EGM Notice (23-DEC-2025)",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/general_meeting/EGM_Notice_23.12.2025.pdf",
  },
  {
    title: "EGM Notice (13-NOV-2025)",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/general_meeting/EGM_Notice_13.11.2025.pdf",
  },
  {
    title: "EGM Notice (15-OCT-2025)",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/general_meeting/EGM_Notice_15.10.2025.pdf",
  },
  {
    title: "AGM Notice (30-SEP-2025)",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/general_meeting/AGM_Notice_30.09.2025.pdf",
  },
  {
    title: "EGM Notice (29-JUL-2025)",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/general_meeting/EGM_Notice_29.07.2025.pdf",
  },
  {
    title: "EGM Notice (19-JUL-2025)",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/general_meeting/EGM_Notice_19.07.2025.pdf",
  },
  {
    title: "EGM Notice (30-JUN-2025)",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/general_meeting/EGM_Notice_30.06.2025.pdf",
  },
];

const General_meeting_sec = () => {
  return (
    <div className="w-full bg-[#EBEBEB]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[10px] 1366:gap-[10px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[312px] mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[48px] 1280:leading-[58px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px]  text-[30px] leading-[36px] tracking-[-1px]  bw-r">
              General<br></br>
              <span className="bw-r">Meeting Notices</span>
            </h1>
          </div>
          <div className="md:w-[auto] lg:w-[1000px] 1280:w-[1000px]">
            <div className="flex flex-wrap md:gap-[26px] gap-[16px]">
              {C_info_data.map((info_data, index) => (
                <a
                  href={info_data.pdf}
                  key={index}
                  target="_blank"
                  className="flex justify-between items-center gap-[50px]  1280:w-[48%] md:w-[48%] lg:w-[47%] w-[100%] h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px] bg-[#F7C99B] bw-r text-[20px] md:text-[20px] md:leading-[23px] 1440:text-[26px] 1440:leading-[36px] 1366:text-[26px] 1280:text-[24px] 1280:leading-[31px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:px-[25px] relative overflow-hidden"
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

export default General_meeting_sec;

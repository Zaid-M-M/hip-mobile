"use client";
import React, { useState } from "react";

const hip_top_data = [
  {
    title: "Proforma June-25 M25 M24 M23 Audited financial statements",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/horizon-industrial-parks-limited/Proforma-June-25-M25-M24-M23-Audited-financial-statements.pdf",
    year: 2025,
  },
  {
    title: "RCFI June-25 M25 M24 M23 Audited financial statements",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/horizon-industrial-parks-limited/RCFI-June-25-M25-M24-M23-Audited-financial-statements.pdf",
    year: 2025,
  },
];

const hip_data = [
  {
    title: "Consolidated Financial Statements FY 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/financial_result/2024-25/Consolidated_Financial_Statements_March_25_HIPL.pdf",
    year: "2024-25",
  },
  {
    title: "Consolidated Audit Report FY 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/financial_result/2024-25/HIPL_Audit_report_Consol_24-25.pdf",
    year: "2024-25",
  },
  {
    title: "Standalone Financial Statements FY 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/financial_result/2024-25/Horizon_Standalone_Signed_FS_March-25.pdf",
    year: "2024-25",
  },
  {
    title: "Standalone Audit Report FY 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/financial_result/2024-25/HIPL_SFS_Audit_report_24-25.pdf",
    year: "2024-25",
  },
  {
    title: "Consol HIPPL Signed March 2024",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/financial_result/2023-24/Consol_HIPPL_Signed_March_2024.pdf",
    year: "2023-24",
  },
  {
    title: "HIPPL Standlaone Signed March 2024",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/financial_result/2023-24/HIPPL_Standlaone_Signed_March_2024.pdf",
    year: "2023-24",
  },
  {
    title: "HIPPL Standalone FS signed March 2023",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/financial_result/2022-23/HIPPL_Standalone_FS_signed_31_March_2023.pdf",
    year: "2022-23",
  },
  {
    title: "Signed Financials HIPPL Consolidated FS F23",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/financial_result/2022-23/Signed_Financials_HIPPL_Consolidated_FS_F23.pdf",
    year: "2022-23",
  },
];

const matsub_data = [
  {
    title: "Volumnus Developers Private Limited March 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Volumnus-Developers-Private-Limited-March-2025.pdf",
    year: "2024-25",
  },
  {
    title: "Talegaon Industrial Parks Private Limited March 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Talegaon-Industrial-Parks-Private-Limited-March-2025.pdf",
    year: "2024-25",
  },
  {
    title: "Farukhnagar Logistics Parks LLP March 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Farukhnagar-Logistics-Parks-LLP-March-2025.pdf",
    year: "2024-25",
  },
  {
    title: "Volumnus Developers Private Limited March 2024",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Volumnus-Developers-Private-Limited-March-2024.pdf",
    year: "2023-24",
  },
  {
    title: "Talegaon Industrial Parks Private Limited March 2024",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Talegaon-Industrial-Parks-Private-Limited-March-2024.pdf",
    year: "2023-24",
  },
  {
    title: "Farukhnagar Logistics Parks LLP March 2024",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Farukhnagar-Logistics-Parks-LLP-March-2024.pdf",
    year: "2023-24",
  },
  {
    title: "Volumnus Developers Private Limited March 2023",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Volumnus-Developers-Private-Limited-March-2023.pdf",
    year: "2022-23",
  },
  {
    title: "Talegaon Industrial Parks Private Limited March 2023",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Talegaon-Industrial-Parks-Private-Limited-March-2023.pdf",
    year: "2022-23",
  },
  {
    title: "Farukhnagar Logistics Parks LLP March 2023",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Farukhnagar-Logistics-Parks-LLP-March-2023.pdf",
    year: "2022-23",
  },
];

const Financial_results_secF = () => {
  const [hipSelectedYear, setHipSelectedYear] = useState("2024-25");
  const [matsubSelectedYear, setMatsubSelectedYear] = useState("2024-25");

  const hipYears = [...new Set(hip_data.map((item) => item.year))].sort(
    (a, b) => b - a,
  );
  const matsubYears = [...new Set(matsub_data.map((item) => item.year))].sort(
    (a, b) => b - a,
  );

  const filteredHipData = hip_data.filter(
    (item) => item.year === hipSelectedYear,
  );
  const filteredMatsubData = matsub_data.filter(
    (item) => item.year === matsubSelectedYear,
  );

  return (
    <div className="w-full bg-[#EBEBEB]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[10px] 1366:gap-[10px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[312px] mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[48px] 1280:leading-[58px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px] text-[30px] leading-[36px] tracking-[-1px] bw-r">
              Financial<br></br>
              <span className="bw-r">Results</span>
            </h1>
          </div>

          <div className="md:w-[auto] lg:w-[1000px] 1280:w-[1000px]">
            <div className="flex flex-col gap-[65px]">
              {/* Horizon Industrial Parks Limited Section */}
              <div className="w-full">
                <h1 className="flex items-center text-left pb-[10px] lg:pb-[15px] xl:text-[29px] xl:leading-[39px] 1440:text-[32px] 1440:leading-[42px] xl:tracking-[-2.03px] lg:text-[23px] lg:leading-[33px] lg:tracking-[-1.6px] text-[21px] leading-[31px] tracking-[-1px] bw-r">
                  Horizon Industrial Parks Limited
                </h1>

                {/* Static 2 boxes */}
                <div className="flex flex-wrap gap-[10px] mb-[20px]">
                  {hip_top_data.slice(0, 2).map((hip_pdf_tp, index) => (
                    <a
                      key={index}
                      href={hip_pdf_tp.pdf_url}
                      target="_blank"
                      className="flex justify-between items-center gap-[5px] w-[100%] md:w-[48%] xl:w-[49%] h-[70px] 1280:h-[100px] bg-[#ACD5AE] bw-r text-[17px] md:text-[14px] md:leading-[17px] xl:text-[22px] xl:leading-[26px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:pl-[30px] 1280:pr-[25px] relative overflow-hidden"
                    >
                      {hip_pdf_tp.title}
                      <img
                        src={hip_pdf_tp.download_img}
                        className="lg:w-[30px] w-[30px] 1280:w-[40px]"
                      />
                      <img
                        className="absolute left-0 1280:w-[63px] 1366:w-[63px] w-[50px] bottom-[-5px]"
                        src={hip_pdf_tp.mark_img}
                      />
                    </a>
                  ))}
                </div>

                {/* Date Dropdown */}
                <div className="mb-[20px]">
                  <select
                    value={hipSelectedYear}
                    // onChange={(e) => setHipSelectedYear(Number(e.target.value))}
                    onChange={(e) => setHipSelectedYear(e.target.value)}
                    className="outline-none h-[40px] md:h-[50px] cursor-pointer bw-r w-full border-b-[1px] border-[#7C7C7C] md:text-[20px] text-[16px] text-[#000000] md:pb-[10px] lg:pb-[0px] pb-[5px] max-w-[calc(100%-0px)] md:max-w-[calc(50%-20px)]"
                  >
                    {hipYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filtered boxes */}
                <div className="flex flex-wrap gap-[10px]">
                  {filteredHipData.map((hip_pdf, index) => (
                    <a
                      key={index}
                      href={hip_pdf.pdf_url}
                      target="_blank"
                      className="flex justify-between items-center gap-[5px] w-[100%] md:w-[48%] xl:w-[49%] h-[70px] 1280:h-[100px] bg-[#ACD5AE] bw-r text-[17px] md:text-[14px] md:leading-[17px] xl:text-[22px] xl:leading-[26px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:pl-[30px] 1280:pr-[25px] relative overflow-hidden"
                    >
                      {hip_pdf.title}
                      <img
                        src={hip_pdf.download_img}
                        className="lg:w-[30px] w-[30px] 1280:w-[40px]"
                      />
                      <img
                        className="absolute left-0 1280:w-[63px] 1366:w-[63px] w-[50px] bottom-[-5px]"
                        src={hip_pdf.mark_img}
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Material Subsidiaries Section */}
              <div className="w-full">
                <h1 className="flex items-center text-left pb-[10px] lg:pb-[5px] xl:text-[29px] xl:leading-[39px] 1440:text-[32px] 1440:leading-[42px] xl:tracking-[-2.03px] lg:text-[23px] lg:leading-[33px] lg:tracking-[-1.6px] text-[21px] leading-[31px] tracking-[-1px] bw-r">
                  Material Subsidiaries
                </h1>

                {/* Date Dropdown */}
                <div className="mb-[20px]">
                  <select
                    value={matsubSelectedYear}
                    // onChange={(e) =>
                    //   setMatsubSelectedYear(Number(e.target.value))
                    // }
                    onChange={(e) => setMatsubSelectedYear(e.target.value)}
                    className="outline-none h-[40px] md:h-[50px] cursor-pointer bw-r w-full border-b-[1px] border-[#7C7C7C] md:text-[20px] text-[16px] text-[#000000] md:pb-[10px] lg:pb-[0px] pb-[5px] max-w-[calc(100%-0px)] md:max-w-[calc(50%-20px)]"
                  >
                    {matsubYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filtered boxes */}
                <div className="flex flex-wrap gap-[10px]">
                  {filteredMatsubData.map((MS_pdf, index) => (
                    <a
                      key={index}
                      href={MS_pdf.pdf_url}
                      target="_blank"
                      className="flex justify-between items-center gap-[5px] w-[100%] md:w-[48%] xl:w-[49%] h-[70px] md:h-[70px] lg:h-[70px] 1280:h-[100px] bg-[#F7C99B] bw-r text-[17px] md:text-[14px] md:leading-[17px] xl:text-[22px] xl:leading-[26px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:px-[25px] relative overflow-hidden"
                    >
                      {MS_pdf.title}
                      <img
                        src={MS_pdf.download_img}
                        className="lg:w-[30px] w-[30px] 1280:w-[40px]"
                      />
                      <img
                        className="absolute left-0 1280:w-[63px] 1366:w-[63px] w-[50px] bottom-[-5px]"
                        src={MS_pdf.mark_img}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial_results_secF;

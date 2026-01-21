// "use client";
// import React, { useState, useEffect } from "react";
// const PDF_DATA = {
//     "2025-26": {
//         Q1: [
//             {
//                 title: "PDF 1 (2025 Q1)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//             {
//                 title: "Social Proof",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//             {
//                 title: "Investor Deck",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q2: [
//             {
//                 title: "PDF 2 (2025 Q2)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q3: [
//             {
//                 title: "PDF 3 (2025 Q3)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q4: [
//             {
//                 title: "PDF 4 (2025 Q4)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//             {
//                 title: "PDF 5 (2025 Q4)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//     },
//     "2024-25": {
//         Q1: [
//             {
//                 title: "Finance Structure",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//             {
//                 title: "Social Proof",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//             {
//                 title: "Investor Deck",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q2: [
//             {
//                 title: "PDF 2 (2024 Q2)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//             {
//                 title: "Social Proof",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q3: [
//             {
//                 title: "PDF 3 (2024 Q3)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q4: [
//             {
//                 title: "PDF 4 (2024 Q4)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//     },
//     "2023-24": {
//         Q1: [
//             {
//                 title: "PDF 1 (2023 Q1)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q2: [
//             {
//                 title: "PDF 2 (2023 Q2)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q3: [
//             {
//                 title: "PDF 3 (2023 Q3)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//         Q4: [
//             {
//                 title: "PDF 4 (2023 Q4)",
//                 download_img: "/download_icon.svg",
//                 mark_img: "/Invester/orange_mark.svg",
//             },
//         ],
//     },
// };

// const Financial_results_sec = () => {
//     const [year, setYear] = useState("");
//     const [quarter, setQuarter] = useState("");
//     const [selectedPDF, setSelectedPDF] = useState(null);

//     // 👇 Automatically update PDF list when dropdowns change
//     useEffect(() => {
//         if (year && quarter) {
//             const pdfs = PDF_DATA[year]?.[quarter] || [];
//             setSelectedPDF(pdfs);
//         } else {
//             setSelectedPDF(null);
//         }
//     }, [year, quarter]);

//     return (
//         <div className="w-full bg-[#EBEBEB] ">
//             <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
//                 <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[60px] 1366:gap-[60px] justify-between flex-col lg:flex-row">
//                     {/* Left Title */}
//                     <div className="w-[312px] md:w-[240px] 1280:w-[312px] mb-[15px] lg:mb-[0px] relative">
//                         <h1 className="1280:text-[56px] 1280:leading-[66px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px] text-[30px] leading-[36px] tracking-[-1px] bw-r">
//                             Financial <br />
//                             <span className="">Results</span>
//                         </h1>
//                     </div>

//                     {/* Right Dropdowns + Cards */}
//                     <div className="md:w-[auto] lg:w-[700px] 1280:w-[898px] lg:text-center">
//                         {/* Dropdowns */}
//                         <div className="flex flex-row xl:gap-[44px] md:gap-[24px] gap-[20px] w-full">
//                             <div className="flex justify-between items-center gap-[10px] md:gap-[25px] xl:gap-[35px] w-full">
//                                 {/* Year Dropdown */}
//                                 <div className="dropdown_dv w-[140px] md:w-full">
//                                     <select
//                                         value={year}
//                                         onChange={(e) => setYear(e.target.value)}
//                                         className="outline-none h-[40px] md:h-[82px] cursor-pointer bw-r w-full border-b-[1px] border-[#CDCDCD] md:text-[20px] text-[16px] text-[#000000] md:pb-[10px] lg:pb-[0px] pb-[5px]"
//                                     >
//                                         <option value="">Select Year</option>
//                                         <option value="2025-26">2025 - 26</option>
//                                         <option value="2024-25">2024 - 25</option>
//                                         <option value="2023-24">2023 - 24</option>
//                                     </select>
//                                 </div>

//                                 {/* Quarter Dropdown */}
//                                 <div className="dropdown_dv w-[140px] md:w-full">
//                                     <select
//                                         value={quarter}
//                                         onChange={(e) => setQuarter(e.target.value)}
//                                         className="outline-none h-[40px] md:h-[82px] cursor-pointer bw-r w-full border-b-[1px] border-[#CDCDCD] md:text-[20px] text-[16px] text-[#000000] md:pb-[10px] lg:pb-[0px] pb-[5px]"
//                                     >
//                                         <option value="">Select Quarter</option>
//                                         <option value="Q1">Q1</option>
//                                         <option value="Q2">Q2</option>
//                                         <option value="Q3">Q3</option>
//                                         <option value="Q4">Q4</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Cards - Only show when selectedPDF is not null */}
//                         {/* {selectedPDF && selectedPDF.length > 0 && (
//               <div className="flex flex-wrap md:gap-[26px] gap-[16px] md:mt-[60px] mt-[30px] form_result">
//                 {selectedPDF.map((pdf, idx) => (
//                   <a
//                     key={idx}
//                     href="#"
//                     className="flex justify-between items-center gap-[83px]
//                       1280:w-[48%] md:w-[48%] lg:w-[47%] w-full
//                       h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px]
//                       bg-[#F7C99B] bw-r text-[20px] md:text-[20px]
//                       md:leading-[23px] 1440:text-[28px] 1440:leading-[36px]
//                       1366:text-[26px] 1280:text-[24px] 1280:leading-[31px]
//                       leading-[23px] tracking-[-1.04px]
//                       md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:px-[25px]
//                       relative overflow-hidden"
//                   >
//                     {pdf.title}
//                     <img
//                       src={pdf.download_img}
//                       className="lg:w-[30px] w-[30px] 1280:w-[40px]"
//                       alt="download"
//                     />
//                     <img
//                       className="absolute left-0 1280:w-[85px] 1366:w-[85px] w-[60px] bottom-[-5px]"
//                       src={pdf.mark_img}
//                       alt="mark"
//                     />
//                   </a>
//                 ))}
//               </div>
//             )} */}
//                         {selectedPDF && selectedPDF.length > 0 && (
//                             //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[26px] mt-[30px] md:mt-[60px]">
//                             <div className="flex flex-wrap gap-[16px] md:gap-[26px] mt-[30px] md:mt-[60px]">
//                                 {" "}
//                                 {selectedPDF.map((pdf, idx) => (
//                                     //           <a
//                                     //             key={idx}
//                                     //             href="#"
//                                     //             className="relative flex justify-between items-center w-full h-[100px] bg-[#F7C99B] bw-r
//                                     //   text-[20px] md:text-[20px] md:leading-[23px] 1440:text-[28px] 1440:leading-[36px]
//                                     //   1366:text-[26px] 1280:text-[24px] 1280:leading-[31px] leading-[23px] tracking-[-1.04px]
//                                     //   py-[22px] px-[20px] 1280:px-[25px] overflow-hidden"
//                                     //           >
//                                     //             {pdf.title}
//                                     //             <img
//                                     //               src={pdf.download_img}
//                                     //               className="w-[24px] md:w-[30px] 1280:w-[40px]"
//                                     //               alt="download"
//                                     //             />
//                                     //             <img
//                                     //               className="absolute left-0 bottom-0 w-[60px] 1280:w-[85px] 1366:w-[85px]"
//                                     //               src={pdf.mark_img}
//                                     //               alt="mark"
//                                     //             />
//                                     //           </a>
//                                     <a
//                                         key={idx}
//                                         href="#"
//                                         className="flex justify-between items-center gap-[83px]
//     1280:w-[48%] md:w-[48%] lg:w-[47%] w-full
//     h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px]
//     bg-[#F7C99B] bw-r text-[20px] md:text-[20px]
//     md:leading-[23px] 1440:text-[28px] 1440:leading-[36px]
//     1366:text-[26px] 1280:text-[24px] 1280:leading-[31px]
//     leading-[23px] tracking-[-1.04px]
//     md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:px-[25px]
//     relative overflow-hidden"
//                                     >
//                                         {pdf.title}
//                                         <img
//                                             src={pdf.download_img}
//                                             className="lg:w-[30px] w-[30px] 1280:w-[40px]"
//                                             alt="download"
//                                         />
//                                         <img
//                                             className="absolute left-0 bottom-[-5px] w-[60px] 1280:w-[85px] 1366:w-[85px]"
//                                             src={pdf.mark_img}
//                                             alt="mark"
//                                         />
//                                     </a>
//                                 ))}
//                             </div>
//                         )}

//                         {/* Optional: Message when nothing selected */}
//                         {(!selectedPDF || selectedPDF.length === 0) && year && quarter && (
//                             <div className="mt-[30px] text-gray-500">
//                                 No PDF found for selected Year & Quarter.
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Financial_results_sec;

// ================== 29 dec 2025 ==================
"use client";
import React from "react";
import Btn from "@/components/global/Btn";
const hip_data = [
  {
    title: "Proforma June-25 M25 M24 M23 Audited financial statements",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/horizon-industrial-parks-limited/Proforma-June-25-M25-M24-M23-Audited-financial-statements.pdf",
  },
  {
    title: "RCFI June-25 M25 M24 M23 Audited financial statements",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/horizon-industrial-parks-limited/RCFI-June-25-M25-M24-M23-Audited-financial-statements.pdf",
  },
];

const matsub_data = [
  {
    title: "Volumnus Developers Private Limited March 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Volumnus-Developers-Private-Limited-March-2025.pdf",
  },
  {
    title: "Talegaon Industrial Parks Private Limited March 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Talegaon-Industrial-Parks-Private-Limited-March-2025.pdf",
  },
  {
    title: "Farukhnagar Logistics Parks LLP March 2025",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Farukhnagar-Logistics-Parks-LLP-March-2025.pdf",
  },
  {
    title: "Volumnus Developers Private Limited March 2024",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Volumnus-Developers-Private-Limited-March-2024.pdf",
  },
  {
    title: "Talegaon Industrial Parks Private Limited March 2024",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Talegaon-Industrial-Parks-Private-Limited-March-2024.pdf",
  },
  {
    title: "Farukhnagar Logistics Parks LLP March 2024",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Farukhnagar-Logistics-Parks-LLP-March-2024.pdf",
  },
  {
    title: "Volumnus Developers Private Limited March 2023",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Volumnus-Developers-Private-Limited-March-2023.pdf",
  },
  {
    title: "Talegaon Industrial Parks Private Limited March 2023",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Talegaon-Industrial-Parks-Private-Limited-March-2023.pdf",
  },
  {
    title: "Farukhnagar Logistics Parks LLP March 2023",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/financial-information/material-subsidiaries/Farukhnagar-Logistics-Parks-LLP-March-2023.pdf",
  },
];

const Financial_results_sec = () => {
  return (
    <div className="w-full bg-[#EBEBEB] ">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[10px] 1366:gap-[10px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[312px]  mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[48px] 1280:leading-[58px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px]  text-[30px] leading-[36px] tracking-[-1px]  bw-r">
              Financial<br></br>
              <span className="bw-r">Results</span>
            </h1>
          </div>
          <div className="md:w-[auto] lg:w-[1000px] 1280:w-[1000px]">
            <div className="flex flex-col md:flex-row md:gap-[26px] gap-[40px]">
              {/* PDF Div 1 ---------------------    */}
              <div className="md:w-[40%] 1280:w-[40%]">
                <h1 className="flex items-center text-left pb-[10px] lg:pb-[15px] xl:text-[29px] xl:leading-[39px] 1440:text-[32px] 1440:leading-[42px] xl:tracking-[-2.03px]  lg:text-[23px] lg:leading-[33px] lg:tracking-[-1.6px] text-[21px] leading-[31px] tracking-[-1px] bw-r">
                  Horizon Industrial Parks Limited
                </h1>
                <div className="flex flex-wrap gap-[10px]">
                  {hip_data.map((hip_pdf, index) => (
                    <a
                      href={hip_pdf.pdf_url}
                      target="_blank"
                      className="flex justify-between items-center gap-[5px] w-[100%] h-[70px] 1280:h-[100px] bg-[#ACD5AE] bw-r text-[17px] md:text-[14px] md:leading-[17px] xl:text-[19px] xl:leading-[24px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:pl-[30px] 1280:pr-[25px] relative overflow-hidden"
                    >
                      {hip_pdf.title}

                      <img
                        src={hip_pdf.download_img}
                        className="lg:w-[30px] w-[30px] 1280:w-[40px]"
                      ></img>
                      <img
                        className="absolute left-0 1280:w-[63px] 1366:w-[63px] w-[50px] bottom-[-5px]"
                        src={hip_pdf.mark_img}
                      ></img>
                    </a>
                  ))}
                </div>
              </div>

              {/* PDF Div 2 ---------------------    */}
              <div className="md:w-[60%] 1280:w-[60%]">
                <h1 className="flex items-center text-left pb-[10px] lg:pb-[15px] xl:text-[29px] xl:leading-[39px] 1440:text-[32px] 1440:leading-[42px] xl:tracking-[-2.03px] lg:text-[23px] lg:leading-[33px] lg:tracking-[-1.6px] text-[21px] leading-[31px] tracking-[-1px] bw-r">
                  Material Subsidiaries
                </h1>
                <div className="flex flex-wrap gap-[10px]">
                  {matsub_data.map((MS_pdf, index) => (
                    <a
                      href={MS_pdf.pdf_url}
                      target="_blank"
                      className="flex justify-between items-center gap-[5px] w-[100%] md:w-[48%] xl:w-[49%] h-[70px] md:h-[70px] lg:h-[70px] 1280:h-[100px] bg-[#F7C99B] bw-r text-[17px] md:text-[14px] md:leading-[17px] xl:text-[19px] xl:leading-[24px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:px-[25px] relative overflow-hidden"
                    >
                      {MS_pdf.title}
                      <img
                        src={MS_pdf.download_img}
                        className="lg:w-[30px] w-[30px] 1280:w-[40px]"
                      ></img>
                      <img
                        className="absolute left-0 1280:w-[63px] 1366:w-[63px] w-[50px] bottom-[-5px]"
                        src={MS_pdf.mark_img}
                      ></img>
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

export default Financial_results_sec;

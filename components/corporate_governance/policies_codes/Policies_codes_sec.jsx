"use client";
import React from "react";
import Btn from "@/components/global/Btn";

const C_info_data = [
  {
    title: "Policy on Related Party Transactions",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Policy-on-Related-Party-Transactions.pdf",
  },
  {
    title: "Policy to Promote Diversity of Board of Directors",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Policy-to-promote-diversity-of-Board-of-Directors.pdf",
  },
  {
    title: "Risk Management Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Risk-Management-Policy.pdf",
  },
  {
    title: "Succession Policy for the Board and Senior Management",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Succession-Policy-for-the-Board-and-Senior-Management.pdf",
  },
  {
    title: "UPSI Leak Inquiry Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/UPSI-Leak-Inquiry-Policy.pdf",
  },
  {
    title: "Whistle Blower Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Whistle-Blower-Policy.pdf",
  },
  {
    title: "Project Apex Whistle Blower Policy Operating Guidelines",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Project-Apex-Whistle-Blower-Policy-Operating-Guidelines.pdf",
  },
  {
    title: "Dividend Distribution Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Dividend-Distribution-Policy.pdf",
  },
  {
    title: "Insider Trading Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Insider-Trading-Policy.pdf",
  },
  {
    title: "Nomination and Remuneration Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Nomination-and-Remuneration-Policy.pdf",
  },
  {
    title: "Policy for Preservation of Documents",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Policy-for-Preservation-of-Documents.pdf",
  },
  {
    title: "Investor Grievance Redressal Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Investor-Grievance-Redressal-Policy.pdf",
  },
  {
    title:
      "Code of Conduct for Board of Directors and Senior Management Personnel",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Code-of-Conduct-for-BoD-and-SMPs.pdf",
  },
  {
    title: "Policy for Evaluation of Performance of Board of Directors",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Policy-for-Evaluation-of-performance-of-BoD.pdf",
  },
  {
    title: "Policy for Familiarisation Programme for Independent Directors",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Policy-for-Familiarisation-Programme-for-ID.pdf",
  },

  {
    title: "Anti Sexual Harassment Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Anti-Sexual-Harrassment-Policy.pdf",
  },
  {
    title: "Archival Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Archival-Policy.pdf",
  },

  {
    title: "Code of Practices and Fair Disclosure of UPSI",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Code-of-Practices-Fair-Disclosure-of-UPSI.pdf",
  },
  {
    title: "Corporate Social Responsibility Policy",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Corporate-Social-Responsibility-Policy.pdf",
  },
  {
    title: "Determining Material Subsidiaries",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Determining-Material-Subsidiaries.pdf",
  },

  {
    title: "Policy for Determination of Materiality",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/corporate-governance/policies_pdf/Policy-for-determination-of-Materiality-policy.pdf",
  },
];

const Policies_codes_sec = () => {
  return (
    <div className="w-full bg-[#fff]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[60px] 1366:gap-[60px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[312px]  mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[48px] 1280:leading-[58px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px]  text-[30px] leading-[36px] tracking-[-1px]  bw-r">
              Policies
            </h1>
          </div>
          <div className="md:w-[auto] lg:w-[700px] 1280:w-[898px]">
            <div className="flex flex-wrap md:gap-[26px] gap-[10px]">
              {C_info_data.map((info_data, index) => (
                <a
                  key={index}
                  href={info_data.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center 1280:w-[48%] md:w-[48%] lg:w-[47%] w-[100%] h-[65px] md:h-[85px] lg:h-[70px] 1280:h-[110px] bg-[#ACD5AE] bw-r text-[17px] md:text-[17px] md:leading-[23px] 1440:text-[22px] 1440:leading-[30px] 1366:text-[23px] 1280:text-[20px] 1280:leading-[25px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[26px] 1280:px-[31px] relative overflow-hidden"
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

export default Policies_codes_sec;

import React from "react";
import FAQAccordion from "./FAQAccordion";

export async function generateMetadata() {
  return {
    title: "FAQs - Horizon Industrial Parks",
    description:
      "Find answers to frequently asked questions about Horizon Industrial Parks services, facilities, and processes.",
  };
}

export default async function FAQsPage() {
  let faqData = [];

  try {
    const response = await fetch(
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/website_faq",
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();
    if (data[0]?.acf?.faq_data) {
      faqData = data[0].acf.faq_data;
    }
  } catch (error) {
    console.error("Error fetching FAQs:", error);
  }

  if (faqData.length === 0) {
    return (
      <div className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="fix text-center">
          <div className="bw-r text-[18px] text-[#666666]">FAQs not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="fix">
        <div className="mb-6 lg:mb-[50px]">
          <div className="flex items-center gap-[10px]">
            <h1 className="bw-m text-[35px] md:text-[45px] lg:text-[56px] tracking-[-1.4px] text-[#101828] leading-[45px] md:leading-[55px] lg:leading-[66px]">
              FAQs
            </h1>
            <img
              src="/abstract_pattern.svg"
              alt="Abstract Pattern"
              className="abstract_svg"
            />
          </div>
        </div>

        <FAQAccordion faqData={faqData} />
      </div>
    </div>
  );
}

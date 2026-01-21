import React from "react";

export async function generateMetadata() {
  return {
    title: "Disclaimer - Horizon Industrial Parks",
    description:
      "Read our disclaimer regarding the information and visuals contained on our website.",
  };
}

export default async function DisclaimerPage() {
  let disclaimerData = null;

  try {
    const response = await fetch(
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/disclaimer",
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();
    disclaimerData = data[0];
  } catch (error) {
    console.error("Error fetching disclaimer:", error);
  }

  if (!disclaimerData) {
    return (
      <div className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="fix text-center">
          <div className="bw-r text-[18px] text-[#666666]">
            Disclaimer not found
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="fix">
        <div className="mb-[10px] flex gap-5">
          <h1 className="bw-r text-[35px] md:text-[45px] lg:text-[56px] tracking-[-1.4px] text-[#101828] leading-[45px] md:leading-[55px] lg:leading-[66px]">
            {disclaimerData.title.rendered}
          </h1>
          <img src="/abstract_pattern.svg" className="abstract_svg mt-[5px]" />
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: disclaimerData.content.rendered }}
        />
      </div>
    </div>
  );
}

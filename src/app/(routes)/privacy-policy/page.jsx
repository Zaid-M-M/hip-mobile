import React from "react";

export async function generateMetadata() {
  return {
    title: "Privacy Policy - Horizon Industrial Parks",
    description:
      "Read our privacy policy to understand how we collect, use, and protect your personal information.",
  };
}

export default async function PrivacyPolicyPage() {
  let privacyData = null;

  try {
    const response = await fetch(
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/privacy_policy",
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();
    privacyData = data[0];
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
  }

  if (!privacyData) {
    return (
      <div className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="fix text-center">
          <div className="bw-r text-[18px] text-[#666666]">
            Privacy policy not found
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
            {privacyData.title.rendered}
          </h1>
          <img src="/abstract_pattern.svg" className="abstract_svg mt-[5px]" />
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: privacyData.content.rendered }}
        />
      </div>
    </div>
  );
}

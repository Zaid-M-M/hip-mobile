"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cmsApi from "@/src/lib/cmsApi";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const CaseStudyDetailHero = ({ slug, data }) => {
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const result = await cmsApi.getClientStoryBySlug(slug);
        if (result.success && result.data) {
          setCaseStudy(result.data);
        } else {
          console.error("Case study not found:", result.error);
          setCaseStudy(getMockCaseStudy(slug));
        }
      } catch (error) {
        console.error("Error fetching case study:", error);
        setCaseStudy(getMockCaseStudy(slug));
      }
      setLoading(false);
    };

    if (slug) {
      fetchCaseStudy();
    }
  }, [slug]);

  const getMockCaseStudy = (slug) => {
    const mockData = {
      "supply-chain-optimization": {
        id: 1,
        slug: "supply-chain-optimization",
        title: "Supply Chain Optimization for Global Manufacturer",
        date: "2024-01-15",
        acf: {
          client_name: "GlobalTech Manufacturing",
          industry: "MANUFACTURING",
          project_duration: "6 months",
          featured_image: "",
          completion_date: "2024-01-15",
          project_overview:
            "Complete transformation of supply chain operations for increased efficiency and cost reduction.",
          challenge_summary:
            "Inefficient logistics and inventory management causing delays and increased costs.",
          solution_summary:
            "Implemented advanced warehouse management system and optimized logistics network.",
        },
      },
      "logistics-automation": {
        id: 2,
        slug: "logistics-automation",
        title: "Logistics Automation Implementation",
        date: "2023-12-10",
        acf: {
          client_name: "LogiFlow Solutions",
          industry: "LOGISTICS",
          project_duration: "8 months",
          featured_image: "",
          completion_date: "2023-12-10",
          project_overview:
            "End-to-end automation of logistics operations for improved accuracy and speed.",
          challenge_summary:
            "Manual processes leading to errors and slow processing times.",
          solution_summary:
            "Deployed automated sorting systems and digital tracking technology.",
        },
      },
    };

    return mockData[slug] || mockData["supply-chain-optimization"];
  };

  const getImageUrl = () => {
    return cmsApi.getFeaturedImage(caseStudy) || "";
  };

  const getTitle = () => {
    if (typeof caseStudy?.title === "object") {
      return caseStudy.title.rendered || caseStudy.title;
    }
    return caseStudy?.title || "";
  };

  if (loading) {
    return (
      <div className="w-full pt-[102px] pb-[40px] md:pb-[60px] lg:pb-[80px] bg-white">
        <div className="fix">
          <div className="text-center">
            <div className="bw-r text-[18px] text-[#666666]">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="w-full pt-[102px] pb-[40px] md:pb-[60px] lg:pb-[80px] bg-white">
        <div className="fix">
          <div className="text-center">
            <div className="bw-r text-[18px] text-[#666666]">
              Case study not found
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-[45px] pb-0 md:pt-[45px] md:pb-0 bg-white">
      <div className="fix">
        <div className="mb-[20px] sm:mb-[25px] md:mb-[30px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
            ]}
            color="#000000"
          />
        </div>

        <div className="mb-[40px]">
          {(() => {
            const titleText = getTitle();
            const words = titleText ? titleText.trim().split(/\s+/) : [];
            const splitIndex = Math.floor(words.length / 2);
            const firstPart = words.slice(0, splitIndex).join(" ");
            const secondPart = words.slice(splitIndex).join(" ");
            return (
              <div>
                <h1 className="mb-[8px]  lg:mb-[20px] text-[#000000] capitalize">
                  <span className="bw-r text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px]">
                    {firstPart}
                    {firstPart && secondPart ? " " : ""}
                  </span>
                  <span className="bw-m text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px]">
                    {secondPart}
                  </span>
                </h1>
                <img
                  src="/abstract_pattern.svg"
                  alt="Abstract Pattern"
                  className="lg:w-[210px] lg:h-[60px] w-[120px] h-[33px] m-0 p-0"
                />
              </div>
            );
          })()}
        </div>
        <div className="w-full overflow-hidden mb-[40px] md:mb-[0px] lg:mb-[125px]">
          <Image
            src={formatMediaUrl(getImageUrl())}
            priority
            unoptimized // ← Must be true
            alt={getTitle()}
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-auto"
            style={{ width: "100%", height: "auto" }}
            onError={(e) => {
              e.target.src = "";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailHero;

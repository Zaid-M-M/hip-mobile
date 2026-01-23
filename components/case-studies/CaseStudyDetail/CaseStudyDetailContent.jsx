"use client";
import React, { useEffect, useState } from "react";
import CaseStudyCard from "../CaseStudiesContent/CaseStudyCard";
import RelatedCaseStudiesMobile from "./RelatedCaseStudiesMobile";
import RelatedCase from "./RelatedCase";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";
import { motion, AnimatePresence } from "motion/react";
const CaseStudyDetailContent = ({ data }) => {
  const [toShow, setToShow] = useState(3);
  const [slide, setSlide] = useState(0);
  const [relatedCards, setRelatedCards] = useState([]);
  /* ---------- RESPONSIVE SLIDE LOGIC ---------- */
  const getToShow = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  useEffect(() => {
    const onResize = () => setToShow(getToShow());
    setToShow(getToShow());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const [showMore, setShowMore] = useState(false);
  const related_case_studies = data?.acf?.industry;
  const next = () => setSlide((s) => Math.min(s + 1, maxSlide));
  const prev = () => setSlide((s) => Math.max(s - 1, 0));
  /* ---------- FETCH RELATED CASE STUDIES ---------- */
  useEffect(() => {
    if (!data?.acf?.industry || !data?.id) return;
    const fetchRelated = async () => {
      try {
        const response = await fetch(
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories?per_page=100",
        );
        const posts = await response.json();
        const matching = posts.filter(
          (post) =>
            post.acf?.industry === data.acf.industry && post.id !== data.id,
        );
        setRelatedCards(matching);
      } catch (error) {
        console.error("Error fetching related case studies:", error);
        setRelatedCards([]);
      }
    };
    fetchRelated();
  }, [data?.acf?.industry, data?.id]);
  /* ---------- OBJECTIVES GRID ---------- */
  const renderObjectives = () => {
    const items = data?.acf?.glance_details ?? [];
    if (!items.length) return null;
    return (
      <div className="flex flex-wrap justify-center gap-[15px] sm:gap-[10px] w-full">
        {items.map((obj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-start flex-col bg-white/24 border border-[#4d4d4d]
                 px-[1px] py-[11px] lg:py-[30px] gap-[8px] sm:gap-[10px]
                 overflow-hidden
                 w-[calc(50%-7.5px)] sm:w-[calc(50%-5px)] md:w-[calc(33.333%-10px)] xl:w-[calc(25%-11.25px)]
                 min-h-[180px] sm:min-h-[270px] md:min-h-[180px]"
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-[12px] sm:mb-[14px] md:mb-[16px]">
              {obj.glance_icon ? (
                <img
                  src={formatMediaUrl(obj.glance_icon)}
                  priority
                  unoptimized // ← Must be true
                  alt=""
                  className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] object-contain filter brightness-0 invert"
                  onError={(e) => (e.target.style.display = "none")}
                />
              ) : (
                <svg
                  className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px]"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4L26.18 16.52L40 18L26.18 19.48L24 32L21.82 19.48L8 18L21.82 16.52L24 4Z"
                    fill="#AC38D9"
                  />
                </svg>
              )}
            </div>
            {/* Text */}
            <div className="w-full text-center px-[4px] sm:px-[12px]">
              <div
                className="text-white text-[12px] leading-[18px] lg:text-[18px] lg:leading-[28px]
                     font-medium break-words hyphens-auto font-barlow"
                dangerouslySetInnerHTML={{
                  __html: obj.glance_para || "",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  /* ---------- GUARD (no data → nothing) ---------- */
  if (!data) return null;
  return (
    <div className="w-full bg-white">
      <div className="fix">
        {/* ---------- OVERVIEW + PROBLEM ---------- */}
        <div className="flex flex-col lg:flex-row gap-[30px] sm:gap-[35px] md:gap-[40px] pt-[0px] pb-[45px] md:pt-[45px] md:pb-[45px] lg:pt-[0px] lg:pb-[100px]">
          {/* Overview */}
          {data.acf?.overview_paragraph && (
            <div className="w-full lg:max-w-[55%] xl:max-w-[694px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-row items-center gap-[10px] py-[10px] border-b border-[#D4D4D4]">
                  <h2 className="text-left font-barlow font-normal text-[28px] leading-[30px] md:text-[28px] md:leading-[30px] text-black m-0">
                    {data.acf?.overview_title || "Overview"}
                  </h2>
                </div>
                <div
                  className="overview-body text-left font-barlow mt-[20px] lg:mt-[30px]"
                  dangerouslySetInnerHTML={{
                    __html: data.acf?.overview_paragraph,
                  }}
                />
              </motion.div>
            </div>
          )}
          {/* Problem */}
          {data.acf?.product_manufacture_paragraph && (
            <div className="w-full lg:max-w-[42%] xl:max-w-[582px] lg:ml-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-full px-[20px] md:px-[40px] pt-[24px] md:pt-[47px] pb-[35px] md:pb-[70px] flex flex-col gap-[12px] md:gap-[20px] items-start"
                  style={{
                    background:
                      "linear-gradient(142.41deg, #8F53A1 23.93%, #F47922 98.41%), #313D47",
                  }}
                >
                  {/* Sector Problem */}
                  <div className="flex flex-col md:gap-5 gap-3 items-start">
                    {/* <div className="w-full flex flex-row items-start gap-[10px] py-[9px] border-b border-white/10">
                      <h2 className="text-left font-barlow font-normal text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] text-white m-0">
                        {data.sector_title || ""}
                      </h2>
                    </div> */}
                    {data.acf?.sector_title && (
                      <div className="w-full flex flex-row items-start gap-[10px] py-[9px] border-b border-white/10">
                        <h2 className="text-left font-barlow font-normal text-[28px] leading-[30px] md:text-[28px] md:leading-[30px] text-white m-0">
                          {data.acf?.sector_title}
                        </h2>
                      </div>
                    )}
                    <div className="problem-body w-full text-white text-left font-barlow">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.acf?.sector_paragraph,
                        }}
                      />
                    </div>
                  </div>
                  {/* Product Manufacture Problem */}
                  <div className="flex flex-col md:gap-5 gap-3 items-start">
                    <div className="w-full flex flex-row items-center gap-[10px] py-[9px] border-b border-white/10">
                      <h2 className="text-left font-barlow font-normal text-[28px] leading-[30px] md:text-[28px] md:leading-[30px] text-white m-0">
                        {data.acf?.product_manufacture_title || ""}
                      </h2>
                    </div>
                    <div className="problem-body w-full text-white text-left font-barlow">
                      {/* Initial Content */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.acf?.product_manufacture_paragraph || "",
                        }}
                      />
                      {/* Read More / Expandable Content */}
                      {data.acf?.product_manufacture_readmore_paragraph && (
                        <>
                          <AnimatePresence initial={false}>
                            {showMore && (
                              <motion.div
                                key="readmore"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.5,
                                  ease: [0.7, 0, 0.4, 1],
                                }}
                                className="overflow-hidden mt-3"
                              >
                                <div
                                  className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] flex flex-col gap-[15px]"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      data.acf
                                        ?.product_manufacture_readmore_paragraph,
                                  }}
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                          {/* Read More Button */}
                          <button
                            onClick={() => setShowMore((prev) => !prev)}
                            className="md:mt-4 mt-2 text-white bw-r flex md:gap-2 gap-1 text-[16px] md:text-[20px] items-center w-fit cursor-pointer uppercase hover:opacity-80 transition-opacity"
                          >
                            {showMore ? "Read Less" : "Read More"}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`transition-transform duration-300 ${
                                showMore ? "rotate-180" : ""
                              }`}
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      {/* ---------- OBJECTIVES ---------- */}
      {(data.acf?.glance_details?.length > 0 || data.acf?.closer_paragraph) && (
        <div className="relative pt-[45px] pb-[45px] md:pt-[45px] md:pb-[45px] lg:pt-[115px] lg:pb-[96px] overflow-hidden bg-black">
          <img
            src="/objectivesbg.svg"
            alt=""
            className="pointer-events-none select-none absolute z-0 top-[40.86px] right-[50px]"
          />
          <div className="fix relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left mb-[30px] sm:mb-[35px] md:mb-[40px]"
            >
              <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[64px] lg:leading-[74px] font-medium mb-[20px] sm:mb-[25px] md:mb-[18px] txt_gradient font-barlow tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.56px]">
                {data.acf?.closer_titile || "Objectives"}
              </h2>
              {data.acf?.closer_paragraph && (
                <div
                  className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[1.42] w-full font-barlow font-normal flex gap-5 flex-col"
                  dangerouslySetInnerHTML={{
                    __html: data.acf?.closer_paragraph,
                  }}
                />
              )}
            </motion.div>
            {data.acf?.glance_background_image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-[40px] sm:mb-[50px] md:mb-[60px]"
              >
                <img
                  src={formatMediaUrl(data.acf?.glance_background_image)}
                  priority
                  unoptimized // ← Must be true
                  alt="Objectives Overview"
                  className="w-full h-auto"
                  onError={(e) => (e.target.src = "")}
                />
              </motion.div>
            )}
            <div className="w-full max-w-[1400px] mx-auto">
              {renderObjectives()}
            </div>
          </div>
        </div>
      )}
      {/* ---------- SOLUTION ---------- */}
      {data.acf?.solution_paragraph && (
        <div className="fix pt-[45px] md:pt-[45px] lg:pt-[100px] pb-[45px] md:pb-[45px] lg:pb-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-[30px] sm:mb-[35px] md:mb-[40px] mt-[0px]">
              <div className="flex flex-col gap-[15px] sm:gap-[20px] mb-[30px] sm:mb-[35px] md:mb-[40px]">
                <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[54px] lg:leading-[69px] text-[#000000] font-barlow font-medium tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] m-0">
                  {data.acf?.solution_title || "Solution"}
                </h2>
                <div className="flex-shrink-0 self-start sm:self-auto">
                  <img
                    src="/abstract_pattern.svg"
                    alt=""
                    className="abstract_svg"
                  />
                </div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none solution-content">
              <div
                className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal text-[#000000] leading-[1.6] sm:leading-[1.65] font-barlow contimgdiv"
                dangerouslySetInnerHTML={{
                  __html: data.acf?.solution_paragraph,
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
      {/* ---------- CONCLUSION ---------- */}
      {data.acf?.key_paragraph && (
        <div className="pt-[45px] pb-[45px] md:pt-[45px] md:pb-[45px] lg:pt-[96px] lg:pb-[80px] relative overflow-hidden bg-[url('/conclusionbg.png')] bg-cover bg-center bg-no-repeat">
          <div className="fix relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-[1400px] mx-auto"
            >
              <h2 className="text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[66px] lg:leading-[74px] font-medium text-white mb-[20px] font-barlow tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.64px]">
                {data.acf?.key_title || "Conclusion"}
              </h2>
              <div className="conclusion-body mx-auto flex flex-col justify-center items-center p-0 gap-[24px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.acf?.key_paragraph,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
      {/* ---------- RELATED CASE STUDIES ---------- */}
      {related_case_studies && (
        <div className="fix pt-[45px] pb-[45px] md:pt-[45px] md:pb-[45px] lg:pt-[96px] lg:pb-[80px]">
          <div className="mb-[50px]">
            <div className="flex flex-col items-start">
              <span className="bw-m text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] text-[#101828]">
                Related
              </span>
              <div className="flex items-center gap-[10px]">
                <span className="bw-r text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] text-[#101828]">
                  Case Studies
                </span>
                <img
                  src="/abstract_pattern.svg"
                  alt="Abstract Pattern"
                  className="abstract_svg"
                />
              </div>
            </div>
          </div>
          <RelatedCase cards={relatedCards} />
        </div>
      )}
    </div>
  );
};
export default CaseStudyDetailContent;

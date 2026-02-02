// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import CaseStudyGrid from "./CaseStudyGrid";
// import LoadMoreButton from "@/components/insights/InsightsContent/LoadMoreButton";
// import InYourWords from "./InYourWords";
// import PromisesDelivered from "./PromisesDelivered";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Slider from "@/components/ecommerce/Ecom_sec5/Slider";

// const CaseStudiesContent = () => {
//   const [caseStudies, setCaseStudies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [availableCategories, setAvailableCategories] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);

//   const postsPerPage = 6;

//   /**
//    * Fetch and set case studies (main data)
//    */
//   const fetchData = async (page = 1, reset = false) => {
//     setLoading(true);
//     try {
//       const hasActiveFilters = Boolean(selectedCategory || selectedYear);
//       let result;

//       if (hasActiveFilters) {
//         // Server-side filtered fetch when filters are active
//         result = await cmsApi.getFilteredPosts(
//           "client_stories",
//           selectedCategory,
//           selectedYear,
//           {
//             per_page: postsPerPage,
//             page,
//           }
//         );
//       } else {
//         // Normal paginated fetch
//         result = await cmsApi.getClientStories({
//           per_page: postsPerPage,
//           page,
//         });
//       }

//       if (!result.success) throw new Error(result.error || "Failed to fetch");

//       const dataArray = result.data || [];
//       // result.totalPages may be a header string or the custom returned value
//       setTotalPages(result.totalPages ? parseInt(result.totalPages) : 1);

//       const isLastPage = hasActiveFilters
//         ? !result.hasMore
//         : page >= parseInt(result.totalPages || 1) ||
//           dataArray.length < postsPerPage;

//       if (reset || page === 1) {
//         setCaseStudies(dataArray);
//         setHasMore(!isLastPage);

//         // On reset, update years derived from the sample or this page
//         // Use cmsApi.extractYears to remain consistent with existing logic
//         setAvailableYears(cmsApi.extractYears(dataArray));
//       } else {
//         // Append without duplicates
//         const currentIds = new Set(caseStudies.map((i) => i.id));
//         const newData = dataArray.filter((item) => !currentIds.has(item.id));
//         setCaseStudies((prev) => [...prev, ...newData]);
//         setHasMore(!isLastPage);
//       }
//     } catch (error) {
//       console.error("Error fetching client stories:", error);
//       setHasMore(false);
//       if (reset || page === 1) {
//         setCaseStudies([]);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   /**
//    * Fetch a sample of client_stories (up to ~150 items across 3 pages)
//    * and extract categories + years strictly from client_stories posts.
//    *
//    * This prevents categories from other post types showing up.
//    */
//   const fetchClientStoriesSampleAndExtractMeta = async () => {
//     try {
//       const samplePerPage = 50; // reasonable chunk
//       const maxPages = 3;
//       let aggregated = [];
//       for (let p = 1; p <= maxPages; p++) {
//         const res = await cmsApi.fetchData("client_stories", {
//           per_page: samplePerPage,
//           page: p,
//           // don't request _embed unnecessarily
//         });
//         if (!res.success) {
//           // stop fetching further if a page fails
//           break;
//         }
//         aggregated = aggregated.concat(res.data || []);
//         // If returned fewer than samplePerPage items, no more pages
//         if (!res.totalPages || p >= parseInt(res.totalPages)) break;
//         if ((res.data || []).length < samplePerPage) break;
//       }

//       if (aggregated.length === 0) {
//         setAvailableCategories([]);
//         setAvailableYears([]);
//         return;
//       }

//       // Use your cmsApi.extractCategories forcing contentType = "client_stories"
//       // (this keeps any content-type-specific logic centralized in cmsApi)
//       const cats = cmsApi.extractCategories(aggregated, "client_stories") || [];
//       const yrs = cmsApi.extractYears(aggregated) || [];

//       setAvailableCategories(cats);
//       setAvailableYears(yrs);
//     } catch (error) {
//       console.error(
//         "Error fetching client_stories sample for categories:",
//         error
//       );
//       setAvailableCategories([]);
//       setAvailableYears([]);
//     }
//   };

//   // Initial load: fetch first page and sample metadata
//   useEffect(() => {
//     const init = async () => {
//       setCurrentPage(1);
//       setHasMore(true);
//       await fetchData(1, true);
//       // fetch sample for categories + years (strictly from client_stories)
//       await fetchClientStoriesSampleAndExtractMeta();
//     };
//     init();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // run only on mount

//   // Re-fetch case studies when filters change
//   useEffect(() => {
//     // Always refetch page 1 when filters change
//     setCurrentPage(1);
//     setHasMore(true);
//     fetchData(1, true);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedCategory, selectedYear]);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchData(nextPage, false);
//   };

//   const clearFilters = () => {
//     setSelectedCategory("");
//     setSelectedYear("");
//   };

//   return (
//     <div className="w-full bg-white overflow-x-hidden">
//       {/* Title Section */}
//       <div className="fix pt-[45px] pb-[0px] md:pt-[45px] md:pb-[45px] xl:pb-[10px] xl:pt-[120px]">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="flex flex-col lg:flex-row justify-between mt-[0px] md:gap-[20px] gap-[25px]"
//         >
//           <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%]">
//             <div className="flex flex-col items-left">
//               <div className="flex gap-[10px] md:gap-[17px] items-end">
//                 <h2 className="text-[35px] md:text-[45px] xl:text-[52px] leading-[45px] md:leading-[55px] xl:leading-[62px] tracking-[-1.4px] md:tracking-[-1.8px] capitalize">
//                   <span className="bw-m">Case Studies</span>
//                 </h2>
//                 <img
//                   src="/abstract_pattern.svg"
//                   className="abstract_svg xl:mt-[18px] 2xl:mt-[20px]"
//                   alt="Abstract Pattern"
//                 />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <div className="fix pt-[45px] pb-[45px] md:pt-[45px] md:pb-[45px] lg:pb-[140px]">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {/* Filters */}
//           <div className="mb-[25px]">
//             <div className="w-full">
//               <div className="flex flex-col lg:flex-row lg:items-center gap-[16px] lg:gap-[24px]">
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[24px] flex-1">
//                   <div className="relative w-full md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]">
//                     <CustomDropdown
//                       categories={["Sector", ...availableCategories]}
//                       activeTab={
//                         selectedCategory
//                           ? availableCategories.findIndex(
//                               (c) => c === selectedCategory
//                             ) + 1
//                           : 0
//                       }
//                       setActiveTab={(i) => {
//                         if (i === 0) setSelectedCategory("");
//                         else
//                           setSelectedCategory(availableCategories[i - 1] || "");
//                       }}
//                       className="w-full mt-0 relative"
//                     />
//                   </div>
//                 </div>

//                 {/* Clear All Button - Only show when filters are active */}
//                 {(selectedCategory || selectedYear) && (
//                   <div className="flex justify-end sm:justify-start lg:justify-end">
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={clearFilters}
//                       className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
//                     >
//                       <img
//                         src="/cross.svg"
//                         alt="Cross"
//                         className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
//                       />
//                       <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
//                         Clear All
//                       </span>
//                     </motion.button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Content Grid */}
//           {loading && caseStudies.length === 0 ? (
//             <div className="text-center py-[40px]">
//               <div className="bw-r text-[18px] text-[#666666]">Loading...</div>
//             </div>
//           ) : caseStudies.length === 0 ? (
//             <div className="text-center py-[40px]">
//               <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
//                 No case studies found
//               </div>
//               <div className="bw-r text-[16px] text-[#999999]">
//                 Check back later for new content.
//               </div>
//             </div>
//           ) : (
//             <>
//               <CaseStudyGrid
//                 caseStudies={caseStudies}
//                 activeTab="Case Studies"
//               />

//               {hasMore && !loading && caseStudies.length > 0 && (
//                 <div className="text-center mt-[75px]">
//                   <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>
//       </div>

//       {/* In Your Words */}
//       <InYourWords />

//       {/* Promises Delivered */}
//       <PromisesDelivered />

//       {/* Brands We Serve */}
//       <Slider />
//     </div>
//   );
// };

// export default CaseStudiesContent;

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CaseStudyGrid from "./CaseStudyGrid";
import LoadMoreButton from "@/components/insights/InsightsContent/LoadMoreButton";
import InYourWords from "./InYourWords";
import PromisesDelivered from "./PromisesDelivered";
import cmsApi from "@/src/lib/cmsApi";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
import Slider from "@/components/ecommerce/Ecom_sec5/Slider";

const CaseStudiesContent = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const postsPerPage = 6;

  // FIX: Re-scroll to testimonials if Case Study grid finished loading and changed height
  useEffect(() => {
    if (!loading && window.location.hash === "#client-testimonials") {
      const element = document.getElementById("client-testimonials");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [loading]);

  const fetchData = async (page = 1, reset = false) => {
    setLoading(true);
    try {
      const hasActiveFilters = Boolean(selectedCategory || selectedYear);
      let result;
      if (hasActiveFilters) {
        result = await cmsApi.getFilteredPosts(
          "client_stories",
          selectedCategory,
          selectedYear,
          { per_page: postsPerPage, page },
        );
      } else {
        result = await cmsApi.getClientStories({
          per_page: postsPerPage,
          page,
        });
      }
      if (!result.success) throw new Error(result.error || "Failed");

      const dataArray = result.data || [];
      setTotalPages(result.totalPages ? parseInt(result.totalPages) : 1);

      const isLastPage = hasActiveFilters
        ? !result.hasMore
        : page >= parseInt(result.totalPages || 1);

      if (reset || page === 1) {
        setCaseStudies(dataArray);
        setHasMore(!isLastPage);
        setAvailableYears(cmsApi.extractYears(dataArray));
      } else {
        const currentIds = new Set(caseStudies.map((i) => i.id));
        const newData = dataArray.filter((item) => !currentIds.has(item.id));
        setCaseStudies((prev) => [...prev, ...newData]);
        setHasMore(!isLastPage);
      }
    } catch (error) {
      setHasMore(false);
      if (reset || page === 1) setCaseStudies([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchClientStoriesSampleAndExtractMeta = async () => {
    try {
      const res = await cmsApi.fetchData("client_stories", {
        per_page: 50,
        page: 1,
      });
      if (res.success && res.data) {
        setAvailableCategories(
          cmsApi.extractCategories(res.data, "client_stories") || [],
        );
        setAvailableYears(cmsApi.extractYears(res.data) || []);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(1, true);
    fetchClientStoriesSampleAndExtractMeta();
  }, [selectedCategory, selectedYear]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchData(nextPage, false);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedYear("");
  };

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div className="fix pt-[45px] md:pt-[45px] xl:pt-[120px] xl:pb-[20px] ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-[1px] md:gap-[10px] xl:gap-[19px]"
        >
          <div className="flex gap-[10px] md:gap-[17px] items-end">
            <h2 className="text-[35px] md:text-[45px] xl:text-[52px] leading-[45px] tracking-[-1.4px] capitalize">
              <span className="bw-m">Case Studies</span>
            </h2>
            <img
              src="/abstract_pattern.svg"
              className="abstract_svg"
              alt="Pattern"
            />
          </div>
          <div className="flex gap-[10px] md:gap-[17px] items-end">
            <h2 className="text-[35px] md:text-[45px] xl:text-[52px] leading-[45px] tracking-[-1.4px] capitalize">
              <span className="bw-r">
                And Client Testimonials <br className="lg:hidden" />
              </span>
            </h2>
            {/* <img
              src="/abstract_pattern.svg"
              className="abstract_svg"
              alt="Pattern"
            /> */}
          </div>
        </motion.div>
      </div>

      <div className="fix pt-[0] min-h-[3313.4px] lg:min-h-[1343.4px] pb-[0px] lg:pb-[80px]">
        <div className="mb-[25px]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-[16px]">
            <CustomDropdown
              categories={["Sector", ...availableCategories]}
              activeTab={
                selectedCategory
                  ? availableCategories.indexOf(selectedCategory) + 1
                  : 0
              }
              setActiveTab={(i) =>
                setSelectedCategory(i === 0 ? "" : availableCategories[i - 1])
              }
            />
            {(selectedCategory || selectedYear) && (
              <button onClick={clearFilters} className="border p-2">
                Clear All
              </button>
            )}
          </div>
        </div>

        {loading && caseStudies.length === 0 ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <div>
            <CaseStudyGrid caseStudies={caseStudies} activeTab="Case Studies" />
            {hasMore && !loading && (
              <div className="text-center mt-4 lg:mt-[75px]">
                <LoadMoreButton onLoadMore={loadMore} loading={loading} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* FIX: Use ID here with scroll margin for the header offset */}
      {/* <div id="client-testimonials" className="scroll-mt-[120px]"> */}
      <InYourWords />
      {/* </div> */}

      <PromisesDelivered />
      <Slider />
    </div>
  );
};

export default CaseStudiesContent;

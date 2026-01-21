// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import cmsApi from "@/src/lib/cmsApi";
// import RelatedBlogsMobile from "@/components/insights/BlogDetail/RelatedBlogsMobile";
// import PressCard from "@/components/insights/InsightsContent/press/PressCard";

// const PDContent = ({ slug }) => {
//   const [pressRelease, setPressRelease] = useState(null);
//   const [relatedPressReleases, setRelatedPressReleases] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [relatedLoading, setRelatedLoading] = useState(true);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(3);

//   useEffect(() => {
//     const fetchPressRelease = async () => {
//       try {
//         const result = await cmsApi.getPressReleaseBySlug(slug);

//         if (result?.success && result.data) {
//           setPressRelease(result.data);
//           // Fetch related press releases (latest ones, excluding the current)
//           try {
//             const relatedResult = await cmsApi.getPressReleases({
//               exclude: result.data.id,
//               per_page: 6,
//             });
//             if (relatedResult.success) {
//               setRelatedPressReleases(relatedResult.data || []);
//             } else {
//               console.error(
//                 "Error fetching related press releases:",
//                 relatedResult.error
//               );
//               setRelatedPressReleases([]);
//             }
//           } catch (relatedError) {
//             console.error(
//               "Error fetching related press releases:",
//               relatedError
//             );
//             setRelatedPressReleases([]);
//           }
//         } else {
//           console.error("Press release not found:", result?.error);
//         }
//       } catch (error) {
//         console.error("Error fetching press release:", error);
//       }
//       setLoading(false);
//       setRelatedLoading(false);
//     };

//     if (slug) fetchPressRelease();
//   }, [slug]);

//   const getContent = () => {
//     if (pressRelease?.acf?.pr_sub_heading) {
//       let contentHtml = '<div class="press-release-content">';
//       pressRelease.acf.pr_sub_heading.forEach((section) => {
//         if (section.pr_heading) {
//           contentHtml += `<h2>${section.pr_heading}</h2>`;
//         }
//         contentHtml += section.pr_description;
//       });
//       contentHtml += "</div>";
//       return contentHtml;
//     }
//     return "";
//   };

//   const getItemsToShow = () => {
//     if (typeof window === "undefined") return 3;
//     if (window.innerWidth < 768) return 1;
//     if (window.innerWidth < 1024) return 2;
//     return 3;
//   };

//   useEffect(() => {
//     const handleResize = () => setItemsToShow(getItemsToShow());
//     setItemsToShow(getItemsToShow());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const maxSlide = Math.max(0, relatedPressReleases.length - itemsToShow);
//   const showNavigation = relatedPressReleases.length > itemsToShow;

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => Math.max(prev - 1, 0));
//   };

//   const currentItems = useMemo(
//     () => relatedPressReleases.slice(currentSlide, currentSlide + itemsToShow),
//     [relatedPressReleases, currentSlide, itemsToShow]
//   );

//   if (loading) {
//     return (
//       <div className="w-full bg-white pb-[60px] md:pb-[80px] lg:pb-[100px]">
//         <div className="fix">
//           <div className="text-center">
//             <div className="bw-r text-[18px] text-[#666666]">
//               Loading content...
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!pressRelease) {
//     return (
//       <div className="w-full bg-white pb-[60px] md:pb-[80px] lg:pb-[100px]">
//         <div className="fix">
//           <div className="text-center">
//             <div className="bw-r text-[18px] text-[#666666]">
//               Press release not found
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-white">
//       <div className="fix">
//         <div
//           className="blog-content mb-10"
//           dangerouslySetInnerHTML={{ __html: getContent() }}
//           aria-label="Press release content"
//         />
//         {relatedPressReleases.length > 0 && (
//           <>
//             <div
//               className="contained-hr mt-[40px] mb-[60px]"
//               aria-hidden="true"
//             />
//             <div className="py-[45px] md:py-[45px] lg:pb-[70px]">
//               <div className="mb-[50px]">
//                 <div className="flex flex-col items-start">
//                   <span className="bw-m text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] text-[#101828]">
//                     Related
//                   </span>
//                   <div className="flex items-center gap-[10px]">
//                     <span className="bw-r text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] text-[#101828]">
//                       Press Releases
//                     </span>
//                     <img
//                       src="/abstract_pattern.svg"
//                       alt="Abstract Pattern"
//                       className="abstract_svg"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <RelatedBlogsMobile blogs={relatedPressReleases} />
//               <div className="relative hidden md:block overflow-hidden">
//                 <div
//                   className="flex transition-transform duration-500 ease-out"
//                   style={{
//                     transform: `translateX(-${
//                       currentSlide * (100 / itemsToShow)
//                     }%)`,
//                   }}
//                 >
//                   {relatedPressReleases.map((relatedPressRelease) => (
//                     <div
//                       key={relatedPressRelease.id}
//                       className="flex-shrink-0 pr-[30px]"
//                       style={{ width: `${100 / itemsToShow}%` }}
//                     >
//                       <PressCard pressRelease={relatedPressRelease} />
//                     </div>
//                   ))}
//                 </div>
//                 {showNavigation && (
//                   <div className="flex items-center justify-end md:justify-start gap-[3px] mt-[10px]">
//                     <button
//                       onClick={goToPrevSlide}
//                       className="w-[60px] h-[60px] border-2 border-solid border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
//                       disabled={currentSlide === 0}
//                       aria-label="Previous related press releases"
//                     >
//                       <Image
//                         src="/arrowicon.svg"
//                         alt="Previous"
//                         width={24}
//                         height={24}
//                       />
//                     </button>
//                     <button
//                       onClick={goToNextSlide}
//                       className="w-[60px] h-[60px] border-2 border-solid border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
//                       disabled={currentSlide >= maxSlide}
//                       aria-label="Next related press releases"
//                     >
//                       <Image
//                         src="/arrowicon.svg"
//                         alt="Next"
//                         width={24}
//                         height={24}
//                         className="transform rotate-180"
//                       />
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </>
//         )}
//         {!relatedLoading && relatedPressReleases.length === 0 && (
//           <>
//             <div
//               className="contained-hr dashed mt-[40px] mb-[60px]"
//               aria-hidden="true"
//             />
//             <div className="py-[45px] md:py-[45px]">
//               <div className="text-center">
//                 <h2 className="text-[24px] bw-r text-[#666666] mb-[20px]">
//                   No Related Press Releases Found
//                 </h2>
//                 <p className="text-[16px] text-[#888888]">
//                   Check back later for more content.
//                 </p>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PDContent;
// components/PDContent.jsx
"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import RelatedBlogsMobile from "@/components/insights/BlogDetail/RelatedBlogsMobile";
import PressCard from "@/components/insights/InsightsContent/press/PressCard";

const PDContent = ({ pressRelease, relatedPressReleases = [] }) => {
  // Responsive items to show (1 on mobile, 2 on tablet, 3 on desktop)
  const [itemsToShow, setItemsToShow] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle responsive carousel items
  useEffect(() => {
    const updateItemsToShow = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Build dynamic content from ACF repeater
  const getContent = () => {
    if (!pressRelease?.acf?.pr_sub_heading) return "";

    let contentHtml = '<div class="press-release-content">';
    pressRelease.acf.pr_sub_heading.forEach((section) => {
      if (section.pr_heading) {
        contentHtml += `<h2>${section.pr_heading}</h2>`;
      }
      contentHtml += section.pr_description || "";
    });
    contentHtml += "</div>";
    return contentHtml;
  };

  const maxSlide = Math.max(0, relatedPressReleases.length - itemsToShow);
  const showNavigation = relatedPressReleases.length > itemsToShow;

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const currentItems = useMemo(() => {
    return relatedPressReleases.slice(currentSlide, currentSlide + itemsToShow);
  }, [relatedPressReleases, currentSlide, itemsToShow]);

  // Fallback if no press release (should rarely happen due to page-level guard)
  if (!pressRelease) {
    return (
      <div className="w-full bg-white pb-[60px] md:pb-[80px] lg:pb-[100px]">
        <div className="fix text-center">
          <div className="bw-r text-[18px] text-[#666666]">
            Press release not found
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="fix">
        {/* Main Press Release Content */}
        <div
          className="blog-content mb-10"
          dangerouslySetInnerHTML={{ __html: getContent() }}
          aria-label="Press release content"
        />

        {/* Related Press Releases Section */}
        {relatedPressReleases.length > 0 && (
          <>
            <div
              className="contained-hr mt-[40px] mb-[60px]"
              aria-hidden="true"
            />
            <div className="py-[45px] md:py-[45px] lg:pb-[70px]">
              <div className="mb-[50px]">
                <div className="flex flex-col items-start">
                  <span className="bw-m text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] text-[#101828]">
                    Related
                  </span>
                  <div className="flex items-center gap-[10px]">
                    <span className="bw-r text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px] tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] text-[#101828]">
                      Press Releases
                    </span>
                    <img
                      src="/abstract_pattern.svg"
                      alt="Abstract Pattern"
                      className="abstract_svg"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile: Full-width list */}
              <RelatedBlogsMobile blogs={relatedPressReleases} />

              {/* Desktop/Tablet: Horizontal carousel */}
              <div className="relative hidden md:block overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${
                      currentSlide * (100 / itemsToShow)
                    }%)`,
                  }}
                >
                  {relatedPressReleases.map((relatedPressRelease) => (
                    <div
                      key={relatedPressRelease.id}
                      className="flex-shrink-0 pr-[30px]"
                      style={{ width: `${100 / itemsToShow}%` }}
                    >
                      <PressCard pressRelease={relatedPressRelease} />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {showNavigation && (
                  <div className="flex items-center justify-end md:justify-start gap-[3px] mt-[10px]">
                    <button
                      onClick={goToPrevSlide}
                      className="w-[60px] h-[60px] border-2 border-solid border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={currentSlide === 0}
                      aria-label="Previous related press releases"
                    >
                      <Image
                        src="/arrowicon.svg"
                        alt="Previous"
                        width={24}
                        height={24}
                      />
                    </button>
                    <button
                      onClick={goToNextSlide}
                      className="w-[60px] h-[60px] border-2 border-solid border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={currentSlide >= maxSlide}
                      aria-label="Next related press releases"
                    >
                      <Image
                        src="/arrowicon.svg"
                        alt="Next"
                        width={24}
                        height={24}
                        className="transform rotate-180"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* No Related Press Releases */}
        {relatedPressReleases.length === 0 && (
          <>
            <div
              className="contained-hr dashed mt-[40px] mb-[60px]"
              aria-hidden="true"
            />
            <div className="py-[45px] md:py-[45px]">
              <div className="text-center">
                <h2 className="text-[24px] bw-r text-[#666666] mb-[20px]">
                  No Related Press Releases Found
                </h2>
                <p className="text-[16px] text-[#888888]">
                  Check back later for more content.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PDContent;

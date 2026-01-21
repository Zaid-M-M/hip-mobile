// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import cmsApi from "@/src/lib/cmsApi";
// import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

// const PromisesDelivered = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [offsetAfter, setOffsetAfter] = useState(0);
//   const swiperRef = useRef(null);

//   // Fetch testimonials from API
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         setLoading(true);
//         const result = await cmsApi.getCustomersSpeak({ per_page: 100 });

//         if (result.success) {
//           // Transform API data to match the expected format
//           const transformedData = result.data.map((item) => ({
//             id: item.id,
//             company: item.title?.rendered || "Company",
//             logo: item.acf?.logo || "/clienttestimoniallogo.png",
//             clientName: item.acf?.customer_name || "Customer",
//             position: item.acf?.designation || "Position",
//             testimonial: cmsApi.stripHtmlTags(
//               item.content?.rendered ||
//                 item.excerpt?.rendered ||
//                 "Customer testimonial..."
//             ),
//           }));

//           setTestimonials(transformedData);
//         } else {
//           console.error("Failed to fetch testimonials:", result.error);
//           setTestimonials([]);
//         }
//       } catch (error) {
//         console.error("Error fetching testimonials:", error);
//         setTestimonials([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   // Resize handler for offset
//   useEffect(() => {
//     const handleResize = () => {
//       const vw = window.innerWidth;
//       if (vw >= 1366) {
//         const halfExtra = (vw - 1340) / 2;
//         setOffsetAfter(Math.max(0, halfExtra));
//       } else if (vw >= 640) {
//         setOffsetAfter(vw * 0.05);
//       } else {
//         setOffsetAfter(0);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const hasMultipleTestimonials = testimonials.length > 1;

//   // Swiper configuration
//   const swiperConfig = {
//     modules: [Navigation],
//     spaceBetween: 53,
//     speed: 500,
//     slidesOffsetAfter: offsetAfter,
//     // Enable touch interactions for better mobile UX
//     allowTouchMove: true,
//     preventInteractionOnTransition: true,
//     navigation: {
//       prevEl: ".swiper-testimonial-prev",
//       nextEl: ".swiper-testimonial-next",
//     },
//     // Mobile and tablet should show exactly 1 card; desktop keeps partial next card visible
//     breakpoints: {
//       1920: { slidesPerView: 2.2 },
//       1600: { slidesPerView: 1.8 },
//       // Keep 1366+ behavior unchanged from before
//       1366: { slidesPerView: 1.7 },
//       // Fix 1280px overflow/clipping by reducing the number of visible slides
//       1280: { slidesPerView: 1.6 },
//       1024: { slidesPerView: 1.2 },
//       0: { slidesPerView: 1 },
//     },
//   };

//   return (
//     <div className="w-full bg-[#2D2D2D] py-[45px] md:py-[45px] lg:py-[94px] bg-[url('/testimonialbg.png')] bg-cover bg-center bg-no-repeat">
//       <div className="fix">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="text-center mb-[20px] lg:mb-[30px]"
//         >
//           <h2 className="txt_gradient inline-block font-barlow font-normal text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[110%] tracking-[-2.24px]">
//             Promises Delivered
//           </h2>
//         </motion.div>
//       </div>

//       {/* Testimonials Slider */}
//       <div className="ml-[max(5%,calc((100vw-1340px)/2))] sm:mr-0 mr-[5%] min-h-fit h-fit">
//         {loading ? (
//           <div className="text-center py-[60px]">
//             <div className="text-[18px] text-white">
//               Loading testimonials...
//             </div>
//           </div>
//         ) : testimonials.length > 0 ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             <Swiper {...swiperConfig} onSwiper={(s) => (swiperRef.current = s)}>
//               {testimonials.map((testimonial, index) => (
//                 <SwiperSlide key={testimonial.id} className="relative">
//                   <div className="relative bg-white p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] border border-[#e6e6e6] overflow-hidden w-[88vw] xs:w-[92vw] sm:w-[600px] md:w-[720px] lg:w-[auto] h-auto min-h-[320px] lg:h-[370px]">
//                     {/* Quote Icons - Positioned at bottom right, partially cropped */}
//                     <div className="absolute bottom-[12px] right-[-22.6px] opacity-[0.04] z-0 hidden sm:block">
//                       <div className="flex gap-[30px]">
//                         <img
//                           src="/testimonialquote.svg"
//                           alt="Quote"
//                           className="w-[101px] h-[169px]"
//                         />
//                         <img
//                           src="/testimonialquote.svg"
//                           alt="Quote"
//                           className="w-[101px] h-[169px]"
//                         />
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="relative z-10 flex flex-col items-start gap-[16px] sm:gap-[20px] md:gap-[24px] h-full justify-between">
//                       {/* Testimonial Text */}
//                       <p className="bw-r text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[34px] text-black text-left flex-grow">
//                         {testimonial.testimonial}
//                       </p>

//                       <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] w-full">
//                         {/* HR Line */}
//                         <div className="w-full h-[1px] bg-[#e6e6e6]"></div>

//                         {/* Bottom Section - Mobile Stack, Desktop Horizontal */}
//                         <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[20px] md:gap-[24px]">
//                           {/* Logo */}
//                           <div className="flex-shrink-0 flex justify-start sm:justify-start">
//                             <img
//                               src={formatMediaUrl(testimonial.logo)}
//                               alt={testimonial.company}
//                               className="max-w-[150px] sm:max-w-[180px] md:max-w-[200px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
//                               onError={(e) => {
//                                 e.target.src = "/clienttestimoniallogo.png";
//                               }}
//                             />
//                           </div>

//                           {/* Vertical Line - Hidden on mobile, show on sm+ */}
//                           <div className="hidden sm:block w-[1px] h-[62px] bg-black flex-shrink-0"></div>

//                           {/* Person Info */}
//                           <div className="flex flex-col gap-[4px] sm:gap-[6px]">
//                             <h4 className="bw-m text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[34px] text-black">
//                               {testimonial.clientName}
//                             </h4>
//                             <p className="bw-r text-[14px] sm:text-[16px] md:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[34px] text-black">
//                               {testimonial.position}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Navigation Arrows */}
//             <div className="flex items-start justify-start mt-5 lg:mt-10 w-full lg:gap-[20px] gap-[10px] h-10 lg:h-20">
//               {hasMultipleTestimonials && (
//                 <>
//                   <button className="cursor-pointer swiper-testimonial-prev w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]  bg-transparent border border-white hover:border-white flex items-center justify-center transition-all duration-300 group">
//                     <img
//                       src="/arrowicon.svg"
//                       alt="Previous"
//                       className="w-[20px] h-[20px] lg:w-auto lg:h-auto transition-opacity duration-300 brightness-0 invert"
//                     />
//                   </button>
//                   <button className="cursor-pointer swiper-testimonial-next w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] bg-transparent border border-white hover:border-white flex items-center justify-center transition-all duration-300 group">
//                     <img
//                       src="/arrowicon.svg"
//                       alt="Next"
//                       className="w-[20px] h-[20px] lg:w-auto lg:h-auto transition-opacity duration-300 brightness-0 invert"
//                       style={{ transform: "rotate(180deg)" }}
//                     />
//                   </button>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         ) : (
//           <div className="text-center py-[60px]">
//             <div className="text-[18px] text-white">
//               No testimonials available.
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PromisesDelivered;
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import cmsApi from "@/src/lib/cmsApi";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const PromisesDelivered = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offsetAfter, setOffsetAfter] = useState(0);
  const swiperRef = useRef(null);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const result = await cmsApi.getCustomersSpeak({ per_page: 100 });

        if (result.success) {
          const transformedData = result.data.map((item) => ({
            id: item.id,
            company: item.title?.rendered || "Company",
            logo: item.acf?.logo || "/clienttestimoniallogo.png",
            clientName: item.acf?.customer_name || "Customer",
            position: item.acf?.designation || "Position",
            testimonial: cmsApi.stripHtmlTags(
              item.content?.rendered ||
                item.excerpt?.rendered ||
                "Customer testimonial..."
            ),
          }));

          setTestimonials(transformedData);
        } else {
          console.error("Failed to fetch testimonials:", result.error);
          setTestimonials([]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Handle responsive offset
  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      if (vw >= 1366) {
        const halfExtra = (vw - 1340) / 2;
        setOffsetAfter(Math.max(0, halfExtra));
      } else if (vw >= 640) {
        setOffsetAfter(vw * 0.05);
      } else {
        setOffsetAfter(0);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasMultipleTestimonials = testimonials.length > 1;

  const swiperConfig = {
    modules: [Navigation],
    spaceBetween: 53,
    speed: 500,
    slidesOffsetAfter: offsetAfter,
    allowTouchMove: true,
    preventInteractionOnTransition: true,
    navigation: {
      prevEl: ".swiper-testimonial-prev",
      nextEl: ".swiper-testimonial-next",
    },
    breakpoints: {
      1920: { slidesPerView: 2.2 },
      1600: { slidesPerView: 1.8 },
      1366: { slidesPerView: 1.7 },
      1280: { slidesPerView: 1.6 },
      1024: { slidesPerView: 1.2 },
      0: { slidesPerView: 1 },
    },
  };

  // Skeleton shimmer animation
  const shimmer =
    "bg-gradient-to-r from-[#333333] via-[#444444] to-[#333333] bg-[length:200%_100%] animate-shimmer";

  return (
    <div className="w-full bg-[#2D2D2D] py-[45px] md:py-[45px] lg:py-[94px] bg-[url('/testimonialbg.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>

      <div className="fix">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-[20px] lg:mb-[30px]"
        >
          <h2 className="txt_gradient inline-block font-barlow font-normal text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[110%] tracking-[-2.24px]">
            Promises Delivered
          </h2>
        </motion.div>
      </div>

      <div className="ml-[max(5%,calc((100vw-1340px)/2))] sm:mr-0 mr-[5%] min-h-fit h-fit relative">
        {/* AnimatePresence for smooth transition */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-wrap gap-[30px] sm:gap-[40px] md:gap-[53px]"
            >
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="relative bg-white/10 p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] border border-white/10 overflow-hidden w-[88vw] xs:w-[92vw] sm:w-[600px] md:w-[720px] lg:w-[auto] h-auto min-h-[320px] lg:h-[370px] rounded-[4px]"
                >
                  <div className="absolute inset-0 opacity-[0.04] z-0 hidden sm:block">
                    <div className="flex gap-[30px] justify-end pr-[20px]">
                      <div
                        className={`${shimmer} w-[101px] h-[169px] rounded-md`}
                      ></div>
                      <div
                        className={`${shimmer} w-[101px] h-[169px] rounded-md`}
                      ></div>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col items-start justify-between gap-[16px] sm:gap-[20px] md:gap-[24px] h-full">
                    <div
                      className={`${shimmer} w-[90%] h-[18px] sm:h-[22px] md:h-[26px] rounded-[4px]`}
                    ></div>
                    <div
                      className={`${shimmer} w-[80%] h-[18px] sm:h-[22px] md:h-[26px] rounded-[4px]`}
                    ></div>
                    <div
                      className={`${shimmer} w-[70%] h-[18px] sm:h-[22px] md:h-[26px] rounded-[4px]`}
                    ></div>

                    <div className="w-full h-[1px] bg-white/10 my-[10px]"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[20px] md:gap-[24px] w-full">
                      <div
                        className={`${shimmer} w-[150px] sm:w-[180px] md:w-[200px] h-[40px] sm:h-[50px] md:h-[60px] rounded-[4px]`}
                      ></div>
                      <div className="hidden sm:block w-[1px] h-[62px] bg-white/20"></div>
                      <div className="flex flex-col gap-[8px] sm:gap-[10px]">
                        <div
                          className={`${shimmer} w-[140px] h-[20px] sm:h-[24px] md:h-[28px] rounded-[4px]`}
                        ></div>
                        <div
                          className={`${shimmer} w-[100px] h-[16px] sm:h-[20px] md:h-[24px] rounded-[4px]`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : testimonials.length > 0 ? (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Swiper
                {...swiperConfig}
                onSwiper={(s) => (swiperRef.current = s)}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="relative">
                    <div className="relative bg-white p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] border border-[#e6e6e6] overflow-hidden w-[88vw] xs:w-[92vw] sm:w-[600px] md:w-[720px] lg:w-[auto] h-auto min-h-[320px] lg:h-[370px]">
                      <div className="absolute bottom-[12px] right-[-22.6px] opacity-[0.04] z-0 hidden sm:block">
                        <div className="flex gap-[30px]">
                          <img
                            src="/testimonialquote.svg"
                            alt="Quote"
                            className="w-[101px] h-[169px]"
                          />
                          <img
                            src="/testimonialquote.svg"
                            alt="Quote"
                            className="w-[101px] h-[169px]"
                          />
                        </div>
                      </div>

                      <div className="relative z-10 flex flex-col items-start gap-[16px] sm:gap-[20px] md:gap-[24px] h-full justify-between">
                        <p className="bw-r text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[34px] text-black text-left flex-grow">
                          {testimonial.testimonial}
                        </p>

                        <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] w-full">
                          <div className="w-full h-[1px] bg-[#e6e6e6]"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[20px] md:gap-[24px]">
                            <div className="flex-shrink-0 flex justify-start sm:justify-start">
                              <img
                                src={formatMediaUrl(testimonial.logo)}
                                priority
                                unoptimized // ← Must be true
                                alt={testimonial.company}
                                className="max-w-[150px] sm:max-w-[180px] md:max-w-[200px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
                                onError={(e) => {
                                  e.target.src = "/clienttestimoniallogo.png";
                                }}
                              />
                            </div>
                            <div className="hidden sm:block w-[1px] h-[62px] bg-black flex-shrink-0"></div>
                            <div className="flex flex-col gap-[4px] sm:gap-[6px]">
                              <h4 className="bw-m text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[34px] text-black">
                                {testimonial.clientName}
                              </h4>
                              <p className="bw-r text-[14px] sm:text-[16px] md:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[34px] text-black">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {hasMultipleTestimonials && (
                <div className="flex items-start justify-start mt-5 lg:mt-10 w-full lg:gap-[20px] gap-[10px] h-10 lg:h-20">
                  <button className="cursor-pointer swiper-testimonial-prev w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]  bg-transparent border border-white hover:border-white flex items-center justify-center transition-all duration-300 group">
                    <img
                      src="/arrowicon.svg"
                      alt="Previous"
                      className="w-[20px] h-[20px] lg:w-auto lg:h-auto transition-opacity duration-300 brightness-0 invert"
                    />
                  </button>
                  <button className="cursor-pointer swiper-testimonial-next w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] bg-transparent border border-white hover:border-white flex items-center justify-center transition-all duration-300 group">
                    <img
                      src="/arrowicon.svg"
                      alt="Next"
                      className="w-[20px] h-[20px] lg:w-auto lg:h-auto transition-opacity duration-300 brightness-0 invert"
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="no-data"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-[60px]"
            >
              <div className="text-[18px] text-white">
                No testimonials available.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PromisesDelivered;

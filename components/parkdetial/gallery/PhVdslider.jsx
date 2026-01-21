"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { PlusIcon, Minus, ArrowUpRight, RotateCcw } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Heading from "./Heading";
import Modal from "./Modal";

import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

const PhVdslider = ({ pht, vid, nsplan, site_plan_popup }) => {
  const [offsetAfter, setOffsetAfter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const offsetStart = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);

  // NEW: flag to indicate the modal was opened from Site Plan tab
  const [isSitePlanModal, setIsSitePlanModal] = useState(false);

  const swiperRefImg = useRef(null);
  const swiperRefVid = useRef(null);

  const showPhotos = pht && pht.length > 0;
  const showRenders = nsplan && nsplan.length > 0;
  const showVids = Array.isArray(vid) && vid.some((v) => v.park_video);

  const getInitialTab = () => {
    if (showPhotos) return "Photos";
    if (showRenders) return "Site Plan";
    if (showVids) return "Videos";
    return "Photos";
  };
  const [acbtn, setAcBtn] = useState(getInitialTab);

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      if (vw >= 1366) setOffsetAfter(Math.max(0, (vw - 1340) / 2));
      else if (vw >= 640) setOffsetAfter(vw * 0.05);
      else setOffsetAfter(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if ((acbtn === "Photos" || acbtn === "Site Plan") && swiperRefImg.current)
        swiperRefImg.current.update();
      else if (acbtn === "Videos" && swiperRefVid.current)
        swiperRefVid.current.update();
    }, 200);
  }, [acbtn]);

  const getActiveImages = () =>
    acbtn === "Photos" ? pht : acbtn === "Site Plan" ? nsplan : [];
  const activeImages = getActiveImages();

  const hasMultipleImages = activeImages.length > 1;
  const hasMultipleVideos = vid.length > 1;

  const swiperConfig = (navigationSelector) => ({
    modules: [Navigation, FreeMode],
    spaceBetween: 20,
    speed: 500,
    slidesOffsetAfter: offsetAfter,
    allowTouchMove: false,
    preventInteractionOnTransition: true,
    navigation: navigationSelector
      ? {
          prevEl: `${navigationSelector}-prev`,
          nextEl: `${navigationSelector}-next`,
        }
      : false,
    breakpoints: {
      320: { slidesPerView: 1 },
      767: { slidesPerView: 1.5 },
      1023: { slidesPerView: 1.8 },
      1280: { slidesPerView: 2.01 },
      1366: { slidesPerView: 2.2 },
    },
  });

  const handleZoom = (type) => {
    if (!isSitePlanModal) return; // only allow zoom for siteplan modal
    if (type === "in") setZoomLevel((prev) => Math.min(prev + 0.2, 5));
    if (type === "out") setZoomLevel((prev) => Math.max(prev - 0.2, 1));
    if (type === "reset") {
      setZoomLevel(1);
      setOffset({ x: 0, y: 0 });
    }
  };

  // Drag handlers with boundaries (only active for site plan modal)
  const startDrag = (e) => {
    if (!isSitePlanModal) return;
    e.preventDefault();
    setDragging(true);
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
    dragStart.current = { x: clientX, y: clientY };
    offsetStart.current = { ...offset };
  };

  const onDrag = (e) => {
    if (!dragging || !imgRef.current || !isSitePlanModal) return;
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

    const img = imgRef.current;
    const container = img.parentElement;

    const imgWidth = img.offsetWidth * zoomLevel;
    const imgHeight = img.offsetHeight * zoomLevel;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    let newX = offsetStart.current.x + (clientX - dragStart.current.x);
    let newY = offsetStart.current.y + (clientY - dragStart.current.y);

    // Horizontal boundaries
    if (imgWidth > containerWidth) {
      const maxX = 0;
      const minX = containerWidth - imgWidth;
      newX = Math.max(Math.min(newX, maxX), minX);
    } else {
      newX = 0;
    }

    // Vertical boundaries
    if (imgHeight > containerHeight) {
      const maxY = 0;
      const minY = containerHeight - imgHeight;
      newY = Math.max(Math.min(newY, maxY), minY);
    } else {
      newY = 0;
    }

    setOffset({ x: newX, y: newY });
  };

  const stopDrag = () => setDragging(false);

  return (
    <div className="lg:py-[100px] bg-[url(/parkdetail/pgbg.jpg)] bg-cover bg-no-repeat py-10 overflow-hidden w-full">
      <div className="fix">
        <Heading
          showPhotos={showPhotos}
          showRenders={showRenders}
          showVids={showVids}
          acbtn={acbtn}
          setAcBtn={setAcBtn}
        />
      </div>

      <div className="ml-[max(5%,calc((100vw-1340px)/2))] sm:mr-0 mr-[5%] min-h-fit h-fit sm:min-h-[420px]">
        <AnimatePresence mode="wait">
          {(acbtn === "Photos" || acbtn === "Site Plan") && (
            <motion.div
              key={`images-slider-${acbtn}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* <Swiper {...swiperConfig(".swiper-img")} onSwiper={(s) => (swiperRefImg.current = s)}>
                {activeImages.map((img, index) => (
                  <SwiperSlide key={index} className="relative">
                    <motion.img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-cover select-none h-[200px] sm:h-[380px] max-w-[100%]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    <img
                      src="/parkdetail/expand.svg"
                      alt="Expand"
                      className="absolute top-0 right-0 md:h-12 md:w-12 h-8 w-8 cursor-pointer flex"
                      onClick={() => {
                        const sitePlan = acbtn === "Site Plan";
                        setZoomLevel(1);
                        setOffset({ x: 0, y: 0 });
                        setModalImage(img);
                        setIsSitePlanModal(sitePlan); // NEW
                        setIsModalOpen(true);
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper> */}
              <Swiper
                {...swiperConfig(".swiper-img")}
                onSwiper={(s) => (swiperRefImg.current = s)}
              >
                {activeImages.map((img, index) => (
                  <SwiperSlide key={index} className="relative">
                    <motion.img
                      src={formatMediaUrl(img)}
                      priority
                      unoptimized // ← Must be true
                      alt={`Slide ${index + 1}`}
                      // className="w-full object-cover select-none h-auto aspect-video lg:aspect-[1.55/1] max-w-[100%]"
                      className="w-full object-cover select-none h-auto aspect-video max-w-[100%]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    <img
                      src="/parkdetail/expand.svg"
                      alt="Expand"
                      className="absolute top-0 right-0 h-12 w-12 cursor-pointer md:flex"
                      // onClick={() => {
                      //   setModalContent(
                      //     <img
                      //       src={img}
                      //       alt="Expanded"
                      //       className="w-full h-auto object-cover"
                      //     />
                      //   );
                      //   setIsModalOpen(true);
                      // }}
                      onClick={() => {
                        const sitePlan = acbtn === "Site Plan";
                        setZoomLevel(1);
                        setOffset({ x: 0, y: 0 });
                        setModalImage(img);
                        setIsSitePlanModal(sitePlan); // NEW
                        setIsModalOpen(true);
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Always reserve space */}
              <div className="flex items-start md:justify-start justify-end mt-5 lg:mt-10 w-full gap-4 h-10 lg:h-20">
                {hasMultipleImages && (
                  <>
                    <button className="cursor-pointer swiper-img-prev lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50">
                      <img src="/parkdetail/lar.svg" alt="ArrowLeft" />
                    </button>
                    <button className="cursor-pointer swiper-img-next lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50">
                      <img src="/parkdetail/rar.svg" alt="ArrowRight" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Videos */}
          {acbtn === "Videos" && (
            <motion.div
              key="videos-slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Swiper
                {...swiperConfig(".swiper-vid")}
                onSwiper={(s) => (swiperRefVid.current = s)}
              >
                {vid.map((videl, index) => (
                  <SwiperSlide key={index} className="relative">
                    <div className="w-full select-none h-auto lg:aspect-auto aspect-video sm:h-[380px] lg:max-w-[100%]">
                      <iframe
                        loading="lazy"
                        src={formatMediaUrl(videl.park_video)}
                        priority
                        unoptimized // ← Must be true
                        width="1192"
                        height="400"
                        frameBorder="0"
                        allow="autoplay"
                        className="w-full object-cover h-full"
                      />
                    </div>
                    {/* <img
                      src="/parkdetail/expand.svg"
                      alt="Expand"
                      className="absolute top-0 right-0 h-12 w-12 md:flex hidden cursor-pointer"
                      onClick={() => {
                        setModalContent(
                          <iframe
                            src={videl}
                            width="1000"
                            height="600"
                            frameBorder="0"
                            allow="autoplay"
                            className="w-full h-[80vh]"
                          />
                        );
                        setIsModalOpen(true);
                      }}
                    /> */}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Always reserve space */}
              <div className="flex items-start md:justify-start justify-end mt-5 lg:mt-10 w-full gap-4 h-10 lg:h-20">
                {hasMultipleVideos && (
                  <>
                    <button className="cursor-pointer swiper-vid-prev lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50">
                      <img src="/parkdetail/lar.svg" alt="ArrowLeft" />
                    </button>
                    <button className="cursor-pointer swiper-vid-next lg:h-20 lg:w-20 h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50">
                      <img src="/parkdetail/rar.svg" alt="ArrowRight" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal with smooth drag + zoom + boundaries (zoom only for Site Plan) */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setIsSitePlanModal(false);
          setZoomLevel(1);
          setOffset({ x: 0, y: 0 });
        }}
      >
        {modalImage && (
          <div className="relative w-full max-h-[80vh] flex justify-center items-center overflow-hidden bg-black">
            {isSitePlanModal ? (
              // Site Plan: keep the draggable / zoomable behavior
              <div
                className="relative cursor-grab w-full h-[193px] md:h-[378px] lg:h-[510px] xl:h-[580px] overflow-hidden"
                onMouseDown={startDrag}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onMouseMove={onDrag}
                onTouchStart={startDrag}
                onTouchEnd={stopDrag}
                onTouchMove={onDrag}
              >
                <img
                  src={formatMediaUrl(modalImage)}
                  alt="Expanded"
                  priority
                  unoptimized // ← Must be true
                  ref={imgRef}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoomLevel})`,
                    transformOrigin: "top left",
                    transition: dragging ? "none" : "transform 0.1s ease-out",
                  }}
                />
              </div>
            ) : (
              // Photos / Videos: simple centered image, no zoom/drag handlers
              <div className="w-full h-[auto] lg:h-[580px] flex items-center justify-center p-0 lg:p-0">
                <img
                  src={formatMediaUrl(modalImage)}
                  alt="Expanded"
                  priority
                  unoptimized // ← Must be true
                  className="max-h-full object-contain"
                />
              </div>
            )}

            {/* Zoom buttons — only show for Site Plan modal */}
            {isSitePlanModal && (
              <div className="absolute bottom-2 right-2 flex flex-col gap-2 bg-opacity-40 p-0 rounded">
                <button
                  className="bg-[#fff]  text-lg font-bold px-2 py-1 transition border-1 border-[#00000021] m-auto cursor-pointer"
                  onClick={() => handleZoom("in")}
                  disabled={zoomLevel >= 5}
                >
                  <PlusIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  className="bg-[#fff] text-lg font-bold px-2 py-1 transition border-1 border-[#00000021] m-auto cursor-pointer"
                  onClick={() => handleZoom("out")}
                  disabled={zoomLevel <= 1}
                >
                  <Minus className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  className="text-lg font-bold px-2 py-1 text-black transition  border-1 border-[#00000021] bg-[#fff] cursor-pointer"
                  onClick={() => handleZoom("reset")}
                >
                  <RotateCcw
                    className="w-4 h-4 sm:w-6 sm:h-6 "
                    strokeWidth={1.2}
                  />
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PhVdslider;

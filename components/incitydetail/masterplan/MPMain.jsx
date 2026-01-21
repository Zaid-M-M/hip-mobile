"use client";
import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";

const MPMain = ({
  incity_masterplan_h1,
  incity_masterplan_h2,
  incity_masterplan_image,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Reset on mount or image change
  useEffect(() => {
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
  }, [incity_masterplan_image]);

  // Clamp offset to keep image inside container
  const clampOffset = (newOffset) => {
    if (!containerRef.current || !imgRef.current) return newOffset;

    const container = containerRef.current;
    const img = imgRef.current;

    const containerRect = container.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    const maxX = 0;
    const minX = containerRect.width - imgRect.width;
    const maxY = 0;
    const minY = containerRect.height - imgRect.height;

    return {
      x: Math.min(maxX, Math.max(newOffset.x, minX)),
      y: Math.min(maxY, Math.max(newOffset.y, minY)),
    };
  };

  const startDrag = (e) => {
    // Only allow drag if zoomed > 1
    if (zoomLevel <= 1) return;

    e.preventDefault();

    let clientX, clientY;
    if (e.type === "touchstart") {
      const touch = e.touches[0];
      clientX = touch.clientX;
      clientY = touch.clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    setStartPos({
      x: clientX - offset.x,
      y: clientY - offset.y,
    });
    setDragging(true);
  };

  const onDrag = (e) => {
    if (!dragging || zoomLevel <= 1) return;

    let clientX, clientY;
    if (e.type === "touchmove") {
      const touch = e.touches[0];
      clientX = touch.clientX;
      clientY = touch.clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const newOffset = {
      x: clientX - startPos.x,
      y: clientY - startPos.y,
    };

    setOffset(clampOffset(newOffset));
  };

  const stopDrag = () => {
    setDragging(false);
  };

  const handleZoom = (action) => {
    let newZoom = zoomLevel;

    if (action === "in" && zoomLevel < 5) {
      newZoom = Math.min(zoomLevel + 0.5, 5);
    } else if (action === "out" && zoomLevel > 1) {
      newZoom = Math.max(zoomLevel - 0.5, 1);
    } else if (action === "reset") {
      newZoom = 1;
      setOffset({ x: 0, y: 0 });
    }

    setZoomLevel(newZoom);

    // Reset offset if zooming out to 1x
    if (newZoom === 1) {
      setOffset({ x: 0, y: 0 });
    }
  };

  // Determine cursor
  const cursorClass =
    zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default";

  return (
    <>
      {incity_masterplan_image && (
        <div className="w-full xl:py-24 py-12">
          <div className="flex fixup flex-col gap-[24px]">
            <div className="w-full flex-1 flex flex-col justify-center">
              <div className="flex md:flex-row flex-col xl:gap-5 md:gap-2.5">
                <h2 className="text-[35px] md:text-[45px] xl:text-[52px] xl:leading-[58px] 2xl:text-[56px] 2xl:leading-[58px] md:leading-[40px] leading-[45px] bw-r xl:tracking-[-2.26px]">
                  Park<span className="bw-m"> Masterplan</span>
                </h2>

                <img
                  className="abstract_svg"
                  src="/abstract_pattern.webp"
                  alt="Sustainability Gradient"
                />
              </div>
            </div>

            {/* Interactive Masterplan Container */}
            <div
              ref={containerRef}
              className={`relative w-full h-[180px] md:h-[360px] lg:h-[480px] xl:h-[530px] 1366:h-[530px] 1440:h-[600px] overflow-hidden ${cursorClass}`}
            >
              <div
                className="relative w-full h-full"
                onMouseDown={startDrag}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onMouseMove={onDrag}
                onTouchStart={startDrag}
                onTouchEnd={stopDrag}
                onTouchMove={onDrag}
              >
                <img
                  ref={imgRef}
                  src={incity_masterplan_image}
                  alt="Masterplan"
                  className="absolute top-0 left-0 w-full h-auto"
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoomLevel})`,
                    transformOrigin: "top left",
                    transition: dragging ? "none" : "transform 0.2s ease-out",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  draggable={false}
                />
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-0 left-0 lg:right-0 lg:left-auto md:right-0 md:left-auto  flex flex-col bg-white bg-opacity-90 ">
                <button
                  onClick={() => handleZoom("in")}
                  disabled={zoomLevel >= 5}
                  className="flex justify-center lg:p-2 p-1 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
                  aria-label="Zoom In"
                >
                  <Plus className="lg:w-5 lg:h-5 w-3 h-3" />
                </button>
                <button
                  onClick={() => handleZoom("out")}
                  disabled={zoomLevel <= 1}
                  className="lg:p-2 p-1 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition  cursor-pointer"
                  aria-label="Zoom Out"
                >
                  <Minus className="lg:w-5 lg:h-5 w-3 h-3" />
                </button>
                <button
                  onClick={() => handleZoom("reset")}
                  className="lg:p-2 p-1 bg-white border border-gray-300 hover:bg-gray-50 transition  cursor-pointer"
                  aria-label="Reset Zoom & Position"
                >
                  <RotateCcw
                    className="lg:w-5 lg:h-5 w-3 h-3"
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MPMain;

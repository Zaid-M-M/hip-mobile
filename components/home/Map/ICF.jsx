"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { LocationDot } from "./LocationDot";
import { staticRegionDataIncity } from "@/src/utils/mapStaticData";

export default function InCityZoomable({
  onRegionSelect,
  onRegionHover,
  onPinHover,
  onPinClick,
  activeRegion,
  onReset,
  highlightedRegions,
}) {
  const controls = useAnimation();
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [zoomComplete, setZoomComplete] = useState(false);

  // 🧩 Debug active region bounds (optional)
  useEffect(() => {
    if (!highlightedRegions || !activeRegion) return;
    const path = document.querySelector(
      `#india-map path[id='${activeRegion}']`
    );
    if (path) console.log(`${activeRegion} bounds:`, path.getBBox());
  }, [activeRegion, highlightedRegions]);

  // 🧩 Attach hover/click listeners to SVG paths
  useEffect(() => {
    const allPaths = document.querySelectorAll("#india-map path");
    const listeners = [];

    allPaths.forEach((path) => {
      const id = path.getAttribute("id");
      const region = id && highlightedRegions[id];
      if (!region) return; // Skip paths not in data

      path.setAttribute("vector-effect", "non-scaling-stroke");
      path.classList.add("region-path");
      path.style.fill = region.fill || "#ccc";
      path.style.cursor = "pointer";
      path.style.transition = "all 0.3s ease";

      const handleEnter = () => {
        if (!activeRegion) {
          path.style.stroke = "#fff";
          path.style.strokeWidth = "0.8";
        }
        setHoveredRegionId(id);
        onRegionHover?.(id);
      };

      const handleLeave = () => {
        setHoveredRegionId(null);
        onRegionHover?.(null);
      };

      const handleClick = () => {
        onRegionSelect?.(id);
      };

      path.addEventListener("mouseenter", handleEnter);
      path.addEventListener("mouseleave", handleLeave);
      path.addEventListener("click", handleClick);

      listeners.push({ path, handleEnter, handleLeave, handleClick });
    });

    return () => {
      listeners.forEach(({ path, handleEnter, handleLeave, handleClick }) => {
        path.removeEventListener("mouseenter", handleEnter);
        path.removeEventListener("mouseleave", handleLeave);
        path.removeEventListener("click", handleClick);
      });
    };
  }, [onRegionSelect, onRegionHover, activeRegion, highlightedRegions]);

  // 🧩 Update region style when hovered/active
  useEffect(() => {
    const allPaths = document.querySelectorAll("#india-map path");

    allPaths.forEach((path) => {
      const id = path.getAttribute("id");
      const region = id && highlightedRegions[id];
      if (!region) return;

      const isActive = id === activeRegion;
      const isHovered = id === hoveredRegionId;

      const strokeColor =
        isHovered || isActive ? "#ffffff50" : region.stroke || "#000";
      const strokeWidth =
        isHovered || isActive
          ? 2
          : typeof region.strokeWidth === "number"
          ? region.strokeWidth
          : 1;

      path.style.opacity = activeRegion ? (isActive ? "1" : "0.3") : "1";
      path.style.stroke = strokeColor;
      path.style.strokeWidth = `${strokeWidth}`;
    });
  }, [activeRegion, hoveredRegionId, highlightedRegions]);

  // 🧩 Handle zoom animation
  useEffect(() => {
    const regionZoom = highlightedRegions[activeRegion]?.zoom || "";
    setZoomComplete(false);

    if (activeRegion && regionZoom) {
      controls
        .start({
          scale: regionZoom.scale || 1,
          x: regionZoom.x || 0,
          y: regionZoom.y || 0,
          initial: { scale: 1.1, x: 0, y: 0 },
          transition: { duration: 1, ease: [0.7, 0, 0.4, 1] },
        })
        .then(() => setZoomComplete(true));
    } else {
      controls
        .start({
          scale: 1.1,
          x: 0,
          y: 0,
          transition: { duration: 1, ease: [0.7, 0, 0.4, 1] },
        })
        .then(() => setZoomComplete(true));
    }
  }, [activeRegion, highlightedRegions, controls]);

  // 🧩 Guard render until regions loaded
  if (!highlightedRegions) return null;

  return (
    <div className="relative z-30 w-full h-full">
      <motion.svg
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid meet"
        className="z-0 w-full h-full overflow-visible"
      >
        <g transform="translate(200, 60)">
          <motion.g
            id="india-map"
            animate={controls}
            style={{
              transformOrigin: "center center",
            }}
          >
            <path id="tamilnadu" />
            <path
              d="M253.484 426.366C253.603 426.28 253.743 426.225 253.895 426.193C253.7 425.543 253.624 424.632 253.614 423.537V423.299C253.592 422.703 253.592 422.096 253.614 421.489V420.741C253.624 420.568 253.635 420.394 253.646 420.221C253.668 419.885 253.689 419.56 253.635 419.267C253.592 419.267 253.549 419.267 253.506 419.267C252.965 419.234 252.338 419.202 251.83 418.92C251.495 418.736 251.268 418.541 251.062 418.356C250.824 418.151 250.619 417.966 250.273 417.825C250.154 417.771 250.024 417.728 249.905 417.684C249.278 417.446 248.565 417.186 248.219 416.395C248.013 415.939 248.078 415.462 248.132 415.051C248.165 414.758 248.208 414.476 248.132 414.249C248.057 413.978 247.894 413.717 247.732 413.446C247.548 413.143 247.354 412.818 247.224 412.428C247.073 411.929 246.878 411.311 246.467 411.084C246.37 411.04 246.219 410.997 246.078 410.975C245.97 410.964 245.883 410.91 245.819 410.823C245.635 410.596 245.408 410.401 245.159 410.238C244.964 410.151 244.705 410.162 244.402 410.195C244.132 410.217 243.818 410.238 243.494 410.162C243.321 410.119 243.191 409.978 243.17 409.805C243.148 409.62 243.137 409.479 243.137 409.349C243.13 409.118 243 408.948 242.748 408.84C242.099 408.569 241.202 408.406 240.564 408.32C240.078 408.255 239.526 408.287 238.932 408.32C237.883 408.374 236.791 408.439 235.872 407.962C234.758 407.388 234.088 406.716 233.829 405.892C233.721 405.556 233.526 405.231 233.331 404.884C232.921 404.179 232.466 403.388 232.694 402.478C232.607 402.478 232.521 402.488 232.445 402.499C231.883 402.543 231.256 402.597 230.834 402.152C230.574 401.881 230.531 401.61 230.553 401.426C230.585 400.928 231.039 400.57 231.472 400.223C231.71 400.039 231.958 399.844 232.066 399.67C232.272 399.356 232.369 398.977 232.466 398.576C232.553 398.218 232.639 397.849 232.812 397.503C233.072 396.971 233.158 396.711 233.245 396.148C233.31 395.703 233.515 395.291 233.721 394.89C233.926 394.479 234.121 394.099 234.11 393.774C234.11 393.438 233.807 393.048 233.526 392.679C233.353 392.452 233.169 392.213 233.039 391.975C232.856 391.639 232.748 391.27 232.639 390.923C232.521 390.566 232.412 390.23 232.25 389.948C232.131 389.753 231.915 389.558 231.699 389.352C231.407 389.081 231.072 388.777 230.877 388.387C230.585 388.355 230.304 388.355 229.991 388.355C229.558 388.355 229.104 388.355 228.628 388.257C227.655 388.062 226.953 388.094 226.207 388.355C225.947 388.441 225.731 388.636 225.493 388.832C225.223 389.059 224.92 389.308 224.52 389.438C223.774 389.688 222.433 389.558 221.72 389.168C221.287 388.929 221.071 388.539 220.877 388.192C220.747 387.964 220.628 387.737 220.455 387.596C220.12 387.303 219.504 387.108 219.104 387.26C218.487 387.498 217.947 388.496 217.871 389.222C217.86 389.341 217.849 389.439 217.849 389.536C217.828 389.872 217.806 390.186 217.547 390.414C217.298 390.631 216.941 390.642 216.628 390.609C214.974 390.479 214.271 389.178 213.655 388.029C213.428 387.607 213.211 387.195 212.952 386.859C212.595 386.382 212.336 385.894 212.119 385.309C212.076 385.19 212.055 385.081 212.044 384.984C212.022 384.875 212.022 384.854 212 384.821C211.784 384.561 211.017 384.301 210.487 384.247C209.644 384.16 208.8 384.193 207.903 384.225C206.854 384.268 205.762 384.301 204.681 384.138C203.319 383.922 201.935 383.163 200.724 382.426C200.54 382.859 200.724 383.878 200.843 384.594C200.973 385.352 201.103 386.078 200.984 386.566C200.724 387.639 200.335 389.265 199.156 389.764C198.962 389.85 198.746 389.915 198.519 389.991C198.054 390.143 197.47 390.327 197.383 390.587C197.329 390.739 197.427 391.01 197.654 391.335C197.729 391.444 197.827 391.552 197.924 391.671C198.324 392.127 198.929 392.809 198.486 393.611C198.183 394.164 197.697 394.175 197.383 394.186C197.297 394.186 197.21 394.186 197.124 394.197C196.454 394.283 196.432 394.294 196.356 394.825C196.335 394.955 196.335 395.064 196.335 395.161C196.335 395.367 196.335 395.66 196.064 395.812C195.783 395.985 195.47 395.844 195.102 395.638C194.799 395.476 194.562 395.259 194.324 395.042C194.118 394.847 193.924 394.674 193.697 394.554C193.589 394.5 193.47 394.424 193.329 394.327C193.102 394.186 192.702 393.926 192.507 393.926C191.924 393.991 191.61 396.05 191.47 397.037C191.361 397.763 191.275 398.337 191.124 398.662C191.059 398.803 191.005 398.944 190.94 399.096C190.756 399.529 190.561 400.017 190.259 400.386C190.064 400.613 189.88 400.754 189.718 400.863C189.48 401.025 189.437 401.058 189.459 401.383C189.502 402.044 189.999 402.304 190.788 402.684C191.599 403.074 192.616 403.551 192.497 404.884C192.28 407.247 190.897 407.81 189.296 408.45C189.091 408.526 188.886 408.612 188.669 408.71C187.783 409.089 187.199 409.534 186.594 410.303C186.431 410.52 186.172 410.715 185.913 410.899C185.696 411.062 185.415 411.279 185.35 411.398C185.156 411.788 185.469 412.764 185.599 413.176C186.085 414.715 186.269 416.308 186.194 418.411C186.183 418.866 186.107 419.289 186.031 419.7C185.967 420.069 185.902 420.427 185.88 420.795C185.826 421.478 185.88 422.15 186.021 422.811C186.215 423.418 186.377 424.09 186.496 424.74C186.496 424.773 186.496 424.806 186.496 424.838C186.399 426.269 185.048 427.288 184.064 428.025L183.891 428.155C182.972 428.859 181.901 429.846 181.523 430.388C183.653 430.583 185.837 430.843 187.707 432.1C188.021 432.306 188.875 433.032 189.005 433.802C189.059 434.105 188.994 434.387 188.821 434.615C188.507 435.037 187.75 435.135 186.626 435.232C186.269 435.265 185.902 435.297 185.729 435.341C185.21 435.482 184.939 435.568 184.734 435.85C184.669 435.948 184.615 436.1 184.572 436.262C184.518 436.436 184.453 436.641 184.345 436.826C184.172 437.129 183.956 437.4 183.75 437.66C183.523 437.942 183.318 438.213 183.156 438.495C183.058 438.679 182.993 438.842 182.929 438.994C182.777 439.362 182.637 439.72 182.183 440.088C182.02 440.229 181.858 440.359 181.815 440.424C181.815 440.424 181.891 440.522 182.096 440.717C182.842 441.443 183.566 442.289 183.837 443.492C183.999 444.207 183.999 444.76 183.826 445.334C183.739 445.616 183.61 445.854 183.48 446.082C183.361 446.299 183.242 446.505 183.188 446.722C183.102 447.068 183.123 447.491 183.145 447.892C183.145 448.055 183.156 448.207 183.166 448.358V448.705C183.199 449.128 183.21 449.616 183.112 450.06C182.983 450.613 182.842 450.819 182.529 450.938C182.474 450.96 182.453 450.97 182.388 451.057C182.074 451.469 182.031 451.794 182.064 452.423C182.064 452.553 182.118 452.77 182.161 452.997C182.312 453.669 182.496 454.515 181.977 455.002C181.793 455.176 181.534 455.273 181.285 455.36C180.799 455.534 180.691 455.609 180.701 455.783C180.701 455.956 181.155 456.184 181.977 456.26C182.55 456.314 182.712 456.596 182.81 456.856C182.853 456.975 182.874 457.029 183.037 457.105L183.156 457.159C183.61 457.376 183.999 457.571 184.215 458.254C184.41 458.894 184.258 459.284 184.129 459.62C184.075 459.75 184.02 459.891 183.988 460.053C183.945 460.238 183.966 460.509 183.988 460.769C183.999 460.931 184.01 461.083 184.01 461.224C184.01 461.365 184.01 461.495 184.021 461.636C184.031 461.928 184.042 462.221 184.021 462.514C183.988 462.774 183.923 462.991 183.858 463.186C183.793 463.37 183.75 463.522 183.729 463.717C183.642 464.66 183.631 465.429 183.729 465.928C183.869 465.971 183.977 466.091 184.01 466.231C184.518 466.264 184.994 466.318 185.458 466.383C186.226 466.492 187.015 466.611 187.761 467.055C187.923 467.153 188.053 467.25 188.183 467.348C188.345 467.467 188.496 467.575 188.691 467.673C189.999 468.323 191.578 468.692 192.951 468.681C193.178 468.681 193.448 468.692 193.718 468.714C194.508 468.768 195.329 468.822 195.794 468.334C195.891 468.237 195.945 468.107 196.021 467.966C196.086 467.825 196.151 467.695 196.248 467.554C196.464 467.239 196.735 467.012 196.994 466.795L197.178 466.632C197.924 465.971 198.475 465.245 199.048 464.486C199.265 464.205 199.481 463.912 199.708 463.619C200.573 462.525 201.849 462.557 202.984 462.6C203.449 462.622 203.881 462.546 204.335 462.481C204.595 462.438 204.865 462.395 205.135 462.373C205.914 462.297 206.714 462.546 207.492 462.796C208.725 463.186 209.795 463.522 210.649 462.655C210.909 462.384 211.06 461.993 211.222 461.582C211.406 461.105 211.59 460.617 211.979 460.248C212.617 459.62 213.319 459.869 213.882 460.075L214.109 460.151C215.136 460.498 217.287 460.823 217.828 460.021C218.012 459.761 217.871 459.186 217.752 458.72C217.698 458.482 217.633 458.243 217.612 458.048C217.579 457.766 217.536 457.495 217.493 457.224C217.406 456.672 217.32 456.097 217.32 455.501C217.32 454.255 217.644 454.038 218.66 453.55C219.233 453.268 219.709 453.247 220.217 453.236C221.59 453.236 222.423 452.932 223.623 452.011C223.947 451.762 224.271 451.502 224.607 451.231C225.699 450.342 226.834 449.42 228.109 448.954C228.964 448.651 229.493 448.922 230.066 449.464C230.261 449.648 230.337 449.8 230.391 449.941C230.423 450.017 230.434 450.071 230.672 450.223C230.92 450.385 231.266 450.483 231.677 450.504C232.661 450.559 232.78 450.342 233.31 449.334L233.353 449.247C233.861 448.282 233.85 447.805 233.84 446.732V446.418C233.84 446.266 233.829 446.115 233.818 445.952C233.785 445.063 233.742 444.055 234.51 443.34C234.759 443.112 236.11 442.158 236.845 442.148C237.537 442.169 237.926 442.549 238.251 442.917L238.37 443.047C238.683 443.383 238.899 443.752 239.105 444.109C239.267 444.391 239.429 444.651 239.613 444.868L239.721 444.998C239.829 445.139 239.861 445.172 239.97 445.215C240.034 445.237 240.067 445.237 240.186 445.215C240.316 445.193 240.499 445.161 240.705 445.215C241.224 445.356 241.505 445.67 241.786 445.974L241.84 446.039C242.089 446.31 242.305 446.581 242.51 446.863C243.04 447.545 243.494 448.131 244.294 448.412C244.737 448.564 245.581 448.673 245.905 448.076C246.078 447.762 246.056 446.451 245.927 446.028C245.775 445.562 245.375 445.28 244.964 445.052C244.273 444.662 243.451 444.196 242.597 443.817C242.197 443.633 240.964 443.069 241.289 441.985C241.397 441.606 241.699 441.302 242.143 441.075C242.954 440.674 244.121 440.641 244.705 440.869C244.954 440.966 245.159 441.064 245.375 441.172C245.743 441.356 246.056 441.508 246.5 441.573C247.494 441.725 248.23 441.421 249.084 441.064C249.451 440.912 249.83 440.749 250.251 440.619C250.759 440.457 250.922 440.229 251.278 439.731C251.927 438.82 252.705 438.246 253.754 437.899C254.316 437.715 254.965 437.66 255.646 437.606C256.933 437.509 258.154 437.411 258.695 436.457C259.041 435.85 258.522 434.907 258.111 434.138C258.025 433.986 257.938 433.834 257.873 433.693C257.473 432.913 256.684 432.263 255.916 431.634C255.614 431.385 255.322 431.135 255.052 430.897C255.03 430.875 252.932 428.924 252.997 427.418C253.019 426.995 253.203 426.637 253.538 426.377L253.484 426.366Z"
              id="goa"
              fill="#2E373A"
            />
            <path id="maharashtra" />
            <path id="NCR" />
            <AnimatePresence mode="wait">
              {activeRegion &&
                zoomComplete &&
                highlightedRegions[activeRegion] &&
                highlightedRegions[activeRegion].locations && (
                  <motion.g
                    key={activeRegion}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
                  >
                    {Object.entries(highlightedRegions)
                      .filter(([regionKey]) => {
                        // Only show pins for the active region when zoomed in
                        if (activeRegion) return regionKey === activeRegion;
                        return true; // Otherwise show all
                      })
                      .map(([regionKey, region]) => {
                        const regionStyle = staticRegionDataIncity[regionKey]
                          ?.locationStyle || {
                          circleRadius: 1,
                          fontSize: 1.8,
                        };

                        return (
                          <g key={regionKey}>
                            {region.locations.map((loc) => (
                              <LocationDot
                                key={loc.id || loc.incityname}
                                {...loc}
                                regionKey={regionKey} // ✅ passes region context
                                circleRadius={regionStyle.circleRadius}
                                fontSize={regionStyle.fontSize}
                                yOffset={regionStyle.yOffset}
                                onClick={() => onPinClick?.(loc)}
                                onMouseEnter={() => onPinHover?.(loc)}
                                onMouseLeave={() => onPinHover?.(null)}
                                parent="Incity"
                              />
                            ))}
                          </g>
                        );
                      })}
                  </motion.g>
                )}
            </AnimatePresence>
          </motion.g>
        </g>

        {/* ✅ Region labels (visible when not zoomed in) */}
        <AnimatePresence>
          {!activeRegion &&
            Object.entries(highlightedRegions).map(([id, region]) => {
              const numberBox = region?.numberBox;
              if (!numberBox) return null;

              return (
                <motion.g
                  key={`label-${id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="cursor-pointer"
                  style={{
                    pointerEvents: id === "goa" ? "all" : "none", // Example rule
                  }}
                  onClick={() => onRegionSelect?.(id)}
                  onMouseEnter={() => {
                    if (id !== "goa") return;
                    const regionPath = document.querySelector(
                      `#india-map path[id='${id}']`
                    );
                    if (regionPath) {
                      regionPath.style.stroke = "#fff";
                      regionPath.style.strokeWidth = "0.8";
                    }
                    onRegionHover?.(id);
                  }}
                  onMouseLeave={() => {
                    if (id !== "goa") return;
                    const regionPath = document.querySelector(
                      `#india-map path[id='${id}']`
                    );
                    if (regionPath && region) {
                      regionPath.style.stroke = region.stroke || "#000";
                      regionPath.style.strokeWidth = region.strokeWidth || 1;
                    }
                    onRegionHover?.(null);
                  }}
                >
                  <rect
                    x={numberBox.x}
                    y={numberBox.y - 20}
                    width="20"
                    height="18"
                    rx="6"
                    fill="#0db14b"
                  />
                  <text
                    x={numberBox.x + 10}
                    y={numberBox.y - 10}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#000"
                    fontSize="11"
                    fontWeight="bold"
                    className="bw-b"
                  >
                    {numberBox.label ||
                      (region.locations?.length ?? 0)
                        .toString()
                        .padStart(2, "0")}
                  </text>
                </motion.g>
              );
            })}
        </AnimatePresence>
      </motion.svg>

      {/* 🔙 Back button when zoomed in */}
      {activeRegion && (
        <button
          onClick={() => onReset?.()}
          className="absolute z-30 flex cursor-pointer items-center px-4 py-2 inter-m text-[16px] gap-[16px] text-white rounded shadow-md top-28 right-8"
        >
          <span className="bg-[#2E373A] rounded-[10px] px-2 py-1.5">
            <ChevronLeft size={30} />
          </span>
          Back
        </button>
      )}
    </div>
  );
}

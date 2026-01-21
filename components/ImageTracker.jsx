"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ImageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const countImages = () => {
      const imgs = Array.from(document.images);

      const stats = {
        page: pathname,
        total: imgs.length,
        loaded: imgs.filter((i) => i.complete && i.naturalWidth > 0).length,
        broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
        lazy: imgs.filter((i) => i.loading === "lazy").length,
      };

      console.table(
        "statsstatsstatsstatsstatsstatsstatsstatsstatsstatsstatsstatsstatsstatsstats",
        stats
      );
    };

    // After hydration
    requestAnimationFrame(countImages);

    // After lazy images load
    window.addEventListener("load", countImages);

    return () => window.removeEventListener("load", countImages);
  }, [pathname]);

  return null;
}

"use client";

/**
 * Forces all <img> tags to use Next.js Image Optimization
 * without changing any components
 */

import { useEffect } from "react";

const WIDTHS = [480, 768, 1200];

export default function GlobalImageEnhancer() {
  useEffect(() => {
    const imgs = document.querySelectorAll("img:not([data-next-proxy])");

    imgs.forEach((img) => {
      const src = img.currentSrc || img.src;
      if (!src || src.includes("/_next/image")) return;

      img.setAttribute("data-next-proxy", "true");

      img.loading = "lazy";
      img.decoding = "async";
      img.style.maxWidth = "100%";
      img.style.height = "auto";

      const encoded = encodeURIComponent(src);

      img.src = `/_next/image?url=${encoded}&w=1200&q=70`;

      img.srcset = WIDTHS.map(
        (w) => `/_next/image?url=${encoded}&w=${w}&q=70 ${w}w`
      ).join(", ");

      img.sizes = "(max-width: 768px) 100vw, 1200px";
    });
  }, []);

  return null;
}

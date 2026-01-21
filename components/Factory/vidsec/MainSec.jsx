"use client";
import { ReactLenis } from "lenis/react";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const texts = [
  {
    heading: "Customized factory setups",
    sub: "with zero upfront investment",
  },
  {
    heading: "Flexible space and expansion",
    sub: "options ideal for MSMEs and first-time manufacturers",
  },
  {
    heading: "Tailored rental",
    sub: "plans aligned to your operational needs",
  },
  {
    heading: "Trusted by Leading Manufacturing Clients",
    sub: "across automotive, aerospace, engineering, and network technology sectors",
  },
];

export default function MainSec() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastFrame = useRef(0);

  const totalFrames = 340;
  const pixelsPerFrame = 24; // adjust scroll distance
  const [scrollHeight, setScrollHeight] = useState(0);
  const speedFactor = 0.8; // smaller segment = faster scroll

  // preload images
  useEffect(() => {
    const imgs = [];
    for (let i = 18; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/factory/images2/${i}.webp`; // ✅ correct path
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  // draw frame
  const drawFrame = (i) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const img = imagesRef.current[i];
    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  // scroll → frame mapping
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const total = totalFrames * pixelsPerFrame + window.innerHeight;
    setScrollHeight(total);

    const onScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY - containerRef.current.offsetTop;
      const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      const frameIndex = Math.floor(progress * (totalFrames - 1));

      if (frameIndex !== lastFrame.current) {
        lastFrame.current = frameIndex;
        drawFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", onScroll);
    // draw first frame once loaded
    imagesRef.current[0]?.addEventListener("load", () => drawFrame(0));

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // text animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end end"], // ✅ start animation when section is 20% in view
  });

  // ✅ make scroll faster (30% faster) by narrowing scroll segments

  const transforms = texts.map((t, i) => {
    const seg = 1 / texts.length;
    const start = i * seg;
    const end = start + seg * speedFactor;

    if (i !== texts.length - 1) {
      return {
        y: useTransform(scrollYProgress, [start, end], ["40%", "-40%"]),
        opacity: useTransform(
          scrollYProgress,
          [start, start + 0.05, end - 0.05, end],
          [0, 1, 1, 0]
        ),
      };
    } else {
      return {
        y: useTransform(scrollYProgress, [start, end], ["40%", "0%"]),
        opacity: useTransform(scrollYProgress, [start, start + 0.05], [0, 1]),
      };
    }
  });

  return (
    <ReactLenis root>
      <section
        ref={containerRef}
        style={{ height: scrollHeight ? `${scrollHeight}px` : "100vh" }}
        className="relative w-full bg-white lg:flex hidden"
      >
        {/* sticky canvas */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-screen object-cover"
          />

          {/* Gradient vectors */}
          {/* <img
            className="purple_vctr hidden md:block absolute bottom-0 left-0 lg:bottom-[-60px] md:w-[350px] w-[300px]"
            src="/purple_vector.svg"
            alt="Purple Vector"
          />
          <img
            className="orange_vctr hidden md:block absolute bottom-0 lg:left-20 left-0 lg:bottom-[-80px] md:w-[350px] w-[300px] opacity-80"
            src="/orange_vector.svg"
            alt="Orange Vector"
          /> */}

          {/* text overlay */}
          <div className="absolute left-[max(5%,calc((100vw-1340px)/2))] top-0 h-full flex flex-col justify-center pointer-events-none">
            {texts.map((t, i) => (
              <motion.div
                key={i}
                style={transforms[i]}
                className="absolute w-[500px]"
              >
                <h2 className="bw-m xl:!text-[64px] sm:!text-[45px] text-[35px] xl:!leading-[74px] sm:!leading-[55px] !leading-[45px] xl:!tracking-[-2.6px] text-black mb-2 capitalize">
                  {t.heading}
                </h2>
                <p className="bw-r xl:text-[28px] xl:leading-[38px] sm:text-[24px] sm:leading-[34px] text-[20px] leading-[30px] text-black">
                  {t.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}

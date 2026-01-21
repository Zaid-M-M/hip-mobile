"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as flubber from "flubber";
import { ReactLenis } from "lenis/react";
import FocusHeader from "./FocusHeader";

const sectionsContent = [
  {
    title: "Right Fitted",
    paragraph:
      "Solutions that perfectly fit your logistics needs: across first-mile, mid-mile, and last-mile operations, in strategic locations, and with options ranging from ready-to-move facilities to 100% built-to-suit developments.",
    link: "/know-us/arrup.svg",
    fill: "#8F53A1",
    // fill: "#000000",
    isStroke: false,
  },
  {
    title: "Hands-On",
    paragraph:
      "We adopt a consultative, customer-first approach led by seasoned industry experts, with proven experience across multiple sectors to deliver Grade A parks designed to meet unique customer needs.",
    link: "/know-us/integration.svg",
    fill: "#f47920",
    // fill: "#000000",

    isStroke: false, // thumbs-up → stroke
  },
  {
    title: "Efficient",
    paragraph:
      "Integrated project delivery with 100% compliance and on-time execution, by using cutting-edge tech to streamline land acquisition and speculative developments, with reduced time-to-market for customers.",
    link: "/know-us/future.svg",
    // fill: "#000000",
    fill: "#000000",

    isStroke: false,
  },
  {
    title: "Sustainable",
    paragraph:
      "Green warehousing through energy-efficient design, biodiversity and resource management, fostering inclusive communities via education, healthcare, and jobs for the differently abled, and upholding ethical governance across our partner network. ",
    link: "/know-us/green.svg",
    fill: "#0db14b",
    // fill: "#000000",

    isStroke: false, // leaf → filled
  },
];

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-leaf-icon lucide-leaf"
>
  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
</svg>; */
}

const shapes = [
  // folder-open (1 path)
  [
    "M0 21V14.3182V12.7702C0 11.1133 1.34315 9.7702 3 9.7702H7.07261C8.72946 9.7702 10.0726 8.42705 10.0726 6.7702V3C10.0726 1.34315 11.4157 0 13.0726 0H21C22.6569 0 24 1.34314 24 3V12.0124C24 13.6693 22.6569 15.0124 21 15.0124H16.6665C15.0097 15.0124 13.6665 16.3556 13.6665 18.0124V21C13.6665 22.6569 12.3234 24 10.6665 24H3C1.34315 24 0 22.6569 0 21Z",
  ],
  // thumbs-up (2 paths)
  [
    // "M7 10v12",
    // "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
    // "M4.50571 23.8975L2.4326 23.3882C0.997735 23.0357 0 21.8436 0 20.4818V12.8326C0 11.8772 0.612528 11.7398 1.45117 11.1726L3.95117 9.69248L5.95117 8.27887C6.30877 8.01038 6.74446 7.17777 6.95117 6.79876L8.72882 3.41145C8.90716 3.08448 9 2.7239 9 2.35833C9 -0.126493 12.6539 -0.917287 13.8661 1.3052L14.0801 1.6977C14.3336 2.1624 14.4199 2.68883 14.3267 3.20132L14 5.31853C13.9661 5.50523 13.5891 6.62789 13.5 6.79863C12.8015 8.13645 13.9061 8.88334 15.524 8.88334H20.3194C20.98 8.88334 21.6252 9.06608 22.1706 9.40765L22.4811 9.60205C23.1508 10.0214 23.6274 10.6534 23.819 11.3759L23.9071 11.708C24.0135 12.1092 24.0287 12.5262 23.9517 12.933L22.6051 20.0517C22.4894 20.663 22.1705 21.2265 21.692 21.6652L20.1066 23.1187C19.4911 23.683 18.6563 24 17.7858 24H5.35517C5.06835 24 4.78276 23.9655 4.50571 23.8975Z",
    "M24 13C24 12.219 24 11.8961 24 11.0001C24 10.1877 23.6887 9.48465 23.0682 8.89059C22.4464 8.29658 21.7102 7.99974 20.8593 7.99974H16.327C16.3705 7.85395 16.4142 7.72896 16.4578 7.62481C16.5009 7.52067 16.5616 7.40596 16.6376 7.28096C16.7137 7.15591 16.7685 7.06211 16.8011 6.99972C16.9974 6.64575 17.1476 6.35389 17.2514 6.12491C17.3549 5.8955 17.458 5.58312 17.562 5.18728C17.6658 4.79166 17.7174 4.39566 17.7174 3.99982C17.7174 3.74993 17.7142 3.54662 17.7091 3.39049C17.704 3.23424 17.6762 2.99979 17.6275 2.68725C17.5781 2.37487 17.5125 2.11442 17.4309 1.90619C17.349 1.6979 17.218 1.46334 17.0383 1.20311C16.8582 0.942395 16.6401 0.731752 16.3836 0.570199C16.127 0.408754 15.7999 0.27336 15.4018 0.164071C15.0032 0.0546721 14.5535 0 14.0514 0C13.7678 0 13.5226 0.0990008 13.3151 0.296948C13.097 0.505238 12.9112 0.765628 12.7586 1.07801C12.6059 1.39055 12.4994 1.6614 12.4394 1.89065C12.3794 2.11979 12.3111 2.43759 12.235 2.84371C12.1365 3.28142 12.0632 3.59632 12.0138 3.78901C11.9648 3.9817 11.8691 4.23427 11.7274 4.5467C11.5855 4.85936 11.4166 5.10918 11.2202 5.29679C10.8603 5.64047 10.3094 6.26551 9.56747 7.17167C9.03281 7.83825 8.48199 8.46843 7.91478 9.06221C7.34745 9.65611 6.67123 9.98419 6.67123 9.98419L5.96772 10.3046C5.96772 10.3046 0 10 0.00125929 10.4375L0.000146555 18.6621C-5.74963e-05 22.4167 -2.70028e-05 21.375 0.00010712 21.8958C0.207289 22.0887 6.43665 21.9894 6.72028 21.9998C7.10204 22.0103 7.96384 22.2392 9.30568 22.6875C10.1455 22.9579 10.8027 23.164 11.2772 23.3044C11.7516 23.4449 12.4148 23.596 13.265 23.7577C14.116 23.9191 14.9013 24 15.6211 24H17.7319C19.1831 23.9792 20.2571 23.5728 20.9555 22.7813C21.588 22.0625 22.5 20 22.5 20C22.5 20 22.8366 19.0939 23 18.5C23.1852 17.865 23.5 17 23.5 17L24 14.5C24 14.5 24 14 24 13Z",
    // "M6.94027 6.54486H5.28166M18.5505 6.54486H16.8919M15.2333 3.51495L16.8919 2M6.94027 2L8.59887 3.51495M11.54 4.57529C10.8175 4.5734 10.4526 4.92247 10.4415 6.63879C10.4377 8.10608 9.04449 9.32152 7.94705 10.049C7.83639 10.1224 7.74611 10.2184 7.68345 10.3294C7.6208 10.4404 7.58753 10.5633 7.5863 10.6881C7.56718 13.2152 7.59263 15.7423 7.66266 18.2695C7.66723 18.4134 7.71633 18.5532 7.80426 18.6727C7.8922 18.7922 8.01538 18.8865 8.15955 18.9446C9.45707 19.4521 11.6378 20.0834 14.7971 19.9909C15.1834 19.9791 15.5695 19.9657 15.9553 19.9505C17.3603 19.8921 18.6388 18.8774 18.9616 17.5929C19.3202 16.1376 19.6526 14.6914 19.9515 13.256C20.2878 11.6441 18.8296 10.1469 16.9723 10.1131C15.7917 10.0977 14.6111 10.0872 13.4305 10.0815C13.4305 10.0815 13.9875 9.05609 13.9567 7.34514C13.9083 5.29048 12.2577 4.57435 11.54 4.57529ZM2.38219 18.1363C2.51419 18.86 3.25158 19.4774 4.11785 19.5783C4.40419 19.6118 4.69053 19.6426 4.97687 19.6708C5.66554 19.7399 7.14083 19.1694 7.11837 18.5779C7.0101 15.872 6.97059 13.1664 6.99985 10.4609C7.00572 9.86852 5.49657 9.53137 4.78717 9.58061C4.49276 9.60039 4.19802 9.62227 3.90292 9.64626C3.01039 9.7198 2.28164 10.3091 2.18834 11.0283C1.8815 13.4014 1.95199 15.7534 2.38219 18.1363Z",
  ],

  // check (1 path)
  //   ["M20 6 9 17l-5-5"],
  [
    // "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    // "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
    // "M1.93753 11.4534C1.48084 11.4582 1.07264 11.6226 0.832334 12.0788C0.0362524 13.5899 2.00249 15.9917 2.00249 15.9917L6.56785 21.8094C7.32246 22.771 8.13566 24.0449 9.35715 23.9994C10.454 23.9586 11.1152 22.8024 11.7409 21.9005L23.9887 4.24438C23.9887 4.24438 25.2453 1.87005 24.2745 0.502434C23.9792 0.0863927 23.5849 -0.0313922 23.1785 0.00675992C21.7099 0.144629 20.788 1.60276 19.8927 2.77508L8.99745 17.041L6.27585 14.2579C5.03735 12.9915 3.70881 11.4349 1.93753 11.4534Z",
    // "M2.99393 11.7944C2.91329 11.8623 2.84263 11.9495 2.78489 12.0591C2.18783 13.1924 3.66251 14.9938 3.66251 14.9938L7.08653 19.357C7.65249 20.0782 8.26239 21.0337 9.17851 20.9996C10.0012 20.9689 10.4971 20.1018 10.9663 19.4254L20.1521 6.18329C20.1521 6.18329 21.0946 4.40253 20.3665 3.37683C20.2808 3.25601 20.1839 3.16873 20.0797 3.10879C18.8009 2.37343 17.6391 4.34948 16.7437 5.52179L8.90873 15.7807L7.33329 14.1697C6.09479 12.9033 4.34856 10.653 2.99393 11.7944Z",
    "M19 0C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5C0 2.23858 2.23858 0 5 0H19ZM18.7314 4.83301C17.8107 4.22298 16.5701 4.47482 15.96 5.39551L10.0039 14.3809L7.20898 11.5859C6.42795 10.8049 5.16191 10.8049 4.38086 11.5859C3.5998 12.367 3.59983 13.633 4.38086 14.4141L7.99609 18.0303C9.3129 19.3468 11.4912 19.1877 12.6035 17.6943L12.6367 17.6504L12.667 17.6045L19.2939 7.60449C19.904 6.68377 19.6521 5.44315 18.7314 4.83301Z", // "M1.93753 11.4534C1.48084 11.4582 1.07264 11.6226 0.832334 12.0788C0.0362524 13.5899 2.00249 15.9917 2.00249 15.9917L6.56785 21.8094C7.32246 22.771 8.13566 24.0449 9.35715 23.9994C10.454 23.9586 11.1152 22.8024 11.7409 21.9005L23.9887 4.24438C23.9887 4.24438 25.2453 1.87005 24.2745 0.502434C23.9792 0.0863927 23.5849 -0.0313922 23.1785 0.00675992C21.7099 0.144629 20.788 1.60276 19.8927 2.77508L8.99745 17.041L6.27585 14.2579C5.03735 12.9915 3.70881 11.4349 1.93753 11.4534Z",
  ],
  // leaf (2 paths)
  [
    // "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    // "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
    "M24 2.51866L23.5004 1.74478C23.5004 1.74478 22.7509 3.00033 21.5004 3C17.5 2.99894 15.7679 0.0401136 9.50045 1.23995C-0.225616 3.10191 0.000446066 25.0019 0.000446066 25.0019C0.000446066 25.0019 0.0283883 23.3812 3.5 22.7417C9.81525 21.5784 15.5601 23.3885 19.5004 18.935C22.4379 15.6151 21.9996 10.0495 22 5.5C22.0001 3.73387 24 2.51866 24 2.51866Z", // "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
  ],
];

export default function ScrollFF() {
  const sectionRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [currentPaths, setCurrentPaths] = useState(shapes[0]); // array of paths

  const isAnimatingRef = useRef(false);
  const pendingIndexRef = useRef(null);

  const animateShape = (from, to, onComplete) => {
    const fromArr = Array.isArray(from) ? from : [from];
    const toArr = Array.isArray(to) ? to : [to];

    const maxLen = Math.max(fromArr.length, toArr.length);
    const interpolators = Array.from({ length: maxLen }, (_, i) =>
      flubber.interpolate(fromArr[i] || fromArr[0], toArr[i] || toArr[0], {
        maxSegmentLength: 2,
      })
    );

    let frame = 0;
    const totalFrames = 15;

    const animateFrame = () => {
      const progress = frame / totalFrames;
      const nextPaths = interpolators.map((interp) => interp(progress));
      setCurrentPaths(nextPaths);
      frame++;

      if (frame <= totalFrames) {
        requestAnimationFrame(animateFrame);
      } else {
        onComplete?.();
      }
    };

    animateFrame();
  };

  const handleMorph = (nextIndex) => {
    if (nextIndex === focusedIndex || isAnimatingRef.current) {
      pendingIndexRef.current = nextIndex;
      return;
    }

    isAnimatingRef.current = true;

    const from = shapes[focusedIndex];
    const to = shapes[nextIndex];

    animateShape(from, to, () => {
      setFocusedIndex(nextIndex);
      isAnimatingRef.current = false;

      if (
        pendingIndexRef.current !== null &&
        pendingIndexRef.current !== nextIndex
      ) {
        const next = pendingIndexRef.current;
        pendingIndexRef.current = null;
        handleMorph(next);
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;

      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      handleMorph(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [focusedIndex]);

  return (
    <div
      className="fix py-[40px] sm:py-[70px] bg-no-repeat bg-white bg-cover bg-center"
    // style={{ backgroundImage: "url('/know-us/gradient.png')" }}
    >
      <FocusHeader />

      <div className="flex w-full min-h-screen  pt-[30px] sm:pt-[70px] relative">

        <img className="purple_vctr hidden md:block absolute top-[-80px] left-[20px] lg:top-[110px] lg:left-[-300px] lg:w-[auto] md:w-[350px] w-[300px]" src='/purple_vector.svg' />
        <img className="green_vctr hidden md:block absolute top-[-100px] left-[-100px] lg:top-[110px] lg:left-[-150px] lg:w-[auto]  md:w-[350px] w-[300px]" src='/green_vector.svg' />

        {/* Sticky SVG on left */}
        {/* <div className="w-[25%] sm:w-[20%] bg-inherit sm:pt-2 flex items-start pr-1.5 sm:pr-4 justify-end 1280:pr-[60px]">
          <div className="sticky top-[300px]">
            <motion.svg
              className="w-full max-w-[90px] h-auto"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {currentPaths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill={
                    sectionsContent[focusedIndex].isStroke
                      ? "none"
                      : sectionsContent[focusedIndex].fill
                  }
                  stroke={
                    sectionsContent[focusedIndex].isStroke
                      ? sectionsContent[focusedIndex].fill
                      : "none"
                  }
                  strokeWidth={sectionsContent[focusedIndex].isStroke ? 2 : 0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transition={{ duration: 0.1, ease: [0.7, 0, 0.4, 1] }}
                />
              ))}
            </motion.svg>
          </div>
        </div> */}
        <div className="w-[18%] sm:w-[20%] sm:pt-2 flex items-start pr-1.5 sm:pr-4 justify-end 768:pr-[25px] 1280:pr-[30px] 1366:pr-[60px] relative">
          <div className="sticky top-[300px]">
            {/* gradient background */}
            <div className="w-[25%] sm:w-[20%] sm:pt-2 flex items-start pr-1.5 sm:pr-4 justify-end 1280:pr-[60px] relative">
              <div className="sticky top-[600px]">
                {/* gradients behind */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                  <motion.div
                    className="absolute -left-30 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[219px] xl:h-[226.8px] bg-[#8F53A1] opacity-[0.15] blur-[69px]"
                    animate={{
                      x: [0, 60, 0, -60, 0],
                      y: [0, -40, 0, 40, 0],
                    }}
                    transition={{
                      duration: 12,
                      ease: [0.7, 0, 0.4, 1],
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute w-[100px] left-10 h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[295.8px] xl:h-[469.8px] bg-[#0db14b] opacity-[0.13] blur-[69px]"
                    animate={{
                      x: [0, -80, 0, 80, 0],
                      y: [0, 50, 0, -50, 0],
                    }}
                    transition={{
                      duration: 14,
                      ease: [0.7, 0, 0.4, 1],
                      repeat: Infinity,
                    }}
                  />
                </div>
              </div>
            </div>

            <motion.svg
              className="w-full max-w-[90px] h-auto relative z-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {currentPaths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill={
                    sectionsContent[focusedIndex].isStroke
                      ? "none"
                      : sectionsContent[focusedIndex].fill
                  }
                  stroke={
                    sectionsContent[focusedIndex].isStroke
                      ? sectionsContent[focusedIndex].fill
                      : "none"
                  }
                  strokeWidth={sectionsContent[focusedIndex].isStroke ? 2 : 0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transition={{ duration: 0.1, ease: [0.7, 0, 0.4, 1] }}
                />
              ))}
            </motion.svg>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="w-full sm:w-[80%] flex flex-col  pt-[0px]">
          {sectionsContent.map((section, i) => {
            const isFocused = focusedIndex === i;
            return (
              <motion.div
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                animate={{
                  filter: isFocused ? "blur(0px)" : "blur(4px)",
                  opacity: isFocused ? 1 : 0.5,
                }}
                transition={{ duration: 0.15, ease: [0.7, 0, 0.4, 1] }}
                className={`h-fit pl-3 sm:px-2 pb-[45px] sm:pb-[80px] last:pb-0 ${isFocused ? "text-black" : "text-gray-500"
                  }`}
              >
                <div>
                  <div className="bw-r text-[16px] 768:text-[22px] 768:leading-[28px] 1024:text-[16px] 1280:text-[20px] leading-[24px] 1024:leading-[25px] 1280:leading-[30px] tracking-[-4%] flex flex-col gap-[8px] sm:gap-[10px] 1280:gap-[15px]">
                    <h2 className="bw-m text-[24px] 768:text-[40px] whitespace-nowrap 1024:text-[40px] 1280:text-[42px] 1366:text-[46px] leading-[34px] sm:leading-[56px] bw-m tracking-[-4%]">
                      {section.title}
                    </h2>
                    <p className="bw-r sm:text-[24px] text-[16px] leading-[22px] sm:leading-[34px]">
                      {section.paragraph}
                    </p>
                    <div className="flex gap-[8px] sm:gap-[15px] items-center cursor-pointer">
                      <span className="bw-sb text-[14px] leading-[24px] sm:text-[16px] tracking-[0.1em] sm:leading-[26px]">
                        JOIN HORIZON
                      </span>
                      <img
                        src="/know-us/arrup.svg"
                        alt="Arrow icon"
                        className="w-4 h-4 sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

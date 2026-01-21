"use client";
import React, { useRef, useState } from "react";

const Solutions = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className='fix lg:py-[100px] py-[45px] flex flex-col lg:gap-12 gap-6'>
        {/* Heading */}
        <div>

          <h2 className='bw-r sec_hd'>
            <span>Solutions That Evolve</span>
            <span className='bw-m lg:items-center flex lg:flex-row flex-col lg:gap-5 gap-2'>
              With Your Needs
              <img
                src='/abstract_pattern.svg'
                className='lg:w-[226px] w-[40%] h-auto lg:h-[48px]'
                alt=''
              />
            </span>
          </h2>
        </div>

        {/* Paragraphs */}
        <div className='flex lg:flex-row flex-col lg:gap-12 gap-6'>
          <p className='bw-r md:text-[20px]'>
            Given the rise in multi-channel sales, our customers are faced with
            new and ever evolving business challenges in their supply chain
            systems. We aspire to be their partner in addressing these business
            needs and help them improve their service levels. This requires
            large scale and pan-India presence and varied offering of
            warehousing and industrial real estate solutions and services.
          </p>
          <p className='bw-r md:text-[20px]'>
            We offer big boxes for distribution and fulfilment centres that
            support large-scale efficiencies and urban logistics/in-city
            warehousing bringing our customers closer to theirs. With India
            emerging as an alternate manufacturing investment destination
            catalysed by government policy and incentives, we are also making
            significant investment in industrial parks for customers in the
            light engineering and manufacturing sectors.
          </p>
        </div>

        {/* Video + Button */}
        <div className='flex relative flex-col items-center gap-6'>
          <video
            ref={videoRef}
            className='aspect-video w-full object-cover'
            src='/ind/Network.mp4'
          ></video>

          <button
            onClick={togglePlay}
            className='flex absolute cursor-pointer lg:bottom-5 lg:right-5 bottom-2 right-2 w-fit lg:px-[30px] lg:py-[15px] px-5 py-2 justify-center items-center gap-[10px] 
               bg-[rgba(0,0,0,0.75)] backdrop-blur-[2.5px] transition'
          >
            {/* Button Text */}
            <span className='text-white font-[Inter] text-[14px] font-semibold leading-[24px] tracking-[1.4px]  uppercase'>
              {isPlaying ? "Pause Video" : "Watch Video"}
            </span>{" "}
            {/* SVG Icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 26 25'
              fill='none'
              className='w-[25px] h-[25px] shrink-0'
            >
              <path
                d='M23.1953 11.1812L9.125 2.57373C8.88778 2.42847 8.61608 2.34917 8.33797 2.34402C8.05985 2.33887 7.7854 2.40805 7.54297 2.54443C7.30284 2.67869 7.10281 2.87449 6.96344 3.11169C6.82407 3.34889 6.7504 3.61893 6.75 3.89404V21.1069C6.75181 21.5196 6.91742 21.9147 7.21041 22.2053C7.50341 22.4959 7.89982 22.6583 8.3125 22.6567C8.60054 22.6566 8.88299 22.5772 9.12891 22.4272L23.1953 13.8198C23.4214 13.682 23.6083 13.4884 23.7379 13.2575C23.8676 13.0266 23.9357 12.7663 23.9357 12.5015C23.9357 12.2367 23.8676 11.9763 23.7379 11.7454C23.6083 11.5146 23.4214 11.3209 23.1953 11.1831V11.1812Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

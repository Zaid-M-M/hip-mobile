'use client';
import React from "react";
import Btn from "@/components/global/Btn";

const C_info_data = [
    {
        title: "PDF 1",
        download_img: "/download_icon.svg",
        mark_img: "/Invester/green_mark.svg",
    },
    {
        title: "PDF 2",
        download_img: "/download_icon.svg",
        mark_img: "/Invester/green_mark.svg",
    }
]

const Transcripts_sec = () => {
    return (
        <div className="w-full bg-[#fff]">
            <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">

                <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[60px] 1366:gap-[60px] justify-between flex-col lg:flex-row">
                    <div className="w-[312px] md:w-[240px] 1280:w-[312px]  mb-[15px] lg:mb-[0px] relative">
                        <h1 className="1280:text-[54px] 1280:leading-[64px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px]  text-[30px] leading-[36px] tracking-[-1px]  bw-r">Earnings Call <br></br><span className="bw-r">Transcripts & Recordings</span></h1>
                    </div>
                    <div className="md:w-[auto] lg:w-[700px] 1280:w-[898px]">
                        <div className="flex flex-wrap md:gap-[26px] gap-[16px]">
                            {C_info_data.map((info_data, index) => (
                                <a href="#" className="flex justify-between items-center gap-[83px] 1280:w-[48%] md:w-[48%] lg:w-[47%] w-[100%] h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px] bg-[#ACD5AE] bw-r text-[20px] md:text-[20px] md:leading-[23px] 1440:text-[28px] 1440:leading-[36px] 1366:text-[26px] 1280:text-[24px] 1280:leading-[31px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:px-[25px] relative overflow-hidden">
                                    {info_data.title}
                                    <img src={info_data.download_img} className='lg:w-[30px] w-[30px] 1280:w-[40px]'></img>
                                    <img className="absolute left-0 1280:w-[85px] 1366:w-[85px] w-[60px] bottom-[-5px]" src={info_data.mark_img}></img>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Transcripts_sec;

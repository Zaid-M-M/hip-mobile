import React from "react";
import Btn from "../global/Btn";

const Energy = () => {
  return (
    <div className="relative overflow-hidden bg-black ">
      <div className="lg:my-[65px] my-12 z-50">
        <div className="fixup ">
          <img
            className="top-12 right-[max(5%,calc((100vw-1340px)/2))] z-0 absolute xl:w-[550px] 1440:w-[650px]"
            src="/arrow_mark.png"
          ></img>

          <div className="flex items-left flex-col md:flex-row md:items-center ">
            <h2 className="sec_hd bw-r flex flex-col ">
              <span className="txt_gradient flex gap-3 lg:gap-4 items-center bw-m">
                Energy
                <br className="block" />
                {/* <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                /> */}
              </span>
              <span className=" bw-r text-white flex flex-row gap-[10px] md:gap-[17px] items-start md:items-center z-20">
                Solutions
                <img
                  src="/abstract_pattern.svg"
                  className="abstract_svg"
                  alt="pattern"
                />
              </span>
            </h2>
          </div>
          {/* Flex reverse */}
          <div className="flex flex-col 1024:flex-row-reverse z-10 justify-between mt-[20px] xl:mt-[28px]  gap-5 xl:gap-[80px] 1440:gap-[100px]">
            {/* Image */}
            <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] z-20 relative">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/value_added_services/solar.png"
                alt="Factory"
              />
            </div>
            {/* Text */}
            <div className="1280:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px] z-20">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                We actively integrate rooftop solar energy infrastructure across
                our parks, with over 18 MWp installed to date, and more planned
                for every operating asset. Our long-term roadmap is aligned with
                net-zero goals, and we are working to expand on-site clean
                energy options. As more businesses shift to green
                transportation, we have also proactively installed electric
                vehicle charging stations at our first mile parks, with more
                planned for our in-city centers.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
                Whether you're looking to offset your carbon footprint or reduce
                power bills, we see it as a shared goal to achieve.
              </p>
              {/* <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-white">
                Wayfinding signage is strategically placed to make navigation
                simple and stress-free for everyone on-site.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] text-white">
                Within buildings, ramps provide seamless access across different
                levels, making it easier for everyone — whether they’re moving
                goods or simply getting to work — to move through the space
                effortlessly.
              </p> */}
              {/* Button  */}
              <Btn
                text="Environment"
                className=" desbut mt-4 !pl-0"
                href="/environment/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;

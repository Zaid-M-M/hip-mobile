import React from "react";

const Staff = () => {
  return (
    <div className=" relative overflow-hidden">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="lg:my-[65px] my-12">
        <div className="fix ">
          <div className="flex items-left flex-col md:flex-row md:items-center">
            <h2 className="sec_hd bw-m flex flex-col">
              <span className="flex gap-[10px] md:gap-[17px]  bw-m items-center">
                Staff <br className="block"></br>{" "}
                <img src="/abstract_pattern.svg" className="abstract_svg" />
              </span>
              <span className="bw-r">Accomodation</span>
            </h2>
          </div>
          <div className="flex z-10 flex-col justify-between mt-[20px] xl:mt-[28px] 1440:gap-[20px] gap-5 xl:gap-0 lg:flex-row ">
            <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px]">
              <img
                className="w-[100%] 1440:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/value_added_services/staff.png"
              ></img>
            </div>
            <div className="1280:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                At Horizon, we understand the impact of well-located staff
                accommodation on operations, cost and workforce productivity.
                That’s why we have started to integrate blue-collar and
                white-collar housing at our parks to provide a strategic
                advantage for our customers.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                These facilities reduce commute times and costs, boost worker
                availability, improve employee retention, enhance operational
                efficiency, and fostering a stronger connection between workers
                and their workplace.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
                Proximity to production facilities provides workers with more
                time for rest and personal life, which in turn can increase
                productivity and loyalty.
              </p>
              {/* <div className="pt-[14px] flex gap-[10px] py-[15px]">
                <span className="bw-sb text-[16px] uppercase">
                  Industrial and Factory Solutions{" "}
                </span>
                <img src="/value_added_services/link.svg" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;

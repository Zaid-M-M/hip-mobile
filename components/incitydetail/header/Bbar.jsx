import React from "react";

const Bbar = ({ stats }) => {
  if (!stats || !Array.isArray(stats) || stats.length === 0) return null;

  return (
    <div className=" lg:absolute top-auto lg:bottom-0 w-full bg-[#797979ba] lg:bg-white/30 backdrop-blur-[10px] text-white py-[25px] md:py-[30px] lg:py-[24px] lg:mt-[20px]">
      <div className="flex w-full justify-between md:justify-start flex-wrap gap-0 lg:gap-4 pl-[max(5%,calc((100vw-1340px)/2))] pr-[max(5%,calc((100vw-1340px)/2))]">
        {stats.map(
          (item, idx) =>
            item.value && (
              <div
                className="w-[calc(50%-16px)] md:w-[calc(34%-16px)]"
                key={item.label}
              >
                {item.label && (
                  <div className="flex flex-col min-w-fit">
                    <span
                      className="uppercase  text-[12px] md:text-[15px] bw-r"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                    />
                    <span
                      className="text-[14px] md:text-[22px] xl:text-[26px] !leading-[110%] bw-m capitalize valuetext 1440:whitespace-nowrap"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Bbar;

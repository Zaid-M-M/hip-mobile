import Btn from "@/components/global/Btn";
import Btn2 from "@/components/global/Btn2";
import React from "react";

const CTA = ({ career_sec6_heading }) => {
  return (
    <div className='w-full overflow-hidden py-12 xl:py-20 relative bg-cover bg-no-repeat bg-[url("/culture/feelbg.jpg")]'>
      <img
        src="/culture/garrow.svg"
        alt="gradient arrow"
        className="absolute top-5 opacity-[0.36] right-5 z-0"
      />
      <div className="flex items-center gap-6 flex-col relative z-10 fixup">
        <h3
          className="xl:text-[56px] text-[35px] leading-[45px] text-center text-white bw-r xl:leading-[56px]"
          dangerouslySetInnerHTML={{ __html: career_sec6_heading }}
        />
        <Btn2 tgt={false} text="Join us" href="#joinus" />
      </div>
    </div>
  );
};

export default CTA;

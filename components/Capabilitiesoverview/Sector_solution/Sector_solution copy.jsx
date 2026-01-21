'use client';
import { useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Sector_solution() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'], // fade starts when section enters
  });

  return (
    <div className="bg-[#000000]" style={{ height: '150vh' }}>

      <div ref={sectionRef} className="fix sticky top-0 flex justify-between 1280:pt-[100px] 1280:pb-[55px]">
        <ReactLenis root>
          <Sector_scroll progress={scrollYProgress} />
        </ReactLenis>
      </div>

    </div>
  );
}

function Sector_scroll({ progress }) {

  const paraRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paraRef,
    offset: ['start start', 'end end'], // animation happens when para enters/exits viewport
  });
  const para_scroll = useTransform(scrollYProgress, [0.8, 0.3], ['0px', '720px']);
  // Fade in text between 0% and 40% of section scroll
  // const para_scroll = useTransform(progress, [1, 0.9], ['720px', '0px']);

  return (
    <>
      {/* Left Text */}
      <div className="flex-1 " ref={paraRef}>

        <div className=' pt-[50px] pb-[10px] bg-[#000]'>
          <h1 className=" sec_hd bw-r bg-gradient-to-r whitespace-nowrap overflow-visible from-[#AC38D9] to-[#f47920] bg-clip-text text-transparent mb-[41px]">
            Sector Special <br />
            <span className="bw-m text-[#fff]">Solutions</span>
            <img
              src="/abstract_pattern.svg"
              className="mt-[-32px] w-[100px] 1280:w-[auto] 1280:mt-[-60px] 1280:ml-[300px]"
            />
          </h1>
        </div>
        {/* Animated Paragraphs */}
        <div className='overflow-hidden h-[500px]'>
          <motion.div style={{ height: para_scroll }} className='bg-green-400' transition={{ duration: 0.8, ease: 'easeOut' }}>
            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              We don’t just build spaces—we build with purpose.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              Whether you're scaling up your operations or setting up your first box, optimising logistics or planning a long-term shift in supply chain strategy, our flexible offerings are built to match your ambition and augment your growth.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              Horizon’s portfolio reflects our experience in serving diverse sectors and their unique business needs: 40% manufacturing including auto components, engineering, packaging, specialty chemicals, network technologies; 35% logistics and 3PL, and 25% across retail, FMCG, e-commerce, and emerging sectors. From building a multi-level auto component plant in Maharashtra to fast-tracking a plug-and-play fulfillment center in NCR, or developing a factory for aerospace components in Telangana, we design with purpose—adapting layouts, specs, and timelines to your sector’s operational, safety, and compliance requirements.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[30px]">
              What’s more, we’ve evolved alongside our customers—just as our customers have evolved with us, growing their footprint by leveraging ours.
            </p>



            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              We don’t just build spaces—we build with purpose.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              Whether you're scaling up your operations or setting up your first box, optimising logistics or planning a long-term shift in supply chain strategy, our flexible offerings are built to match your ambition and augment your growth.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              Horizon’s portfolio reflects our experience in serving diverse sectors and their unique business needs: 40% manufacturing including auto components, engineering, packaging, specialty chemicals, network technologies; 35% logistics and 3PL, and 25% across retail, FMCG, e-commerce, and emerging sectors. From building a multi-level auto component plant in Maharashtra to fast-tracking a plug-and-play fulfillment center in NCR, or developing a factory for aerospace components in Telangana, we design with purpose—adapting layouts, specs, and timelines to your sector’s operational, safety, and compliance requirements.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[30px]">
              What’s more, we’ve evolved alongside our customers—just as our customers have evolved with us, growing their footprint by leveraging ours.
            </p>




            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              We don’t just build spaces—we build with purpose.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              Whether you're scaling up your operations or setting up your first box, optimising logistics or planning a long-term shift in supply chain strategy, our flexible offerings are built to match your ambition and augment your growth.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[26px] mb-[18px]">
              Horizon’s portfolio reflects our experience in serving diverse sectors and their unique business needs: 40% manufacturing including auto components, engineering, packaging, specialty chemicals, network technologies; 35% logistics and 3PL, and 25% across retail, FMCG, e-commerce, and emerging sectors. From building a multi-level auto component plant in Maharashtra to fast-tracking a plug-and-play fulfillment center in NCR, or developing a factory for aerospace components in Telangana, we design with purpose—adapting layouts, specs, and timelines to your sector’s operational, safety, and compliance requirements.
            </p>
            <p className="bw-r text-[#E0E0E0] leading-[30px]">
              What’s more, we’ve evolved alongside our customers—just as our customers have evolved with us, growing their footprint by leveraging ours.
            </p>
          </motion.div>
        </div>
      </div >

      {/* Right Image */}
      <div div className="flex-1 ml-auto" >
        <img src="/Cap_Overview/sector_img.png" alt="Sector" className='' />
      </div >
    </>
  );
}

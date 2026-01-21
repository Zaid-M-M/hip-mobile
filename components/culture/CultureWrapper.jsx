import React from "react";
import Culture_sec1 from "../culture/Culture_sec1/Culture_sec1";
import Culture_sec2 from "../culture/Culture_sec2/Culture_sec2";
import Culture_sec3 from "../culture/Culture_sec3/Culture_sec3";
import Culture_sec4 from "../culture/Culture_sec4/Culture_sec4";
import Culture_sec5 from "../culture/Culture_sec5/Culture_sec5";

import { ReactLenis } from "lenis/react";
import CTA from "./Culture_sec6/CTA";
import Main from "./Culture_sec7/Main";
import VidMain from "./Culture_sec8/VidMain";
import CForm from "./cultureform/CForm";

const CultureWrapper = async () => {
  let career_sec8_video = []; // :white_check_mark: declare outside so accessible later
  let career_sec7_iconbox = [];
  let career_sec3_infobox = [];
  let career_sec5_accordion = [];
  let career_sec3_infobox_copy = [];
  let career_sec2_sub_paragraph;
  let career_sec4_description;
  let career_sec6_heading;
  let career_sec1_paragraph;
  let career_sec1_image;
  let career_sec3_sub_paragraph;
  let career_spotlight_title;
  try {
    const res = await fetch(
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/career_page"
    );
    const data = await res.json();

    if (data && data.length > 0) {
      const { acf = {} } = data[0];
      career_spotlight_title = acf.career_spotlight_title || "";
      career_sec8_video = acf.career_sec8_video || []; // :white_check_mark: assign here
      career_sec7_iconbox = acf.career_sec7_iconbox || [];
      career_sec3_infobox = acf.career_sec3_infobox || [];
      career_sec5_accordion = acf.career_sec5_accordion || [];
      career_sec2_sub_paragraph = acf.career_sec2_sub_paragraph || "";
      career_sec6_heading = acf.career_sec6_heading || "";
      career_sec4_description = acf.career_sec4_description || "";
      career_sec1_paragraph = acf.career_sec1_paragraph || "";
      career_sec1_image = acf.career_sec1_image || "";
      career_sec3_sub_paragraph = acf.career_sec3_sub_paragraph || "";
      career_sec3_infobox_copy = acf.career_sec3_infobox_copy || [];
    }
  } catch (err) {
    console.error("Error fetching career data:", err);
  }
  console.log(career_sec5_accordion);
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <ReactLenis root>
        <Culture_sec1 career_spotlight_title={career_spotlight_title} />
        <Culture_sec2
          career_sec1_image={career_sec1_image}
          career_sec1_paragraph={career_sec1_paragraph}
        />
        <Culture_sec3 career_sec2_sub_paragraph={career_sec2_sub_paragraph} />
        <Culture_sec4
          career_sec3_sub_paragraph={career_sec3_sub_paragraph}
          career_sec3_infobox={career_sec3_infobox}
          career_sec3_infobox_copy={career_sec3_infobox_copy}
        />
        <Culture_sec5
          career_sec5_accordion={career_sec5_accordion}
          career_sec4_description={career_sec4_description}
        />
        <CTA career_sec6_heading={career_sec6_heading} />
        <Main career_sec7_iconbox={career_sec7_iconbox} />
        <VidMain career_sec8_video={career_sec8_video} />
        <CForm />
      </ReactLenis>
    </div>
  );
};

export default CultureWrapper;

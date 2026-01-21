import HCF from "../industry/imgtabs/HCF";
import MapGL from "./connectivity/MapGL";
import MapMain from "./connectivity/MapMain";
import ContMain from "./contbox/ContMain";
import FormSec from "./FormSec";
import PhVdslider from "./gallery/PhVdslider";
import HeaderMain from "./header/HeaderMain";
import PDSec2 from "./PDSec2";
import SPMain from "./stateparks/SPMain";

export default function PDMain({ park, allParks }) {
  // ── Top-level park fields ───────────────────────────────────────
  const { id, slug, title, content, link, date, modified, acf = {} } = park;

  // ── ACF fields (with fallbacks) ─────────────────────────────────
  const {
    photo = [],
    land_area,
    development_potential,
    land_usage,
    construction_status,
    park_hd_para,
    park_para1,
    connectivity = [],
    site_plan = [],
    video = [],
    zone_name,
    state_name,
    industrial_clusters_nearby = [],
    main_access = [],
    park_status,
    video_vimeo_link = [],
    meta_title,
    meta_description,
    h1_tag,
    park_name,
    map_button_text,
    map_button_url,
    coordinates_no,
    coordinates_url,
    faq_list = [],
    faq_list_2 = [],
    igbc_status,
    igbc_logo,
    read_more_para_park,
    svg_x,
    svg_y,
    pin_color,
    parks_schema,
    c_latitude,
    c_longitude,
    park_brochure,
    new_site_plan = [],
    site_plan_popup = [],
    leasing_details = [],
    exterior_block = [],
    interior_block = [],
    park_spotlight_new_image,
    overview_left_content,
  } = acf;

  // ── Convert coordinates_no → [lon, lat] ────────────────────────
  let fromcoord = null;
  if (coordinates_no && typeof coordinates_no === "string") {
    const parts = coordinates_no
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (parts.length === 2) {
      fromcoord = [parts[1], parts[0]]; // Mapbox expects [lon, lat]
    }
  }

  // ── Normalise media props to **always be arrays** ───────────────
  const photos = Array.isArray(photo) ? photo : [];
  const NewsitePlans = Array.isArray(new_site_plan) ? new_site_plan : [];
  const videos = Array.isArray(video_vimeo_link) ? video_vimeo_link : [];
  const popups = Array.isArray(site_plan_popup) ? site_plan_popup : [];

  // ── Show PhVdslider **only if at least one media array has items** ─
  const hasMedia =
    photos.length > 0 || videos.length > 0 || NewsitePlans.length > 0;

  return (
    <>
      {/* ── Header ── */}
      <HeaderMain
        title={title?.rendered}
        h1={h1_tag}
        spotlightImage={park_spotlight_new_image}
        metaTitle={meta_title}
        metaDescription={meta_description}
        igbcLogo={igbc_logo}
        igbcStatus={igbc_status}
        park_name={park_name}
        stats={[
          // { label: "LAND AREA", value: land_area },
          { label: "LEASABLE AREA", value: development_potential },
          // { label: "LAND USAGE", value: land_usage },
          { label: "GREEN RATING", value: igbc_status },
        ]}
      />

      {/* ── Description ── */}
      <PDSec2
        overview_left_content={overview_left_content}
        hdPara={park_hd_para}
        para1={park_para1}
        para2={content?.rendered}
      />

      {/* ── Map ── */}
      <MapMain
        connectivity={connectivity}
        industrial_clusters_nearby={industrial_clusters_nearby}
        main_access={main_access}
        fromcoord={fromcoord}
        map_button_url={map_button_url}
        park_name={park_name}
      />

      {/* ── Leasing ── */}
      <ContMain
        leasing_details={leasing_details}
        park_brochure={park_brochure}
      />

      {/* ── Industry tabs ── */}
      {/* <HCF exterior_block={exterior_block} interior_block={interior_block} /> */}

      {/* ── Gallery Slider – **only when media exists** ── */}
      {hasMedia && (
        <PhVdslider
          site_plan_popup={popups}
          pht={photos}
          nsplan={NewsitePlans}
          vid={videos}
        />
      )}

      {/* ── State Parks ── */}
      <SPMain
        state_name={state_name}
        development_potential={development_potential}
        construction_status={construction_status}
        allParks={allParks}
        slug={slug}
        park_spotlight_new_image={park_spotlight_new_image}
        land_usage={land_usage}
        igbc_status={igbc_status}
      />

      {/* ── Contact Form ── */}
      <FormSec />
    </>
  );
}

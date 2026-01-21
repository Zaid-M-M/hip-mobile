import AMMain from "./amenities/AMMain";
import MapMain from "./connectivity/MapMain";
import ContMain from "./contbox/ContMain";
import CardSec from "./designedcards/CardSec";
import FormSec from "./FormSec";
import Map from "./gmap/Map";
import HeaderMain from "./header/HeaderMain";
import MPMain from "./masterplan/MPMain";
import MMain from "./matter/MMain";
import PDSec2 from "./PDSec2";
import Three from "./threed/Three";

export default function PDMain({ park, allParks }) {
  // --- Safely destructure park (prevent acf: null crash) ---
  const { id, slug, title, content, link, date, modified, acf: rawAcf } = park;

  // Normalize acf: convert null/undefined → {}
  const acf = rawAcf ?? {};

  // --- Safely destructure ACF fields with defaults ---
  const {
    incity_spotlight_image,
    incity_land_area,
    incity_development_potential,
    incity_land_usage,
    incity_hd_para,
    incity_sub_title,
    incity_para1,
    meta_title,
    meta_description,
    h1_tag,
    incity_name,
    incity_coordinates_url,
    incity_coordinates_no,
    incity_igbc_status,
    igbc_logo,
    c_latitude,
    c_longitude,
    incity_info_list_box = [],
    incity_read_more_para,
    matters_hd1,
    matters_hd2,
    matters_description,
    matter_icon_box = [],
    incity_park_availability,
    incity_concentric_map_image,
    incity_leasing_details_rep,
    incity_city_name,
    incity_masterplan_h1,
    incity_masterplan_h2,
    incity_masterplan_image,
    incity_3d_url,
    incity_3d_h2,
    incity_3d_h1,
    incity_connectivity = [],
    incity_industrial_clusters_nearby = [],
    incity_main_access = [],
    incity_infrastructure = [],
    incity_amenities = [],
    incity_hd_title,
    incity_park_address,
  } = acf;

  // --- Coordinate parsing logic ---
  function parseCoordinates(coordStr) {
    if (!coordStr) return null;

    // Try decimal (comma-separated): "12.34, 56.78"
    const decimalPartsRaw = coordStr
      .split(",")
      .map((n) => n.trim())
      .filter(Boolean);
    if (decimalPartsRaw.length === 2) {
      const decimalParts = decimalPartsRaw.map(parseFloat);
      if (!Number.isNaN(decimalParts[0]) && !Number.isNaN(decimalParts[1])) {
        return [decimalParts[1], decimalParts[0]]; // [lon, lat]
      }
    }

    // Fallback: DMS format like "12°34'56.78\"N 77°56'34.12\"E"
    const dmsRegex = /(\d+)°(\d+)'([\d.]+)"([NS]) (\d+)°(\d+)'([\d.]+)"([EW])/i;
    const match = coordStr.match(dmsRegex);
    if (match) {
      const [, latDeg, latMin, latSec, latDir, lonDeg, lonMin, lonSec, lonDir] =
        match;
      let lat =
        parseFloat(latDeg) +
        parseFloat(latMin) / 60 +
        parseFloat(latSec) / 3600;
      let lon =
        parseFloat(lonDeg) +
        parseFloat(lonMin) / 60 +
        parseFloat(lonSec) / 3600;
      if (latDir.toUpperCase() === "S") lat = -lat;
      if (lonDir.toUpperCase() === "W") lon = -lon;
      return [lon, lat];
    }

    console.warn("Invalid coordinate format:", coordStr);
    return null;
  }

  // Parse coordinates
  let fromcoord = parseCoordinates(incity_coordinates_no);

  // Fallback to c_latitude/c_longitude if available
  if (!fromcoord && c_longitude && c_latitude) {
    const lon = parseFloat(c_longitude);
    const lat = parseFloat(c_latitude);
    if (!Number.isNaN(lon) && !Number.isNaN(lat)) {
      fromcoord = [lon, lat];
    }
  }

  // Optional: Debug log (remove in production)
  // console.log("ACF Data:", acf);
  // if (incity_sub_title) {
  //   console.log(incity_sub_title);
  // }
  console.log("incity_name", incity_name);
  return (
    <>
      <HeaderMain
        title={title?.rendered}
        h1={h1_tag}
        spotlightImage={incity_spotlight_image}
        metaTitle={meta_title}
        metaDescription={meta_description}
        igbcLogo={igbc_logo}
        breadname={incity_city_name}
        igbcStatus={incity_igbc_status}
        park_name={incity_name}
        subtitle={incity_sub_title}
        stats={[
          // {
          //   label: "TOTAL AREA",
          //   value: incity_development_potential,
          // },
          { label: "LEASABLE AREA", value: incity_land_area },
          { label: "AVAILABILITY", value: incity_park_availability },
          // { label: "USAGE", value: incity_land_usage },
        ]}
      />

      <PDSec2
        incity_info_list_box={incity_info_list_box}
        hdPara={incity_hd_para}
        para1={incity_para1}
        para2={incity_read_more_para}
        hdTitle={incity_hd_title}
      />

      <MMain
        matters_hd1={matters_hd1}
        matters_hd2={matters_hd2}
        matters_description={matters_description}
        matter_icon_box={matter_icon_box}
      />

      {/* Safe props: guaranteed to be arrays */}
      <MapMain
        incity_park_address={incity_park_address}
        connectivity={incity_connectivity}
        industrial_clusters_nearby={incity_industrial_clusters_nearby}
        main_access={incity_main_access}
        fromcoord={fromcoord}
        map_button_url={incity_coordinates_url}
        park_name={incity_name}
      />

      <Map incity_concentric_map_image={incity_concentric_map_image} />

      {/* <MPMain
        incity_masterplan_h1={incity_masterplan_h1}
        incity_masterplan_h2={incity_masterplan_h2}
        incity_masterplan_image={incity_masterplan_image}
      /> */}

      {incity_masterplan_h1 ||
      incity_masterplan_h2 ||
      incity_masterplan_image ? (
        <MPMain
          incity_masterplan_h1={incity_masterplan_h1}
          incity_masterplan_h2={incity_masterplan_h2}
          incity_masterplan_image={incity_masterplan_image}
        />
      ) : null}

      {/* {incity_3d_url && (
        <Three
          incity_3d_h1={incity_3d_h1}
          incity_3d_h2={incity_3d_h2}
          incity_3d_url={incity_3d_url}
        />
      )} */}
      <ContMain leasing_details={incity_leasing_details_rep} />
      <CardSec incity_infrastructure={incity_infrastructure} />
      {/* <AMMain incity_amenities={incity_amenities} /> */}
      {Array.isArray(incity_amenities) && incity_amenities.length > 0 && (
        <AMMain incity_amenities={incity_amenities} />
      )}
      <FormSec />
    </>
  );
}

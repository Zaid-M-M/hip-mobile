"use client";
import React, { useState } from "react";
import SPHeader from "./SPHeader";
import DeskMDS from "./DeskMDS";
import MobS from "./MobS";
import DeskMDSF from "./DeskMDSF";
import TabMDSF from "./TabMDSF";

const categories = [
  "Delhi",
  "Ahemdabad",
  "Pune",
  "Goa",
  "Hyderabad",
  "Bengaluru",
  "Chennai",
];

const SPSlider = ({
  delhiParks,
  ahmedabadParks,
  puneParks,
  goaParks,
  hyderabadParks,
  bengaluruParks,
  chennaiParks,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full relative overflow-hidden pt-[45px] xl:py-[100px]">
      <SPHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        categories={categories}
      />

      {/* Sliders */}
      <DeskMDSF
        activeTab={activeTab}
        delhiParks={delhiParks}
        ahmedabadParks={ahmedabadParks}
        puneParks={puneParks}
        goaParks={goaParks}
        hyderabadParks={hyderabadParks}
        bengaluruParks={bengaluruParks}
        chennaiParks={chennaiParks}
      />
      <TabMDSF
        activeTab={activeTab}
        delhiParks={delhiParks}
        ahmedabadParks={ahmedabadParks}
        puneParks={puneParks}
        goaParks={goaParks}
        hyderabadParks={hyderabadParks}
        bengaluruParks={bengaluruParks}
        chennaiParks={chennaiParks}
      />
      <MobS
        activeTab={activeTab}
        delhiParks={delhiParks}
        ahmedabadParks={ahmedabadParks}
        puneParks={puneParks}
        goaParks={goaParks}
        hyderabadParks={hyderabadParks}
        bengaluruParks={bengaluruParks}
        chennaiParks={chennaiParks}
      />
    </div>
  );
};

export default SPSlider;

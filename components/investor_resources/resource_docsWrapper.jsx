import React from "react";
import Resources_docs_Sec1 from "./resources_docs_Sec1/resources_docs_Sec1";
import Present_sec from "./present/present_sec";
import Transcripts_sec from "./transcripts/transcripts_sec";
import Press_rels_sec from "./press_release/press_rels_sec";
const Offer_docsWrapper = () => {
  return (
    <div className="w-full h-full">
      <Resources_docs_Sec1 />
      <Present_sec />
      <Transcripts_sec />
      <Press_rels_sec />
    </div>
  );
};

export default Offer_docsWrapper;

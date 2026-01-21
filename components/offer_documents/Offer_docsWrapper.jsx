import React from "react";
import Offer_docs_Sec1 from "./offer_docs_Sec1/offer_docs_Sec1";
import Drhp_sec from "./drhp/drhp_sec";
import Industry_report_sec from "./industry_report/industry_report_sec";
import Group_company_sec from "./group_company/group_company_sec";
import Outstanding_dues_sec from "./outstanding_dues/outstanding_dues_sec";
const Offer_docsWrapper = () => {
  return (
    <div className="w-full h-full">
      <Offer_docs_Sec1 />
      <Drhp_sec />
      <Industry_report_sec />
      {/* <Group_company_sec />
      <Outstanding_dues_sec /> */}
    </div>
  );
};

export default Offer_docsWrapper;

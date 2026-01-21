import React from "react";
import Finan_info_Sec1 from "./finan_info_Sec1/finan_info_Sec1";
import Financial_results_sec from "./financial_results/financial_results_sec";
import Annual_reports_sec from "./annual_reports/annual_reports_sec";
import General_meeting_sec from "./general_meeting/general_meeting_sec";
import Agm_egm_sec from "./agm_egm/agm_egm_sec";
import Board_meeting_sec from "./board_meeting/board_meeting_sec";
import Financial_results_secF from "./financial_results/Financial_results_secF";
const financial_infoWrapper = () => {
  return (
    <div className="w-full h-full">
      <Finan_info_Sec1 />
      <Financial_results_secF />
      {/* <Financial_results_sec /> */}
      {/* <Annual_reports_sec />
      <General_meeting_sec /> */}
      {/* 
      
      <Agm_egm_sec />
      <Board_meeting_sec /> */}
    </div>
  );
};

export default financial_infoWrapper;

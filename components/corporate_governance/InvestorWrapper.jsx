import React from "react";
import Ivst_Sec1 from "./Ivst_Sec1/Ivst_Sec1";
import C_info_sec from "./company_info/C_info_sec";
import Board_director_sec from "./board_director/Board_director_sec";
import Commit_board_sec from "./Committees_board/Commit_board_sec";
import Policies_codes_sec from "./policies_codes/Policies_codes_sec";

const InvestorWrapper = () => {
  return (
    <div className="w-full h-full">
      <Ivst_Sec1 />
      <C_info_sec />

      <Board_director_sec />
      <Commit_board_sec />
      <Policies_codes_sec />
    </div>
  );
};

export default InvestorWrapper;

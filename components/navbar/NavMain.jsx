import React from "react";
import TopBarF from "./topbar/TopBarF";
import OverView from "./megamenu/overview/OverView";
import HoverDrop from "./othertab/HoverDrop";
import MobileMenu from "./mobnav/MobileMenu";

const NavMain = () => {
  return (
    <div>
      <TopBarF />
      <MobileMenu />
      {/* <div className="mt-40">
        <OverView />
      </div> */}
    </div>
  );
};

export default NavMain;

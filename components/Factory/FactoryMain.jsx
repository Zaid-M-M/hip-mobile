import React from "react";
import Header from "./Header";
import Cardsec from "./Cardsec";
import Formsec from "./Formsec";
import MainSec from "./vidsec/MainSec";
import MainSecMobile from "./vidsec/MainSecMobile";

const FactoryMain = () => {
  return (
    <div>
      <Header />
      <Cardsec />
      <MainSec />
      <MainSecMobile />
      <Formsec />
    </div>
  );
};

export default FactoryMain;

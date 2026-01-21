import React from "react";
import SPSlider from "./SPSlider";

const SPMain = ({ allParks = [] }) => {
  // Filter parks by state categories
  const delhiParks = allParks.filter((park) => park.categories?.includes(2));
  const ahmedabadParks = allParks.filter((park) =>
    park.categories?.includes(3)
  );
  const puneParks = allParks.filter((park) => park.categories?.includes(4));
  const goaParks = allParks.filter((park) => park.categories?.includes(5));
  const hyderabadParks = allParks.filter((park) =>
    park.categories?.includes(6)
  );
  const bengaluruParks = allParks.filter((park) =>
    park.categories?.includes(7)
  );
  const chennaiParks = allParks.filter((park) => park.categories?.includes(59));

  return (
    <div>
      <SPSlider
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

export default SPMain;

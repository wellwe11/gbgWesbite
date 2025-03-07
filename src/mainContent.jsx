import "./mainContent.css";
import UbisoftLogo from "./mainContentImages/Ubisoft-Logo.png";

import SearchContent from "./searchContent/searchContent";
import MainButtons from "./mainButtons/mainButtons";
import Events from "./events/events";
import { useState } from "react";

export default function MainSection() {
  const [activeButton, setActiveButton] = useState();

  return (
    <div className="mainSectionContainer">
      <div className="mainSectionWrapper">
        <div className="logoWrapper">
          <div className="logoContainer">
            <img src={UbisoftLogo} alt="Logo image" />
          </div>
        </div>
        <SearchContent />
        <MainButtons
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <Events activeTab={activeButton} />
      </div>
    </div>
  );
}

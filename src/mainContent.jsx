import "./mainContent.css";

import SearchContent from "./searchContent/searchContent";
import MainButtons from "./mainButtons/mainButtons";

export default function MainSection() {
  return (
    <div className="mainSectionContainer">
      <div className="mainSectionWrapper">
        <div className="logoWrapper">
          <div className="logoContainer">
            <div></div>
          </div>
        </div>
        <SearchContent />
        <MainButtons />
      </div>
    </div>
  );
}

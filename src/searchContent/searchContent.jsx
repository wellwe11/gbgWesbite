import { useEffect, useRef, useState } from "react";
import { SearchSVG } from "./svg";
import "./styles/searchContent.css";

export default function SearchContent() {
  const [width, setWidth] = useState(0);
  const [widthProcent, setWidthProcent] = useState(0);
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState("");

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setWidthProcent(Math.round(width / 5.27));
  }, [width]);

  useEffect(() => {
    if (searchBarInput.length > 1) {
      setIsHovering(true);
    }
  });

  const obtainSearchInput = (e) => {
    setSearchBarInput(e.target.value);
  };

  return (
    <div className="searchBarWrapper">
      <div className="searchBarContentContainer">
        <div className="searchBarInnerContainer">
          <div
            className={`searchBarIconWrapper ${
              isFocused || isHovering ? "displaySearchIcon" : ""
            }`}
            style={{
              left: widthProcent > 88 ? `430px` : "500px",
              visibility: widthProcent > 80 ? "visible" : "hidden",
            }}
          >
            <SearchSVG
              className={"searchIcon"}
              fill={isFocused || isHovering ? "black" : ""}
            />
          </div>
          <div
            className={`searchBarSearchContentWrapper ${
              isFocused || isHovering ? "searchBarContentWrapperFocused" : ""
            }`}
            ref={divRef}
          >
            <input
              className="searchBarInput"
              onChange={obtainSearchInput}
              onFocus={() => setIsFocused(true)}
              onMouseEnter={() => setIsHovering(true)}
              onBlur={() => setIsFocused(false)}
              onMouseLeave={() => setIsHovering(false)}
            />
            <div className="searchBarCancelWrapper">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

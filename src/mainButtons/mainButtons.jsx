import "./styles/mainButtons.css";
import { useEffect, useRef } from "react";

const StyledBtn = ({ name, onClick, style, activeButtonName }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width, height } = e.target.getBoundingClientRect();

      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;

      spanRef.current.animate(
        { left, top },
        { duration: 250, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <button
      className={`mainButtonStyle button${activeButtonName}`}
      ref={btnRef}
      onClick={onClick}
      style={style}
    >
      <div className="insideButtonWrapper">{name}</div>
      <span className="mouseDot" ref={spanRef} />
    </button>
  );
};

export default function MainButtons({ setActiveButton, activeButton }) {
  const buttonNames = [
    "Main event",
    "Future events",
    "Previous events",
    "Personal list",
  ];

  useEffect(() => {
    setActiveButton(buttonNames[0]);
  }, []);

  return (
    <>
      <div className="mainButtonsContainer">
        <div className="mainButtonsWrapper">
          {buttonNames.map((btn, index) => (
            <StyledBtn
              onClick={() => setActiveButton(btn)}
              name={btn}
              key={index}
              activeButtonName={activeButton === btn ? "Active" : "NotActive"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

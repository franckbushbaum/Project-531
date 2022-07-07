import React, { useState } from "react";
import { useSelector } from "react-redux";

const ImageSlider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  //   const [heading, setHeading] = useState("Functional Component");

  console.log("in ImageSlider, what are props?", slides)

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  }

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  }

  return (
    <div className="test-slide">
      <div style={leftArrowStyles}> H </div>
      <div style={rightArrowStyles}> H </div>
      <h2>Monsterlessons slider</h2>
    </div>
  );
}

export default ImageSlider;
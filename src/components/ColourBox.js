import React, { useContext } from "react";
import ColourContext from "../contexts/colour";

const ColourBox = () => {
  const { state } = useContext(ColourContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.colour
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolour
        }}
      />
    </>
  );
};

export default ColourBox;

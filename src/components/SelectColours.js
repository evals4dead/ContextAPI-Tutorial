import React, { Component } from "react";
import ColourContext from "../contexts/colour";

const colours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

class SelectColours extends Component {
  static contextType = ColourContext;

  handleSetColour = colour => {
    this.context.actions.setColour(colour);
  };

  handleSetSubcolour = subcolour => {
    this.context.actions.setSubcolour(subcolour);
  };

  render() {
    return (
      <div>
        <h2>Choose your colour.</h2>
        <div style={{ display: "flex" }}>
          {colours.map(colour => (
            <div
              key={colour}
              style={{ background: colour, width: "24px", height: "24px" }}
              onClick={() => this.handleSetColour(colour)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubcolour(colour);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColours;

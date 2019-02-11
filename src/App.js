import React, { Component } from "react";
import ColourBox from "./components/ColourBox";
import { ColourProvider } from "./contexts/colour";
import SelectColours from "./components/SelectColours";

class App extends Component {
  render() {
    return (
      <ColourProvider value={{ color: "red" }}>
        <div>
          <SelectColours />
          <ColourBox />
        </div>
      </ColourProvider>
    );
  }
}

export default App;

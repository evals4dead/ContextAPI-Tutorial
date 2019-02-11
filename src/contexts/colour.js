import React, { Component, createContext } from "react";

const ColourContext = createContext({ color: "black" });

class ColourProvider extends Component {
  state = {
    colour: "black",
    subcolour: "red"
  };

  actions = {
    setColour: colour => {
      this.setState({ colour });
    },

    setSubcolour: subcolour => {
      this.setState({ subcolour });
    }
  };

  render() {
    const value = {
      state: this.state,
      actions: this.actions
    };

    return (
      <ColourContext.Provider value={value}>
        {this.props.children}
      </ColourContext.Provider>
    );
  }
}

const { Consumer: ColourConsumer } = ColourContext;

export { ColourProvider, ColourConsumer };

export default ColourContext;

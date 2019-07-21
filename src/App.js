import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./CounterCountainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;

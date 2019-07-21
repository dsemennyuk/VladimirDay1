import React, { Component } from "react";
import Counter from "./Counter";
import "./App.css";

const DataMock = [
  { title: "Banana" },
  { title: "Coconut" },
  { title: "Apple" }
];

export default class CounterCountainer extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  renderSelect = () => {
    DataMock.map(x => {
      return <option value={0}>sdasd</option>;
    });
  };

  render() {
    return (
      <div>
        <Counter counter={this.state.counter} />
        <Button onClick={this.decrementCounter} text={"decrement counter"} />
        <Button onClick={this.incrementCounter} text={"increment counter"} />
        <select>{this.renderSelect()}</select>
      </div>
    );
  }
}

const Button = props => (
  <button className={"btn"} onClick={props.onClick}>
    {props.text}
  </button>
);

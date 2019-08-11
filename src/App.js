import React, { Component } from "react";
import tacocat from "./tacocat.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tacocat} className="cat-image" alt="logo" />
          <p>IS IT A PALINDROME?</p>
          <form className="pali-check">
            <input
              className="text-input"
              type="text"
              placeholder="Enter Text Here"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <input
              className="submit-button"
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;

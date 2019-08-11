import React, { Component } from "react";
import tacocat from "./tacocat.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", alert: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let str = this.state.value.toLowerCase();
    console.log(str)
    event.preventDefault();
    let checkPalindrome;
    !str
      ? this.setState({ alert: "Please Enter Text" })
      : (checkPalindrome =
          [...str].reduce((previous, next) => next + previous) === str
            ? this.setState({ alert: `${str} is a Palindrome :)` })
            : this.setState({ alert: `${str} is not a Palindrome :(` }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tacocat} className="cat-image" alt="logo" />
          <h1 className="alert">{this.state.alert}</h1>
          <p>IS IT A PALINDROME?</p>
          <form className="pali-check" onSubmit={this.handleSubmit}>
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
              // onClick={this.handleSubmit}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;

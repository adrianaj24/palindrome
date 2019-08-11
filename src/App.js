import React, { Component } from "react";
import tacocat from "./tacocat.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", alert: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputField = this.clearInputField.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let str = this.state.value;
    let newStr = this.state.value.toLowerCase();
    event.preventDefault();
    let checkPalindrome;
    !str
      ? this.setState({ alert: "Please Enter Text" })
      : (checkPalindrome =
          [...newStr].reduce((previous, next) => next + previous) === str
            ? this.setState({ alert: `${str} is a Palindrome :)` })
            : this.setState({ alert: `${str} is not a Palindrome :(` }));
  }

  clearInputField() {
    document.getElementById("text-input").reset();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tacocat} className="cat-image" alt="logo" />
          <h1 className="alert">{this.state.alert}</h1>
          <p>IS IT A PALINDROME?</p>
          <form
            className="pali-check"
            id="text-input"
            onSubmit={this.handleSubmit}
          >
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
              onClick={this.clearInputField}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;

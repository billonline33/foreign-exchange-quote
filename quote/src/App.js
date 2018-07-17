import React, { Component } from "react";
import "./App.css";
import Input from "./components/Layout/InputContainer/Input";
import Quote from "./components/Layout/QuoteContainer/Quote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Quote />
      </div>
    );
  }
}

export default App;

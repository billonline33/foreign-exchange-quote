import React, { Component } from "react";
import "./App.css";
import Input from "./components/Layout/InputContainer/Input";
import Quote from "./components/Layout/QuoteContainer/Quote";
import {
  DEFAULT_FROM_CURRENCY,
  DEFAULT_TO_CURRENCY,
  DEFAULT_AMOUNT
} from "./utils/constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCurrency: DEFAULT_FROM_CURRENCY,
      toCurrency: DEFAULT_TO_CURRENCY,
      amount: DEFAULT_AMOUNT
    };
  }

  myCallback = (fromCurrency, toCurrency, amount) => {
    console.log("fromCurrency in App.js", fromCurrency);
    this.setState({
      fromCurrency,
      toCurrency,
      amount
    });
  };
  render() {
    return (
      <div className="capture container row">
        <Input callbackFromParent={this.myCallback} />
        <Quote
          fromCurrency={this.state.fromCurrency}
          toCurrency={this.state.toCurrency}
          amount={this.state.amount}
        />
      </div>
    );
  }
}

export default App;

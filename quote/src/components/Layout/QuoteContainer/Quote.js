import React, { Component } from "react";
import { connect } from "react-redux";
import { loadQuoteInfo } from "../../../reducers/inputReducer";

class Quote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rate col-12 col-md-6">
        <h1>Quick Quote</h1>
        <div className="rate_content">
          <div className="rate_container">
            <p>OFX Customer Rate:</p>
            <h3>{this.props.customerRate}</h3>
            <p>From</p>
            <h4>
              {this.props.fromCurrency} <span>{this.props.fromAmount}</span>
            </h4>
            <p>To</p>
            <h4>
              {this.props.toCurrency} <span>{this.props.customerAmount}</span>
            </h4>
            <div className="text-center">
              <button type="submit" className="btn ">
                Start New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerRate: state.inputReducer.newQuote.CustomerRate,
  customerAmount: state.inputReducer.newQuote.CustomerAmount,
  fromCurrency: state.inputReducer.FromCurrency,
  toCurrency: state.inputReducer.ToCurrency,
  fromAmount: state.inputReducer.FromAmount
});

Quote = connect(
  mapStateToProps,
  null
)(Quote);

export default Quote;

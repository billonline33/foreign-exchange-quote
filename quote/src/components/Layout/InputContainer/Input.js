import React, { Component } from "react";
import { connect } from "react-redux";
import InputReducer from "../../../reducers/inputReducer";
import { bindActionCreators } from "redux";
import {
  DEFAULT_COUNTRY_CODE,
  DEFAULT_FROM_CURRENCY,
  DEFAULT_TO_CURRENCY
} from "../../../utils/constants";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: DEFAULT_COUNTRY_CODE,
      phoneNumber: "",
      fromCurrency: DEFAULT_FROM_CURRENCY,
      toCurrency: DEFAULT_TO_CURRENCY,
      amount: 0
    };

    this.handleGetQuoteClick = this.handleGetQuoteClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit() {
    console.log("submit fired!");
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log("name=", this.state.name);
  }

  handleGetQuoteClick(e) {
    e.preventDefault();

    console.log("state=", this.state);
  }

  render() {
    return (
      <div className="rateForm col-12 col-md-6">
        <h1>Quick Quote</h1>

        <form onSubmit={this.handleSubmot} className="rateForm_form">
          <div className="rateForm_form_top">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="">
                  First Name <span>*</span>
                </label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="">
                  Last Name <span>*</span>
                </label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Email"
              />
            </div>
            <div className="form-row phone-number">
              <div className="form-group col-4 col-sm-3 col-md-3 col-lg-2">
                <select
                  className="form-control"
                  name="countryCode"
                  onChange={this.handleInputChange}
                >
                  <option value="+61" selected>
                    +61
                  </option>
                  <option value="+61">+61</option>
                  <option value="+91">+91</option>
                  <option value="+86">+86</option>
                </select>
              </div>
              <div className="form-group col-8 col-sm-9 col-md-9 col-lg-10">
                <input
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  value={this.state.phoneNumber}
                  onChange={this.handleInputChange}
                  placeholder="Enter your phone"
                />
              </div>
            </div>
          </div>

          <div className="rateForm_form__bottom">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="">
                  From Currency <span>*</span>
                </label>
                <select
                  className="form-control"
                  name="fromCurrency"
                  onChange={this.handleInputChange}
                >
                  <option value="USD" selected>
                    United States Dollar (USD)
                  </option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="GBP">British Pound (GBP)</option>
                  <option value="AUD" selected>
                    Australian Dollar (AUD)
                  </option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="">
                  To Currency <span>*</span>
                </label>
                <select
                  className="form-control"
                  name="toCurrency"
                  onChange={this.handleInputChange}
                >
                  <option value="USD" selected>
                    United States Dollar (USD)
                  </option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="GBP">British Pound (GBP)</option>
                  <option value="AUD">Australian Dollar (AUD)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="">
                  Amount <span>*</span>
                </label>
                <input
                  name="amount"
                  type="text"
                  className="form-control"
                  value={this.state.amount}
                  onChange={this.handleInputChange}
                  placeholder="Amount"
                />
              </div>
            </div>
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn"
                onClick={this.handleGetQuoteClick}
              >
                Get Quote
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.inputReducer.firstName
});

export default Input;

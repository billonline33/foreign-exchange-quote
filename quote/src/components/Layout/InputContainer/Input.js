import React, { Component } from "react";

class Input extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="rateForm col-12 col-md-6">
        <h1>Quick Quote</h1>

        <form action="" className="rateForm_form">
          <div className="rateForm_form_top">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="">
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="">Email</label>
              <input
                type="email"
                class="form-control"
                id=""
                placeholder="Email"
              />
            </div>
            <div class="form-row phone-number">
              <div class="form-group col-4 col-sm-3 col-md-3 col-lg-2">
                <select className="form-control" id="">
                  <option value="+61" selected>
                    +61
                  </option>
                  <option value="+61">+61</option>
                  <option value="+61">+61</option>
                  <option value="+61">+61</option>
                </select>
              </div>
              <div className="form-group col-8 col-sm-9 col-md-9 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
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
                <select className="form-control" id="">
                  <option value="aud" selected>
                    Australian Dollar (AUD)
                  </option>
                  <option value="aud">Australian Dollar (AUD)</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="">
                  To Currency <span>*</span>
                </label>
                <select className="form-control" id="">
                  <option value="usd" selected>
                    United States Dollar (USD)
                  </option>
                  <option value="usd">United States Dollar (USD)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="">
                  Amount <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  value="25000"
                  placeholder="25,000.00"
                />
              </div>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn">
                Get Quote
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;

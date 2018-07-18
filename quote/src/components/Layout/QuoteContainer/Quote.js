import React, { Component } from "react";

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
            <h3>0.7618</h3>
            <p>From</p>
            <h4>
              AUD <span>25,000.00</span>
            </h4>
            <p>To</p>
            <h4>
              USD <span>19,045.00</span>
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

export default Quote;

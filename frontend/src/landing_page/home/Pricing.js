import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-8 mb-5">
          <div className="row">
            <div className="col-4 d-flex">
              <img
                src="media\images\pricing-eq.svg"
                style={{ width: "45%" }}
              ></img>
              <p style={{ fontSize: "12px" }} className="mt-5">
                Free account
                <br />
                opening
              </p>
            </div>
            <div className="col-4 d-flex">
              <img
                src="media\images\pricing-eq.svg"
                style={{ width: "45%" }}
              ></img>
              <p style={{ fontSize: "12px" }} className="mt-5">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-4 d-flex">
              <img
                src="media\images\other-trades.svg"
                style={{ width: "45%" }}
              ></img>
              <p style={{ fontSize: "12px" }} className="mt-5">
                Intraday and
                <br /> F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

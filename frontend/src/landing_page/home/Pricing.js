import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing" style={{ textDecoration: "none" }} className="fw-medium">
            See pricing{" "}
            <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="col-12 col-lg-8">
          <div className="row g-3">
            <div className="col-12 col-sm-4 d-flex align-items-center">
              <img
                src="media/images/pricing0.svg"
                alt="Free account opening"
                style={{ width: "70px", height: "auto" }}
                className="me-2"
              />
              <p style={{ fontSize: "13px" }} className="m-0 text-muted">
                Free account
                <br />
                opening
              </p>
            </div>
            <div className="col-12 col-sm-4 d-flex align-items-center">
              <img
                src="media/images/pricing-eq.svg"
                alt="Free equity delivery"
                style={{ width: "70px", height: "auto" }}
                className="me-2"
              />
              <p style={{ fontSize: "13px" }} className="m-0 text-muted">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-4 d-flex align-items-center">
              <img
                src="media/images/other-trades.svg"
                alt="Intraday and F&O"
                style={{ width: "70px", height: "auto" }}
                className="me-2"
              />
              <p style={{ fontSize: "13px" }} className="m-0 text-muted">
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

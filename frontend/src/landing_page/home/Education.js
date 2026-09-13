import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Market Education"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>

        <div className="col-12 col-md-6">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#varsity" style={{ textDecoration: "none" }} className="fw-medium">
            Varsity{" "}
            <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
          </a>
          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#tqa" style={{ textDecoration: "none" }} className="fw-medium">
            TradingQ&A{" "}
            <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

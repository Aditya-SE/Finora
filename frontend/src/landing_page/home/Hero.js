import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-5 px-3 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <img
            src="media/images/homeHero.png"
            alt="Finora Investment Platform"
            className="img-fluid mb-4"
          />
          <h1 className="mt-3">Invest in everything</h1>
          <p className="fs-5 text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <Link
            to="/signup"
            className="p-2 btn btn-primary fs-5 mb-5 px-5"
            style={{ minWidth: "220px", display: "inline-block" }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1>Finora Products</h1>
        <h3 className="text-muted mt-3 fw-normal fs-5">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="#offerings" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

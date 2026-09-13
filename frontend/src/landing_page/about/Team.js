import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-3 text-center">People</h1>
      </div>
      <div
        className="row py-4 px-2 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid mb-3"
            style={{ borderRadius: "100%", width: "50%", maxWidth: "260px" }}
          />
          <h4 className="mt-2">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-12 col-md-6 p-4">
          <p>
            Nithin bootstrapped and founded Finora in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Finora has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen</p>
          <p>
            Connect on{" "}
            <a href="#home" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#tqa" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#twitter" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

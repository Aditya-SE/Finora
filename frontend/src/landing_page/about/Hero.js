import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row py-5 my-3 text-center">
        <h1 className="fs-2">
          We pioneered the modern discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div
        className="row py-4 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-12 col-md-6 p-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Finora, combining financial empowerment and aurora to illuminate new
            horizons in investing.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-md-6 p-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#rainmatter" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our&nbsp;
            <a href="#blog" style={{ textDecoration: "none" }}>
              blog
            </a>
            &nbsp; or see what the media is&nbsp;
            <a href="#media" style={{ textDecoration: "none" }}>
              saying about us
            </a>
            &nbsp; or learn more about our business and product&nbsp;
            <a href="#philosophy" style={{ textDecoration: "none" }}>
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

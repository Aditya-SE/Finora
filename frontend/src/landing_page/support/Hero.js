import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className="row " id="supportInfo">
        <div className="col-6 p-5">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" />
          <br />
          <a href="">Track account opening</a>&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2025</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

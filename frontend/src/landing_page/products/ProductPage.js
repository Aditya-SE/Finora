import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#demo"
        learnMore="#kite"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Finora account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#console"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#demo"
        learnMore="#coin"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#kiteconnect"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#demo"
        learnMore="#varsity"
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-5 mt-5 text-muted">
        {" "}
        Want to know more about our technology stack? Check out the{" "}
        <a href="#tech" style={{ textDecoration: "none" }}>
          Finora.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}

// ---- LeftSection ----
function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" style={{ maxWidth: "90%" }} />
        </div>
        <div className="col-12 col-md-6 p-4 p-md-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <a href={tryDemo || "#demo"} style={{ textDecoration: "none" }}>
              Try Demo <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
            </a>
            <a href={learnMore || "#learn"} style={{ textDecoration: "none" }}>
              Learn More <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
            </a>
          </div>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {googlePlay !== undefined && (
              <a href={googlePlay || "#"}>
                <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{ height: "40px" }} />
              </a>
            )}
            {appStore !== undefined && (
              <a href={appStore || "#"}>
                <img src="media/images/appstoreBadge.svg" alt="App Store" style={{ height: "40px" }} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- RightSection ----
function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" style={{ maxWidth: "90%" }} />
        </div>
        <div className="col-12 col-md-6 p-4 p-md-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <a href={learnMore || "#learn"} style={{ textDecoration: "none" }}>
            Learn More <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

// ---- Universe ----
function Universe() {
  const partners = [
    { src: "media/images/zerodhaFundhouse.png", alt: "Finora Fund House", desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs." },
    { src: "media/images/sensibullLogo.svg", alt: "Sensibull", desc: "Options strategy platform built to make F&O investing simple, fun and profitable." },
    { src: "media/images/tijori.svg", alt: "Tijori", desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs." },
    { src: "media/images/streakLogo.png", alt: "Streak", desc: "Create and backtest trading strategies without coding. Algo trading made simple." },
    { src: "media/images/smallcaseLogo.png", alt: "Smallcase", desc: "Invest in diversified, theme-based portfolios curated by experts." },
    { src: "media/images/dittoLogo.png", alt: "Ditto", desc: "Compare and buy insurance policies online with unbiased advice." },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="fs-4 text-muted">The Finora Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        {partners.map((p, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-2 text-center p-3">
            <img src={p.src} alt={p.alt} className="img-fluid mb-3" style={{ maxHeight: "50px", objectFit: "contain" }} />
            <p className="text-muted" style={{ fontSize: "13px" }}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 px-5"
          style={{ minWidth: "220px", display: "inline-block" }}
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default ProductPage;

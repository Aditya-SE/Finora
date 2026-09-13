import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container py-3">
      <div className="row p-3 p-md-5 align-items-center">
        <div className="col-12 col-lg-6 p-3 p-md-4">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Finora with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Finora universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-lg-6 p-3 p-md-4 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Finora Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link
              to="/product"
              style={{ textDecoration: "none" }}
              className="fw-medium"
            >
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
            </Link>
            <Link
              to="/signup"
              style={{ textDecoration: "none" }}
              className="fw-medium"
            >
              Try Kite demo{" "}
              <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

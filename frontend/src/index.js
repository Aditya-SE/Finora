import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import SignupPage from "./landing_page/signup/Signup";
import LoginPage from "./landing_page/login/Login";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

function DashboardRedirect() {
  React.useEffect(() => {
    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");

    const baseUrl = isLocal
      ? "http://localhost:3001"
      : process.env.REACT_APP_DASHBOARD_URL ||
        "https://finora-dashboard-0jdh.onrender.com";

    const token = localStorage.getItem("finora_auth_token");
    const user = localStorage.getItem("finora_user");

    if (token) {
      const userParam = user ? `&user=${encodeURIComponent(user)}` : "";
      window.location.href = `${baseUrl}?token=${encodeURIComponent(
        token
      )}${userParam}`;
    } else {
      window.location.href = `${baseUrl}`;
    }
  }, []);

  return (
    <div className="container py-5 text-center my-5">
      <div className="spinner-border text-primary mb-3" role="status"></div>
      <p className="text-muted">Navigating to Finora Dashboard...</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardRedirect />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

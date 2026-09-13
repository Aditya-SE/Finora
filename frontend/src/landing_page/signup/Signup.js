import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Validation
    if (!username.trim()) {
      setError("Full name is required.");
      return;
    }
    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError(
        "Please enter a valid email or Gmail address (e.g., user@gmail.com)."
      );
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please re-enter.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://finora-mdyk.onrender.com/auth/signup",
        {
          username: username.trim(),
          email: email.trim().toLowerCase(),
          password,
        }
      );

      const { token, user } = response.data;

      // Save locally on frontend
      try {
        localStorage.setItem("finora_auth_token", token);
        localStorage.setItem("finora_user", JSON.stringify(user));
      } catch (err) {
        console.warn("Storage error:", err);
      }

      // Seamless redirect to Dashboard (port 3001) passing token
      const dashboardUrl = `https://finora-dashboard-0jdh.onrender.com?token=${encodeURIComponent(
        token
      )}&user=${encodeURIComponent(JSON.stringify(user))}`;

      window.location.href = dashboardUrl;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError(
          "Unable to connect to Finora authentication service. Please ensure the backend is running."
        );
      }
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 my-3">
      <div className="text-center mb-5">
        <h1 className="fs-2 fw-semibold text-dark">
          Open a free Finora trading account
        </h1>
        <p className="text-muted fs-5 mt-2">
          Invest in stocks, derivatives, and mutual funds with ₹0 brokerage on
          equity delivery
        </p>
      </div>

      <div className="row align-items-center justify-content-center g-5">
        <div className="col-12 col-lg-6 text-center">
          <img
            src="media/images/signup.png"
            alt="Finora Signup"
            className="img-fluid"
            style={{ maxWidth: "480px" }}
          />
        </div>

        <div className="col-12 col-lg-5 col-xl-4">
          <div className="p-4 p-md-5 border rounded shadow-sm bg-white">
            <form onSubmit={handleSubmit}>
              <h2 className="fs-4 fw-bold mb-2">Create Account</h2>
              <p className="text-muted small mb-4">
                Sign up with your Gmail / email to get started
              </p>

              {error && (
                <div className="alert alert-danger py-2 small" role="alert">
                  {error}
                </div>
              )}

              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="form-label small fw-semibold text-secondary"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label small fw-semibold text-secondary"
                >
                  Gmail / Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="e.g. rahul@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label small fw-semibold text-secondary"
                >
                  Password (min 6 characters)
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="form-label small fw-semibold text-secondary"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-100 py-2 fw-semibold"
                style={{ backgroundColor: "#387ed1", borderColor: "#387ed1" }}
              >
                {loading ? "Creating Account..." : "Signup & Enter Dashboard"}
              </button>

              <div className="mt-4 pt-3 border-top text-center">
                <span className="text-muted small">
                  Already have an account?{" "}
                </span>
                <Link
                  to="/login"
                  className="text-primary text-decoration-none fw-semibold small"
                >
                  Log in
                </Link>
              </div>
            </form>
          </div>

          <div className="text-center mt-3">
            <p
              className="text-muted"
              style={{ fontSize: "0.75rem", lineHeight: "1.4" }}
            >
              By signing up, you agree to Finora’s{" "}
              <a
                href="#terms"
                className="text-decoration-none text-muted fw-semibold"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#privacy"
                className="text-decoration-none text-muted fw-semibold"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const { email, password } = formData;

    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email or Gmail address.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://finora-mdyk.onrender.com/auth/login",
        {
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
      const dashboardUrl = `http://localhost:3001?token=${encodeURIComponent(
        token
      )}&user=${encodeURIComponent(JSON.stringify(user))}`;

      window.location.href = dashboardUrl;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError(
          "Unable to authenticate. Please ensure the backend is running."
        );
      }
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 my-3">
      <div className="text-center mb-5">
        <h1 className="fs-2 fw-semibold text-dark">Welcome back to Finora</h1>
        <p className="text-muted fs-5 mt-2">
          Log in to your account to access live charts, orders, and portfolio
        </p>
      </div>

      <div className="row align-items-center justify-content-center g-5">
        <div className="col-12 col-lg-5 col-xl-4" style={{ width: "600px" }}>
          <div className="p-4 p-md-5 border rounded shadow-sm bg-white">
            <form onSubmit={handleSubmit}>
              <h2 className="fs-4 fw-bold mb-2">Log in</h2>
              <p className="text-muted small mb-4">
                Use your registered Gmail / email address
              </p>

              {error && (
                <div className="alert alert-danger py-2 small" role="alert">
                  {error}
                </div>
              )}

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
                  placeholder="e.g. user@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label
                    htmlFor="password"
                    className="form-label small fw-semibold text-secondary mb-0"
                  >
                    Password
                  </label>
                </div>
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

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-100 py-2 fw-semibold"
                style={{ backgroundColor: "#387ed1", borderColor: "#387ed1" }}
              >
                {loading ? "Authenticating..." : "Log in to Dashboard"}
              </button>

              <div className="mt-4 pt-3 border-top text-center">
                <span className="text-muted small">
                  Don't have an account?{" "}
                </span>
                <Link
                  to="/signup"
                  className="text-primary text-decoration-none fw-semibold small"
                >
                  Sign up for free
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

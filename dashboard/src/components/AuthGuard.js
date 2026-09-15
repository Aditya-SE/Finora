import React, { useEffect, useState } from "react";

const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // 1. Check URL query parameters (transferred from Frontend on port 3000)
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get("token");
    const userParam = params.get("user");

    if (tokenParam) {
      try {
        localStorage.setItem("finora_auth_token", tokenParam);
        if (userParam) {
          localStorage.setItem("finora_user", userParam);
        }
        // Remove token from address bar for clean presentation
        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
        setIsAuthenticated(true);
        setChecking(false);
        return;
      } catch (e) {
        console.warn("Error storing auth token from URL", e);
      }
    }

    // 2. Check localStorage
    const savedToken = localStorage.getItem("finora_auth_token");
    if (savedToken && savedToken.trim().length > 0) {
      // Valid token found — grant access to the dashboard
      setIsAuthenticated(true);
      setChecking(false);
      return;
    }

    // 3. No token found — block access
    setIsAuthenticated(false);
    setChecking(false);
  }, []);

  if (checking) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#555",
        }}
      >
        <p>Verifying authentication...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "460px",
            background: "#fff",
            padding: "36px",
            borderRadius: "6px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            border: "1px solid #eee",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#fee2e2",
              color: "#dc2626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px auto",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            🔒
          </div>
          <h2
            style={{ fontSize: "1.25rem", color: "#222", marginBottom: "8px" }}
          >
            Access Restricted
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "0.9rem",
              lineHeight: "1.5",
              marginBottom: "20px",
            }}
          >
            You must be logged in to your Finora account to access the trading
            terminal. Redirecting you to the login page...
          </p>
          <a
            href={
              typeof window !== "undefined" &&
              (window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1")
                ? "http://localhost:3000/login"
                : process.env.REACT_APP_FRONTEND_URL
                ? `${process.env.REACT_APP_FRONTEND_URL}/login`
                : "https://finora-frontend-d720.onrender.com/login"
            }
            style={{
              display: "inline-block",
              backgroundColor: "#387ed1",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            Log in Now
          </a>
        </div>
      </div>
    );
  }

  return children;
};

export default AuthGuard;

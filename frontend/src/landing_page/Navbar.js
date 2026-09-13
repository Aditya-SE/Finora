import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("finora_user");
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.warn("Error reading user from storage", err);
    }
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleLinkClick = () => setIsNavCollapsed(true);

  const handleLogout = () => {
    try {
      localStorage.removeItem("finora_auth_token");
      localStorage.removeItem("finora_user");
    } catch (err) {
      console.warn("Logout storage error", err);
    }
    setCurrentUser(null);
    window.location.href = "/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/images/logo.svg"
            alt="Finora Logo"
            style={{ width: "140px", height: "auto" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-end`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
            {currentUser ? (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link fw-semibold text-primary"
                    href="https://finora-dashboard-0jdh.onrender.com"
                  >
                    Launch Dashboard →
                  </a>
                </li>
                <li className="nav-item">
                  <span className="nav-link text-dark fw-medium">
                    Hi, {currentUser.username}
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/signup"
                    onClick={handleLinkClick}
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/login"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/product"
                onClick={handleLinkClick}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/pricing"
                onClick={handleLinkClick}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/support"
                onClick={handleLinkClick}
              >
                Support
              </Link>
            </li>

            {currentUser && (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm ms-lg-3 my-2 my-lg-0"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

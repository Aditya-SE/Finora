import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("finora_user");
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.warn("Failed to load user profile in Menu", e);
    }
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const getInitials = () => {
    if (!currentUser || !currentUser.username) return "FU";
    const parts = currentUser.username.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return currentUser.username.slice(0, 2).toUpperCase();
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("finora_auth_token");
      localStorage.removeItem("finora_user");
    } catch (err) {
      console.warn("Logout error:", err);
    }
    // Redirect to Finora frontend home page
    window.location.href = "http://localhost:3000";
  };

  const isSelected = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const getMenuClass = (path) => {
    return isSelected(path) ? "menu selected" : "menu";
  };

  return (
    <div className="menu-container">
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <img src="logo.png" alt="Finora" style={{ width: "40px" }} />
      </Link>
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={getMenuClass("/")}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={getMenuClass("/orders")}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={getMenuClass("/holdings")}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={getMenuClass("/positions")}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={getMenuClass("/funds")}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={getMenuClass("/apps")}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div className="avatar">{getInitials()}</div>
          <p className="username">
            {currentUser?.username
              ? currentUser.username.split(" ")[0].toUpperCase()
              : "USERID"}
          </p>

          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown"
              style={{
                position: "absolute",
                top: "120%",
                right: 0,
                backgroundColor: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                width: "230px",
                zIndex: 1000,
                padding: "14px",
                textAlign: "left",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  borderBottom: "1px solid #eee",
                  paddingBottom: "8px",
                  marginBottom: "8px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#333",
                  }}
                >
                  {currentUser?.username || "Finora Trader"}
                </p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "#888" }}>
                  {currentUser?.email || "trader@finora.com"}
                </p>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "0.85rem",
                }}
              >
                <li style={{ padding: "6px 0" }}>
                  <Link
                    to="/funds"
                    style={{ textDecoration: "none", color: "#444" }}
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Funds: <strong style={{ color: "#387ed1" }}>₹4,043.10</strong>
                  </Link>
                </li>
                <li style={{ padding: "6px 0" }}>
                  <Link
                    to="/holdings"
                    style={{ textDecoration: "none", color: "#444" }}
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Holdings Portfolio
                  </Link>
                </li>
                <li style={{ padding: "6px 0" }}>
                  <a
                    href="http://localhost:3000"
                    style={{ textDecoration: "none", color: "#387ed1" }}
                  >
                    Finora Website Home
                  </a>
                </li>
                <li
                  style={{
                    padding: "8px 0 2px 0",
                    borderTop: "1px solid #eee",
                    marginTop: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#d93025",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;

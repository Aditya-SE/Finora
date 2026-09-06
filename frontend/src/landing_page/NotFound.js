import React, { useState } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  const [hover, setHover] = useState(false);
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h1 className="mt-4 fs-2">404 Not Found</h1>
        <p className="mb-4">
          We couldn't find the page you were looking for. Visit &nbsp;
          <Link
            to="/"
            style={{
              color: "blue",
              textDecoration: "none",
              color: hover ? "black" : "blue",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Zerodha's home page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;

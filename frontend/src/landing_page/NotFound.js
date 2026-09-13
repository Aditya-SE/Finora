import React, { useState } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  const [hover, setHover] = useState(false);
  return (
    <div className="container py-5 my-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-4 fs-1">404 Not Found</h1>
          <p className="mb-4 fs-5 text-muted">
            We couldn't find the page you were looking for. Visit &nbsp;
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: hover ? "#1e5ca8" : "#387ed1",
                fontWeight: 500,
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Finora's home page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

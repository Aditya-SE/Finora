import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "13px" }}
            className="text-muted "
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of 50+ GST
              per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              220 per contract note. Courier charges apply.
            </li>
            <li>
              For NRi account (non-PIS), 0.5% or 100 per executed order for
              equity (whichever is lower)
            </li>
            <li>
              For NRI account (PIS), 0,5% or 2200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 240 per executed order instead of 20 per executed order
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
          <ul
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "13px",
              listStyle: "none",
              paddingLeft: "0",
            }}
            className="text-muted"
          >
            {" "}
            <li>
              {" "}
              <strong>Equity Delivery:</strong> ₹0 brokerage{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Intraday:</strong> ₹20 or 0.03% per executed order{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Futures:</strong> ₹20 or 0.03% per executed order{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Options:</strong> ₹20 per executed order{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>Account Opening:</strong> Free{" "}
            </li>{" "}
            <li>
              {" "}
              <strong>AMC:</strong> ₹0 for eligible accounts{" "}
            </li>{" "}
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

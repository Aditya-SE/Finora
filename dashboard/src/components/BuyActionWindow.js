import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, initialPrice = 0 }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(initialPrice || 100.0);
  const [selectedExchange, setSelectedExchange] = useState("NSE");
  const [activeTab, setActiveTab] = useState("Regular");
  const [orderType, setOrderType] = useState("CNC");

  const generalContext = useContext(GeneralContext);

  const marginRequired = Number(stockQuantity || 0) * Number(stockPrice || 0);

  const handleBuyClick = () => {
    const orderData = {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "BUY",
      product: orderType,
      exchange: selectedExchange,
      createdAt: new Date().toISOString(),
    };

    // Save locally for instant offline availability in Orders view
    try {
      const existingOrders = JSON.parse(localStorage.getItem("finora_orders") || "[]");
      localStorage.setItem("finora_orders", JSON.stringify([orderData, ...existingOrders]));
    } catch (e) {
      console.warn("Could not save order locally", e);
    }

    // Attempt backend persistence
    axios
      .post("http://localhost:3002/newOrder", orderData)
      .catch((err) => {
        console.warn("Order saved locally (backend unreachable):", err.message);
      });

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="header">
        <h3>
          Buy {uid} <span>x {stockQuantity} Qty</span>
        </h3>
        <div className="market-options">
          <label>
            <input
              type="radio"
              name="exchange"
              value="NSE"
              checked={selectedExchange === "NSE"}
              onChange={() => setSelectedExchange("NSE")}
            />
            NSE: ₹{Number(stockPrice || 0).toFixed(2)}
          </label>
          <label>
            <input
              type="radio"
              name="exchange"
              value="BSE"
              checked={selectedExchange === "BSE"}
              onChange={() => setSelectedExchange("BSE")}
            />
            BSE: ₹{Number(stockPrice || 0).toFixed(2)}
          </label>
        </div>
      </div>

      <div className="tab">
        <button
          type="button"
          style={{
            borderBottom: activeTab === "Regular" ? "2px solid #4184f3" : "none",
            fontWeight: activeTab === "Regular" ? 600 : 400,
          }}
          onClick={() => setActiveTab("Regular")}
        >
          Regular
        </button>
        <button
          type="button"
          style={{
            borderBottom: activeTab === "AMO" ? "2px solid #4184f3" : "none",
            fontWeight: activeTab === "AMO" ? 600 : 400,
          }}
          onClick={() => setActiveTab("AMO")}
        >
          AMO
        </button>
      </div>

      <div className="regular-order">
        <div className="order-validity" style={{ marginBottom: "12px", width: "100%" }}>
          <label style={{ marginRight: "16px" }}>
            <input
              type="radio"
              name="product"
              value="CNC"
              checked={orderType === "CNC"}
              onChange={() => setOrderType("CNC")}
            />{" "}
            Longterm (CNC)
          </label>
          <label>
            <input
              type="radio"
              name="product"
              value="MIS"
              checked={orderType === "MIS"}
              onChange={() => setOrderType("MIS")}
            />{" "}
            Intraday (MIS)
          </label>
        </div>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) =>
                setStockQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
              }
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0.05"
              onChange={(e) => setStockPrice(parseFloat(e.target.value) || 0)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹
          {marginRequired.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </button>
          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;

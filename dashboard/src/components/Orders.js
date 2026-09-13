import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    setLoading(true);
    let localOrders = [];
    try {
      localOrders = JSON.parse(localStorage.getItem("finora_orders") || "[]");
    } catch (e) {
      console.warn("Error parsing local orders", e);
    }

    axios
      .get("https://finora-mdyk.onrender.com/allOrders")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          // Merge backend orders with unique local orders
          const combined = [...res.data];
          localOrders.forEach((lo) => {
            const exists = combined.some(
              (bo) =>
                bo.name === lo.name &&
                bo.qty === lo.qty &&
                Number(bo.price) === Number(lo.price) &&
                bo.mode === lo.mode
            );
            if (!exists) combined.unshift(lo);
          });
          setAllOrders(combined);
        } else {
          setAllOrders(localOrders);
        }
      })
      .catch((err) => {
        console.warn(
          "Could not fetch orders from backend, showing local:",
          err.message
        );
        setAllOrders(localOrders);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleClearOrders = () => {
    localStorage.removeItem("finora_orders");
    setAllOrders([]);
  };

  return (
    <div className="orders">
      {allOrders.length === 0 && !loading ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn btn-blue">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h3 className="title" style={{ margin: 0 }}>
              Orders ({allOrders.length})
            </h3>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                type="button"
                onClick={fetchOrders}
                className="btn btn-blue"
                style={{ fontSize: "0.8rem", padding: "6px 14px" }}
              >
                Refresh
              </button>
              {allOrders.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearOrders}
                  className="btn btn-grey"
                  style={{ fontSize: "0.8rem", padding: "6px 14px" }}
                >
                  Clear History
                </button>
              )}
            </div>
          </div>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Instrument</th>
                  <th>Product</th>
                  <th>Qty.</th>
                  <th>LTP / Executed</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, index) => {
                  const isBuy = order.mode === "BUY";
                  const orderDate = order.createdAt
                    ? new Date(order.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })
                    : "10:15:22";

                  return (
                    <tr key={index}>
                      <td style={{ color: "#888", fontSize: "0.85rem" }}>
                        {orderDate}
                      </td>
                      <td>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "3px 8px",
                            borderRadius: "3px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            backgroundColor: isBuy ? "#e8f0fe" : "#fce8e6",
                            color: isBuy ? "#1a73e8" : "#d93025",
                          }}
                        >
                          {order.mode}
                        </span>
                      </td>
                      <td style={{ fontWeight: 600 }}>{order.name}</td>
                      <td style={{ color: "#666" }}>
                        {order.product || "CNC"}
                      </td>
                      <td>{order.qty}</td>
                      <td>₹{Number(order.price || 0).toFixed(2)}</td>
                      <td>
                        <span
                          style={{
                            color: "#0f9d58",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                          }}
                        >
                          COMPLETE
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;

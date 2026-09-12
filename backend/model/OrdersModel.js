const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchemas");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };

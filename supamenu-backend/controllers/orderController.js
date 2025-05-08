const Order = require("../models/order.js");

exports.createOrder = async (req, res) => {
  const { clientId, restaurantId, status } = req.body;
  try {
    const order = new Order({ clientId, restaurantId, status });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.json({ message: "order found", order: order });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

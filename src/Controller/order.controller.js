const { OrderService } = require("../Services/order.service.js");

const OrderController = {
  create: async (req, res) => {
    const { userId, items } = req.body;

    const orderData = await OrderService.createOrder(userId, items);

    res.json({
      message: "Order created successfully",
      data: orderData
    });
  },

  getOrders: async (req, res) => {
    const orders = await OrderService.getOrders();
    res.json(orders);
  }
};

module.exports = { OrderController };
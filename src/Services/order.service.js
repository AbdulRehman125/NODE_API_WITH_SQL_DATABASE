const {OrderModel} = require("../Models/order.model.js");
const { db } = require("../Config/db.js");

const OrderService = {
  createOrder: async (userId, items) => {
    let total = 0;

    for (let item of items) {
      total += item.price * item.quantity;
    }

    const orderId = await OrderModel.createOrder(db, userId, total);

    for (let item of items) {
      await OrderModel.addOrderItem(db, orderId, item.id, item.quantity);
    }

    return { orderId, total };
  },

  getOrders: () => OrderModel.getAll(db)
};

module.exports = { OrderService };
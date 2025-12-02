 const OrderModel = {
  createOrder: async (db, userId, total) => {
    const [result] = await db.query(
      "INSERT INTO orders (user_id, total) VALUES (?, ?)",
      [userId, total]
    );
    return result.insertId;
  },

  addOrderItem: async (db, orderId, productId, qty) => {
    await db.query(
      "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)",
      [orderId, productId, qty]
    );
  },

  getAll: async (db) => {
    const [rows] = await db.query(`
      SELECT o.id, o.total, o.created_at,
             oi.product_id, oi.quantity
      FROM orders o
      LEFT JOIN order_items oi
      ON o.id = oi.order_id
    `);

    return rows;
  }
};

module.exports = { OrderModel };
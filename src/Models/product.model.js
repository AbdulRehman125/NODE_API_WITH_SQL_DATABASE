const db = require("../Config/db.js");

const ProductModel = {
  getAll: async (db) => {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
  },

  getById: async (db, id) => {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    return rows[0];
  }
};

module.exports = { ProductModel };
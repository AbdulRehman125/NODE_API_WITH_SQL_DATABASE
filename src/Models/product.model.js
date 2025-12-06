// const db = require("../Config/db.js");

// const ProductModel = {
//   getAll: async (db) => {
//     const [rows] = await db.query("SELECT * FROM products");
//     return rows;
//   },

//   getById: async (db, id) => {
//     const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
//     return rows[0];
//   }
// };

// module.exports = { ProductModel };



module.exports = {
  createProduct: "INSERT INTO product (name, price, image) VALUES (?, ?, ?)",
  getAllProducts: "SELECT * FROM product",
  getProductById: "SELECT * FROM product WHERE id = ?",
  updateProduct:
    "UPDATE product SET name = ?, price = ?, image = ? WHERE id = ?",
  deleteProduct: "DELETE FROM product WHERE id = ?"
};
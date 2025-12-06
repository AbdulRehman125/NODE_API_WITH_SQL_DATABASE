// const { ProductModel } = require("../Models/product.model.js");
// const { db } = require("../Config/db.js");

// const ProductService = {
//   getProducts: () => ProductModel.getAll(db),
//   getProduct: (id) => ProductModel.getById(db, id),
// };

// module.exports = { ProductService };



const db = require("../Config/db.js"); // make sure db.js exports directly db
const queries = require("../Models/product.model.js");

exports.create = async (name, price, image) => {
  try {
    const [result] = await db.query(queries.createProduct, [name, price, image]);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.getAll = async () => {
  try {
    const [rows] = await db.query(queries.getAllProducts);
    return rows;
  } catch (err) {
    throw err;
  }
};

exports.getById = async (id) => {
  try {
    const [rows] = await db.query(queries.getProductById, [id]);
    return rows[0]; // single product
  } catch (err) {
    throw err;
  }
};

exports.update = async (id, name, price, image) => {
  try {
    const [result] = await db.query(queries.updateProduct, [name, price, image, id]);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.remove = async (id) => {
  try {
    const [result] = await db.query(queries.deleteProduct, [id]);
    return result;
  } catch (err) {
    throw err;
  }
};

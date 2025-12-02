const { ProductModel } = require("../Models/product.model.js");
const { db } = require("../Config/db.js");

const ProductService = {
  getProducts: () => ProductModel.getAll(db),
  getProduct: (id) => ProductModel.getById(db, id),
};

module.exports = { ProductService };
const { ProductService } = require("../Services/product.service.js");

const ProductController = {
  getAll: async (req, res) => {
    const products = await ProductService.getProducts();
    res.json(products);
  },

  getOne: async (req, res) => {
    const id = req.params.id;
    const product = await ProductService.getProduct(id);

    if (!product) return res.status(404).json({ msg: "Not found" });

    res.json(product);
  }
};

module.exports = { ProductController };
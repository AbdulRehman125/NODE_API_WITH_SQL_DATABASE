// const { ProductService } = require("../Services/product.service.js");

// const ProductController = {
//   getAll: async (req, res) => {
//     const products = await ProductService.getProducts();
//     res.json(products);
//   },

//   getOne: async (req, res) => {
//     const id = req.params.id;
//     const product = await ProductService.getProduct(id);

//     if (!product) return res.status(404).json({ msg: "Not found" });

//     res.json(product);
//   }
// };

// module.exports = { ProductController };



const ProductService = require("../Services/product.service.js");

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file ? req.file.filename : null;

    await ProductService.create(name, price, image);
    res.json({ message: "Product created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const rows = await ProductService.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const rows = await ProductService.getById(req.params.id);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, oldImage } = req.body;
    const image = req.file ? req.file.filename : oldImage;

    await ProductService.update(req.params.id, name, price, image);

    res.json({ message: "Product updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await ProductService.remove(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

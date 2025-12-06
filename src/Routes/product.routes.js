// const express = require("express");
// const { ProductController } = require("../Controller/product.controller.js");

// const router = express.Router();

// router.get("/", ProductController.getAll);
// router.get("/:id", ProductController.getOne);

// module.exports = router;







const express = require("express");
const router = express.Router();
const ProductController = require("../Controller/product.controller");
const upload = require("../middlewares/upload");

router.post("/", upload.single("image"), ProductController.createProduct);
router.put("/:id", upload.single("image"), ProductController.updateProduct);
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;











// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const ProductController = require("../controllers/product.controller");

// // Multer Image Upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
// });
// const upload = multer({ storage });

// // ROUTES
// router.post("/", upload.single("image"), ProductController.createProduct);
// router.get("/", ProductController.getProducts);
// router.get("/:id", ProductController.getProduct);
// router.put("/:id", upload.single("image"), ProductController.updateProduct);
// router.delete("/:id", ProductController.deleteProduct);

// module.exports = router;

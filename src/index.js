const express = require("express");
const productRoutes = require("./Routes/product.routes.js");
const orderRoutes = require("./Routes/order.routes.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    return res.status(200).send({ 
        message: "welcome to ecommerce api node", 
        status: true 
    });
});

// API ROUTES
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;

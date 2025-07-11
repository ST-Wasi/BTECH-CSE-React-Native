import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { isSeller } from "../middlewares/isSeller.js";
import { Product } from "../Modals/Product.js";
import express from "express";
const router = express.Router();

router.get("/products", isAuthenticated, async (req, res) => {
  try {
    const products = await Product.find({price: {"$lt": 200}});
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: "Error Getting All Products",
      error: error,
    });
  }
});

router.get("/product/:id", isAuthenticated, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Error Getting Products",
      error: error,
    });
  }
});

router.delete("/product/:id", isAuthenticated, isSeller, async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Product ID Not Provided" });
    }
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(400).json({ message: "Product Not Found" });

    if (product.user != req.user._id) {
      return res
        .status(400)
        .json({
          message:
            "You are Not AUthorized To Delete This Product as it is Not Yours",
        });
    }
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Product Deleted" });
  } catch (error) {}
});

router.post("/create-product", isAuthenticated, isSeller, async (req, res) => {
  try {
    const { title, price, category, image, description } = req.body;
    if (!title || !price || !description || !image || !category)
      return res.status(400).json({ message: "Required Data Not Provided" });

    // i have assurity that i have all the details for the product

    await Product.create({
      title,
      price,
      category,
      image,
      description,
      user: req.user._id,
    });
    return res.status(201).json({
      message: "Product Created",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error Creating Product",
      error: error,
    });
  }
});

export default router;

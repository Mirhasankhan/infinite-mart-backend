import express from "express";
import { productController } from "./products.controller";

const router = express.Router();

router.post("/create-product", productController.createProduct);
router.get("/allProducts", productController.getAllProducts);
router.get("/searchedProducts", productController.getSearchedProducts);
router.patch("/:productId/reviews", productController.addReview);
router.patch("/:productId/quantity", productController.decreaseQuantity);

export const productRoutes = router;

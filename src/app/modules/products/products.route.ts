import express from "express";
import { productController } from "./products.controller";

const router = express.Router();

router.post("/create-product", productController.createProduct);
router.get("/allProducts", productController.getAllProducts);
router.get("/searchedProducts", productController.getSearchedProducts);
router.get("/categoryProduct", productController.getCategoryProduct);
router.patch("/:productId/reviews", productController.addReview);
router.patch("/:productId/quantity", productController.decreaseQuantity);
router.patch("/flash", productController.updateFlashSale);

export const productRoutes = router;

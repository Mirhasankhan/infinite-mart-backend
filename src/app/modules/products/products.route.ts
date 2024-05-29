import express from "express";
import { productController } from "./products.controller";

const router = express.Router();

router.post("/create-product", productController.createProduct);
router.get("/allProducts", productController.getAllProducts);

export const productRoutes = router;

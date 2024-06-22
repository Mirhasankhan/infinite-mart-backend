import express from "express";
import { cartController } from "./cart.controller";

const router = express.Router();

router.post("/add-cart", cartController.addToCart);
router.get("/allCart", cartController.getFullCart);
router.put("/update-quantity", cartController.updateCartQuantity);
router.delete("/delete/:id", cartController.deleteCart);

export const cartRoutes = router;

import express from "express";
import { cartController } from "./cart.controller";

const router = express.Router();

router.post("/add-cart", cartController.addToCart);
router.get("/allCart", cartController.getFullCart);

export const cartRoutes = router;

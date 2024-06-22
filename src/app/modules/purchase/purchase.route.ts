import express from "express";
import { purchaseController } from "./purchase.controller";

const router = express.Router();

router.post("/purchase-product", purchaseController.purchaseProduct);
router.get("/allPurchase", purchaseController.getAllPurchase);

export const purchaseRoutes = router;

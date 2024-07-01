import express from "express";
import { purchaseController } from "./purchase.controller";

const router = express.Router();

router.post("/purchase-product", purchaseController.purchaseProduct);
router.post("/create-payment-intent", purchaseController.createPaymentIntent);
router.get("/allPurchase", purchaseController.getAllPurchase);

export const purchaseRoutes = router;

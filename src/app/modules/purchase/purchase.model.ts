// products.model.ts
import { Schema, model } from "mongoose";
import { TPurchase } from "./purchase.interface";

const purchaseSchema = new Schema<TPurchase>({
  productName: { type: String, required: true },
  email: { type: String, required: true },
  userEmail: { type: String, required: true },
  cartId: { type: String, required: true },
  productId: { type: String, required: true },
  seller: { type: String, required: true },
  cartQuantity: { type: Number, required: true },
  image: {
    imageUrl: { type: String, required: true },
  },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  date: { type: String, required: true },
});

export const purchaseModel = model<TPurchase>("Purchase", purchaseSchema);

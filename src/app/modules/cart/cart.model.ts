import { Schema, model } from "mongoose";
import { TCart } from "./cart.interface";
const cartSchema = new Schema<TCart>({
  productName: { type: String, required: true },
  sellerEmail: { type: String, required: true },
  buyerEmail: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: String, required: true },
  flashSale: { type: Boolean, default: false },
});

export const cartModel = model<TCart>("cart", cartSchema);

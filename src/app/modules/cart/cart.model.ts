import { Schema, model } from "mongoose";
import { TCart } from "./cart.interface";
const cartSchema = new Schema<TCart>({
  productName: { type: String, required: true },
  seller: { type: String, required: true },
  userEmail: { type: String, required: true },
  email: { type: String, required: true },
  productId: { type: String, required: true },
  image: {
    imageUrl: { type: String, required: true },
  },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: Number, required: true },
  cartQuantity: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  flashSale: { type: Boolean, default: false },
});

export const cartModel = model<TCart>("cart", cartSchema);

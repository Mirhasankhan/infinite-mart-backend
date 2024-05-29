import { Schema, model } from "mongoose";
import { TProduct } from "./products.interface";

const productSchema = new Schema<TProduct>({
  productName: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: String, required: true },
  flashSale: { type: Boolean, default: false },
});

export const productModel = model<TProduct>("Products", productSchema);

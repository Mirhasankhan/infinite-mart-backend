// products.model.ts
import { Schema, model } from "mongoose";
import { TProduct } from "./products.interface";

const reviewSchema = new Schema({
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
});

const productSchema = new Schema<TProduct>({
  productName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid email!`,
    },
  },
  seller: { type: String, required: true },
  content: { type: String, required: true },
  quantity: { type: Number, required: true },
  sold: { type: Number },
  discountPercentage: { type: Number },
  image: {
    imageUrl: { type: String, required: true },
  },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: Number, required: true },
  flashSale: { type: Boolean, default: false },
  reviews: { type: [reviewSchema], default: [] },
});

export const productModel = model<TProduct>("Products", productSchema);

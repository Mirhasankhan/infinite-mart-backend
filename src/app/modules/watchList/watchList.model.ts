import { Schema, model } from "mongoose";
import { TWatchList } from "./watchList.interface";

const watchListSchema = new Schema<TWatchList>({
  productName: { type: String, required: true },
  seller: { type: String, required: true },
  buyerEmail: { type: String, required: true },
  image: {
    imageUrl: { type: String, required: true },
  },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: String, required: true },
  flashSale: { type: Boolean, default: false },
});

export const watchListModel = model<TWatchList>("watchlist", watchListSchema);

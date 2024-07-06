import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const addressSchema = new Schema({
  city: { type: String },
  province: { type: String },
  street: { type: String },
});

const userSchema = new Schema<TUser>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String, unique: true },
  password: { type: String, required: true },
  isSeller: { type: Boolean },
  image: {
    imageUrl: { type: String },
  },
  address: { type: addressSchema, default: {} },
});

export const userModel = model<TUser>("user", userSchema);

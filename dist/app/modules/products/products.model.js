"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
// products.model.ts
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
});
const productSchema = new mongoose_1.Schema({
    productName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email!`,
        },
    },
    seller: { type: String, required: true },
    content: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: {
        imageUrl: { type: String, required: true },
    },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    price: { type: Number, required: true },
    flashSale: { type: Boolean, default: false },
    reviews: { type: [reviewSchema], default: [] },
});
exports.productModel = (0, mongoose_1.model)("Products", productSchema);

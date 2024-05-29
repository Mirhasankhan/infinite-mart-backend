"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    productName: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    price: { type: String, required: true },
    flashSale: { type: Boolean, default: false },
});
exports.productModel = (0, mongoose_1.model)("Products", productSchema);

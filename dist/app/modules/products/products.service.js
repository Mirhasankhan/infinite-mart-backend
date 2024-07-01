"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDB = void 0;
const products_model_1 = require("./products.model");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.create(product);
    return result;
});
const getAllProductsFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const query = email ? { email: email } : {};
    const result = yield products_model_1.productModel.find(query);
    return result;
});
const getProductsBySearch = (search) => __awaiter(void 0, void 0, void 0, function* () {
    if (!search) {
        return [];
    }
    const query = { productName: { $regex: search, $options: "i" } };
    const result = yield products_model_1.productModel.find(query);
    return result;
});
const getSingleProductFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.findOne({ _id });
    return result;
});
const deleteProductFromDb = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.deleteOne({ _id });
    return result;
});
const updateProductFromDB = (_id, reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.findByIdAndUpdate(_id, { $push: { reviews: reviewData } }, { new: true });
    return result;
});
const decreaseProductQuantity = (_id, decreaseBy) => __awaiter(void 0, void 0, void 0, function* () {
    if (decreaseBy <= 0) {
        throw new Error("The decrease amount must be a positive number.");
    }
    const result = yield products_model_1.productModel.findByIdAndUpdate(_id, { $inc: { quantity: -decreaseBy } }, { new: true });
    if (!result) {
        throw new Error("Product not found.");
    }
    if (result.quantity < 0) {
        result.quantity = 0;
        yield result.save();
    }
    return result;
});
const updateProductOnSale = (_id, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.findByIdAndUpdate(_id, { $inc: { quantity: -quantity, sold: quantity } }, { new: true });
    return result;
});
exports.productDB = {
    createProductIntoDB,
    getAllProductsFromDB,
    deleteProductFromDb,
    updateProductFromDB,
    decreaseProductQuantity,
    updateProductOnSale,
    getProductsBySearch,
};

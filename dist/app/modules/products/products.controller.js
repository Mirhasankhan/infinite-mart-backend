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
exports.productController = void 0;
const products_service_1 = require("./products.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body.product;
        const result = yield products_service_1.productDB.createProductIntoDB(product);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: `something went wrong`,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield products_service_1.productDB.getAllProductsFromDB(email);
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving products",
        });
    }
});
const getSearchedProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        const result = yield products_service_1.productDB.getProductsBySearch(search);
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving products",
        });
    }
});
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const { username, rating, review } = req.body;
    if (!productId || !rating || !review) {
        return res
            .status(400)
            .json({ error: "Product ID, rating, and review are required." });
    }
    if (typeof rating !== "number" || typeof review !== "string") {
        return res
            .status(400)
            .json({ error: "Invalid data types for rating or review." });
    }
    if (rating < 1 || rating > 5) {
        return res.status(400).json({ error: "Rating must be between 1 and 5." });
    }
    try {
        const updatedProduct = yield products_service_1.productDB.updateProductFromDB(productId, {
            username,
            rating,
            review,
        });
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found." });
        }
        return res.status(200).json(updatedProduct);
    }
    catch (error) {
        return res
            .status(500)
            .json({ error: "An error occurred while updating the product." });
    }
});
const decreaseQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const { decreaseBy } = req.body;
    if (!productId || !decreaseBy) {
        return res
            .status(400)
            .json({ error: "Product ID and decrease amount are required." });
    }
    if (typeof decreaseBy !== "number" || decreaseBy <= 0) {
        return res.status(400).json({ error: "Invalid decrease amount." });
    }
    try {
        const updatedProduct = yield products_service_1.productDB.decreaseProductQuantity(productId, decreaseBy);
        return res.status(200).json(updatedProduct);
    }
    catch (error) {
        return res.status(500).json({ error: "error.message" });
    }
});
exports.productController = {
    createProduct,
    getAllProducts,
    addReview,
    decreaseQuantity,
    getSearchedProducts,
};

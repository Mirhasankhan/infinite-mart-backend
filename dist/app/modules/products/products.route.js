"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post("/create-product", products_controller_1.productController.createProduct);
router.get("/allProducts", products_controller_1.productController.getAllProducts);
router.get("/searchedProducts", products_controller_1.productController.getSearchedProducts);
router.patch("/:productId/reviews", products_controller_1.productController.addReview);
router.patch("/:productId/quantity", products_controller_1.productController.decreaseQuantity);
exports.productRoutes = router;

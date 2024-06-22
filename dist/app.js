"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_route_1 = require("./app/modules/products/products.route");
const cart_route_1 = require("./app/modules/cart/cart.route");
const user_route_1 = require("./app/modules/user/user.route");
const watchList_route_1 = require("./app/modules/watchList/watchList.route");
const purchase_route_1 = require("./app/modules/purchase/purchase.route");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/product", products_route_1.productRoutes);
app.use("/api/v1/cart", cart_route_1.cartRoutes);
app.use("/api/v1/auth", user_route_1.userRoutes);
app.use("/api/v1/watchList", watchList_route_1.watchListRoutes);
app.use("/api/v1/purchase", purchase_route_1.purchaseRoutes);
app.get("/", (req, res) => {
    res.send("Hello Worrld!");
});
exports.default = app;

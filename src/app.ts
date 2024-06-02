import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/products.route";
import { cartRoutes } from "./app/modules/cart/cart.route";
import { userRoutes } from "./app/modules/user/user.route";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/auth", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Worrld!");
});

export default app;

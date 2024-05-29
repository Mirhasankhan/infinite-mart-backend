import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/products.route";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Worrld!");
});

export default app;

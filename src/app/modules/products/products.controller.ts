import { Request, Response } from "express";
import { productDB } from "./products.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;
    const result = await productDB.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: `something went wrong`,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productDB.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productController = {
  createProduct,
  getAllProducts,
};

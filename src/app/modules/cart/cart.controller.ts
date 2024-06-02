import { Request, Response } from "express";
import { cartDb } from "./cart.service";

const addToCart = async (req: Request, res: Response) => {
  try {
    const cart = req.body;
    const result = await cartDb.addCartToDB(cart);

    res.status(200).json({
      success: true,
      message: "Added To Cart",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: `something went wrong`,
    });
  }
};

const getFullCart = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;

    const result = await cartDb.getAllCartFromDB(email);
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.error("Error retrieving products:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving products",
    });
  }
};

export const cartController = {
  addToCart,
  getFullCart,
};

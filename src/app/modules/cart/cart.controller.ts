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

const updateCartQuantity = async (req: Request, res: Response) => {
  try {
    const { cartId, newQuantity } = req.body;

    if (!cartId || !newQuantity || newQuantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid cart ID or quantity",
      });
    }

    const result = await cartDb.updateCartQuantity(cartId, newQuantity);

    res.status(200).json({
      success: true,
      message: "Cart quantity updated successfully",
      data: result,
    });
  } catch (err) {
    console.error("Error updating cart quantity:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating cart quantity",
    });
  }
};

const deleteCart = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await cartDb.deleteFromCart(id);
    res.status(200).json({
      success: true,
      message: `${id} deleted successfully`,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const cartController = {
  addToCart,
  getFullCart,
  updateCartQuantity,
  deleteCart,
};

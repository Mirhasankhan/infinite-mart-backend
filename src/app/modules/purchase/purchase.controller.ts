import { Request, Response } from "express";
import { purchaseDB } from "./purchase.service";
import { cartDb } from "../cart/cart.service";
import { productDB } from "../products/products.service";

const purchaseProduct = async (req: Request, res: Response) => {
  try {
    const products = req.body.products;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No products provided",
      });
    }
    const insertResults = await purchaseDB.createPurchaseIntoDB(products);

    const deleteResults = [];
    const updateResults = [];

    for (const product of products) {
      const cartId = product.cartId;
      const productId = product.productId;
      const cartQuantity = product.cartQuantity;

      const deleteResult = await cartDb.deleteFromCart(cartId);
      deleteResults.push(deleteResult);

      const updateResult = await productDB.updateProductOnSale(
        productId,
        cartQuantity
      );
      updateResults.push(updateResult);
    }

    res.status(200).json({
      success: true,
      message: "Purchased successfully",
      data: {
        insertResults,
        deleteResults,
        updateResults,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

const getAllPurchase = async (req: Request, res: Response) => {
  try {
    const email = req.query.userEmail;
    const result = await purchaseDB.getAllPurchedFromDB(email as string);
    res.status(200).json({
      success: true,
      message: "purchase retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving purchase",
    });
  }
};

export const purchaseController = {
  purchaseProduct,
  getAllPurchase,
};

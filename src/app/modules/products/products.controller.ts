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
    const email = req.query.email;
    const result = await productDB.getAllProductsFromDB(email as string);
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving products",
    });
  }
};

const getSearchedProducts = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string;
    const result = await productDB.getProductsBySearch(search);

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving products",
    });
  }
};

const addReview = async (req: Request, res: Response) => {
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
    const updatedProduct = await productDB.updateProductFromDB(productId, {
      username,
      rating,
      review,
    });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while updating the product." });
  }
};

const decreaseQuantity = async (req: Request, res: Response) => {
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
    const updatedProduct = await productDB.decreaseProductQuantity(
      productId,
      decreaseBy
    );
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ error: "error.message" });
  }
};

const updateFlashSale = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const result = await productDB.updateProductFlashSale(
      data._id,
      data.discountPercentage
    );

    res.status(200).json({
      success: true,
      message: "Product Added To Flash Sale",
      data: result,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  addReview,
  decreaseQuantity,
  getSearchedProducts,
  updateFlashSale,
};

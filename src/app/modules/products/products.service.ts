import { TProduct } from "./products.interface";
import { productModel } from "./products.model";

const createProductIntoDB = async (product: TProduct) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProductsFromDB = async (email: string, sortOption: string) => {
  const query = email ? { email: email } : {};
  const sortCriteria =
    sortOption === "highest"
      ? { price: -1 }
      : sortOption === "lowest"
      ? { price: 1 }
      : {};
  const result = await productModel.find(query).sort(sortCriteria as string);
  return result;
};

const getProductsBySearch = async (search: string) => {
  if (!search) {
    return [];
  }

  const query = { productName: { $regex: search, $options: "i" } };

  const result = await productModel.find(query);
  return result;
};

const updateProductFlashSale = async (
  _id: string,
  discountPercentage: number
) => {
  const result = await productModel.findByIdAndUpdate(
    _id,
    {
      $set: { flashSale: true, discountPercentage: discountPercentage },
    },
    { new: true }
  );
  return result;
};

const deleteProductFromDb = async (_id: string) => {
  const result = await productModel.deleteOne({ _id });
  return result;
};

const updateProductFromDB = async (
  _id: string,
  reviewData: { username: string; rating: number; review: string }
) => {
  const result = await productModel.findByIdAndUpdate(
    _id,
    { $push: { reviews: reviewData } },
    { new: true }
  );
  return result;
};

const decreaseProductQuantity = async (_id: string, decreaseBy: number) => {
  if (decreaseBy <= 0) {
    throw new Error("The decrease amount must be a positive number.");
  }

  const result = await productModel.findByIdAndUpdate(
    _id,
    { $inc: { quantity: -decreaseBy } },
    { new: true }
  );

  if (!result) {
    throw new Error("Product not found.");
  }

  if (result.quantity < 0) {
    result.quantity = 0;
    await result.save();
  }

  return result;
};

const updateProductOnSale = async (_id: string, quantity: number) => {
  const result = await productModel.findByIdAndUpdate(
    _id,
    { $inc: { quantity: -quantity, sold: quantity } },
    { new: true }
  );
  return result;
};

const getCategoryProductFromDB = async (category: string) => {
  const query = category ? { category: category } : {};
  const result = await productModel.find(query);
  return result;
};

export const productDB = {
  createProductIntoDB,
  getAllProductsFromDB,
  deleteProductFromDb,
  updateProductFromDB,
  decreaseProductQuantity,
  updateProductOnSale,
  getProductsBySearch,
  updateProductFlashSale,
  getCategoryProductFromDB,
};

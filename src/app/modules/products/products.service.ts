import { TProduct } from "./products.interface";
import { productModel } from "./products.model";

const createProductIntoDB = async (product: TProduct) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await productModel.find();
  return result;
};
const getSingleServiceFromDB = async (_id: string) => {
  const result = await productModel.findOne({ _id });
  return result;
};
const deleteServiceFromDb = async (_id: string) => {
  const result = await productModel.deleteOne({ _id });
  return result;
};

// const updateServiceFromDb = async (_id: string, updateData) => {
//   const result = await productModel.findByIdAndUpdate({ _id }, updateData, {
//     new: true,
//   });
//   return result;
// };

export const productDB = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleServiceFromDB,
  deleteServiceFromDb,
  //   updateServiceFromDb,
};

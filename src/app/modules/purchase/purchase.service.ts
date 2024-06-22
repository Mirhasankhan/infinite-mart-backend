import { TPurchase } from "./purchase.interface";
import { purchaseModel } from "./purchase.model";

const createPurchaseIntoDB = async (products: TPurchase[]) => {
  const results = await purchaseModel.insertMany(products);
  return results;
};

const getAllPurchedFromDB = async (email: string) => {
  const query = email ? { email: email } : {};
  const result = await purchaseModel.find(query);
  return result;
};

// const deleteProductFromDb = async (_id: string) => {
//   const result = await productModel.deleteOne({ _id });
//   return result;
// };

export const purchaseDB = {
  createPurchaseIntoDB,
  getAllPurchedFromDB,
};

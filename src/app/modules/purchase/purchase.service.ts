import { TPurchase } from "./purchase.interface";
import { purchaseModel } from "./purchase.model";

const createPurchaseIntoDB = async (products: TPurchase[]) => {
  const results = await purchaseModel.insertMany(products);
  return results;
};

const getAllPurchedFromDB = async (email: string) => {
  const query = email ? { userEmail: email } : {};
  const result = await purchaseModel.find(query);
  return result;
};
const getAllOrdersFromDB = async (email: string) => {
  const query = email ? { email: email } : {};
  const result = await purchaseModel.find(query);
  return result;
};

const updatePurchaseStatus = async (_id: string) => {
  const result = await purchaseModel.findByIdAndUpdate(
    _id,
    { status: "delivered" },
    { new: true }
  );
  return result;
};

export const purchaseDB = {
  createPurchaseIntoDB,
  getAllPurchedFromDB,
  getAllOrdersFromDB,
  updatePurchaseStatus,
};

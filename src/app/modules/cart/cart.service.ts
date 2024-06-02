import { TCart } from "./cart.interface";
import { cartModel } from "./cart.model";

const addCartToDB = async (cart: TCart) => {
  const result = await cartModel.create(cart);
  return result;
};

const getAllCartFromDB = async (email?: string) => {
  if (email) {
    return await cartModel.find({ buyerEmail: email });
  }
  // else {
  //   return await cartModel.find();
  // }
};

const getSingleServiceFromDB = async (_id: string) => {
  const result = await cartModel.findOne({ _id });
  return result;
};
const deleteServiceFromDb = async (_id: string) => {
  const result = await cartModel.deleteOne({ _id });
  return result;
};

// const updateServiceFromDb = async (_id: string, updateData) => {
//   const result = await cartModel.findByIdAndUpdate({ _id }, updateData, {
//     new: true,
//   });
//   return result;
// };

export const cartDb = {
  addCartToDB,
  getSingleServiceFromDB,
  getAllCartFromDB,
  //   deleteServiceFromDb,
  //   updateServiceFromDb,
};

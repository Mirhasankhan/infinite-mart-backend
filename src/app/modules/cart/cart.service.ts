import { TCart } from "./cart.interface";
import { cartModel } from "./cart.model";

const addCartToDB = async (cart: TCart) => {
  const result = await cartModel.create(cart);
  return result;
};

const getAllCartFromDB = async (email?: string) => {
  if (email) {
    return await cartModel.find({ userEmail: email });
  }
};

const deleteFromCart = async (cartId: string) => {
  const result = await cartModel.deleteOne({ _id: cartId });
  return result;
};

const updateCartQuantity = async (cartId: string, newQuantity: number) => {
  const cartItem = await cartModel.findById(cartId);
  if (!cartItem) {
    throw new Error("Cart item not found");
  }

  cartItem.cartQuantity = newQuantity;
  cartItem.totalCost = cartItem.price * newQuantity;

  const result = await cartItem.save();
  return result;
};

export const cartDb = {
  addCartToDB,
  updateCartQuantity,
  getAllCartFromDB,
  deleteFromCart,
};

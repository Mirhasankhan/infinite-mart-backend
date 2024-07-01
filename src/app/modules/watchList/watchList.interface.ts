import { Image } from "../products/products.interface";

export type TWatchList = {
  productName: string;
  seller: string;
  userEmail: string;
  email: string;
  productId: string;
  cartQuantity: number;
  totalCost: number;
  image: Image;
  price: number;
  category: string;
  subCategory: string;
  flashSale: boolean;
};

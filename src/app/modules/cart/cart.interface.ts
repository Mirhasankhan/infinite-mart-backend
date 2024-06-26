import { Image } from "../products/products.interface";

export type TCart = {
  productName: string;
  seller: string;
  email: string;
  userEmail: string;
  image: Image;
  price: number;
  cartQuantity: number;
  totalCost: number;
  category: string;
  subCategory: string;
  flashSale: boolean;
  productId: string;
};

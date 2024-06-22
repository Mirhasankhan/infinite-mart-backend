import { Image } from "../products/products.interface";

export type TWatchList = {
  productName: string;
  seller: string;
  buyerEmail: string;
  image: Image;
  price: string;
  category: string;
  subCategory: string;
  flashSale: boolean;
};

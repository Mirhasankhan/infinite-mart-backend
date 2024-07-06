import { Image } from "../products/products.interface";

export interface Address {
  city: string;
  province: string;
  street: string;
}

export type TUser = {
  name?: string;
  email: string;
  password: string;
  isSeller: boolean;
  phone?: string;
  image?: Image;
  address: Address;
};
